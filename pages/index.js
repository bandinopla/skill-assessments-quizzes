import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import { getAllQuizzes } from "../lib/api"; 
import { getDictionary } from "../lib/l18n";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "../components/LanguageProvider";

/**
 * Main page of the app. Renders all available quizes and their respective logos.
 *
 * @param {object} param0
 * @param {import('../lib/api').Quiz[]} param0.quizzes 
 */
export default function Home({ quizzes }) {
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter();
	const timer = useRef();
    const dictionary = useLanguage() 

	const filterList = (term) => {
		clearInterval(timer.current);
		timer.current = setTimeout(() => setSearchTerm(term.trim()), 200);
	};

	return ( 
			<BasicPageLayout preTitle={dictionary.CHEER} title={dictionary.TITLE} showLogo>
				<div className="text-base text-center mb-10 tracking-tight text-gray-900  "> 

                    <ReactMarkdown>
                        {dictionary.DESC.replace(
                            "__data__",
                            "[github.com/Ebazhanov/linkedin-skill-assessments-quizzes](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes)"
                        ).replace(
                            "__bandinopla__",
                            "[Bandinopla](https://github.com/bandinopla)"
                        )}
                    </ReactMarkdown>
				</div>

				<div className="mb-4 text-center">
					{dictionary.FILTER_BY_NAME + ": "}
					<input
						className="bg-slate-200 p-2 rounded shadow text-cyan-800 m-x-4"
						type="text"
						onKeyUp={(ev) => filterList(ev.target.value)}
					/>
				</div>

				<div className="clear-both overflow-hidden">
					{quizzes
						.filter(
							(quiz, i) => !searchTerm || quiz.folder.indexOf(searchTerm) > -1
						)
						.map((quiz, i) => (
							<div key={i} className="float-left">
								<Link href={ dictionary.path( "/quiz/" + encodeURIComponent(quiz.folder) )}>
									<div
										className="relative m-1 shadow-md cursor-pointer hover:scale-110 hover:rotate-2 hover:border-8 border-amber-300 delay-50 transition-all"
										style={{ width: 100, height: 100 }}
									>
										<img
											src={`${router.basePath}/covers/${quiz.folder}.jpg`}
											alt={quiz.folder}
										/>
										<div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs p-1 ">
											{quiz.folder}
										</div>
									</div>
								</Link>
							</div>
						))}
				</div>
			</BasicPageLayout> 
	);
}

export function getStaticProps() {

    const dicc  = getDictionary(); 

	return {
		props: {
			quizzes: getAllQuizzes(),
			dictionary: getDictionary(),
		},
	};
}
