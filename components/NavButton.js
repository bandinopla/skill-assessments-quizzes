 /** 
 * Button component used on the quiz navigation ui
 * 
 * @param {object} param0 
 * @param {(ev:Event)=>void} param0.onClick click handler 
 */
export default function NavButton({ onClick, children }) {
	return (
		<button
			onClick={onClick}
			type="button"
			className="mx-3 rounded-md bg-slate-200 p-2 text-lg"
		>
			{children}
		</button>
	);
}
