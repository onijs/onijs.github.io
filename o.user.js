// ==UserScript==
// @version   			1
// @name         DeepAI.onion
// @description  Onion sites javascript supported.
// @namespace   HOAKHUYA.onion
// @author      HOAKHUYA.onion
// @copyright   HOAKHUYA.onion
// @icon       https://github.com/onijs/onijs.github.io/raw/master/o.png
// @downloadURL https://github.com/onijs/onijs.github.io/raw/master/o.user.js
// @updateURL    https://github.com/onijs/onijs.github.io/raw/master/o.user.js
// @resource    JQ_351     https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @resource    JQ_352    https://malsup.github.io/jquery.form.js
// @resource    JQ_354    https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js
// @require     https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js
// @resource    jqUI_CSS    https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css
// @compatible        chrome Chrome_70.0.2490.86 + Violentmonkey
// @compatible        firefox Firefox_69.0 + Violentmonkey
// @compatible        opera Opera_55.0.1990.115 + Violentmonkey
// @compatible        safari 7.0.3 + Violentmonkey
// @compatible        macintosh 10_9_3 + Violentmonkey
// @license GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright   HOAKHUYA.onion
// @homepage    https://hoakhuya.com
// @author       HOAKHUYA.onion
// @include     *://2tgix56pui5j6*.onion/*
// @include     *://qcuvxeyiyq2em*.onion/*
// @include     *://qggd5kpmp7ikf*.onion/*
// @include     *://53skajjzct44r*.onion/*
// @include     *://nykaduvokglkc*.onion/*
// @include     *://ozgmavpcbkgcz*.onion/*
// @grant         GM_setClipboard
// @grant         unsafeWindow
// @grant         window.close
// @grant         window.open
// @grant         window.focus
// @grant         GM_xmlhttpRequest
// @grant         GM_getResourceText
// @grant         GM_getResourceURL
// @grant         GM_addStyle
// @grant         GM_download
// @grant         GM_registerMenuCommand
// @grant         GM_unregisterMenuCommand
// @grant         GM_openInTab
// @grant         GM_notification
// @noframes
// @noframe
// @change-log  Improved pornhub
// @run-at      document-body
// ==/UserScript==
/* String Prototype */
//UDT#!<li style="text-transform: none !important;margin-bottom: 10px;"> Pornhub: style fix</li><li style="text-transform: none !important;margin-bottom: 10px;"> module auto update for: greasyfork & openuserjs.</li>
//DUR#!https://bit.ly/onionjs

GM_addStyle (GM_getResourceText ("jqUI_CSS"));
eval(GM_getResourceText('JQ_351'));
eval(GM_getResourceText('JQ_352'));
eval(GM_getResourceText('JQ_354'));

var clipboard = new ClipboardJS('.btn');

const notyf = new Notyf({duration: 2300,position: {x: 'center',y: 'center',},types: [{type: 'warning',background: 'orange',icon: false}]});
const hnotyf = new Notyf({duration: 3000,position: {x: 'right',y: 'bottom',},types: [{type: 'warning',background: 'orange',icon: false}]});

clipboard.on('success', function(e) {
notyf.dismissAll();notyf.success('Password copied');
})

