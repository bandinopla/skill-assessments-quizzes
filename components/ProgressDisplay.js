const score2color = new Map();
score2color.set(-1, "bg-slate-300");
score2color.set(0, "bg-red-500");
score2color.set(1, "bg-green-300");

/**
 * Displays the progress of the user in this quiz. 
 * 
 * @param {{ totalQuestions:number, getQuestionStatus:(i:number)=>number, currentQuestion:number, onClickQuestion:(i:number)=>void }} param0
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
