(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{3620:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});r(7294);var n=r(9664),s=r(1664),c=r.n(s),i=r(5893);function a(e){var t=e.title,r=e.preTitle,s=e.children,a=(0,n.Z)();return(0,i.jsx)("div",{className:"container mx-auto ",children:(0,i.jsx)("div",{className:"bg-slate-50",children:(0,i.jsx)("div",{className:"container mx-auto px-12  ",children:(0,i.jsx)("div",{className:"max-w-7xl mx-auto p-14 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"  p-10 bg-white shadow-lg relative",children:[(0,i.jsx)("div",{className:"text-right text-sm",children:a.systemLanguages.map((function(e){var t=e.iso,r=e.name,n=e.isSelected;return(0,i.jsx)("span",{className:"mx p-2 "+(n?" bg-slate-200 rounded font-bold":""),children:(0,i.jsx)(c(),{href:a.switchLang(t),children:r})},t)}))}),(0,i.jsx)("h2",{className:"text-base text-indigo-600 font-semibold  uppercase",children:r}),(0,i.jsx)("p",{className:"mt-2 mb-10 text-3xl font-extrabold tracking-tight text-gray-900  ",children:t}),s]})})})})})}},6089:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return I},default:function(){return S}});var n=r(1163),s=r(1758),c=r(3620),i=r(1664),a=r.n(i),o=r(5893);function l(e){var t=e.onClick,r=e.children;return(0,o.jsx)("button",{onClick:t,type:"button",className:"mx-3 rounded-md bg-slate-200 p-2 text-lg",children:r})}var u=new Map;function d(e){var t=e.totalQuestions,r=e.getQuestionStatus,n=e.currentQuestion,s=e.onClickQuestion;return(0,o.jsx)("div",{className:"flex flex-auto flex-row",children:new Array(t).fill(0).map((function(e,t){return(0,o.jsx)("div",{style:{height:30},className:" cursor-pointer grow border-b-2 border-l border-l-white "+u.get(r(t))+" "+(n==t?"animate-bounce border-black":"border-white"),onClick:function(){return s(t)}},t)}))})}u.set(-1,"bg-slate-300"),u.set(0,"bg-red-500"),u.set(1,"bg-green-300");var h=r(4730),x=r(5192),p=["children"];function f(e){var t=e.children,r=(0,h.Z)(e,p);return r.className?(0,o.jsx)(x.Z,{language:r.className.replace("language-",""),children:r.node.children[0].value}):(0,o.jsx)("code",{children:t})}var m=r(7294),b=r(9499);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=(0,m.createContext)(),v=["children"];function O(e){e.children;var t=(0,h.Z)(e,v),r=(0,n.useRouter)(),s=(0,m.useContext)(w),c=t.src;return t.src.match(/^\s*https?\:\/\//)||(c=r.basePath+"/"+s.quiz.path.replace(/(.*)\/[^\/]+\.md$/,"$1/"+t.src)),(0,o.jsx)("img",{className:"p-8 max-w-full box-border",src:c,alt:t.alt})}function N(e){var t=e.children,r=(0,m.useContext)(w),n=++r.optionIndex,s="bg-white";r.answered>-1&&(r.answer==n?s="bg-green-300":r.answered==n&&(s="bg-red-500"));return(0,o.jsxs)("li",{className:"p-3 shadow-md m-2 cursor-pointer "+s,onClick:function(){r.answered<0&&r.onAnswer(n)},children:[" ",t," "]})}var _=r(9664);function y(e){var t=e.correct,r=e.incorrect,n=e.total,s=e.onClickReset,c=(0,_.Z)();return(0,o.jsxs)("div",{className:"p-2 text-center ",children:[c.SCORE+" ",(0,o.jsxs)("span",{className:"text-cyan-500 mx-2 font-bold",children:["%",Math.round(t/n*100)]})," ","(",(0,o.jsx)("span",{className:"text-green-500 mx-1",children:c.X_CORRECT.replace("__X__",t)}),(0,o.jsx)("span",{className:"text-red-500 mx-1",children:c.X_INCORRECT.replace("__X__",r)}),(0,o.jsx)("span",{className:"text-stone-500 mx-1",children:c.X_UNANSWERED.replace("__X__",n-t-r)}),")",(0,o.jsx)(l,{onClick:function(){return s()},children:c.BUTTON_RESET})]})}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=new Map;var P=r(9008),A=r.n(P),q="question",I=!0,S=function(e){var t,r=e.quiz,i=e.availableLanguages,u=(0,n.useRouter)(),h=(0,_.Z)(),x=parseInt(u.query.question)||1,p=r.questions.length,b=x-1,j=r.questions[b].answer,v=function(e){var t=e.quizID,r=e.questionIndex,n=(0,m.useState)(-1),s=n[0],c=n[1],i={};if(k.has(t)){var a=(i=k.get(t)).userAnswers.has(r)?i.userAnswers.get(r):-1;s!=a&&c(a)}else i={correct:0,incorrect:0,userAnswers:new Map},k.set(t,i);return E(E({},i),{},{currentAnswer:s,answer:function(e,t){var n=e==t;i.userAnswers.set(r,e),i.correct+=n?1:0,i.incorrect+=n?0:1,c(e)},getQuestionUserAnswer:function(e){return i.userAnswers.has(e)?i.userAnswers.get(e):-1},reset:function(){k.delete(t),c(-1)}})}({quizID:r.folder,questionIndex:b}),C=function(e){u.push(h.path(u.asPath.split("?")[0]+"?".concat(q,"=").concat(e)))},P=function(e,t){return function(){var r=x+e;if(t)r=1,v.reset();else if(r<1||r>p)return;C(r)}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A(),{children:(0,o.jsx)("title",{children:r.title})}),(0,o.jsxs)(c.Z,{title:r.title,children:[(0,o.jsx)("div",{className:"absolute top-0 left-0 p-2 m-2 px-4 ",children:(0,o.jsx)(a(),{href:h.path("/"),children:"\u2190 "+h.BACK_TO_HOME})}),(0,o.jsx)("div",{className:"absolute top-0 right-0 p-2 m-2 px-4 "}),(0,o.jsxs)(w.Provider,{value:(t={quiz:r,question:x,answered:v.currentAnswer,answer:j,onAnswer:function(e){return v.answer(e,j)}},g(g({},t),{},{optionIndex:-1})),children:[(0,o.jsx)(y,{correct:v.correct,incorrect:v.incorrect,total:p,onClickReset:P(-1,!0)}),(0,o.jsx)(d,{totalQuestions:p,currentQuestion:b,getQuestionStatus:function(e){var t=r.questions[e].answer,n=v.getQuestionUserAnswer(e);return n<0?-1:n==t?1:0},onClickQuestion:function(e){return C(e+1)}}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-4 text-sm text-center border border-dotted border-slate-200",children:[1==i.length?h.QUIZ_ONLY_AVAILABLE_IN:h.QUIZ_AVAILABLE_IN,":",i.map((function(e){var t=e.key,n=e.name,s=e.isSelected;return(0,o.jsx)("span",{className:"mx p-2 "+(s?" bg-slate-200 rounded font-bold":""),children:(0,o.jsx)(a(),{href:h.path("/quiz/"+("en"==t?"":t+"/")+r.folder+"?"+"question="+x),children:n})},t)}))]}),(0,o.jsx)(s.D,{components:{li:N,code:f,img:O},children:r.questions[x-1].text})]}),(0,o.jsxs)("div",{className:"mt-10 text-center ",children:[(0,o.jsx)(l,{onClick:P(-1),children:h.BUTTON_PREVIOUS})," ",x," of"," ",p," ",(0,o.jsx)(l,{onClick:P(1),children:h.BUTTON_NEXT})]}),(0,o.jsxs)("div",{className:"text-xs mt-10 border-t pt-1",children:[h.QUIZ," ",(0,o.jsx)("a",{href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/tree/main/".concat(r.folder),target:"_blank",children:h.SOURCE_CODE})]})]})]})}},8535:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz/[...slug]",function(){return r(6089)}])}},function(e){e.O(0,[496,400,774,888,179],(function(){return t=8535,e(e.s=t);var t}));var t=e.O();_N_E=t}]);