(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/persons",d=function(){return m.a.get(s).then((function(e){return e.data}))},f=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},p=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:e.filterText,onChange:e.handleFilterChange}))},v=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handlePersonChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.person,t=e.handleDelete;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name," "),r.a.createElement("td",null,n.number," "),r.a.createElement("td",null,r.a.createElement("button",{onClick:t},"delete")))},E=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],s=i[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],C=j[1],k=Object(a.useState)(""),S=Object(l.a)(k,2),y=S[0],T=S[1],N=Object(a.useState)([]),D=Object(l.a)(N,2),L=D[0],x=D[1],P=Object(a.useState)(null),F=Object(l.a)(P,2),J=F[0],A=F[1],B=Object(a.useState)(null),I=Object(l.a)(B,2),q=I[0],z=I[1];Object(a.useEffect)((function(){console.log("effect"),d().then((function(e){console.log("promise fulfilled"),o(e),x(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:J,type:q}),r.a.createElement(p,{filterText:y,handleFilterChange:function(e){console.log(e.target.value),T(e.target.value);var n=""===e.target.value?t:t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));x(n)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(v,{handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===m}));void 0===n?f({name:m,number:O}).then((function(e){o(t.concat(e)),s(""),C(""),(""===y||e.name.toLowerCase().includes(y.toLowerCase()))&&x(L.concat(e)),z("message"),A("".concat(e.name," was added to the phonebook")),setTimeout((function(){A(null)}),3e3)})).catch((function(e){console.log(e.response.data.error),z("error"),A("".concat(e.response.data.error)),setTimeout((function(){A(null)}),3e3)})):function(e){if(window.confirm("".concat(m," is already added to phonebook, replace old number with a new one?"))){var n=Object(c.a)(Object(c.a)({},e),{},{number:O});h(e.id,n).then((function(n){n?(o(t.map((function(t){return t.id!==e.id?t:n}))),s(""),C(""),x(L.map((function(t){return t.id!==e.id?t:n}))),z("message"),A("".concat(n.name," was updated")),setTimeout((function(){A(null)}),3e3)):(x(L.filter((function(n){return n.id!==e.id}))),z("error"),A("".concat(e.name," was already removed from the server")),setTimeout((function(){A(null)}),3e3))})).catch((function(e){z("error"),A("".concat(e.response.data.error)),setTimeout((function(){A(null)}),3e3)}))}}(n)},handlePersonChange:function(e){console.log(e.target.value),s(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),C(e.target.value)},newName:m,newNumber:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("table",null,r.a.createElement("tbody",null,L.map((function(e,n){return r.a.createElement(g,{key:n,person:e,handleDelete:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&b(e).then((function(){console.log("deleted"),o(t.filter((function(n){return n.id!==e}))),x(L.filter((function(n){return n.id!==e}))),z("message"),A("".concat(n.name," was removed from the phonebook")),setTimeout((function(){A(null)}),3e3)})).catch((function(e){z("error"),A("".concat(n.name," was already removed from the server")),setTimeout((function(){A(null)}),3e3)}))}(e.id)}})})))))};t(37);u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8ba6e979.chunk.js.map