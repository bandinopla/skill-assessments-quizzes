import { createContext, useContext } from "react";
import { QuizContext } from "../lib/QuizContext";

/**
 * Since we are parsing a markup, it could happen that the options on a quiz have also markup of lists inside of them...
 * So, since these lists will be childrens of this option, we'll create a context per each list item if non exists already
 * and if it does exist, it will mean we are a child list and should not be counted as a quiz answer option.
 */
const OptionItemContext = createContext(-1);

/**
 * This items represents one option item of the many available in a question.
 */
export default function QuizQuestionItem({ children, ...props }) {
	/**
	 * @type {import('../lib/QuizContext').ContextType}
	 */
	const quizContext = useContext(QuizContext);
	const optionIndex = useContext(OptionItemContext);

	//
	// we are a child of the option
	//
	if (optionIndex != -1) {
		return <>{children}</>;
	}

	const myIndex = ++quizContext.optionIndex; //props.index;
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

	return (
		<OptionItemContext.Provider value={myIndex}>
			<li
				className={"p-3 shadow-md m-2 cursor-pointer " + bg}
				onClick={onClick}
			>
				{" "}
				{children}{" "}
			</li>
		</OptionItemContext.Provider>
	);
}
