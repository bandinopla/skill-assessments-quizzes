/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";
import { getStaticProps } from "../pages/index";
import { getStaticProps as getQuizStaticProps, default as QuizComponent } from "../pages/quiz/[...slug].js";
import Home from "../pages/index";
import MainApp from "../pages/_app";
import { parseQuiz } from "../lib/api";
import { QuizContext } from "../lib/QuizContext";


jest.mock('next/router', () => ({
    useRouter() {
        return ({
            route: '/',
            pathname: '',
            query: {},
            asPath: '',
            push: jest.fn(),
        });
    },
}));

jest.mock('react-syntax-highlighter', () => {
    return ({children})=><div>{children}</div>
});


const props = getStaticProps();

describe('Visual UI Testing...', () => {
    it("Home Renders Correctly", () => {

        const tree = renderer
            .create(<MainApp pageProps={props.props} Component={Home} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});


//
// for each quiz
//
describe.each(props.props.quizzes)(`$folder`, (quizInfo) => {

    //
    // we are going to check for the english versions... 
    // for now im going to assume the translations dont break anything regarding the quiz right or wrong status...
    //
    const questions = parseQuiz(quizInfo.pathByLang['en']).questions;
    const compProps = getQuizStaticProps({
        params: {
            slug: [quizInfo.folder]
        }
    }); 

    //
    // for each question of this quiz...
    //
    test.each(questions)(`${quizInfo.folder} :: question[$#] has an answer`, (question) => {

        const answer = question.answer;
        const questionIndex = questions.indexOf(question)

        jest.mock('next/router', () => ({
            useRouter() {
                return ({
                    route: '/',
                    pathname: '',
                    query: {
                        question: questionIndex + 1
                    },
                    asPath: ''
                });
            },
        }));

        //
        // let's see if the quiz page renders the right answer...
        //
        const tree = renderer.create(<MainApp pageProps={compProps.props} Component={QuizComponent} />)

        if( answer<0 )
        {
            expect(()=>tree.root.findByProps({ optkey:`${answer}:${answer}` }) ).toThrow();
        }
        else 
        {
            expect( ()=>{

                try {
                    tree.root.findByProps({ optkey:`${answer}:${answer}` })
                }
                catch(e)
                {
                    throw new Error(`Answer was not found. `)
                }
                

                return true;

            } ).toBeTruthy();
        } 
    })

});

