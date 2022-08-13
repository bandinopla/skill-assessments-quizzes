import SyntaxHighlighter from "react-syntax-highlighter";

/**
 * This components renders when a code snipped is used in the markdown of a quiz
 */
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