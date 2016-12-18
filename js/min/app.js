"use strict";(function($,e){function t(e,t){return t.indexOf(e)>=0}var n=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,o=$("#hardcore"),s=!1,i=0,l=0,r=0,a=$("#input"),u=$("#progress"),d=0,c=$("#wordcount"),m=!1,g=null,h=0,w=[8,9,13,16,17,18,20,27,37,38,39,40,91,93],f={96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",222:"'"},p={",":"<",".":">","/":"?",";":":","'":'"',1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+"},v=5,y=2;$("#email").on("keyup",function(){$(this).parents(".form-group").toggleClass("valid",n.test($("#email").val()))}).on("blur",function(){$(this).parents(".form-group").toggleClass("invalid",!n.test($("#email").val()))}),$("form").on("submit",function(e){if(e.preventDefault(),n.test($("#email").val())){a.val(atob(localStorage.getItem("mdwa.draft")));var t=$("#email").val();amplitude.getInstance().setUserId(t);var o=(new amplitude.Identify).setOnce("created_at",Math.floor(Date.now()/1e3));amplitude.identify(o),amplitude.logEvent("sign_up",{email:t}),localStorage.setItem("mdwa.email",t),localStorage.setItem("mdwa.returning","true"),x(0),E(),$("#die").addClass("returning").hide()}else $("form").addClass("shake"),setTimeout(function(){$("form").removeClass("shake")},1e3)});var _=function e(){u.width(100*d+"%")},b=function e(){l=a.val().split(/\s+/).length,c.text(l+(1==l?" word":" words"))},C=function e(){if(m){var t=T()-h;localStorage.setItem("mdwa.draft",btoa(a.val())),amplitude.logEvent("stop_writing",{session_type:session_type,session_limit:session_limit,duration:t,won:!1,words:l,dangers:i}),a.val(""),clearInterval(g),m=!1,$("#tweet").attr("href","https://twitter.com/intent/tweet?text=I+wrote+"+l+"+words+using+The+Most+Dangerous+Writing+App+-+until+it+deleted+everything+.+%23MDWA&url=http%3A%2F%2Fwww.themostdangerouswritingapp.com"),$("#tweet").text("I wrote "+l+" words using The Most Dangerous Writing App - until it deleted everything."),$("#die").show(),setTimeout(function(){$("#die").addClass("visible")},20)}},E=function e(){clearInterval(g),m=!1,won=!0,u.addClass("won"),setTimeout(function(){u.addClass("hide")},3e3),hardcore_mode&&($("#hardcore").hide(),a.removeClass("hardcore")),$("#win").show(),$("#wordcount").hide()},F=function e(){var t=T()-h;return d=("timed"==session_type?t:l)/session_limit,r+=.1,_(),hardcore_mode&&(hardcore.style.opacity=r>.1?0:1),!won&&d>=1?(amplitude.logEvent("stop_writing",{session_type:session_type,session_limit:session_limit,duration:t,won:!0,words:l,dangers:i}),E()):r>v?C():void(r>y&&(s=!0,x((r-y)/(v-y))))},x=function e(t){0==t?(a.css("opacity",1),$("body").css("box-shadow","none"),u.removeClass("danger")):(a.css("opacity",1-t),$("body").css("box-shadow","inset 0px 0px "+Math.floor(100*t)+"px 0px rgba(242, 77, 77, "+.7*t+")"),u.addClass("danger"))},k=function e(t,n){var o=void 0;return f.hasOwnProperty(t)?o=f[t]:48<=t&&t<=90?(o=String.fromCharCode(t),n||(o=o.toLowerCase())):o="",n&&p.hasOwnProperty(o)&&(o=p[o]),o},I=function n(o){b();var l=o||e.event,a=l.keyCode||l.which,u=l.ctrlKey||l.metaKey;if(l.ctrlKey&&t(a,[78,192])&&(l.metaKey||l.altKey))return void $("body").toggleClass("night-mode");if(!(won||a&&t(a,w))){if(u&&t(a,[65,67,86,88]))return void l.preventDefault();hardcore&&(hardcore.innerHTML=k(a,l.shiftKey)),r=0,s&&i++,s=!1,m?x(0):(amplitude.logEvent("start_writing",{session_type:session_type,session_limit:session_limit}),m=!0,h=T(),g=setInterval(F,100))}};a.on("scroll",function(){$("#input-wrap").toggleClass("cut-top",this.scrollTop>0),$("#input-wrap").toggleClass("cut-bottom",this.scrollHeight-10>$(this).height()+this.scrollTop&&this.scrollHeight>$(this).height())}),a.on("keydown",I);var D=function e(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),a.focus_end()},S=function e(){$("body").toggleClass("night-mode"),a.focus_end()},T=function e(){return(new Date).getTime()/1e3},A=function e(){return hardcore_mode?(o.show(),a.addClass("hardcore")):o.hide(),won&&E(),a.focus_end()};$("#toggle-night-mode").on("click",S),$("#toggle-fullscreen").on("click",D),$("#download").on("click",function(){var t=a.val().replace(/[",.!-::']/g,""),n=t.indexOf(" ",25);t=t.substr(0,n>0?n:30);var o=(new Date).toLocaleDateString(),s=new Blob([a.val()],{type:"text/plain;charset=utf-8"});$(this).attr("download",t+" (MDWA "+o+").txt").attr("href",e.URL.createObjectURL(s))}),A(),$("input.float-label").label_better({animationTime:250,easing:"ease-in-out",offset:-8})}).call(void 0,jQuery,window);