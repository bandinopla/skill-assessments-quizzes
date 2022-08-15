import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import { getAllQuizzes } from "../lib/api";


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

	const filterList = (term) => {
		clearInterval(timer.current);
		timer.current = setTimeout(() => setSearchTerm(term.trim()), 200);
	};

	return (  
		<BasicPageLayout 
			preTitle="Alright! Let's Gooo!"
			title={"Skill Assessments Quizzes"}
		>
			<p className="mt-2 mb-10 tracking-tight text-gray-900  ">
				Collection of questions and answers on different subjects aimed to help
				you test your knowledge before an important job interview!
				<br />
				Data from{" "}
				<a href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes">
					github.com/Ebazhanov/linkedin-skill-assessments-quizzes
				</a>
				. UI by <a href="https://github.com/bandinopla">Bandinopla</a>
			</p>

			<div className="mb-4 text-center">
				Filter by name:{" "}
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
                            
							<Link href={"/quiz/" + encodeURIComponent(quiz.folder)}>
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
	return {
		props: {
			quizzes: getAllQuizzes(),
		},
	};
}
