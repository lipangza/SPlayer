import{_ as a}from"./SongList-B6gqp1u5.js";import{d as s,r as o,Z as t,o as e,H as l,k as r,m as n,cR as i,b8 as u,aR as c,h as d}from"./stores-DLHJ0LFH.js";import{p as m}from"./index-D8wNg7e8.js";const v={class:"artist-songs"},g=s({__name:"songs",props:{id:{}},emits:["scroll"],setup(s,{expose:g,emit:p}){const f=s,h=p,y=o(!0),j=o(!0),x=o([]),R=o(0),S=async()=>{try{if(!f.id)return;y.value=!0;const a=await i(f.id,100,R.value);j.value=a?.more;const s=a?.songs.map((a=>a.id)),o=await u(s),t=c(o?.songs);x.value=x.value.concat(t),y.value=!1}catch(a){console.error("Error getting artist all songs:",a)}},_=t((()=>{x.value&&x.value?.length&&m.updatePlayList(x.value)}),300),w=()=>{j.value?(R.value+=100,S()):y.value=!1};return g({playAllSongs:_}),e(S),(s,o)=>{const t=a;return d(),l("div",v,[r(t,{data:n(x),loading:n(y),loadMore:"",onReachBottom:w,onScroll:o[0]||(o[0]=a=>h("scroll",a))},null,8,["data","loading"])])}}});export{g as default};
