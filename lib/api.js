import fs from "fs";
import glob from "glob";
import path from "path";

/**
 * @typedef {Object} QuizQuestion
 * @property {string} text the body of the question
 * @property {number} options Total number of possible answers / options
 * @property {number} answer Index of the CORRECT answer  
 */ 

/**
 * @param {string} quiz_path path to the markdown file
 * @returns {{ title:string, questions:QuizQuestion[] }}
 */
export function parseQuiz(quiz_path) {
 
	//
	// extract the text
	//
	let markdown = fs.readFileSync(path.join(process.cwd(), quiz_path), {
		encoding: "utf-8",
	});

	let title = "Undefined...";

	//
	// parse...
	//
	markdown = markdown

		//
		// for each line...
		//
		.split(/\n/)

		.reduce((questions, line) => {
			//
			// title...
			//
			if (line.match(/^\s*##\s/)) {
				title = line;
			}

			//
			// Question starts...
			//
			else if (line.match(/^\s*####\s/)) {
				questions.push({
					text: line + "\n",
					options: -1,
					answer: -1,
				});
			}

			//
			// ... asume body of a question.
			//
			else {
				if (questions.length) {
					let question = questions[questions.length - 1];
					let m;

					//
					// ANSWER OPTION!
					//
					if ((m = line.match(/^\s*\-\s*\\?\[\s*(x)?\s*\]/))) {
						question.options++;

						//
						// it is the correct one?
						//
						if (m[1]) {
							question.answer = question.options ;
						}

                        //
                        // adding a flag so we can recognize the start of a quiz option.
                        //
						line = line.replace(m[0], "- %OPTION%");
					}

					question.text += line + "\n";
				}
			}

			return questions;
		}, []);

	return {
		questions: markdown,
		title,
	};
}

/** 
 * @typedef {Object} Quiz
 * @property {string} folder the folder inside data of this quiz
 * @property {Object} pathByLang Language id. E.g: en, es, it
 * @property {string} path the path to the `.md` file
 * @property {string} title title of the quiz
 * @property {QuizQuestion[]} questions questions array
 *  
 * 
 * Scan the `data` folder searching for all the `.md` quiz files.
 * 
 * @param {string} justThisOne
 * @returns { Quiz[] }
 */
export const getAllQuizzes = (justThisOne) =>
	glob
		.sync("data/**/*quiz*.md")

		.reduce((out, path) => {
 
			const m = path.match(
				/data\/(?<folder>[^\/]+)\/.*quiz(?:-(?<lang>\w{2}))?\.md/
			);

			if (m) {
				let current     = out.length ? out[out.length - 1] : null;
				const folder    = m.groups.folder;
				const lang      = m.groups.lang || "en";

                // if( m.groups.lang )
                // {
                //     path = path.replace( `-${lang}.` ,".");
                // }
                

				if (justThisOne && justThisOne != folder) {
					return out;
				}

				if (!current || current.folder != folder) {
                    
					current = {
						folder , 
                        pathByLang: {}
					};

					out.push(current);
				}  

                current.pathByLang[lang] = path;
			}

			return out;
		}, []);
