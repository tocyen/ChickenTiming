(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/\u98fc\u6599.9bf2cab6.png"},,,function(t,e,a){t.exports=a.p+"static/media/\u5c0f\u516c\u96de.20a4d13c.png"},function(t,e,a){t.exports=a.p+"static/media/\u4e2d\u6bcd\u96de.fc33caa9.png"},function(t,e,a){t.exports=a.p+"static/media/\u5927\u516c\u96de.c093e890.png"},,,,,,function(t,e,a){t.exports=a.p+"static/media/\u75ab\u82d7.24cff795.png"},function(t,e,a){t.exports=a.p+"static/media/\u725b\u5200.502ae071.png"},,,function(t,e,a){t.exports=a.p+"static/media/\u9322.cb8dd734.png"},function(t,e,a){t.exports=a.p+"static/media/\u70b8\u5f48.0d9245a7.png"},function(t,e,a){t.exports=a.p+"static/media/\u4ea4\u914d.863c6dc4.png"},function(t,e,a){t.exports=a.p+"static/media/\u8cfc\u8cb7.e4ca2355.png"},function(t,e,a){t.exports=a.p+"static/media/\u8ca9\u8ce3.a04eaa4f.png"},,,,,,,,function(t,e,a){t.exports=a.p+"static/media/\u6625\u5929.4f20277c.png"},,,,,,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/NPC.45a889a0.png"},function(t,e,a){t.exports=a.p+"static/media/\u5c0f\u6bcd\u96de.20a4d13c.png"},function(t,e,a){t.exports=a.p+"static/media/\u4e2d\u516c\u96de.db54e496.png"},function(t,e,a){t.exports=a.p+"static/media/\u5927\u6bcd\u96de.e07562b2.png"},function(t,e,a){t.exports=a.p+"static/media/\u590f\u5929.042351c8.png"},function(t,e,a){t.exports=a.p+"static/media/\u79cb\u5929.e7f34644.png"},function(t,e,a){t.exports=a.p+"static/media/\u51ac\u5929.0341e6ac.png"},function(t,e,a){t.exports=a.p+"static/media/\u96de\u86cb\u7c43.1766c6f7.png"},,function(t,e,a){t.exports=a(122)},,,,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,,function(t,e,a){},,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){t.exports=a.p+"static/media/\u9078\u64c7\u884c\u52d5\u80cc\u666f\u5716.17fc98d1.png"},function(t,e,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,,function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(51),i=a.n(c),l=a(8),o=a.n(l),r=a(9),m=a(3),u=a(4),p=a(6),h=a(5),d=a(7),E=a(1),f=(a(68),a(70),function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={name:""},a.inputName=a.inputName.bind(Object(E.a)(Object(E.a)(a))),a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"inputName",value:function(){this.props.updateName(this.state.name)}},{key:"onChange",value:function(t){this.setState({name:t.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Name-wrapper"},s.a.createElement("div",{className:"login page"},s.a.createElement("div",{className:"form"},s.a.createElement("h2",null,"\u6700\u4f73\u6642\u96de"),s.a.createElement("input",{autoFocus:!0,className:"usrinput",type:"text",placeholder:"Enter your name",onChange:this.onChange}),s.a.createElement("ul",{className:"confirm"},s.a.createElement("li",{className:"confirm-button",onClick:this.inputName},s.a.createElement("p",null,"\u78ba\u8a8d"))))))}}]),e}(n.Component)),g=(a(72),function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"create_req",value:function(){this.props.socket.emit("CREATE_REQ",{name:this.props.name})}},{key:"componentDidMount",value:function(){var t=this;this.props.socket.on("ROOM_STATUS",function(e){t.props.updateRoomID(e),t.props.changeSection(2)})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"Room-wrapper"},s.a.createElement("div",{className:"room select"},s.a.createElement("h2",null,"\u6700\u4f73\u6642\u96de"),s.a.createElement("div",{className:"username"},"Hi, ",this.props.name),s.a.createElement("ul",{className:"join-create"},s.a.createElement("li",{className:"joinroom-button",onClick:function(){t.props.changeSection(3)}},s.a.createElement("p",null,"\u52a0\u5165\u623f\u9593")),s.a.createElement("li",{className:"createroom-button",onClick:function(){t.create_req()}},s.a.createElement("p",null,"\u5efa\u7acb\u623f\u9593")))))}}]),e}(n.Component)),N=(a(74),a(16),function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={roomstatus:{},admin:!1},a.game_start_req=a.game_start_req.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.socket.on("ROOM_STATUS",function(e){t.props.updateRoomID(e),t.setState({roomstatus:t.props.roomstatus});var a=e.players.find(function(e){return e.name===t.props.name});!0===a.admin?t.setState({admin:!0}):(t.setState({admin:!1}),console.log(a))}),this.props.socket.on("GAME_START",function(){t.props.changeSection(4)})}},{key:"componentWillMount",value:function(){this.setState({roomstatus:this.props.roomstatus})}},{key:"game_start_req",value:function(){this.props.socket.emit("GAME_START_REQ",{rid:this.state.roomstatus.rid}),this.props.changeSection(4)}},{key:"render",value:function(){var t=this;return console.log(this.props),s.a.createElement("div",{className:"create-wrapper"},s.a.createElement("div",{className:"roomid"},"RoomID:",this.props.roomstatus.rid),s.a.createElement("ul",{className:"player"},s.a.createElement("li",null,this.state.roomstatus.players[0].name),s.a.createElement("li",null,this.state.roomstatus.players.length>=2?this.state.roomstatus.players[1].name:"Waiting..."),s.a.createElement("li",null,this.state.roomstatus.players.length>=3?this.state.roomstatus.players[2].name:"Waiting..."),s.a.createElement("li",null,this.state.roomstatus.players.length>=4?this.state.roomstatus.players[3].name:"Waiting...")),this.state.admin?s.a.createElement("div",{className:"start-button",onClick:function(){t.game_start_req()}},s.a.createElement("p",null,"\u958b\u59cb\u904a\u6232")):s.a.createElement("div",{className:"wait-button"},s.a.createElement("p",null,"\u7b49\u5f85\u958b\u59cb\u4e2d")))}}]),e}(n.Component)),k=(a(77),a(52)),b=a.n(k),v=a(10),S=a.n(v),O=a(21),j=a.n(O),y=a(22),C=a.n(y),x=a(53),_=a.n(x),R=a(13),w=a.n(R),A=a(14),T=a.n(A),D=a(54),M=a.n(D),U=a(55),I=a.n(U),Q=a(15),q=a.n(Q),$=a(23),H=a(24),P=[{title:"\u65b0\u624b\u6559\u5b78",content:"\u4e00\u958b\u59cb\u6bcf\u4eba\u6709 45 \u5143\u53ca\u4e00\u9593\u990a\u96de\u5834\uff0c\u53ef\u4ee5\u8cfc\u8cb7\u9053\u5177\u53ca\u96de\u96bb\u3002\u4f9d\u5e8f\u6625\u590f\u79cb\u51ac\u56db\u5b63\u9032\u884c\u8f2a\u66ff\uff0c\u6bcf\u5f35\u56db\u5b63\u5361\u7576\u4e2d\u6703\u6709\u4e00\u5b9a\u7684\u53ef\u57f7\u884c\u884c\u52d5\u7e3d\u6578\u3002\u6bcf\u56de\u5408\u73a9\u5bb6\u9078\u64c7\u4e00\u500b\u884c\u52d5\uff0c\u884c\u52d5\u7e3d\u6578\u4f9d\u7167\u9078\u64c7\u8a72\u884c\u52d5\u7684\u4eba\u6578\u4f86\u9032\u884c\u5e73\u5206\u3002\u7528\u4e0d\u5b8c\u7684\u884c\u52d5\u5247\u4e00\u500b\u884c\u52d5\u63db\u53d6\u4e00\u584a\u9322\u3002\u6700\u5f8c\u6536\u76ca\u6700\u9ad8\u8005\u7372\u52dd\u3002"},{title:"\u9053\u5177\u4ecb\u7d39",pic:S.a,item:"\u98fc\u6599",text:"\u9935\u98df\u5f8c\u53ef\u8b93\u96de\u5411\u4e0a\u5347\u4e00\u968e"},{title:"\u9053\u5177\u4ecb\u7d39",pic:j.a,item:"\u75ab\u82d7",text:"\u907f\u514d\u96de\u96bb\u611f\u67d3\u79bd\u6d41\u611f\uff0c\u53d6\u5f97\u96de\u4e09\u5b63\u5167\u672a\u65bd\u6253\uff0c\u5c31\u6703\u5f97\u79bd\u6d41\u611f"},{title:"\u9053\u5177\u4ecb\u7d39",pic:C.a,item:"\u725b\u5200",text:"\u5bb0\u6bba\u611f\u67d3\u79bd\u6d41\u611f\u7684\u96de\u96bb\uff0c\u907f\u514d\u79bd\u6d41\u611f\u7206\u767c\uff0c\u800c\u50b3\u67d3\u7d66\u5176\u5b83\u96de\u96bb"},{title:"\u96de\u7a2e\u4ecb\u7d39",animalpic:w.a,animal2pic:_.a,animal:"\u5c0f\u516c\u96de",animal2:"\u5c0f\u6bcd\u96de",extraText:"\u7121\u6cd5\u4ea4\u914d"},{title:"\u96de\u7a2e\u4ecb\u7d39",animalpic:M.a,animal2pic:T.a,animal:"\u4e2d\u516c\u96de",animal2:"\u4e2d\u6bcd\u96de",extraText:"\u4ea4\u914d\u5f8c\u7522 1~2 \u9846\u86cb"},{title:"\u96de\u7a2e\u4ecb\u7d39",animalpic:q.a,animal2pic:I.a,animal:"\u5927\u516c\u96de",animal2:"\u5927\u6bcd\u96de",extraText:"\u4ea4\u914d\u5f8c\u7522 2~3 \u9846\u86cb"}],W=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={dialogNum:0},a.updateDialog=a.updateDialog.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"updateDialog",value:function(){this.setState({dialogNum:this.state.dialogNum+1}),console.log(this.state.dialogNum),6===this.state.dialogNum&&this.props.changeSection(5)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Tutorial-wrapper"},s.a.createElement("div",{className:"dialog-box",onClick:this.updateDialog},s.a.createElement("div",{className:"dialog-title"},P[this.state.dialogNum].title),s.a.createElement("div",{className:"item-title"},P[this.state.dialogNum].item),P[this.state.dialogNum].pic?s.a.createElement("img",{className:"pic",src:P[this.state.dialogNum].pic,alt:""}):P[this.state.dialogNum].animalpic?s.a.createElement("span",null,s.a.createElement("img",{className:"animalpic",src:P[this.state.dialogNum].animalpic,alt:""}),s.a.createElement("img",{className:"animal2pic",src:P[this.state.dialogNum].animal2pic,alt:""}),s.a.createElement("div",{className:"animal"},P[this.state.dialogNum].animal),s.a.createElement("div",{className:"animal2"},P[this.state.dialogNum].animal2),s.a.createElement("div",{className:"extraText"},P[this.state.dialogNum].extraText)):null,P[this.state.dialogNum].text?s.a.createElement("div",{className:"text"},P[this.state.dialogNum].text):null,s.a.createElement("div",{className:"content"},P[this.state.dialogNum].content),s.a.createElement($.a,{className:"nav-icon animated infinite flash",icon:H.a})),s.a.createElement("div",{className:"npc-pic"},s.a.createElement("img",{className:"npc",src:b.a,alt:""})))}}]),e}(n.Component),z=(a(81),a(25)),L=a.n(z),F=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={userstatus:{money:"45",items:{feed:0,knife:0,shot:0},chickens:[]},roomstatus:{},items:["knife","feed","shot","chick_s","chick_m","chick_l"]},a.pChick_s=a.pChick_s.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.socket.on("USER_STATUS",function(e){t.setState({userstatus:e}),console.log(t.state.userstatus)}),this.props.socket.on("ROUND_END",function(){t.props.changeSection(6)})}},{key:"componentWillMount",value:function(){this.setState({roomstatus:this.props.roomstatus})}},{key:"pChick_s",value:function(){this.props.socket.emit("PURCHASE_REQ",{rid:this.state.roomstatus.rid,item:this.state.items[3]})}},{key:"pChick_m",value:function(){this.props.socket.emit("PURCHASE_REQ",{rid:this.state.roomstatus.rid,item:this.state.items[4]})}},{key:"pChick_l",value:function(){this.props.socket.emit("PURCHASE_REQ",{rid:this.state.roomstatus.rid,item:this.state.items[5]})}},{key:"pKnife",value:function(){this.props.socket.emit("PURCHASE_REQ",{rid:this.state.roomstatus.rid,item:this.state.items[0]})}},{key:"pFeed",value:function(){this.props.socket.emit("PURCHASE_REQ",{rid:this.state.roomstatus.rid,item:this.state.items[1]}),console.log(this.state.userstatus.items.feed)}},{key:"pShot",value:function(){this.props.socket.emit("PURCHASE_REQ",{rid:this.state.roomstatus.rid,item:this.state.items[2]})}},{key:"round_end_req",value:function(){this.props.socket.emit("ROUND_END_REQ",{rid:this.state.roomstatus.rid})}},{key:"purchase",value:function(){console.log(this.state.roomstatus.rid)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"purchase-wrapper"},s.a.createElement("div",{className:"money-wrapper"},s.a.createElement("img",{className:"money",src:L.a,alt:""}),s.a.createElement("span",null,"$ ",this.state.userstatus.money)),s.a.createElement("div",{className:"purchase-title"},"\u8acb\u9078\u64c7\u60a8\u60f3\u8cfc\u8cb7\u7684\u5546\u54c1"),s.a.createElement("ul",{className:"item-list"},s.a.createElement("li",null,s.a.createElement("img",{className:"item",src:w.a,alt:""})),s.a.createElement("li",{className:"item-name"},"\u5c0f\u96de",s.a.createElement("span",{className:"length"},"(",this.state.userstatus.chickens.filter(function(t){return"S"===t.size}).length,")")),s.a.createElement("li",{className:"item-num"},"$ 6"),s.a.createElement("li",{className:"item-button",onClick:function(){t.pChick_s()}},"\u8cfc\u8cb7")),s.a.createElement("ul",{className:"item-list"},s.a.createElement("li",null,s.a.createElement("img",{className:"item",src:S.a,alt:""})),s.a.createElement("li",{className:"item-name"},"\u98fc\u6599",s.a.createElement("span",{className:"length"},"(",this.state.userstatus.items.feed,")")),s.a.createElement("li",{className:"item-num"},"$ 1"),s.a.createElement("li",{className:"item-button",onClick:function(){t.pFeed()}},"\u8cfc\u8cb7")),s.a.createElement("ul",{className:"item-list"},s.a.createElement("li",null,s.a.createElement("img",{className:"item",src:T.a,alt:""})),s.a.createElement("li",{className:"item-name"},"\u4e2d\u96de",s.a.createElement("span",{className:"length"},"(",this.state.userstatus.chickens.filter(function(t){return"M"===t.size}).length,")")),s.a.createElement("li",{className:"item-num"},"$ 10"),s.a.createElement("li",{className:"item-button",onClick:function(){t.pChick_m()}},"\u8cfc\u8cb7")),s.a.createElement("ul",{className:"item-list"},s.a.createElement("li",null,s.a.createElement("img",{className:"item",src:j.a,alt:""})),s.a.createElement("li",{className:"item-name"},"\u75ab\u82d7",s.a.createElement("span",{className:"length"},"(",this.state.userstatus.items.shot,")")),s.a.createElement("li",{className:"item-num"},"$ 1"),s.a.createElement("li",{className:"item-button",onClick:function(){t.pShot()}},"\u8cfc\u8cb7")),s.a.createElement("ul",{className:"item-list"},s.a.createElement("li",null,s.a.createElement("img",{className:"item",src:q.a,alt:""})),s.a.createElement("li",{className:"item-name"},"\u5927\u96de",s.a.createElement("span",{className:"length"},"(",this.state.userstatus.chickens.filter(function(t){return"L"===t.size}).length,")")),s.a.createElement("li",{className:"item-num"},"$ 15"),s.a.createElement("li",{className:"item-button",onClick:function(){t.pChick_l()}},"\u8cfc\u8cb7")),s.a.createElement("ul",{className:"item-list"},s.a.createElement("li",null,s.a.createElement("img",{className:"item",src:C.a,alt:""})),s.a.createElement("li",{className:"item-name"},"\u725b\u5200",s.a.createElement("span",{className:"length"},"(",this.state.userstatus.items.knife,")")),s.a.createElement("li",{className:"item-num"},"$ 3"),s.a.createElement("li",{className:"item-button",onClick:function(){t.pKnife()}},"\u8cfc\u8cb7")),s.a.createElement("div",{className:"startgame-button",onClick:function(){t.round_end_req()}},"\u5b8c\u6210\u8cfc\u8cb7"))}}]),e}(n.Component),J=(a(83),a(26)),B=a.n(J),G=a(27),K=a.n(G),V=a(28),X=a.n(V),Y=a(29),Z=a.n(Y),tt=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={userstatus:{},roomstatus:{},clickAction:!0,action:["feed","sex","purchase","sell"],showSelected:!1,round:{}},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setState({roomstatus:this.props.roomstatus}),this.props.socket.on("USER_STATUS",function(){var e=Object(r.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,t.setState({userstatus:a});case 3:t.props.updateAction(t.state.userstatus);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),this.props.socket.on("ROUND_START",function(){var e=Object(r.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({round:a});case 2:t.props.updateRound(t.state.round),t.props.changeSection(8);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}},{key:"action_feed",value:function(){console.log(this.state.roomstatus.rid),this.props.socket.emit("ACTION_REQ",{rid:this.state.roomstatus.rid,action:this.state.action[0]})}},{key:"action_sex",value:function(){this.props.socket.emit("ACTION_REQ",{rid:this.state.roomstatus.rid,action:this.state.action[1]})}},{key:"action_purchase",value:function(){this.props.socket.emit("ACTION_REQ",{rid:this.state.roomstatus.rid,action:this.state.action[2]})}},{key:"action_sell",value:function(){this.props.socket.emit("ACTION_REQ",{rid:this.state.roomstatus.rid,action:this.state.action[3]})}},{key:"clickAction",value:function(){this.setState({clickAction:!1})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"action-wrapper"},s.a.createElement("div",{className:"opacity-black"},this.state.clickAction?s.a.createElement("div",{className:"action-intro"},"\u8acb\u9078\u64c7\u60a8\u672c\u56de\u5408\u8981\u9032\u884c\u7684\u884c\u52d5"):s.a.createElement("div",{className:"action-intro"},"\u8acb\u7b49\u5f85\u5176\u4ed6\u73a9\u5bb6\u9078\u64c7\u884c\u52d5"),s.a.createElement("img",{className:"bomb animated infinite flash",src:B.a,alt:""}),s.a.createElement("table",{className:"action-box"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{onClick:function(){t.clickAction(),t.action_feed()}},"\u9935\u98df",s.a.createElement("br",null),s.a.createElement("img",{className:"action-feed",src:S.a,alt:""})),s.a.createElement("td",{onClick:function(){t.clickAction(),t.action_sex()}},"\u4ea4\u914d",s.a.createElement("br",null),s.a.createElement("img",{className:"action-sex",src:K.a,alt:""}))),s.a.createElement("tr",null,s.a.createElement("td",{onClick:function(){t.clickAction(),t.action_purchase()}},"\u8cfc\u8cb7",s.a.createElement("br",null),s.a.createElement("img",{className:"action-buy",src:X.a,alt:""})),s.a.createElement("td",{onClick:function(){t.clickAction(),t.action_sell()}},"\u8ca9\u8ce3",s.a.createElement("br",null),s.a.createElement("img",{className:"action-sell",src:Z.a,alt:""})))))))}}]),e}(n.Component),et=(a(85),a(37)),at=a.n(et),nt=a(56),st=a.n(nt),ct=a(57),it=a.n(ct),lt=a(58),ot=a.n(lt),rt=(at.a,st.a,it.a,ot.a,function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.props.changeSection(7)},3e3)}},{key:"render",value:function(){return s.a.createElement("div",{className:"season-wrapper"},s.a.createElement("div",{className:"deco animated zoomIn"}),s.a.createElement("span",{className:"seasontext animated zoomIn"},"\u6625\u5929\u4f86\u4e86"),s.a.createElement("img",{className:"seasontime animated zoomIn",src:at.a,alt:""}))}}]),e}(n.Component)),mt=(a(87),function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={rid:0},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a.join_req=a.join_req.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"join_req",value:function(){this.props.socket.emit("JOIN_REQ",{rid:this.state.rid,name:this.props.name})}},{key:"onChange",value:function(t){this.setState({rid:t.target.value})}},{key:"componentDidMount",value:function(){var t=this;this.props.socket.on("ROOM_STATUS",function(e){t.props.changeSection(2)})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"Join-wrapper"},s.a.createElement("div",{className:"join-box"},s.a.createElement("input",{autoFocus:!0,className:"roomcode",type:"text",placeholder:"Enter Room code",onChange:this.onChange}),s.a.createElement("ul",{className:"confirm"},s.a.createElement("li",{className:"confirm-button",onClick:function(){t.join_req()}},s.a.createElement("p",null,"\u78ba\u8a8d")))))}}]),e}(n.Component)),ut=(a(89),a(91),function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={userstatus:{}},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(r.a)(o.a.mark(function t(){var e=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({userstatus:this.props.userstatus});case 2:console.log(this.state.userstatus.actions),setTimeout(function(){e.props.changeSection(9)},3e3);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"SelectedAction-wrapper"},s.a.createElement("div",{className:"choose-box"},"\u60a8\u7372\u5f97\u4e86\u65b0\u52d5\u4f5c"),s.a.createElement("br",null),s.a.createElement("img",{className:"choose-action",src:S.a,alt:""}),s.a.createElement("img",{className:"choose-action",src:K.a,alt:""}),s.a.createElement("img",{className:"choose-action",src:X.a,alt:""}),s.a.createElement("img",{className:"choose-action",src:Z.a,alt:""}))}}]),e}(n.Component)),pt=(a(92),a(59)),ht=a.n(pt),dt=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={userstatus:{},round:{},showStatus:!1,seasons:["\u6625","\u590f","\u79cb","\u51ac"]},a.Lstatus=a.Lstatus.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"Lstatus",value:function(){this.setState({showStatus:!this.state.showStatus})}},{key:"Mstatus",value:function(){this.setState({showStatus:!this.state.showStatus})}},{key:"Sstatus",value:function(){this.setState({showStatus:!this.state.showStatus})}},{key:"close",value:function(){this.setState({showStatus:!1})}},{key:"componentDidMount",value:function(){var t=Object(r.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({userstatus:this.props.userstatus,round:this.props.round});case 2:console.log(this.state.userstatus),this.props.socket.on("USER_STATUS",function(){});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"Main-wrapper"},s.a.createElement("div",{className:"navbar"},s.a.createElement("span",null,this.state.seasons[this.state.round.currentSeason]),s.a.createElement("span",null,this.state.userstatus.name),s.a.createElement("span",null,s.a.createElement("img",{className:"main-money",src:L.a,alt:""})," ",this.state.userstatus.money),s.a.createElement("span",null,s.a.createElement("img",{className:"main-countdown",src:B.a,alt:""})),s.a.createElement("span",null,"\u8ca9\u8ce3\u5269\u9918 6 \u6b21")),s.a.createElement("div",{className:"farm"},s.a.createElement("img",{className:"eggs",src:ht.a,alt:"",onClick:function(){}}),s.a.createElement("img",{className:"Smale",src:w.a,alt:"",onClick:function(){t.Sstatus()}}),s.a.createElement("img",{className:"Mfemale",src:T.a,alt:"",onClick:function(){t.Mstatus()}}),s.a.createElement("img",{className:"Bmale",src:q.a,alt:"",onClick:function(){t.Lstatus()}}),s.a.createElement("table",{className:"chickhouse"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null))))),this.state.showStatus?s.a.createElement("div",{className:"Status-list"},s.a.createElement("div",{className:"opacitybackground"},s.a.createElement("div",{className:"chickenlist"},s.a.createElement($.a,{className:"cross",icon:H.b,onClick:function(){t.close()}}),s.a.createElement("table",{className:"status-box"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"\u6027\u5225"),s.a.createElement("td",null,"\u5927\u5c0f"),s.a.createElement("td",null,"\u65bd\u6253\u75ab\u82d7"),s.a.createElement("td",null,"\u50b3\u67d3"),s.a.createElement("td",{onClick:function(){t.feed()}},"\u9935\u98df"),s.a.createElement("td",{onClcik:function(){}},"\u725b\u5200"),s.a.createElement("td",{onClcik:function(){}},"\u4ea4\u914d")),s.a.createElement("tr",null,s.a.createElement("td",null,"Male"),s.a.createElement("td",null,"Large"),s.a.createElement("td",null,"\u662f"),s.a.createElement("td",null,"\u5426"),s.a.createElement("td",null,"\u9935\u98df"),s.a.createElement("td",null,"\u725b\u5200"),s.a.createElement("td",null,"\u4ea4\u914d"))))))):null)}}]),e}(n.Component),Et=a(60),ft=a.n(Et)()("https://nuk.noob.tw/"),gt=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={currentSection:0,name:"",roomstatus:{},userstatus:{},round:{}},a.updateName=a.updateName.bind(Object(E.a)(Object(E.a)(a))),a.changeSection=a.changeSection.bind(Object(E.a)(Object(E.a)(a))),a.updateRoomID=a.updateRoomID.bind(Object(E.a)(Object(E.a)(a))),a.updateAction=a.updateAction.bind(Object(E.a)(Object(E.a)(a))),a.updateRound=a.updateRound.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"changeSection",value:function(){var t=Object(r.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return ft.off("USER_STATUS"),t.next=3,this.setState({currentSection:e});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateName",value:function(t){this.setState({name:t,currentSection:1})}},{key:"updateRoomID",value:function(t){this.setState({roomstatus:t})}},{key:"updateAction",value:function(){var t=Object(r.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({userstatus:e});case 2:console.log(this.state.userstatus);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateRound",value:function(){var t=Object(r.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({round:e});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},0===this.state.currentSection?s.a.createElement(f,{updateName:this.updateName}):null,1===this.state.currentSection?s.a.createElement(g,{socket:ft,updateRoomID:this.updateRoomID,name:this.state.name,changeSection:this.changeSection}):null,2===this.state.currentSection?s.a.createElement(N,{socket:ft,changeSection:this.changeSection,roomstatus:this.state.roomstatus,updateRoomID:this.updateRoomID,name:this.state.name}):null,3===this.state.currentSection?s.a.createElement(mt,{socket:ft,changeSection:this.changeSection,name:this.state.name}):null,4===this.state.currentSection?s.a.createElement(W,{changeSection:this.changeSection}):null,5===this.state.currentSection?s.a.createElement(F,{socket:ft,changeSection:this.changeSection,roomstatus:this.state.roomstatus}):null,6===this.state.currentSection?s.a.createElement(rt,{changeSection:this.changeSection}):null,7===this.state.currentSection?s.a.createElement(tt,{updateRound:this.updateRound,updateAction:this.updateAction,socket:ft,changeSection:this.changeSection,roomstatus:this.state.roomstatus}):null,8===this.state.currentSection?s.a.createElement(ut,{updateAction:this.updateAction,userstatus:this.state.userstatus,socket:ft,changeSection:this.changeSection}):null,9===this.state.currentSection?s.a.createElement(dt,{round:this.state.round,socket:ft,userstatus:this.state.userstatus,changeSection:this.changeSection}):null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(gt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[61,2,1]]]);
//# sourceMappingURL=main.5b29fd09.chunk.js.map