(this.webpackJsonpdict=this.webpackJsonpdict||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){e.exports=n(78)},48:function(e,t,n){},49:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=n(3),s=n(4),l=n(6),u=n(5),d=(n(48),n(7)),m=n.n(d),f=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){m.a.init({duration:1e3})}},{key:"render",value:function(){return r.a.createElement("h1",{className:"header-container","data-aos":"fade-down"},"THE ENCYCLOPEDIA OF WORDS")}}]),n}(a.Component)),p=(n(49),n(13)),h=n(25),v=n.n(h),y=n(39),b=n(40),E=n.n(b).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb"}),O=n(9),j=Object(O.a)(),g=n(15),R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={word:null},e.onFormSubmit=function(t){t.preventDefault(),e.state.word?(e.setState({word:""}),e.mainForm.reset(),e.props.getDefinitions(e.state.word)):alert("enter any text!")},e.options=["Definitions","Pronunciations","Examples"],e.defaultOption=e.options[0],e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){m.a.init({duration:1e3})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sbmain"},r.a.createElement("form",{ref:function(t){return e.mainForm=t},className:"sb-container",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"sb-form","data-aos":"zoom-in"},r.a.createElement("input",{id:"maininput",type:"text",autoComplete:"off",className:"sb-input",onChange:function(t){e.setState({word:t.target.value})},required:!0}),r.a.createElement("label",{className:"sb-label-name"},r.a.createElement("span",{className:"sb-content-name"},"Enter any word here!"))),r.a.createElement("div",{className:"linkwrapper","data-aos":"fade-up"},r.a.createElement(g.a,{to:"/Dictionary/".concat(this.state.word),className:"sb-button button",onClick:this.onFormSubmit},"Search!"))),r.a.createElement("br",null))}}]),n}(a.Component),w=Object(p.b)(null,{getDefinitions:function(e){return function(){var t=Object(y.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j.push("/loading"),t.prev=1,t.next=4,E.get("".concat(e,"?fields=definitions,pronunciations,examples,etymologies&strictMatch=false"),{headers:{app_id:"7bb08d93",app_key:"de97395e0b8634ff6cbb3d9767c69109"}});case 4:a=t.sent,n({type:"DATA_OF_WORD",payload:a.data.results[0].lexicalEntries}),j.push("/Dictionary/".concat(e)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:"ERROR",payload:null}),j.push("/eRrOrXxX");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})(R),N=n(2),k=(n(73),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){m.a.init({duration:1e3})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("aside",null,r.a.createElement("ul",null,r.a.createElement("li",{"data-aos":"fade-left","data-aos-delay":"300"},r.a.createElement(g.a,{to:"/Dictionary/".concat(this.props.word,"/definitions")},"Definitions")),r.a.createElement("li",{"data-aos":"fade-left","data-aos-delay":"400"},r.a.createElement(g.a,{to:"/Dictionary/".concat(this.props.word,"/examples")},"Examples")),r.a.createElement("li",{"data-aos":"fade-left","data-aos-delay":"500"},r.a.createElement(g.a,{to:"/Dictionary/".concat(this.props.word,"/etymologies")},"Etymologies")),r.a.createElement("li",{"data-aos":"fade-left","data-aos-delay":"600"},r.a.createElement(g.a,{to:"/Dictionary/".concat(this.props.word,"/pronunciations")},"Pronunciations"))),r.a.createElement("div",{className:"instruct","data-aos":"fade-up","data-aos-delay":"650"},"Click any one of 'em!"))}}]),n}(a.Component)),D=(n(74),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"totalcontainer"},r.a.createElement("div",{className:"totaldatacontainer"},r.a.createElement(k,{word:this.props.match?this.props.match.params.word:""})))}}]),n}(a.Component)),A=(n(23),function(e){var t=e.data,n=e.keyid;if(t){var a=0;return t.map((function(e){return e.map((function(e){return r.a.createElement("div",{className:"td-wrapper",key:n[a++]},r.a.createElement("div",{className:"td-container"},e,".")," ")}))}))}}),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).result=[],e.resultid=[],e.nestRemover=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemover):"object"===typeof t&&Object.keys(t).forEach((function(n){"subsenses"!==n&&("definitions"===n?e.result.push(t[n]):e.nestRemover(t[n]))})))},e.nestRemoverId=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemoverId):"object"===typeof t&&Object.keys(t).forEach((function(n){"id"===n?e.resultid.push(t[n]):e.nestRemoverId(t[n])})))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){m.a.init({duration:1e3})}},{key:"render",value:function(){return this.result=[],this.resultid=[],this.nestRemover(this.props.definitions),this.nestRemoverId(this.props.definitions),this.result.length>0?r.a.createElement("div",{className:"def-container","data-aos":"fade-right"},r.a.createElement(A,{data:this.result,keyid:this.resultid})):r.a.createElement("div",{className:"ntg-container","data-aos":"fade-up"},"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15")}}]),n}(a.Component),S=Object(p.b)((function(e){return{definitions:e.definitions}}))(I),x=n(21),C=function(e){var t=e.data,n=e.keyid;if(t){var a=0;return t.map((function(e){return r.a.createElement("div",{className:"td-wrapper",key:n[a++]},r.a.createElement("div",{className:"td-container"},e,"."))}))}},_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).result=[],e.resultid=[],e.nestRemover=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemover):"object"===typeof t&&Object.keys(t).forEach((function(n){"text"===n?"Noun"!==t[n]&&"Verb"!==t[n]&&"Interjection"!==t[n]&&"Conjunction"!==t[n]&&"Pronounn"!=t[n]&&"Adverb"!=t[n]&&e.result.push(t[n]):e.nestRemover(t[n])})))},e.nestRemoverId=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemoverId):"object"===typeof t&&Object.keys(t).forEach((function(n){"id"===n?e.resultid.push(t[n]):e.nestRemoverId(t[n])})))},e.modifiedResult=function(t){e.result=Object(x.a)(new Set(t))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){m.a.init({duration:1e3})}},{key:"render",value:function(){return this.result=[],this.resultid=[],this.nestRemover(this.props.definitions),this.nestRemoverId(this.props.definitions),this.modifiedResult(this.result),this.result.length>0?r.a.createElement("div",{className:"def-container","data-aos":"fade-right"},r.a.createElement(C,{data:this.result,keyid:this.resultid})):r.a.createElement("div",{className:"ntg-container","data-aos":"fade-up"},"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15")}}]),n}(a.Component),F=Object(p.b)((function(e){return{definitions:e.definitions}}))(_),M=function(e){var t=e.data,n=e.keyid;if(t){var a=0;return t.map((function(e){return r.a.createElement("div",{className:"td-wrapper",key:n[a++]},r.a.createElement("div",{className:"td-container"},e,".")," ")}))}},X=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).result=[],e.resultid=[],e.nestRemover=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemover):"object"===typeof t&&Object.keys(t).forEach((function(n){"etymologies"===n?e.result.push(t[n]):e.nestRemover(t[n])})))},e.nestRemoverId=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemoverId):"object"===typeof t&&Object.keys(t).forEach((function(n){"id"===n?e.resultid.push(t[n]):e.nestRemoverId(t[n])})))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){m.a.init({duration:1e3})}},{key:"render",value:function(){return this.result=[],this.resultid=[],this.nestRemover(this.props.definitions),this.nestRemoverId(this.props.definitions),this.result.length>0?r.a.createElement("div",{className:"def-container","data-aos":"fade-right"},r.a.createElement(M,{data:this.result,keyid:this.resultid})):r.a.createElement("div",{className:"ntg-container","data-aos":"fade-up"},"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15")}}]),n}(a.Component),P=Object(p.b)((function(e){return{definitions:e.definitions}}))(X),T=n(41),L=n.n(T),W=(n(75),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).result=[],e.resultid=[],e.nestRemover=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemover):"object"===typeof t&&Object.keys(t).forEach((function(n){"audioFile"===n?e.result.push(t[n]):e.nestRemover(t[n])})))},e.nestRemoverId=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemoverId):"object"===typeof t&&Object.keys(t).forEach((function(n){"id"===n?e.resultid.push(t[n]):e.nestRemoverId(t[n])})))},e.modifiedResult=function(t){e.result=Object(x.a)(new Set(t))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){m.a.init({duration:1e3})}},{key:"render",value:function(){return this.result=[],this.resultid=[],this.nestRemover(this.props.definitions),this.nestRemoverId(this.props.definitions),this.modifiedResult(this.result),console.log(this.result),this.result.length>0?r.a.createElement("div",{className:"def-container","data-aos":"fade-right"},r.a.createElement("div",{className:"pronun-wrapper"},r.a.createElement(L.a,{src:this.result[0],controls:!0,className:"pronun-container"}))):r.a.createElement("div",{className:"ntg-container","data-aos":"fade-up"},"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15")}}]),n}(a.Component)),q=Object(p.b)((function(e){return{definitions:e.definitions}}))(W),J=function(){return r.a.createElement("div",{className:"er-container"},r.a.createElement("div",{className:"er-wrapper"},r.a.createElement("div",{className:"err-container"},r.a.createElement("span",{role:"img","aria-label":"faint"},"\ud83d\ude35"),"Sorry! No match Found!",r.a.createElement("span",{role:"img","aria-label":"faint"},"\ud83d\ude35"))))},U=(n(76),function(){return r.a.createElement("div",{className:"lineloader"})}),V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return 1==window.performance.navigation.type&&j.push("/Dictionary"),r.a.createElement("div",{className:"container"},r.a.createElement(N.b,{history:j},r.a.createElement("div",{className:"app-container"},r.a.createElement(f,null),r.a.createElement(w,null)),r.a.createElement(N.a,{path:"/loading",exact:!0,component:U}),r.a.createElement(N.a,{path:"/eRrOrXxX",exact:!0,component:J}),r.a.createElement(N.a,{path:"/Dictionary/:word",component:D}),r.a.createElement(N.a,{path:"/Dictionary/:word/definitions",component:S}),r.a.createElement(N.a,{path:"/Dictionary/:word/examples",component:F}),r.a.createElement(N.a,{path:"/Dictionary/:word/etymologies",component:P}),r.a.createElement(N.a,{path:"/Dictionary/:word/pronunciations",component:q})))}}]),n}(a.Component),z=(n(77),n(14)),H=Object(z.c)({definitions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_OF_WORD":case"ERROR":return t.payload;default:return e}}}),Y=n(42),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,G=Object(z.e)(H,B(Object(z.a)(Y.a)));i.a.render(r.a.createElement(p.a,{store:G},r.a.createElement(V,null)),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d04657d1.chunk.js.map