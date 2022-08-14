# Skills Assessments Quizzes 
![Super](https://img.shields.io/badge/Super-Awesome-green)

#### Contents
 - [:grey_question: How It Works](#how-it-works) 
 - [:framed_picture: Quizz Images Extraction](#imgs-extract) 
 - [:hammer: Start Dev](#dev-start) 
 - [:books: Index Page](#home-dev) 
 - [:performing_arts: Front page Icons](#covers) 
 - [:scroll: The Quiz Page](#quiz) 
 - [:eyeglasses: Quiz progress & Tracking](#tracking) 
 - [:rocket: Deployment](#deploy) 

## [→→→ **:open_book: OPEN QUIZZES :open_book:** ← ← ← ](https://bandinopla.github.io/skill-assessments-quizzes/)

![Quizzes on Many Topics](cover.jpg)

UI for the quizzes found at [Ebazhanov/linkedin-skill-assessments-quizzes](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/)
This proyects feeds from the data of that repo and creates a, hopefully, user friendly interface to easily navigate the quizzes and see the progress when doing them.

---
# :grey_question: How it works
This is a [NextJS](https://nextjs.org/) web app. And it has [Ebazhanov/linkedin-skill-assessments-quizzes](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/) as a submodule living in the `data` folder. 

This app extracts the quizzes from that repo and builds a user interface to allow you to easily navigate and test your knowledge on diferent subjects emulating a job interview test scenario. You will be able to see your score, how many you got right and how many you didn't. You can reset and start over at any time.


## <a id="imgs-extract"></a>:framed_picture: Getting the Images used in the quizzes

When you start developing, make sure you have the latest copy of that submodule's repo and then run:

```
yarn run import-images
```

this will extract all images from the `data` folder, used by the quizzes, and copy them into the `public` folder so Next can find them.

---
## <a id="dev-start"></a>:hammer: Start developing
This web app is meant to run on a directory called `skill-assessments-quizzes` so, run:
```
yarn dev
```
... and head over to http://localhost:3000/skill-assessments-quizzes

---
## <a id="home-dev"></a>:books: Quizzes Index
The main page lives in `pages/index.js`. It calls a method `getAllQuizzes` from `lib/api.js` that scans the `data` folder looking for all markdown files to get a list of all available quizzes (and takes into account the translations too)

#### <a id="covers"></a>:performing_arts: Quiz Image Covers
The image covers of each quiz lives in `public/covers` and the name of each images matches the quiz folder in `pages`. These images were manually created and placed. **If new quizzes were to be added, one should manually create the cover for the new quiz and place it in that folder.**

---
## <a id="quiz"></a>:scroll: Quiz Page
The page that renders the quiz and holds all the data about the progress and navigation is `pages/quiz/[...slug].js`

It creates one static path per quiz/language and recieves the entire markdown as props. The markdown is then processed in the client side.

#### Rendering the quiz
To render the quiz the module [react-markdown](https://www.npmjs.com/package/react-markdown) is used and 3 custom components are set to handle the rendering of:
1. **Quiz Question item**: A question option component that knows about the quiz context and calls the appropiate callbacks when the users pics and option. It also knows the state of the quiz so as to style itself with the correct colors.
2. **Code snipped**: A component to render when a code snipped is used. Internally will use [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) to render a highlighted code block.
3. **Image reference**: when an image is referenced in a quiz, this component will make sure the image is pointed to the correct path in the `public` folder. ( a subfolder created by `yarn run import-images` will exist there called `data` with all the images )

---
## <a id="tracking"></a>:eyeglasses: Quiz progress storage / tracking
The progress of the user is stored in memory. The manager of this is `lib/QuizSolvedState.js`

When the quiz page is rendered, the hook `useQuizSolvedState` recieves the ID of the quiz (the name of the folder in `data`) and the question number it should render to then provide an api to handle the user interaction with the quiz. 

`pages/quiz/[...slug].js` then sets a Context that provides revelvant quiz info to the components of the quiz among some callbacks to handle user interaction.



---
## <a id="deploy"></a>:rocket: Deploying
This webapp uses github actions. Any push into the main branch will automatically trigger a github page deploy. See `.github/workflows/deply.yml`