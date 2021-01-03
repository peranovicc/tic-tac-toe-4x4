(this["webpackJsonpiks-oks"]=this["webpackJsonpiks-oks"]||[]).push([[0],{24:function(n,e,i){},25:function(n,e,i){"use strict";i.r(e);var t=i(1),c=i(2),r=i(0),a=i.n(r),o=i(12),j=i.n(o),x=i(6),l={0:-1e3,1:1e3,2:0},u=i(13),s=[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,5,10,15],[3,6,9,12],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],[0,1,4,5],[2,3,6,7],[8,9,12,13],[10,11,14,15],[1,2,5,6],[4,5,8,9],[5,6,9,10],[6,7,10,11],[9,10,13,14]],h=function(n){var e,i=Object(u.a)(s);try{var t=function(){var i=e.value;if(i.every((function(e){return n[i[0]]===n[e]&&""!==n[i[0]]})))return{v:[!0,n[i[0]],i]}};for(i.s();!(e=i.n()).done;){var c=t();if("object"===typeof c)return c.v}}catch(r){i.e(r)}finally{i.f()}return n.every((function(n){return""!==n}))?[!0,2]:[!1]},d=function(n){return h(n)[0]},R=function(n){return h(n)[1]},g=function(n){return n.filter((function(n){return""!==n})).length},O=function(n){var e=[];return n.forEach((function(n,i){return""===n&&e.push(i)})),e[Math.floor(Math.random()*e.length)]},M=function(n){if(g(n)<3){return[5,6,9,10].find((function(e){return""===n[e]}))}var e=-1/0,i=n.indexOf("");return n.forEach((function(n,t,c){if(""===n){var r=Object(x.a)(c);r[t]=1;var a=Y(r,0,!1,-1/0,1/0);a>e&&(e=a,i=t)}})),i};function Y(n,e,i,t,c){if(d(n))return l[R(n)];if(14===g(n)||6===e)return function(n){var e={3:0,2:0,1:0},i={3:0,2:0,1:0};return s.forEach((function(t){var c=t.map((function(e){return n[e]})),r=0,a=0;c.forEach((function(n){1===n&&r++,0===n&&a++})),0===a&&e[r]++,0===r&&i[a]++})),7*(e[3]-i[3])+2*(e[2]-i[2])+(e[1]-i[1])}(n);if(i){var r=-1/0;return n.some((function(n,i,a){if(""===n){var o=Object(x.a)(a);o[i]=1;var j=Y(o,e+1,!1,t,c);if(r=Math.max(j,r),t=Math.max(t,r),c<=t)return!0}return!1})),r-e}var a=1/0;return n.some((function(n,i,r){if(""===n){var o=Object(x.a)(r);o[i]=0;var j=Y(o,e+1,!0,t,c);if(a=Math.min(j,a),(c=Math.min(c,a))<=t)return!0}return!1})),a+e}var f=function(n,e){switch(n){case 1:return O(e);case 2:return function(n){return g(n)<5?O(n):M(n)}(e);case 3:default:return M(e)}},A=i(3),m=i(4);function E(){var n=Object(A.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:#ffd369;\n    text-align: center;\n    color: #222831;\n    max-height: 100%;\n    padding: 0;\n    cursor: pointer;\n    text-align: center;\n    transition: transform 0.8s;\n    font-size: 2rem;\n    &.player{\n        cursor: not-allowed;\n        transform: rotateY(180deg);\n        &::after{\n            content:'X'\n        }\n        background-color:#a9f5a9;\n        &.win{\n            background-color: #40da40;\n        }\n    }\n    &.ai{\n        cursor: not-allowed;\n        transform: rotateY(180deg);\n        &::after{\n            content:'O'\n        }\n        background-color:#fb8383;\n        &.win{\n            background-color: #fd4747;\n        }\n    }\n\n"]);return E=function(){return n},n}function G(){var n=Object(A.a)(["\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-template-rows: repeat(4,1fr);\n    column-gap: 3px;\n    row-gap: 3px;\n    height: 55vw;\n    width: 55vw;\n    padding: 5px;\n\n    @media (min-width: 767px) { \n        height: 30vw;\n        width: 30vw;\n    }\n"]);return G=function(){return n},n}function b(){var n=Object(A.a)(["\n    display: flex;\n    padding-top: 48px;\n    flex-direction: column;\n    flex-wrap: wrap;\n    text-align: center;  \n    #btn-container{\n        display: flex;\n        flex-direction: column;\n        margin:5vh auto;\n        width: 30vw;\n        button{\n            width: 100%;\n            margin-top: 1rem;\n        }\n        @media (max-width: 300px){\n            width: 70%;\n        }\n    } \n\n    #game-container{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n    }\n"]);return b=function(){return n},n}var p=m.a.div(b()),I=m.a.div(G()),w=m.a.div(E()),k=function(n){var e,i=n.value,c=n.text,r=n.move,a=n.values,o=n.win;switch(c){case 0:e="player";break;case 1:e="ai";break;default:e=""}return Object(t.jsx)(w,{onClick:function(){return r(i,0,a)},className:"field ".concat(e," ").concat(o?"win":"")})};function v(){var n=Object(A.a)(["\n    @keyframes shine {\n        0% {\n            background-position: right;    \n        }\n    }\n    display:block;\n    height: 3rem;\n    width: 50%;\n    font-size: 1.2rem;\n    line-height: 1rem;\n    color: #393e46;\n    background-color:#ffd369;\n    background-image: linear-gradient(\n        to right,\n        transparent 33%,\n        #fdebbb,\n        transparent 66%\n    );\n    background-size:300% 100%;\n    border: 1px solid #2a323d;\n    cursor: pointer;\n    &:hover{\n        animation: shine 2s;\n    }\n    box-shadow:3px 3px #0a0c0f;\n    &:active{\n        box-shadow: none;\n    }\n    @media (min-width: 767px) { \n        padding: 1rem 1rem;\n        width: 30%;\n    }\n    @media (max-width: 300px){\n        width: 70%;\n    }\n"]);return v=function(){return n},n}var N=m.a.button(v());function y(){var n=Object(A.a)(["\n    position: fixed;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-around;\n    top: 32.5vh;\n    left: 15vw;\n    transition: all 0.75s ease-in-out;\n    transform: translateX(300%);\n    height: 35vh;\n    width: 70vw;\n    text-align: center;\n    background-color: rgba(100,100,100,0.95);\n    &.open{\n        transform: translateX(0);\n    }\n\n    p{\n        margin-bottom: 2rem;\n    }\n\n    .btn-container{\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: column;\n        @media (min-width: 767px){\n            flex-direction: row;\n        }\n        *{\n            margin-bottom:2px;\n        }\n    }\n\n    @media (min-width: 767px) { \n        left: 32.5%;\n        width: 35%;\n    } \n\n"]);return y=function(){return n},n}var S=m.a.div(y()),U=function(n){var e=n.onConfirm,i=void 0===e?function(){}:e,c=n.onReject,r=void 0===c?function(){}:c,a=n.text,o=n.isOpen,j=void 0!==o&&o,x=n.setIsOpen;return Object(t.jsxs)(S,{className:j?"open":"",children:[Object(t.jsx)("p",{children:a}),Object(t.jsxs)("div",{className:"btn-container",children:[Object(t.jsx)(N,{onClick:function(){i(),x(!1)},children:"\u0414\u0430"}),Object(t.jsx)(N,{onClick:function(){r(),x(!1)},children:"\u041d\u0435"})]})]})},H=function(n){var e,i=n.difficulty,a=n.setVisibleSettings,o=n.setDifficulty,j=Object(r.useState)(new Array(16).fill("")),l=Object(c.a)(j,2),u=l[0],s=l[1],g=Object(r.useState)([]),O=Object(c.a)(g,2),M=O[0],Y=O[1],A=Object(r.useState)(Math.random()>.5?0:1),m=Object(c.a)(A,2),E=m[0],G=m[1],b=Object(r.useState)(!1),w=Object(c.a)(b,2),v=w[0],y=w[1],S=Object(r.useState)([0,0]),H=Object(c.a)(S,2),F=H[0],K=H[1],J=function(n,e,i,t){var a=Object(r.useState)(n),o=Object(c.a)(a,2),j=o[0],x=o[1],l=Object(r.useState)(e),u=Object(c.a)(l,2),s=u[0],h=u[1],d=Object(r.useState)(i),R=Object(c.a)(d,2);return[j,x,s,h,R[0],R[1]]}(!1,(function(){}),(function(){})),D=Object(c.a)(J,4),B=D[0],Q=D[1],L=D[2],q=D[3],C=Object(r.useState)(""),T=Object(c.a)(C,2),W=T[0],Z=T[1],V=Object(r.useCallback)((function(n,e,i){(function(n,e){return""===e[n]})(n,i)&&!v&&(e===E&&(G(0===E?1:0),s((function(e){var i=Object(x.a)(e);return i.splice(n,1,E),i}))))}),[E,v]),z=Object(r.useCallback)((function(n){setTimeout((function(){i&&V(f(i,n),1,n)}),300)}),[V,i]),P=function(){y(!1),s(new Array(16).fill("")),Y([]),G(Math.random()>.5?0:1)},X=function(){P(),a(!0),o(null),K([0,0])};switch(Object(r.useEffect)((function(){G(Math.random()>.5?0:1)}),[i]),Object(r.useEffect)((function(){if(d(u)){var n=R(u);1===n&&K((function(n){return[n[0],n[1]+.5]})),0===n&&K((function(n){return[n[0]+.5,n[1]]})),Y(function(n){return h(n)[2]}(u)),y(!0)}else 1===E&&z(u,1)}),[u,E,z]),i){case 1:e="\u041b\u0430\u043a\u043e";break;case 2:e="\u0421\u0440\u0435\u0434\u045a\u0435";break;case 3:e="\u0422\u0435\u0448\u043a\u043e";break;default:e="\u0418\u0437\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0436\u0438\u043d\u0443"}return Object(t.jsxs)(p,{children:[Object(t.jsxs)("div",{children:[Object(t.jsxs)("p",{children:["\u0422\u0435\u0436\u0438\u043d\u0430 \u0438\u0433\u0440\u0435: ",e]}),Object(t.jsxs)("p",{children:["\u0418\u0433\u0440\u0430\u0447 ",F[0]," : ",F[1]," \u0420\u0430\u0447\u0443\u043d\u0430\u0440"]}),Object(t.jsx)("p",{children:v?Object(t.jsx)("br",{}):"\u041d\u0430 \u043f\u043e\u0442\u0435\u0437\u0443: ".concat(0===E?"\u0418\u0433\u0440\u0430\u0447":"\u0420\u0430\u0447\u0443\u043d\u0430\u0440")}),Object(t.jsx)("div",{id:"game-container",children:Object(t.jsx)(I,{children:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((function(n,e){return Object(t.jsx)(k,{value:n,text:u[e],move:V,values:u,win:M.includes(n)},n)}))})})]}),Object(t.jsxs)("div",{id:"btn-container",children:[Object(t.jsx)(N,{onClick:function(){v||u.every((function(n){return""===n}))?P():(Q(!0),q((function(){return P})),Z("\u041f\u043e\u043d\u0438\u0448\u0442\u0430\u0432\u0430\u045a\u0435 \u0442\u0440\u0435\u043d\u0443\u0442\u043d\u0435 \u0438\u0433\u0440\u0435?"))},children:"\u041f\u043e\u0447\u043d\u0438 \u043f\u043e\u043d\u043e\u0432\u043e"}),Object(t.jsx)(N,{onClick:function(){Q(!0),q((function(){return X})),Z("\u0420\u0435\u0441\u0442\u0430\u0440\u0442 \u0438 \u043c\u0435\u045a\u0430\u045a\u0435 \u0442\u0435\u0436\u0438\u043d\u0435?")},children:"\u041f\u0440\u043e\u043c\u0435\u043d\u0438 \u0442\u0435\u0436\u0438\u043d\u0443"})]}),Object(t.jsx)(U,{isOpen:B,setIsOpen:Q,onConfirm:L,text:W})]})};function F(){var n=Object(A.a)(["\n\n    z-index: 1;\n    transition: all 1.1s ease-in-out;\n  \n    position: fixed;\n    min-height: 98vh;\n    padding-top: 2vh;\n    width: 100vw;\n    text-align: center;\n    background-color: rgba(100,100,100,0.95);\n    @media (min-height: 700px) and (min-width: 400px){\n        min-height: 92vh;\n        padding-top: 8vh;\n    }\n    &.closed{\n        transition: all 0.5s ease-in-out;\n        transform: translateY(100%);\n    }\n\n    * {\n        text-align: center;\n    }\n    h2{\n        margin-bottom: 1rem;\n        text-shadow: 0.5px 0.5px black;\n    }\n    .btn-container{\n        display: flex;\n        width: 70%;\n        text-align: center;\n        align-items: center;\n        flex-direction: column;\n        margin: auto;\n        @media (min-width: 767px) { \n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            justify-content: space-between;\n        }\n    }\n    h3{\n        display: none;\n        @media (min-width: 767px) { \n            display: block;\n            text-shadow: 0.5px 0.5px black;\n        }\n    }\n    p{\n        display: none;\n        @media (min-width: 767px){\n            display: block;\n            text-shadow: 0.5px 0.5px black;\n            width: 50%;\n            min-height: 1.5rem;\n            margin: auto;\n            margin-bottom: 3rem;\n        }\n    }\n    ol li{\n        text-align: left;\n    }\n    h4{\n        margin-bottom: 0.5rem;\n        @media (min-height: 700px){\n            margin-bottom: 1rem;\n        }\n    }\n    .shape{\n        margin: 1px auto;\n        width: 150px;\n        border-bottom: 2px solid #3d3c3a;\n        &:hover{\n            background-color: grey;\n        }\n    }\n    button{\n        margin: 1px;\n    }\n \n    img{\n        height: 150px;\n        margin: 3px;\n        @media (min-height: 700px) and (min-width: 400px){\n            height: 170px;\n        }\n        @media (min-height: 800px) and (min-width: 450px){\n            height: 200px;\n        }\n        @media (max-height: 570px){\n            height: 100px\n        }\n        @media (max-width: 300px){\n            height: 100px;\n        }\n    }\n \n"]);return F=function(){return n},n}var K=m.a.div(F()),J=i.p+"static/media/windiag.4d8d571c.png",D=i.p+"static/media/winsquare.690c1f47.png",B=i.p+"static/media/winvertical.68db064b.png",Q=function(n){var e=n.setDifficulty,i=n.visible,a=n.setVisible,o=Object(r.useState)(null),j=Object(c.a)(o,2),x=j[0],l=j[1],u=function(n){e(Number(n)),a(!1)};return Object(t.jsxs)(K,{isVisible:i,className:i||"closed",children:[Object(t.jsx)("h1",{children:"4x4 \u0418\u043a\u0441-\u041e\u043a\u0441"}),Object(t.jsx)("h2",{children:"\u0418\u0437\u0430\u0431\u0440\u0430\u0442\u0438 \u0442\u0435\u0436\u0438\u043d\u0443"}),Object(t.jsxs)("div",{className:"btn-container",children:[Object(t.jsx)(N,{value:1,onClick:function(n){return u(n.target.value)},onMouseEnter:function(){return l("\u041b\u0430\u043a\u043e: \u0420\u0430\u0447\u0443\u043d\u0430\u0440 \u043d\u0430\u0441\u0443\u043c\u0438\u0447\u043d\u043e \u0431\u0438\u0440\u0430 \u043f\u043e\u0442\u0435\u0437\u0435")},onMouseLeave:function(){return l(null)},children:"\u041b\u0430\u043a\u043e"}),Object(t.jsx)(N,{value:2,onClick:function(n){return u(n.target.value)},onMouseEnter:function(){return l("\u0421\u0440\u0435\u0434\u045a\u0435: \u0420\u0430\u0447\u0443\u043d\u0430\u0440 \u043d\u0430\u0441\u0443\u043c\u0438\u0447\u043d\u043e \u0431\u0438\u0440\u0430 \u043f\u0440\u0432\u0438\u0445 \u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u043f\u043e\u0442\u0435\u0437\u0430")},onMouseLeave:function(){return l(null)},children:"\u0421\u0440\u0435\u0434\u045a\u0435"}),Object(t.jsx)(N,{value:3,onClick:function(n){return u(n.target.value)},onMouseEnter:function(){return l("\u0422\u0435\u0448\u043a\u043e: \u0420\u0430\u0447\u0443\u043d\u0430\u0440 \u0431\u0438\u0440\u0430 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u0430\u043d \u043f\u043e\u0442\u0435\u0437")},onMouseLeave:function(){return l(null)},children:"\u0422\u0435\u0448\u043a\u043e"})]}),Object(t.jsx)("h3",{children:"\u041e\u043f\u0438\u0441 \u0442\u0435\u0436\u0438\u043d\u0435: (\u043c\u0438\u0448\u0435\u043c \u043f\u0440\u0435\u043a\u043e \u0434\u0443\u0433\u043c\u0438\u045b\u0430 \u0438\u0437\u043d\u0430\u0434)"}),Object(t.jsx)("p",{children:x}),Object(t.jsx)("h4",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438 \u0443\u043f\u0443\u0442\u0441\u0442\u0432\u0430"}),Object(t.jsx)("q",{children:"\u0421\u043f\u043e\u0458\u0438\u0442\u0438 4 \u0437\u043d\u0430\u043a\u0430 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043e\u0434 \u0441\u043b\u0435\u0434\u0435\u045b\u0438\u0445 \u043d\u0430\u0447\u0438\u043d\u0430"}),Object(t.jsxs)("div",{id:"wins",children:[Object(t.jsx)("img",{src:J,alt:"\u0414\u0438\u0458\u0430\u0433\u043e\u043d\u0430\u043b\u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0430"}),Object(t.jsx)("img",{src:"data:image/png;base64,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",alt:"\u0425\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0430"}),Object(t.jsx)("br",{}),Object(t.jsx)("img",{src:D,alt:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0430"}),Object(t.jsx)("img",{src:B,alt:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0430"})]})]})},L=(i(24),function(){var n=Object(r.useState)(null),e=Object(c.a)(n,2),i=e[0],a=e[1],o=Object(r.useState)(!0),j=Object(c.a)(o,2),x=j[0],l=j[1];return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(Q,{setDifficulty:a,visible:x,setVisible:l}),Object(t.jsx)(H,{difficulty:i,setVisibleSettings:l,setDifficulty:a})]})});j.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(L,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ecbfbff5.chunk.js.map