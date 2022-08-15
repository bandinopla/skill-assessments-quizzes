import { useState } from "react";

/** in memory storage */
const answers = new Map();


/**
 * This hook holds the state of a quiz.  
 */
export function useQuizSolvedState({ quizID, questionIndex }) {

    const [currentAnswer, setCurrentAnswer] = useState(-1);

    let base = {};

    if( answers.has(quizID) )
    {
        base = answers.get(quizID)

        let storedAnswer   = base.userAnswers.has(questionIndex)? base.userAnswers.get(questionIndex) : -1;
        if( currentAnswer != storedAnswer )
        {
            setCurrentAnswer( storedAnswer );
        }
    }
    else 
    {
        base = {
            correct:0,
            incorrect:0, 
            userAnswers: new Map()
        }

        answers.set( quizID, base )
    }


    return {
        ...base,

        /**
         * The current option index answered by the user
         */
        currentAnswer, 

        /**
         * Marks the current question as responded.
         * 
         * @param {number} optionIndex The option index the user responded
         * @param {number} rightAnswer If it is correct or not
         */
        answer: (optionIndex,rightAnswer) => {

            let isCorrect = optionIndex==rightAnswer;

            base.userAnswers.set( questionIndex, optionIndex );
            base.correct += isCorrect? 1 : 0;
            base.incorrect += isCorrect? 0 : 1;

            setCurrentAnswer(optionIndex)
        },


        /**
         * Get the status of a particular question. In regards to if it was answered or not by the current user.
         * 
         * @param {number} i Index of the question in a quiz
         * @returns {(-1|0|1)} -1 If it was not answered. 0 if it was answered incorrectly. 1 if it was correctly answered.
         */
        getQuestionUserAnswer: i=>{
            return base.userAnswers.has(i)? base.userAnswers.get(i) : -1
        },

        /**
         * Delete all answered data and start over.
         */
        reset:()=>{
            answers.delete(quizID) 
            setCurrentAnswer(-1)
        }
    };

}