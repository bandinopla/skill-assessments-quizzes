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