String.prototype.startWith = function (str) {
    return typeof this.indexOf === 'function' && this.indexOf(str) === 0;
};
String.prototype.ismatch = function (regex) {
    return typeof this.match === 'function' && this.match(regex) !== null;
};
String.prototype.isdomain = function(ismatch){const a =new URL(this.valueOf());const {host, hostname, pathname, port, protocol, search, hash} = a;if(hostname.split('.').length>2){ var mainhostname = `${hostname}`.split('.').slice(1).join('.').replace('.','\\.');} else {var mainhostname =`${hostname}`.replace('.','\\.');} return typeof this.indexOf === 'function' && mainhostname.indexOf(ismatch.replace('.','\\.')) === 0;}
const hkparseUrl = (string, prop) =>  {const a =new URL(string);const {host, hostname, pathname, port, protocol, search, hash} = a;var mainhostname = `${hostname}`.split('.').slice(1).join(); const origin = `${protocol}//${hostname}${port.length ? `:${port}`:''}`;return prop ? eval(prop) : {origin, host, hostname, mainhostname, pathname, port, protocol, search, hash}}
//________________________________________________________________________
var onionJS = {
    any_onion: function(){
    if(location.href.match(/\.onion\/viewforum\.php/i)){

    var listthread = [];
    var titlethread =[], ttcount=0;
    var nowget=0;
    var nowpase=0;
    var dp=true;
    var beforepw='';

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
Array.prototype.cremove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};


function newpass(paw){
  if(paw.length>1){ var txt='<div class="pws" style="font-size: 192%;user-select: none;margin-top: 15px;"> Password list: ';} else{ var txt='<div class="pws" style="font-size: 192%;user-select: none;margin-top: 15px;"> Password: ';}
 
  
  
   for (var i = 0; i < paw.length; i++) {
     var techpas = paw[i].split('file link')[0] ? paw[i].split('file link')[0]:paw[i];
     techpas =techpas.split(' ');
            if(techpas.length==0){techpas= paw[i];}
            else if(techpas.length>2){techpas=techpas[0];}
            else{techpas =techpas[0]+(techpas[1] ? techpas[1]:'');}
     
     if((typeof techpas)=='string' && !techpas.match(/(dlfree\.html|viewtopic\.|code:\ssele|\s\s\s|to\scopy|other\sis\sspecified|for\sall|Same\sas|hot\slove|please\?\n?)/i) && beforepw !=techpas && techpas.length>2){
     txt+=' <span style="padding-right: 18px; color: red;user-select: none;"><code class="btn" data-clipboard-text="'+techpas+'">'+techpas+'</code></span>';
       beforepw=techpas;
     }
     
   }
  
  txt+='</div></div>';
  return txt;
}
function newhtml(htm,pawc){

       var passw = newpass(pawc);
        var title=titlethread[nowget];
        var imgd='';
        var htmm='';
      //  console.log(htm);
        var trhtmm='<div class="newcss" style="margin-bottom: 20px; border-bottom: #ff0000 solid 2px; padding-bottom: 29px;"><span style="display:block;font-family: Arial, Helvetica, sans-serif; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid transparent; margin-bottom: 15px; padding-bottom: 2px; font-size: 2.05em; margin-top: 10px;"><a style="width: fit-content;" onclick="window.open(\''+listthread[nowget]+'\', \'_blank\', \'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes\');" href="JavaScript:void(0)" target="_blank">'+title+'</a></span>';
  for (var i = 0; i < htm.length; i++) {
      
        for (var c = 0; c < htm[i].length; c++) {
        if(htm[i][c] && htm[i][c].match(/(image|jpg|jpeg|png)/i)){
          htmm+='<img onerror="this.parentNode.removeChild(this);" style="margin: 10px auto 15px;display:inline-grid;" border="0" src="'+(htm[i][c])+'" width="33%"/>';
        }
        else if(htm[i][c] && !htm[i][c].match(/(dlfree\.|viewtopic|posting)/i)){
        
          htmm+='<a style="display: block; font-size: 250%; color: #03A9F4;width: fit-content;" href="'+(htm[i][c])+'" target="_blank">'+(htm[i][c])+'</a>';
        }
        
       
        }
      }  
         $('.forumbg:not(.announcement)').append(trhtmm+htmm+passw);

   
}
    function getsource(vurl){
  
      $.ajax({type: "GET",url: vurl,
        error: function(data){
          getsource(listthread[nowget]);
        },
        success: function(data, status, xhr){
       var prase=[],linkc=0;
         var dochtml = new DOMParser().parseFromString(data, "text/html");
          var passwordbox=[], countpw=0;
          $(dochtml).find('a').text($(dochtml).find('a').attr('href'));
          $(dochtml).find('br').remove();
          const regix= new RegExp(/(password\sis|password|the\spassword|PW\sfor\sfiles|with\spassword|PW)(\:+)?(\s+)?(\n+)?(.*[a-z0-9\*\!\@\#\$\%\^\&a-z0-9\!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].{6,})/i);
          titlethread[ttcount++]=dochtml.querySelector('h3.first').innerText;
         
          
          var password_profile2 =dochtml.querySelectorAll('.signature').forEach(function(cpost) {
            var findpw =$(dochtml).contents().text().match(regix);
               if(findpw){passwordbox[countpw++]=findpw[5] ? findpw[5]: findpw[4] ? findpw[4] : findpw;}
     //       console.log(findpw);
          });

          var password_profile =dochtml.querySelectorAll('.profile-custom-field.profile-dl_pass').forEach((pw) => {
            pw.querySelector('strong').remove();
            passwordbox[countpw++] = pw.innerText.substring(1) ? pw.innerText.substring(1) : '';
          });
          
          
          dochtml.querySelectorAll('div.postbody div.content').forEach(function(post) {
          var totalurl;
            
          if ($(post).text().match(regix)){
            var findpw1 =$(post).contents().text().match(regix);
            passwordbox[countpw++]=findpw1[5] ? findpw1[5]: findpw1[4] ? findpw1[4] : findpw1;
            passwordbox.reverse(); 
          }
            
            
            
          if (post.innerHTML.match(/(\/dlfree\.html|8\sdigit)/ig)){
            var   vvst = post.innerHTML.replace(/\<br\>/ig,'\n');
            var vpost = new DOMParser().parseFromString(vvst, "text/html");

            var inb= $(vpost).contents().text().match(/(\b|\s)((?!Password|dlfree|Backup|Torturer|Download|Link)([a-z0-9A-Z]{8}))(\r|\n|\s|\r\n|\n\r)/ig);console.log(inb);
                   if(inb){ totalurl=inb.map(function (i) {var ic=i.substring(0, 8); if(ic.length==8){console.log(ic); return 'http://dl.free.fr/getfile.pl?file=/' + ic;}});}
                    

          } 
            
           var uri= post.innerHTML.match(/((http\:\/\/|https\:\/\/|www\.)?([a-z0-9\-\_\.]+)(\.com|\.to|\.net|\.io|\.org|\.li|\.fr|\.onion)((?!\/viewtopic\.|\.\.\.|dlfree\.|\/show\?i\=)([a-z0-9\&\%\$\!\?\@\.\=\_\-\/\\]+)))/ig);
            
               if(post.innerHTML.match(/getfile\.pl/i)){uri=uri.map(function (i) {if(i.match(/dl\.free\.fr/)){var ic=i.split('.pl?file=/')[1]; if(ic){ return 'http://dl.free.fr/getfile.pl?file=/' + ic;} else{ return i;}}else{ return i;}});}
            if(totalurl && uri){
               totalurl=  uri.concat(totalurl).unique().filter(Boolean);
            } else  if (totalurl){totalurl = totalurl.unique().filter(Boolean);}
            else if(uri){
              totalurl = uri.unique().filter(Boolean);
            }
            else{
              totalurl='';
            }
         //     
          
          prase[linkc++]=totalurl;
          })
          try{var resulturl= prase.filter(Boolean).unique();} catch(e){ console.log('oosp');}
          var resultpw=passwordbox.unique().filter(Boolean);
        newhtml(resulturl.filter(Boolean).unique(),resultpw);

          
          if(nowget<nowpase){
          
            getsource(listthread[++nowget]);}
       
        }
      })

      

      
      
      
      
      
    }

       
            listthread=$('li:not(.sticky):not(.global-announce) a.topictitle');
        //    console.log(listthread);
            nowpase=listthread.length;
            $('.topiclist.topics li.row:not(.sticky):not(.global-announce)').remove();
            GM_addStyle('.forumbg:not(.announcement){background-color: #e8ecee !important;background-image:unset !important;}');
                getsource(listthread[0])

          
        }





},
appupdate: function () {
      if (document.querySelector("p,div,a,i,u,b,title,p,script,style,link") != null){
      if (!this.url.isdomain('github.com') && !this.url.isdomain('github.io') && !this.url.isdomain('greasyfork.org') && !this.url.isdomain('sleazyfork.org') && !this.url.isdomain('google.com') && !this.url.isdomain('google.com.vn') && !this.url.isdomain('google.com.hk') && !this.url.isdomain('facebook.com') && !this.url.isdomain('sleazyfork.org') && !this.url.match(/google\.([a-z0-9]+)/i)){
    var curent = parseInt(Math.floor(Date.now() / 1000));
    var expiredcc = curent+84600;
    var urlupdate = 'https://github.com/onijs/onijs.github.io/raw/master/o.user.js?v=' + new Date().getTime();



GM_xmlhttpRequest({
  method: "GET",
  url: urlupdate,
  onload: function (response) {
       var newversion = parseInt(response.responseText.match(/version(.+)$/im)[1].replace(/\s/g,""));
       var nowversion = parseInt(GM_info.script.version);
            if (newversion>nowversion) {
            if(document.querySelector("#trytohack,#hacksuccescs,#hacksuccess,#hacksuccescs,.customremoved")){
              document.querySelector("#trytohack,#hacksuccescs,#hacksuccess,#hacksuccescs,.customremoved").remove();
              setTimeout(function(){document.querySelector("#trytohack,#hacksuccescs,#hacksuccess,#hacksuccescs,.customremoved").remove();}, 500);
               var span = document.createElement('center');
               span.id="trytohackC"
               
               span.style.cssText = '    font-size: 32px;padding: 50px;';
               if(document.querySelector('#main-container')){span.innerHTML = "<h3 style='text-transform: unset; max-width: 400px; padding: 93px;' data-lang='PLEASE_UPDATE_TOUSE'>Onion DeepAI <span style='color:red;'>phiên bản mới</span></h3>";document.querySelector('#main-container').insertBefore(span,document.querySelector('#main-container').firstChild);}
               if(document.querySelector('#videoShow')){span.innerHTML = "<h3 style='text-transform: unset; max-width: 400px; padding: 20px;' data-lang='PLEASE_UPDATE_TOUSE'>Hãy nâng cấp để tiếp tục sử dụng tốt hơn</h3>";document.querySelector('#videoShow').insertBefore(span,document.querySelector('#videoShow').firstChild);}
                document.querySelector('#videoShow,#main-container').setAttribute('id','d54d');
                }
		    
           } else {
        GM_registerMenuCommand('Report issue', gmclixclick_issuse);
        GM_registerMenuCommand('Write a review', gmclixclick_treview);

       }
    
      if (newversion>nowversion && localStorage.getItem('update_remind')<curent){
      try{var newupdatetxt = response.responseText.match(/\/\/UDT\#\!(.+)$/im)[0].replace("//UDT#!","");} catch(e){var newupdatetxt='<li>Improved script</li>';}
      try{var updateurli = response.responseText.match(/\/\/DUR\#\!(.+)$/im)[0].replace("//DUR#!","");} catch(e){var updateurli='https://github.com/onijs/onijs.github.io/raw/master/o.user.js?v=' + new Date().getTime();}
      var maxwidth = '45em !important';
      var h2fontsize = '22';
    var htmccs='<style>.c5d8v2cd>li{list-style:unset} code>li{padding-top: 5px;}.hkoverlay { z-index:3210;position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.7); transition: opacity 500ms; visibility: visible; opacity: 1; }'+
    '.hkoverlay:target { visibility: hidden; opacity: 0; } .hkpopup { margin: 70px auto !important; padding: 20px !important; padding-top: 10px; background: #1d1d1a; border-radius: 5px; width: 60%;text-align: left; max-width: '+maxwidth+'; position: relative; transition: all 1s ease-in-out; }'+
    '.hkpopup h2 { margin-top: 0; color: #e7e7e7; font-family: Tahoma, Arial, sans-serif;text-transform: unset; }.hkbutton { display: inline-block; border-radius: 4px; background-color: #C60689; border: none; color: #FFFFFF; text-align: center; font-size: 16px; padding: 10px; width: fit-content; transition: all 0.5s; cursor: pointer; margin: 3px; } .hkbutton span { cursor: pointer; display: inline-block; position: relative; transition: 0.5s; } .hkbutton span:after { content: \'\\00bb\'; position: absolute; opacity: 0; top: 0; right: -20px; transition: 0.5s; } .hkbutton:hover span { padding-right: 10px; } .hkbutton:hover span:after { opacity: 1; right: 0; }'+
    '.hkpopup .hkclose { position: absolute; top: 4px; right: 13px; transition: all 200ms; font-size: 30px; font-weight: bold; text-decoration: none; color: #e7e7e7; }'+
    '.hkpopup .hkclose:hover { color: #06D85F; }.hkpopup .hkcontent { max-height: 30%; overflow: auto; width: 100% !important;} @media screen and (max-width: 780px){ .hkpopup{ width: 96%;max-width:45em;    display: block; } }</style>'+
      '<div id="hoakhuyapop" class="hkoverlay">'+
      '<div class="hkpopup">'+
      '<h2 style="font-size: '+h2fontsize+'px !important;margin: 8px 0;font-weight: 700;line-height: 1.1;display: block;"><img  src="data:image/png;base64,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" style=" vertical-align: middle; margin-right: 5px;    display: inline;" /><span data-lang="NEW_VERSION_DLB">Onion.DeepAI có <span style="color:red">phiên bản mới</span></span></h2>'+
      '<a onclick="localStorage.setItem(\'update_remind\', parseInt(Math.floor(Date.now() / 1000))+42300);" class="hkclose" href="#hoakhuyapop">×</a>'+
      '<div class="hkcontent" style="display: inline-block;color:darksalmon;font-size: 12px !important;line-height: 1.5;">'+
      '<span  data-lang="NEW_VERSION_T1">Cảm ơn bạn đã sử dụng Onion DeepAI, bạn đang dùng phiên bản :</span> #<u>'+nowversion+'</u>. <span  data-lang="NEW_VERSION_T2">Nếu có bất kỳ lỗi hoặc vấn đề nào khi sử dụng, bạn hãy cân nhắc việc nâng cấp lên phiên bản mới hơn.</span>'+
      '<h3 style="display: block;background-color: #383838;color: #ccc;font-size: 1.1em;font-weight: 700;line-height: 1;margin: 0;padding: 21x;text-transform: uppercase;position: relative;margin-top: 10px;padding: 10px;border-top-left-radius: 5px;border-top-right-radius: 5px;"><span  data-lang="CHANGE_LOG">Thông tin phiên bản </span> #<u>'+newversion+'</u></h3>'+
      '<div class="c5d8v2cd" style="background-color: #343333;font-size: 1.05em !important;font-weight: 600;color: goldenrod;line-height: 1.2;padding: 21px;text-transform: uppercase;position: relative;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;margin-top: 1px;font-family: monospace;border-top: unset;">'+
      ''+newupdatetxt+
      '<div>'+
      '<div style="margin-top: 20px; text-align: right;margin-right: 20px;"><button onclick="window.open(\'https://github.com/onijs/onijs.github.io/\', \'_blank\')" class="hkbutton" style="vertical-align:middle;background-color: #607d8b;"><span class="hkbutton0">Ghé trang chủ</span></button> <button onclick="try{if(document.getElementsByClassName(\'hkbutton1\')[0].innerHTML.match(/(refresh|刷新|tải\\slại)/gim).length==1){location.reload();}} catch(e){console.log()}; document.getElementsByClassName(\'loadingimg\')[0].style.display=\'inline\';document.getElementsByClassName(\'hkbutton1\')[0].innerHTML=\'Đang tải về\';setTimeout(function(){window.location.href=\''+updateurli+'\';document.getElementsByClassName(\'hkbutton1\')[0].innerHTML=\'Nhấp vào cài đặt ở trang đã mở\';document.getElementsByClassName(\'loadingimg\')[0].style.display=\'none\';}, 1500);setTimeout(function(){document.getElementsByClassName(\'hkbutton1\')[0].innerHTML=\'Tuyệt, tải lại trang để áp dụng\';}, 5000);" class="hkbutton" style="vertical-align:middle"><span class="hkbutton1">Nâng cấp</span><img class="loadingimg" style="vertical-align: middle; display: none;" src="data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" /></button></div>'+
      '</div>'+
      '</div>'+
      '</div>';
        
 
        
        
        document.body.innerHTML+=htmccs;
      } else if(newversion>nowversion) {hnotyf.open({duration: 15000,type: 'warning',message:"<span data-lang='NEW_VERSION_NOFT'>Một phiên bản mới của OnionDeeper đã phát hành, đừng quên nâng cấp nhé,</span> [<a data-lang='UPLINK' style=\"color:#7b0909\" href=\"javascript:void(0);\" onclick=\"window.location.href='"+urlupdate+"'\">nâng-cấp</a>]"});document.querySelector('.notyf__wrapper').style.paddingRight='15px';}
    

  }
});
    
  }}
},
init: function () {
    	this.url = location.href;
		this.appupdate();
		this.any_onion();

    }
   
};
//__________________________________________________________________________________________________________________________________________________
var HOAKHUYAonion = {
    cTitle: function () {
        if (document.title.indexOf(' - [HOAKHUYA.COM]') === -1) {
	if (document.querySelector("p,div,a,i,u,b,title,p,script,style,link") != null){
            document.title = document.title + ' - [HOAKHUYA.COM]'+ '['+GM_info.script.version+']';
	}
          
          
           
        }
    },
    init:async function () {
        HOAKHUYAonion.cTitle();
        onionJS.init();
}
}
//________________________________________________________________________
HOAKHUYAonion.init();

