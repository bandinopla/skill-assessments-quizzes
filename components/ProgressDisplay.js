
/**
 * Returns the a color assosiated to a "status" value...
 */
const score2color = new Map();
score2color.set(-1, "bg-slate-300");
score2color.set(0, "bg-red-500");
score2color.set(1, "bg-green-300");

/**
 * Displays the progress of the user in this quiz. 
 * 
 * @param {object} param0
 * @param {number} param0.totalQuestions total number of questions
 * @param {(questionNumber:number)=>number} param0.getQuestionStatus you pass in the question number (in the quiz) and it will return the status of that question.
 * @param {number} param0.currentQuestion the index of the current question
 * @param {(questionIndex:number)=>void} param0.onClickQuestion callback that must be called when the user clicks on a shortcut provided by this component to a particular question.
 */
export default function ProgressDisplay({
	totalQuestions,
	getQuestionStatus,
	currentQuestion,
    onClickQuestion
}) {
	return (
		<div className="flex flex-auto flex-row">
			{new Array(totalQuestions).fill(0).map((_, i) => {
				return (
					<div
						key={i}
						style={{ height: 30 }}
						className={
							" cursor-pointer grow border-b-2 border-l border-l-white " +
							score2color.get(getQuestionStatus(i)) +
							" " +
							(currentQuestion == i
								? "animate-bounce border-black"
								: "border-white")
						}
                        onClick={ ()=>onClickQuestion(i) }
					></div>
				);
			})}
		</div>
	);
}
