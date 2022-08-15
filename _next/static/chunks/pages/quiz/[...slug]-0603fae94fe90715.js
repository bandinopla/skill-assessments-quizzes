(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{8535:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz/[...slug]",function(){return t(9997)}])},1561:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=(t(7294),t(4274)),a=t(1664),i=t.n(a);function c(e){var n=e.title,t=e.preTitle,a=e.children,c=(0,s.Z)();return(0,r.jsx)("div",{className:"container mx-auto ",children:(0,r.jsx)("div",{className:"bg-slate-50",children:(0,r.jsx)("div",{className:"container mx-auto px-12 ",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto p-14 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:" p-10 bg-white shadow-lg relative",children:[(0,r.jsx)("div",{className:"text-right text-sm",children:c.systemLanguages.map((function(e){var n=e.iso,t=e.name,s=e.isSelected;return(0,r.jsx)("span",{className:"mx p-2 "+(s?" bg-slate-200 rounded font-bold":""),children:(0,r.jsx)(i(),{href:c.switchLang(n),children:t})},n)}))}),(0,r.jsx)("h2",{className:"text-base text-indigo-600 font-semibold uppercase",children:t}),(0,r.jsx)("p",{className:"mt-2 mb-10 text-3xl font-extrabold tracking-tight text-gray-900 ",children:n}),a]})})})})})}},9997:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return E},default:function(){return q}});var r=t(5893),s=t(1163),a=t(1758),i=t(1561),c=t(1664),l=t.n(c);function o(e){var n=e.onClick,t=e.children;return(0,r.jsx)("button",{onClick:n,type:"button",className:"mx-3 rounded-md bg-slate-200 p-2 text-lg",children:t})}var u=new Map;function d(e){var n=e.totalQuestions,t=e.getQuestionStatus,s=e.currentQuestion,a=e.onClickQuestion;return(0,r.jsx)("div",{className:"flex flex-auto flex-row",children:new Array(n).fill(0).map((function(e,n){return(0,r.jsx)("div",{style:{height:30},className:" cursor-pointer grow border-b-2 border-l border-l-white "+u.get(t(n))+" "+(s==n?"animate-bounce border-black":"border-white"),onClick:function(){return a(n)}},n)}))})}u.set(-1,"bg-slate-300"),u.set(0,"bg-red-500"),u.set(1,"bg-green-300");var x=t(9534),h=t(5192);function m(e){var n=e.children,t=(0,x.Z)(e,["children"]);return t.className?(0,r.jsx)(h.Z,{language:t.className.replace("language-",""),children:t.node.children[0].value}):(0,r.jsx)("code",{children:n})}var f=t(7294),p=t(1799),g=t(9396);var v=(0,f.createContext)();function b(e){e.children;var n=(0,x.Z)(e,["children"]),t=(0,s.useRouter)(),a=(0,f.useContext)(v),i=n.src;return n.src.match(/^\s*https?\:\/\//)||(i=t.basePath+"/"+a.quiz.path.replace(/(.*)\/[^\/]+\.md$/,"$1/"+n.src)),(0,r.jsx)("img",{className:"p-8 max-w-full box-border",src:i,alt:n.alt})}function j(e){var n=e.children,t=(0,f.useContext)(v),s=++t.optionIndex,a="bg-white";t.answered>-1&&(t.answer==s?a="bg-green-300":t.answered==s&&(a="bg-red-500"));return(0,r.jsxs)("li",{className:"p-3 shadow-md m-2 cursor-pointer "+a,onClick:function(){t.answered<0&&t.onAnswer(s)},children:[" ",n," "]})}var w=t(4274);function N(e){var n=e.correct,t=e.incorrect,s=e.total,a=e.onClickReset,i=(0,w.Z)();return(0,r.jsxs)("div",{className:"p-2 text-center ",children:[i.SCORE+" ",(0,r.jsxs)("span",{className:"text-cyan-500 mx-2 font-bold",children:["%",Math.round(n/s*100)]})," ","(",(0,r.jsx)("span",{className:"text-green-500 mx-1",children:i.X_CORRECT.replace("__X__",n)}),(0,r.jsx)("span",{className:"text-red-500 mx-1",children:i.X_INCORRECT.replace("__X__",t)}),(0,r.jsx)("span",{className:"text-stone-500 mx-1",children:i.X_UNANSWERED.replace("__X__",s-n-t)}),")",(0,r.jsx)(o,{onClick:function(){return a()},children:i.BUTTON_RESET})]})}var _=new Map;var C=t(9008),k=t.n(C),A="question",E=!0,q=function(e){var n,t=e.quiz,c=e.availableLanguages,u=(0,s.useRouter)(),x=(0,w.Z)(),h=parseInt(u.query.question)||1,C=t.questions.length,E=h-1,q=t.questions[E].answer,I=function(e){var n=e.quizID,t=e.questionIndex,r=(0,f.useState)(-1),s=r[0],a=r[1],i={};if(_.has(n)){var c=(i=_.get(n)).userAnswers.has(t)?i.userAnswers.get(t):-1;s!=c&&a(c)}else i={correct:0,incorrect:0,userAnswers:new Map},_.set(n,i);return(0,g.Z)((0,p.Z)({},i),{currentAnswer:s,answer:function(e,n){var r=e==n;i.userAnswers.set(t,e),i.correct+=r?1:0,i.incorrect+=r?0:1,a(e)},getQuestionUserAnswer:function(e){return i.userAnswers.has(e)?i.userAnswers.get(e):-1},reset:function(){_.delete(n),a(-1)}})}({quizID:t.folder,questionIndex:E}),Z=function(e){u.push(x.path(u.asPath.split("?")[0]+"?".concat(A,"=").concat(e)))},O=function(e,n){return function(){var t=h+e;if(n)t=1,I.reset();else if(t<1||t>C)return;Z(t)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k(),{children:(0,r.jsx)("title",{children:t.title})}),(0,r.jsxs)(i.Z,{title:t.title,children:[(0,r.jsx)("div",{className:"absolute top-0 left-0 p-2 m-2 px-4 ",children:(0,r.jsx)(l(),{href:x.path("/"),children:"\u2190 "+x.BACK_TO_HOME})}),(0,r.jsx)("div",{className:"absolute top-0 right-0 p-2 m-2 px-4 "}),(0,r.jsxs)(v.Provider,{value:(n={quiz:t,question:h,answered:I.currentAnswer,answer:q,onAnswer:function(e){return I.answer(e,q)}},(0,g.Z)((0,p.Z)({},n),{optionIndex:-1})),children:[(0,r.jsx)(N,{correct:I.correct,incorrect:I.incorrect,total:C,onClickReset:O(-1,!0)}),(0,r.jsx)(d,{totalQuestions:C,currentQuestion:E,getQuestionStatus:function(e){var n=t.questions[e].answer,r=I.getQuestionUserAnswer(e);return r<0?-1:r==n?1:0},onClickQuestion:function(e){return Z(e+1)}}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"mb-4 text-sm text-center border border-dotted border-slate-200",children:[1==c.length?x.QUIZ_ONLY_AVAILABLE_IN:x.QUIZ_AVAILABLE_IN,":",c.map((function(e){var n=e.key,s=e.name,a=e.isSelected;return(0,r.jsx)("span",{className:"mx p-2 "+(a?" bg-slate-200 rounded font-bold":""),children:(0,r.jsx)(l(),{href:x.path("/quiz/"+("en"==n?"":n+"/")+t.folder+"?"+"question="+h),children:s})},n)}))]}),(0,r.jsx)(a.D,{components:{li:j,code:m,img:b},children:t.questions[h-1].text})]}),(0,r.jsxs)("div",{className:"mt-10 text-center ",children:[(0,r.jsx)(o,{onClick:O(-1),children:x.BUTTON_PREVIOUS})," ",h," of"," ",C," ",(0,r.jsx)(o,{onClick:O(1),children:x.BUTTON_NEXT})]}),(0,r.jsxs)("div",{className:"text-xs mt-10 border-t pt-1",children:[x.QUIZ," ",(0,r.jsx)("a",{href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/tree/main/".concat(t.folder),target:"_blank",children:x.SOURCE_CODE})]})]})]})}}},function(e){e.O(0,[496,489,774,888,179],(function(){return n=8535,e(e.s=n);var n}));var n=e.O();_N_E=n}]);