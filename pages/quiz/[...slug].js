import { by639_1 } from 'iso-language-codes';
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import BasicPageLayout from "../../components/BasicPageLayout";
import { getAllQuizzes, parseQuiz } from "../../lib/api";

import Link from "next/link";
import NavButton from "../../components/NavButton";
import ProgressDisplay from "../../components/ProgressDisplay";
import QuizCodeSnipped from "../../components/QuizCodeSnipped";
import QuizImageRef from "../../components/QuizImageRef";
import QuizQuestionItem from "../../components/QuizQuestionItem";
import ScoreDisplay from "../../components/ScoreDisplay";
import { QuizContext, QuizContextParams } from "../../lib/QuizContext";
import { useQuizSolvedState } from "../../lib/QuizSolvedState";
import { getDictionary } from '../../lib/l18n';
import { useLanguage } from '../../components/LanguageProvider';
import Head from "next/head" 


const questionQueryName = 'question';

/**
 * 
 * @param {object} param0
 * @param {import('../../lib/api').Quiz} param0.quiz
 * @param {number} param0.question
 * @param {string} param0.lang
 * @param {string[]} param0.availableLanguages 
 *   
 */
const Quiz = ({ quiz, availableLanguages }) => {

	const router            = useRouter();
    const dictionary        = useLanguage();
    const question          = parseInt( router.query.question ) || 1;
	const totalQuestions    = quiz.questions.length;
	const questionIndex     = question - 1;
	const rightAnswer       = quiz.questions[questionIndex].answer;
	const state = useQuizSolvedState({
		quizID: quiz.folder,
		questionIndex,
	});

	//console.log( router.query.caca )

    const goToQuestion = i => {
        router.push( dictionary.path( router.asPath.split("?")[0]+`?${questionQueryName}=${i}` ) );  
    }

	//
	// move forward or backwards in the quiz...
	//
	const go = (dir, isResetting) => () => {
		let goal = question + dir; 
        if( isResetting ) {
            goal = 1 
            state.reset()
        }
		else if (goal < 1 || goal > totalQuestions) {
            return;
        }
 
		goToQuestion(goal) 
	};

	//
	// used by the progress display
	//
	const getQuestionStatus = (i) => {
		const rightAnswer = quiz.questions[i].answer;
		const userAnswer = state.getQuestionUserAnswer(i);

		return userAnswer < 0 ? -1 : userAnswer == rightAnswer ? 1 : 0;
	};

	return (<>

        <Head>
            <title>{quiz.title}</title>
        </Head>
		<BasicPageLayout  title={quiz.title}>

            <div className="absolute top-0 left-0 p-2 m-2 px-4 ">
                <Link href={ dictionary.path("/") } >{ "← " + dictionary.BACK_TO_HOME}</Link>
            </div>
			<div className="absolute top-0 right-0 p-2 m-2 px-4 ">


                {/* 
                    Render all available languages in which this quiz was translated 
                 */}
                
                
				
			</div> 

			<QuizContext.Provider
				value={QuizContextParams({
					quiz,
					question, 
					answered: state.currentAnswer,
					answer: rightAnswer,
					onAnswer: (i) => state.answer(i, rightAnswer),
				})}
			>
				<ScoreDisplay
					correct={state.correct}
					incorrect={state.incorrect}
					total={totalQuestions}
                    onClickReset={go(-1,true)}
				/>
				<ProgressDisplay
					totalQuestions={totalQuestions}
					currentQuestion={questionIndex}
					getQuestionStatus={getQuestionStatus}
                    onClickQuestion={ i=>goToQuestion(i+1) }
				/>

				<br />

                <div className='mb-4 text-sm text-center border border-dotted border-slate-200'>
                    { availableLanguages.length==1? dictionary.QUIZ_ONLY_AVAILABLE_IN : dictionary.QUIZ_AVAILABLE_IN}: 
                { availableLanguages.map( ({ key, name, isSelected })=>
                    <span key={key} className={"mx p-2 " + (isSelected? " bg-slate-200 rounded font-bold":"") }>
                        <Link href={ dictionary.path( "/quiz/"+(key=='en'?"":key+"/")+quiz.folder+"?"+questionQueryName+"="+question )}>{name}</Link>
                    </span> )}</div>

				<ReactMarkdown
					components={{
						li: QuizQuestionItem,
						code: QuizCodeSnipped,
						img: QuizImageRef, 
					}}
				>
					{quiz.questions[question - 1].text}
				</ReactMarkdown>
			</QuizContext.Provider>

			<div className="mt-10 text-center ">
				<NavButton onClick={go(-1)}>{dictionary.BUTTON_PREVIOUS}</NavButton> {question} of{" "}
				{totalQuestions} <NavButton onClick={go(1)}>{dictionary.BUTTON_NEXT}</NavButton>
			</div>

            <div className="text-xs mt-10 border-t pt-1">
                {dictionary.QUIZ} <a href={`https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/tree/main/${quiz.folder}`} target="_blank">
                    {dictionary.SOURCE_CODE}
                </a>
            </div>

		</BasicPageLayout>
        </>
	);
};


/**
 * Generates one path per quiz/language pair.
 */
export function getStaticPaths() {

	return {
		paths: getAllQuizzes().reduce((pathVariants, quiz) => {   

            //
            // for each available language
            //
            for (let lang in quiz.pathByLang )
            { 

                const quizPath      = quiz.pathByLang[lang];   
                const slugParams    = [quiz.folder];

                //
                // default language "english" doesn't need a specific slug key, only the rest.
                //
                if( lang!='en' )
                {
                    slugParams.unshift(lang); 
                }

                pathVariants.push({
                    params: {
                        slug: [ ...slugParams ],
                    },
                });
            }
             
			

			return pathVariants;
		}, []),

		fallback: false,
	};
}


export function getStaticProps({ params }) {

  
    let lang        = 'en';

    if( params.slug.length==2 )
    {
        lang = params.slug.shift();
    }

    const quizID                = params.slug[0];  
	const quiz                  = getAllQuizzes(quizID)[0]; 
    const availableLanguages    = [];
    const quizPath              = quiz.pathByLang[lang];
    const dicc                  = getDictionary('en')

    //
    // extract all available languages...
    //
    for (let langKey in quiz.pathByLang  )
    {
        availableLanguages.push({
            isSelected: lang==langKey,
            name: by639_1[langKey].nativeName,
            key: langKey
        })
    } 
    
	
	return {
		props: {
			quiz: { 
                folder: quiz.folder,
                path: quizPath,
                ...parseQuiz( quizPath )
            }, 
            lang,
            availableLanguages,
            dictionary: dicc
		},
	};
}

export default Quiz;
