import { useLanguage } from "./LanguageProvider";
import NavButton from "./NavButton";


/**
 * Score stats UI
 */
export default function ScoreDisplay({ correct, incorrect, total, onClickReset }) {

    const dictionary        = useLanguage();

	return (
		<div className="p-2 text-center ">



			{ dictionary.SCORE + " "}
			<span className="text-cyan-500 mx-2 font-bold">
				%{Math.round((correct / total) * 100)}
			</span>{" "}
			(<span className="text-green-500 mx-1">{ dictionary.X_CORRECT.replace("__X__", correct)  }</span>
			<span className="text-red-500 mx-1">{ dictionary.X_INCORRECT.replace("__X__", incorrect) }</span>
			<span className="text-stone-500 mx-1">  
                { dictionary.X_UNANSWERED.replace("__X__", total - correct - incorrect) }
			</span>
			)
            <NavButton onClick={()=>onClickReset()}>{ dictionary.BUTTON_RESET }</NavButton>
		</div>
	);
}
