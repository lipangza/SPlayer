import{d as a,r as e,o as s,H as o,k as t,j as r,af as l,cz as n,h as u,m as d,i,a8 as m,b4 as c}from"./stores-De5JHsxi.js";import{_ as v}from"./CoverList-ClOCTyga.js";import{s as p}from"./index-tqBPJ7OH.js";import"./album-9FZAS1rf.js";const f={class:"search-type"},y=a({__name:"videos",props:{keyword:{}},setup(a){const y=a,k=e(!0),j=e(!0),_=e(0),g=e(1),h=e([]),w=async()=>{j.value=!0;const a=await p(y.keyword,50,_.value,1004);k.value=a.result?.hasMore||a.result?.mvCount>_.value+50,g.value=a.result?.mvCount;const e=n(a.result.mvs);h.value=h.value?.concat(e),j.value=!1},C=()=>{_.value+=50,w()};return s((()=>{w()})),(a,e)=>{const s=v,n=m,p=c;return u(),o("div",f,[t(l,{name:"fade",mode:"out-in"},{default:r((()=>[d(g)>0?(u(),i(s,{key:0,data:d(h),loading:d(j),loadMore:d(k),cols:"2 600:2 800:3 900:4 1200:5 1400:6",type:"video",onLoadMore:C},null,8,["data","loading","loadMore"])):(u(),i(p,{key:1,description:`很抱歉，未能找到与 ${a.keyword} 相关的任何视频`,style:{"margin-top":"60px"},size:"large"},{icon:r((()=>[t(n,{name:"SearchOff"})])),_:1},8,["description"]))])),_:1})])}}});export{y as default};
