import{d as a,u as e,f as s,r as t,co as u,H as r,I as l,k as o,j as n,m as d,am as c,aj as m,au as i,h as f,a1 as v,a2 as y,af as _,i as h,cq as p,cp as k,cG as w,K as j}from"./stores-DLHJ0LFH.js";import{u as b,o as g}from"./index-D8wNg7e8.js";const q={class:"title"},R=j(a({__name:"layout",setup(a){const j=b(),R=e(),x=s((()=>j.currentRoute.value.query.keyword)),A=t(j.currentRoute.value?.name||"search-songs"),I=a=>{j.push({name:a,query:{keyword:x.value}})};return g((a=>{"search"===a.matched[0].name&&(A.value=a.name)})),(a,e)=>{const s=m,t=w,j=i,b=u("RouterView");return f(),r("div",{key:d(x),class:"search"},[l("div",q,[o(s,{class:"keyword"},{default:n((()=>[v(y(d(x)),1)])),_:1}),o(s,{depth:"3"},{default:n((()=>e[1]||(e[1]=[v("的相关搜索")]))),_:1})]),o(j,{value:d(A),"onUpdate:value":[e[0]||(e[0]=a=>c(A)?A.value=a:null),I],class:"tabs",type:"segment"},{default:n((()=>[o(t,{name:"search-songs"},{default:n((()=>e[2]||(e[2]=[v(" 单曲 ")]))),_:1}),o(t,{name:"search-playlists"},{default:n((()=>e[3]||(e[3]=[v(" 歌单 ")]))),_:1}),o(t,{name:"search-artists"},{default:n((()=>e[4]||(e[4]=[v(" 歌手 ")]))),_:1}),o(t,{name:"search-albums"},{default:n((()=>e[5]||(e[5]=[v(" 专辑 ")]))),_:1}),o(t,{name:"search-videos"},{default:n((()=>e[6]||(e[6]=[v(" 视频 ")]))),_:1}),o(t,{name:"search-radios"},{default:n((()=>e[7]||(e[7]=[v(" 播客 ")]))),_:1})])),_:1},8,["value"]),o(b,null,{default:n((({Component:a})=>[o(_,{name:`router-${d(R).routeAnimation}`,mode:"out-in"},{default:n((()=>[d(R).useKeepAlive?(f(),h(k,{key:0},[(f(),h(p(a),{keyword:d(x),class:"router-view"},null,8,["keyword"]))],1024)):(f(),h(p(a),{key:1,keyword:d(x),class:"router-view"},null,8,["keyword"]))])),_:2},1032,["name"])])),_:1})])}}}),[["__scopeId","data-v-225eb080"]]);export{R as default};
