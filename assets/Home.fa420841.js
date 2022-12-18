import{R as u}from"./RouteHolder.8957e64c.js";import{u as f,i as y,_ as k,r as s,o as c,d as b,w as v,a as e,c as l,b as r,f as d}from"./index.8c7fcc53.js";import{u as w}from"./useSocket.4eb3b914.js";import{c as n}from"./createVueComponent.12d7077d.js";var M=n("CopyIcon",[["rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",key:"1ma1o8"}],["path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",key:"pklvoz"}]]);const P=M;var C=n("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const U=C;var $=n("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const H=$,S={components:{RouteHolder:u,Users:H,Copy:P,MapPin:U},setup(){const{user:a,logout:m}=f(),{connectToServer:o,connected:t,disconnectFromServer:i,socketServer:h}=w();return o(),y(t,()=>{t.value==!1?i():(o(),console.log("connection made "))}),{user:a}}},V="/tripPage.png",B={class:"mt-5 text-center"},T=e("h1",{class:"font-theme sm:text-4xl text-lg font-bold"},[d(" Make free checklists, "),e("br"),d(" and share them with your friends. ")],-1),I=e("h3",{class:"pt-2 sm:pb-10 pb-6 sm:text-lg text-xs"}," Organize your mind or scale. Your business the right way, every time. ",-1),N={key:0,href:"/auth/register",class:"bg-greenPrimary rounded-lg sm:py-4 sm:px-6 py-2 px-3 hover:bg-green-800 focus:bg-green-800"},q=e("b",{class:"text-green50 sm:text-lg text-base"},"Make a free checklist",-1),z=[q],A={key:1,href:"/trips",class:"bg-greenPrimary rounded-lg sm:py-4 sm:px-6 py-2 px-3 hover:bg-green-800 focus:bg-green-800"},R=e("b",{class:"text-green50 sm:text-lg text-base"},"Make a free checklist",-1),Y=[R],j=e("div",{class:"mt-6"},[e("img",{src:V,alt:""})],-1),E={class:"sm:mt-6 mt-3 mb-4 text-center"},F=e("h2",{class:"sm:text-3xl text-lg font-medium"},"How it works.",-1),J=e("p",{class:"sm:pt-4 pt-2 sm:text-sm text-xs"}," Make a recurring checklist or process, share with other travellers. ",-1),O={class:"mt-6 flex justify-center"},W={class:"grid sm:grid-cols-[repeat(3,minmax(0,335px))] grid-rows-[repeat(3,min(0,288px))] sm:gap-x-10 gap-4"},Z={class:"bg-greenPrimary/30 rounded-md sm:p-8 p-4 shadow-sm outline-none"},D={class:"mb-3 flex flex-col items-center"},G=e("h3",{class:"pb-3 text-left font-bold"}," 1. Create or copy a process ",-1),K=e("p",{class:"text-left text-sm"}," Create or copy a process template. Add step-by-step categories with tasks to make sure you don't forget anything. ",-1),L={class:"bg-greenPrimary/30 rounded-md sm:p-8 p-4 shadow-sm outline-none"},Q={class:"mb-3 flex flex-col items-center"},X=e("h3",{class:"pb-3 text-left font-bold"},"2. Share with team members",-1),ee=e("p",{class:"text-left text-sm"}," Team members don't want to login to more software. Just add your friends to the checklist. ",-1),te={class:"bg-greenPrimary/30 rounded-md sm:p-8 p-4 shadow-sm outline-none"},se={class:"mb-3 flex flex-col items-center"},oe=e("h3",{class:"pb-3 text-left font-bold"},"3. Track your processes",-1),ce=e("p",{class:"text-left text-sm"}," When a team member completes a task, you'll see it in the checklist. You can also see who completed it. ",-1);function re(a,m,o,t,i,h){const p=s("Copy"),_=s("Users"),x=s("MapPin"),g=s("route-holder");return c(),b(g,null,{default:v(()=>[e("div",B,[T,I,t.user?(c(),l("a",A,Y)):(c(),l("a",N,z))]),j,e("div",E,[F,J,e("div",O,[e("div",W,[e("div",Z,[e("div",D,[r(p,{class:"h-10 w-10 stroke-green-700"})]),G,K]),e("div",L,[e("div",Q,[r(_,{class:"h-10 w-10 stroke-green-700"})]),X,ee]),e("div",te,[e("div",se,[r(x,{class:"h-10 w-10 stroke-green-700"})]),oe,ce])])])])]),_:1})}const de=k(S,[["render",re]]);export{de as default};