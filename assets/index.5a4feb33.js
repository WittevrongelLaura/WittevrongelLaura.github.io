import{k as B,l as b,u as $,i as L,_ as D,r as T,o as l,d as h,w as F,a as t,t as o,c as d,F as I,m as U,n as E,e as c}from"./index.8c7fcc53.js";import{R as K}from"./RouteHolder.8957e64c.js";import{C as R,a as A,S as N}from"./query.checklist.6f8adba9.js";import{C as V}from"./ChecklistsTable.ed9247f4.js";import{u as j}from"./useSocket.4eb3b914.js";import"./trash-2.acf5b66a.js";import"./createVueComponent.12d7077d.js";import"./plus.d021a9a1.js";import"./x.752848a9.js";const z={components:{RouteHolder:K,ChecklistsTable:V},setup(){var f,g,v,w,y;const e=B(2),u=B(!1);let{result:k,loading:s}=b(R);const{user:_}=$(),{result:m}=b(A),{result:n,loading:p}=b(N),{connectToServer:a,connected:x,disconnectFromServer:H,socketServer:i}=j();return a(),L(x,()=>{x.value==!1?(H(),console.log("disconnected")):(a(),console.log("connection made "))}),(g=i.value)==null||g.emit("checklist:getsharedchecklists",(f=_.value)==null?void 0:f.uid),(v=i.value)==null||v.on("checklist:getsharedchecklists",r=>{n.value={sharedChecklists:r}}),(w=i.value)==null||w.on("checklist:getchecklists",r=>{m.value={checklistsByUserId:r}}),(y=i.value)==null||y.on("user:getusers",r=>{var S;for(let C of r)C.role==="admin"&&C.uid===((S=_.value)==null?void 0:S.uid)&&(u.value=!0)}),{result:k,loading:s,resultByUid:m,skeletons:e,resultShared:n,loadingShared:p,adminBool:u}}},Q={class:"max-h-screen w-full bg-white p-10 shadow-lg md:px-12"},Y={class:"my-3"},q={class:"font-theme text-lg font-bold md:mb-4 md:text-5xl"},G={class:"text-xs md:text-base"},J={key:0,class:"mb-13 hidden w-full lg:table"},M={class:"w-full table-auto"},O={class:"p-3 text-left"},P={class:"p-3 text-left"},W={class:"p-3"},X={class:"p-3"},Z={class:"p-3"},tt={class:"p-3"},et=t("td",{class:"p-3"},[t("div",{class:"bg-neutral300 h-6 w-[56.5px] mr-[129.2px] rounded-md p-3"})],-1),st=t("td",{class:"p-3"},[t("div",{class:"bg-neutral300 mr-[195.16px] h-6 w-20 rounded-md p-3"})],-1),ot=t("td",{class:"w-[277.11px] text-center"},[t("div",{class:"bg-neutral300 mx-auto h-6 w-9 rounded-md"})],-1),lt=t("td",{class:"w-[90.03px] text-center"},[t("div",{class:"bg-neutral300 mx-auto h-6 w-6 rounded-md"})],-1),dt=t("td",{class:"mt-[10px] w-[90px] text-center"},[t("div",{class:"bg-neutral300 mx-auto h-6 w-6 rounded-md"})],-1),at=t("td",{class:"mt-[10px] w-[90px] text-center"},[t("div",{class:"bg-neutral300 mx-auto h-6 w-6 rounded-md"})],-1),ct=[et,st,ot,lt,dt,at],nt={key:1,class:"my-3"},rt={key:2},it={key:0,class:"h-[35px] w-[220.5px]"},ht={class:"my-3"},ut={class:"font-theme text-lg font-bold md:mb-4 md:text-5xl"},_t={class:"text-xs md:text-base"},mt={key:1},pt={class:"w-full table-auto"},bt={class:"p-3 text-left"},kt={class:"p-3 text-left"},xt={class:"p-3"},ft={class:"p-3"},gt={class:"p-3"},vt=t("td",{class:"w-[207.83px] p-3"},[t("p",{class:"bg-neutral300 h-6 w-[56.5px] rounded-md"})],-1),wt=t("td",{class:"w-[312.07px] p-3"},[t("p",{class:"bg-neutral300 h-6 w-20 rounded-md"})],-1),yt=t("td",{class:"flex w-[276.11px] justify-center text-center"},[t("div",{class:"bg-neutral300 mt-[10px] h-6 w-9 rounded-md"})],-1),St=t("td",{class:"w-[90.03px] text-center"},[t("div",{class:"bg-neutral300 mx-auto h-6 w-6 rounded-md"})],-1),Ct=[vt,wt,yt,St],Bt={key:2};function Tt(e,u,k,s,_,m){const n=T("ChecklistsTable"),p=T("route-holder");return l(),h(p,{class:""},{default:F(()=>[t("div",Q,[t("div",Y,[t("h1",q,o(e.$t("trips.titleTrips")),1),t("p",G,o(e.$t("trips.description")),1)]),s.loading?(l(),d("div",J,[t("table",M,[t("tr",null,[t("th",O,o(e.$t("table.name")),1),t("th",P,o(e.$t("table.description")),1),t("th",W,o(e.$t("table.completed")),1),t("th",X,o(e.$t("table.carpool")),1),t("th",Z,o(e.$t("table.share")),1),t("th",tt,o(e.$t("table.delete")),1)]),t("tbody",null,[(l(!0),d(I,null,U(s.skeletons,a=>(l(),d("tr",{key:a,class:E([a%2===0?"bg-green50":"","animate-pulse overflow-hidden rounded-md"])},ct,2))),128))])])])):c("",!0),s.loading?c("",!0):(l(),d("div",nt,[s.resultByUid&&!s.result?(l(),h(n,{key:0,checklists:s.resultByUid.checklistsByUserId},null,8,["checklists"])):c("",!0),s.result?(l(),h(n,{key:1,checklists:s.result.checklists},null,8,["checklists"])):c("",!0)])),s.adminBool?c("",!0):(l(),d("div",rt,[s.loading?(l(),d("div",it)):c("",!0),t("div",ht,[t("h1",ut,o(e.$t("trips.titleShared")),1),t("p",_t,o(e.$t("trips.allShared")),1)]),s.loadingShared?(l(),d("div",mt,[t("table",pt,[t("tr",null,[t("th",bt,o(e.$t("table.name")),1),t("th",kt,o(e.$t("table.description")),1),t("th",xt,o(e.$t("table.completed")),1),t("th",ft,o(e.$t("table.delete")),1),t("th",gt,o(e.$t("table.carpool")),1)]),t("tbody",null,[(l(!0),d(I,null,U(s.skeletons,a=>(l(),d("tr",{key:a,class:E([a%2===0?"bg-green50":"","animate-pulse overflow-hidden rounded-md"])},Ct,2))),128))])])])):(l(),d("div",Bt,[s.resultShared?(l(),h(n,{key:0,checklists:s.resultShared.sharedChecklists,shared:!0},null,8,["checklists"])):c("",!0)]))]))])]),_:1})}const Rt=D(z,[["render",Tt]]);export{Rt as default};
