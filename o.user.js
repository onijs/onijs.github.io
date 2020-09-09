// ==UserScript==
// @name         Boystown2
// @namespace    HOAKHUYA2
// @include     *://*.onion/*
// @include     *://*.bayfiles.com/*
// @include     *://*.anonfile.com/*
// @include     *://*.megaupload.com/*
// @include     *://*.solidfiles.com/*
// @include     *://*.megaupload.is/*
// @icon        https://raw.githubusercontent.com/684102/PornDownloader.user.js/master/ico.png
// @downloadURL https://raw.githubusercontent.com/TheWolds/btwaterwall/master/newboytown.user.js
// @updateURL    https://raw.githubusercontent.com/TheWolds/btwaterwall/master/newboytown.user.js
// @resource    JQ_351     https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @resource    JQ_352    https://malsup.github.io/jquery.form.js
// @resource    JQ_354    https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js
// @require     https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js
// @resource    jqUI_CSS    https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css
// @version     2019121200
// @copyright   HOAKHUYA
// @homepage    https://hoakhuya.com
// @author       HOAKHUYA.COM
// @description  NOPE.
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
//UDT#!<li>Khả năng tự động tải về link dl.free, datafilehost, myfile.is, anonfile.com,solidfiles.com... chỉ cần click là sẽ down liền, không bị giới hạn số lượt down</li><li>Nhận dạng mật khẩu tốt hơn</li>

GM_addStyle (GM_getResourceText ("jqUI_CSS"));
eval(GM_getResourceText('JQ_351'));
eval(GM_getResourceText('JQ_352'));
eval(GM_getResourceText('JQ_354'));

var clipboard = new ClipboardJS('.btn');

const notyf = new Notyf({duration: 2300,position: {x: 'center',y: 'center',},types: [{type: 'warning',background: 'orange',icon: false}]});
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
    var listthread = [];
    var titlethread =[], ttcount=0;
    var nowget=0;
    var nowpase=0;
    var dp=true;

//________________________________________________________________________
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
//________________________________________________________________________
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
//________________________________________________________________________

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


//________________________________________________________________________
function newpass(paw){
  if(paw.length>1){ var txt='<div class="pws" style="font-size: 192%;user-select: none;margin-top: 15px;"> Password list: ';} else{ var txt='<div class="pws" style="font-size: 192%;user-select: none;margin-top: 15px;"> Password: ';}
 
  
  
   for (var i = 0; i < paw.length; i++) {
     if(!paw[i].match(/(dlfree\.html|viewtopic\.|code:\ssele|\s\s|to\scopy|other\sis\sspecified|for\sall|Same\sas|hot\slove)/i)){
     txt+=' <span style="padding-right: 18px; color: red;user-select: none;"><code class="btn" data-clipboard-text="'+paw[i]+'">'+paw[i]+'</code></span>';
     }
     
   }
  
  txt+='</div></div>';
  return txt;
}
//________________________________________________________________________
function newhtml(htm,pawc){

       var passw = newpass(pawc);
        var title=titlethread[nowget];
        var imgd='';
        var htmm='';
        console.log(htm);
        var trhtmm='<div class="newcss" style="margin-bottom: 20px; border-bottom: #ff0000 solid 2px; padding-bottom: 29px;"><span style="display:block;font-family: Arial, Helvetica, sans-serif; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid transparent; margin-bottom: 15px; padding-bottom: 2px; font-size: 2.05em; margin-top: 10px;"><a style="width: fit-content;" onclick="window.open(\''+listthread[nowget]+'\', \'_blank\', \'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes\');" href="JavaScript:void(0)" target="_blank">'+title+'</a></span>';
  for (var i = 0; i < htm.length; i++) {
      
        for (var c = 0; c < htm[i].length; c++) {
        if(htm[i][c] && htm[i][c].match(/(image|jpg|jpeg|png)/i)){
          htmm+='<img onerror="this.parentNode.removeChild(this);" style="margin: 10px auto 20px;display:inline-block;" border="0" src="'+(htm[i][c])+'" width="49%"/>';
        }
        else if(htm[i][c] && !htm[i][c].match(/(dlfree\.|viewtopic|posting)/i)){
        
          htmm+='<a style="display: block; font-size: 250%; color: #03A9F4;width: fit-content;" href="'+(htm[i][c])+'" target="_blank">'+(htm[i][c])+'</a>';
        }
        
       
        }
      }  
         $('.forumbg:not(.announcement)').append(trhtmm+htmm+passw);

   
}
//________________________________________________________________________
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
          var regix= new RegExp(/(password\sis|password|the\spassword|PW\sfor\sfiles|PW)(\:+)?(\s+)?(\n+)?(.*[a-z0-9\*\!\@\#\$\%\^\&a-z0-9\!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].{6,})/i);
          titlethread[ttcount++]=dochtml.querySelector('h3.first').innerText;
         
          var password_profile =dochtml.querySelectorAll('.profile-custom-field.profile-dl_pass').forEach((pw) => {
            pw.querySelector('strong').remove();
            passwordbox[countpw++] = pw.innerText.substring(1) ? pw.innerText.substring(1) : '';
          });
          
          
          var password_profile2 =dochtml.querySelectorAll('.signature').forEach(function(cpost) {
            var findpw =$(dochtml).text().match(regix);
               if(findpw){passwordbox[countpw++]=findpw[5] ? findpw[5]: findpw[4] ? findpw[4] : findpw;}
          });

          
          dochtml.querySelectorAll('div.postbody div.content').forEach(function(post) {
          var totalurl;
            
          if ($(post).text().match(regix)){
            var findpw =$(post).text().match(regix);
            passwordbox[countpw++]=findpw[5] ? findpw[5]: findpw[4] ? findpw[4] : findpw;
       //     console.log(findpw);
          }
            
            
            
          if (post.innerHTML.match(/(\/dlfree\.html|8\sdigit)/ig)){
            var   vpost = post.innerHTML.replace(/\<br\>/ig,'\n');  
            var inb= $(vpost).text().match(/(\b|\s)((?!Password|dlfree|Backup|Torturer|Download|Link)([a-z0-9A-Z]{8}))(\r|\n|\s)/ig);
                   if(inb){ totalurl=inb.map(function (i) {var i=i.split(' ')[0].replace(/\n|\r/g,''); if(i.length==8){ return 'http://dl.free.fr/getfile.pl?file=/' + i;}});}
  

          } 
            
           var uri= post.innerHTML.match(/((http\:\/\/|https\:\/\/|www\.)?([a-z0-9\-\_\.]+)(\.com|\.to|\.net|\.io|\.org|\.li|\.fr|\.onion)((?!\/viewtopic\.|\.\.\.|dlfree\.)([a-z0-9\&\%\$\!\?\@\.\=\_\-\/\\]+)))/ig);
            
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

//________________________________________________________________________
        if(location.href.match(/\.onion\/viewforum\.php/i)){
       
            listthread=$('li:not(.sticky) a.topictitle').not('.sticky');
            nowpase=listthread.length;
            $('.forumbg:not(.announcement)').empty();
            GM_addStyle('.forumbg:not(.announcement){background-color: #e8ecee !important;background-image:unset !important;}');
                getsource(listthread[0])
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        }
//________________________________________________________________________
