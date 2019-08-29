(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(90)},53:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),o=(a(53),a(14)),c=a(17),s=a(15),u=a(18),m=a(39),d=a.n(m),f=a(20),h=a.n(f),p=(a(74),a(92)),E=a(93),g=a(94),b=a(99),v=a(95),w=a(96),y=a(98),k=a(100),A=a(97),x=a(101),N=a(12),_=a(40),C=a.n(_),q=(a(75),a(76),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={Answersheet:[],loading:!1,Confirmed:[]},a.fetchOption=function(e){var t=a.props.Questions,n={},r={};return t.forEach(function(a,i){var l=a.options.findIndex(function(t){return t.id===parseInt(e)});l>-1&&(r=t[i],n=t[i].options[l])}),{targetQuestion:r,targetOption:n}},a.addToAnswerSheet=function(e,t,n){var r=a.state.Answersheet,i=r.findIndex(function(t){return t.question===e.id});console.log(i),i>-1?e.isMultipleCorrect?(r[i].options.push(t.id),a.setState({Answersheet:r})):(n.target.checked=!1,N.b.error("The question ".concat(e.question_text," has only one answer, first ticked option will be taken as default"),{autoClose:7e3,position:"bottom-center"})):(r.push({question:e.id,options:[t.id]}),a.setState({Answersheet:r}))},a.removeFromAnswerSheet=function(e,t){var n=a.state.Answersheet,r=n.findIndex(function(t){return t.question===e.id});if(r>-1)if(e.isMultipleCorrect){var i=n[r].options.findIndex(function(e){return e===t.id});i>-1&&(n[r].options.length>1?n[r].options.splice(i,1):n.splice(r,1),a.setState({Answersheet:n}))}else n.splice(r,1),a.setState({Answersheet:n,multiCorrectError:!1});else N.b.error("Fatal Error !")},a.tickUntickOption=function(e){var t=a.fetchOption(e.target.id),n=t.targetQuestion,r=t.targetOption;e.target.checked?(a.addToAnswerSheet(n,r,e),N.b.info("Question : ".concat(n.question_text,"   Answer : ").concat(r.option_text," is selected"))):(a.removeFromAnswerSheet(n,r),N.b.warning("Question : ".concat(n.question_text,"  Answer : ").concat(r.option_text," is removed")))},a.submitAnswers=function(){var e=a.props,t=e.exitFullScreen,n=e.prodAjaxUrl,r=e.Quiz,i=e.Student,l=a.state.Confirmed;h.a.post("".concat(n,"/quiz/").concat(r.id,"/generate-report/").concat(i,"/"),l).then(function(e){console.log(e.data),a.props.setReport(e.data)}).catch(function(e,t){console.log(t),N.b.error(e.message,{position:"bottom-center"})}),t()},a.questionStatus=function(e){return a.state.Answersheet.findIndex(function(t){return t.question===e})>-1?r.a.createElement(p.a,{variant:"info"},r.a.createElement("i",{className:"fa fa-check-square","aria-hidden":"true"})):r.a.createElement(p.a,{variant:"danger"},r.a.createElement("i",{className:"fa fa-circle-o","aria-hidden":"true"}))},a.isAnswered=function(e){return a.state.Answersheet.findIndex(function(t){return t.question===e})>-1},a.isConfirmed=function(e){return a.state.Confirmed.findIndex(function(t){return t.question===e})>-1},a.confirmAnswer=function(e){var t=a.state.Answersheet,n=a.state.Confirmed,r=t.findIndex(function(t){return t.question===parseInt(e.target.id)});r>-1?(n.push(t[r]),a.setState({Confirmed:n})):console.log("Error")},a.revokeAnswer=function(e){var t=a.state.Confirmed,n=t.findIndex(function(t){return t.question===parseInt(e.target.id)});if(!(n>-1))throw TypeError("Breach Detected !");t.splice(n,1),a.setState({Confirmed:t})},a.render=function(){var e=a.props,t=e.Quiz,n=e.Questions,i=e.agencyName,l=a.state,o=l.Answersheet,c=l.Confirmed;return r.a.createElement("div",{className:"examspace",style:{color:"#fff"}},r.a.createElement("div",{className:"status-bar"},r.a.createElement("div",{className:"brand"},r.a.createElement("h5",{style:{margin:0}},i),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{onClick:a.submitAnswers,variant:"success",disabled:0===o.length,style:{display:"block",margin:"auto"}},"Submit Answers")),r.a.createElement("div",{className:"quiz-info"},r.a.createElement("h4",null,r.a.createElement("i",{className:"fa fa-book","aria-hidden":"true"})," ",t.name," ",r.a.createElement("span",{className:"badge badge-success"},t.full_marks," Mark",t.full_marks>1&&"s")),r.a.createElement("h6",null,r.a.createElement("i",{className:"fa fa-database","aria-hidden":"true"})," ",t.no_of_questions," Question",t.no_of_questions>1&&"s"),t.negative_marking&&r.a.createElement("h6",null,r.a.createElement("i",{className:"fa fa-minus-circle","aria-hidden":"true"})," Marking")),r.a.createElement("div",{className:"exam-status"},r.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"0.4em",textAlign:"center",color:"#fff"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("i",{className:"fa fa-thumbs-up","aria-hidden":"true"})," Confirmed"),r.a.createElement("th",null,r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Attempt"),r.a.createElement("th",null,r.a.createElement("i",{className:"fa fa-window-minimize","aria-hidden":"true"})," Left"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,c.length),r.a.createElement("td",null,o.length),r.a.createElement("td",null,t.no_of_questions-o.length))))),r.a.createElement("div",{className:"timer"},r.a.createElement(C.a,{seconds:60*t.allotted_time_in_minutes,color:"#2F251B",alpha:.9,size:129,onComplete:a.submitAnswers,style:{height:"100%"}}))),r.a.createElement(b.a.Container,{id:"left-tabs-example",defaultActiveKey:n[0].id},r.a.createElement(v.a,null,r.a.createElement(w.a,{sm:3},r.a.createElement(y.a,{variant:"pills",style:{height:"80vh",flexWrap:"initial",overflow:"auto"}},n.map(function(e,t){return r.a.createElement(y.a.Item,{key:t},r.a.createElement(y.a.Link,{eventKey:e.id},a.isConfirmed(e.id)?r.a.createElement(p.a,{variant:"success"},r.a.createElement("i",{className:"fa fa-thumbs-up","aria-hidden":"true"})):r.a.createElement(p.a,{variant:"warning"},r.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"}))," ",a.questionStatus(e.id)," ",r.a.createElement("span",{className:"badge badge-primary"},t+1),"  ",e.question_text))}))),r.a.createElement(w.a,{sm:9},r.a.createElement(b.a.Content,null,n.map(function(e,t){return r.a.createElement(b.a.Pane,{eventKey:e.id,key:t},r.a.createElement("h2",{style:{color:"#F0A868"}},e.question_text),r.a.createElement("br",null),e.isMultipleCorrect&&r.a.createElement(k.a,{variant:"warning",style:{width:"60%"}},"This Question has multiple Answers"),r.a.createElement("div",null,e.options.map(function(e,t){return r.a.createElement(A.a,{className:"mb-3",key:t,style:{width:"60%"}},r.a.createElement(A.a.Prepend,null,r.a.createElement(A.a.Checkbox,{onChange:a.tickUntickOption,id:e.id})),r.a.createElement(x.a,{value:e.option_text,disabled:!0}))})),a.isAnswered(e.id)&&r.a.createElement(E.a,{variant:"success",onClick:a.confirmAnswer,id:e.id,disabled:a.isConfirmed(e.id)},r.a.createElement("i",{className:"fa fa-thumbs-up","aria-hidden":"true"})," Confirm ?"),a.isConfirmed(e.id)&&r.a.createElement(E.a,{variant:"warning",id:e.id,onClick:a.revokeAnswer},r.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"})," Revoke"))}))))),r.a.createElement(N.a,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}))},a}return Object(u.a)(t,e),t}(n.Component)),S=(a(89),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).style={report_data:{position:"absolute",top:"35%",left:"20%",zIndex:2,width:"60%",height:"70%",backgroundColor:"rgba(204, 41, 54, 0.66)",padding:"2em",borderRadius:"2em"},quiz_image:{height:"6em",width:"6em",objectFit:"cover",borderRadius:"50%",display:"block",margin:"auto"}},a.render=function(){var e=a.style,t=e.report_data,n=e.quiz_image,i=a.props,l=i.Report,o=i.prodAjaxUrl,c=l.quiz;return r.a.createElement("div",{className:"report-card"},r.a.createElement("img",{src:"https://ik.imagekit.io/zcpzsm6qt/galaxyguide/IMG-20190726-WA0004_C81SsuVBmL.jpg",alt:"galaxyguide",className:"hero-image"}),r.a.createElement("div",{className:"report-data",style:t},r.a.createElement(v.a,null,r.a.createElement(w.a,{lg:12},r.a.createElement("img",{src:c.cover_image_url,alt:c.name,style:n}),r.a.createElement("h2",{className:"text-center",style:{color:"#fff"}},r.a.createElement("i",{className:"fa fa-database","aria-hidden":"true"})," ",c.name),r.a.createElement("h4",{className:"text-center",style:{color:"#fff"}},r.a.createElement("i",{className:"fa fa-calendar-check-o","aria-hidden":"true"})," ",l.submission_date),r.a.createElement("h4",{className:"text-center",style:{color:"#fff"}},r.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"})," ",l.submission_time),r.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,className:"text-center",style:{color:"#fff"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Answered"),r.a.createElement("th",null,"Correct"),r.a.createElement("th",null,"Gained Marks"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,l.answered),r.a.createElement("td",null,l.correct),r.a.createElement("td",null,l.gained_marks)))))),r.a.createElement(v.a,null,r.a.createElement(w.a,{lg:12},r.a.createElement("a",{href:"".concat(o,"/accounts/profile/"),className:"btn btn-warning",style:{margin:"auto",display:"block",width:"10em"}},r.a.createElement("i",{className:"fa fa-user-circle-o","aria-hidden":"true"})," Profile")))))},a}return Object(u.a)(t,e),t}(n.Component)),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={Student:!1,deviceError:!1,loading:!1,devAjaxUrl:"http://127.0.0.1:8000",prodAjaxUrl:"".concat(window.location.protocol,"//").concat(window.location.hostname,":").concat(window.location.port),agencyName:"Galaxy Guide Center",fullScreenActive:!1,Quiz:{},Questions:[],Report:!1},a.style={quiz_image:{width:"100%"},quiz_info:{position:"absolute",top:"50%",left:"20%",zIndex:2,width:"60%",height:"70%",backgroundColor:"rgba(251, 255, 185, 0.6)",padding:"2em",borderRadius:"2em"},thumbnail_quiz:{height:"10em",width:"10em",objectFit:"cover",borderRadius:"50%",margin:"1em"},quiz_name:{color:"#FBFFB9 !important"}},a.componentWillMount=function(){var e=a.state.prodAjaxUrl;console.log(a.getQuizId()),Promise.all([h.a.get("".concat(e,"/quiz/").concat(a.getQuizId(),"/details/")),h.a.get("".concat(e,"/quiz/").concat(a.getQuizId(),"/questions/"))]).then(h.a.spread(function(e,t){a.setState({Quiz:e.data,Questions:t.data})})).catch(function(e,t){console.log(e),alert(t.message)}),a.setState({Student:a.getCookie("student")})},a.setReport=function(e){a.setState({Report:e})},a.getCookie=function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},a.componentDidMount=function(){window.addEventListener("keydown",a.disableKeyBoard,!1)},a.componentWillUnmount=function(){window.removeEventListener("keydown",a.disableKeyBoard,!1)},a.getQuizId=function(){return parseInt(window.location.pathname.substr(6).slice(0,-13))||1},a.goFullScreen=function(){a.setState({fullScreenActive:!0})},a.exitFullScreen=function(){a.setState({fullScreenActive:!1})},a.beginTest=function(){a.goFullScreen()},a.disableKeyBoard=function(e){return"F11"===e.key&&e.preventDefault(),"ESC"===e.key&&e.preventDefault(),!1},a.fetchStudent=function(){return new Promise(function(e,t){})},a.render=function(){var e=a.state,t=e.agencyName,n=e.fullScreenActive,i=(e.deviceError,e.loading,e.devAjaxUrl),l=e.prodAjaxUrl,o=e.Quiz,c=e.Questions,s=e.Student,u=e.Report,m=a.style,f=m.quiz_image,h=m.quiz_info,p=m.thumbnail_quiz,E=m.quiz_name;return u?r.a.createElement(S,{Report:u,prodAjaxUrl:l}):r.a.createElement(d.a,{enabled:n,onChange:function(e){return a.setState({fullScreenActive:e})}},r.a.createElement("div",{className:"App",onKeyUp:a.disableKeyBoard},n?r.a.createElement(q,{Quiz:o,Questions:c,agencyName:t,exitFullScreen:a.exitFullScreen,devAjaxUrl:i,prodAjaxUrl:l,Student:s,setReport:a.setReport}):r.a.createElement("div",null,r.a.createElement("img",{src:o.cover_image_url,alt:o.name,style:f}),r.a.createElement("div",{style:h},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("img",{src:o.cover_image_url,style:p,alt:"{Quiz.name}"})),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("h2",{style:E},r.a.createElement("i",{className:"fa fa-list-alt","aria-hidden":"true"})," ",o.name),r.a.createElement("hr",null),r.a.createElement("h4",null,r.a.createElement("i",{className:"fa fa-file-text","aria-hidden":"true"})," ",o.syllabus),r.a.createElement("h5",null,r.a.createElement("i",{className:"fa fa-check-square-o","aria-hidden":"true"})," ",o.full_marks," Marks"),r.a.createElement("h5",null,r.a.createElement("i",{class:"fa fa-database","aria-hidden":"true"})," ",o.no_of_questions," Questions"),o.negative_marking&&r.a.createElement("h5",null,r.a.createElement("i",{className:"fa fa-minus-circle","aria-hidden":"true"}),"  Negative Marking"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",value:"Begin",className:"btn btn-primary py-3 px-5",onClick:a.beginTest},r.a.createElement("i",{className:"fa fa-terminal","aria-hidden":"true"})," Begin")))))))},a}return Object(u.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(z,null),document.getElementById("examination")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.a2612245.chunk.js.map