(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{186:function(t,e,o){var content=o(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("04e8a3df",content,!0,{sourceMap:!1})},187:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("615b665d",content,!0,{sourceMap:!1})},188:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("3c9dad2c",content,!0,{sourceMap:!1})},189:function(t,e,o){var content=o(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("4f44fe35",content,!0,{sourceMap:!1})},190:function(t,e,o){var content=o(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("552ef33b",content,!0,{sourceMap:!1})},191:function(t,e,o){var content=o(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("1b7833da",content,!0,{sourceMap:!1})},192:function(t,e,o){"use strict";o.r(e);var r={name:"Title",data:function(){return{title:"オンライン作業部屋"}},computed:{room_name:function(){return this.$store.state.roomName}}},n=(o(197),o(36)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"title"}},[e("div",{attrs:{id:"room-name"}},[e("h2",[this._v(this._s(this.room_name))])]),this._v(" "),e("h2",{attrs:{id:"room-category"}},[this._v("\n    ルーム\n  ")])])}),[],!1,null,"4c6f1eba",null);e.default=component.exports},193:function(t,e,o){"use strict";o.r(e);o(9),o(10),o(3);var r={name:"Time",data:function(){return{date:new Date}},computed:{year:function(){return this.date.getFullYear()},month:function(){return this.date.getMonth()+1},day:function(){return this.date.getDate()},hours:function(){return this.date.getHours()},minutes:function(){var t=this.date.getMinutes().toString();return 1===t.length&&(t="0".concat(t)),t},seconds:function(){return this.date.getSeconds()}},created:function(){setInterval(this.updateTime,1e3)},methods:{updateTime:function(){this.date=new Date}}},n=(o(199),o(36)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"time"}},[o("p",[t._v(t._s(t.year)+"年 "+t._s(t.month)+"月 "+t._s(t.day)+"日")]),t._v(" "),o("p",{staticClass:"clock"},[t._v("\n    "+t._s(t.hours)+"："+t._s(t.minutes)+"\n  ")])])}),[],!1,null,"ccbccf9a",null);e.default=component.exports},194:function(t,e,o){"use strict";o.r(e);o(119),o(20),o(9),o(10),o(3),o(42);var r=o(6),n={name:"RoomInfo",components:{RoomLayout:o(196).default},data:function(){return{roomIdList:[],roomNameList:[],timeout1:null,room_id:"",room_name:"　　",room_layout:null,users:[],show:!0,switchRoomInterval:3e3}},created:function(){this.switchRoom()},destroyed:function(){clearTimeout(this.timeout1)},methods:{switchRoom:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=t).show=!1,e.next=4,o.retrieveRoomIdList();case 4:if(r=o.roomIdList.indexOf(o.$store.state.roomId),console.log("current index = ",r),n="",-1!==r){e.next=13;break}return e.next=10,o.$store.commit("setRoomId",o.roomIdList[0]);case 10:n=o.roomNameList[0],e.next=17;break;case 13:return c=(r+1)%t.roomIdList.length,e.next=16,o.$store.commit("setRoomId",o.roomIdList[c]);case 16:n=o.roomNameList[c];case 17:return e.next=19,o.fetchRoomInfo(n);case 19:o.timeout1=setTimeout((function(){o.switchRoom()}),o.switchRoomInterval),o.show=!0;case 21:case"end":return e.stop()}}),e)})))()},retrieveRoomIdList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,r=new URL("https://io551valj4.execute-api.ap-northeast-1.amazonaws.com/rooms"),e.next=4,fetch(r.toString(),{method:"GET"}).then((function(t){return t.json()}));case 4:"ok"===(n=e.sent).result?(c=[],m=[],n.rooms.forEach((function(t){c.push(t.room_id),m.push(t.room_body.name)})),o.roomIdList=c,o.roomNameList=m):console.error(n.message);case 6:case"end":return e.stop()}}),e)})))()},fetchRoomInfo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,n,c,m,h,l,i;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.$store.state.roomId,(n=new URL("https://io551valj4.execute-api.ap-northeast-1.amazonaws.com/room_status")).search=new URLSearchParams({room_id:r}).toString(),o.next=6,fetch(n.toString(),{method:"GET"}).then((function(t){return t.json()}));case 6:if(c=o.sent,e.$store.commit("setRoomName",t),"ok"===c.result)if(e.room_id=r,e.room_layout=c.room_layout,m=c.room_status.room_body.users,h=c.users,m&&h)if(m.length===h.length){for(l=[],i=0;i<m.length;i++)l.push({userId:m[i].user_id,userName:h[i].display_name});e.users=l}else console.error("userSeats.length !== users.length");else e.users=[];else console.error(c.message),e.room_layout=null;case 9:case"end":return o.stop()}}),o)})))()}}},c=(o(203),o(36)),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"roomInfo"}},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}]},[e("RoomLayout",{attrs:{"room-id":this.room_id,layout:this.room_layout}})],1)])],1)}),[],!1,null,"c8ab9c04",null);e.default=component.exports;installComponents(component,{RoomLayout:o(196).default})},195:function(t,e,o){"use strict";o.r(e);o(120),o(9),o(10),o(3),o(42);var r=o(6),n={name:"Message",data:function(){return{numOnlineUsers:0,numRooms:0,timeout:null}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateNums();case 2:o=t,t.timeout=setInterval(o.updateNums,1e4);case 4:case"end":return e.stop()}}),e)})))()},methods:{updateNums:function(){this.updateNumRooms(),this.updateNumOnlineUsers()},updateNumRooms:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URL("https://io551valj4.execute-api.ap-northeast-1.amazonaws.com/rooms"),e.next=3,fetch(o.toString(),{method:"GET"}).then((function(t){return t.json()}));case 3:"ok"===(r=e.sent).result?r.rooms?t.numRooms=Number(r.rooms.length):t.numRooms=0:console.log(r.message);case 5:case"end":return e.stop()}}),e)})))()},updateNumOnlineUsers:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URL("https://io551valj4.execute-api.ap-northeast-1.amazonaws.com/online_users"),e.next=3,fetch(o.toString(),{method:"GET"}).then((function(t){return t.json()}));case 3:"ok"===(r=e.sent).result?r.online_users?t.numOnlineUsers=Number(r.online_users.length):t.numOnlineUsers=0:console.log(r.message);case 5:case"end":return e.stop()}}),e)})))()}}},c=(o(205),o(36)),component=Object(c.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"message"}},[this._v("\n  現在、全 "+this._s(this.numRooms)+"ルームで "+this._s(this.numOnlineUsers)+"人が作業中\n")])}),[],!1,null,"9ae9fb84",null);e.default=component.exports},196:function(t,e,o){"use strict";o.r(e);o(20);var r={name:"RoomLayout",props:{layout:{type:Object,default:null}},data:function(){return{emptySeatColor:"#fce7d2",filledSeatColor:"#ee989f",isMounted:!1,seats_if_filled:null}},computed:{roomLayout:{get:function(){return this.layout},set:function(){}},userNamesMap:{get:function(){return this.userNamesMapProp?this.userNamesMapProp:null},set:function(){}},seatFontSizePx:{get:function(){return this.isMounted&&this.roomLayout&&this.roomShape?this.roomShape.width*this.roomLayout.font_size_ratio:30},set:function(){}},roomShape:{get:function(){return this.isMounted&&this.roomLayout?{widthPx:800*this.roomLayout.room_shape.width/this.roomLayout.room_shape.height,heightPx:800}:{widthPx:1100,heightPx:800}},set:function(){}},seatShape:{get:function(){if(this.roomLayout){return{width:100*this.roomLayout.seat_shape.width/this.roomLayout.room_shape.width,height:100*this.roomLayout.seat_shape.height/this.roomLayout.room_shape.height}}return{width:0,height:0}},set:function(){}},seatPositions:{get:function(){if(this.roomLayout){var t=this;return this.roomLayout.seats.map((function(e){return{x:100*e.x/t.layout.room_shape.width,y:100*e.y/t.layout.room_shape.height}}))}return[]},set:function(){}},partitionShapes:{get:function(){if(this.roomLayout){var t=this;return t.roomLayout.partitions.map((function(e,o){for(var r,n,c=t.roomLayout.partition_shapes,m=e.shape_type,i=0;i<c.length;i++)c[i].name===m&&(r=100*c[i].width/t.roomLayout.room_shape.width,n=100*c[i].height/t.roomLayout.room_shape.height);return{widthPercent:r,heightPercent:n}}))}return[]},set:function(){}},partitionPositions:function(){if(this.roomLayout){var t=this;return this.roomLayout.partitions.map((function(e){return{x:100*e.x/t.layout.room_shape.width,y:100*e.y/t.layout.room_shape.height}}))}return[]},seats:function(){return this.roomLayout?this.roomLayout.seats:[]},partitions:function(){return this.roomLayout?this.roomLayout.partitions:(console.log("もどした"),[])}},watch:{},mounted:function(){this.isMounted=!0},methods:{}},n=(o(201),o(36)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{ref:"roomLayout",style:{width:t.roomShape.widthPx+"px",height:t.roomShape.heightPx+"px"},attrs:{id:"room-layout"}},[t._l(t.seats,(function(e,r){return o("div",{key:e.id,staticClass:"seat",style:{backgroundColor:e.is_vacant?t.emptySeatColor:t.filledSeatColor,left:t.seatPositions[r].x+"%",top:t.seatPositions[r].y+"%",width:t.seatShape.width+"%",height:t.seatShape.height+"%",fontSize:t.seatFontSizePx+"px"}},[o("p",{staticStyle:{"font-weight":"bold"}},[t._v("\n        "+t._s(e.id)+"\n      ")]),t._v(" "),o("p",{staticStyle:{overflow:"hidden"}},[t._v("\n        "+t._s(e.user_name.substr(0,4))+"\n      ")])])})),t._v(" "),t._l(t.partitions,(function(e,r){return o("div",{key:e.id,staticClass:"partition",style:{left:t.partitionPositions[r].x+"%",top:t.partitionPositions[r].y+"%",width:t.partitionShapes[r].widthPercent+"%",height:t.partitionShapes[r].heightPercent+"%"}})}))],2)])}),[],!1,null,"37863a8a",null);e.default=component.exports},197:function(t,e,o){"use strict";var r=o(186);o.n(r).a},198:function(t,e,o){(e=o(40)(!1)).push([t.i,"#title[data-v-4c6f1eba]{padding-top:.5rem;width:1536px;font-size:1.3rem;color:#36479f}#room-name[data-v-4c6f1eba]{padding:.3rem .6rem;border:.2rem solid #36479f;border-radius:1rem}#room-category[data-v-4c6f1eba],#room-name[data-v-4c6f1eba]{display:inline-block}",""]),t.exports=e},199:function(t,e,o){"use strict";var r=o(187);o.n(r).a},200:function(t,e,o){(e=o(40)(!1)).push([t.i,"#time[data-v-ccbccf9a]{padding-top:.6rem;font-size:larger;background-color:#e2fcfc;width:384px;overflow:visible}.clock[data-v-ccbccf9a]{font-size:1.7rem;font-weight:700}",""]),t.exports=e},201:function(t,e,o){"use strict";var r=o(188);o.n(r).a},202:function(t,e,o){(e=o(40)(!1)).push([t.i,'#room-layout[data-v-37863a8a]{position:relative;top:0;left:0;background-color:azure;margin:auto;border:6px solid #666}#room-layout[data-v-37863a8a]:before{content:"";display:block}.seat[data-v-37863a8a]{display:flex;flex-direction:column;justify-content:center;align-items:center}.partition[data-v-37863a8a],.seat[data-v-37863a8a]{position:absolute}.partition[data-v-37863a8a]{background-color:#647a7f}',""]),t.exports=e},203:function(t,e,o){"use strict";var r=o(189);o.n(r).a},204:function(t,e,o){(e=o(40)(!1)).push([t.i,"h2[data-v-c8ab9c04]{color:#36479f}#roomInfo[data-v-c8ab9c04]{padding-top:.5rem;width:1920px;height:818px;overflow:auto}.fade-enter-active[data-v-c8ab9c04]{transition:.3s}.fade-leave-active[data-v-c8ab9c04]{transition:2s}.fade-enter[data-v-c8ab9c04],.fade-leave-to[data-v-c8ab9c04]{opacity:0}#studying-users-title[data-v-c8ab9c04]{text-align:left;margin-left:1rem;font-size:1.5rem}#users[data-v-c8ab9c04]{display:flex;flex-direction:row;flex-wrap:wrap}.user[data-v-c8ab9c04]{height:5rem;width:10rem;margin:1rem;overflow:hidden}.user i[data-v-c8ab9c04]{font-size:2rem}.user .user-name[data-v-c8ab9c04]{font-size:1.5rem}",""]),t.exports=e},205:function(t,e,o){"use strict";var r=o(190);o.n(r).a},206:function(t,e,o){(e=o(40)(!1)).push([t.i,"#message[data-v-9ae9fb84]{font-size:2rem;background-color:#fcf89e;width:1920px;height:100px}",""]),t.exports=e},207:function(t,e,o){"use strict";var r=o(191);o.n(r).a},208:function(t,e,o){(e=o(40)(!1)).push([t.i,'html{font-size:xx-large;width:1920px;height:1080px;overflow:auto}body,html{padding:0;margin:0}#header{height:160px}#header,#main{width:1920px;display:flex}#app{font-family:"Hannari",Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#footer,.block{width:1920px}',""]),t.exports=e},209:function(t,e,o){"use strict";o.r(e);var r=o(192),n=o(193),c=o(194),m=o(195),h={components:{Title:r.default,Time:n.default,RoomInfo:c.default,Message:m.default}},l=(o(207),o(36)),component=Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"block"},[e("div",{attrs:{id:"header"}},[e("Title"),this._v(" "),e("Time")],1),this._v(" "),e("div",{attrs:{id:"main"}},[e("RoomInfo")],1),this._v(" "),e("div",{attrs:{id:"footer"}},[e("Message",{attrs:{message:""}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(192).default,Time:o(193).default,RoomInfo:o(194).default,Message:o(195).default})}}]);