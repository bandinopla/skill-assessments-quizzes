(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{3620:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});t(7294);var n=t(9664),s=t(1664),i=t.n(s),c=t(5893);function a(e){var r=e.title,t=e.preTitle,s=e.children,a=(0,n.Z)();return(0,c.jsx)("div",{className:"container mx-auto ",children:(0,c.jsx)("div",{className:"bg-slate-50",children:(0,c.jsx)("div",{className:"container mx-auto px-12  ",children:(0,c.jsx)("div",{className:"max-w-7xl mx-auto p-14 sm:px-6 lg:px-8",children:(0,c.jsxs)("div",{className:"  p-10 bg-white shadow-lg relative",children:[(0,c.jsx)("div",{className:"text-right text-sm",children:a.systemLanguages.map((function(e){var r=e.iso,t=e.name,n=e.isSelected;return(0,c.jsx)("span",{className:"mx p-2 "+(n?" bg-slate-200 rounded font-bold":""),children:(0,c.jsx)(i(),{href:a.switchLang(r),children:t})},r)}))}),(0,c.jsx)("h2",{className:"text-base text-indigo-600 font-semibold  uppercase",children:t}),(0,c.jsx)("p",{className:"mt-2 mb-10 text-3xl font-extrabold tracking-tight text-gray-900  ",children:r}),s]})})})})})}},2425:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return Q},default:function(){return R}});var n=t(1163),s=t(1758),i=t(3620),c=t(1664),a=t.n(c),o=t(5893);function l(e){var r=e.onClick,t=e.children;return(0,o.jsx)("button",{onClick:r,type:"button",className:"mx-3 rounded-md bg-slate-200 p-2 text-lg",children:t})}var u=new Map;function d(e){var r=e.totalQuestions,t=e.getQuestionStatus,n=e.currentQuestion,s=e.onClickQuestion;return(0,o.jsx)("div",{className:"flex flex-auto flex-row",children:new Array(r).fill(0).map((function(e,r){return(0,o.jsx)("div",{style:{height:30},className:" cursor-pointer grow border-b-2 border-l border-l-white "+u.get(t(r))+" "+(n==r?"animate-bounce border-black":"border-white"),onClick:function(){return s(r)}},r)}))})}u.set(-1,"bg-slate-300"),u.set(0,"bg-red-500"),u.set(1,"bg-green-300");var x=t(4730),h=t(5192),f=["children"];function p(e){var r=e.children,t=(0,x.Z)(e,f);return t.className?(0,o.jsx)(h.Z,{language:t.className.replace("language-",""),children:t.node.children[0].value}):(0,o.jsx)("code",{children:r})}var m=t(7294),b=t(9499);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,b.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=(0,m.createContext)(),O=["children"];function w(e){e.children;var r=(0,x.Z)(e,O),t=(0,n.useRouter)(),s=(0,m.useContext)(g),i=r.src;return r.src.match(/^\s*https?\:\/\//)||(i=t.basePath+"/"+s.quiz.path.replace(/(.*)\/[^\/]+\.md$/,"$1/"+r.src)),(0,o.jsx)("img",{className:"p-8 max-w-full box-border",src:i,alt:r.alt})}var N=["children"],_=(0,m.createContext)({index:-1});function y(e){var r=e.children;return(0,x.Z)(e,N).node.children.find((function(e){var r;return 0==(null===(r=e.children)||void 0===r?void 0:r[0].value.indexOf("%OPTION%"))}))?(0,o.jsx)(_.Provider,{value:{index:0},children:(0,o.jsx)("ul",{children:r})}):(0,o.jsx)("ul",{children:r})}var C=["children"],P=(0,m.createContext)(-1);function E(e){var r=e.children,t=((0,x.Z)(e,C),(0,m.useContext)(g)),n=(0,m.useContext)(_),s=(0,m.useContext)(P);if(n.index<0||s>-1)return(0,o.jsx)("li",{className:"list-disc list-inside my-1",children:r});var i=n.index++,c="bg-white";t.answered>-1&&(t.answer==i?c="bg-green-300":t.answered==i&&(c="bg-red-500"));return 0==r[0].indexOf("%OPTION%")&&(r[0]=r[0].replace("%OPTION%","")),(0,o.jsx)("li",{className:"p-3 shadow-md m-2 cursor-pointer border-l-2 border-zinc-400 "+c,onClick:function(){t.answered<0&&t.onAnswer(i)},children:(0,o.jsxs)(P.Provider,{value:i,children:[" ",r," "]})})}var k=t(9664);function A(e){var r=e.correct,t=e.incorrect,n=e.total,s=e.onClickReset,i=(0,k.Z)();return(0,o.jsxs)("div",{className:"p-2 text-center ",children:[i.SCORE+" ",(0,o.jsxs)("span",{className:"text-cyan-500 mx-2 font-bold",children:["%",Math.round(r/n*100)]})," ","(",(0,o.jsx)("span",{className:"text-green-500 mx-1",children:i.X_CORRECT.replace("__X__",r)}),(0,o.jsx)("span",{className:"text-red-500 mx-1",children:i.X_INCORRECT.replace("__X__",t)}),(0,o.jsx)("span",{className:"text-stone-500 mx-1",children:i.X_UNANSWERED.replace("__X__",n-r-t)}),")",(0,o.jsx)(l,{onClick:function(){return s()},children:i.BUTTON_RESET})]})}function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){(0,b.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var T=new Map;var S=t(9008),Z=t.n(S),D="question",Q=!0,R=function(e){var r,t=e.quiz,c=e.availableLanguages,u=(0,n.useRouter)(),x=(0,k.Z)(),h=parseInt(u.query.question)||1,f=t.questions.length,b=h-1,j=t.questions[b].answer,O=function(e){var r=e.quizID,t=e.questionIndex,n=(0,m.useState)(-1),s=n[0],i=n[1],c={};if(T.has(r)){var a=(c=T.get(r)).userAnswers.has(t)?c.userAnswers.get(t):-1;s!=a&&i(a)}else c={correct:0,incorrect:0,userAnswers:new Map},T.set(r,c);return I(I({},c),{},{currentAnswer:s,answer:function(e,r){var n=e==r;c.userAnswers.set(t,e),c.correct+=n?1:0,c.incorrect+=n?0:1,i(e)},getQuestionUserAnswer:function(e){return c.userAnswers.has(e)?c.userAnswers.get(e):-1},reset:function(){T.delete(r),i(-1)}})}({quizID:t.folder,questionIndex:b}),N=function(e){u.push(x.path(u.asPath.split("?")[0]+"?".concat(D,"=").concat(e)))},_=function(e,r){return function(){var t=h+e;if(r)t=1,O.reset();else if(t<1||t>f)return;N(t)}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z(),{children:(0,o.jsx)("title",{children:t.title})}),(0,o.jsxs)(i.Z,{title:t.title,children:[(0,o.jsx)("div",{className:"absolute top-0 left-0 p-2 m-2 px-4 ",children:(0,o.jsx)(a(),{href:x.path("/"),children:"\u2190 "+x.BACK_TO_HOME})}),(0,o.jsx)("div",{className:"absolute top-0 right-0 p-2 m-2 px-4 "}),(0,o.jsxs)(g.Provider,{value:(r={quiz:t,question:h,answered:O.currentAnswer,answer:j,onAnswer:function(e){return O.answer(e,j)}},v(v({},r),{},{optionIndex:-1})),children:[(0,o.jsx)(A,{correct:O.correct,incorrect:O.incorrect,total:f,onClickReset:_(-1,!0)}),(0,o.jsx)(d,{totalQuestions:f,currentQuestion:b,getQuestionStatus:function(e){var r=t.questions[e].answer,n=O.getQuestionUserAnswer(e);return n<0?-1:n==r?1:0},onClickQuestion:function(e){return N(e+1)}}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-4 text-sm text-center border border-dotted border-slate-200",children:[1==c.length?x.QUIZ_ONLY_AVAILABLE_IN:x.QUIZ_AVAILABLE_IN,":",c.map((function(e){var r=e.key,n=e.name,s=e.isSelected;return(0,o.jsx)("span",{className:"mx p-2 "+(s?" bg-slate-200 rounded font-bold":""),children:(0,o.jsx)(a(),{href:x.path("/quiz/"+("en"==r?"":r+"/")+t.folder+"?"+"question="+h),children:n})},r)}))]}),(0,o.jsx)(s.D,{components:{li:E,code:p,img:w,ul:y},children:t.questions[h-1].text})]}),(0,o.jsxs)("div",{className:"mt-10 text-center ",children:[(0,o.jsx)(l,{onClick:_(-1),children:x.BUTTON_PREVIOUS})," ",h," of"," ",f," ",(0,o.jsx)(l,{onClick:_(1),children:x.BUTTON_NEXT})]}),(0,o.jsxs)("div",{className:"text-xs mt-10 border-t pt-1",children:[x.QUIZ," ",(0,o.jsx)("a",{href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/tree/main/".concat(t.folder),target:"_blank",children:x.SOURCE_CODE})]})]})]})}},8535:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz/[...slug]",function(){return t(2425)}])}},function(e){e.O(0,[496,400,774,888,179],(function(){return r=8535,e(e.s=r);var r}));var r=e.O();_N_E=r}]);