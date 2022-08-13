import { useContext } from "react";
import { QuizContext } from "../lib/QuizContext";


/**
 * This items represents one option item of the many available in a question. 
 */
export default function QuizQuestionItem({ children }) {
	const quizContext = useContext(QuizContext);
	const myIndex = ++quizContext.optionIndex;
	let bg = "bg-white";

	if (quizContext.answered > -1) {
		if (quizContext.answer == myIndex) {
			bg = "bg-green-300";
		} else if (quizContext.answered == myIndex) {
			bg = "bg-red-500";
		}
	}

	const onClick = () => {
		if (quizContext.answered < 0) {
			quizContext.onAnswer(myIndex);
		}
	};

	return (
		<li className={"p-3 shadow-md m-2 cursor-pointer " + bg} onClick={onClick}>
			{" "}
			{children}{" "}
		</li>
	);
}
