import{_ as e,g as a,E as l,C as s,q as t,e as o,f as n,m as i,s as d,P as r,Q as u,R as c,S as p,a as y,T as m,y as v,b as g,U as h}from"./index-B903CxKP.js";import{a as f,s as k,r as _,g as w,i as b,j as C,k as S,P as D,n as P,T as x,J as $,R as z,G as I,K as L,X as T,L as j,Y as M,aG as A,aF as R,a1 as N,aH as q,ah as B,W as E,aw as U,aa as V,ac as O,ap as G,aq as F,a7 as J,M as X,O as Y,a4 as H,a5 as Q,Z as W,au as K,v as Z,w as ee,f as ae,a6 as le,U as se,V as te,at as oe,a0 as ne,aJ as ie}from"./vendor-QWMq--4w.js";import{_ as de}from"./Pagination-D96eRF_4.js";const re=(e=50,a=0)=>f({method:"GET",url:"/user/cloud",params:{limit:e,offset:a,timestamp:(new Date).getTime()}}),ue=(e,a)=>{const l=new FormData;return l.append("songFile",e),f({url:"/cloud",method:"POST",hiddenBar:!0,params:{timestamp:(new Date).getTime()},data:l,headers:{"Content-Type":"multipart/form-data"},timeout:2e5,onUploadProgress:a})},ce=(e=>(G("data-v-76404635"),e=e(),F(),e))((()=>$("div",{class:"cover-loading"},[$("img",{class:"loading-img",src:n,alt:"loading-img"})],-1))),pe={class:"content"},ye={class:"name"},me={class:"artist"},ve={key:0,class:"all-ar"},ge={key:1,class:"all-ar"},he={class:"ar"},fe=e({__name:"CloudSongMatch",setup(e,{expose:n}){const i=a(),d=l(),{userData:r}=k(i),u=_(null),c=_(null),p=_(!1),y=_(null),m=_({uid:r.value?.userId,sid:null,asid:null}),v=async e=>{if(Number(e.sid)===Number(e.asid))return $message.warning("与原歌曲 ID 一致，无需修改");if(!y.value)return $message.warning("未检测到正确的匹配检查结果");const a=await(l=e.uid,s=e.sid,t=e.asid,f({method:"GET",url:"/cloud/match",params:{uid:l,sid:s,asid:t,timestamp:(new Date).getTime()}}));var l,s,t;if(200===a.code){try{y.value.pc=void 0;const e=await d.getfilesDB("userCloudList");e[c.value]=JSON.parse(JSON.stringify(y.value)),await d.setfilesDB("userCloudList",e.slice()),"undefined"!=typeof $refreshCloudCatch&&$refreshCloudCatch()}catch(o){console.error("更改云盘列表时出错：",o),$message.error("更改云盘列表时出错，请刷新后重试")}g(),$message.success("歌曲信息纠正成功")}else $message.error("歌曲信息纠正失败，请重试")},g=()=>{p.value=!1,u.value=null,m.value.asid=null,y.value=null};return n({openCloudSongMatch:(e,a)=>{c.value=a,m.value.sid=e.id,p.value=!0}}),(e,a)=>{const l=A,n=R,i=N,d=q,r=B,u=o,c=E,h=U,f=V,k=O;return w(),b(k,{show:P(p),"onUpdate:show":a[5]||(a[5]=e=>M(p)?p.value=e:null),bordered:!1,"on-after-leave":g,title:"歌曲纠正",preset:"card"},{footer:C((()=>[S(f,{justify:"end"},{default:C((()=>[S(i,{onClick:g},{default:C((()=>[D(" 取消 ")])),_:1}),S(i,{disabled:!P(m).asid,type:"primary",onClick:a[4]||(a[4]=e=>v(P(m)))},{default:C((()=>[D(" 纠正 ")])),_:1},8,["disabled"])])),_:1})])),default:C((()=>[S(d,{class:"cloud-match","label-width":80,model:P(m)},{default:C((()=>[S(n,{label:"原歌曲 ID",path:"asid"},{default:C((()=>[S(l,{value:P(m).sid,"onUpdate:value":a[0]||(a[0]=e=>P(m).sid=e),"show-button":!1,disabled:""},null,8,["value"])])),_:1}),S(n,{label:"匹配的 ID",path:"asid"},{default:C((()=>[S(l,{value:P(m).asid,"onUpdate:value":a[1]||(a[1]=e=>P(m).asid=e),"show-button":!1,placeholder:"请输入要匹配的歌曲 ID"},null,8,["value"]),S(i,{disabled:!P(m).asid,style:{"margin-left":"12px"},onClick:a[2]||(a[2]=e=>(async e=>{try{if(!e)return!1;const a=e.toString(),l=await s(a);200===l.code&&l.songs.length>0?($message.success("匹配的歌曲检查通过"),y.value=t(l.songs[0],"song")[0]):$message.warning("请检查要匹配的歌曲 ID 是否正确")}catch(a){console.error("检查纠正歌曲失败：",a),$message.error("检查纠正歌曲失败，请重试")}})(P(m).asid))},{default:C((()=>[D(" 检查 ")])),_:1},8,["disabled"])])),_:1})])),_:1},8,["model"]),S(x,{name:"fade",mode:"out-in"},{default:C((()=>[P(y)?(w(),b(h,{key:P(y),"content-style":{display:"flex",flexDirection:"row",alignItems:"center",padding:"16px",height:"100%"},class:"song-detail"},{default:C((()=>[S(r,{src:P(y)?.coverSize?.s||P(y)?.cover,class:"cover-img","preview-disabled":"",onLoad:a[3]||(a[3]=e=>{e.target.style.opacity=1})},{placeholder:C((()=>[ce])),_:1},8,["src"]),$("div",pe,[$("div",ye,z(P(y)?.name||"未知曲目"),1),$("div",me,[S(c,{depth:"3",size:"20"},{default:C((()=>[S(u,{icon:"account-music"})])),_:1}),P(y)?.artists&&Array.isArray(P(y)?.artists)?(w(),I("div",ve,[(w(!0),I(L,null,T(P(y).artists,(e=>(w(),I("span",{key:e.id,class:"ar"},z(e.name),1)))),128))])):(w(),I("div",ge,[$("span",he,z(P(y)?.artists||"未知艺术家"),1)]))])])])),_:1})):j("",!0)])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-76404635"]]),ke={key:0,class:"song-data"},_e={class:"song-detail"},we={key:0,class:"all-ar"},be={key:1,class:"all-ar"},Ce={class:"all-menu"},Se=e({__name:"SongListDrawer",emits:["playSong","delCloudSong","deletePlaylistSong","delLocalSong"],setup(e,{expose:l,emit:s}){const t=J(),n=a(),p=i(),y=d(),{playMode:m}=k(y),{userData:v,userLikeData:g}=k(n),h=s,f=_(null),x=_(null),A=_(null),R=_(!1),N=_("song"),q=_(null),U=_(null),V=_(null),O=_(null),G=X((()=>"fm"===m.value)),F=X((()=>"song"===N.value)),W=X((()=>!!q.value?.path)),K=X((()=>!!q.value?.mv&&0!==q.value.mv)),Z=X((()=>"cloud"===t.currentRoute.value.name)),ee=X((()=>{const e=v.value?.userId,a=g.value.playlists?.filter((a=>a.userId===e));return 0!==V.value&&a.some((e=>e.id==V.value))}));return l({drawerOpen:(e,a,l,s,t)=>{R.value=!0,q.value=a,N.value=t,U.value=l,V.value=s,O.value=e}}),(e,a)=>{const l=B,s=Y,n=o,i=E,d=H,y=Q,v=u,g=c,k=fe;return w(),I(L,null,[S(y,{show:P(R),"onUpdate:show":a[9]||(a[9]=e=>M(R)?R.value=e:null),"auto-focus":!1,height:"calc(100vh - 200px)",placement:"bottom",class:"song-list-drawer",onAfterLeave:a[10]||(a[10]=e=>R.value=!1),onMaskClick:a[11]||(a[11]=e=>R.value=!1)},{default:C((()=>[S(d,{"native-scrollbar":!1,"body-content-style":{padding:0},closable:""},{header:C((()=>[P(q)?.path?(w(),b(s,{key:1},{default:C((()=>[D("更多操作")])),_:1})):(w(),I("div",ke,[S(l,{src:P(q)?.coverSize?.s||P(q)?.cover,class:"cover","preview-disabled":""},null,8,["src"]),$("div",_e,[S(s,{class:"name"},{default:C((()=>[D(z(P(q)?.name||"未知曲目"),1)])),_:1}),"song"===P(N)?(w(),I(L,{key:0},[P(q)?.artists&&Array.isArray(P(q).artists)?(w(),I("div",we,[(w(!0),I(L,null,T(P(q).artists,(e=>(w(),b(s,{key:e.id,class:"ar",depth:"3"},{default:C((()=>[D(z(e.name),1)])),_:2},1024)))),128))])):(w(),I("div",be,[S(s,{class:"ar",depth:"3"},{default:C((()=>[D(z(P(q).artists||"未知艺术家"),1)])),_:1})]))],64)):(w(),b(s,{key:1,class:"ar"},{default:C((()=>[D(z(P(q)?.artists||"未知艺术家"),1)])),_:1}))])]))])),default:C((()=>[$("div",Ce,[$("div",{class:"menu-item",onClick:a[0]||(a[0]=()=>{R.value=!1,h("playSong",P(O),P(q),P(U))})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"play"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 立即播放 ")])),_:1})]),P(F)&&"dj"!==P(m)&&P(p).getPlaySongData?.id!==P(q).id&&!P(G)?(w(),I("div",{key:0,class:"menu-item",onClick:a[1]||(a[1]=()=>{R.value=!1,m.value="normal",P(r)(P(q))})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"play-next"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 下一首播放 ")])),_:1})])):j("",!0),P(F)&&!P(W)?(w(),I("div",{key:1,class:"menu-item",onClick:a[2]||(a[2]=()=>{R.value=!1,P(f)?.openAddToPlaylist(P(q)?.id)})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"playlist-add"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 添加到歌单 ")])),_:1})])):j("",!0),P(F)&&!P(W)?(w(),I("div",{key:2,class:"menu-item",onClick:a[3]||(a[3]=()=>{R.value=!1,P(t).push({path:"/comment",query:{id:P(q).id}})})},[S(i,{size:"20"},{default:C((()=>[S(n,{icon:"comment-text"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 查看评论 ")])),_:1})])):j("",!0),P(F)&&P(K)?(w(),I("div",{key:3,class:"menu-item",onClick:a[4]||(a[4]=()=>{R.value=!1,P(t).push({path:"/videos-player",query:{id:P(q).mv}})})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"video"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 观看 MV ")])),_:1})])):j("",!0),!P(Z)&&P(ee)?(w(),I("div",{key:4,class:"menu-item",onClick:a[5]||(a[5]=()=>{R.value=!1,h("deletePlaylistSong",P(V),P(q),P(O),P(U))})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"delete"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 从歌单中删除 ")])),_:1})])):j("",!0),P(Z)?(w(),I("div",{key:5,class:"menu-item",onClick:a[6]||(a[6]=()=>{R.value=!1,h("delCloudSong",P(O),P(q),P(U))})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"delete"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 从云盘中删除 ")])),_:1})])):j("",!0),P(Z)?(w(),I("div",{key:6,class:"menu-item",onClick:a[7]||(a[7]=()=>{R.value=!1,P(A)?.openCloudSongMatch(P(q),P(U))})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"edit"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 云盘歌曲纠正 ")])),_:1})])):j("",!0),P(F)&&!P(W)?(w(),I("div",{key:7,class:"menu-item",onClick:a[8]||(a[8]=()=>{R.value=!1,P(x)?.openDownloadModal(P(q))})},[S(i,{size:"22"},{default:C((()=>[S(n,{icon:"download"})])),_:1}),S(s,{class:"name"},{default:C((()=>[D(" 下载歌曲 ")])),_:1})])):j("",!0)])])),_:1})])),_:1},8,["show"]),S(v,{ref_key:"addPlaylistRef",ref:f},null,512),S(g,{ref_key:"downloadSongRef",ref:x},null,512),S(k,{ref_key:"cloudSongMatchRef",ref:A},null,512)],64)}}},[["__scopeId","data-v-7cbd6e97"]]),De={__name:"SongListDropdown",emits:["playSong","delCloudSong","deletePlaylistSong","delLocalSong"],setup(e,{expose:l,emit:s}){const t=s,n=a(),y=i(),m=J(),v=d(),{playMode:g}=k(v),{userData:h,userLikeData:f}=k(n),b=_(0),C=_(0),D=_(!1),x=_(null),$=_(null),z=_(null),T=_(null),j=(e,a,l=0)=>()=>Z(E,{size:a??"18",style:{transform:`translateX(2px) translateY(${l}px)`}},(()=>Z(o,{icon:e}))),M=(e,a)=>()=>Z("div",{className:"song-data"},[Z(B,{src:e?.coverSize?.s||e?.cover,class:"cover",previewDisabled:!0}),Z("div",{class:"song-detail"},[Z(Y,{class:"name"},(()=>[e?.name||"未知曲目"])),a?e.artists&&Array.isArray(e.artists)?Z("div",{class:"all-ar"},e.artists.map((e=>Z(Y,{key:e.id,class:"ar",depth:3},(()=>[e.name]))))):Z("div",{class:"all-ar"},Z(Y,{class:"ar",depth:3},(()=>[e.artists||"未知艺术家"]))):Z(Y,{class:"ar",depth:3},(()=>["电台节目"]))])]);return l({openDropdown:(e,a,l,s,o,n)=>{try{e.preventDefault(),D.value=!1;const i=h.value?.userId,d=f.value.playlists?.filter((e=>e.userId===i)),u="fm"===g.value,c="song"===n,v=!!l?.path,k=!!l?.mv&&0!==l.mv,_="cloud"===m.currentRoute.value.name,w=0!==o&&d.some((e=>e.id==o));W().then((()=>{x.value=[{key:"song-data",type:"render",show:!v,render:M(l,c)},{key:"line-song",type:"divider",show:!v},{key:"play",label:"立即播放",props:{onClick:()=>{t("playSong",a,l,s)}},icon:j("play",20)},{key:"next-play",label:"下一首播放",show:c&&"dj"!==g.value&&y.getPlaySongData?.id!==l.id&&!u,props:{onClick:()=>{g.value="normal",r(l)}},icon:j("play-next")},{key:"add-pl",label:"添加到歌单",show:c&&!v,props:{onClick:()=>{$.value?.openAddToPlaylist(l?.id)}},icon:j("playlist-add",20)},{key:"comment",label:"查看评论",show:c&&!v,props:{onClick:()=>{m.push({path:"/comment",query:{id:l.id}})}},icon:j("comment-text",18,1)},{key:"mv",label:"观看 MV",show:c&&k,props:{onClick:()=>{m.push({path:"/videos-player",query:{id:l.mv}})}},icon:j("video")},{label:"更多操作",key:"others",show:!v,icon:j("more"),children:[{key:"copy",label:`复制${c?"歌曲":"节目"} ID`,props:{onClick:()=>{const e=l?.id?.toString();p(e)}},icon:j("content-copy")},{key:"share",label:`分享${c?"歌曲":"节目"}链接`,props:{onClick:()=>{const e=c?`https://music.163.com/song?id=${l?.id?.toString()}`:`https://music.163.com/#/dj?id=${l?.id?.toString()}`;p(e,`复制${c?"歌曲":"节目"}链接`)}},icon:j("share")}]},{key:"line-cloud",type:"divider",show:_||w||v},{key:"delete",label:"从歌单中删除",show:!_&&w,props:{onClick:()=>{t("deletePlaylistSong",o,l,a,s)}},icon:j("delete")},{key:"edit",label:"云盘歌曲纠正",show:_,props:{onClick:()=>{T.value?.openCloudSongMatch(l,s)}},icon:j("edit")},{key:"delete",label:"从云盘中删除",show:_,props:{onClick:()=>{t("delCloudSong",a,l,s)}},icon:j("delete")},{key:"open-local",label:"打开歌曲所在目录",show:v,props:{onClick:()=>{electron.ipcRenderer.send("openSongLocal",l?.path)}},icon:j("folder-music")},{key:"delete",label:"从本地磁盘中删除",show:v&&y.getPlaySongData?.id!==l.id,props:{onClick:()=>{t("delLocalSong",a,l,s)}},icon:j("delete")},{key:"line-search",type:"divider"},{key:"search",label:"同名搜索",props:{onClick:()=>{m.push({path:"/search/songs",query:{keywords:l.name}})}},icon:j("search-rounded",20,1)},{key:"download",label:"下载歌曲",show:c&&!v,props:{onClick:()=>{z.value?.openDownloadModal(l)}},icon:j("download",20,1)}],D.value=!0,b.value=e.clientX,C.value=e.clientY}))}catch(i){console.error("右键菜单出现异常：",i),$message.warning("右键菜单出现异常")}}}),(e,a)=>{const l=K,s=u,t=c,o=fe;return w(),I(L,null,[S(l,{x:P(b),y:P(C),show:P(D),options:P(x),class:"song-list-dropdown",placement:"bottom-start",trigger:"manual",size:"large",onSelect:a[0]||(a[0]=e=>D.value=!1),onClickoutside:a[1]||(a[1]=e=>D.value=!1)},null,8,["x","y","show","options"]),S(s,{ref_key:"addPlaylistRef",ref:$},null,512),S(t,{ref_key:"downloadSongRef",ref:z},null,512),S(o,{ref_key:"cloudSongMatchRef",ref:T},null,512)],64)}}},Pe={key:0,class:"song-list"},xe={key:0,class:"song-list-header"},$e={key:2,class:"cover"},ze=(e=>(G("data-v-72d41a8e"),e=e(),F(),e))((()=>$("div",{class:"cover-loading"},[$("img",{class:"loading-img",src:n,alt:"song"})],-1))),Ie={class:"info"},Le={class:"title"},Te={key:0,class:"artist"},je={key:1,class:"artist"},Me={key:2,class:"artist"},Ae={key:4,class:"action"},Re={key:3,class:"loading"},Ne=e({__name:"SongList",props:{type:{type:String,default:"song"},data:{type:[Array,String],default:()=>[]},sourceId:{type:[Number,String],default:0},showCover:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},showPrivilege:{type:Boolean,default:!0},showAlbum:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(e){const l=J(),s=i(),t=a(),n=d(),u=y(),{userData:c}=k(t),{loadSize:p,playSearch:M,useMusicCache:A}=k(u),{playList:R,playSongData:N,playSongSource:q}=k(s),{playIndex:V,playMode:O,playHeartbeatMode:G,playLoading:F}=k(n),H=e,Q=_(1),K=_(null),Z=_(null),re=X((()=>((H.showPagination?Q.value:Number(l.currentRoute.value.query?.page)||1)-1)*p.value)),ue=_(null),ce=(e=null)=>{const a=document.querySelector(".songs.play");"scroll"===e&&a&&a?.scrollIntoView({behavior:"smooth",block:"center"}),ue.value=!!a},pe=async(e,a,t)=>{if(A.value&&F.value)return $message.warning("歌曲正在缓冲中，请稍后"),!1;O.value="song"===H.type?"normal":"dj";const o=l.currentRoute.value.matched?.[0].path||null;"/like-songs"!==o&&(G.value=!1),s.getPlaySongData?.id===a?.id?v():("/search"===o&&!M.value||"/history"===o||G.value?r(a,!0):(R.value=e.slice(),V.value=t),N.value=a,await g(!0)),q.value=Number(H.sourceId),W().then((()=>ce()))},ye=e=>{Q.value=e,W().then((()=>{const e=document.getElementById("main-layout");e?.scrollIntoView({behavior:"smooth"}),ce()}))},me=(e,a,l)=>{$dialog.warning({title:"确认删除",content:`确认从云盘中删除 ${a.name}？该操作无法撤销！`,positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{var s;200==(await(s=a.id,f({method:"GET",url:"/user/cloud/del",params:{id:s,timestamp:(new Date).getTime()}}))).code?(e.splice(l,1),$message.success("删除成功")):$message.error("删除失败，请重试")}})},ve=(e,a,l,s)=>{if(!e||!a)return $message.error("无法正确定位到歌单，请重试");$dialog.warning({title:"确认删除",content:`确认从歌单中移除 ${a.name}？该操作无法撤销！`,positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{200===(await h(e,a?.id,"del")).status?(1===l.length?l.splice(0,1,"empty"):l.splice(s,1),$message.success("歌曲删除成功")):$message.error("歌曲删除失败，请重试")}})},ge=(e,a,l)=>{$dialog.warning({title:"确认删除",content:`确认从本地磁盘中删除 ${a.name}？该操作无法撤销！`,positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{await electron.ipcRenderer.invoke("deleteFile",a?.path)?(1===e.length?e.splice(0,1,"empty"):e.splice(l,1),$message.success("歌曲删除成功")):$message.error("歌曲删除失败，请重试")}})};return ee((()=>s.getPlaySongData?.id),(()=>W().then((()=>ce())))),ae((()=>{ce()})),le((()=>{ue.value=!1})),(a,n)=>{const i=Y,d=o,r=E,u=B,y=oe,v=U,g=de,h=De,f=Se,k=ne,_=ie;return w(),b(x,{name:"fade",mode:"out-in",onAfterEnter:ce},{default:C((()=>[e.data?.[0]?.id?(w(),I("div",Pe,[e.showTitle?(w(),I("div",xe,[S(i,{class:"num",depth:"3"},{default:C((()=>[D(" # ")])),_:1}),S(i,{class:se(["info",{"has-cover":e.data[0].cover&&e.showCover}]),depth:"3"},{default:C((()=>[D(z("song"===e.type?"歌曲":"声音"),1)])),_:1},8,["class"]),e.data[0].album&&e.showAlbum?(w(),b(i,{key:0,class:"album hidden",depth:"3"},{default:C((()=>[D(" 专辑 ")])),_:1})):j("",!0),e.data[0].updateTime&&"dj"===e.type?(w(),b(i,{key:1,class:"update hidden",depth:"3"},{default:C((()=>[D(" 更新日期 ")])),_:1})):j("",!0),"dj"!==e.type?(w(),b(i,{key:2,class:"control"})):j("",!0),e.data[0].playCount&&"dj"===e.type?(w(),b(i,{key:3,class:"count hidden",depth:"3"},{default:C((()=>[D(" 播放量 ")])),_:1})):j("",!0),e.data[0].duration?(w(),b(i,{key:4,class:"duration hidden",depth:"3"},{default:C((()=>[D(" 时长 ")])),_:1})):j("",!0),e.data[0].size?(w(),b(i,{key:5,class:"size hidden",depth:"3"},{default:C((()=>[D(" 大小 ")])),_:1})):j("",!0)])):j("",!0),(w(!0),I(L,null,T(e.data.slice((P(Q)-1)*P(p),(P(Q)-1)*P(p)+P(p)),((a,o)=>(w(),b(v,{id:"song-list-"+o,key:o,"content-style":{padding:"16px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},class:se(Number(P(s).getPlaySongData?.id)===Number(a?.id)?"songs play":"songs"),hoverable:"",onClick:l=>((e,a,l)=>{if(window.innerWidth>700)return!1;pe(e,a,l)})(e.data,a,P(re)+o),onDblclick:te((l=>pe(e.data,a,P(re)+o)),["stop"]),onContextmenu:l=>P(Z)?.openDropdown(l,e.data,a,P(re)+o,e.sourceId,e.type)},{default:C((()=>[P(s).getPlaySongData?.id!==a?.id?(w(),b(i,{key:0,class:"num",depth:"3"},{default:C((()=>[D(z(P(re)+o+1),1)])),_:2},1024)):(w(),b(r,{key:1,class:"num",size:"22"},{default:C((()=>[S(d,{icon:"music-note"})])),_:1})),a.cover&&e.showCover?(w(),I("div",$e,[S(u,{src:a.coverSize.s,class:"cover-img","preview-disabled":"",lazy:"",onLoad:n[0]||(n[0]=e=>{e.target.style.opacity=1})},{placeholder:C((()=>[ze])),_:2},1032,["src"])])):j("",!0),$("div",Ie,[$("div",Le,[S(i,{class:"name",depth:"2"},{default:C((()=>[D(z(a?.name||"未知曲目"),1)])),_:2},1024),e.showPrivilege&&1===a.fee&&11!==P(c).detail?.profile?.vipType?(w(),b(y,{key:0,bordered:!1,type:"error",size:"small",round:""},{default:C((()=>[D(" VIP ")])),_:1})):j("",!0),e.showPrivilege&&4===a.fee?(w(),b(y,{key:1,bordered:!1,type:"error",size:"small",round:""},{default:C((()=>[D(" EP ")])),_:1})):j("",!0),e.showPrivilege&&a.pc?(w(),b(y,{key:2,bordered:!1,class:"cloud",type:"info",size:"small",round:""},{icon:C((()=>[S(r,null,{default:C((()=>[S(d,{icon:"cloud"})])),_:1})])),_:1})):j("",!0),a?.mv?(w(),b(y,{key:3,bordered:!1,class:"mv",type:"warning",size:"small",round:"",onClick:te((e=>P(l).push(`/videos-player?id=${a.mv}`)),["stop"])},{default:C((()=>[D(" MV ")])),_:2},1032,["onClick"])):j("",!0)]),Array.isArray(a.artists)?(w(),I("div",Te,[(w(!0),I(L,null,T(a.artists,(e=>(w(),b(i,{key:e.id,class:"ar",onClick:te((a=>P(l).push(`/artist?id=${e.id}`)),["stop"]),onDblclick:n[1]||(n[1]=te((()=>{}),["stop"]))},{default:C((()=>[D(z(e.name),1)])),_:2},1032,["onClick"])))),128))])):"dj"===e.type?(w(),I("div",je,[S(i,{class:"ar",onDblclick:n[2]||(n[2]=te((()=>{}),["stop"]))},{default:C((()=>[D(" 电台节目 ")])),_:1})])):(w(),I("div",Me,[S(i,{class:"ar",onDblclick:n[3]||(n[3]=te((()=>{}),["stop"]))},{default:C((()=>[D(z(a.artists||"未知艺术家"),1)])),_:2},1024)])),a.alia?(w(),b(i,{key:3,class:"alia",depth:"3"},{default:C((()=>[D(z(a.alia),1)])),_:2},1024)):j("",!0)]),e.showAlbum&&"dj"!==e.type?(w(),I(L,{key:3},[a.album?(w(),b(i,{key:0,class:"album hidden",onClick:te((e=>"object"==typeof a.album?P(l).push(`/album?id=${a.album.id}`):null),["stop"]),onDblclick:n[4]||(n[4]=te((()=>{}),["stop"]))},{default:C((()=>[D(z("object"==typeof a.album?a.album?.name||"未知专辑":a.album),1)])),_:2},1032,["onClick"])):(w(),b(i,{key:1,class:"album hidden"},{default:C((()=>[D("未知专辑")])),_:1}))],64)):j("",!0),"dj"!==e.type?(w(),I("div",Ae,[S(r,{depth:P(t).getSongIsLike(a?.id)?0:3,class:"favorite",size:"20",onClick:te((e=>P(t).changeLikeList(a?.id,!P(t).getSongIsLike(a?.id),a?.path)),["stop"]),onDblclick:n[5]||(n[5]=te((()=>{}),["stop"]))},{default:C((()=>[S(d,{icon:P(t).getSongIsLike(a?.id)?"favorite-rounded":"favorite-outline-rounded"},null,8,["icon"])])),_:2},1032,["depth","onClick"]),S(r,{class:"more mobile",depth:"3",size:"20",onClick:te((l=>P(K)?.drawerOpen(e.data,a,P(re)+o,e.sourceId,e.type)),["stop"]),onDblclick:n[6]||(n[6]=te((()=>{}),["stop"]))},{default:C((()=>[S(d,{icon:"more"})])),_:2},1032,["onClick"])])):j("",!0),"dj"===e.type&&a.updateTime?(w(),b(i,{key:5,class:"update hidden",depth:"3"},{default:C((()=>[D(z(P(m)(a.updateTime)),1)])),_:2},1024)):j("",!0),"dj"===e.type&&a.playCount?(w(),b(i,{key:6,class:"count hidden",depth:"3"},{default:C((()=>[D(z(a.playCount)+"次 ",1)])),_:2},1024)):j("",!0),a.duration?(w(),b(i,{key:7,class:"duration hidden",depth:"3"},{default:C((()=>[D(z(a.duration),1)])),_:2},1024)):(w(),b(i,{key:8,class:"duration"},{default:C((()=>[D(" -- ")])),_:1})),a.size?(w(),b(i,{key:9,class:"size hidden",depth:"3"},{default:C((()=>[D(z(a.size)+"M",1)])),_:2},1024)):j("",!0)])),_:2},1032,["id","class","onClick","onDblclick","onContextmenu"])))),128)),e.data.length>=P(p)&&e.showPagination?(w(),b(g,{key:1,totalCount:e.data.length,pageNumber:P(Q),onPageNumberChange:ye},null,8,["totalCount","pageNumber"])):j("",!0),S(h,{ref_key:"songListDropdownRef",ref:Z,onPlaySong:pe,onDelCloudSong:me,onDeletePlaylistSong:ve,onDelLocalSong:ge},null,512),S(f,{ref_key:"songListDrawerRef",ref:K,onPlaySong:pe,onDelCloudSong:me,onDeletePlaylistSong:ve,onDelLocalSong:ge},null,512),S(x,{name:"shrink",mode:"out-in"},{default:C((()=>[P(ue)?(w(),b(v,{key:0,bordered:!1,"content-style":{padding:"0px",display:"flex",alignItems:"center",justifyContent:"center"},class:"scroll-to-song",onClick:n[7]||(n[7]=e=>ce("scroll"))},{default:C((()=>[S(r,{size:"26"},{default:C((()=>[S(d,{icon:"location"})])),_:1})])),_:1})):j("",!0)])),_:1})])):"empty"===e.data||"empty"===e.data?.[0]?(w(),b(k,{key:1,description:"空空如也，怎么一首歌都没有啊",style:{"margin-top":"60px"},size:"large"})):"error"===e.data||"error"===e.data?.[0]?(w(),b(k,{key:2,description:"列表获取出错，请重试",style:{"margin-top":"60px"},size:"large"})):(w(),I("div",Re,[S(_,{repeat:10,text:""})]))])),_:1})}}},[["__scopeId","data-v-72d41a8e"]]);export{Ne as _,re as g,ue as u};
