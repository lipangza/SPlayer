import{_ as a,m as s,s as t,d as l,e,V as n,W as o}from"./index-B903CxKP.js";import{_ as c}from"./SongList-DPr6dAOg.js";import{r as i,w as r,f as u,g as m,i as d,j as b,T as f,Z as p,n as g,G as v,k as y,K as h,X as _,U as w,J as L,R as j,I as k,L as x,aw as E,aj as S,aE as C,W as A,aA as I,ap as B,aq as H}from"./vendor-QWMq--4w.js";import"./Pagination-D96eRF_4.js";const R=(a=>(B("data-v-c305ef7c"),a=a(),H(),a))((()=>L("img",{class:"cover",src:n,alt:"album-cover"},null,-1))),q={class:"content"},z={class:"album"},D={class:"artist"},P=a({__name:"albums",props:{songList:{type:Array,default:()=>[]}},setup(a){const n=s(),B=t(),H=a,P=i(null),W=i(null),G=a=>{const s=new Map;a?.forEach((a=>{const t=a.artists?a.artists.split(/[/,&]/):[],l=a.album?a.album.trim():"";t.forEach((a=>{const t=a.trim();s.has(l)?(s.get(l).artists.add(t),s.get(l).num+=1):s.set(l,{artist:t,album:l,num:1,artists:new Set([t])})}))}));const t=Array.from(s.values()).sort(((a,s)=>a.album.localeCompare(s.album,"zh-Hans-CN",{sensitivity:"base"})));W.value=t?.[0]?.album||null,P.value=t,p().then((()=>{K()}))},J=(a,s)=>a.filter((a=>!(!a.album||!a.album.includes(s))&&a)),K=l((()=>{try{const a=document.getElementById("album-list");a.querySelectorAll(".cover").forEach((async(a,s)=>{if((a=>{const s=a.getBoundingClientRect();return s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight)})(a)&&!a.classList.contains("loaded")){const t=await(async a=>{const s=J(H.songList,a)?.[0]?.path;return await o(s)})(P.value?.[s]?.album);t&&(a.classList.add("loaded"),a.src=t)}}))}catch(a){console.error("专辑封面获取失败：",a)}}),100);return r((()=>H.songList),(a=>G(a))),u((()=>{G(H.songList)})),(s,t)=>{const l=E,o=S,i=C,r=c,u=e,p=A,H=I;return m(),d(f,{name:"fade",mode:"out-in"},{default:b((()=>[g(P)?(m(),v("div",{key:0,style:k({height:`calc(100vh - ${Object.keys(g(n).playSongData)?.length&&g(B).showPlayBar?445:365}px)`}),class:"local-album"},[y(o,{id:"album-list",class:"album-list",onScroll:g(K)},{default:b((()=>[(m(!0),v(h,null,_(g(P),((a,s)=>(m(),d(l,{key:s,class:w(g(W)===a.album?"albums choose":"albums"),"content-style":{padding:"12px",display:"flex",flexDirection:"row",alignItems:"center"},onClick:s=>W.value=a.album},{default:b((()=>[R,L("div",q,[L("span",z,j(a.album),1),L("span",D,j(a.artist)+" · "+j(a.num)+" 首",1)])])),_:2},1032,["class","onClick"])))),128))])),_:1},8,["onScroll"]),y(i,{class:"divider",vertical:""}),y(o,{class:"songs-list"},{default:b((()=>[y(f,{name:"fade",mode:"out-in"},{default:b((()=>[(m(),d(r,{key:g(W),data:J(a.songList,g(W))},null,8,["data"]))])),_:1}),y(H,{bottom:"120"},{default:b((()=>[y(p,{size:"26"},{default:b((()=>[y(u,{icon:"chevron-up"})])),_:1})])),_:1})])),_:1})],4)):x("",!0)])),_:1})}}},[["__scopeId","data-v-c305ef7c"]]);export{P as default};
