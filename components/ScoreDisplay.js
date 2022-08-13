import NavButton from "./NavButton";

export default function ScoreDisplay({ correct, incorrect, total, onClickReset }) {
	return (
		<div className="p-2 text-center border border-dotted border-slate-200">



			score{" "}
			<span className="text-cyan-500 mx-2 font-bold">
				%{Math.round((correct / total) * 100)}
			</span>{" "}
			(<span className="text-green-500 mx-1">{correct} correct</span>
			<span className="text-red-500 mx-1">{incorrect} incorrect</span>
			<span className="text-stone-500 mx-1">
				{total - correct - incorrect} unanswered
			</span>
			)
            <NavButton onClick={()=>onClickReset()}>Reset</NavButton>
		</div>
	);
}
