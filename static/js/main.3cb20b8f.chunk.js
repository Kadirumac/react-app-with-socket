(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{104:function(e,a){},107:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),s=t(54),l=t.n(s),o=t(61),m=t(5),i=t(55),u=t.n(i),A=t(56),E=t.n(A),p=t(16),f=t.n(p),g=(t(107),function(e){var a=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Los-Chat DCI ",r.a.createElement("span",{role:"img","aria-label":"emoji"}," \ud83d\ude03 ")),r.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83e\udd13")),r.a.createElement("h2",null,"Sie k\xf6nnen einfach versuchen ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83e\uddd0"))),a?r.a.createElement("div",null,r.a.createElement("h1",null,"Die Leute in Zimmer:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,a.map(function(e){var a=e.name;return r.a.createElement("div",{key:a,className:"activeItem"},a,r.a.createElement("img",{alt:"Online Icon",src:f.a}))})))):null)}),d=t(57),h=t.n(d),v=(t(143),t(30)),N=t.n(v),j=function(e){var a=e.message,t=a.text,n=a.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},N.a.emojify(t)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},N.a.emojify(t))),r.a.createElement("p",{className:"sentText pl-10 "},n))},b=(t(144),function(e){var a=e.messages,t=e.name;return r.a.createElement(h.a,{className:"messages"},a.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(j,{message:e,name:t}))}))}),C=t(58),O=t.n(C),I=(t(145),function(e){var a=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:f.a,alt:"online icon"}),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:O.a,alt:"close icon"}))))}),S=(t(146),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return t(e)}},"Send"))}),x=(t(147),function(e){var a=e.location,t=Object(c.useState)(""),s=Object(m.a)(t,2),l=s[0],i=s[1],A=Object(c.useState)(""),p=Object(m.a)(A,2),f=p[0],d=p[1],h=Object(c.useState)(""),v=Object(m.a)(h,2),N=v[0],j=v[1],C=Object(c.useState)(""),O=Object(m.a)(C,2),x=O[0],y=O[1],w=Object(c.useState)([]),k=Object(m.a)(w,2),R=k[0],B=k[1],M="https://project-chat-application.herokuapp.com/";Object(c.useEffect)(function(){var e=u.a.parse(a.search),t=e.name,c=e.room;n=E()(M),d(c),i(t),n.emit("join",{name:t,room:c},function(e){e&&alert(e)})},[M,a.search]),Object(c.useEffect)(function(){return n.on("message",function(e){B([].concat(Object(o.a)(R),[e]))}),n.on("roomData",function(e){var a=e.users;j(a)}),function(){n.emit("disconnect"),n.off()}},[R]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(I,{room:f}),r.a.createElement(b,{messages:R,name:l}),r.a.createElement(S,{message:x,setMessage:y,sendMessage:function(e){e.preventDefault(),x&&n.emit("sendMessage",x,function(){return y("")})}})),r.a.createElement(g,{users:N}))}),y=t(17);t(148);function w(){var e=Object(c.useState)(""),a=Object(m.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(""),l=Object(m.a)(s,2),o=l[0],i=l[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),r.a.createElement(y.b,{onClick:function(e){return t&&o?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var k=t(6),R=function(){return console.log("connected"),r.a.createElement(y.a,{basename:"".concat("/los-chat","/")},r.a.createElement(k.a,{path:"/",exact:!0,component:w}),r.a.createElement(k.a,{path:"/chat",component:x}))};l.a.render(r.a.createElement(R,null),document.getElementById("root"))},16:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},58:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,a,t){e.exports=t(151)}},[[62,1,2]]]);
//# sourceMappingURL=main.3cb20b8f.chunk.js.map