"use strict";(self.webpackChunkAuthApp=self.webpackChunkAuthApp||[]).push([[902],{2902:(p,i,e)=>{e.r(i),e.d(i,{ProtectedModule:()=>r});var d=e(6895),a=e(4154),t=e(8256),l=e(6551);class u{get user(){return this.authService.user}constructor(o,c){this.router=o,this.authService=c}logout(){this.router.navigateByUrl("/auth"),this.authService.logout()}}u.\u0275fac=function(o){return new(o||u)(t.Y36(a.F0),t.Y36(l.e))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-dashboard"]],decls:12,vars:3,consts:[[3,"click"]],template:function(o,c){1&o&&(t.TgZ(0,"p"),t._uU(1,"Dashboard "),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"p"),t._uU(4," Esta pag solo funciona si estas autentificad\n"),t.qZA(),t.TgZ(5,"h4"),t._uU(6,"User info"),t.qZA(),t.TgZ(7,"pre"),t._uU(8),t.ALo(9,"json"),t.qZA(),t.TgZ(10,"button",0),t.NdJ("click",function(){return c.logout()}),t._uU(11," Logout"),t.qZA()),2&o&&(t.xp6(8),t.Oqu(t.lcZ(9,1,c.user)))},dependencies:[d.Ts],styles:["*[_ngcontent-%COMP%]{margin:15px}"]});const h=[{path:"",children:[{path:"",component:u},{path:"**",redirectTo:""}]}];class n{}n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(h),a.Bz]});class r{}r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.ez,n]})}}]);