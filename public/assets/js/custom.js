//-------------------clock-----------

function checkTime(x) {
    if (x<10) {
        x= "0"+x;
    }
    return x;
}
function checkHour(x) {
    if (x==0) {
        x= 12;
    a='AM';
    }else if(x<=11){
        if (x<10) {
            x= "0"+x;
        }else if(x==11){
            x= x;
        }
        a='AM';
    }else if(x>11){
        if (x==12){
            x=x;
        }else{
            x= x-12;
            if (x<10) {
                x= "0"+x;
            }

        }

        a='PM';
    }
    return x;
}
function myWatch(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = checkHour(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML= hour+':' +min+':' +sec +' '+ a;
    // document.getElementById("clock1").innerHTML= hour+':' +min+':' +sec +' '+ a;

    setTimeout( function () {
        myWatch();
    } ,1000);
}


window.onload = function myloaded(){
    myWatch();
}

//-------------------clock-----------



//-------------------speacktext-----------
const speakbtns = document.querySelectorAll(".speake");
const texts = document.querySelectorAll(".VoiceToText");

speakbtns.forEach((speakbtn, index) => {
    speakbtn.addEventListener("click", () => {
        let recog = new webkitSpeechRecognition();
        recog.lang = "ar";
        recog.onresult = (eve) => {
            texts[index].value = eve.results[0][0].transcript;
        };
        recog.start();
    });
});

//-------------------speacktext-----------
$(function (){
    $('#AlertMessage').fadeTo(10000,5000).slideUp(500,function(){
        $('#AlertMessage').slideUp(500);
    });
});
//--------------------------------------

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" ? "flex" : "none";

    var items = document.querySelectorAll(".menu div");
    var angle = 360 / items.length;
    items.forEach((item, index) => {
        item.style.setProperty('--angle', angle * index);
    });
}

!function(o,i){function r(){}var n,d,s,l,c,u,f,m,e,a,t,p,y,v,h=".BRQnzO8v",_=o.head;"function"==typeof[].indexOf&&_&&(i.a2a=i.a2a||{},n=i.a2a_config=i.a2a_config||{},e=(d=o.currentScript)&&d.src?d.src:"",NodeList&&NodeList.prototype.forEach&&(i.a2a.init=function(e,a){void 0===a&&(a=n);var t=":not([data-a2a-url]):not(.a2a_target)";o.querySelectorAll(".a2a_dd"+t+",.a2a_kit"+t).forEach(function(e){e.matches(".a2a_kit .a2a_dd");e.a2a_index||null!==e.getAttribute("data-a2a-url")||e.matches(".a2a_kit .a2a_dd")||(e.dataset.a2aUrl=a.linkurl||"",a.linkname&&(e.dataset.a2aTitle=a.linkname))}),delete n.linkurl,delete n.linkname},i.a2a_init=i.a2a.init,!d||d.async||d.defer||i.a2a.init("page",{linkurl:n.linkurl,linkname:n.linkname})),i.a2a.page||(i.a2a.page=!0,s=[],["init_all","svg_css"].forEach(function(t){i.a2a[t]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];s.push([t,e])}}),t=(v=n.static_server)?v+"/":"https://static.addtoany.com/menu/",a=e&&-1!==e.split("/")[2].indexOf("addtoany"),l=(a=(l=!v&&a?e:t).match(/^[^?#]+\//))?a[0]:l,c=function(e,a,t){void 0===e&&(e=l+"eso"+h+".js"),void 0===a&&(a=!1);var n=o.createElement((t=void 0===t?!1:t)?"link":"script"),i="module",t=(t?(t="preload",n.href=e,n.rel=a?i+t:t,a||(n.as="script")):(n.src=e,a&&(n.type=i,n.onerror=function(){return c()})),d&&d.nonce?d.nonce:null);t&&(n.nonce=t),_.appendChild(n)},f="a2a_sm_ifr",m=function(){var e,a,t,n;a="a2a_menu_container",e=o.getElementById(a),i.a2a.main=u=e||o.createElement("div"),u.id!=a&&(u.style.position="static",o.body.insertBefore(u,null)),i.addEventListener("message",function(e){var a=e.origin;a&&".addtoany.com"!==a.substr(-13)||"object"==typeof(a=e.data)&&a.a2a&&(a.h1&&(i.a2a.h1=!0),"function"==typeof(e=i.a2a.userServices)?e(a.user_services):i.a2a.userServices=a.user_services,o.getElementById(f).style.display="none")}),e=o.createElement("iframe"),a=o.createElement("div"),t=e.style,n=a.style,e.id=f,t.width=t.height=n.width=n.height="1px",t.top=t.left=t.border="0",t.position=n.position="absolute",t.zIndex=n.zIndex="100000",e.title="AddToAny Utility Frame",e.setAttribute("aria-hidden","true"),e.src="https://static.addtoany.com/menu/sm.25.html#type=core&event=load",n.top="0",n.visibility="hidden",u.insertBefore(a,null),a.insertBefore(e,null),m=r},o.body&&m(),"function"==typeof(e="".matchAll)&&e.toString().includes("[native code]")?(a=t+(v?"":"svg/"),c((e=l+(v?"":"modules/"))+"core"+h+".js",!0),t=document.createElement("link").relList.supports("modulepreload"),n.overlays&&n.overlays.length&&t&&c(e+"overlays"+h+".js",!0,!0),o.querySelector('.a2a_dd:empty,.a2a_kit [class*="a2a_button_"]:empty')&&i.a2a.h1&&c(a+"icons.38.svg.js",!1,!0)):c(),p=function(e){var a=i.a2a.core;"function"!=typeof a||e?e?e():i.a2a.core=function(e){return p(e)}:a()},v=function(){y||(y=!0,m(),p(),s.forEach(function(e){var a;(a=i.a2a)[e[0]].apply(a,e[1])}))},"loading"!==o.readyState?v():(o.addEventListener("readystatechange",v),o.addEventListener("DOMContentLoaded",v))))}(document,window);

