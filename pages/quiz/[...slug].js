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
import { QuizContext } from "../../lib/QuizContext";
import { useQuizSolvedState } from "../../lib/QuizSolvedState";

/**
 * @param {{ quiz:import('../../lib/api').Quiz, question:number, lang:string, availableLanguages:string[] }} param0
 * @returns
 */
const Quiz = ({ quiz, question, availableLanguages }) => {
	const router = useRouter();
	const totalQuestions = quiz.questions.length;
	const questionIndex = question - 1;
	const rightAnswer = quiz.questions[questionIndex].answer;
	const state = useQuizSolvedState({
		quizID: quiz.folder,
		questionIndex,
	});

	//console.log( router.query.caca )

    const goToQuestion = i => router.push(router.asPath.replace(/\d+$/, i));

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

	return (
		<BasicPageLayout  title={quiz.title}>

            <div className="absolute top-0 left-0 p-2 m-2 px-4 ">
                <Link href="/" >← back to home </Link>
            </div>
			<div className="absolute top-0 right-0 p-2 m-2 px-4 ">


                { availableLanguages.map( ({ key, name, isSelected })=>
                    <span key={key} className={"mx-2 p-2 " + (isSelected? " bg-slate-200 rounded font-bold":"") }>
                        <Link href={"/quiz/"+(key=='en'?"":key+"/")+quiz.folder+"/"+question}>{name}</Link>
                    </span> )}

				
			</div> 

			<QuizContext.Provider
				value={{
					quiz,
					question,
					optionIndex: -1,
					answered: state.currentAnswer,
					answer: rightAnswer,
					onAnswer: (i) => state.answer(i, rightAnswer),
				}}
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
				<NavButton onClick={go(-1)}>Prev</NavButton> {question} of{" "}
				{totalQuestions} <NavButton onClick={go(1)}>Next</NavButton>
			</div>

            <div className="text-xs mt-10 border-t pt-1">
                Quiz <a href={`https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/tree/main/${quiz.folder}`} target="_blank">source code</a>
            </div>

		</BasicPageLayout>
	);
};

export function getStaticPaths() {

	return {
		paths: getAllQuizzes().reduce((pathVariants, quiz) => {  
             

            //
            // for each available language
            //
            for (let lang in quiz.pathByLang )
            { 

                const quizPath = quiz.pathByLang[lang]; 


                //
                // this is heavy, but since this only ran at build time... no problem.
                //
                const parsedQuiz = parseQuiz( quizPath );
                const slugParams = [quiz.folder];

                //
                // default language "english" doesn't need a specific slug key, only the rest.
                //
                if( lang!='en' )
                {
                    slugParams.unshift(lang); 
                }

                //
                // for each question in que quiz...
                // (all languages should have the same amount of questions obviously...)
                //
                parsedQuiz.questions.forEach((_, i) => { 
                    
                    pathVariants.push({
                        params: {
                            slug: [ ...slugParams, (i + 1).toString()],
                        },
                    });
                });
            }
             
			

			return pathVariants;
		}, []),

		fallback: false,
	};
}

export function getStaticProps({ params }) {

 
    let lang        = 'en';

    if( params.slug.length==3 )
    {
        lang = params.slug.shift();
    }

    const quizID    = params.slug[0];  
	const quiz      = getAllQuizzes(quizID)[0]; 
    const availableLanguages = [];
    const quizPath = quiz.pathByLang[lang];

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
			question: Number(params.slug.pop()),
            lang,
            availableLanguages
		},
	};
}

export default Quiz;
