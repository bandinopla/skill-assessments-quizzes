import { createContext } from "react";

/**
 * @typedef {object} ContextType 
 * @property {import('./api').Quiz} quiz the quiz data
 * @property {number} question the current question index
 * @property {number} optionIndex the current question index
 * @property {number} answered the option index that the user answered
 * @property {number} answer the correct option index to answer the question
 * @property {(answeredOptionIndex:number)=>void} onAnswer callback to be called when an option is called
*/

/** 
 * @param {ContextType} params 
 * @returns {ContextType}
 */
export function QuizContextParams(params){
    return { ...params, optionIndex: -1 }
}

/**
 * Context used by the quiz component to keep track of the user's progress. 
 */
export const QuizContext = createContext();