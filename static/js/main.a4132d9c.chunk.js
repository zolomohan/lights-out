(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(15),n(1)),l=n(2),s=n(4),u=n(3),d=n(5),m=n(8),f=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.props.flipCellsAround()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("td",{className:"Cell"+(this.props.isLit?" Cell-lit":""),onClick:this.handleClick})}}]),t}(a.Component)),h=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).restart=function(){n.setState({hasWon:!1,board:n.createBoard()})},n.randomBoolean=function(){return 0===Math.floor(4*Math.random())},n.state={hasWon:!1,board:n.createBoard()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"createBoard",value:function(){for(var e=this.props,t=e.nrows,n=e.ncols,a=[],r=0;r<t;r++){a[r]=[];for(var o=0;o<n;o++)a[r][o]=this.randomBoolean()}return a}},{key:"flipCellsAround",value:function(e){var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=e.split("-").map(Number),c=Object(m.a)(o,2),i=c[0],l=c[1];function s(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}s(i,l),s(i-1,l),s(i+1,l),s(i,l-1),s(i,l+1);var u=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:u})}},{key:"render",value:function(){var e=this;return this.state.hasWon?r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title winner"},r.a.createElement("div",{className:"neon"},"You"),r.a.createElement("div",{className:"flux"},"Win")),r.a.createElement("button",{className:"neon",id:"restartBtn",onClick:this.restart},"Restart")):r.a.createElement("div",null,r.a.createElement("div",{class:"Board-title"},r.a.createElement("div",{class:"neon"},"Lights"),r.a.createElement("div",{class:"flux"},"Out")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,this.state.board.map(function(t,n){return r.a.createElement("tr",{key:n},t.map(function(t,a){return r.a.createElement(f,{key:n+"-"+a,isLit:t,flipCellsAround:function(){return e.flipCellsAround(n+"-"+a)}})}))}))))}}]),t}(a.Component));h.defaultProps={nrows:5,ncols:5};var p=h,v=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a4132d9c.chunk.js.map