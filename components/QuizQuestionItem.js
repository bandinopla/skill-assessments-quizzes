import { createContext, useContext } from "react";
import { QuizContext } from "../lib/QuizContext"; 

/**
 * Since we are parsing a markup, it could happen that the options on a quiz have also markup of lists inside of them...
 * So, since these lists will be childrens of this option, we'll create a context per each list item if non exists already
 * and if it does exist, it will mean we are a child list and should not be counted as a quiz answer option.
 */
export const OptionIndexContext = createContext(false);

/**
 * Well, the markups located at data/% are not filled all in the same way, some people nest a bunch of lists
 * or don't have much idea of how markup works... so we must scan for all the node tree to find our special keyword 
 * --
 * this solution is based on visual observation of the "broken" quizzes... this solves the broken pattern i manage to figure out... 
 * i not sure what other patter will break the quiz next... time will tell...
 */
function findIfImAQuizOption(node) {
    if( node.children )
    {
        return node.children.some( findIfImAQuizOption )
    }
    else 
    {
        return node?.value.indexOf("%OPTION%") == 0;
    }
}

/**
 * This items represents one option item of the many available in a question.
 */
export default function QuizQuestionItem({ children, ...props }) {
	
	/**
	 * @type {import('../lib/QuizContext').ContextType}
	 */
	const quizContext       = useContext(QuizContext); 
	const optionContext     = useContext(OptionIndexContext);
	const imAQuizOption     = findIfImAQuizOption(props.node);

	//
	// if optionContext exists, it means we are a nested list item inside another list within the option main item.
    // or if there's no optionCOntext but we dont contain the %OPTION% keyword... then we are not a quiz option item.
	//
	if ( optionContext || !imAQuizOption ) {
		return <li className="list-disc list-inside my-1">{children}</li>;
	}

	//
	// optionsContext starts at 0 so...
	//
	const myIndex = ++quizContext.optionIndex; //optionsContext.index++; //quizContext.optionIndex; //props.index;
	let bg = "bg-white";

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
	if (children[0].indexOf("%OPTION%") == 0) {
		children[0] = children[0].replace("%OPTION%", "");
	}

	return (
		<li
			className={
				"p-3 shadow-md m-2 cursor-pointer border-l-2 border-zinc-400 " + bg
			}
			onClick={onClick}
			optkey={`${myIndex}:${quizContext.answer}`}
		>
			<OptionIndexContext.Provider value={true}>
				{" "}
				{children}{" "}
			</OptionIndexContext.Provider>
		</li>
	);
}
