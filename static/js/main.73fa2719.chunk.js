(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(13),n(3)),m=n(4),s=n(6),c=n(5),u=n(7),h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("p",null,n)))},d=function(e){var a=e.myrobots;return r.a.createElement("div",null,a.map(function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})}))},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Benjus Joost",username:"Mlgtas.Gooyty",email:"Ben.jah@hanna.org"},{id:12,name:"Koppe Htook",username:"Woplkiu.Holol",email:"jok.bed@genm.edu"}],g=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"0px solid black",height:"1000px"}},e.children)},p=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))},f=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(c.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={myrobots:b,searchfield:""},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.myrobots.filter(function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"ROBOFRIENDS"),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(d,{myrobots:a})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.73fa2719.chunk.js.map