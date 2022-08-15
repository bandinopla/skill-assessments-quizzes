import SyntaxHighlighter from "react-syntax-highlighter";

/**
 * This components renders when a code snipped is used in the markdown of a quiz
 * If the language of the snipped is specified, it will use the SyntaxHighlighter to handle the rendering.
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