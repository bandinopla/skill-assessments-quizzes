import SyntaxHighlighter from "react-syntax-highlighter";

export default function QuizCodeSnipped({ children, ...props }) {
	if (props.className) {
		return (
			<SyntaxHighlighter language={props.className.replace("language-", "")}>
				{props.node.children[0].value}
			</SyntaxHighlighter>
		);
	}
	return <code>{children}</code>;
}