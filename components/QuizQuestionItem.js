import { createContext, useContext } from "react";
import { QuizContext } from "../lib/QuizContext";
import { OptionsContext } from "./QuizQuestionOptions";


/**
 * Since we are parsing a markup, it could happen that the options on a quiz have also markup of lists inside of them...
 * So, since these lists will be childrens of this option, we'll create a context per each list item if non exists already
 * and if it does exist, it will mean we are a child list and should not be counted as a quiz answer option.
 */
 export const OptionIndexContext = createContext(-1);

/**
 * This items represents one option item of the many available in a question.
 */
export default function QuizQuestionItem({ children, ...props }) { //console.log({ children, ...props })
	/**
	 * @type {import('../lib/QuizContext').ContextType}
	 */
	const quizContext       = useContext(QuizContext);
	const optionsContext    = useContext(OptionsContext);
	const optionIndex       = useContext(OptionIndexContext);

	//
	// we are not part of a group of options. OR we are a list item form another nested list inside of a quiz option...
	//
	if ( optionsContext.index<0 || optionIndex>-1 ) {
		return <li className="list-disc list-inside my-1">{children}</li>;
	}

    //
    // optionsContext starts at 0 so...
    //
	const myIndex   = optionsContext.index++; //quizContext.optionIndex; //props.index;
	let bg          = "bg-white";

	//
	// Was the question answered?
	//
	if (quizContext.answered > -1) {
		if (quizContext.answer == myIndex) {
			bg = "bg-green-300";
		} else if (quizContext.answered == myIndex) {
			bg = "bg-red-500";
		}
	}

	//
	// When the use clicks the option to respond...
	//
	const onClick = () => {
		if (quizContext.answered < 0) {
			quizContext.onAnswer(myIndex);
		}
	};

    //
    // remove the flag we added to recognize quiz options (avoiding false identification of nested child list items...)
    // @see <api.js>.parseQuiz
    //
    if( children[0].indexOf('%OPTION%')==0)
    {
        children[0] = children[0].replace("%OPTION%","");
    }

	return <li
				className={"p-3 shadow-md m-2 cursor-pointer border-l-2 border-zinc-400 " + bg}
				onClick={onClick}
			>
                <OptionIndexContext.Provider value={myIndex}>
				{" "}
				{children}{" "}
                </OptionIndexContext.Provider>
			</li>;
}
