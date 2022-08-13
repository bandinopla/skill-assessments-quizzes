(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{8535:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz/[...slug]",function(){return r(9997)}])},1561:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(5893);function s(e){var n=e.title,r=e.preTitle,s=e.children;return(0,t.jsx)("div",{className:"container mx-auto ",children:(0,t.jsx)("div",{className:"bg-slate-50",children:(0,t.jsx)("div",{className:"container mx-auto px-12 ",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto p-14 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:" p-10 bg-white shadow-lg relative",children:[(0,t.jsx)("h2",{className:"text-base text-indigo-600 font-semibold uppercase",children:r}),(0,t.jsx)("p",{className:"mt-2 mb-10 text-3xl font-extrabold tracking-tight text-gray-900 ",children:n}),s]})})})})})}},9997:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return q},default:function(){return C}});var t=r(5893),s=r(1163),i=r(1758),c=r(1561),a=r(1664),o=r.n(a);function l(e){var n=e.onClick,r=e.children;return(0,t.jsx)("button",{onClick:n,type:"button",className:"mx-3 rounded-md bg-slate-200 p-2 text-lg",children:r})}var u=new Map;function d(e){var n=e.totalQuestions,r=e.getQuestionStatus,s=e.currentQuestion,i=e.onClickQuestion;return(0,t.jsx)("div",{className:"flex flex-auto flex-row",children:new Array(n).fill(0).map((function(e,n){return(0,t.jsx)("div",{style:{height:30},className:" cursor-pointer grow border-b-2 border-l border-l-white "+u.get(r(n))+" "+(s==n?"animate-bounce border-black":"border-white"),onClick:function(){return i(n)}},n)}))})}u.set(-1,"bg-slate-300"),u.set(0,"bg-red-500"),u.set(1,"bg-green-300");var x=r(9534),h=r(5192);function m(e){var n=e.children,r=(0,x.Z)(e,["children"]);return r.className?(0,t.jsx)(h.Z,{language:r.className.replace("language-",""),children:r.node.children[0].value}):(0,t.jsx)("code",{children:n})}var f=r(7294),p=(0,f.createContext)();function b(e){e.children;var n=(0,x.Z)(e,["children"]),r=(0,s.useRouter)(),i=(0,f.useContext)(p),c=r.basePath+"/"+i.quiz.path.replace(/(.*)\/[^\/]+\.md$/,"$1/"+n.src);return(0,t.jsx)("img",{className:"p-8 max-w-full box-border",src:c,alt:n.alt})}function g(e){var n=e.children,r=(0,f.useContext)(p),s=++r.optionIndex,i="bg-white";r.answered>-1&&(r.answer==s?i="bg-green-300":r.answered==s&&(i="bg-red-500"));return(0,t.jsxs)("li",{className:"p-3 shadow-md m-2 cursor-pointer "+i,onClick:function(){r.answered<0&&r.onAnswer(s)},children:[" ",n," "]})}function w(e){var n=e.correct,r=e.incorrect,s=e.total,i=e.onClickReset;return(0,t.jsxs)("div",{className:"p-2 text-center border border-dotted border-slate-200",children:["score"," ",(0,t.jsxs)("span",{className:"text-cyan-500 mx-2 font-bold",children:["%",Math.round(n/s*100)]})," ","(",(0,t.jsxs)("span",{className:"text-green-500 mx-1",children:[n," correct"]}),(0,t.jsxs)("span",{className:"text-red-500 mx-1",children:[r," incorrect"]}),(0,t.jsxs)("span",{className:"text-stone-500 mx-1",children:[s-n-r," unanswered"]}),")",(0,t.jsx)(l,{onClick:function(){return i()},children:"Reset"})]})}var v=r(1799),j=r(9396),N=new Map;var k="question",q=!0,C=function(e){var n=e.quiz,r=e.availableLanguages,a=(0,s.useRouter)(),u=parseInt(a.query.question)||1,x=n.questions.length,h=u-1,q=n.questions[h].answer,C=function(e){var n,r=e.quizID,t=e.questionIndex,s=(0,f.useState)(-1),i=s[0],c=s[1];if(N.has(r)){var a=(n=N.get(r)).userAnswers.has(t)?n.userAnswers.get(t):-1;i!=a&&c(a)}else n={correct:0,incorrect:0,userAnswers:new Map},N.set(r,n);return(0,j.Z)((0,v.Z)({},n),{currentAnswer:i,answer:function(e,r){var s=e==r;n.userAnswers.set(t,e),n.correct+=s?1:0,n.incorrect+=s?0:1,c(e)},getQuestionUserAnswer:function(e){return n.userAnswers.has(e)?n.userAnswers.get(e):-1},reset:function(){N.delete(r),c(-1)}})}({quizID:n.folder,questionIndex:h}),_=function(e){a.push(a.asPath.split("?")[0]+"?".concat(k,"=").concat(e))},A=function(e,n){return function(){var r=u+e;if(n)r=1,C.reset();else if(r<1||r>x)return;_(r)}};return(0,t.jsxs)(c.Z,{title:n.title,children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 p-2 m-2 px-4 ",children:(0,t.jsx)(o(),{href:"/",children:"\u2190 back to home "})}),(0,t.jsx)("div",{className:"absolute top-0 right-0 p-2 m-2 px-4 ",children:r.map((function(e){var r=e.key,s=e.name,i=e.isSelected;return(0,t.jsx)("span",{className:"mx-2 p-2 "+(i?" bg-slate-200 rounded font-bold":""),children:(0,t.jsx)(o(),{href:"/quiz/"+("en"==r?"":r+"/")+n.folder+"?"+"question="+u,children:s})},r)}))}),(0,t.jsxs)(p.Provider,{value:{quiz:n,question:u,optionIndex:-1,answered:C.currentAnswer,answer:q,onAnswer:function(e){return C.answer(e,q)}},children:[(0,t.jsx)(w,{correct:C.correct,incorrect:C.incorrect,total:x,onClickReset:A(-1,!0)}),(0,t.jsx)(d,{totalQuestions:x,currentQuestion:h,getQuestionStatus:function(e){var r=n.questions[e].answer,t=C.getQuestionUserAnswer(e);return t<0?-1:t==r?1:0},onClickQuestion:function(e){return _(e+1)}}),(0,t.jsx)("br",{}),(0,t.jsx)(i.D,{components:{li:g,code:m,img:b},children:n.questions[u-1].text})]}),(0,t.jsxs)("div",{className:"mt-10 text-center ",children:[(0,t.jsx)(l,{onClick:A(-1),children:"Prev"})," ",u," of"," ",x," ",(0,t.jsx)(l,{onClick:A(1),children:"Next"})]}),(0,t.jsxs)("div",{className:"text-xs mt-10 border-t pt-1",children:["Quiz ",(0,t.jsx)("a",{href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/tree/main/".concat(n.folder),target:"_blank",children:"source code"})]})]})}}},function(e){e.O(0,[424,854,774,888,179],(function(){return n=8535,e(e.s=n);var n}));var n=e.O();_N_E=n}]);