!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,t;function n(){return e.apply(null,arguments)}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function r(e){return void 0===e}function a(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function o(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){for(var n in t)l(t,n)&&(e[n]=t[n]);return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function c(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){if(null==e._isValid){var n=c(e),s=t.call(n.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&n.overflow<0&&!n.empty&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&s);if(e._strict&&(i=i&&0===n.charsLeftOver&&0===n.unusedTokens.length&&void 0===n.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function m(e){var t=h(NaN);return null!=e?d(c(t),e):c(t).userInvalidated=!0,t}t=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var _=n.momentProperties=[];function y(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=c(t)),r(t._locale)||(e._locale=t._locale),_.length>0)for(n=0;n<_.length;n++)r(i=t[s=_[n]])||(e[s]=i);return e}var g=!1;function p(e){y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===g&&(g=!0,n.updateOffset(this),g=!1)}function v(e){return e instanceof p||null!=e&&null!=e._isAMomentObject}function w(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=w(t)),n}function S(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&M(e[s])!==M(t[s]))&&a++;return a+r}function D(e){!1===n.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function k(e,t){var s=!0;return d(function(){if(null!=n.deprecationHandler&&n.deprecationHandler(null,e),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){for(var o in i+="\n["+a+"] ",arguments[0])i+=o+": "+arguments[0][o]+", ";i=i.slice(0,-2)}else i=arguments[a];r.push(i)}D(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return t.apply(this,arguments)},t)}var Y,O={};function T(e,t){null!=n.deprecationHandler&&n.deprecationHandler(e,t),O[e]||(D(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=d({},e);for(n in t)l(t,n)&&(i(e[n])&&i(t[n])?(s[n]={},d(s[n],e[n]),d(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)l(e,n)&&!l(t,n)&&i(e[n])&&(s[n]=d({},s[n]));return s}function P(e){null!=e&&this.set(e)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null,Y=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)l(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)l(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(e){var t,n,s,i=e.match(N);for(t=0,n=i.length;t<n;t++)E[i[t]]?i[t]=E[i[t]]:i[t]=(s=i[t]).match(/\[[\s\S]/)?s.replace(/^\[|\]$/g,""):s.replace(/\\/g,"");return function(t){var s,r="";for(s=0;s<n;s++)r+=x(i[s])?i[s].call(t,e):i[s];return r}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;n>=0&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,t,n){oe[e]=x(t)?t:function(e,s){return e&&n?n:t}}function le(e,t){return l(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),a(t)&&(s=function(e,n){n[t]=M(e)}),n=0;n<e.length;n++)he[e[n]]=s}function fe(e,t){ce(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?n.parseTwoDigitYear(e):M(e)}),ce("YY",function(e,t){t[me]=n.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),n.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(e,t){return function(s){return null!=s?(be(this,e,s),n.updateOffset(this,t),this):xe(this,e)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=M(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:c(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!a(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),n.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=h([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=M(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:c(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=M(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=h([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=M(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=M(e),c(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s)),c(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s,2)),t[ve]=M(e.substr(i)),c(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s,2)),t[ve]=M(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=r(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!s(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;t>0;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&S(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===c(e).overflow&&(t=n[_e]<0||n[_e]>11?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||n[ge]>24||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||n[pe]>59?pe:n[ve]<0||n[ve]>59?ve:n[we]<0||n[we]>999?we:-1,c(e)._overflowDayOfYear&&(t<me||t>ye)&&(t=ye),c(e)._overflowWeeks&&-1===t&&(t=Me),c(e)._overflowWeekday&&-1===t&&(t=Se),c(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,s,i,r,a,o=[];if(!e._d){var u,l;for(u=e,l=new Date(n.now()),i=u._useUTC?[l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()]:[l.getFullYear(),l.getMonth(),l.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||i>7)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(a=ht(e._a[me],i[me]),(e._dayOfYear>De(a)||0===e._dayOfYear)&&(c(e)._overflowDayOfYear=!0),s=Ge(a,0,e._dayOfYear),e._a[_e]=s.getUTCMonth(),e._a[ye]=s.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(c(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(c(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim());if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(c(s).weekdayMismatch=!0,s._isValid=!1,1))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),c(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==n.ISO_8601)if(e._f!==n.RFC_2822){e._a=[],c(e).empty=!0;var t,s,i,r,a,o,u,d,h=""+e._i,f=h.length,m=0;for(i=j(e._f,e._locale).match(N)||[],t=0;t<i.length;t++)r=i[t],(s=(h.match(le(r,e))||[])[0])&&((a=h.substr(0,h.indexOf(s))).length>0&&c(e).unusedInput.push(a),h=h.slice(h.indexOf(s)+s.length),m+=s.length),E[r]?(s?c(e).empty=!1:c(e).unusedTokens.push(r),o=r,d=e,null!=(u=s)&&l(he,o)&&he[o](u,d._a,d,o)):e._strict&&!s&&c(e).unusedTokens.push(r);c(e).charsLeftOver=f-m,h.length>0&&c(e).unusedInput.push(h),e._a[ge]<=12&&!0===c(e).bigHour&&e._a[ge]>0&&(c(e).bigHour=void 0),c(e).parsedDateParts=e._a.slice(0),c(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0),t):t}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,l,h,_,g=e._i,w=e._f;return e._locale=e._locale||lt(e._l),null===g||void 0===w&&""===g?m({nullInput:!0}):("string"==typeof g&&(e._i=g=e._locale.preparse(g)),v(g)?new p(dt(g)):(o(g)?e._d=g:s(w)?function(e){var t,n,s,i,r;if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,(null==s||r<s)&&(s=r,n=t));d(e,n||t)}(e):w?kt(e):r(l=(t=e)._i)?t._d=new Date(n.now()):o(l)?t._d=new Date(l.valueOf()):"string"==typeof l?(h=t,null===(_=pt.exec(h._i))?(vt(h),!1===h._isValid&&(delete h._isValid,Dt(h),!1===h._isValid&&(delete h._isValid,n.createFromInputFallback(h)))):h._d=new Date(+_[1])):s(l)?(t._a=u(l.slice(0),function(e){return parseInt(e,10)}),ct(t)):i(l)?function(e){if(!e._d){var t=C(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):a(l)?t._d=new Date(l):n.createFromInputFallback(t),f(e)||(e._d=null),e))}function Ot(e,t,n,r,a){var o,u={};return!0!==n&&!1!==n||(r=n,n=void 0),(i(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||s(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=a,u._l=n,u._i=e,u._f=t,u._strict=r,(o=new p(dt(Yt(u))))._nextDay&&(o.add(1,"d"),o._nextDay=void 0),o}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}n.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),n.ISO_8601=function(){},n.RFC_2822=function(){};var xt=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:m()}),bt=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:m()});function Pt(e,t){var n,i;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==M(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,t){I(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+U(~~(e/60),2)+t+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+M(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var s,i;return t._isUTC?(s=t.clone(),i=(v(e)||o(e)?e.valueOf():Tt(e).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),n.updateOffset(s,!1),s):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}n.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,o=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:a(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=Et.exec(e))?(n="-"===o[1]?-1:1,r={y:0,d:M(o[ye])*n,h:M(o[ge])*n,m:M(o[pe])*n,s:M(o[ve])*n,ms:M(Ct(1e3*o[we]))*n}):(o=It.exec(e))?(n="-"===o[1]?-1:(o[1],1),r={y:jt(o[2],n),M:jt(o[3],n),w:jt(o[4],n),d:jt(o[5],n),h:jt(o[6],n),m:jt(o[7],n),s:jt(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&l(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(e,t){return function(n,s){var i;return null===s||isNaN(+s)||(T(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=s,s=i),$t(this,At(n="string"==typeof n?+n:n,s),e),this}}function $t(e,t,s,i){var r=t._milliseconds,a=Ct(t._days),o=Ct(t._months);e.isValid()&&(i=null==i||i,o&&Ce(e,xe(e,"Month")+o*s),a&&be(e,"Date",xe(e,"Date")+a*s),r&&e._d.setTime(e._d.valueOf()+r*s),i&&n.updateOffset(e,a||o))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:(t>(r=Ae(e,s,i))&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=M(e)}),fe(["gg","GG"],function(e,t,s,i){t[i]=n.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(M(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=M(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=M(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=M(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=p.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var s=e||Tt(),i=Nt(s,this).startOf("day"),r=n.calendarFormat(this,i)||"sameElse",a=t&&(x(t[r])?t[r].call(this,s):t[r]);return this.format(a||this.localeData().calendar(r,this,Tt(s)))},ln.clone=function(){return new p(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:w(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return c(this).overflow},ln.isAfter=function(e,t){var n=v(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(r(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=v(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(r(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=v(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return f(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return d({},c(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,s){var i,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!s&&(e*=60);return!this._isUTC&&t&&(i=Gt(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?$t(this,At(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=k("dates accessor is deprecated. Use date instead.",nn),ln.months=k("months accessor is deprecated. Use month instead",Fe),ln.years=k("years accessor is deprecated. Use year instead",Oe),ln.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e={};if(y(e,this),(e=Yt(e))._a){var t=e._isUTC?h(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&S(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=h().set(s,t);return i[n](r,e)}function fn(e,t,n){if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?(a(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,a(t)&&(n=t,t=void 0),t=t||"");var i,r=lt(),o=e?r._week.dow:0;if(null!=n)return cn(t,(n+o)%7,s,"day");var u=[];for(i=0;i<7;i++)u[i]=cn(t,(i+o)%7,s,"day");return u}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=h([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=h([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?s(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:s(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=h([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=h([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===M(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),n.lang=k("moment.lang is deprecated. Use moment.locale instead.",ot),n.langData=k("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(e>0)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=w((e=w(n/60))/60),n%=60,e%=60;var r=w(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=w(r/1e3),u.seconds=e%60,t=w(e/60),u.minutes=t%60,n=w(t/60),u.hours=n%24,o+=i=w(pn(a+=w(n/24))),a-=gn(vn(i)),s=w(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return w(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=+t>0,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(M(e))}),n.version="2.21.0",e=Tt,n.fn=ln,n.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},n.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},n.now=function(){return Date.now?Date.now():+new Date},n.utc=h,n.unix=function(e){return Tt(1e3*e)},n.months=function(e,t){return fn(e,t,"months")},n.isDate=o,n.locale=ot,n.invalid=m,n.duration=At,n.isMoment=v,n.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},n.parseZone=function(){return Tt.apply(null,arguments).parseZone()},n.localeData=lt,n.isDuration=Rt,n.monthsShort=function(e,t){return fn(e,t,"monthsShort")},n.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},n.defineLocale=ut,n.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},n.locales=function(){return Y(st)},n.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},n.normalizeUnits=R,n.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},n.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},n.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},n.prototype=ln,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},n});;
/*!
 * FullCalendar v3.9.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["moment", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["FullCalendar"] = factory(require("moment"), require("jquery"));
	else
		root["FullCalendar"] = factory(root["moment"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 236);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

/*
derived from:
https://github.com/Microsoft/tslib/blob/v1.6.0/tslib.js

only include the helpers we need, to keep down filesize
*/
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p]; };
exports.__extends = function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEls, scrollbarWidths) {
    if (scrollbarWidths.left) {
        rowEls.css({
            'border-left-width': 1,
            'margin-left': scrollbarWidths.left - 1
        });
    }
    if (scrollbarWidths.right) {
        rowEls.css({
            'border-right-width': 1,
            'margin-right': scrollbarWidths.right - 1
        });
    }
}
exports.compensateScroll = compensateScroll;
// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEls) {
    rowEls.css({
        'margin-left': '',
        'margin-right': '',
        'border-left-width': '',
        'border-right-width': ''
    });
}
exports.uncompensateScroll = uncompensateScroll;
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
    $('body').addClass('fc-not-allowed');
}
exports.disableCursor = disableCursor;
// Returns the mouse cursor to its original look
function enableCursor() {
    $('body').removeClass('fc-not-allowed');
}
exports.enableCursor = enableCursor;
// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {
    // *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
    // and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.
    var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
    var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
    var flexEls = []; // elements that are allowed to expand. array of DOM nodes
    var flexOffsets = []; // amount of vertical space it takes up
    var flexHeights = []; // actual css height
    var usedHeight = 0;
    undistributeHeight(els); // give all elements their natural height
    // find elements that are below the recommended height (expandable).
    // important to query for heights in a single first pass (to avoid reflow oscillation).
    els.each(function (i, el) {
        var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
        var naturalOffset = $(el).outerHeight(true);
        if (naturalOffset < minOffset) {
            flexEls.push(el);
            flexOffsets.push(naturalOffset);
            flexHeights.push($(el).height());
        }
        else {
            // this element stretches past recommended height (non-expandable). mark the space as occupied.
            usedHeight += naturalOffset;
        }
    });
    // readjust the recommended height to only consider the height available to non-maxed-out rows.
    if (shouldRedistribute) {
        availableHeight -= usedHeight;
        minOffset1 = Math.floor(availableHeight / flexEls.length);
        minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
    }
    // assign heights to all expandable elements
    $(flexEls).each(function (i, el) {
        var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
        var naturalOffset = flexOffsets[i];
        var naturalHeight = flexHeights[i];
        var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding
        if (naturalOffset < minOffset) {
            $(el).height(newHeight);
        }
    });
}
exports.distributeHeight = distributeHeight;
// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
    els.height('');
}
exports.undistributeHeight = undistributeHeight;
// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
    var maxInnerWidth = 0;
    els.find('> *').each(function (i, innerEl) {
        var innerWidth = $(innerEl).outerWidth();
        if (innerWidth > maxInnerWidth) {
            maxInnerWidth = innerWidth;
        }
    });
    maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance
    els.width(maxInnerWidth);
    return maxInnerWidth;
}
exports.matchCellWidths = matchCellWidths;
// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
    var both = outerEl.add(innerEl);
    var diff;
    // effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
    both.css({
        position: 'relative',
        left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
    });
    diff = outerEl.outerHeight() - innerEl.outerHeight(); // grab the dimensions
    both.css({ position: '', left: '' }); // undo hack
    return diff;
}
exports.subtractInnerElHeight = subtractInnerElHeight;
/* Element Geom Utilities
----------------------------------------------------------------------------------------------------------------------*/
// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
function getScrollParent(el) {
    var position = el.css('position');
    var scrollParent = el.parents().filter(function () {
        var parent = $(this);
        return (/(auto|scroll)/).test(parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x'));
    }).eq(0);
    return position === 'fixed' || !scrollParent.length ? $(el[0].ownerDocument || document) : scrollParent;
}
exports.getScrollParent = getScrollParent;
// Queries the outer bounding area of a jQuery element.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getOuterRect(el, origin) {
    var offset = el.offset();
    var left = offset.left - (origin ? origin.left : 0);
    var top = offset.top - (origin ? origin.top : 0);
    return {
        left: left,
        right: left + el.outerWidth(),
        top: top,
        bottom: top + el.outerHeight()
    };
}
exports.getOuterRect = getOuterRect;
// Queries the area within the margin/border/scrollbars of a jQuery element. Does not go within the padding.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
// WARNING: given element can't have borders
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getClientRect(el, origin) {
    var offset = el.offset();
    var scrollbarWidths = getScrollbarWidths(el);
    var left = offset.left + getCssFloat(el, 'border-left-width') + scrollbarWidths.left - (origin ? origin.left : 0);
    var top = offset.top + getCssFloat(el, 'border-top-width') + scrollbarWidths.top - (origin ? origin.top : 0);
    return {
        left: left,
        right: left + el[0].clientWidth,
        top: top,
        bottom: top + el[0].clientHeight // clientHeight includes padding but NOT scrollbars
    };
}
exports.getClientRect = getClientRect;
// Queries the area within the margin/border/padding of a jQuery element. Assumed not to have scrollbars.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getContentRect(el, origin) {
    var offset = el.offset(); // just outside of border, margin not included
    var left = offset.left + getCssFloat(el, 'border-left-width') + getCssFloat(el, 'padding-left') -
        (origin ? origin.left : 0);
    var top = offset.top + getCssFloat(el, 'border-top-width') + getCssFloat(el, 'padding-top') -
        (origin ? origin.top : 0);
    return {
        left: left,
        right: left + el.width(),
        top: top,
        bottom: top + el.height()
    };
}
exports.getContentRect = getContentRect;
// Returns the computed left/right/top/bottom scrollbar widths for the given jQuery element.
// WARNING: given element can't have borders (which will cause offsetWidth/offsetHeight to be larger).
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getScrollbarWidths(el) {
    var leftRightWidth = el[0].offsetWidth - el[0].clientWidth;
    var bottomWidth = el[0].offsetHeight - el[0].clientHeight;
    var widths;
    leftRightWidth = sanitizeScrollbarWidth(leftRightWidth);
    bottomWidth = sanitizeScrollbarWidth(bottomWidth);
    widths = { left: 0, right: 0, top: 0, bottom: bottomWidth };
    if (getIsLeftRtlScrollbars() && el.css('direction') === 'rtl') {
        widths.left = leftRightWidth;
    }
    else {
        widths.right = leftRightWidth;
    }
    return widths;
}
exports.getScrollbarWidths = getScrollbarWidths;
// The scrollbar width computations in getScrollbarWidths are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width) {
    width = Math.max(0, width); // no negatives
    width = Math.round(width);
    return width;
}
// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side
var _isLeftRtlScrollbars = null;
function getIsLeftRtlScrollbars() {
    if (_isLeftRtlScrollbars === null) {
        _isLeftRtlScrollbars = computeIsLeftRtlScrollbars();
    }
    return _isLeftRtlScrollbars;
}
function computeIsLeftRtlScrollbars() {
    var el = $('<div><div/></div>')
        .css({
        position: 'absolute',
        top: -1000,
        left: 0,
        border: 0,
        padding: 0,
        overflow: 'scroll',
        direction: 'rtl'
    })
        .appendTo('body');
    var innerEl = el.children();
    var res = innerEl.offset().left > el.offset().left; // is the inner div shifted to accommodate a left scrollbar?
    el.remove();
    return res;
}
// Retrieves a jQuery element's computed CSS value as a floating-point number.
// If the queried value is non-numeric (ex: IE can return "medium" for border width), will just return zero.
function getCssFloat(el, prop) {
    return parseFloat(el.css(prop)) || 0;
}
/* Mouse / Touch Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
    return ev.which === 1 && !ev.ctrlKey;
}
exports.isPrimaryMouseButton = isPrimaryMouseButton;
function getEvX(ev) {
    var touches = ev.originalEvent.touches;
    // on mobile FF, pageX for touch events is present, but incorrect,
    // so, look at touch coordinates first.
    if (touches && touches.length) {
        return touches[0].pageX;
    }
    return ev.pageX;
}
exports.getEvX = getEvX;
function getEvY(ev) {
    var touches = ev.originalEvent.touches;
    // on mobile FF, pageX for touch events is present, but incorrect,
    // so, look at touch coordinates first.
    if (touches && touches.length) {
        return touches[0].pageY;
    }
    return ev.pageY;
}
exports.getEvY = getEvY;
function getEvIsTouch(ev) {
    return /^touch/.test(ev.type);
}
exports.getEvIsTouch = getEvIsTouch;
function preventSelection(el) {
    el.addClass('fc-unselectable')
        .on('selectstart', preventDefault);
}
exports.preventSelection = preventSelection;
function allowSelection(el) {
    el.removeClass('fc-unselectable')
        .off('selectstart', preventDefault);
}
exports.allowSelection = allowSelection;
// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
    ev.preventDefault();
}
exports.preventDefault = preventDefault;
/* General Geometry Utils
----------------------------------------------------------------------------------------------------------------------*/
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
    var res = {
        left: Math.max(rect1.left, rect2.left),
        right: Math.min(rect1.right, rect2.right),
        top: Math.max(rect1.top, rect2.top),
        bottom: Math.min(rect1.bottom, rect2.bottom)
    };
    if (res.left < res.right && res.top < res.bottom) {
        return res;
    }
    return false;
}
exports.intersectRects = intersectRects;
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
    return {
        left: Math.min(Math.max(point.left, rect.left), rect.right),
        top: Math.min(Math.max(point.top, rect.top), rect.bottom)
    };
}
exports.constrainPoint = constrainPoint;
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
    return {
        left: (rect.left + rect.right) / 2,
        top: (rect.top + rect.bottom) / 2
    };
}
exports.getRectCenter = getRectCenter;
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
    return {
        left: point1.left - point2.left,
        top: point1.top - point2.top
    };
}
exports.diffPoints = diffPoints;
/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/
function parseFieldSpecs(input) {
    var specs = [];
    var tokens = [];
    var i;
    var token;
    if (typeof input === 'string') {
        tokens = input.split(/\s*,\s*/);
    }
    else if (typeof input === 'function') {
        tokens = [input];
    }
    else if ($.isArray(input)) {
        tokens = input;
    }
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        if (typeof token === 'string') {
            specs.push(token.charAt(0) === '-' ?
                { field: token.substring(1), order: -1 } :
                { field: token, order: 1 });
        }
        else if (typeof token === 'function') {
            specs.push({ func: token });
        }
    }
    return specs;
}
exports.parseFieldSpecs = parseFieldSpecs;
function compareByFieldSpecs(obj1, obj2, fieldSpecs, obj1fallback, obj2fallback) {
    var i;
    var cmp;
    for (i = 0; i < fieldSpecs.length; i++) {
        cmp = compareByFieldSpec(obj1, obj2, fieldSpecs[i], obj1fallback, obj2fallback);
        if (cmp) {
            return cmp;
        }
    }
    return 0;
}
exports.compareByFieldSpecs = compareByFieldSpecs;
function compareByFieldSpec(obj1, obj2, fieldSpec, obj1fallback, obj2fallback) {
    if (fieldSpec.func) {
        return fieldSpec.func(obj1, obj2);
    }
    var val1 = obj1[fieldSpec.field];
    var val2 = obj2[fieldSpec.field];
    if (val1 == null && obj1fallback) {
        val1 = obj1fallback[fieldSpec.field];
    }
    if (val2 == null && obj2fallback) {
        val2 = obj2fallback[fieldSpec.field];
    }
    return flexibleCompare(val1, val2) * (fieldSpec.order || 1);
}
exports.compareByFieldSpec = compareByFieldSpec;
function flexibleCompare(a, b) {
    if (!a && !b) {
        return 0;
    }
    if (b == null) {
        return -1;
    }
    if (a == null) {
        return 1;
    }
    if ($.type(a) === 'string' || $.type(b) === 'string') {
        return String(a).localeCompare(String(b));
    }
    return a - b;
}
exports.flexibleCompare = flexibleCompare;
/* Date Utilities
----------------------------------------------------------------------------------------------------------------------*/
exports.dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
exports.unitsDesc = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']; // descending
// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
// Moments will have their timezones normalized.
function diffDayTime(a, b) {
    return moment.duration({
        days: a.clone().stripTime().diff(b.clone().stripTime(), 'days'),
        ms: a.time() - b.time() // time-of-day from day start. disregards timezone
    });
}
exports.diffDayTime = diffDayTime;
// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
function diffDay(a, b) {
    return moment.duration({
        days: a.clone().stripTime().diff(b.clone().stripTime(), 'days')
    });
}
exports.diffDay = diffDay;
// Diffs two moments, producing a duration, made of a whole-unit-increment of the given unit. Uses rounding.
function diffByUnit(a, b, unit) {
    return moment.duration(Math.round(a.diff(b, unit, true)), // returnFloat=true
    unit);
}
exports.diffByUnit = diffByUnit;
// Computes the unit name of the largest whole-unit period of time.
// For example, 48 hours will be "days" whereas 49 hours will be "hours".
// Accepts start/end, a range object, or an original duration object.
function computeGreatestUnit(start, end) {
    var i;
    var unit;
    var val;
    for (i = 0; i < exports.unitsDesc.length; i++) {
        unit = exports.unitsDesc[i];
        val = computeRangeAs(unit, start, end);
        if (val >= 1 && isInt(val)) {
            break;
        }
    }
    return unit; // will be "milliseconds" if nothing else matches
}
exports.computeGreatestUnit = computeGreatestUnit;
// like computeGreatestUnit, but has special abilities to interpret the source input for clues
function computeDurationGreatestUnit(duration, durationInput) {
    var unit = computeGreatestUnit(duration);
    // prevent days:7 from being interpreted as a week
    if (unit === 'week' && typeof durationInput === 'object' && durationInput.days) {
        unit = 'day';
    }
    return unit;
}
exports.computeDurationGreatestUnit = computeDurationGreatestUnit;
// Computes the number of units (like "hours") in the given range.
// Range can be a {start,end} object, separate start/end args, or a Duration.
// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
// of month-diffing logic (which tends to vary from version to version).
function computeRangeAs(unit, start, end) {
    if (end != null) {
        return end.diff(start, unit, true);
    }
    else if (moment.isDuration(start)) {
        return start.as(unit);
    }
    else {
        return start.end.diff(start.start, unit, true);
    }
}
// Intelligently divides a range (specified by a start/end params) by a duration
function divideRangeByDuration(start, end, dur) {
    var months;
    if (durationHasTime(dur)) {
        return (end - start) / dur;
    }
    months = dur.asMonths();
    if (Math.abs(months) >= 1 && isInt(months)) {
        return end.diff(start, 'months', true) / months;
    }
    return end.diff(start, 'days', true) / dur.asDays();
}
exports.divideRangeByDuration = divideRangeByDuration;
// Intelligently divides one duration by another
function divideDurationByDuration(dur1, dur2) {
    var months1;
    var months2;
    if (durationHasTime(dur1) || durationHasTime(dur2)) {
        return dur1 / dur2;
    }
    months1 = dur1.asMonths();
    months2 = dur2.asMonths();
    if (Math.abs(months1) >= 1 && isInt(months1) &&
        Math.abs(months2) >= 1 && isInt(months2)) {
        return months1 / months2;
    }
    return dur1.asDays() / dur2.asDays();
}
exports.divideDurationByDuration = divideDurationByDuration;
// Intelligently multiplies a duration by a number
function multiplyDuration(dur, n) {
    var months;
    if (durationHasTime(dur)) {
        return moment.duration(dur * n);
    }
    months = dur.asMonths();
    if (Math.abs(months) >= 1 && isInt(months)) {
        return moment.duration({ months: months * n });
    }
    return moment.duration({ days: dur.asDays() * n });
}
exports.multiplyDuration = multiplyDuration;
// Returns a boolean about whether the given duration has any time parts (hours/minutes/seconds/ms)
function durationHasTime(dur) {
    return Boolean(dur.hours() || dur.minutes() || dur.seconds() || dur.milliseconds());
}
exports.durationHasTime = durationHasTime;
function isNativeDate(input) {
    return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
}
exports.isNativeDate = isNativeDate;
// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
function isTimeString(str) {
    return typeof str === 'string' &&
        /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
}
exports.isTimeString = isTimeString;
/* Logging and Debug
----------------------------------------------------------------------------------------------------------------------*/
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var console = window.console;
    if (console && console.log) {
        return console.log.apply(console, args);
    }
}
exports.log = log;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var console = window.console;
    if (console && console.warn) {
        return console.warn.apply(console, args);
    }
    else {
        return log.apply(null, args);
    }
}
exports.warn = warn;
/* General Utilities
----------------------------------------------------------------------------------------------------------------------*/
var hasOwnPropMethod = {}.hasOwnProperty;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
    var dest = {};
    var i;
    var name;
    var complexObjs;
    var j;
    var val;
    var props;
    if (complexProps) {
        for (i = 0; i < complexProps.length; i++) {
            name = complexProps[i];
            complexObjs = [];
            // collect the trailing object values, stopping when a non-object is discovered
            for (j = propObjs.length - 1; j >= 0; j--) {
                val = propObjs[j][name];
                if (typeof val === 'object') {
                    complexObjs.unshift(val);
                }
                else if (val !== undefined) {
                    dest[name] = val; // if there were no objects, this value will be used
                    break;
                }
            }
            // if the trailing values were objects, use the merged value
            if (complexObjs.length) {
                dest[name] = mergeProps(complexObjs);
            }
        }
    }
    // copy values into the destination, going from last to first
    for (i = propObjs.length - 1; i >= 0; i--) {
        props = propObjs[i];
        for (name in props) {
            if (!(name in dest)) {
                dest[name] = props[name];
            }
        }
    }
    return dest;
}
exports.mergeProps = mergeProps;
function copyOwnProps(src, dest) {
    for (var name_1 in src) {
        if (hasOwnProp(src, name_1)) {
            dest[name_1] = src[name_1];
        }
    }
}
exports.copyOwnProps = copyOwnProps;
function hasOwnProp(obj, name) {
    return hasOwnPropMethod.call(obj, name);
}
exports.hasOwnProp = hasOwnProp;
function applyAll(functions, thisObj, args) {
    if ($.isFunction(functions)) {
        functions = [functions];
    }
    if (functions) {
        var i = void 0;
        var ret = void 0;
        for (i = 0; i < functions.length; i++) {
            ret = functions[i].apply(thisObj, args) || ret;
        }
        return ret;
    }
}
exports.applyAll = applyAll;
function removeMatching(array, testFunc) {
    var removeCnt = 0;
    var i = 0;
    while (i < array.length) {
        if (testFunc(array[i])) {
            array.splice(i, 1);
            removeCnt++;
        }
        else {
            i++;
        }
    }
    return removeCnt;
}
exports.removeMatching = removeMatching;
function removeExact(array, exactVal) {
    var removeCnt = 0;
    var i = 0;
    while (i < array.length) {
        if (array[i] === exactVal) {
            array.splice(i, 1);
            removeCnt++;
        }
        else {
            i++;
        }
    }
    return removeCnt;
}
exports.removeExact = removeExact;
function isArraysEqual(a0, a1) {
    var len = a0.length;
    var i;
    if (len == null || len !== a1.length) {
        return false;
    }
    for (i = 0; i < len; i++) {
        if (a0[i] !== a1[i]) {
            return false;
        }
    }
    return true;
}
exports.isArraysEqual = isArraysEqual;
function firstDefined() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
}
exports.firstDefined = firstDefined;
function htmlEscape(s) {
    return (s + '').replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#039;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br />');
}
exports.htmlEscape = htmlEscape;
function stripHtmlEntities(text) {
    return text.replace(/&.*?;/g, '');
}
exports.stripHtmlEntities = stripHtmlEntities;
// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
    var statements = [];
    $.each(cssProps, function (name, val) {
        if (val != null) {
            statements.push(name + ':' + val);
        }
    });
    return statements.join(';');
}
exports.cssToStr = cssToStr;
// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
    var parts = [];
    $.each(attrs, function (name, val) {
        if (val != null) {
            parts.push(name + '="' + htmlEscape(val) + '"');
        }
    });
    return parts.join(' ');
}
exports.attrsToStr = attrsToStr;
function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitaliseFirstLetter = capitaliseFirstLetter;
function compareNumbers(a, b) {
    return a - b;
}
exports.compareNumbers = compareNumbers;
function isInt(n) {
    return n % 1 === 0;
}
exports.isInt = isInt;
// Returns a method bound to the given object context.
// Just like one of the jQuery.proxy signatures, but without the undesired behavior of treating the same method with
// different contexts as identical when binding/unbinding events.
function proxy(obj, methodName) {
    var method = obj[methodName];
    return function () {
        return method.apply(obj, arguments);
    };
}
exports.proxy = proxy;
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    var args;
    var context;
    var timestamp;
    var result;
    var later = function () {
        var last = +new Date() - timestamp;
        if (last < wait) {
            timeout = setTimeout(later, wait - last);
        }
        else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }
    };
    return function () {
        context = this;
        args = arguments;
        timestamp = +new Date();
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    };
}
exports.debounce = debounce;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var moment_ext_1 = __webpack_require__(10);
var UnzonedRange = /** @class */ (function () {
    function UnzonedRange(startInput, endInput) {
        // TODO: move these into footprint.
        // Especially, doesn't make sense for null startMs/endMs.
        this.isStart = true;
        this.isEnd = true;
        if (moment.isMoment(startInput)) {
            startInput = startInput.clone().stripZone();
        }
        if (moment.isMoment(endInput)) {
            endInput = endInput.clone().stripZone();
        }
        if (startInput) {
            this.startMs = startInput.valueOf();
        }
        if (endInput) {
            this.endMs = endInput.valueOf();
        }
    }
    /*
    SIDEEFFECT: will mutate eventRanges.
    Will return a new array result.
    Only works for non-open-ended ranges.
    */
    UnzonedRange.invertRanges = function (ranges, constraintRange) {
        var invertedRanges = [];
        var startMs = constraintRange.startMs; // the end of the previous range. the start of the new range
        var i;
        var dateRange;
        // ranges need to be in order. required for our date-walking algorithm
        ranges.sort(compareUnzonedRanges);
        for (i = 0; i < ranges.length; i++) {
            dateRange = ranges[i];
            // add the span of time before the event (if there is any)
            if (dateRange.startMs > startMs) {
                invertedRanges.push(new UnzonedRange(startMs, dateRange.startMs));
            }
            if (dateRange.endMs > startMs) {
                startMs = dateRange.endMs;
            }
        }
        // add the span of time after the last event (if there is any)
        if (startMs < constraintRange.endMs) {
            invertedRanges.push(new UnzonedRange(startMs, constraintRange.endMs));
        }
        return invertedRanges;
    };
    UnzonedRange.prototype.intersect = function (otherRange) {
        var startMs = this.startMs;
        var endMs = this.endMs;
        var newRange = null;
        if (otherRange.startMs != null) {
            if (startMs == null) {
                startMs = otherRange.startMs;
            }
            else {
                startMs = Math.max(startMs, otherRange.startMs);
            }
        }
        if (otherRange.endMs != null) {
            if (endMs == null) {
                endMs = otherRange.endMs;
            }
            else {
                endMs = Math.min(endMs, otherRange.endMs);
            }
        }
        if (startMs == null || endMs == null || startMs < endMs) {
            newRange = new UnzonedRange(startMs, endMs);
            newRange.isStart = this.isStart && startMs === this.startMs;
            newRange.isEnd = this.isEnd && endMs === this.endMs;
        }
        return newRange;
    };
    UnzonedRange.prototype.intersectsWith = function (otherRange) {
        return (this.endMs == null || otherRange.startMs == null || this.endMs > otherRange.startMs) &&
            (this.startMs == null || otherRange.endMs == null || this.startMs < otherRange.endMs);
    };
    UnzonedRange.prototype.containsRange = function (innerRange) {
        return (this.startMs == null || (innerRange.startMs != null && innerRange.startMs >= this.startMs)) &&
            (this.endMs == null || (innerRange.endMs != null && innerRange.endMs <= this.endMs));
    };
    // `date` can be a moment, a Date, or a millisecond time.
    UnzonedRange.prototype.containsDate = function (date) {
        var ms = date.valueOf();
        return (this.startMs == null || ms >= this.startMs) &&
            (this.endMs == null || ms < this.endMs);
    };
    // If the given date is not within the given range, move it inside.
    // (If it's past the end, make it one millisecond before the end).
    // `date` can be a moment, a Date, or a millisecond time.
    // Returns a MS-time.
    UnzonedRange.prototype.constrainDate = function (date) {
        var ms = date.valueOf();
        if (this.startMs != null && ms < this.startMs) {
            ms = this.startMs;
        }
        if (this.endMs != null && ms >= this.endMs) {
            ms = this.endMs - 1;
        }
        return ms;
    };
    UnzonedRange.prototype.equals = function (otherRange) {
        return this.startMs === otherRange.startMs && this.endMs === otherRange.endMs;
    };
    UnzonedRange.prototype.clone = function () {
        var range = new UnzonedRange(this.startMs, this.endMs);
        range.isStart = this.isStart;
        range.isEnd = this.isEnd;
        return range;
    };
    // Returns an ambig-zoned moment from startMs.
    // BEWARE: returned moment is not localized.
    // Formatting and start-of-week will be default.
    UnzonedRange.prototype.getStart = function () {
        if (this.startMs != null) {
            return moment_ext_1.default.utc(this.startMs).stripZone();
        }
        return null;
    };
    // Returns an ambig-zoned moment from startMs.
    // BEWARE: returned moment is not localized.
    // Formatting and start-of-week will be default.
    UnzonedRange.prototype.getEnd = function () {
        if (this.endMs != null) {
            return moment_ext_1.default.utc(this.endMs).stripZone();
        }
        return null;
    };
    UnzonedRange.prototype.as = function (unit) {
        return moment.utc(this.endMs).diff(moment.utc(this.startMs), unit, true);
    };
    return UnzonedRange;
}());
exports.default = UnzonedRange;
/*
Only works for non-open-ended ranges.
*/
function compareUnzonedRanges(range1, range2) {
    return range1.startMs - range2.startMs; // earlier ranges go first
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var ParsableModelMixin_1 = __webpack_require__(208);
var Class_1 = __webpack_require__(33);
var EventDefParser_1 = __webpack_require__(49);
var EventSource = /** @class */ (function (_super) {
    tslib_1.__extends(EventSource, _super);
    // can we do away with calendar? at least for the abstract?
    // useful for buildEventDef
    function EventSource(calendar) {
        var _this = _super.call(this) || this;
        _this.calendar = calendar;
        _this.className = [];
        _this.uid = String(EventSource.uuid++);
        return _this;
    }
    /*
    rawInput can be any data type!
    */
    EventSource.parse = function (rawInput, calendar) {
        var source = new this(calendar);
        if (typeof rawInput === 'object') {
            if (source.applyProps(rawInput)) {
                return source;
            }
        }
        return false;
    };
    EventSource.normalizeId = function (id) {
        if (id) {
            return String(id);
        }
        return null;
    };
    EventSource.prototype.fetch = function (start, end, timezone) {
        // subclasses must implement. must return a promise.
    };
    EventSource.prototype.removeEventDefsById = function (eventDefId) {
        // optional for subclasses to implement
    };
    EventSource.prototype.removeAllEventDefs = function () {
        // optional for subclasses to implement
    };
    /*
    For compairing/matching
    */
    EventSource.prototype.getPrimitive = function (otherSource) {
        // subclasses must implement
    };
    EventSource.prototype.parseEventDefs = function (rawEventDefs) {
        var i;
        var eventDef;
        var eventDefs = [];
        for (i = 0; i < rawEventDefs.length; i++) {
            eventDef = this.parseEventDef(rawEventDefs[i]);
            if (eventDef) {
                eventDefs.push(eventDef);
            }
        }
        return eventDefs;
    };
    EventSource.prototype.parseEventDef = function (rawInput) {
        var calendarTransform = this.calendar.opt('eventDataTransform');
        var sourceTransform = this.eventDataTransform;
        if (calendarTransform) {
            rawInput = calendarTransform(rawInput, this.calendar);
        }
        if (sourceTransform) {
            rawInput = sourceTransform(rawInput, this.calendar);
        }
        return EventDefParser_1.default.parse(rawInput, this);
    };
    EventSource.prototype.applyManualStandardProps = function (rawProps) {
        if (rawProps.id != null) {
            this.id = EventSource.normalizeId(rawProps.id);
        }
        // TODO: converge with EventDef
        if ($.isArray(rawProps.className)) {
            this.className = rawProps.className;
        }
        else if (typeof rawProps.className === 'string') {
            this.className = rawProps.className.split(/\s+/);
        }
        return true;
    };
    EventSource.uuid = 0;
    EventSource.defineStandardProps = ParsableModelMixin_1.default.defineStandardProps;
    EventSource.copyVerbatimStandardProps = ParsableModelMixin_1.default.copyVerbatimStandardProps;
    return EventSource;
}(Class_1.default));
exports.default = EventSource;
ParsableModelMixin_1.default.mixInto(EventSource);
// Parsing
// ---------------------------------------------------------------------------------------------------------------------
EventSource.defineStandardProps({
    // manually process...
    id: false,
    className: false,
    // automatically transfer...
    color: true,
    backgroundColor: true,
    borderColor: true,
    textColor: true,
    editable: true,
    startEditable: true,
    durationEditable: true,
    rendering: true,
    overlap: true,
    constraint: true,
    allDayDefault: true,
    eventDataTransform: true
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
Utility methods for easily listening to events on another object,
and more importantly, easily unlistening from them.

USAGE:
  import { default as ListenerMixin, ListenerInterface } from './ListenerMixin'
in class:
  listenTo: ListenerInterface['listenTo']
  stopListeningTo: ListenerInterface['stopListeningTo']
after class:
  ListenerMixin.mixInto(TheClass)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var Mixin_1 = __webpack_require__(14);
var guid = 0;
var ListenerMixin = /** @class */ (function (_super) {
    tslib_1.__extends(ListenerMixin, _super);
    function ListenerMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    Given an `other` object that has on/off methods, bind the given `callback` to an event by the given name.
    The `callback` will be called with the `this` context of the object that .listenTo is being called on.
    Can be called:
      .listenTo(other, eventName, callback)
    OR
      .listenTo(other, {
        eventName1: callback1,
        eventName2: callback2
      })
    */
    ListenerMixin.prototype.listenTo = function (other, arg, callback) {
        if (typeof arg === 'object') {
            for (var eventName in arg) {
                if (arg.hasOwnProperty(eventName)) {
                    this.listenTo(other, eventName, arg[eventName]);
                }
            }
        }
        else if (typeof arg === 'string') {
            other.on(arg + '.' + this.getListenerNamespace(), // use event namespacing to identify this object
            $.proxy(callback, this) // always use `this` context
            // the usually-undesired jQuery guid behavior doesn't matter,
            // because we always unbind via namespace
            );
        }
    };
    /*
    Causes the current object to stop listening to events on the `other` object.
    `eventName` is optional. If omitted, will stop listening to ALL events on `other`.
    */
    ListenerMixin.prototype.stopListeningTo = function (other, eventName) {
        other.off((eventName || '') + '.' + this.getListenerNamespace());
    };
    /*
    Returns a string, unique to this object, to be used for event namespacing
    */
    ListenerMixin.prototype.getListenerNamespace = function () {
        if (this.listenerId == null) {
            this.listenerId = guid++;
        }
        return '_listener' + this.listenerId;
    };
    return ListenerMixin;
}(Mixin_1.default));
exports.default = ListenerMixin;


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ambigDateOfMonthRegex = /^\s*\d{4}-\d\d$/;
var ambigTimeOrZoneRegex = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
var newMomentProto = moment.fn; // where we will attach our new methods
exports.newMomentProto = newMomentProto;
var oldMomentProto = $.extend({}, newMomentProto); // copy of original moment methods
exports.oldMomentProto = oldMomentProto;
// tell momentjs to transfer these properties upon clone
var momentProperties = moment.momentProperties;
momentProperties.push('_fullCalendar');
momentProperties.push('_ambigTime');
momentProperties.push('_ambigZone');
/*
Call this if you want Moment's original format method to be used
*/
function oldMomentFormat(mom, formatStr) {
    return oldMomentProto.format.call(mom, formatStr); // oldMomentProto defined in moment-ext.js
}
exports.oldMomentFormat = oldMomentFormat;
// Creating
// -------------------------------------------------------------------------------------------------
// Creates a new moment, similar to the vanilla moment(...) constructor, but with
// extra features (ambiguous time, enhanced formatting). When given an existing moment,
// it will function as a clone (and retain the zone of the moment). Anything else will
// result in a moment in the local zone.
var momentExt = function () {
    return makeMoment(arguments);
};
exports.default = momentExt;
// Sames as momentExt, but forces the resulting moment to be in the UTC timezone.
momentExt.utc = function () {
    var mom = makeMoment(arguments, true);
    // Force it into UTC because makeMoment doesn't guarantee it
    // (if given a pre-existing moment for example)
    if (mom.hasTime()) {
        mom.utc();
    }
    return mom;
};
// Same as momentExt, but when given an ISO8601 string, the timezone offset is preserved.
// ISO8601 strings with no timezone offset will become ambiguously zoned.
momentExt.parseZone = function () {
    return makeMoment(arguments, true, true);
};
// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
// native Date, or called with no arguments (the current time), the resulting moment will be local.
// Anything else needs to be "parsed" (a string or an array), and will be affected by:
//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
//    parseZone - if there is zone information, should we force the zone of the moment?
function makeMoment(args, parseAsUTC, parseZone) {
    if (parseAsUTC === void 0) { parseAsUTC = false; }
    if (parseZone === void 0) { parseZone = false; }
    var input = args[0];
    var isSingleString = args.length === 1 && typeof input === 'string';
    var isAmbigTime;
    var isAmbigZone;
    var ambigMatch;
    var mom;
    if (moment.isMoment(input) || util_1.isNativeDate(input) || input === undefined) {
        mom = moment.apply(null, args);
    }
    else {
        isAmbigTime = false;
        isAmbigZone = false;
        if (isSingleString) {
            if (ambigDateOfMonthRegex.test(input)) {
                // accept strings like '2014-05', but convert to the first of the month
                input += '-01';
                args = [input]; // for when we pass it on to moment's constructor
                isAmbigTime = true;
                isAmbigZone = true;
            }
            else if ((ambigMatch = ambigTimeOrZoneRegex.exec(input))) {
                isAmbigTime = !ambigMatch[5]; // no time part?
                isAmbigZone = true;
            }
        }
        else if ($.isArray(input)) {
            // arrays have no timezone information, so assume ambiguous zone
            isAmbigZone = true;
        }
        // otherwise, probably a string with a format
        if (parseAsUTC || isAmbigTime) {
            mom = moment.utc.apply(moment, args);
        }
        else {
            mom = moment.apply(null, args);
        }
        if (isAmbigTime) {
            mom._ambigTime = true;
            mom._ambigZone = true; // ambiguous time always means ambiguous zone
        }
        else if (parseZone) {
            if (isAmbigZone) {
                mom._ambigZone = true;
            }
            else if (isSingleString) {
                mom.utcOffset(input); // if not a valid zone, will assign UTC
            }
        }
    }
    mom._fullCalendar = true; // flag for extended functionality
    return mom;
}
// Week Number
// -------------------------------------------------------------------------------------------------
// Returns the week number, considering the locale's custom week number calcuation
// `weeks` is an alias for `week`
newMomentProto.week = newMomentProto.weeks = function (input) {
    var weekCalc = this._locale._fullCalendar_weekCalc;
    if (input == null && typeof weekCalc === 'function') {
        return weekCalc(this);
    }
    else if (weekCalc === 'ISO') {
        return oldMomentProto.isoWeek.apply(this, arguments); // ISO getter/setter
    }
    return oldMomentProto.week.apply(this, arguments); // local getter/setter
};
// Time-of-day
// -------------------------------------------------------------------------------------------------
// GETTER
// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
// If the moment has an ambiguous time, a duration of 00:00 will be returned.
//
// SETTER
// You can supply a Duration, a Moment, or a Duration-like argument.
// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
newMomentProto.time = function (time) {
    // Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
    // `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
    if (!this._fullCalendar) {
        return oldMomentProto.time.apply(this, arguments);
    }
    if (time == null) {
        return moment.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
    }
    else {
        this._ambigTime = false; // mark that the moment now has a time
        if (!moment.isDuration(time) && !moment.isMoment(time)) {
            time = moment.duration(time);
        }
        // The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
        // Only for Duration times, not Moment times.
        var dayHours = 0;
        if (moment.isDuration(time)) {
            dayHours = Math.floor(time.asDays()) * 24;
        }
        // We need to set the individual fields.
        // Can't use startOf('day') then add duration. In case of DST at start of day.
        return this.hours(dayHours + time.hours())
            .minutes(time.minutes())
            .seconds(time.seconds())
            .milliseconds(time.milliseconds());
    }
};
// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
// but preserving its YMD. A moment with a stripped time will display no time
// nor timezone offset when .format() is called.
newMomentProto.stripTime = function () {
    if (!this._ambigTime) {
        this.utc(true); // keepLocalTime=true (for keeping *date* value)
        // set time to zero
        this.set({
            hours: 0,
            minutes: 0,
            seconds: 0,
            ms: 0
        });
        // Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
        // which clears all ambig flags.
        this._ambigTime = true;
        this._ambigZone = true; // if ambiguous time, also ambiguous timezone offset
    }
    return this; // for chaining
};
// Returns if the moment has a non-ambiguous time (boolean)
newMomentProto.hasTime = function () {
    return !this._ambigTime;
};
// Timezone
// -------------------------------------------------------------------------------------------------
// Converts the moment to UTC, stripping out its timezone offset, but preserving its
// YMD and time-of-day. A moment with a stripped timezone offset will display no
// timezone offset when .format() is called.
newMomentProto.stripZone = function () {
    var wasAmbigTime;
    if (!this._ambigZone) {
        wasAmbigTime = this._ambigTime;
        this.utc(true); // keepLocalTime=true (for keeping date and time values)
        // the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
        this._ambigTime = wasAmbigTime || false;
        // Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
        // which clears the ambig flags.
        this._ambigZone = true;
    }
    return this; // for chaining
};
// Returns of the moment has a non-ambiguous timezone offset (boolean)
newMomentProto.hasZone = function () {
    return !this._ambigZone;
};
// implicitly marks a zone
newMomentProto.local = function (keepLocalTime) {
    // for when converting from ambiguously-zoned to local,
    // keep the time values when converting from UTC -> local
    oldMomentProto.local.call(this, this._ambigZone || keepLocalTime);
    // ensure non-ambiguous
    // this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
    this._ambigTime = false;
    this._ambigZone = false;
    return this; // for chaining
};
// implicitly marks a zone
newMomentProto.utc = function (keepLocalTime) {
    oldMomentProto.utc.call(this, keepLocalTime);
    // ensure non-ambiguous
    // this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
    this._ambigTime = false;
    this._ambigZone = false;
    return this;
};
// implicitly marks a zone (will probably get called upon .utc() and .local())
newMomentProto.utcOffset = function (tzo) {
    if (tzo != null) {
        // these assignments needs to happen before the original zone method is called.
        // I forget why, something to do with a browser crash.
        this._ambigTime = false;
        this._ambigZone = false;
    }
    return oldMomentProto.utcOffset.apply(this, arguments);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
USAGE:
  import { default as EmitterMixin, EmitterInterface } from './EmitterMixin'
in class:
  on: EmitterInterface['on']
  one: EmitterInterface['one']
  off: EmitterInterface['off']
  trigger: EmitterInterface['trigger']
  triggerWith: EmitterInterface['triggerWith']
  hasHandlers: EmitterInterface['hasHandlers']
after class:
  EmitterMixin.mixInto(TheClass)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var Mixin_1 = __webpack_require__(14);
var EmitterMixin = /** @class */ (function (_super) {
    tslib_1.__extends(EmitterMixin, _super);
    function EmitterMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // jQuery-ification via $(this) allows a non-DOM object to have
    // the same event handling capabilities (including namespaces).
    EmitterMixin.prototype.on = function (types, handler) {
        $(this).on(types, this._prepareIntercept(handler));
        return this; // for chaining
    };
    EmitterMixin.prototype.one = function (types, handler) {
        $(this).one(types, this._prepareIntercept(handler));
        return this; // for chaining
    };
    EmitterMixin.prototype._prepareIntercept = function (handler) {
        // handlers are always called with an "event" object as their first param.
        // sneak the `this` context and arguments into the extra parameter object
        // and forward them on to the original handler.
        var intercept = function (ev, extra) {
            return handler.apply(extra.context || this, extra.args || []);
        };
        // mimick jQuery's internal "proxy" system (risky, I know)
        // causing all functions with the same .guid to appear to be the same.
        // https://github.com/jquery/jquery/blob/2.2.4/src/core.js#L448
        // this is needed for calling .off with the original non-intercept handler.
        if (!handler.guid) {
            handler.guid = $.guid++;
        }
        intercept.guid = handler.guid;
        return intercept;
    };
    EmitterMixin.prototype.off = function (types, handler) {
        $(this).off(types, handler);
        return this; // for chaining
    };
    EmitterMixin.prototype.trigger = function (types) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // pass in "extra" info to the intercept
        $(this).triggerHandler(types, { args: args });
        return this; // for chaining
    };
    EmitterMixin.prototype.triggerWith = function (types, context, args) {
        // `triggerHandler` is less reliant on the DOM compared to `trigger`.
        // pass in "extra" info to the intercept.
        $(this).triggerHandler(types, { context: context, args: args });
        return this; // for chaining
    };
    EmitterMixin.prototype.hasHandlers = function (type) {
        var hash = $._data(this, 'events'); // http://blog.jquery.com/2012/08/09/jquery-1-8-released/
        return hash && hash[type] && hash[type].length > 0;
    };
    return EmitterMixin;
}(Mixin_1.default));
exports.default = EmitterMixin;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/*
Meant to be immutable
*/
var ComponentFootprint = /** @class */ (function () {
    function ComponentFootprint(unzonedRange, isAllDay) {
        this.isAllDay = false; // component can choose to ignore this
        this.unzonedRange = unzonedRange;
        this.isAllDay = isAllDay;
    }
    /*
    Only works for non-open-ended ranges.
    */
    ComponentFootprint.prototype.toLegacy = function (calendar) {
        return {
            start: calendar.msToMoment(this.unzonedRange.startMs, this.isAllDay),
            end: calendar.msToMoment(this.unzonedRange.endMs, this.isAllDay)
        };
    };
    return ComponentFootprint;
}());
exports.default = ComponentFootprint;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var EventDef_1 = __webpack_require__(34);
var EventInstance_1 = __webpack_require__(209);
var EventDateProfile_1 = __webpack_require__(17);
var SingleEventDef = /** @class */ (function (_super) {
    tslib_1.__extends(SingleEventDef, _super);
    function SingleEventDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    Will receive start/end params, but will be ignored.
    */
    SingleEventDef.prototype.buildInstances = function () {
        return [this.buildInstance()];
    };
    SingleEventDef.prototype.buildInstance = function () {
        return new EventInstance_1.default(this, // definition
        this.dateProfile);
    };
    SingleEventDef.prototype.isAllDay = function () {
        return this.dateProfile.isAllDay();
    };
    SingleEventDef.prototype.clone = function () {
        var def = _super.prototype.clone.call(this);
        def.dateProfile = this.dateProfile;
        return def;
    };
    SingleEventDef.prototype.rezone = function () {
        var calendar = this.source.calendar;
        var dateProfile = this.dateProfile;
        this.dateProfile = new EventDateProfile_1.default(calendar.moment(dateProfile.start), dateProfile.end ? calendar.moment(dateProfile.end) : null, calendar);
    };
    /*
    NOTE: if super-method fails, should still attempt to apply
    */
    SingleEventDef.prototype.applyManualStandardProps = function (rawProps) {
        var superSuccess = _super.prototype.applyManualStandardProps.call(this, rawProps);
        var dateProfile = EventDateProfile_1.default.parse(rawProps, this.source); // returns null on failure
        if (dateProfile) {
            this.dateProfile = dateProfile;
            // make sure `date` shows up in the legacy event objects as-is
            if (rawProps.date != null) {
                this.miscProps.date = rawProps.date;
            }
            return superSuccess;
        }
        else {
            return false;
        }
    };
    return SingleEventDef;
}(EventDef_1.default));
exports.default = SingleEventDef;
// Parsing
// ---------------------------------------------------------------------------------------------------------------------
SingleEventDef.defineStandardProps({
    start: false,
    date: false,
    end: false,
    allDay: false
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Mixin = /** @class */ (function () {
    function Mixin() {
    }
    Mixin.mixInto = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            if (!destClass.prototype[name]) {
                destClass.prototype[name] = _this.prototype[name];
            }
        });
    };
    /*
    will override existing methods
    TODO: remove! not used anymore
    */
    Mixin.mixOver = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            destClass.prototype[name] = _this.prototype[name];
        });
    };
    return Mixin;
}());
exports.default = Mixin;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Interaction = /** @class */ (function () {
    function Interaction(component) {
        this.view = component._getView();
        this.component = component;
    }
    Interaction.prototype.opt = function (name) {
        return this.view.opt(name);
    };
    Interaction.prototype.end = function () {
        // subclasses can implement
    };
    return Interaction;
}());
exports.default = Interaction;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = '3.9.0';
// When introducing internal API incompatibilities (where fullcalendar plugins would break),
// the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
// and the below integer should be incremented.
exports.internalApiVersion = 12;
var util_1 = __webpack_require__(4);
exports.applyAll = util_1.applyAll;
exports.debounce = util_1.debounce;
exports.isInt = util_1.isInt;
exports.htmlEscape = util_1.htmlEscape;
exports.cssToStr = util_1.cssToStr;
exports.proxy = util_1.proxy;
exports.capitaliseFirstLetter = util_1.capitaliseFirstLetter;
exports.getOuterRect = util_1.getOuterRect;
exports.getClientRect = util_1.getClientRect;
exports.getContentRect = util_1.getContentRect;
exports.getScrollbarWidths = util_1.getScrollbarWidths;
exports.preventDefault = util_1.preventDefault;
exports.parseFieldSpecs = util_1.parseFieldSpecs;
exports.compareByFieldSpecs = util_1.compareByFieldSpecs;
exports.compareByFieldSpec = util_1.compareByFieldSpec;
exports.flexibleCompare = util_1.flexibleCompare;
exports.computeGreatestUnit = util_1.computeGreatestUnit;
exports.divideRangeByDuration = util_1.divideRangeByDuration;
exports.divideDurationByDuration = util_1.divideDurationByDuration;
exports.multiplyDuration = util_1.multiplyDuration;
exports.durationHasTime = util_1.durationHasTime;
exports.log = util_1.log;
exports.warn = util_1.warn;
exports.removeExact = util_1.removeExact;
exports.intersectRects = util_1.intersectRects;
var date_formatting_1 = __webpack_require__(47);
exports.formatDate = date_formatting_1.formatDate;
exports.formatRange = date_formatting_1.formatRange;
exports.queryMostGranularFormatUnit = date_formatting_1.queryMostGranularFormatUnit;
var locale_1 = __webpack_require__(31);
exports.datepickerLocale = locale_1.datepickerLocale;
exports.locale = locale_1.locale;
var moment_ext_1 = __webpack_require__(10);
exports.moment = moment_ext_1.default;
var EmitterMixin_1 = __webpack_require__(11);
exports.EmitterMixin = EmitterMixin_1.default;
var ListenerMixin_1 = __webpack_require__(7);
exports.ListenerMixin = ListenerMixin_1.default;
var Model_1 = __webpack_require__(48);
exports.Model = Model_1.default;
var Constraints_1 = __webpack_require__(207);
exports.Constraints = Constraints_1.default;
var UnzonedRange_1 = __webpack_require__(5);
exports.UnzonedRange = UnzonedRange_1.default;
var ComponentFootprint_1 = __webpack_require__(12);
exports.ComponentFootprint = ComponentFootprint_1.default;
var BusinessHourGenerator_1 = __webpack_require__(212);
exports.BusinessHourGenerator = BusinessHourGenerator_1.default;
var EventDef_1 = __webpack_require__(34);
exports.EventDef = EventDef_1.default;
var EventDefMutation_1 = __webpack_require__(37);
exports.EventDefMutation = EventDefMutation_1.default;
var EventSourceParser_1 = __webpack_require__(38);
exports.EventSourceParser = EventSourceParser_1.default;
var EventSource_1 = __webpack_require__(6);
exports.EventSource = EventSource_1.default;
var ThemeRegistry_1 = __webpack_require__(51);
exports.defineThemeSystem = ThemeRegistry_1.defineThemeSystem;
var EventInstanceGroup_1 = __webpack_require__(18);
exports.EventInstanceGroup = EventInstanceGroup_1.default;
var ArrayEventSource_1 = __webpack_require__(52);
exports.ArrayEventSource = ArrayEventSource_1.default;
var FuncEventSource_1 = __webpack_require__(215);
exports.FuncEventSource = FuncEventSource_1.default;
var JsonFeedEventSource_1 = __webpack_require__(216);
exports.JsonFeedEventSource = JsonFeedEventSource_1.default;
var EventFootprint_1 = __webpack_require__(36);
exports.EventFootprint = EventFootprint_1.default;
var Class_1 = __webpack_require__(33);
exports.Class = Class_1.default;
var Mixin_1 = __webpack_require__(14);
exports.Mixin = Mixin_1.default;
var CoordCache_1 = __webpack_require__(53);
exports.CoordCache = CoordCache_1.default;
var DragListener_1 = __webpack_require__(54);
exports.DragListener = DragListener_1.default;
var Promise_1 = __webpack_require__(20);
exports.Promise = Promise_1.default;
var TaskQueue_1 = __webpack_require__(217);
exports.TaskQueue = TaskQueue_1.default;
var RenderQueue_1 = __webpack_require__(218);
exports.RenderQueue = RenderQueue_1.default;
var Scroller_1 = __webpack_require__(39);
exports.Scroller = Scroller_1.default;
var Theme_1 = __webpack_require__(19);
exports.Theme = Theme_1.default;
var DateComponent_1 = __webpack_require__(219);
exports.DateComponent = DateComponent_1.default;
var InteractiveDateComponent_1 = __webpack_require__(40);
exports.InteractiveDateComponent = InteractiveDateComponent_1.default;
var Calendar_1 = __webpack_require__(220);
exports.Calendar = Calendar_1.default;
var View_1 = __webpack_require__(41);
exports.View = View_1.default;
var ViewRegistry_1 = __webpack_require__(22);
exports.defineView = ViewRegistry_1.defineView;
exports.getViewConfig = ViewRegistry_1.getViewConfig;
var DayTableMixin_1 = __webpack_require__(55);
exports.DayTableMixin = DayTableMixin_1.default;
var BusinessHourRenderer_1 = __webpack_require__(56);
exports.BusinessHourRenderer = BusinessHourRenderer_1.default;
var EventRenderer_1 = __webpack_require__(42);
exports.EventRenderer = EventRenderer_1.default;
var FillRenderer_1 = __webpack_require__(57);
exports.FillRenderer = FillRenderer_1.default;
var HelperRenderer_1 = __webpack_require__(58);
exports.HelperRenderer = HelperRenderer_1.default;
var ExternalDropping_1 = __webpack_require__(222);
exports.ExternalDropping = ExternalDropping_1.default;
var EventResizing_1 = __webpack_require__(223);
exports.EventResizing = EventResizing_1.default;
var EventPointing_1 = __webpack_require__(59);
exports.EventPointing = EventPointing_1.default;
var EventDragging_1 = __webpack_require__(224);
exports.EventDragging = EventDragging_1.default;
var DateSelecting_1 = __webpack_require__(225);
exports.DateSelecting = DateSelecting_1.default;
var StandardInteractionsMixin_1 = __webpack_require__(60);
exports.StandardInteractionsMixin = StandardInteractionsMixin_1.default;
var AgendaView_1 = __webpack_require__(226);
exports.AgendaView = AgendaView_1.default;
var TimeGrid_1 = __webpack_require__(227);
exports.TimeGrid = TimeGrid_1.default;
var DayGrid_1 = __webpack_require__(61);
exports.DayGrid = DayGrid_1.default;
var BasicView_1 = __webpack_require__(62);
exports.BasicView = BasicView_1.default;
var MonthView_1 = __webpack_require__(229);
exports.MonthView = MonthView_1.default;
var ListView_1 = __webpack_require__(230);
exports.ListView = ListView_1.default;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var UnzonedRange_1 = __webpack_require__(5);
/*
Meant to be immutable
*/
var EventDateProfile = /** @class */ (function () {
    function EventDateProfile(start, end, calendar) {
        this.start = start;
        this.end = end || null;
        this.unzonedRange = this.buildUnzonedRange(calendar);
    }
    /*
    Needs an EventSource object
    */
    EventDateProfile.parse = function (rawProps, source) {
        var startInput = rawProps.start || rawProps.date;
        var endInput = rawProps.end;
        if (!startInput) {
            return false;
        }
        var calendar = source.calendar;
        var start = calendar.moment(startInput);
        var end = endInput ? calendar.moment(endInput) : null;
        var forcedAllDay = rawProps.allDay;
        var forceEventDuration = calendar.opt('forceEventDuration');
        if (!start.isValid()) {
            return false;
        }
        if (end && (!end.isValid() || !end.isAfter(start))) {
            end = null;
        }
        if (forcedAllDay == null) {
            forcedAllDay = source.allDayDefault;
            if (forcedAllDay == null) {
                forcedAllDay = calendar.opt('allDayDefault');
            }
        }
        if (forcedAllDay === true) {
            start.stripTime();
            if (end) {
                end.stripTime();
            }
        }
        else if (forcedAllDay === false) {
            if (!start.hasTime()) {
                start.time(0);
            }
            if (end && !end.hasTime()) {
                end.time(0);
            }
        }
        if (!end && forceEventDuration) {
            end = calendar.getDefaultEventEnd(!start.hasTime(), start);
        }
        return new EventDateProfile(start, end, calendar);
    };
    EventDateProfile.isStandardProp = function (propName) {
        return propName === 'start' || propName === 'date' || propName === 'end' || propName === 'allDay';
    };
    EventDateProfile.prototype.isAllDay = function () {
        return !(this.start.hasTime() || (this.end && this.end.hasTime()));
    };
    /*
    Needs a Calendar object
    */
    EventDateProfile.prototype.buildUnzonedRange = function (calendar) {
        var startMs = this.start.clone().stripZone().valueOf();
        var endMs = this.getEnd(calendar).stripZone().valueOf();
        return new UnzonedRange_1.default(startMs, endMs);
    };
    /*
    Needs a Calendar object
    */
    EventDateProfile.prototype.getEnd = function (calendar) {
        return this.end ?
            this.end.clone() :
            // derive the end from the start and allDay. compute allDay if necessary
            calendar.getDefaultEventEnd(this.isAllDay(), this.start);
    };
    return EventDateProfile;
}());
exports.default = EventDateProfile;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var UnzonedRange_1 = __webpack_require__(5);
var util_1 = __webpack_require__(35);
var EventRange_1 = __webpack_require__(211);
/*
It's expected that there will be at least one EventInstance,
OR that an explicitEventDef is assigned.
*/
var EventInstanceGroup = /** @class */ (function () {
    function EventInstanceGroup(eventInstances) {
        this.eventInstances = eventInstances || [];
    }
    EventInstanceGroup.prototype.getAllEventRanges = function (constraintRange) {
        if (constraintRange) {
            return this.sliceNormalRenderRanges(constraintRange);
        }
        else {
            return this.eventInstances.map(util_1.eventInstanceToEventRange);
        }
    };
    EventInstanceGroup.prototype.sliceRenderRanges = function (constraintRange) {
        if (this.isInverse()) {
            return this.sliceInverseRenderRanges(constraintRange);
        }
        else {
            return this.sliceNormalRenderRanges(constraintRange);
        }
    };
    EventInstanceGroup.prototype.sliceNormalRenderRanges = function (constraintRange) {
        var eventInstances = this.eventInstances;
        var i;
        var eventInstance;
        var slicedRange;
        var slicedEventRanges = [];
        for (i = 0; i < eventInstances.length; i++) {
            eventInstance = eventInstances[i];
            slicedRange = eventInstance.dateProfile.unzonedRange.intersect(constraintRange);
            if (slicedRange) {
                slicedEventRanges.push(new EventRange_1.default(slicedRange, eventInstance.def, eventInstance));
            }
        }
        return slicedEventRanges;
    };
    EventInstanceGroup.prototype.sliceInverseRenderRanges = function (constraintRange) {
        var unzonedRanges = this.eventInstances.map(util_1.eventInstanceToUnzonedRange);
        var ownerDef = this.getEventDef();
        unzonedRanges = UnzonedRange_1.default.invertRanges(unzonedRanges, constraintRange);
        return unzonedRanges.map(function (unzonedRange) {
            return new EventRange_1.default(unzonedRange, ownerDef); // don't give an EventInstance
        });
    };
    EventInstanceGroup.prototype.isInverse = function () {
        return this.getEventDef().hasInverseRendering();
    };
    EventInstanceGroup.prototype.getEventDef = function () {
        return this.explicitEventDef || this.eventInstances[0].def;
    };
    return EventInstanceGroup;
}());
exports.default = EventInstanceGroup;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var Theme = /** @class */ (function () {
    function Theme(optionsManager) {
        this.optionsManager = optionsManager;
        this.processIconOverride();
    }
    Theme.prototype.processIconOverride = function () {
        if (this.iconOverrideOption) {
            this.setIconOverride(this.optionsManager.get(this.iconOverrideOption));
        }
    };
    Theme.prototype.setIconOverride = function (iconOverrideHash) {
        var iconClassesCopy;
        var buttonName;
        if ($.isPlainObject(iconOverrideHash)) {
            iconClassesCopy = $.extend({}, this.iconClasses);
            for (buttonName in iconOverrideHash) {
                iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
            }
            this.iconClasses = iconClassesCopy;
        }
        else if (iconOverrideHash === false) {
            this.iconClasses = {};
        }
    };
    Theme.prototype.applyIconOverridePrefix = function (className) {
        var prefix = this.iconOverridePrefix;
        if (prefix && className.indexOf(prefix) !== 0) {
            className = prefix + className;
        }
        return className;
    };
    Theme.prototype.getClass = function (key) {
        return this.classes[key] || '';
    };
    Theme.prototype.getIconClass = function (buttonName) {
        var className = this.iconClasses[buttonName];
        if (className) {
            return this.baseIconClass + ' ' + className;
        }
        return '';
    };
    Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
        var className;
        if (this.iconOverrideCustomButtonOption) {
            className = customButtonProps[this.iconOverrideCustomButtonOption];
            if (className) {
                return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
            }
        }
        return '';
    };
    return Theme;
}());
exports.default = Theme;
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var PromiseStub = {
    construct: function (executor) {
        var deferred = $.Deferred();
        var promise = deferred.promise();
        if (typeof executor === 'function') {
            executor(function (val) {
                deferred.resolve(val);
                attachImmediatelyResolvingThen(promise, val);
            }, function () {
                deferred.reject();
                attachImmediatelyRejectingThen(promise);
            });
        }
        return promise;
    },
    resolve: function (val) {
        var deferred = $.Deferred().resolve(val);
        var promise = deferred.promise();
        attachImmediatelyResolvingThen(promise, val);
        return promise;
    },
    reject: function () {
        var deferred = $.Deferred().reject();
        var promise = deferred.promise();
        attachImmediatelyRejectingThen(promise);
        return promise;
    }
};
exports.default = PromiseStub;
function attachImmediatelyResolvingThen(promise, val) {
    promise.then = function (onResolve) {
        if (typeof onResolve === 'function') {
            return PromiseStub.resolve(onResolve(val));
        }
        return promise;
    };
}
function attachImmediatelyRejectingThen(promise) {
    promise.then = function (onResolve, onReject) {
        if (typeof onReject === 'function') {
            onReject();
        }
        return promise;
    };
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var exportHooks = __webpack_require__(16);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
exportHooks.touchMouseIgnoreWait = 500;
var globalEmitter = null;
var neededCount = 0;
/*
Listens to document and window-level user-interaction events, like touch events and mouse events,
and fires these events as-is to whoever is observing a GlobalEmitter.
Best when used as a singleton via GlobalEmitter.get()

Normalizes mouse/touch events. For examples:
- ignores the the simulated mouse events that happen after a quick tap: mousemove+mousedown+mouseup+click
- compensates for various buggy scenarios where a touchend does not fire
*/
var GlobalEmitter = /** @class */ (function () {
    function GlobalEmitter() {
        this.isTouching = false;
        this.mouseIgnoreDepth = 0;
    }
    // gets the singleton
    GlobalEmitter.get = function () {
        if (!globalEmitter) {
            globalEmitter = new GlobalEmitter();
            globalEmitter.bind();
        }
        return globalEmitter;
    };
    // called when an object knows it will need a GlobalEmitter in the near future.
    GlobalEmitter.needed = function () {
        GlobalEmitter.get(); // ensures globalEmitter
        neededCount++;
    };
    // called when the object that originally called needed() doesn't need a GlobalEmitter anymore.
    GlobalEmitter.unneeded = function () {
        neededCount--;
        if (!neededCount) {
            globalEmitter.unbind();
            globalEmitter = null;
        }
    };
    GlobalEmitter.prototype.bind = function () {
        var _this = this;
        this.listenTo($(document), {
            touchstart: this.handleTouchStart,
            touchcancel: this.handleTouchCancel,
            touchend: this.handleTouchEnd,
            mousedown: this.handleMouseDown,
            mousemove: this.handleMouseMove,
            mouseup: this.handleMouseUp,
            click: this.handleClick,
            selectstart: this.handleSelectStart,
            contextmenu: this.handleContextMenu
        });
        // because we need to call preventDefault
        // because https://www.chromestatus.com/features/5093566007214080
        // TODO: investigate performance because this is a global handler
        window.addEventListener('touchmove', this.handleTouchMoveProxy = function (ev) {
            _this.handleTouchMove($.Event(ev));
        }, { passive: false } // allows preventDefault()
        );
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342
        window.addEventListener('scroll', this.handleScrollProxy = function (ev) {
            _this.handleScroll($.Event(ev));
        }, true // useCapture
        );
    };
    GlobalEmitter.prototype.unbind = function () {
        this.stopListeningTo($(document));
        window.removeEventListener('touchmove', this.handleTouchMoveProxy);
        window.removeEventListener('scroll', this.handleScrollProxy, true // useCapture
        );
    };
    // Touch Handlers
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.handleTouchStart = function (ev) {
        // if a previous touch interaction never ended with a touchend, then implicitly end it,
        // but since a new touch interaction is about to begin, don't start the mouse ignore period.
        this.stopTouch(ev, true); // skipMouseIgnore=true
        this.isTouching = true;
        this.trigger('touchstart', ev);
    };
    GlobalEmitter.prototype.handleTouchMove = function (ev) {
        if (this.isTouching) {
            this.trigger('touchmove', ev);
        }
    };
    GlobalEmitter.prototype.handleTouchCancel = function (ev) {
        if (this.isTouching) {
            this.trigger('touchcancel', ev);
            // Have touchcancel fire an artificial touchend. That way, handlers won't need to listen to both.
            // If touchend fires later, it won't have any effect b/c isTouching will be false.
            this.stopTouch(ev);
        }
    };
    GlobalEmitter.prototype.handleTouchEnd = function (ev) {
        this.stopTouch(ev);
    };
    // Mouse Handlers
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.handleMouseDown = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('mousedown', ev);
        }
    };
    GlobalEmitter.prototype.handleMouseMove = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('mousemove', ev);
        }
    };
    GlobalEmitter.prototype.handleMouseUp = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('mouseup', ev);
        }
    };
    GlobalEmitter.prototype.handleClick = function (ev) {
        if (!this.shouldIgnoreMouse()) {
            this.trigger('click', ev);
        }
    };
    // Misc Handlers
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.handleSelectStart = function (ev) {
        this.trigger('selectstart', ev);
    };
    GlobalEmitter.prototype.handleContextMenu = function (ev) {
        this.trigger('contextmenu', ev);
    };
    GlobalEmitter.prototype.handleScroll = function (ev) {
        this.trigger('scroll', ev);
    };
    // Utils
    // -----------------------------------------------------------------------------------------------------------------
    GlobalEmitter.prototype.stopTouch = function (ev, skipMouseIgnore) {
        if (skipMouseIgnore === void 0) { skipMouseIgnore = false; }
        if (this.isTouching) {
            this.isTouching = false;
            this.trigger('touchend', ev);
            if (!skipMouseIgnore) {
                this.startTouchMouseIgnore();
            }
        }
    };
    GlobalEmitter.prototype.startTouchMouseIgnore = function () {
        var _this = this;
        var wait = exportHooks.touchMouseIgnoreWait;
        if (wait) {
            this.mouseIgnoreDepth++;
            setTimeout(function () {
                _this.mouseIgnoreDepth--;
            }, wait);
        }
    };
    GlobalEmitter.prototype.shouldIgnoreMouse = function () {
        return this.isTouching || Boolean(this.mouseIgnoreDepth);
    };
    return GlobalEmitter;
}());
exports.default = GlobalEmitter;
ListenerMixin_1.default.mixInto(GlobalEmitter);
EmitterMixin_1.default.mixInto(GlobalEmitter);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var exportHooks = __webpack_require__(16);
exports.viewHash = {};
exportHooks.views = exports.viewHash;
function defineView(viewName, viewConfig) {
    exports.viewHash[viewName] = viewConfig;
}
exports.defineView = defineView;
function getViewConfig(viewName) {
    return exports.viewHash[viewName];
}
exports.getViewConfig = getViewConfig;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var DragListener_1 = __webpack_require__(54);
/* Tracks mouse movements over a component and raises events about which hit the mouse is over.
------------------------------------------------------------------------------------------------------------------------
options:
- subjectEl
- subjectCenter
*/
var HitDragListener = /** @class */ (function (_super) {
    tslib_1.__extends(HitDragListener, _super);
    function HitDragListener(component, options) {
        var _this = _super.call(this, options) || this;
        _this.component = component;
        return _this;
    }
    // Called when drag listening starts (but a real drag has not necessarily began).
    // ev might be undefined if dragging was started manually.
    HitDragListener.prototype.handleInteractionStart = function (ev) {
        var subjectEl = this.subjectEl;
        var subjectRect;
        var origPoint;
        var point;
        this.component.hitsNeeded();
        this.computeScrollBounds(); // for autoscroll
        if (ev) {
            origPoint = { left: util_1.getEvX(ev), top: util_1.getEvY(ev) };
            point = origPoint;
            // constrain the point to bounds of the element being dragged
            if (subjectEl) {
                subjectRect = util_1.getOuterRect(subjectEl); // used for centering as well
                point = util_1.constrainPoint(point, subjectRect);
            }
            this.origHit = this.queryHit(point.left, point.top);
            // treat the center of the subject as the collision point?
            if (subjectEl && this.options.subjectCenter) {
                // only consider the area the subject overlaps the hit. best for large subjects.
                // TODO: skip this if hit didn't supply left/right/top/bottom
                if (this.origHit) {
                    subjectRect = util_1.intersectRects(this.origHit, subjectRect) ||
                        subjectRect; // in case there is no intersection
                }
                point = util_1.getRectCenter(subjectRect);
            }
            this.coordAdjust = util_1.diffPoints(point, origPoint); // point - origPoint
        }
        else {
            this.origHit = null;
            this.coordAdjust = null;
        }
        // call the super-method. do it after origHit has been computed
        _super.prototype.handleInteractionStart.call(this, ev);
    };
    // Called when the actual drag has started
    HitDragListener.prototype.handleDragStart = function (ev) {
        var hit;
        _super.prototype.handleDragStart.call(this, ev);
        // might be different from this.origHit if the min-distance is large
        hit = this.queryHit(util_1.getEvX(ev), util_1.getEvY(ev));
        // report the initial hit the mouse is over
        // especially important if no min-distance and drag starts immediately
        if (hit) {
            this.handleHitOver(hit);
        }
    };
    // Called when the drag moves
    HitDragListener.prototype.handleDrag = function (dx, dy, ev) {
        var hit;
        _super.prototype.handleDrag.call(this, dx, dy, ev);
        hit = this.queryHit(util_1.getEvX(ev), util_1.getEvY(ev));
        if (!isHitsEqual(hit, this.hit)) {
            if (this.hit) {
                this.handleHitOut();
            }
            if (hit) {
                this.handleHitOver(hit);
            }
        }
    };
    // Called when dragging has been stopped
    HitDragListener.prototype.handleDragEnd = function (ev) {
        this.handleHitDone();
        _super.prototype.handleDragEnd.call(this, ev);
    };
    // Called when a the mouse has just moved over a new hit
    HitDragListener.prototype.handleHitOver = function (hit) {
        var isOrig = isHitsEqual(hit, this.origHit);
        this.hit = hit;
        this.trigger('hitOver', this.hit, isOrig, this.origHit);
    };
    // Called when the mouse has just moved out of a hit
    HitDragListener.prototype.handleHitOut = function () {
        if (this.hit) {
            this.trigger('hitOut', this.hit);
            this.handleHitDone();
            this.hit = null;
        }
    };
    // Called after a hitOut. Also called before a dragStop
    HitDragListener.prototype.handleHitDone = function () {
        if (this.hit) {
            this.trigger('hitDone', this.hit);
        }
    };
    // Called when the interaction ends, whether there was a real drag or not
    HitDragListener.prototype.handleInteractionEnd = function (ev, isCancelled) {
        _super.prototype.handleInteractionEnd.call(this, ev, isCancelled);
        this.origHit = null;
        this.hit = null;
        this.component.hitsNotNeeded();
    };
    // Called when scrolling has stopped, whether through auto scroll, or the user scrolling
    HitDragListener.prototype.handleScrollEnd = function () {
        _super.prototype.handleScrollEnd.call(this);
        // hits' absolute positions will be in new places after a user's scroll.
        // HACK for recomputing.
        if (this.isDragging) {
            this.component.releaseHits();
            this.component.prepareHits();
        }
    };
    // Gets the hit underneath the coordinates for the given mouse event
    HitDragListener.prototype.queryHit = function (left, top) {
        if (this.coordAdjust) {
            left += this.coordAdjust.left;
            top += this.coordAdjust.top;
        }
        return this.component.queryHit(left, top);
    };
    return HitDragListener;
}(DragListener_1.default));
exports.default = HitDragListener;
// Returns `true` if the hits are identically equal. `false` otherwise. Must be from the same component.
// Two null values will be considered equal, as two "out of the component" states are the same.
function isHitsEqual(hit0, hit1) {
    if (!hit0 && !hit1) {
        return true;
    }
    if (hit0 && hit1) {
        return hit0.component === hit1.component &&
            isHitPropsWithin(hit0, hit1) &&
            isHitPropsWithin(hit1, hit0); // ensures all props are identical
    }
    return false;
}
// Returns true if all of subHit's non-standard properties are within superHit
function isHitPropsWithin(subHit, superHit) {
    for (var propName in subHit) {
        if (!/^(component|left|right|top|bottom)$/.test(propName)) {
            if (subHit[propName] !== superHit[propName]) {
                return false;
            }
        }
    }
    return true;
}


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var exportHooks = __webpack_require__(16);
var options_1 = __webpack_require__(32);
var util_1 = __webpack_require__(4);
exports.localeOptionHash = {};
exportHooks.locales = exports.localeOptionHash;
// NOTE: can't guarantee any of these computations will run because not every locale has datepicker
// configs, so make sure there are English fallbacks for these in the defaults file.
var dpComputableOptions = {
    buttonText: function (dpOptions) {
        return {
            // the translations sometimes wrongly contain HTML entities
            prev: util_1.stripHtmlEntities(dpOptions.prevText),
            next: util_1.stripHtmlEntities(dpOptions.nextText),
            today: util_1.stripHtmlEntities(dpOptions.currentText)
        };
    },
    // Produces format strings like "MMMM YYYY" -> "September 2014"
    monthYearFormat: function (dpOptions) {
        return dpOptions.showMonthAfterYear ?
            'YYYY[' + dpOptions.yearSuffix + '] MMMM' :
            'MMMM YYYY[' + dpOptions.yearSuffix + ']';
    }
};
var momComputableOptions = {
    // Produces format strings like "ddd M/D" -> "Fri 9/15"
    dayOfMonthFormat: function (momOptions, fcOptions) {
        var format = momOptions.longDateFormat('l'); // for the format like "M/D/YYYY"
        // strip the year off the edge, as well as other misc non-whitespace chars
        format = format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, '');
        if (fcOptions.isRTL) {
            format += ' ddd'; // for RTL, add day-of-week to end
        }
        else {
            format = 'ddd ' + format; // for LTR, add day-of-week to beginning
        }
        return format;
    },
    // Produces format strings like "h:mma" -> "6:00pm"
    mediumTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
    },
    // Produces format strings like "h(:mm)a" -> "6pm" / "6:30pm"
    smallTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(':mm', '(:mm)')
            .replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
            .replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
    },
    // Produces format strings like "h(:mm)t" -> "6p" / "6:30p"
    extraSmallTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(':mm', '(:mm)')
            .replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
            .replace(/\s*a$/i, 't'); // convert to AM/PM/am/pm to lowercase one-letter. remove any spaces beforehand
    },
    // Produces format strings like "ha" / "H" -> "6pm" / "18"
    hourFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(':mm', '')
            .replace(/(\Wmm)$/, '') // like above, but for foreign locales
            .replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
    },
    // Produces format strings like "h:mm" -> "6:30" (with no AM/PM)
    noMeridiemTimeFormat: function (momOptions) {
        return momOptions.longDateFormat('LT')
            .replace(/\s*a$/i, ''); // remove trailing AM/PM
    }
};
// options that should be computed off live calendar options (considers override options)
// TODO: best place for this? related to locale?
// TODO: flipping text based on isRTL is a bad idea because the CSS `direction` might want to handle it
var instanceComputableOptions = {
    // Produces format strings for results like "Mo 16"
    smallDayDateFormat: function (options) {
        return options.isRTL ?
            'D dd' :
            'dd D';
    },
    // Produces format strings for results like "Wk 5"
    weekFormat: function (options) {
        return options.isRTL ?
            'w[ ' + options.weekNumberTitle + ']' :
            '[' + options.weekNumberTitle + ' ]w';
    },
    // Produces format strings for results like "Wk5"
    smallWeekFormat: function (options) {
        return options.isRTL ?
            'w[' + options.weekNumberTitle + ']' :
            '[' + options.weekNumberTitle + ']w';
    }
};
// TODO: make these computable properties in optionsManager
function populateInstanceComputableOptions(options) {
    $.each(instanceComputableOptions, function (name, func) {
        if (options[name] == null) {
            options[name] = func(options);
        }
    });
}
exports.populateInstanceComputableOptions = populateInstanceComputableOptions;
// Initialize jQuery UI datepicker translations while using some of the translations
// Will set this as the default locales for datepicker.
function datepickerLocale(localeCode, dpLocaleCode, dpOptions) {
    // get the FullCalendar internal option hash for this locale. create if necessary
    var fcOptions = exports.localeOptionHash[localeCode] || (exports.localeOptionHash[localeCode] = {});
    // transfer some simple options from datepicker to fc
    fcOptions.isRTL = dpOptions.isRTL;
    fcOptions.weekNumberTitle = dpOptions.weekHeader;
    // compute some more complex options from datepicker
    $.each(dpComputableOptions, function (name, func) {
        fcOptions[name] = func(dpOptions);
    });
    var jqDatePicker = $.datepicker;
    // is jQuery UI Datepicker is on the page?
    if (jqDatePicker) {
        // Register the locale data.
        // FullCalendar and MomentJS use locale codes like "pt-br" but Datepicker
        // does it like "pt-BR" or if it doesn't have the locale, maybe just "pt".
        // Make an alias so the locale can be referenced either way.
        jqDatePicker.regional[dpLocaleCode] =
            jqDatePicker.regional[localeCode] = // alias
                dpOptions;
        // Alias 'en' to the default locale data. Do this every time.
        jqDatePicker.regional.en = jqDatePicker.regional[''];
        // Set as Datepicker's global defaults.
        jqDatePicker.setDefaults(dpOptions);
    }
}
exports.datepickerLocale = datepickerLocale;
// Sets FullCalendar-specific translations. Will set the locales as the global default.
function locale(localeCode, newFcOptions) {
    var fcOptions;
    var momOptions;
    // get the FullCalendar internal option hash for this locale. create if necessary
    fcOptions = exports.localeOptionHash[localeCode] || (exports.localeOptionHash[localeCode] = {});
    // provided new options for this locales? merge them in
    if (newFcOptions) {
        fcOptions = exports.localeOptionHash[localeCode] = options_1.mergeOptions([fcOptions, newFcOptions]);
    }
    // compute locale options that weren't defined.
    // always do this. newFcOptions can be undefined when initializing from i18n file,
    // so no way to tell if this is an initialization or a default-setting.
    momOptions = getMomentLocaleData(localeCode); // will fall back to en
    $.each(momComputableOptions, function (name, func) {
        if (fcOptions[name] == null) {
            fcOptions[name] = (func)(momOptions, fcOptions);
        }
    });
    // set it as the default locale for FullCalendar
    options_1.globalDefaults.locale = localeCode;
}
exports.locale = locale;
// Returns moment's internal locale data. If doesn't exist, returns English.
function getMomentLocaleData(localeCode) {
    return moment.localeData(localeCode) || moment.localeData('en');
}
exports.getMomentLocaleData = getMomentLocaleData;
// Initialize English by forcing computation of moment-derived options.
// Also, sets it as the default.
locale('en', options_1.englishDefaults);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(4);
exports.globalDefaults = {
    titleRangeSeparator: ' \u2013 ',
    monthYearFormat: 'MMMM YYYY',
    defaultTimedEventDuration: '02:00:00',
    defaultAllDayEventDuration: { days: 1 },
    forceEventDuration: false,
    nextDayThreshold: '09:00:00',
    // display
    columnHeader: true,
    defaultView: 'month',
    aspectRatio: 1.35,
    header: {
        left: 'title',
        center: '',
        right: 'today prev,next'
    },
    weekends: true,
    weekNumbers: false,
    weekNumberTitle: 'W',
    weekNumberCalculation: 'local',
    // editable: false,
    // nowIndicator: false,
    scrollTime: '06:00:00',
    minTime: '00:00:00',
    maxTime: '24:00:00',
    showNonCurrentDates: true,
    // event ajax
    lazyFetching: true,
    startParam: 'start',
    endParam: 'end',
    timezoneParam: 'timezone',
    timezone: false,
    // allDayDefault: undefined,
    // locale
    locale: null,
    isRTL: false,
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day'
    },
    // buttonIcons: null,
    allDayText: 'all-day',
    // allows setting a min-height to the event segment to prevent short events overlapping each other
    agendaEventMinHeight: 0,
    // jquery-ui theming
    theme: false,
    // themeButtonIcons: null,
    // eventResizableFromStart: false,
    dragOpacity: .75,
    dragRevertDuration: 500,
    dragScroll: true,
    // selectable: false,
    unselectAuto: true,
    // selectMinDistance: 0,
    dropAccept: '*',
    eventOrder: 'title',
    // eventRenderWait: null,
    eventLimit: false,
    eventLimitText: 'more',
    eventLimitClick: 'popover',
    dayPopoverFormat: 'LL',
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1000
};
exports.englishDefaults = {
    dayPopoverFormat: 'dddd, MMMM D'
};
exports.rtlDefaults = {
    header: {
        left: 'next,prev today',
        center: '',
        right: 'title'
    },
    buttonIcons: {
        prev: 'right-single-arrow',
        next: 'left-single-arrow',
        prevYear: 'right-double-arrow',
        nextYear: 'left-double-arrow'
    },
    themeButtonIcons: {
        prev: 'circle-triangle-e',
        next: 'circle-triangle-w',
        nextYear: 'seek-prev',
        prevYear: 'seek-next'
    }
};
var complexOptions = [
    'header',
    'footer',
    'buttonText',
    'buttonIcons',
    'themeButtonIcons'
];
// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
    return util_1.mergeProps(optionObjs, complexOptions);
}
exports.mergeOptions = mergeOptions;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
// Class that all other classes will inherit from
var Class = /** @class */ (function () {
    function Class() {
    }
    // Called on a class to create a subclass.
    // LIMITATION: cannot provide a constructor!
    Class.extend = function (members) {
        var SubClass = /** @class */ (function (_super) {
            tslib_1.__extends(SubClass, _super);
            function SubClass() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SubClass;
        }(this));
        util_1.copyOwnProps(members, SubClass.prototype);
        return SubClass;
    };
    // Adds new member variables/methods to the class's prototype.
    // Can be called with another class, or a plain object hash containing new members.
    Class.mixin = function (members) {
        util_1.copyOwnProps(members, this.prototype);
    };
    return Class;
}());
exports.default = Class;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var ParsableModelMixin_1 = __webpack_require__(208);
var EventDef = /** @class */ (function () {
    function EventDef(source) {
        this.source = source;
        this.className = [];
        this.miscProps = {};
    }
    EventDef.parse = function (rawInput, source) {
        var def = new this(source);
        if (def.applyProps(rawInput)) {
            return def;
        }
        return false;
    };
    EventDef.normalizeId = function (id) {
        return String(id);
    };
    EventDef.generateId = function () {
        return '_fc' + (EventDef.uuid++);
    };
    EventDef.prototype.clone = function () {
        var copy = new this.constructor(this.source);
        copy.id = this.id;
        copy.rawId = this.rawId;
        copy.uid = this.uid; // not really unique anymore :(
        EventDef.copyVerbatimStandardProps(this, copy);
        copy.className = this.className.slice(); // copy
        copy.miscProps = $.extend({}, this.miscProps);
        return copy;
    };
    EventDef.prototype.hasInverseRendering = function () {
        return this.getRendering() === 'inverse-background';
    };
    EventDef.prototype.hasBgRendering = function () {
        var rendering = this.getRendering();
        return rendering === 'inverse-background' || rendering === 'background';
    };
    EventDef.prototype.getRendering = function () {
        if (this.rendering != null) {
            return this.rendering;
        }
        return this.source.rendering;
    };
    EventDef.prototype.getConstraint = function () {
        if (this.constraint != null) {
            return this.constraint;
        }
        if (this.source.constraint != null) {
            return this.source.constraint;
        }
        return this.source.calendar.opt('eventConstraint'); // what about View option?
    };
    EventDef.prototype.getOverlap = function () {
        if (this.overlap != null) {
            return this.overlap;
        }
        if (this.source.overlap != null) {
            return this.source.overlap;
        }
        return this.source.calendar.opt('eventOverlap'); // what about View option?
    };
    EventDef.prototype.isStartExplicitlyEditable = function () {
        if (this.startEditable != null) {
            return this.startEditable;
        }
        return this.source.startEditable;
    };
    EventDef.prototype.isDurationExplicitlyEditable = function () {
        if (this.durationEditable != null) {
            return this.durationEditable;
        }
        return this.source.durationEditable;
    };
    EventDef.prototype.isExplicitlyEditable = function () {
        if (this.editable != null) {
            return this.editable;
        }
        return this.source.editable;
    };
    EventDef.prototype.toLegacy = function () {
        var obj = $.extend({}, this.miscProps);
        obj._id = this.uid;
        obj.source = this.source;
        obj.className = this.className.slice(); // copy
        obj.allDay = this.isAllDay();
        if (this.rawId != null) {
            obj.id = this.rawId;
        }
        EventDef.copyVerbatimStandardProps(this, obj);
        return obj;
    };
    EventDef.prototype.applyManualStandardProps = function (rawProps) {
        if (rawProps.id != null) {
            this.id = EventDef.normalizeId((this.rawId = rawProps.id));
        }
        else {
            this.id = EventDef.generateId();
        }
        if (rawProps._id != null) {
            this.uid = String(rawProps._id);
        }
        else {
            this.uid = EventDef.generateId();
        }
        // TODO: converge with EventSource
        if ($.isArray(rawProps.className)) {
            this.className = rawProps.className;
        }
        if (typeof rawProps.className === 'string') {
            this.className = rawProps.className.split(/\s+/);
        }
        return true;
    };
    EventDef.prototype.applyMiscProps = function (rawProps) {
        $.extend(this.miscProps, rawProps);
    };
    EventDef.uuid = 0;
    EventDef.defineStandardProps = ParsableModelMixin_1.default.defineStandardProps;
    EventDef.copyVerbatimStandardProps = ParsableModelMixin_1.default.copyVerbatimStandardProps;
    return EventDef;
}());
exports.default = EventDef;
ParsableModelMixin_1.default.mixInto(EventDef);
EventDef.defineStandardProps({
    // not automatically assigned (`false`)
    _id: false,
    id: false,
    className: false,
    source: false,
    // automatically assigned (`true`)
    title: true,
    url: true,
    rendering: true,
    constraint: true,
    overlap: true,
    editable: true,
    startEditable: true,
    durationEditable: true,
    color: true,
    backgroundColor: true,
    borderColor: true,
    textColor: true
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventRange_1 = __webpack_require__(211);
var EventFootprint_1 = __webpack_require__(36);
var ComponentFootprint_1 = __webpack_require__(12);
function eventDefsToEventInstances(eventDefs, unzonedRange) {
    var eventInstances = [];
    var i;
    for (i = 0; i < eventDefs.length; i++) {
        eventInstances.push.apply(eventInstances, // append
        eventDefs[i].buildInstances(unzonedRange));
    }
    return eventInstances;
}
exports.eventDefsToEventInstances = eventDefsToEventInstances;
function eventInstanceToEventRange(eventInstance) {
    return new EventRange_1.default(eventInstance.dateProfile.unzonedRange, eventInstance.def, eventInstance);
}
exports.eventInstanceToEventRange = eventInstanceToEventRange;
function eventRangeToEventFootprint(eventRange) {
    return new EventFootprint_1.default(new ComponentFootprint_1.default(eventRange.unzonedRange, eventRange.eventDef.isAllDay()), eventRange.eventDef, eventRange.eventInstance // might not exist
    );
}
exports.eventRangeToEventFootprint = eventRangeToEventFootprint;
function eventInstanceToUnzonedRange(eventInstance) {
    return eventInstance.dateProfile.unzonedRange;
}
exports.eventInstanceToUnzonedRange = eventInstanceToUnzonedRange;
function eventFootprintToComponentFootprint(eventFootprint) {
    return eventFootprint.componentFootprint;
}
exports.eventFootprintToComponentFootprint = eventFootprintToComponentFootprint;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventFootprint = /** @class */ (function () {
    function EventFootprint(componentFootprint, eventDef, eventInstance) {
        this.componentFootprint = componentFootprint;
        this.eventDef = eventDef;
        if (eventInstance) {
            this.eventInstance = eventInstance;
        }
    }
    EventFootprint.prototype.getEventLegacy = function () {
        return (this.eventInstance || this.eventDef).toLegacy();
    };
    return EventFootprint;
}());
exports.default = EventFootprint;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(4);
var EventDateProfile_1 = __webpack_require__(17);
var EventDef_1 = __webpack_require__(34);
var EventDefDateMutation_1 = __webpack_require__(50);
var SingleEventDef_1 = __webpack_require__(13);
var EventDefMutation = /** @class */ (function () {
    function EventDefMutation() {
    }
    EventDefMutation.createFromRawProps = function (eventInstance, rawProps, largeUnit) {
        var eventDef = eventInstance.def;
        var dateProps = {};
        var standardProps = {};
        var miscProps = {};
        var verbatimStandardProps = {};
        var eventDefId = null;
        var className = null;
        var propName;
        var dateProfile;
        var dateMutation;
        var defMutation;
        for (propName in rawProps) {
            if (EventDateProfile_1.default.isStandardProp(propName)) {
                dateProps[propName] = rawProps[propName];
            }
            else if (eventDef.isStandardProp(propName)) {
                standardProps[propName] = rawProps[propName];
            }
            else if (eventDef.miscProps[propName] !== rawProps[propName]) {
                miscProps[propName] = rawProps[propName];
            }
        }
        dateProfile = EventDateProfile_1.default.parse(dateProps, eventDef.source);
        if (dateProfile) {
            dateMutation = EventDefDateMutation_1.default.createFromDiff(eventInstance.dateProfile, dateProfile, largeUnit);
        }
        if (standardProps.id !== eventDef.id) {
            eventDefId = standardProps.id; // only apply if there's a change
        }
        if (!util_1.isArraysEqual(standardProps.className, eventDef.className)) {
            className = standardProps.className; // only apply if there's a change
        }
        EventDef_1.default.copyVerbatimStandardProps(standardProps, // src
        verbatimStandardProps // dest
        );
        defMutation = new EventDefMutation();
        defMutation.eventDefId = eventDefId;
        defMutation.className = className;
        defMutation.verbatimStandardProps = verbatimStandardProps;
        defMutation.miscProps = miscProps;
        if (dateMutation) {
            defMutation.dateMutation = dateMutation;
        }
        return defMutation;
    };
    /*
    eventDef assumed to be a SingleEventDef.
    returns an undo function.
    */
    EventDefMutation.prototype.mutateSingle = function (eventDef) {
        var origDateProfile;
        if (this.dateMutation) {
            origDateProfile = eventDef.dateProfile;
            eventDef.dateProfile = this.dateMutation.buildNewDateProfile(origDateProfile, eventDef.source.calendar);
        }
        // can't undo
        // TODO: more DRY with EventDef::applyManualStandardProps
        if (this.eventDefId != null) {
            eventDef.id = EventDef_1.default.normalizeId((eventDef.rawId = this.eventDefId));
        }
        // can't undo
        // TODO: more DRY with EventDef::applyManualStandardProps
        if (this.className) {
            eventDef.className = this.className;
        }
        // can't undo
        if (this.verbatimStandardProps) {
            SingleEventDef_1.default.copyVerbatimStandardProps(this.verbatimStandardProps, // src
            eventDef // dest
            );
        }
        // can't undo
        if (this.miscProps) {
            eventDef.applyMiscProps(this.miscProps);
        }
        if (origDateProfile) {
            return function () {
                eventDef.dateProfile = origDateProfile;
            };
        }
        else {
            return function () { };
        }
    };
    EventDefMutation.prototype.setDateMutation = function (dateMutation) {
        if (dateMutation && !dateMutation.isEmpty()) {
            this.dateMutation = dateMutation;
        }
        else {
            this.dateMutation = null;
        }
    };
    EventDefMutation.prototype.isEmpty = function () {
        return !this.dateMutation;
    };
    return EventDefMutation;
}());
exports.default = EventDefMutation;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sourceClasses: [],
    registerClass: function (EventSourceClass) {
        this.sourceClasses.unshift(EventSourceClass); // give highest priority
    },
    parse: function (rawInput, calendar) {
        var sourceClasses = this.sourceClasses;
        var i;
        var eventSource;
        for (i = 0; i < sourceClasses.length; i++) {
            eventSource = sourceClasses[i].parse(rawInput, calendar);
            if (eventSource) {
                return eventSource;
            }
        }
    }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Class_1 = __webpack_require__(33);
/*
Embodies a div that has potential scrollbars
*/
var Scroller = /** @class */ (function (_super) {
    tslib_1.__extends(Scroller, _super);
    function Scroller(options) {
        var _this = _super.call(this) || this;
        options = options || {};
        _this.overflowX = options.overflowX || options.overflow || 'auto';
        _this.overflowY = options.overflowY || options.overflow || 'auto';
        return _this;
    }
    Scroller.prototype.render = function () {
        this.el = this.renderEl();
        this.applyOverflow();
    };
    Scroller.prototype.renderEl = function () {
        return (this.scrollEl = $('<div class="fc-scroller"></div>'));
    };
    // sets to natural height, unlocks overflow
    Scroller.prototype.clear = function () {
        this.setHeight('auto');
        this.applyOverflow();
    };
    Scroller.prototype.destroy = function () {
        this.el.remove();
    };
    // Overflow
    // -----------------------------------------------------------------------------------------------------------------
    Scroller.prototype.applyOverflow = function () {
        this.scrollEl.css({
            'overflow-x': this.overflowX,
            'overflow-y': this.overflowY
        });
    };
    // Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
    // Useful for preserving scrollbar widths regardless of future resizes.
    // Can pass in scrollbarWidths for optimization.
    Scroller.prototype.lockOverflow = function (scrollbarWidths) {
        var overflowX = this.overflowX;
        var overflowY = this.overflowY;
        scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
        if (overflowX === 'auto') {
            overflowX = (scrollbarWidths.top || scrollbarWidths.bottom || // horizontal scrollbars?
                // OR scrolling pane with massless scrollbars?
                this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth) ? 'scroll' : 'hidden';
        }
        if (overflowY === 'auto') {
            overflowY = (scrollbarWidths.left || scrollbarWidths.right || // vertical scrollbars?
                // OR scrolling pane with massless scrollbars?
                this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight) ? 'scroll' : 'hidden';
        }
        this.scrollEl.css({ 'overflow-x': overflowX, 'overflow-y': overflowY });
    };
    // Getters / Setters
    // -----------------------------------------------------------------------------------------------------------------
    Scroller.prototype.setHeight = function (height) {
        this.scrollEl.height(height);
    };
    Scroller.prototype.getScrollTop = function () {
        return this.scrollEl.scrollTop();
    };
    Scroller.prototype.setScrollTop = function (top) {
        this.scrollEl.scrollTop(top);
    };
    Scroller.prototype.getClientWidth = function () {
        return this.scrollEl[0].clientWidth;
    };
    Scroller.prototype.getClientHeight = function () {
        return this.scrollEl[0].clientHeight;
    };
    Scroller.prototype.getScrollbarWidths = function () {
        return util_1.getScrollbarWidths(this.scrollEl);
    };
    return Scroller;
}(Class_1.default));
exports.default = Scroller;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var DateComponent_1 = __webpack_require__(219);
var GlobalEmitter_1 = __webpack_require__(21);
var InteractiveDateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InteractiveDateComponent, _super);
    function InteractiveDateComponent(_view, _options) {
        var _this = _super.call(this, _view, _options) || this;
        // self-config, overridable by subclasses
        _this.segSelector = '.fc-event-container > *'; // what constitutes an event element?
        if (_this.dateSelectingClass) {
            _this.dateClicking = new _this.dateClickingClass(_this);
        }
        if (_this.dateSelectingClass) {
            _this.dateSelecting = new _this.dateSelectingClass(_this);
        }
        if (_this.eventPointingClass) {
            _this.eventPointing = new _this.eventPointingClass(_this);
        }
        if (_this.eventDraggingClass && _this.eventPointing) {
            _this.eventDragging = new _this.eventDraggingClass(_this, _this.eventPointing);
        }
        if (_this.eventResizingClass && _this.eventPointing) {
            _this.eventResizing = new _this.eventResizingClass(_this, _this.eventPointing);
        }
        if (_this.externalDroppingClass) {
            _this.externalDropping = new _this.externalDroppingClass(_this);
        }
        return _this;
    }
    // Sets the container element that the view should render inside of, does global DOM-related initializations,
    // and renders all the non-date-related content inside.
    InteractiveDateComponent.prototype.setElement = function (el) {
        _super.prototype.setElement.call(this, el);
        if (this.dateClicking) {
            this.dateClicking.bindToEl(el);
        }
        if (this.dateSelecting) {
            this.dateSelecting.bindToEl(el);
        }
        this.bindAllSegHandlersToEl(el);
    };
    InteractiveDateComponent.prototype.removeElement = function () {
        this.endInteractions();
        _super.prototype.removeElement.call(this);
    };
    InteractiveDateComponent.prototype.executeEventUnrender = function () {
        this.endInteractions();
        _super.prototype.executeEventUnrender.call(this);
    };
    InteractiveDateComponent.prototype.bindGlobalHandlers = function () {
        _super.prototype.bindGlobalHandlers.call(this);
        if (this.externalDropping) {
            this.externalDropping.bindToDocument();
        }
    };
    InteractiveDateComponent.prototype.unbindGlobalHandlers = function () {
        _super.prototype.unbindGlobalHandlers.call(this);
        if (this.externalDropping) {
            this.externalDropping.unbindFromDocument();
        }
    };
    InteractiveDateComponent.prototype.bindDateHandlerToEl = function (el, name, handler) {
        var _this = this;
        // attach a handler to the grid's root element.
        // jQuery will take care of unregistering them when removeElement gets called.
        this.el.on(name, function (ev) {
            if (!$(ev.target).is(_this.segSelector + ':not(.fc-helper),' + // directly on an event element
                _this.segSelector + ':not(.fc-helper) *,' + // within an event element
                '.fc-more,' + // a "more.." link
                'a[data-goto]' // a clickable nav link
            )) {
                return handler.call(_this, ev);
            }
        });
    };
    InteractiveDateComponent.prototype.bindAllSegHandlersToEl = function (el) {
        [
            this.eventPointing,
            this.eventDragging,
            this.eventResizing
        ].forEach(function (eventInteraction) {
            if (eventInteraction) {
                eventInteraction.bindToEl(el);
            }
        });
    };
    InteractiveDateComponent.prototype.bindSegHandlerToEl = function (el, name, handler) {
        var _this = this;
        el.on(name, this.segSelector, function (ev) {
            var segEl = $(ev.currentTarget);
            if (!segEl.is('.fc-helper')) {
                var seg = segEl.data('fc-seg'); // grab segment data. put there by View::renderEventsPayload
                if (seg && !_this.shouldIgnoreEventPointing()) {
                    return handler.call(_this, seg, ev); // context will be the Grid
                }
            }
        });
    };
    InteractiveDateComponent.prototype.shouldIgnoreMouse = function () {
        // HACK
        // This will still work even though bindDateHandlerToEl doesn't use GlobalEmitter.
        return GlobalEmitter_1.default.get().shouldIgnoreMouse();
    };
    InteractiveDateComponent.prototype.shouldIgnoreTouch = function () {
        var view = this._getView();
        // On iOS (and Android?) when a new selection is initiated overtop another selection,
        // the touchend never fires because the elements gets removed mid-touch-interaction (my theory).
        // HACK: simply don't allow this to happen.
        // ALSO: prevent selection when an *event* is already raised.
        return view.isSelected || view.selectedEvent;
    };
    InteractiveDateComponent.prototype.shouldIgnoreEventPointing = function () {
        // only call the handlers if there is not a drag/resize in progress
        return (this.eventDragging && this.eventDragging.isDragging) ||
            (this.eventResizing && this.eventResizing.isResizing);
    };
    InteractiveDateComponent.prototype.canStartSelection = function (seg, ev) {
        return util_1.getEvIsTouch(ev) &&
            !this.canStartResize(seg, ev) &&
            (this.isEventDefDraggable(seg.footprint.eventDef) ||
                this.isEventDefResizable(seg.footprint.eventDef));
    };
    InteractiveDateComponent.prototype.canStartDrag = function (seg, ev) {
        return !this.canStartResize(seg, ev) &&
            this.isEventDefDraggable(seg.footprint.eventDef);
    };
    InteractiveDateComponent.prototype.canStartResize = function (seg, ev) {
        var view = this._getView();
        var eventDef = seg.footprint.eventDef;
        return (!util_1.getEvIsTouch(ev) || view.isEventDefSelected(eventDef)) &&
            this.isEventDefResizable(eventDef) &&
            $(ev.target).is('.fc-resizer');
    };
    // Kills all in-progress dragging.
    // Useful for when public API methods that result in re-rendering are invoked during a drag.
    // Also useful for when touch devices misbehave and don't fire their touchend.
    InteractiveDateComponent.prototype.endInteractions = function () {
        [
            this.dateClicking,
            this.dateSelecting,
            this.eventPointing,
            this.eventDragging,
            this.eventResizing
        ].forEach(function (interaction) {
            if (interaction) {
                interaction.end();
            }
        });
    };
    // Event Drag-n-Drop
    // ---------------------------------------------------------------------------------------------------------------
    // Computes if the given event is allowed to be dragged by the user
    InteractiveDateComponent.prototype.isEventDefDraggable = function (eventDef) {
        return this.isEventDefStartEditable(eventDef);
    };
    InteractiveDateComponent.prototype.isEventDefStartEditable = function (eventDef) {
        var isEditable = eventDef.isStartExplicitlyEditable();
        if (isEditable == null) {
            isEditable = this.opt('eventStartEditable');
            if (isEditable == null) {
                isEditable = this.isEventDefGenerallyEditable(eventDef);
            }
        }
        return isEditable;
    };
    InteractiveDateComponent.prototype.isEventDefGenerallyEditable = function (eventDef) {
        var isEditable = eventDef.isExplicitlyEditable();
        if (isEditable == null) {
            isEditable = this.opt('editable');
        }
        return isEditable;
    };
    // Event Resizing
    // ---------------------------------------------------------------------------------------------------------------
    // Computes if the given event is allowed to be resized from its starting edge
    InteractiveDateComponent.prototype.isEventDefResizableFromStart = function (eventDef) {
        return this.opt('eventResizableFromStart') && this.isEventDefResizable(eventDef);
    };
    // Computes if the given event is allowed to be resized from its ending edge
    InteractiveDateComponent.prototype.isEventDefResizableFromEnd = function (eventDef) {
        return this.isEventDefResizable(eventDef);
    };
    // Computes if the given event is allowed to be resized by the user at all
    InteractiveDateComponent.prototype.isEventDefResizable = function (eventDef) {
        var isResizable = eventDef.isDurationExplicitlyEditable();
        if (isResizable == null) {
            isResizable = this.opt('eventDurationEditable');
            if (isResizable == null) {
                isResizable = this.isEventDefGenerallyEditable(eventDef);
            }
        }
        return isResizable;
    };
    // Event Mutation / Constraints
    // ---------------------------------------------------------------------------------------------------------------
    // Diffs the two dates, returning a duration, based on granularity of the grid
    // TODO: port isTimeScale into this system?
    InteractiveDateComponent.prototype.diffDates = function (a, b) {
        if (this.largeUnit) {
            return util_1.diffByUnit(a, b, this.largeUnit);
        }
        else {
            return util_1.diffDayTime(a, b);
        }
    };
    // is it allowed, in relation to the view's validRange?
    // NOTE: very similar to isExternalInstanceGroupAllowed
    InteractiveDateComponent.prototype.isEventInstanceGroupAllowed = function (eventInstanceGroup) {
        var view = this._getView();
        var dateProfile = this.dateProfile;
        var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            // TODO: just use getAllEventRanges directly
            if (!dateProfile.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
                return false;
            }
        }
        return view.calendar.constraints.isEventInstanceGroupAllowed(eventInstanceGroup);
    };
    // NOTE: very similar to isEventInstanceGroupAllowed
    // when it's a completely anonymous external drag, no event.
    InteractiveDateComponent.prototype.isExternalInstanceGroupAllowed = function (eventInstanceGroup) {
        var view = this._getView();
        var dateProfile = this.dateProfile;
        var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            if (!dateProfile.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
                return false;
            }
        }
        for (i = 0; i < eventFootprints.length; i++) {
            // treat it as a selection
            // TODO: pass in eventInstanceGroup instead
            //  because we don't want calendar's constraint system to depend on a component's
            //  determination of footprints.
            if (!view.calendar.constraints.isSelectionFootprintAllowed(eventFootprints[i].componentFootprint)) {
                return false;
            }
        }
        return true;
    };
    return InteractiveDateComponent;
}(DateComponent_1.default));
exports.default = InteractiveDateComponent;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var RenderQueue_1 = __webpack_require__(218);
var DateProfileGenerator_1 = __webpack_require__(221);
var InteractiveDateComponent_1 = __webpack_require__(40);
var GlobalEmitter_1 = __webpack_require__(21);
var UnzonedRange_1 = __webpack_require__(5);
/* An abstract class from which other views inherit from
----------------------------------------------------------------------------------------------------------------------*/
var View = /** @class */ (function (_super) {
    tslib_1.__extends(View, _super);
    function View(calendar, viewSpec) {
        var _this = _super.call(this, null, viewSpec.options) || this;
        _this.batchRenderDepth = 0;
        _this.isSelected = false; // boolean whether a range of time is user-selected or not
        _this.calendar = calendar;
        _this.viewSpec = viewSpec;
        // shortcuts
        _this.type = viewSpec.type;
        // .name is deprecated
        _this.name = _this.type;
        _this.initRenderQueue();
        _this.initHiddenDays();
        _this.dateProfileGenerator = new _this.dateProfileGeneratorClass(_this);
        _this.bindBaseRenderHandlers();
        _this.eventOrderSpecs = util_1.parseFieldSpecs(_this.opt('eventOrder'));
        // legacy
        if (_this['initialize']) {
            _this['initialize']();
        }
        return _this;
    }
    View.prototype._getView = function () {
        return this;
    };
    // Retrieves an option with the given name
    View.prototype.opt = function (name) {
        return this.options[name];
    };
    /* Render Queue
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.initRenderQueue = function () {
        this.renderQueue = new RenderQueue_1.default({
            event: this.opt('eventRenderWait')
        });
        this.renderQueue.on('start', this.onRenderQueueStart.bind(this));
        this.renderQueue.on('stop', this.onRenderQueueStop.bind(this));
        this.on('before:change', this.startBatchRender);
        this.on('change', this.stopBatchRender);
    };
    View.prototype.onRenderQueueStart = function () {
        this.calendar.freezeContentHeight();
        this.addScroll(this.queryScroll());
    };
    View.prototype.onRenderQueueStop = function () {
        if (this.calendar.updateViewSize()) {
            this.popScroll();
        }
        this.calendar.thawContentHeight();
    };
    View.prototype.startBatchRender = function () {
        if (!(this.batchRenderDepth++)) {
            this.renderQueue.pause();
        }
    };
    View.prototype.stopBatchRender = function () {
        if (!(--this.batchRenderDepth)) {
            this.renderQueue.resume();
        }
    };
    View.prototype.requestRender = function (func, namespace, actionType) {
        this.renderQueue.queue(func, namespace, actionType);
    };
    // given func will auto-bind to `this`
    View.prototype.whenSizeUpdated = function (func) {
        if (this.renderQueue.isRunning) {
            this.renderQueue.one('stop', func.bind(this));
        }
        else {
            func.call(this);
        }
    };
    /* Title and Date Formatting
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes what the title at the top of the calendar should be for this view
    View.prototype.computeTitle = function (dateProfile) {
        var unzonedRange;
        // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
        if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
            unzonedRange = dateProfile.currentUnzonedRange;
        }
        else {
            unzonedRange = dateProfile.activeUnzonedRange;
        }
        return this.formatRange({
            start: this.calendar.msToMoment(unzonedRange.startMs, dateProfile.isRangeAllDay),
            end: this.calendar.msToMoment(unzonedRange.endMs, dateProfile.isRangeAllDay)
        }, dateProfile.isRangeAllDay, this.opt('titleFormat') || this.computeTitleFormat(dateProfile), this.opt('titleRangeSeparator'));
    };
    // Generates the format string that should be used to generate the title for the current date range.
    // Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
    View.prototype.computeTitleFormat = function (dateProfile) {
        var currentRangeUnit = dateProfile.currentRangeUnit;
        if (currentRangeUnit === 'year') {
            return 'YYYY';
        }
        else if (currentRangeUnit === 'month') {
            return this.opt('monthYearFormat'); // like "September 2014"
        }
        else if (dateProfile.currentUnzonedRange.as('days') > 1) {
            return 'll'; // multi-day range. shorter, like "Sep 9 - 10 2014"
        }
        else {
            return 'LL'; // one day. longer, like "September 9 2014"
        }
    };
    // Date Setting/Unsetting
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.setDate = function (date) {
        var currentDateProfile = this.get('dateProfile');
        var newDateProfile = this.dateProfileGenerator.build(date, undefined, true); // forceToValid=true
        if (!currentDateProfile ||
            !currentDateProfile.activeUnzonedRange.equals(newDateProfile.activeUnzonedRange)) {
            this.set('dateProfile', newDateProfile);
        }
    };
    View.prototype.unsetDate = function () {
        this.unset('dateProfile');
    };
    // Event Data
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.fetchInitialEvents = function (dateProfile) {
        var calendar = this.calendar;
        var forceAllDay = dateProfile.isRangeAllDay && !this.usesMinMaxTime;
        return calendar.requestEvents(calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, forceAllDay), calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, forceAllDay));
    };
    View.prototype.bindEventChanges = function () {
        this.listenTo(this.calendar, 'eventsReset', this.resetEvents); // TODO: make this a real event
    };
    View.prototype.unbindEventChanges = function () {
        this.stopListeningTo(this.calendar, 'eventsReset');
    };
    View.prototype.setEvents = function (eventsPayload) {
        this.set('currentEvents', eventsPayload);
        this.set('hasEvents', true);
    };
    View.prototype.unsetEvents = function () {
        this.unset('currentEvents');
        this.unset('hasEvents');
    };
    View.prototype.resetEvents = function (eventsPayload) {
        this.startBatchRender();
        this.unsetEvents();
        this.setEvents(eventsPayload);
        this.stopBatchRender();
    };
    // Date High-level Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.requestDateRender = function (dateProfile) {
        var _this = this;
        this.requestRender(function () {
            _this.executeDateRender(dateProfile);
        }, 'date', 'init');
    };
    View.prototype.requestDateUnrender = function () {
        var _this = this;
        this.requestRender(function () {
            _this.executeDateUnrender();
        }, 'date', 'destroy');
    };
    // if dateProfile not specified, uses current
    View.prototype.executeDateRender = function (dateProfile) {
        _super.prototype.executeDateRender.call(this, dateProfile);
        if (this['render']) {
            this['render'](); // TODO: deprecate
        }
        this.trigger('datesRendered');
        this.addScroll({ isDateInit: true });
        this.startNowIndicator(); // shouldn't render yet because updateSize will be called soon
    };
    View.prototype.executeDateUnrender = function () {
        this.unselect();
        this.stopNowIndicator();
        this.trigger('before:datesUnrendered');
        if (this['destroy']) {
            this['destroy'](); // TODO: deprecate
        }
        _super.prototype.executeDateUnrender.call(this);
    };
    // "Base" rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.bindBaseRenderHandlers = function () {
        var _this = this;
        this.on('datesRendered', function () {
            _this.whenSizeUpdated(_this.triggerViewRender);
        });
        this.on('before:datesUnrendered', function () {
            _this.triggerViewDestroy();
        });
    };
    View.prototype.triggerViewRender = function () {
        this.publiclyTrigger('viewRender', {
            context: this,
            args: [this, this.el]
        });
    };
    View.prototype.triggerViewDestroy = function () {
        this.publiclyTrigger('viewDestroy', {
            context: this,
            args: [this, this.el]
        });
    };
    // Event High-level Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.requestEventsRender = function (eventsPayload) {
        var _this = this;
        this.requestRender(function () {
            _this.executeEventRender(eventsPayload);
            _this.whenSizeUpdated(_this.triggerAfterEventsRendered);
        }, 'event', 'init');
    };
    View.prototype.requestEventsUnrender = function () {
        var _this = this;
        this.requestRender(function () {
            _this.triggerBeforeEventsDestroyed();
            _this.executeEventUnrender();
        }, 'event', 'destroy');
    };
    // Business Hour High-level Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.requestBusinessHoursRender = function (businessHourGenerator) {
        var _this = this;
        this.requestRender(function () {
            _this.renderBusinessHours(businessHourGenerator);
        }, 'businessHours', 'init');
    };
    View.prototype.requestBusinessHoursUnrender = function () {
        var _this = this;
        this.requestRender(function () {
            _this.unrenderBusinessHours();
        }, 'businessHours', 'destroy');
    };
    // Misc view rendering utils
    // -----------------------------------------------------------------------------------------------------------------
    // Binds DOM handlers to elements that reside outside the view container, such as the document
    View.prototype.bindGlobalHandlers = function () {
        _super.prototype.bindGlobalHandlers.call(this);
        this.listenTo(GlobalEmitter_1.default.get(), {
            touchstart: this.processUnselect,
            mousedown: this.handleDocumentMousedown
        });
    };
    // Unbinds DOM handlers from elements that reside outside the view container
    View.prototype.unbindGlobalHandlers = function () {
        _super.prototype.unbindGlobalHandlers.call(this);
        this.stopListeningTo(GlobalEmitter_1.default.get());
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    // Immediately render the current time indicator and begins re-rendering it at an interval,
    // which is defined by this.getNowIndicatorUnit().
    // TODO: somehow do this for the current whole day's background too
    View.prototype.startNowIndicator = function () {
        var _this = this;
        var unit;
        var update;
        var delay; // ms wait value
        if (this.opt('nowIndicator')) {
            unit = this.getNowIndicatorUnit();
            if (unit) {
                update = util_1.proxy(this, 'updateNowIndicator'); // bind to `this`
                this.initialNowDate = this.calendar.getNow();
                this.initialNowQueriedMs = new Date().valueOf();
                // wait until the beginning of the next interval
                delay = this.initialNowDate.clone().startOf(unit).add(1, unit).valueOf() - this.initialNowDate.valueOf();
                this.nowIndicatorTimeoutID = setTimeout(function () {
                    _this.nowIndicatorTimeoutID = null;
                    update();
                    delay = +moment.duration(1, unit);
                    delay = Math.max(100, delay); // prevent too frequent
                    _this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
                }, delay);
            }
            // rendering will be initiated in updateSize
        }
    };
    // rerenders the now indicator, computing the new current time from the amount of time that has passed
    // since the initial getNow call.
    View.prototype.updateNowIndicator = function () {
        if (this.isDatesRendered &&
            this.initialNowDate // activated before?
        ) {
            this.unrenderNowIndicator(); // won't unrender if unnecessary
            this.renderNowIndicator(this.initialNowDate.clone().add(new Date().valueOf() - this.initialNowQueriedMs) // add ms
            );
            this.isNowIndicatorRendered = true;
        }
    };
    // Immediately unrenders the view's current time indicator and stops any re-rendering timers.
    // Won't cause side effects if indicator isn't rendered.
    View.prototype.stopNowIndicator = function () {
        if (this.isNowIndicatorRendered) {
            if (this.nowIndicatorTimeoutID) {
                clearTimeout(this.nowIndicatorTimeoutID);
                this.nowIndicatorTimeoutID = null;
            }
            if (this.nowIndicatorIntervalID) {
                clearInterval(this.nowIndicatorIntervalID);
                this.nowIndicatorIntervalID = null;
            }
            this.unrenderNowIndicator();
            this.isNowIndicatorRendered = false;
        }
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        if (this['setHeight']) {
            this['setHeight'](totalHeight, isAuto);
        }
        else {
            _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        }
        this.updateNowIndicator();
    };
    /* Scroller
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.addScroll = function (scroll) {
        var queuedScroll = this.queuedScroll || (this.queuedScroll = {});
        $.extend(queuedScroll, scroll);
    };
    View.prototype.popScroll = function () {
        this.applyQueuedScroll();
        this.queuedScroll = null;
    };
    View.prototype.applyQueuedScroll = function () {
        if (this.queuedScroll) {
            this.applyScroll(this.queuedScroll);
        }
    };
    View.prototype.queryScroll = function () {
        var scroll = {};
        if (this.isDatesRendered) {
            $.extend(scroll, this.queryDateScroll());
        }
        return scroll;
    };
    View.prototype.applyScroll = function (scroll) {
        if (scroll.isDateInit && this.isDatesRendered) {
            $.extend(scroll, this.computeInitialDateScroll());
        }
        if (this.isDatesRendered) {
            this.applyDateScroll(scroll);
        }
    };
    View.prototype.computeInitialDateScroll = function () {
        return {}; // subclasses must implement
    };
    View.prototype.queryDateScroll = function () {
        return {}; // subclasses must implement
    };
    View.prototype.applyDateScroll = function (scroll) {
        // subclasses must implement
    };
    /* Event Drag-n-Drop
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.reportEventDrop = function (eventInstance, eventMutation, el, ev) {
        var eventManager = this.calendar.eventManager;
        var undoFunc = eventManager.mutateEventsWithId(eventInstance.def.id, eventMutation);
        var dateMutation = eventMutation.dateMutation;
        // update the EventInstance, for handlers
        if (dateMutation) {
            eventInstance.dateProfile = dateMutation.buildNewDateProfile(eventInstance.dateProfile, this.calendar);
        }
        this.triggerEventDrop(eventInstance, 
        // a drop doesn't necessarily mean a date mutation (ex: resource change)
        (dateMutation && dateMutation.dateDelta) || moment.duration(), undoFunc, el, ev);
    };
    // Triggers event-drop handlers that have subscribed via the API
    View.prototype.triggerEventDrop = function (eventInstance, dateDelta, undoFunc, el, ev) {
        this.publiclyTrigger('eventDrop', {
            context: el[0],
            args: [
                eventInstance.toLegacy(),
                dateDelta,
                undoFunc,
                ev,
                {},
                this
            ]
        });
    };
    /* External Element Drag-n-Drop
    ------------------------------------------------------------------------------------------------------------------*/
    // Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
    // `meta` is the parsed data that has been embedded into the dragging event.
    // `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
    View.prototype.reportExternalDrop = function (singleEventDef, isEvent, isSticky, el, ev, ui) {
        if (isEvent) {
            this.calendar.eventManager.addEventDef(singleEventDef, isSticky);
        }
        this.triggerExternalDrop(singleEventDef, isEvent, el, ev, ui);
    };
    // Triggers external-drop handlers that have subscribed via the API
    View.prototype.triggerExternalDrop = function (singleEventDef, isEvent, el, ev, ui) {
        // trigger 'drop' regardless of whether element represents an event
        this.publiclyTrigger('drop', {
            context: el[0],
            args: [
                singleEventDef.dateProfile.start.clone(),
                ev,
                ui,
                this
            ]
        });
        if (isEvent) {
            // signal an external event landed
            this.publiclyTrigger('eventReceive', {
                context: this,
                args: [
                    singleEventDef.buildInstance().toLegacy(),
                    this
                ]
            });
        }
    };
    /* Event Resizing
    ------------------------------------------------------------------------------------------------------------------*/
    // Must be called when an event in the view has been resized to a new length
    View.prototype.reportEventResize = function (eventInstance, eventMutation, el, ev) {
        var eventManager = this.calendar.eventManager;
        var undoFunc = eventManager.mutateEventsWithId(eventInstance.def.id, eventMutation);
        // update the EventInstance, for handlers
        eventInstance.dateProfile = eventMutation.dateMutation.buildNewDateProfile(eventInstance.dateProfile, this.calendar);
        this.triggerEventResize(eventInstance, eventMutation.dateMutation.endDelta, undoFunc, el, ev);
    };
    // Triggers event-resize handlers that have subscribed via the API
    View.prototype.triggerEventResize = function (eventInstance, durationDelta, undoFunc, el, ev) {
        this.publiclyTrigger('eventResize', {
            context: el[0],
            args: [
                eventInstance.toLegacy(),
                durationDelta,
                undoFunc,
                ev,
                {},
                this
            ]
        });
    };
    /* Selection (time range)
    ------------------------------------------------------------------------------------------------------------------*/
    // Selects a date span on the view. `start` and `end` are both Moments.
    // `ev` is the native mouse event that begin the interaction.
    View.prototype.select = function (footprint, ev) {
        this.unselect(ev);
        this.renderSelectionFootprint(footprint);
        this.reportSelection(footprint, ev);
    };
    View.prototype.renderSelectionFootprint = function (footprint) {
        if (this['renderSelection']) {
            this['renderSelection'](footprint.toLegacy(this.calendar));
        }
        else {
            _super.prototype.renderSelectionFootprint.call(this, footprint);
        }
    };
    // Called when a new selection is made. Updates internal state and triggers handlers.
    View.prototype.reportSelection = function (footprint, ev) {
        this.isSelected = true;
        this.triggerSelect(footprint, ev);
    };
    // Triggers handlers to 'select'
    View.prototype.triggerSelect = function (footprint, ev) {
        var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?
        this.publiclyTrigger('select', {
            context: this,
            args: [
                dateProfile.start,
                dateProfile.end,
                ev,
                this
            ]
        });
    };
    // Undoes a selection. updates in the internal state and triggers handlers.
    // `ev` is the native mouse event that began the interaction.
    View.prototype.unselect = function (ev) {
        if (this.isSelected) {
            this.isSelected = false;
            if (this['destroySelection']) {
                this['destroySelection'](); // TODO: deprecate
            }
            this.unrenderSelection();
            this.publiclyTrigger('unselect', {
                context: this,
                args: [ev, this]
            });
        }
    };
    /* Event Selection
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.selectEventInstance = function (eventInstance) {
        if (!this.selectedEventInstance ||
            this.selectedEventInstance !== eventInstance) {
            this.unselectEventInstance();
            this.getEventSegs().forEach(function (seg) {
                if (seg.footprint.eventInstance === eventInstance &&
                    seg.el // necessary?
                ) {
                    seg.el.addClass('fc-selected');
                }
            });
            this.selectedEventInstance = eventInstance;
        }
    };
    View.prototype.unselectEventInstance = function () {
        if (this.selectedEventInstance) {
            this.getEventSegs().forEach(function (seg) {
                if (seg.el) {
                    seg.el.removeClass('fc-selected');
                }
            });
            this.selectedEventInstance = null;
        }
    };
    View.prototype.isEventDefSelected = function (eventDef) {
        // event references might change on refetchEvents(), while selectedEventInstance doesn't,
        // so compare IDs
        return this.selectedEventInstance && this.selectedEventInstance.def.id === eventDef.id;
    };
    /* Mouse / Touch Unselecting (time range & event unselection)
    ------------------------------------------------------------------------------------------------------------------*/
    // TODO: move consistently to down/start or up/end?
    // TODO: don't kill previous selection if touch scrolling
    View.prototype.handleDocumentMousedown = function (ev) {
        if (util_1.isPrimaryMouseButton(ev)) {
            this.processUnselect(ev);
        }
    };
    View.prototype.processUnselect = function (ev) {
        this.processRangeUnselect(ev);
        this.processEventUnselect(ev);
    };
    View.prototype.processRangeUnselect = function (ev) {
        var ignore;
        // is there a time-range selection?
        if (this.isSelected && this.opt('unselectAuto')) {
            // only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
            ignore = this.opt('unselectCancel');
            if (!ignore || !$(ev.target).closest(ignore).length) {
                this.unselect(ev);
            }
        }
    };
    View.prototype.processEventUnselect = function (ev) {
        if (this.selectedEventInstance) {
            if (!$(ev.target).closest('.fc-selected').length) {
                this.unselectEventInstance();
            }
        }
    };
    /* Triggers
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.triggerBaseRendered = function () {
        this.publiclyTrigger('viewRender', {
            context: this,
            args: [this, this.el]
        });
    };
    View.prototype.triggerBaseUnrendered = function () {
        this.publiclyTrigger('viewDestroy', {
            context: this,
            args: [this, this.el]
        });
    };
    // Triggers handlers to 'dayClick'
    // Span has start/end of the clicked area. Only the start is useful.
    View.prototype.triggerDayClick = function (footprint, dayEl, ev) {
        var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?
        this.publiclyTrigger('dayClick', {
            context: dayEl,
            args: [dateProfile.start, ev, this]
        });
    };
    /* Date Utils
    ------------------------------------------------------------------------------------------------------------------*/
    // For DateComponent::getDayClasses
    View.prototype.isDateInOtherMonth = function (date, dateProfile) {
        return false;
    };
    // Arguments after name will be forwarded to a hypothetical function value
    // WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
    // Always clone your objects if you fear mutation.
    View.prototype.getUnzonedRangeOption = function (name) {
        var val = this.opt(name);
        if (typeof val === 'function') {
            val = val.apply(null, Array.prototype.slice.call(arguments, 1));
        }
        if (val) {
            return this.calendar.parseUnzonedRange(val);
        }
    };
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/
    // Initializes internal variables related to calculating hidden days-of-week
    View.prototype.initHiddenDays = function () {
        var hiddenDays = this.opt('hiddenDays') || []; // array of day-of-week indices that are hidden
        var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
        var dayCnt = 0;
        var i;
        if (this.opt('weekends') === false) {
            hiddenDays.push(0, 6); // 0=sunday, 6=saturday
        }
        for (i = 0; i < 7; i++) {
            if (!(isHiddenDayHash[i] = $.inArray(i, hiddenDays) !== -1)) {
                dayCnt++;
            }
        }
        if (!dayCnt) {
            throw new Error('invalid hiddenDays'); // all days were hidden? bad.
        }
        this.isHiddenDayHash = isHiddenDayHash;
    };
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
    View.prototype.trimHiddenDays = function (inputUnzonedRange) {
        var start = inputUnzonedRange.getStart();
        var end = inputUnzonedRange.getEnd();
        if (start) {
            start = this.skipHiddenDays(start);
        }
        if (end) {
            end = this.skipHiddenDays(end, -1, true);
        }
        if (start === null || end === null || start < end) {
            return new UnzonedRange_1.default(start, end);
        }
        return null;
    };
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Moment
    View.prototype.isHiddenDay = function (day) {
        if (moment.isMoment(day)) {
            day = day.day();
        }
        return this.isHiddenDayHash[day];
    };
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validUnzonedRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
    View.prototype.skipHiddenDays = function (date, inc, isExclusive) {
        if (inc === void 0) { inc = 1; }
        if (isExclusive === void 0) { isExclusive = false; }
        var out = date.clone();
        while (this.isHiddenDayHash[(out.day() + (isExclusive ? inc : 0) + 7) % 7]) {
            out.add(inc, 'days');
        }
        return out;
    };
    return View;
}(InteractiveDateComponent_1.default));
exports.default = View;
View.prototype.usesMinMaxTime = false;
View.prototype.dateProfileGeneratorClass = DateProfileGenerator_1.default;
View.watch('displayingDates', ['isInDom', 'dateProfile'], function (deps) {
    this.requestDateRender(deps.dateProfile);
}, function () {
    this.requestDateUnrender();
});
View.watch('displayingBusinessHours', ['displayingDates', 'businessHourGenerator'], function (deps) {
    this.requestBusinessHoursRender(deps.businessHourGenerator);
}, function () {
    this.requestBusinessHoursUnrender();
});
View.watch('initialEvents', ['dateProfile'], function (deps) {
    return this.fetchInitialEvents(deps.dateProfile);
});
View.watch('bindingEvents', ['initialEvents'], function (deps) {
    this.setEvents(deps.initialEvents);
    this.bindEventChanges();
}, function () {
    this.unbindEventChanges();
    this.unsetEvents();
});
View.watch('displayingEvents', ['displayingDates', 'hasEvents'], function () {
    this.requestEventsRender(this.get('currentEvents'));
}, function () {
    this.requestEventsUnrender();
});
View.watch('title', ['dateProfile'], function (deps) {
    return (this.title = this.computeTitle(deps.dateProfile)); // assign to View for legacy reasons
});
View.watch('legacyDateProps', ['dateProfile'], function (deps) {
    var calendar = this.calendar;
    var dateProfile = deps.dateProfile;
    // DEPRECATED, but we need to keep it updated...
    this.start = calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, dateProfile.isRangeAllDay);
    this.end = calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, dateProfile.isRangeAllDay);
    this.intervalStart = calendar.msToMoment(dateProfile.currentUnzonedRange.startMs, dateProfile.isRangeAllDay);
    this.intervalEnd = calendar.msToMoment(dateProfile.currentUnzonedRange.endMs, dateProfile.isRangeAllDay);
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventRenderer = /** @class */ (function () {
    function EventRenderer(component, fillRenderer) {
        this.view = component._getView();
        this.component = component;
        this.fillRenderer = fillRenderer;
    }
    EventRenderer.prototype.opt = function (name) {
        return this.view.opt(name);
    };
    // Updates values that rely on options and also relate to range
    EventRenderer.prototype.rangeUpdated = function () {
        var displayEventTime;
        var displayEventEnd;
        this.eventTimeFormat =
            this.opt('eventTimeFormat') ||
                this.opt('timeFormat') || // deprecated
                this.computeEventTimeFormat();
        displayEventTime = this.opt('displayEventTime');
        if (displayEventTime == null) {
            displayEventTime = this.computeDisplayEventTime(); // might be based off of range
        }
        displayEventEnd = this.opt('displayEventEnd');
        if (displayEventEnd == null) {
            displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
        }
        this.displayEventTime = displayEventTime;
        this.displayEventEnd = displayEventEnd;
    };
    EventRenderer.prototype.render = function (eventsPayload) {
        var dateProfile = this.component._getDateProfile();
        var eventDefId;
        var instanceGroup;
        var eventRanges;
        var bgRanges = [];
        var fgRanges = [];
        for (eventDefId in eventsPayload) {
            instanceGroup = eventsPayload[eventDefId];
            eventRanges = instanceGroup.sliceRenderRanges(dateProfile.activeUnzonedRange);
            if (instanceGroup.getEventDef().hasBgRendering()) {
                bgRanges.push.apply(bgRanges, eventRanges);
            }
            else {
                fgRanges.push.apply(fgRanges, eventRanges);
            }
        }
        this.renderBgRanges(bgRanges);
        this.renderFgRanges(fgRanges);
    };
    EventRenderer.prototype.unrender = function () {
        this.unrenderBgRanges();
        this.unrenderFgRanges();
    };
    EventRenderer.prototype.renderFgRanges = function (eventRanges) {
        var eventFootprints = this.component.eventRangesToEventFootprints(eventRanges);
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        // render an `.el` on each seg
        // returns a subset of the segs. segs that were actually rendered
        segs = this.renderFgSegEls(segs);
        if (this.renderFgSegs(segs) !== false) {
            this.fgSegs = segs;
        }
    };
    EventRenderer.prototype.unrenderFgRanges = function () {
        this.unrenderFgSegs(this.fgSegs || []);
        this.fgSegs = null;
    };
    EventRenderer.prototype.renderBgRanges = function (eventRanges) {
        var eventFootprints = this.component.eventRangesToEventFootprints(eventRanges);
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        if (this.renderBgSegs(segs) !== false) {
            this.bgSegs = segs;
        }
    };
    EventRenderer.prototype.unrenderBgRanges = function () {
        this.unrenderBgSegs();
        this.bgSegs = null;
    };
    EventRenderer.prototype.getSegs = function () {
        return (this.bgSegs || []).concat(this.fgSegs || []);
    };
    // Renders foreground event segments onto the grid
    EventRenderer.prototype.renderFgSegs = function (segs) {
        // subclasses must implement
        // segs already has rendered els, and has been filtered.
        return false; // signal failure if not implemented
    };
    // Unrenders all currently rendered foreground segments
    EventRenderer.prototype.unrenderFgSegs = function (segs) {
        // subclasses must implement
    };
    EventRenderer.prototype.renderBgSegs = function (segs) {
        var _this = this;
        if (this.fillRenderer) {
            this.fillRenderer.renderSegs('bgEvent', segs, {
                getClasses: function (seg) {
                    return _this.getBgClasses(seg.footprint.eventDef);
                },
                getCss: function (seg) {
                    return {
                        'background-color': _this.getBgColor(seg.footprint.eventDef)
                    };
                },
                filterEl: function (seg, el) {
                    return _this.filterEventRenderEl(seg.footprint, el);
                }
            });
        }
        else {
            return false; // signal failure if no fillRenderer
        }
    };
    EventRenderer.prototype.unrenderBgSegs = function () {
        if (this.fillRenderer) {
            this.fillRenderer.unrender('bgEvent');
        }
    };
    // Renders and assigns an `el` property for each foreground event segment.
    // Only returns segments that successfully rendered.
    EventRenderer.prototype.renderFgSegEls = function (segs, disableResizing) {
        var _this = this;
        if (disableResizing === void 0) { disableResizing = false; }
        var hasEventRenderHandlers = this.view.hasPublicHandlers('eventRender');
        var html = '';
        var renderedSegs = [];
        var i;
        if (segs.length) {
            // build a large concatenation of event segment HTML
            for (i = 0; i < segs.length; i++) {
                this.beforeFgSegHtml(segs[i]);
                html += this.fgSegHtml(segs[i], disableResizing);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
            $(html).each(function (i, node) {
                var seg = segs[i];
                var el = $(node);
                if (hasEventRenderHandlers) {
                    el = _this.filterEventRenderEl(seg.footprint, el);
                }
                if (el) {
                    el.data('fc-seg', seg); // used by handlers
                    seg.el = el;
                    renderedSegs.push(seg);
                }
            });
        }
        return renderedSegs;
    };
    EventRenderer.prototype.beforeFgSegHtml = function (seg) {
    };
    // Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
    EventRenderer.prototype.fgSegHtml = function (seg, disableResizing) {
        // subclasses should implement
    };
    // Generic utility for generating the HTML classNames for an event segment's element
    EventRenderer.prototype.getSegClasses = function (seg, isDraggable, isResizable) {
        var classes = [
            'fc-event',
            seg.isStart ? 'fc-start' : 'fc-not-start',
            seg.isEnd ? 'fc-end' : 'fc-not-end'
        ].concat(this.getClasses(seg.footprint.eventDef));
        if (isDraggable) {
            classes.push('fc-draggable');
        }
        if (isResizable) {
            classes.push('fc-resizable');
        }
        // event is currently selected? attach a className.
        if (this.view.isEventDefSelected(seg.footprint.eventDef)) {
            classes.push('fc-selected');
        }
        return classes;
    };
    // Given an event and the default element used for rendering, returns the element that should actually be used.
    // Basically runs events and elements through the eventRender hook.
    EventRenderer.prototype.filterEventRenderEl = function (eventFootprint, el) {
        var legacy = eventFootprint.getEventLegacy();
        var custom = this.view.publiclyTrigger('eventRender', {
            context: legacy,
            args: [legacy, el, this.view]
        });
        if (custom === false) {
            el = null;
        }
        else if (custom && custom !== true) {
            el = $(custom);
        }
        return el;
    };
    // Compute the text that should be displayed on an event's element.
    // `range` can be the Event object itself, or something range-like, with at least a `start`.
    // If event times are disabled, or the event has no time, will return a blank string.
    // If not specified, formatStr will default to the eventTimeFormat setting,
    // and displayEnd will default to the displayEventEnd setting.
    EventRenderer.prototype.getTimeText = function (eventFootprint, formatStr, displayEnd) {
        return this._getTimeText(eventFootprint.eventInstance.dateProfile.start, eventFootprint.eventInstance.dateProfile.end, eventFootprint.componentFootprint.isAllDay, formatStr, displayEnd);
    };
    EventRenderer.prototype._getTimeText = function (start, end, isAllDay, formatStr, displayEnd) {
        if (formatStr == null) {
            formatStr = this.eventTimeFormat;
        }
        if (displayEnd == null) {
            displayEnd = this.displayEventEnd;
        }
        if (this.displayEventTime && !isAllDay) {
            if (displayEnd && end) {
                return this.view.formatRange({ start: start, end: end }, false, // allDay
                formatStr);
            }
            else {
                return start.format(formatStr);
            }
        }
        return '';
    };
    EventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('smallTimeFormat');
    };
    EventRenderer.prototype.computeDisplayEventTime = function () {
        return true;
    };
    EventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    EventRenderer.prototype.getBgClasses = function (eventDef) {
        var classNames = this.getClasses(eventDef);
        classNames.push('fc-bgevent');
        return classNames;
    };
    EventRenderer.prototype.getClasses = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var classNames = [];
        for (i = 0; i < objs.length; i++) {
            classNames.push.apply(// append
            classNames, objs[i].eventClassName || objs[i].className || []);
        }
        return classNames;
    };
    // Utility for generating event skin-related CSS properties
    EventRenderer.prototype.getSkinCss = function (eventDef) {
        return {
            'background-color': this.getBgColor(eventDef),
            'border-color': this.getBorderColor(eventDef),
            color: this.getTextColor(eventDef)
        };
    };
    // Queries for caller-specified color, then falls back to default
    EventRenderer.prototype.getBgColor = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var val;
        for (i = 0; i < objs.length && !val; i++) {
            val = objs[i].eventBackgroundColor || objs[i].eventColor ||
                objs[i].backgroundColor || objs[i].color;
        }
        if (!val) {
            val = this.opt('eventBackgroundColor') || this.opt('eventColor');
        }
        return val;
    };
    // Queries for caller-specified color, then falls back to default
    EventRenderer.prototype.getBorderColor = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var val;
        for (i = 0; i < objs.length && !val; i++) {
            val = objs[i].eventBorderColor || objs[i].eventColor ||
                objs[i].borderColor || objs[i].color;
        }
        if (!val) {
            val = this.opt('eventBorderColor') || this.opt('eventColor');
        }
        return val;
    };
    // Queries for caller-specified color, then falls back to default
    EventRenderer.prototype.getTextColor = function (eventDef) {
        var objs = this.getStylingObjs(eventDef);
        var i;
        var val;
        for (i = 0; i < objs.length && !val; i++) {
            val = objs[i].eventTextColor ||
                objs[i].textColor;
        }
        if (!val) {
            val = this.opt('eventTextColor');
        }
        return val;
    };
    EventRenderer.prototype.getStylingObjs = function (eventDef) {
        var objs = this.getFallbackStylingObjs(eventDef);
        objs.unshift(eventDef);
        return objs;
    };
    EventRenderer.prototype.getFallbackStylingObjs = function (eventDef) {
        return [eventDef.source];
    };
    EventRenderer.prototype.sortEventSegs = function (segs) {
        segs.sort(util_1.proxy(this, 'compareEventSegs'));
    };
    // A cmp function for determining which segments should take visual priority
    EventRenderer.prototype.compareEventSegs = function (seg1, seg2) {
        var f1 = seg1.footprint;
        var f2 = seg2.footprint;
        var cf1 = f1.componentFootprint;
        var cf2 = f2.componentFootprint;
        var r1 = cf1.unzonedRange;
        var r2 = cf2.unzonedRange;
        return r1.startMs - r2.startMs || // earlier events go first
            (r2.endMs - r2.startMs) - (r1.endMs - r1.startMs) || // tie? longer events go first
            cf2.isAllDay - cf1.isAllDay || // tie? put all-day events first (booleans cast to 0/1)
            util_1.compareByFieldSpecs(f1.eventDef, f2.eventDef, this.view.eventOrderSpecs, f1.eventDef.miscProps, f2.eventDef.miscProps);
    };
    return EventRenderer;
}());
exports.default = EventRenderer;


/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment_ext_1 = __webpack_require__(10);
// Plugin
// -------------------------------------------------------------------------------------------------
moment_ext_1.newMomentProto.format = function () {
    if (this._fullCalendar && arguments[0]) {
        return formatDate(this, arguments[0]); // our extended formatting
    }
    if (this._ambigTime) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
    }
    if (this._ambigZone) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
    }
    if (this._fullCalendar) {
        // moment.format() doesn't ensure english, but we want to.
        return moment_ext_1.oldMomentFormat(englishMoment(this));
    }
    return moment_ext_1.oldMomentProto.format.apply(this, arguments);
};
moment_ext_1.newMomentProto.toISOString = function () {
    if (this._ambigTime) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
    }
    if (this._ambigZone) {
        return moment_ext_1.oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
    }
    if (this._fullCalendar) {
        // depending on browser, moment might not output english. ensure english.
        // https://github.com/moment/moment/blob/2.18.1/src/lib/moment/format.js#L22
        return moment_ext_1.oldMomentProto.toISOString.apply(englishMoment(this), arguments);
    }
    return moment_ext_1.oldMomentProto.toISOString.apply(this, arguments);
};
function englishMoment(mom) {
    if (mom.locale() !== 'en') {
        return mom.clone().locale('en');
    }
    return mom;
}
// Config
// ---------------------------------------------------------------------------------------------------------------------
/*
Inserted between chunks in the fake ("intermediate") formatting string.
Important that it passes as whitespace (\s) because moment often identifies non-standalone months
via a regexp with an \s.
*/
var PART_SEPARATOR = '\u000b'; // vertical tab
/*
Inserted as the first character of a literal-text chunk to indicate that the literal text is not actually literal text,
but rather, a "special" token that has custom rendering (see specialTokens map).
*/
var SPECIAL_TOKEN_MARKER = '\u001f'; // information separator 1
/*
Inserted at the beginning and end of a span of text that must have non-zero numeric characters.
Handling of these markers is done in a post-processing step at the very end of text rendering.
*/
var MAYBE_MARKER = '\u001e'; // information separator 2
var MAYBE_REGEXP = new RegExp(MAYBE_MARKER + '([^' + MAYBE_MARKER + ']*)' + MAYBE_MARKER, 'g'); // must be global
/*
Addition formatting tokens we want recognized
*/
var specialTokens = {
    t: function (date) {
        return moment_ext_1.oldMomentFormat(date, 'a').charAt(0);
    },
    T: function (date) {
        return moment_ext_1.oldMomentFormat(date, 'A').charAt(0);
    }
};
/*
The first characters of formatting tokens for units that are 1 day or larger.
`value` is for ranking relative size (lower means bigger).
`unit` is a normalized unit, used for comparing moments.
*/
var largeTokenMap = {
    Y: { value: 1, unit: 'year' },
    M: { value: 2, unit: 'month' },
    W: { value: 3, unit: 'week' },
    w: { value: 3, unit: 'week' },
    D: { value: 4, unit: 'day' },
    d: { value: 4, unit: 'day' } // day of week
};
// Single Date Formatting
// ---------------------------------------------------------------------------------------------------------------------
/*
Formats `date` with a Moment formatting string, but allow our non-zero areas and special token
*/
function formatDate(date, formatStr) {
    return renderFakeFormatString(getParsedFormatString(formatStr).fakeFormatString, date);
}
exports.formatDate = formatDate;
// Date Range Formatting
// -------------------------------------------------------------------------------------------------
// TODO: make it work with timezone offset
/*
Using a formatting string meant for a single date, generate a range string, like
"Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
If the dates are the same as far as the format string is concerned, just return a single
rendering of one date, without any separator.
*/
function formatRange(date1, date2, formatStr, separator, isRTL) {
    var localeData;
    date1 = moment_ext_1.default.parseZone(date1);
    date2 = moment_ext_1.default.parseZone(date2);
    localeData = date1.localeData();
    // Expand localized format strings, like "LL" -> "MMMM D YYYY".
    // BTW, this is not important for `formatDate` because it is impossible to put custom tokens
    // or non-zero areas in Moment's localized format strings.
    formatStr = localeData.longDateFormat(formatStr) || formatStr;
    return renderParsedFormat(getParsedFormatString(formatStr), date1, date2, separator || ' - ', isRTL);
}
exports.formatRange = formatRange;
/*
Renders a range with an already-parsed format string.
*/
function renderParsedFormat(parsedFormat, date1, date2, separator, isRTL) {
    var sameUnits = parsedFormat.sameUnits;
    var unzonedDate1 = date1.clone().stripZone(); // for same-unit comparisons
    var unzonedDate2 = date2.clone().stripZone(); // "
    var renderedParts1 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date1);
    var renderedParts2 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date2);
    var leftI;
    var leftStr = '';
    var rightI;
    var rightStr = '';
    var middleI;
    var middleStr1 = '';
    var middleStr2 = '';
    var middleStr = '';
    // Start at the leftmost side of the formatting string and continue until you hit a token
    // that is not the same between dates.
    for (leftI = 0; leftI < sameUnits.length && (!sameUnits[leftI] || unzonedDate1.isSame(unzonedDate2, sameUnits[leftI])); leftI++) {
        leftStr += renderedParts1[leftI];
    }
    // Similarly, start at the rightmost side of the formatting string and move left
    for (rightI = sameUnits.length - 1; rightI > leftI && (!sameUnits[rightI] || unzonedDate1.isSame(unzonedDate2, sameUnits[rightI])); rightI--) {
        // If current chunk is on the boundary of unique date-content, and is a special-case
        // date-formatting postfix character, then don't consume it. Consider it unique date-content.
        // TODO: make configurable
        if (rightI - 1 === leftI && renderedParts1[rightI] === '.') {
            break;
        }
        rightStr = renderedParts1[rightI] + rightStr;
    }
    // The area in the middle is different for both of the dates.
    // Collect them distinctly so we can jam them together later.
    for (middleI = leftI; middleI <= rightI; middleI++) {
        middleStr1 += renderedParts1[middleI];
        middleStr2 += renderedParts2[middleI];
    }
    if (middleStr1 || middleStr2) {
        if (isRTL) {
            middleStr = middleStr2 + separator + middleStr1;
        }
        else {
            middleStr = middleStr1 + separator + middleStr2;
        }
    }
    return processMaybeMarkers(leftStr + middleStr + rightStr);
}
// Format String Parsing
// ---------------------------------------------------------------------------------------------------------------------
var parsedFormatStrCache = {};
/*
Returns a parsed format string, leveraging a cache.
*/
function getParsedFormatString(formatStr) {
    return parsedFormatStrCache[formatStr] ||
        (parsedFormatStrCache[formatStr] = parseFormatString(formatStr));
}
/*
Parses a format string into the following:
- fakeFormatString: a momentJS formatting string, littered with special control characters that get post-processed.
- sameUnits: for every part in fakeFormatString, if the part is a token, the value will be a unit string (like "day"),
  that indicates how similar a range's start & end must be in order to share the same formatted text.
  If not a token, then the value is null.
  Always a flat array (not nested liked "chunks").
*/
function parseFormatString(formatStr) {
    var chunks = chunkFormatString(formatStr);
    return {
        fakeFormatString: buildFakeFormatString(chunks),
        sameUnits: buildSameUnits(chunks)
    };
}
/*
Break the formatting string into an array of chunks.
A 'maybe' chunk will have nested chunks.
*/
function chunkFormatString(formatStr) {
    var chunks = [];
    var match;
    // TODO: more descrimination
    // \4 is a backreference to the first character of a multi-character set.
    var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;
    while ((match = chunker.exec(formatStr))) {
        if (match[1]) {
            chunks.push.apply(chunks, // append
            splitStringLiteral(match[1]));
        }
        else if (match[2]) {
            chunks.push({ maybe: chunkFormatString(match[2]) });
        }
        else if (match[3]) {
            chunks.push({ token: match[3] });
        }
        else if (match[5]) {
            chunks.push.apply(chunks, // append
            splitStringLiteral(match[5]));
        }
    }
    return chunks;
}
/*
Potentially splits a literal-text string into multiple parts. For special cases.
*/
function splitStringLiteral(s) {
    if (s === '. ') {
        return ['.', ' ']; // for locales with periods bound to the end of each year/month/date
    }
    else {
        return [s];
    }
}
/*
Given chunks parsed from a real format string, generate a fake (aka "intermediate") format string with special control
characters that will eventually be given to moment for formatting, and then post-processed.
*/
function buildFakeFormatString(chunks) {
    var parts = [];
    var i;
    var chunk;
    for (i = 0; i < chunks.length; i++) {
        chunk = chunks[i];
        if (typeof chunk === 'string') {
            parts.push('[' + chunk + ']');
        }
        else if (chunk.token) {
            if (chunk.token in specialTokens) {
                parts.push(SPECIAL_TOKEN_MARKER + // useful during post-processing
                    '[' + chunk.token + ']' // preserve as literal text
                );
            }
            else {
                parts.push(chunk.token); // unprotected text implies a format string
            }
        }
        else if (chunk.maybe) {
            parts.push(MAYBE_MARKER + // useful during post-processing
                buildFakeFormatString(chunk.maybe) +
                MAYBE_MARKER);
        }
    }
    return parts.join(PART_SEPARATOR);
}
/*
Given parsed chunks from a real formatting string, generates an array of unit strings (like "day") that indicate
in which regard two dates must be similar in order to share range formatting text.
The `chunks` can be nested (because of "maybe" chunks), however, the returned array will be flat.
*/
function buildSameUnits(chunks) {
    var units = [];
    var i;
    var chunk;
    var tokenInfo;
    for (i = 0; i < chunks.length; i++) {
        chunk = chunks[i];
        if (chunk.token) {
            tokenInfo = largeTokenMap[chunk.token.charAt(0)];
            units.push(tokenInfo ? tokenInfo.unit : 'second'); // default to a very strict same-second
        }
        else if (chunk.maybe) {
            units.push.apply(units, // append
            buildSameUnits(chunk.maybe));
        }
        else {
            units.push(null);
        }
    }
    return units;
}
// Rendering to text
// ---------------------------------------------------------------------------------------------------------------------
/*
Formats a date with a fake format string, post-processes the control characters, then returns.
*/
function renderFakeFormatString(fakeFormatString, date) {
    return processMaybeMarkers(renderFakeFormatStringParts(fakeFormatString, date).join(''));
}
/*
Formats a date into parts that will have been post-processed, EXCEPT for the "maybe" markers.
*/
function renderFakeFormatStringParts(fakeFormatString, date) {
    var parts = [];
    var fakeRender = moment_ext_1.oldMomentFormat(date, fakeFormatString);
    var fakeParts = fakeRender.split(PART_SEPARATOR);
    var i;
    var fakePart;
    for (i = 0; i < fakeParts.length; i++) {
        fakePart = fakeParts[i];
        if (fakePart.charAt(0) === SPECIAL_TOKEN_MARKER) {
            parts.push(
            // the literal string IS the token's name.
            // call special token's registered function.
            specialTokens[fakePart.substring(1)](date));
        }
        else {
            parts.push(fakePart);
        }
    }
    return parts;
}
/*
Accepts an almost-finally-formatted string and processes the "maybe" control characters, returning a new string.
*/
function processMaybeMarkers(s) {
    return s.replace(MAYBE_REGEXP, function (m0, m1) {
        if (m1.match(/[1-9]/)) {
            return m1;
        }
        else {
            return '';
        }
    });
}
// Misc Utils
// -------------------------------------------------------------------------------------------------
/*
Returns a unit string, either 'year', 'month', 'day', or null for the most granular formatting token in the string.
*/
function queryMostGranularFormatUnit(formatStr) {
    var chunks = chunkFormatString(formatStr);
    var i;
    var chunk;
    var candidate;
    var best;
    for (i = 0; i < chunks.length; i++) {
        chunk = chunks[i];
        if (chunk.token) {
            candidate = largeTokenMap[chunk.token.charAt(0)];
            if (candidate) {
                if (!best || candidate.value > best.value) {
                    best = candidate;
                }
            }
        }
    }
    if (best) {
        return best.unit;
    }
    return null;
}
exports.queryMostGranularFormatUnit = queryMostGranularFormatUnit;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Class_1 = __webpack_require__(33);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
var Model = /** @class */ (function (_super) {
    tslib_1.__extends(Model, _super);
    function Model() {
        var _this = _super.call(this) || this;
        _this._watchers = {};
        _this._props = {};
        _this.applyGlobalWatchers();
        _this.constructed();
        return _this;
    }
    Model.watch = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // subclasses should make a masked-copy of the superclass's map
        // TODO: write test
        if (!this.prototype.hasOwnProperty('_globalWatchArgs')) {
            this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs);
        }
        this.prototype._globalWatchArgs[name] = args;
    };
    Model.prototype.constructed = function () {
        // useful for monkeypatching. TODO: BaseClass?
    };
    Model.prototype.applyGlobalWatchers = function () {
        var map = this._globalWatchArgs;
        var name;
        for (name in map) {
            this.watch.apply(this, [name].concat(map[name]));
        }
    };
    Model.prototype.has = function (name) {
        return name in this._props;
    };
    Model.prototype.get = function (name) {
        if (name === undefined) {
            return this._props;
        }
        return this._props[name];
    };
    Model.prototype.set = function (name, val) {
        var newProps;
        if (typeof name === 'string') {
            newProps = {};
            newProps[name] = val === undefined ? null : val;
        }
        else {
            newProps = name;
        }
        this.setProps(newProps);
    };
    Model.prototype.reset = function (newProps) {
        var oldProps = this._props;
        var changeset = {}; // will have undefined's to signal unsets
        var name;
        for (name in oldProps) {
            changeset[name] = undefined;
        }
        for (name in newProps) {
            changeset[name] = newProps[name];
        }
        this.setProps(changeset);
    };
    Model.prototype.unset = function (name) {
        var newProps = {};
        var names;
        var i;
        if (typeof name === 'string') {
            names = [name];
        }
        else {
            names = name;
        }
        for (i = 0; i < names.length; i++) {
            newProps[names[i]] = undefined;
        }
        this.setProps(newProps);
    };
    Model.prototype.setProps = function (newProps) {
        var changedProps = {};
        var changedCnt = 0;
        var name;
        var val;
        for (name in newProps) {
            val = newProps[name];
            // a change in value?
            // if an object, don't check equality, because might have been mutated internally.
            // TODO: eventually enforce immutability.
            if (typeof val === 'object' ||
                val !== this._props[name]) {
                changedProps[name] = val;
                changedCnt++;
            }
        }
        if (changedCnt) {
            this.trigger('before:batchChange', changedProps);
            for (name in changedProps) {
                val = changedProps[name];
                this.trigger('before:change', name, val);
                this.trigger('before:change:' + name, val);
            }
            for (name in changedProps) {
                val = changedProps[name];
                if (val === undefined) {
                    delete this._props[name];
                }
                else {
                    this._props[name] = val;
                }
                this.trigger('change:' + name, val);
                this.trigger('change', name, val);
            }
            this.trigger('batchChange', changedProps);
        }
    };
    Model.prototype.watch = function (name, depList, startFunc, stopFunc) {
        var _this = this;
        this.unwatch(name);
        this._watchers[name] = this._watchDeps(depList, function (deps) {
            var res = startFunc.call(_this, deps);
            if (res && res.then) {
                _this.unset(name); // put in an unset state while resolving
                res.then(function (val) {
                    _this.set(name, val);
                });
            }
            else {
                _this.set(name, res);
            }
        }, function (deps) {
            _this.unset(name);
            if (stopFunc) {
                stopFunc.call(_this, deps);
            }
        });
    };
    Model.prototype.unwatch = function (name) {
        var watcher = this._watchers[name];
        if (watcher) {
            delete this._watchers[name];
            watcher.teardown();
        }
    };
    Model.prototype._watchDeps = function (depList, startFunc, stopFunc) {
        var _this = this;
        var queuedChangeCnt = 0;
        var depCnt = depList.length;
        var satisfyCnt = 0;
        var values = {}; // what's passed as the `deps` arguments
        var bindTuples = []; // array of [ eventName, handlerFunc ] arrays
        var isCallingStop = false;
        var onBeforeDepChange = function (depName, val, isOptional) {
            queuedChangeCnt++;
            if (queuedChangeCnt === 1) {
                if (satisfyCnt === depCnt) {
                    isCallingStop = true;
                    stopFunc(values);
                    isCallingStop = false;
                }
            }
        };
        var onDepChange = function (depName, val, isOptional) {
            if (val === undefined) {
                // required dependency that was previously set?
                if (!isOptional && values[depName] !== undefined) {
                    satisfyCnt--;
                }
                delete values[depName];
            }
            else {
                // required dependency that was previously unset?
                if (!isOptional && values[depName] === undefined) {
                    satisfyCnt++;
                }
                values[depName] = val;
            }
            queuedChangeCnt--;
            if (!queuedChangeCnt) {
                // now finally satisfied or satisfied all along?
                if (satisfyCnt === depCnt) {
                    // if the stopFunc initiated another value change, ignore it.
                    // it will be processed by another change event anyway.
                    if (!isCallingStop) {
                        startFunc(values);
                    }
                }
            }
        };
        // intercept for .on() that remembers handlers
        var bind = function (eventName, handler) {
            _this.on(eventName, handler);
            bindTuples.push([eventName, handler]);
        };
        // listen to dependency changes
        depList.forEach(function (depName) {
            var isOptional = false;
            if (depName.charAt(0) === '?') {
                depName = depName.substring(1);
                isOptional = true;
            }
            bind('before:change:' + depName, function (val) {
                onBeforeDepChange(depName, val, isOptional);
            });
            bind('change:' + depName, function (val) {
                onDepChange(depName, val, isOptional);
            });
        });
        // process current dependency values
        depList.forEach(function (depName) {
            var isOptional = false;
            if (depName.charAt(0) === '?') {
                depName = depName.substring(1);
                isOptional = true;
            }
            if (_this.has(depName)) {
                values[depName] = _this.get(depName);
                satisfyCnt++;
            }
            else if (isOptional) {
                satisfyCnt++;
            }
        });
        // initially satisfied
        if (satisfyCnt === depCnt) {
            startFunc(values);
        }
        return {
            teardown: function () {
                // remove all handlers
                for (var i = 0; i < bindTuples.length; i++) {
                    _this.off(bindTuples[i][0], bindTuples[i][1]);
                }
                bindTuples = null;
                // was satisfied, so call stopFunc
                if (satisfyCnt === depCnt) {
                    stopFunc();
                }
            },
            flash: function () {
                if (satisfyCnt === depCnt) {
                    stopFunc();
                    startFunc(values);
                }
            }
        };
    };
    Model.prototype.flash = function (name) {
        var watcher = this._watchers[name];
        if (watcher) {
            watcher.flash();
        }
    };
    return Model;
}(Class_1.default));
exports.default = Model;
Model.prototype._globalWatchArgs = {}; // mutation protection in Model.watch
EmitterMixin_1.default.mixInto(Model);
ListenerMixin_1.default.mixInto(Model);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var SingleEventDef_1 = __webpack_require__(13);
var RecurringEventDef_1 = __webpack_require__(210);
exports.default = {
    parse: function (eventInput, source) {
        if (util_1.isTimeString(eventInput.start) || moment.isDuration(eventInput.start) ||
            util_1.isTimeString(eventInput.end) || moment.isDuration(eventInput.end)) {
            return RecurringEventDef_1.default.parse(eventInput, source);
        }
        else {
            return SingleEventDef_1.default.parse(eventInput, source);
        }
    }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(4);
var EventDateProfile_1 = __webpack_require__(17);
var EventDefDateMutation = /** @class */ (function () {
    function EventDefDateMutation() {
        this.clearEnd = false;
        this.forceTimed = false;
        this.forceAllDay = false;
    }
    EventDefDateMutation.createFromDiff = function (dateProfile0, dateProfile1, largeUnit) {
        var clearEnd = dateProfile0.end && !dateProfile1.end;
        var forceTimed = dateProfile0.isAllDay() && !dateProfile1.isAllDay();
        var forceAllDay = !dateProfile0.isAllDay() && dateProfile1.isAllDay();
        var dateDelta;
        var endDiff;
        var endDelta;
        var mutation;
        // subtracts the dates in the appropriate way, returning a duration
        function subtractDates(date1, date0) {
            if (largeUnit) {
                return util_1.diffByUnit(date1, date0, largeUnit); // poorly named
            }
            else if (dateProfile1.isAllDay()) {
                return util_1.diffDay(date1, date0); // poorly named
            }
            else {
                return util_1.diffDayTime(date1, date0); // poorly named
            }
        }
        dateDelta = subtractDates(dateProfile1.start, dateProfile0.start);
        if (dateProfile1.end) {
            // use unzonedRanges because dateProfile0.end might be null
            endDiff = subtractDates(dateProfile1.unzonedRange.getEnd(), dateProfile0.unzonedRange.getEnd());
            endDelta = endDiff.subtract(dateDelta);
        }
        mutation = new EventDefDateMutation();
        mutation.clearEnd = clearEnd;
        mutation.forceTimed = forceTimed;
        mutation.forceAllDay = forceAllDay;
        mutation.setDateDelta(dateDelta);
        mutation.setEndDelta(endDelta);
        return mutation;
    };
    /*
    returns an undo function.
    */
    EventDefDateMutation.prototype.buildNewDateProfile = function (eventDateProfile, calendar) {
        var start = eventDateProfile.start.clone();
        var end = null;
        var shouldRezone = false;
        if (eventDateProfile.end && !this.clearEnd) {
            end = eventDateProfile.end.clone();
        }
        else if (this.endDelta && !end) {
            end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
        }
        if (this.forceTimed) {
            shouldRezone = true;
            if (!start.hasTime()) {
                start.time(0);
            }
            if (end && !end.hasTime()) {
                end.time(0);
            }
        }
        else if (this.forceAllDay) {
            if (start.hasTime()) {
                start.stripTime();
            }
            if (end && end.hasTime()) {
                end.stripTime();
            }
        }
        if (this.dateDelta) {
            shouldRezone = true;
            start.add(this.dateDelta);
            if (end) {
                end.add(this.dateDelta);
            }
        }
        // do this before adding startDelta to start, so we can work off of start
        if (this.endDelta) {
            shouldRezone = true;
            end.add(this.endDelta);
        }
        if (this.startDelta) {
            shouldRezone = true;
            start.add(this.startDelta);
        }
        if (shouldRezone) {
            start = calendar.applyTimezone(start);
            if (end) {
                end = calendar.applyTimezone(end);
            }
        }
        // TODO: okay to access calendar option?
        if (!end && calendar.opt('forceEventDuration')) {
            end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
        }
        return new EventDateProfile_1.default(start, end, calendar);
    };
    EventDefDateMutation.prototype.setDateDelta = function (dateDelta) {
        if (dateDelta && dateDelta.valueOf()) {
            this.dateDelta = dateDelta;
        }
        else {
            this.dateDelta = null;
        }
    };
    EventDefDateMutation.prototype.setStartDelta = function (startDelta) {
        if (startDelta && startDelta.valueOf()) {
            this.startDelta = startDelta;
        }
        else {
            this.startDelta = null;
        }
    };
    EventDefDateMutation.prototype.setEndDelta = function (endDelta) {
        if (endDelta && endDelta.valueOf()) {
            this.endDelta = endDelta;
        }
        else {
            this.endDelta = null;
        }
    };
    EventDefDateMutation.prototype.isEmpty = function () {
        return !this.clearEnd && !this.forceTimed && !this.forceAllDay &&
            !this.dateDelta && !this.startDelta && !this.endDelta;
    };
    return EventDefDateMutation;
}());
exports.default = EventDefDateMutation;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var StandardTheme_1 = __webpack_require__(213);
var JqueryUiTheme_1 = __webpack_require__(214);
var themeClassHash = {};
function defineThemeSystem(themeName, themeClass) {
    themeClassHash[themeName] = themeClass;
}
exports.defineThemeSystem = defineThemeSystem;
function getThemeSystemClass(themeSetting) {
    if (!themeSetting) {
        return StandardTheme_1.default;
    }
    else if (themeSetting === true) {
        return JqueryUiTheme_1.default;
    }
    else {
        return themeClassHash[themeSetting];
    }
}
exports.getThemeSystemClass = getThemeSystemClass;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Promise_1 = __webpack_require__(20);
var EventSource_1 = __webpack_require__(6);
var SingleEventDef_1 = __webpack_require__(13);
var ArrayEventSource = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayEventSource, _super);
    function ArrayEventSource(calendar) {
        var _this = _super.call(this, calendar) || this;
        _this.eventDefs = []; // for if setRawEventDefs is never called
        return _this;
    }
    ArrayEventSource.parse = function (rawInput, calendar) {
        var rawProps;
        // normalize raw input
        if ($.isArray(rawInput.events)) {
            rawProps = rawInput;
        }
        else if ($.isArray(rawInput)) {
            rawProps = { events: rawInput };
        }
        if (rawProps) {
            return EventSource_1.default.parse.call(this, rawProps, calendar);
        }
        return false;
    };
    ArrayEventSource.prototype.setRawEventDefs = function (rawEventDefs) {
        this.rawEventDefs = rawEventDefs;
        this.eventDefs = this.parseEventDefs(rawEventDefs);
    };
    ArrayEventSource.prototype.fetch = function (start, end, timezone) {
        var eventDefs = this.eventDefs;
        var i;
        if (this.currentTimezone != null &&
            this.currentTimezone !== timezone) {
            for (i = 0; i < eventDefs.length; i++) {
                if (eventDefs[i] instanceof SingleEventDef_1.default) {
                    eventDefs[i].rezone();
                }
            }
        }
        this.currentTimezone = timezone;
        return Promise_1.default.resolve(eventDefs);
    };
    ArrayEventSource.prototype.addEventDef = function (eventDef) {
        this.eventDefs.push(eventDef);
    };
    /*
    eventDefId already normalized to a string
    */
    ArrayEventSource.prototype.removeEventDefsById = function (eventDefId) {
        return util_1.removeMatching(this.eventDefs, function (eventDef) {
            return eventDef.id === eventDefId;
        });
    };
    ArrayEventSource.prototype.removeAllEventDefs = function () {
        this.eventDefs = [];
    };
    ArrayEventSource.prototype.getPrimitive = function () {
        return this.rawEventDefs;
    };
    ArrayEventSource.prototype.applyManualStandardProps = function (rawProps) {
        var superSuccess = _super.prototype.applyManualStandardProps.call(this, rawProps);
        this.setRawEventDefs(rawProps.events);
        return superSuccess;
    };
    return ArrayEventSource;
}(EventSource_1.default));
exports.default = ArrayEventSource;
ArrayEventSource.defineStandardProps({
    events: false // don't automatically transfer
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
/*
A cache for the left/right/top/bottom/width/height values for one or more elements.
Works with both offset (from topleft document) and position (from offsetParent).

options:
- els
- isHorizontal
- isVertical
*/
var CoordCache = /** @class */ (function () {
    function CoordCache(options) {
        this.isHorizontal = false; // whether to query for left/right/width
        this.isVertical = false; // whether to query for top/bottom/height
        this.els = $(options.els);
        this.isHorizontal = options.isHorizontal;
        this.isVertical = options.isVertical;
        this.forcedOffsetParentEl = options.offsetParent ? $(options.offsetParent) : null;
    }
    // Queries the els for coordinates and stores them.
    // Call this method before using and of the get* methods below.
    CoordCache.prototype.build = function () {
        var offsetParentEl = this.forcedOffsetParentEl;
        if (!offsetParentEl && this.els.length > 0) {
            offsetParentEl = this.els.eq(0).offsetParent();
        }
        this.origin = offsetParentEl ?
            offsetParentEl.offset() :
            null;
        this.boundingRect = this.queryBoundingRect();
        if (this.isHorizontal) {
            this.buildElHorizontals();
        }
        if (this.isVertical) {
            this.buildElVerticals();
        }
    };
    // Destroys all internal data about coordinates, freeing memory
    CoordCache.prototype.clear = function () {
        this.origin = null;
        this.boundingRect = null;
        this.lefts = null;
        this.rights = null;
        this.tops = null;
        this.bottoms = null;
    };
    // When called, if coord caches aren't built, builds them
    CoordCache.prototype.ensureBuilt = function () {
        if (!this.origin) {
            this.build();
        }
    };
    // Populates the left/right internal coordinate arrays
    CoordCache.prototype.buildElHorizontals = function () {
        var lefts = [];
        var rights = [];
        this.els.each(function (i, node) {
            var el = $(node);
            var left = el.offset().left;
            var width = el.outerWidth();
            lefts.push(left);
            rights.push(left + width);
        });
        this.lefts = lefts;
        this.rights = rights;
    };
    // Populates the top/bottom internal coordinate arrays
    CoordCache.prototype.buildElVerticals = function () {
        var tops = [];
        var bottoms = [];
        this.els.each(function (i, node) {
            var el = $(node);
            var top = el.offset().top;
            var height = el.outerHeight();
            tops.push(top);
            bottoms.push(top + height);
        });
        this.tops = tops;
        this.bottoms = bottoms;
    };
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
    CoordCache.prototype.getHorizontalIndex = function (leftOffset) {
        this.ensureBuilt();
        var lefts = this.lefts;
        var rights = this.rights;
        var len = lefts.length;
        var i;
        for (i = 0; i < len; i++) {
            if (leftOffset >= lefts[i] && leftOffset < rights[i]) {
                return i;
            }
        }
    };
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
    CoordCache.prototype.getVerticalIndex = function (topOffset) {
        this.ensureBuilt();
        var tops = this.tops;
        var bottoms = this.bottoms;
        var len = tops.length;
        var i;
        for (i = 0; i < len; i++) {
            if (topOffset >= tops[i] && topOffset < bottoms[i]) {
                return i;
            }
        }
    };
    // Gets the left offset (from document left) of the element at the given index
    CoordCache.prototype.getLeftOffset = function (leftIndex) {
        this.ensureBuilt();
        return this.lefts[leftIndex];
    };
    // Gets the left position (from offsetParent left) of the element at the given index
    CoordCache.prototype.getLeftPosition = function (leftIndex) {
        this.ensureBuilt();
        return this.lefts[leftIndex] - this.origin.left;
    };
    // Gets the right offset (from document left) of the element at the given index.
    // This value is NOT relative to the document's right edge, like the CSS concept of "right" would be.
    CoordCache.prototype.getRightOffset = function (leftIndex) {
        this.ensureBuilt();
        return this.rights[leftIndex];
    };
    // Gets the right position (from offsetParent left) of the element at the given index.
    // This value is NOT relative to the offsetParent's right edge, like the CSS concept of "right" would be.
    CoordCache.prototype.getRightPosition = function (leftIndex) {
        this.ensureBuilt();
        return this.rights[leftIndex] - this.origin.left;
    };
    // Gets the width of the element at the given index
    CoordCache.prototype.getWidth = function (leftIndex) {
        this.ensureBuilt();
        return this.rights[leftIndex] - this.lefts[leftIndex];
    };
    // Gets the top offset (from document top) of the element at the given index
    CoordCache.prototype.getTopOffset = function (topIndex) {
        this.ensureBuilt();
        return this.tops[topIndex];
    };
    // Gets the top position (from offsetParent top) of the element at the given position
    CoordCache.prototype.getTopPosition = function (topIndex) {
        this.ensureBuilt();
        return this.tops[topIndex] - this.origin.top;
    };
    // Gets the bottom offset (from the document top) of the element at the given index.
    // This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
    CoordCache.prototype.getBottomOffset = function (topIndex) {
        this.ensureBuilt();
        return this.bottoms[topIndex];
    };
    // Gets the bottom position (from the offsetParent top) of the element at the given index.
    // This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
    CoordCache.prototype.getBottomPosition = function (topIndex) {
        this.ensureBuilt();
        return this.bottoms[topIndex] - this.origin.top;
    };
    // Gets the height of the element at the given index
    CoordCache.prototype.getHeight = function (topIndex) {
        this.ensureBuilt();
        return this.bottoms[topIndex] - this.tops[topIndex];
    };
    // Bounding Rect
    // TODO: decouple this from CoordCache
    // Compute and return what the elements' bounding rectangle is, from the user's perspective.
    // Right now, only returns a rectangle if constrained by an overflow:scroll element.
    // Returns null if there are no elements
    CoordCache.prototype.queryBoundingRect = function () {
        var scrollParentEl;
        if (this.els.length > 0) {
            scrollParentEl = util_1.getScrollParent(this.els.eq(0));
            if (!scrollParentEl.is(document)) {
                return util_1.getClientRect(scrollParentEl);
            }
        }
        return null;
    };
    CoordCache.prototype.isPointInBounds = function (leftOffset, topOffset) {
        return this.isLeftInBounds(leftOffset) && this.isTopInBounds(topOffset);
    };
    CoordCache.prototype.isLeftInBounds = function (leftOffset) {
        return !this.boundingRect || (leftOffset >= this.boundingRect.left && leftOffset < this.boundingRect.right);
    };
    CoordCache.prototype.isTopInBounds = function (topOffset) {
        return !this.boundingRect || (topOffset >= this.boundingRect.top && topOffset < this.boundingRect.bottom);
    };
    return CoordCache;
}());
exports.default = CoordCache;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ListenerMixin_1 = __webpack_require__(7);
var GlobalEmitter_1 = __webpack_require__(21);
/* Tracks a drag's mouse movement, firing various handlers
----------------------------------------------------------------------------------------------------------------------*/
// TODO: use Emitter
var DragListener = /** @class */ (function () {
    function DragListener(options) {
        this.isInteracting = false;
        this.isDistanceSurpassed = false;
        this.isDelayEnded = false;
        this.isDragging = false;
        this.isTouch = false;
        this.isGeneric = false; // initiated by 'dragstart' (jqui)
        this.shouldCancelTouchScroll = true;
        this.scrollAlwaysKills = false;
        this.isAutoScroll = false;
        // defaults
        this.scrollSensitivity = 30; // pixels from edge for scrolling to start
        this.scrollSpeed = 200; // pixels per second, at maximum speed
        this.scrollIntervalMs = 50; // millisecond wait between scroll increment
        this.options = options || {};
    }
    // Interaction (high-level)
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.startInteraction = function (ev, extraOptions) {
        if (extraOptions === void 0) { extraOptions = {}; }
        if (ev.type === 'mousedown') {
            if (GlobalEmitter_1.default.get().shouldIgnoreMouse()) {
                return;
            }
            else if (!util_1.isPrimaryMouseButton(ev)) {
                return;
            }
            else {
                ev.preventDefault(); // prevents native selection in most browsers
            }
        }
        if (!this.isInteracting) {
            // process options
            this.delay = util_1.firstDefined(extraOptions.delay, this.options.delay, 0);
            this.minDistance = util_1.firstDefined(extraOptions.distance, this.options.distance, 0);
            this.subjectEl = this.options.subjectEl;
            util_1.preventSelection($('body'));
            this.isInteracting = true;
            this.isTouch = util_1.getEvIsTouch(ev);
            this.isGeneric = ev.type === 'dragstart';
            this.isDelayEnded = false;
            this.isDistanceSurpassed = false;
            this.originX = util_1.getEvX(ev);
            this.originY = util_1.getEvY(ev);
            this.scrollEl = util_1.getScrollParent($(ev.target));
            this.bindHandlers();
            this.initAutoScroll();
            this.handleInteractionStart(ev);
            this.startDelay(ev);
            if (!this.minDistance) {
                this.handleDistanceSurpassed(ev);
            }
        }
    };
    DragListener.prototype.handleInteractionStart = function (ev) {
        this.trigger('interactionStart', ev);
    };
    DragListener.prototype.endInteraction = function (ev, isCancelled) {
        if (this.isInteracting) {
            this.endDrag(ev);
            if (this.delayTimeoutId) {
                clearTimeout(this.delayTimeoutId);
                this.delayTimeoutId = null;
            }
            this.destroyAutoScroll();
            this.unbindHandlers();
            this.isInteracting = false;
            this.handleInteractionEnd(ev, isCancelled);
            util_1.allowSelection($('body'));
        }
    };
    DragListener.prototype.handleInteractionEnd = function (ev, isCancelled) {
        this.trigger('interactionEnd', ev, isCancelled || false);
    };
    // Binding To DOM
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.bindHandlers = function () {
        // some browsers (Safari in iOS 10) don't allow preventDefault on touch events that are bound after touchstart,
        // so listen to the GlobalEmitter singleton, which is always bound, instead of the document directly.
        var globalEmitter = GlobalEmitter_1.default.get();
        if (this.isGeneric) {
            this.listenTo($(document), {
                drag: this.handleMove,
                dragstop: this.endInteraction
            });
        }
        else if (this.isTouch) {
            this.listenTo(globalEmitter, {
                touchmove: this.handleTouchMove,
                touchend: this.endInteraction,
                scroll: this.handleTouchScroll
            });
        }
        else {
            this.listenTo(globalEmitter, {
                mousemove: this.handleMouseMove,
                mouseup: this.endInteraction
            });
        }
        this.listenTo(globalEmitter, {
            selectstart: util_1.preventDefault,
            contextmenu: util_1.preventDefault // long taps would open menu on Chrome dev tools
        });
    };
    DragListener.prototype.unbindHandlers = function () {
        this.stopListeningTo(GlobalEmitter_1.default.get());
        this.stopListeningTo($(document)); // for isGeneric
    };
    // Drag (high-level)
    // -----------------------------------------------------------------------------------------------------------------
    // extraOptions ignored if drag already started
    DragListener.prototype.startDrag = function (ev, extraOptions) {
        this.startInteraction(ev, extraOptions); // ensure interaction began
        if (!this.isDragging) {
            this.isDragging = true;
            this.handleDragStart(ev);
        }
    };
    DragListener.prototype.handleDragStart = function (ev) {
        this.trigger('dragStart', ev);
    };
    DragListener.prototype.handleMove = function (ev) {
        var dx = util_1.getEvX(ev) - this.originX;
        var dy = util_1.getEvY(ev) - this.originY;
        var minDistance = this.minDistance;
        var distanceSq; // current distance from the origin, squared
        if (!this.isDistanceSurpassed) {
            distanceSq = dx * dx + dy * dy;
            if (distanceSq >= minDistance * minDistance) {
                this.handleDistanceSurpassed(ev);
            }
        }
        if (this.isDragging) {
            this.handleDrag(dx, dy, ev);
        }
    };
    // Called while the mouse is being moved and when we know a legitimate drag is taking place
    DragListener.prototype.handleDrag = function (dx, dy, ev) {
        this.trigger('drag', dx, dy, ev);
        this.updateAutoScroll(ev); // will possibly cause scrolling
    };
    DragListener.prototype.endDrag = function (ev) {
        if (this.isDragging) {
            this.isDragging = false;
            this.handleDragEnd(ev);
        }
    };
    DragListener.prototype.handleDragEnd = function (ev) {
        this.trigger('dragEnd', ev);
    };
    // Delay
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.startDelay = function (initialEv) {
        var _this = this;
        if (this.delay) {
            this.delayTimeoutId = setTimeout(function () {
                _this.handleDelayEnd(initialEv);
            }, this.delay);
        }
        else {
            this.handleDelayEnd(initialEv);
        }
    };
    DragListener.prototype.handleDelayEnd = function (initialEv) {
        this.isDelayEnded = true;
        if (this.isDistanceSurpassed) {
            this.startDrag(initialEv);
        }
    };
    // Distance
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.handleDistanceSurpassed = function (ev) {
        this.isDistanceSurpassed = true;
        if (this.isDelayEnded) {
            this.startDrag(ev);
        }
    };
    // Mouse / Touch
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.handleTouchMove = function (ev) {
        // prevent inertia and touchmove-scrolling while dragging
        if (this.isDragging && this.shouldCancelTouchScroll) {
            ev.preventDefault();
        }
        this.handleMove(ev);
    };
    DragListener.prototype.handleMouseMove = function (ev) {
        this.handleMove(ev);
    };
    // Scrolling (unrelated to auto-scroll)
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.handleTouchScroll = function (ev) {
        // if the drag is being initiated by touch, but a scroll happens before
        // the drag-initiating delay is over, cancel the drag
        if (!this.isDragging || this.scrollAlwaysKills) {
            this.endInteraction(ev, true); // isCancelled=true
        }
    };
    // Utils
    // -----------------------------------------------------------------------------------------------------------------
    // Triggers a callback. Calls a function in the option hash of the same name.
    // Arguments beyond the first `name` are forwarded on.
    DragListener.prototype.trigger = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.options[name]) {
            this.options[name].apply(this, args);
        }
        // makes _methods callable by event name. TODO: kill this
        if (this['_' + name]) {
            this['_' + name].apply(this, args);
        }
    };
    // Auto-scroll
    // -----------------------------------------------------------------------------------------------------------------
    DragListener.prototype.initAutoScroll = function () {
        var scrollEl = this.scrollEl;
        this.isAutoScroll =
            this.options.scroll &&
                scrollEl &&
                !scrollEl.is(window) &&
                !scrollEl.is(document);
        if (this.isAutoScroll) {
            // debounce makes sure rapid calls don't happen
            this.listenTo(scrollEl, 'scroll', util_1.debounce(this.handleDebouncedScroll, 100));
        }
    };
    DragListener.prototype.destroyAutoScroll = function () {
        this.endAutoScroll(); // kill any animation loop
        // remove the scroll handler if there is a scrollEl
        if (this.isAutoScroll) {
            this.stopListeningTo(this.scrollEl, 'scroll'); // will probably get removed by unbindHandlers too :(
        }
    };
    // Computes and stores the bounding rectangle of scrollEl
    DragListener.prototype.computeScrollBounds = function () {
        if (this.isAutoScroll) {
            this.scrollBounds = util_1.getOuterRect(this.scrollEl);
            // TODO: use getClientRect in future. but prevents auto scrolling when on top of scrollbars
        }
    };
    // Called when the dragging is in progress and scrolling should be updated
    DragListener.prototype.updateAutoScroll = function (ev) {
        var sensitivity = this.scrollSensitivity;
        var bounds = this.scrollBounds;
        var topCloseness;
        var bottomCloseness;
        var leftCloseness;
        var rightCloseness;
        var topVel = 0;
        var leftVel = 0;
        if (bounds) {
            // compute closeness to edges. valid range is from 0.0 - 1.0
            topCloseness = (sensitivity - (util_1.getEvY(ev) - bounds.top)) / sensitivity;
            bottomCloseness = (sensitivity - (bounds.bottom - util_1.getEvY(ev))) / sensitivity;
            leftCloseness = (sensitivity - (util_1.getEvX(ev) - bounds.left)) / sensitivity;
            rightCloseness = (sensitivity - (bounds.right - util_1.getEvX(ev))) / sensitivity;
            // translate vertical closeness into velocity.
            // mouse must be completely in bounds for velocity to happen.
            if (topCloseness >= 0 && topCloseness <= 1) {
                topVel = topCloseness * this.scrollSpeed * -1; // negative. for scrolling up
            }
            else if (bottomCloseness >= 0 && bottomCloseness <= 1) {
                topVel = bottomCloseness * this.scrollSpeed;
            }
            // translate horizontal closeness into velocity
            if (leftCloseness >= 0 && leftCloseness <= 1) {
                leftVel = leftCloseness * this.scrollSpeed * -1; // negative. for scrolling left
            }
            else if (rightCloseness >= 0 && rightCloseness <= 1) {
                leftVel = rightCloseness * this.scrollSpeed;
            }
        }
        this.setScrollVel(topVel, leftVel);
    };
    // Sets the speed-of-scrolling for the scrollEl
    DragListener.prototype.setScrollVel = function (topVel, leftVel) {
        this.scrollTopVel = topVel;
        this.scrollLeftVel = leftVel;
        this.constrainScrollVel(); // massages into realistic values
        // if there is non-zero velocity, and an animation loop hasn't already started, then START
        if ((this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId) {
            this.scrollIntervalId = setInterval(util_1.proxy(this, 'scrollIntervalFunc'), // scope to `this`
            this.scrollIntervalMs);
        }
    };
    // Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
    DragListener.prototype.constrainScrollVel = function () {
        var el = this.scrollEl;
        if (this.scrollTopVel < 0) {
            if (el.scrollTop() <= 0) {
                this.scrollTopVel = 0;
            }
        }
        else if (this.scrollTopVel > 0) {
            if (el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) {
                this.scrollTopVel = 0;
            }
        }
        if (this.scrollLeftVel < 0) {
            if (el.scrollLeft() <= 0) {
                this.scrollLeftVel = 0;
            }
        }
        else if (this.scrollLeftVel > 0) {
            if (el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) {
                this.scrollLeftVel = 0;
            }
        }
    };
    // This function gets called during every iteration of the scrolling animation loop
    DragListener.prototype.scrollIntervalFunc = function () {
        var el = this.scrollEl;
        var frac = this.scrollIntervalMs / 1000; // considering animation frequency, what the vel should be mult'd by
        // change the value of scrollEl's scroll
        if (this.scrollTopVel) {
            el.scrollTop(el.scrollTop() + this.scrollTopVel * frac);
        }
        if (this.scrollLeftVel) {
            el.scrollLeft(el.scrollLeft() + this.scrollLeftVel * frac);
        }
        this.constrainScrollVel(); // since the scroll values changed, recompute the velocities
        // if scrolled all the way, which causes the vels to be zero, stop the animation loop
        if (!this.scrollTopVel && !this.scrollLeftVel) {
            this.endAutoScroll();
        }
    };
    // Kills any existing scrolling animation loop
    DragListener.prototype.endAutoScroll = function () {
        if (this.scrollIntervalId) {
            clearInterval(this.scrollIntervalId);
            this.scrollIntervalId = null;
            this.handleScrollEnd();
        }
    };
    // Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
    DragListener.prototype.handleDebouncedScroll = function () {
        // recompute all coordinates, but *only* if this is *not* part of our scrolling animation
        if (!this.scrollIntervalId) {
            this.handleScrollEnd();
        }
    };
    DragListener.prototype.handleScrollEnd = function () {
        // Called when scrolling has stopped, whether through auto scroll, or the user scrolling
    };
    return DragListener;
}());
exports.default = DragListener;
ListenerMixin_1.default.mixInto(DragListener);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var Mixin_1 = __webpack_require__(14);
/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin = /** @class */ (function (_super) {
    tslib_1.__extends(DayTableMixin, _super);
    function DayTableMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Populates internal variables used for date calculation and rendering
    DayTableMixin.prototype.updateDayTable = function () {
        var t = this;
        var view = t.view;
        var calendar = view.calendar;
        var date = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.startMs, true);
        var end = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.endMs, true);
        var dayIndex = -1;
        var dayIndices = [];
        var dayDates = [];
        var daysPerRow;
        var firstDay;
        var rowCnt;
        while (date.isBefore(end)) {
            if (view.isHiddenDay(date)) {
                dayIndices.push(dayIndex + 0.5); // mark that it's between indices
            }
            else {
                dayIndex++;
                dayIndices.push(dayIndex);
                dayDates.push(date.clone());
            }
            date.add(1, 'days');
        }
        if (this.breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dayDates[0].day();
            for (daysPerRow = 1; daysPerRow < dayDates.length; daysPerRow++) {
                if (dayDates[daysPerRow].day() === firstDay) {
                    break;
                }
            }
            rowCnt = Math.ceil(dayDates.length / daysPerRow);
        }
        else {
            rowCnt = 1;
            daysPerRow = dayDates.length;
        }
        this.dayDates = dayDates;
        this.dayIndices = dayIndices;
        this.daysPerRow = daysPerRow;
        this.rowCnt = rowCnt;
        this.updateDayTableCols();
    };
    // Computes and assigned the colCnt property and updates any options that may be computed from it
    DayTableMixin.prototype.updateDayTableCols = function () {
        this.colCnt = this.computeColCnt();
        this.colHeadFormat =
            this.opt('columnHeaderFormat') ||
                this.opt('columnFormat') || // deprecated
                this.computeColHeadFormat();
    };
    // Determines how many columns there should be in the table
    DayTableMixin.prototype.computeColCnt = function () {
        return this.daysPerRow;
    };
    // Computes the ambiguously-timed moment for the given cell
    DayTableMixin.prototype.getCellDate = function (row, col) {
        return this.dayDates[this.getCellDayIndex(row, col)].clone();
    };
    // Computes the ambiguously-timed date range for the given cell
    DayTableMixin.prototype.getCellRange = function (row, col) {
        var start = this.getCellDate(row, col);
        var end = start.clone().add(1, 'days');
        return { start: start, end: end };
    };
    // Returns the number of day cells, chronologically, from the first of the grid (0-based)
    DayTableMixin.prototype.getCellDayIndex = function (row, col) {
        return row * this.daysPerRow + this.getColDayIndex(col);
    };
    // Returns the numner of day cells, chronologically, from the first cell in *any given row*
    DayTableMixin.prototype.getColDayIndex = function (col) {
        if (this.isRTL) {
            return this.colCnt - 1 - col;
        }
        else {
            return col;
        }
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    DayTableMixin.prototype.getDateDayIndex = function (date) {
        var dayIndices = this.dayIndices;
        var dayOffset = date.diff(this.dayDates[0], 'days');
        if (dayOffset < 0) {
            return dayIndices[0] - 1;
        }
        else if (dayOffset >= dayIndices.length) {
            return dayIndices[dayIndices.length - 1] + 1;
        }
        else {
            return dayIndices[dayOffset];
        }
    };
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    DayTableMixin.prototype.computeColHeadFormat = function () {
        // if more than one week row, or if there are a lot of columns with not much space,
        // put just the day numbers will be in each cell
        if (this.rowCnt > 1 || this.colCnt > 10) {
            return 'ddd'; // "Sat"
        }
        else if (this.colCnt > 1) {
            return this.opt('dayOfMonthFormat'); // "Sat 12/10"
        }
        else {
            return 'dddd'; // "Saturday"
        }
    };
    /* Slicing
    ------------------------------------------------------------------------------------------------------------------*/
    // Slices up a date range into a segment for every week-row it intersects with
    DayTableMixin.prototype.sliceRangeByRow = function (unzonedRange) {
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        var segs = [];
        var row;
        var rowFirst;
        var rowLast; // inclusive day-index range for current row
        var segFirst;
        var segLast; // inclusive day-index range for segment
        for (row = 0; row < this.rowCnt; row++) {
            rowFirst = row * daysPerRow;
            rowLast = rowFirst + daysPerRow - 1;
            // intersect segment's offset range with the row's
            segFirst = Math.max(rangeFirst, rowFirst);
            segLast = Math.min(rangeLast, rowLast);
            // deal with in-between indices
            segFirst = Math.ceil(segFirst); // in-between starts round to next cell
            segLast = Math.floor(segLast); // in-between ends round to prev cell
            if (segFirst <= segLast) {
                segs.push({
                    row: row,
                    // normalize to start of row
                    firstRowDayIndex: segFirst - rowFirst,
                    lastRowDayIndex: segLast - rowFirst,
                    // must be matching integers to be the segment's start/end
                    isStart: segFirst === rangeFirst,
                    isEnd: segLast === rangeLast
                });
            }
        }
        return segs;
    };
    // Slices up a date range into a segment for every day-cell it intersects with.
    // TODO: make more DRY with sliceRangeByRow somehow.
    DayTableMixin.prototype.sliceRangeByDay = function (unzonedRange) {
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        var segs = [];
        var row;
        var rowFirst;
        var rowLast; // inclusive day-index range for current row
        var i;
        var segFirst;
        var segLast; // inclusive day-index range for segment
        for (row = 0; row < this.rowCnt; row++) {
            rowFirst = row * daysPerRow;
            rowLast = rowFirst + daysPerRow - 1;
            for (i = rowFirst; i <= rowLast; i++) {
                // intersect segment's offset range with the row's
                segFirst = Math.max(rangeFirst, i);
                segLast = Math.min(rangeLast, i);
                // deal with in-between indices
                segFirst = Math.ceil(segFirst); // in-between starts round to next cell
                segLast = Math.floor(segLast); // in-between ends round to prev cell
                if (segFirst <= segLast) {
                    segs.push({
                        row: row,
                        // normalize to start of row
                        firstRowDayIndex: segFirst - rowFirst,
                        lastRowDayIndex: segLast - rowFirst,
                        // must be matching integers to be the segment's start/end
                        isStart: segFirst === rangeFirst,
                        isEnd: segLast === rangeLast
                    });
                }
            }
        }
        return segs;
    };
    /* Header Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderHeadHtml = function () {
        var theme = this.view.calendar.theme;
        return '' +
            '<div class="fc-row ' + theme.getClass('headerRow') + '">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            '<thead>' +
            this.renderHeadTrHtml() +
            '</thead>' +
            '</table>' +
            '</div>';
    };
    DayTableMixin.prototype.renderHeadIntroHtml = function () {
        return this.renderIntroHtml(); // fall back to generic
    };
    DayTableMixin.prototype.renderHeadTrHtml = function () {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderHeadIntroHtml()) +
            this.renderHeadDateCellsHtml() +
            (this.isRTL ? this.renderHeadIntroHtml() : '') +
            '</tr>';
    };
    DayTableMixin.prototype.renderHeadDateCellsHtml = function () {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(0, col);
            htmls.push(this.renderHeadDateCellHtml(date));
        }
        return htmls.join('');
    };
    // TODO: when internalApiVersion, accept an object for HTML attributes
    // (colspan should be no different)
    DayTableMixin.prototype.renderHeadDateCellHtml = function (date, colspan, otherAttrs) {
        var t = this;
        var view = t.view;
        var isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var classNames = [
            'fc-day-header',
            view.calendar.theme.getClass('widgetHeader')
        ];
        var innerHtml;
        if (typeof t.opt('columnHeaderHtml') === 'function') {
            innerHtml = t.opt('columnHeaderHtml')(date);
        }
        else if (typeof t.opt('columnHeaderText') === 'function') {
            innerHtml = util_1.htmlEscape(t.opt('columnHeaderText')(date));
        }
        else {
            innerHtml = util_1.htmlEscape(date.format(t.colHeadFormat));
        }
        // if only one row of days, the classNames on the header can represent the specific days beneath
        if (t.rowCnt === 1) {
            classNames = classNames.concat(
            // includes the day-of-week class
            // noThemeHighlight=true (don't highlight the header)
            t.getDayClasses(date, true));
        }
        else {
            classNames.push('fc-' + util_1.dayIDs[date.day()]); // only add the day-of-week class
        }
        return '' +
            '<th class="' + classNames.join(' ') + '"' +
            ((isDateValid && t.rowCnt) === 1 ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' :
                '') +
            (colspan > 1 ?
                ' colspan="' + colspan + '"' :
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '>' +
            (isDateValid ?
                // don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
                view.buildGotoAnchorHtml({ date: date, forceOff: t.rowCnt > 1 || t.colCnt === 1 }, innerHtml) :
                // if not valid, display text, but no link
                innerHtml) +
            '</th>';
    };
    /* Background Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderBgTrHtml = function (row) {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderBgIntroHtml(row)) +
            this.renderBgCellsHtml(row) +
            (this.isRTL ? this.renderBgIntroHtml(row) : '') +
            '</tr>';
    };
    DayTableMixin.prototype.renderBgIntroHtml = function (row) {
        return this.renderIntroHtml(); // fall back to generic
    };
    DayTableMixin.prototype.renderBgCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(row, col);
            htmls.push(this.renderBgCellHtml(date));
        }
        return htmls.join('');
    };
    DayTableMixin.prototype.renderBgCellHtml = function (date, otherAttrs) {
        var t = this;
        var view = t.view;
        var isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var classes = t.getDayClasses(date);
        classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    };
    /* Generic
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderIntroHtml = function () {
        // Generates the default HTML intro for any row. User classes should override
    };
    // TODO: a generic method for dealing with <tr>, RTL, intro
    // when increment internalApiVersion
    // wrapTr (scheduler)
    /* Utils
    ------------------------------------------------------------------------------------------------------------------*/
    // Applies the generic "intro" and "outro" HTML to the given cells.
    // Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
    DayTableMixin.prototype.bookendCells = function (trEl) {
        var introHtml = this.renderIntroHtml();
        if (introHtml) {
            if (this.isRTL) {
                trEl.append(introHtml);
            }
            else {
                trEl.prepend(introHtml);
            }
        }
    };
    return DayTableMixin;
}(Mixin_1.default));
exports.default = DayTableMixin;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var BusinessHourRenderer = /** @class */ (function () {
    /*
    component implements:
      - eventRangesToEventFootprints
      - eventFootprintsToSegs
    */
    function BusinessHourRenderer(component, fillRenderer) {
        this.component = component;
        this.fillRenderer = fillRenderer;
    }
    BusinessHourRenderer.prototype.render = function (businessHourGenerator) {
        var component = this.component;
        var unzonedRange = component._getDateProfile().activeUnzonedRange;
        var eventInstanceGroup = businessHourGenerator.buildEventInstanceGroup(component.hasAllDayBusinessHours, unzonedRange);
        var eventFootprints = eventInstanceGroup ?
            component.eventRangesToEventFootprints(eventInstanceGroup.sliceRenderRanges(unzonedRange)) :
            [];
        this.renderEventFootprints(eventFootprints);
    };
    BusinessHourRenderer.prototype.renderEventFootprints = function (eventFootprints) {
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        this.renderSegs(segs);
        this.segs = segs;
    };
    BusinessHourRenderer.prototype.renderSegs = function (segs) {
        if (this.fillRenderer) {
            this.fillRenderer.renderSegs('businessHours', segs, {
                getClasses: function (seg) {
                    return ['fc-nonbusiness', 'fc-bgevent'];
                }
            });
        }
    };
    BusinessHourRenderer.prototype.unrender = function () {
        if (this.fillRenderer) {
            this.fillRenderer.unrender('businessHours');
        }
        this.segs = null;
    };
    BusinessHourRenderer.prototype.getSegs = function () {
        return this.segs || [];
    };
    return BusinessHourRenderer;
}());
exports.default = BusinessHourRenderer;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var FillRenderer = /** @class */ (function () {
    function FillRenderer(component) {
        this.fillSegTag = 'div';
        this.component = component;
        this.elsByFill = {};
    }
    FillRenderer.prototype.renderFootprint = function (type, componentFootprint, props) {
        this.renderSegs(type, this.component.componentFootprintToSegs(componentFootprint), props);
    };
    FillRenderer.prototype.renderSegs = function (type, segs, props) {
        var els;
        segs = this.buildSegEls(type, segs, props); // assignes `.el` to each seg. returns successfully rendered segs
        els = this.attachSegEls(type, segs);
        if (els) {
            this.reportEls(type, els);
        }
        return segs;
    };
    // Unrenders a specific type of fill that is currently rendered on the grid
    FillRenderer.prototype.unrender = function (type) {
        var el = this.elsByFill[type];
        if (el) {
            el.remove();
            delete this.elsByFill[type];
        }
    };
    // Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
    // Only returns segments that successfully rendered.
    FillRenderer.prototype.buildSegEls = function (type, segs, props) {
        var _this = this;
        var html = '';
        var renderedSegs = [];
        var i;
        if (segs.length) {
            // build a large concatenation of segment HTML
            for (i = 0; i < segs.length; i++) {
                html += this.buildSegHtml(type, segs[i], props);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment.
            $(html).each(function (i, node) {
                var seg = segs[i];
                var el = $(node);
                // allow custom filter methods per-type
                if (props.filterEl) {
                    el = props.filterEl(seg, el);
                }
                if (el) {
                    el = $(el); // allow custom filter to return raw DOM node
                    // correct element type? (would be bad if a non-TD were inserted into a table for example)
                    if (el.is(_this.fillSegTag)) {
                        seg.el = el;
                        renderedSegs.push(seg);
                    }
                }
            });
        }
        return renderedSegs;
    };
    // Builds the HTML needed for one fill segment. Generic enough to work with different types.
    FillRenderer.prototype.buildSegHtml = function (type, seg, props) {
        // custom hooks per-type
        var classes = props.getClasses ? props.getClasses(seg) : [];
        var css = util_1.cssToStr(props.getCss ? props.getCss(seg) : {});
        return '<' + this.fillSegTag +
            (classes.length ? ' class="' + classes.join(' ') + '"' : '') +
            (css ? ' style="' + css + '"' : '') +
            ' />';
    };
    // Should return wrapping DOM structure
    FillRenderer.prototype.attachSegEls = function (type, segs) {
        // subclasses must implement
    };
    FillRenderer.prototype.reportEls = function (type, nodes) {
        if (this.elsByFill[type]) {
            this.elsByFill[type] = this.elsByFill[type].add(nodes);
        }
        else {
            this.elsByFill[type] = $(nodes);
        }
    };
    return FillRenderer;
}());
exports.default = FillRenderer;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var SingleEventDef_1 = __webpack_require__(13);
var EventFootprint_1 = __webpack_require__(36);
var EventSource_1 = __webpack_require__(6);
var HelperRenderer = /** @class */ (function () {
    function HelperRenderer(component, eventRenderer) {
        this.view = component._getView();
        this.component = component;
        this.eventRenderer = eventRenderer;
    }
    HelperRenderer.prototype.renderComponentFootprint = function (componentFootprint) {
        this.renderEventFootprints([
            this.fabricateEventFootprint(componentFootprint)
        ]);
    };
    HelperRenderer.prototype.renderEventDraggingFootprints = function (eventFootprints, sourceSeg, isTouch) {
        this.renderEventFootprints(eventFootprints, sourceSeg, 'fc-dragging', isTouch ? null : this.view.opt('dragOpacity'));
    };
    HelperRenderer.prototype.renderEventResizingFootprints = function (eventFootprints, sourceSeg, isTouch) {
        this.renderEventFootprints(eventFootprints, sourceSeg, 'fc-resizing');
    };
    HelperRenderer.prototype.renderEventFootprints = function (eventFootprints, sourceSeg, extraClassNames, opacity) {
        var segs = this.component.eventFootprintsToSegs(eventFootprints);
        var classNames = 'fc-helper ' + (extraClassNames || '');
        var i;
        // assigns each seg's el and returns a subset of segs that were rendered
        segs = this.eventRenderer.renderFgSegEls(segs);
        for (i = 0; i < segs.length; i++) {
            segs[i].el.addClass(classNames);
        }
        if (opacity != null) {
            for (i = 0; i < segs.length; i++) {
                segs[i].el.css('opacity', opacity);
            }
        }
        this.helperEls = this.renderSegs(segs, sourceSeg);
    };
    /*
    Must return all mock event elements
    */
    HelperRenderer.prototype.renderSegs = function (segs, sourceSeg) {
        // Subclasses must implement
    };
    HelperRenderer.prototype.unrender = function () {
        if (this.helperEls) {
            this.helperEls.remove();
            this.helperEls = null;
        }
    };
    HelperRenderer.prototype.fabricateEventFootprint = function (componentFootprint) {
        var calendar = this.view.calendar;
        var eventDateProfile = calendar.footprintToDateProfile(componentFootprint);
        var dummyEvent = new SingleEventDef_1.default(new EventSource_1.default(calendar));
        var dummyInstance;
        dummyEvent.dateProfile = eventDateProfile;
        dummyInstance = dummyEvent.buildInstance();
        return new EventFootprint_1.default(componentFootprint, dummyEvent, dummyInstance);
    };
    return HelperRenderer;
}());
exports.default = HelperRenderer;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var GlobalEmitter_1 = __webpack_require__(21);
var Interaction_1 = __webpack_require__(15);
var EventPointing = /** @class */ (function (_super) {
    tslib_1.__extends(EventPointing, _super);
    function EventPointing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    component must implement:
      - publiclyTrigger
    */
    EventPointing.prototype.bindToEl = function (el) {
        var component = this.component;
        component.bindSegHandlerToEl(el, 'click', this.handleClick.bind(this));
        component.bindSegHandlerToEl(el, 'mouseenter', this.handleMouseover.bind(this));
        component.bindSegHandlerToEl(el, 'mouseleave', this.handleMouseout.bind(this));
    };
    EventPointing.prototype.handleClick = function (seg, ev) {
        var res = this.component.publiclyTrigger('eventClick', {
            context: seg.el[0],
            args: [seg.footprint.getEventLegacy(), ev, this.view]
        });
        if (res === false) {
            ev.preventDefault();
        }
    };
    // Updates internal state and triggers handlers for when an event element is moused over
    EventPointing.prototype.handleMouseover = function (seg, ev) {
        if (!GlobalEmitter_1.default.get().shouldIgnoreMouse() &&
            !this.mousedOverSeg) {
            this.mousedOverSeg = seg;
            // TODO: move to EventSelecting's responsibility
            if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
                seg.el.addClass('fc-allow-mouse-resize');
            }
            this.component.publiclyTrigger('eventMouseover', {
                context: seg.el[0],
                args: [seg.footprint.getEventLegacy(), ev, this.view]
            });
        }
    };
    // Updates internal state and triggers handlers for when an event element is moused out.
    // Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
    EventPointing.prototype.handleMouseout = function (seg, ev) {
        if (this.mousedOverSeg) {
            this.mousedOverSeg = null;
            // TODO: move to EventSelecting's responsibility
            if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
                seg.el.removeClass('fc-allow-mouse-resize');
            }
            this.component.publiclyTrigger('eventMouseout', {
                context: seg.el[0],
                args: [
                    seg.footprint.getEventLegacy(),
                    ev || {},
                    this.view
                ]
            });
        }
    };
    EventPointing.prototype.end = function () {
        if (this.mousedOverSeg) {
            this.handleMouseout(this.mousedOverSeg);
        }
    };
    return EventPointing;
}(Interaction_1.default));
exports.default = EventPointing;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Mixin_1 = __webpack_require__(14);
var DateClicking_1 = __webpack_require__(245);
var DateSelecting_1 = __webpack_require__(225);
var EventPointing_1 = __webpack_require__(59);
var EventDragging_1 = __webpack_require__(224);
var EventResizing_1 = __webpack_require__(223);
var ExternalDropping_1 = __webpack_require__(222);
var StandardInteractionsMixin = /** @class */ (function (_super) {
    tslib_1.__extends(StandardInteractionsMixin, _super);
    function StandardInteractionsMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardInteractionsMixin;
}(Mixin_1.default));
exports.default = StandardInteractionsMixin;
StandardInteractionsMixin.prototype.dateClickingClass = DateClicking_1.default;
StandardInteractionsMixin.prototype.dateSelectingClass = DateSelecting_1.default;
StandardInteractionsMixin.prototype.eventPointingClass = EventPointing_1.default;
StandardInteractionsMixin.prototype.eventDraggingClass = EventDragging_1.default;
StandardInteractionsMixin.prototype.eventResizingClass = EventResizing_1.default;
StandardInteractionsMixin.prototype.externalDroppingClass = ExternalDropping_1.default;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var CoordCache_1 = __webpack_require__(53);
var Popover_1 = __webpack_require__(249);
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var EventFootprint_1 = __webpack_require__(36);
var BusinessHourRenderer_1 = __webpack_require__(56);
var StandardInteractionsMixin_1 = __webpack_require__(60);
var InteractiveDateComponent_1 = __webpack_require__(40);
var DayTableMixin_1 = __webpack_require__(55);
var DayGridEventRenderer_1 = __webpack_require__(250);
var DayGridHelperRenderer_1 = __webpack_require__(251);
var DayGridFillRenderer_1 = __webpack_require__(252);
/* A component that renders a grid of whole-days that runs horizontally. There can be multiple rows, one per week.
----------------------------------------------------------------------------------------------------------------------*/
var DayGrid = /** @class */ (function (_super) {
    tslib_1.__extends(DayGrid, _super);
    function DayGrid(view) {
        var _this = _super.call(this, view) || this;
        _this.cellWeekNumbersVisible = false; // display week numbers in day cell?
        _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
        // isRigid determines whether the individual rows should ignore the contents and be a constant height.
        // Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
        _this.isRigid = false;
        _this.hasAllDayBusinessHours = true;
        return _this;
    }
    // Slices up the given span (unzoned start/end with other misc data) into an array of segments
    DayGrid.prototype.componentFootprintToSegs = function (componentFootprint) {
        var segs = this.sliceRangeByRow(componentFootprint.unzonedRange);
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            if (this.isRTL) {
                seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
                seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
            }
            else {
                seg.leftCol = seg.firstRowDayIndex;
                seg.rightCol = seg.lastRowDayIndex;
            }
        }
        return segs;
    };
    /* Date Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.renderDates = function (dateProfile) {
        this.dateProfile = dateProfile;
        this.updateDayTable();
        this.renderGrid();
    };
    DayGrid.prototype.unrenderDates = function () {
        this.removeSegPopover();
    };
    // Renders the rows and columns into the component's `this.el`, which should already be assigned.
    DayGrid.prototype.renderGrid = function () {
        var view = this.view;
        var rowCnt = this.rowCnt;
        var colCnt = this.colCnt;
        var html = '';
        var row;
        var col;
        if (this.headContainerEl) {
            this.headContainerEl.html(this.renderHeadHtml());
        }
        for (row = 0; row < rowCnt; row++) {
            html += this.renderDayRowHtml(row, this.isRigid);
        }
        this.el.html(html);
        this.rowEls = this.el.find('.fc-row');
        this.cellEls = this.el.find('.fc-day, .fc-disabled-day');
        this.rowCoordCache = new CoordCache_1.default({
            els: this.rowEls,
            isVertical: true
        });
        this.colCoordCache = new CoordCache_1.default({
            els: this.cellEls.slice(0, this.colCnt),
            isHorizontal: true
        });
        // trigger dayRender with each cell's element
        for (row = 0; row < rowCnt; row++) {
            for (col = 0; col < colCnt; col++) {
                this.publiclyTrigger('dayRender', {
                    context: view,
                    args: [
                        this.getCellDate(row, col),
                        this.getCellEl(row, col),
                        view
                    ]
                });
            }
        }
    };
    // Generates the HTML for a single row, which is a div that wraps a table.
    // `row` is the row number.
    DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
        var theme = this.view.calendar.theme;
        var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
        if (isRigid) {
            classes.push('fc-rigid');
        }
        return '' +
            '<div class="' + classes.join(' ') + '">' +
            '<div class="fc-bg">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            this.renderBgTrHtml(row) +
            '</table>' +
            '</div>' +
            '<div class="fc-content-skeleton">' +
            '<table>' +
            (this.getIsNumbersVisible() ?
                '<thead>' +
                    this.renderNumberTrHtml(row) +
                    '</thead>' :
                '') +
            '</table>' +
            '</div>' +
            '</div>';
    };
    DayGrid.prototype.getIsNumbersVisible = function () {
        return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible;
    };
    DayGrid.prototype.getIsDayNumbersVisible = function () {
        return this.rowCnt > 1;
    };
    /* Grid Number Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.renderNumberTrHtml = function (row) {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderNumberIntroHtml(row)) +
            this.renderNumberCellsHtml(row) +
            (this.isRTL ? this.renderNumberIntroHtml(row) : '') +
            '</tr>';
    };
    DayGrid.prototype.renderNumberIntroHtml = function (row) {
        return this.renderIntroHtml();
    };
    DayGrid.prototype.renderNumberCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(row, col);
            htmls.push(this.renderNumberCellHtml(date));
        }
        return htmls.join('');
    };
    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
    // The number row will only exist if either day numbers or week numbers are turned on.
    DayGrid.prototype.renderNumberCellHtml = function (date) {
        var view = this.view;
        var html = '';
        var isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        var classes;
        var weekCalcFirstDoW;
        if (!isDayNumberVisible && !this.cellWeekNumbersVisible) {
            // no numbers in day cell (week number must be along the side)
            return '<td/>'; //  will create an empty space above events :(
        }
        classes = this.getDayClasses(date);
        classes.unshift('fc-day-top');
        if (this.cellWeekNumbersVisible) {
            // To determine the day of week number change under ISO, we cannot
            // rely on moment.js methods such as firstDayOfWeek() or weekday(),
            // because they rely on the locale's dow (possibly overridden by
            // our firstDay option), which may not be Monday. We cannot change
            // dow, because that would affect the calendar start day as well.
            if (date._locale._fullCalendar_weekCalc === 'ISO') {
                weekCalcFirstDoW = 1; // Monday by ISO 8601 definition
            }
            else {
                weekCalcFirstDoW = date._locale.firstDayOfWeek();
            }
        }
        html += '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format() + '"' :
                '') +
            '>';
        if (this.cellWeekNumbersVisible && (date.day() === weekCalcFirstDoW)) {
            html += view.buildGotoAnchorHtml({ date: date, type: 'week' }, { 'class': 'fc-week-number' }, date.format('w') // inner HTML
            );
        }
        if (isDayNumberVisible) {
            html += view.buildGotoAnchorHtml(date, { 'class': 'fc-day-number' }, date.format('D') // inner HTML
            );
        }
        html += '</td>';
        return html;
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.prepareHits = function () {
        this.colCoordCache.build();
        this.rowCoordCache.build();
        this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
    };
    DayGrid.prototype.releaseHits = function () {
        this.colCoordCache.clear();
        this.rowCoordCache.clear();
    };
    DayGrid.prototype.queryHit = function (leftOffset, topOffset) {
        if (this.colCoordCache.isLeftInBounds(leftOffset) && this.rowCoordCache.isTopInBounds(topOffset)) {
            var col = this.colCoordCache.getHorizontalIndex(leftOffset);
            var row = this.rowCoordCache.getVerticalIndex(topOffset);
            if (row != null && col != null) {
                return this.getCellHit(row, col);
            }
        }
    };
    DayGrid.prototype.getHitFootprint = function (hit) {
        var range = this.getCellRange(hit.row, hit.col);
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(range.start, range.end), true // all-day?
        );
    };
    DayGrid.prototype.getHitEl = function (hit) {
        return this.getCellEl(hit.row, hit.col);
    };
    /* Cell System
    ------------------------------------------------------------------------------------------------------------------*/
    // FYI: the first column is the leftmost column, regardless of date
    DayGrid.prototype.getCellHit = function (row, col) {
        return {
            row: row,
            col: col,
            component: this,
            left: this.colCoordCache.getLeftOffset(col),
            right: this.colCoordCache.getRightOffset(col),
            top: this.rowCoordCache.getTopOffset(row),
            bottom: this.rowCoordCache.getBottomOffset(row)
        };
    };
    DayGrid.prototype.getCellEl = function (row, col) {
        return this.cellEls.eq(row * this.colCnt + col);
    };
    /* Event Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    // Unrenders all events currently rendered on the grid
    DayGrid.prototype.executeEventUnrender = function () {
        this.removeSegPopover(); // removes the "more.." events popover
        _super.prototype.executeEventUnrender.call(this);
    };
    // Retrieves all rendered segment objects currently rendered on the grid
    DayGrid.prototype.getOwnEventSegs = function () {
        // append the segments from the "more..." popover
        return _super.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || []);
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event or external element being dragged.
    // `eventLocation` has zoned start and end (optional)
    DayGrid.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            this.renderHighlight(eventFootprints[i].componentFootprint);
        }
        // render drags from OTHER components as helpers
        if (eventFootprints.length && seg && seg.component !== this) {
            this.helperRenderer.renderEventDraggingFootprints(eventFootprints, seg, isTouch);
            return true; // signal helpers rendered
        }
    };
    // Unrenders any visual indication of a hovering event
    DayGrid.prototype.unrenderDrag = function () {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event being resized
    DayGrid.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            this.renderHighlight(eventFootprints[i].componentFootprint);
        }
        this.helperRenderer.renderEventResizingFootprints(eventFootprints, seg, isTouch);
    };
    // Unrenders a visual indication of an event being resized
    DayGrid.prototype.unrenderEventResize = function () {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
    };
    /* More+ Link Popover
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.removeSegPopover = function () {
        if (this.segPopover) {
            this.segPopover.hide(); // in handler, will call segPopover's removeElement
        }
    };
    // Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
    // `levelLimit` can be false (don't limit), a number, or true (should be computed).
    DayGrid.prototype.limitRows = function (levelLimit) {
        var rowStructs = this.eventRenderer.rowStructs || [];
        var row; // row #
        var rowLevelLimit;
        for (row = 0; row < rowStructs.length; row++) {
            this.unlimitRow(row);
            if (!levelLimit) {
                rowLevelLimit = false;
            }
            else if (typeof levelLimit === 'number') {
                rowLevelLimit = levelLimit;
            }
            else {
                rowLevelLimit = this.computeRowLevelLimit(row);
            }
            if (rowLevelLimit !== false) {
                this.limitRow(row, rowLevelLimit);
            }
        }
    };
    // Computes the number of levels a row will accomodate without going outside its bounds.
    // Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
    // `row` is the row number.
    DayGrid.prototype.computeRowLevelLimit = function (row) {
        var rowEl = this.rowEls.eq(row); // the containing "fake" row div
        var rowHeight = rowEl.height(); // TODO: cache somehow?
        var trEls = this.eventRenderer.rowStructs[row].tbodyEl.children();
        var i;
        var trEl;
        var trHeight;
        function iterInnerHeights(i, childNode) {
            trHeight = Math.max(trHeight, $(childNode).outerHeight());
        }
        // Reveal one level <tr> at a time and stop when we find one out of bounds
        for (i = 0; i < trEls.length; i++) {
            trEl = trEls.eq(i).removeClass('fc-limited'); // reset to original state (reveal)
            // with rowspans>1 and IE8, trEl.outerHeight() would return the height of the largest cell,
            // so instead, find the tallest inner content element.
            trHeight = 0;
            trEl.find('> td > :first-child').each(iterInnerHeights);
            if (trEl.position().top + trHeight > rowHeight) {
                return i;
            }
        }
        return false; // should not limit at all
    };
    // Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
    // `row` is the row number.
    // `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
    DayGrid.prototype.limitRow = function (row, levelLimit) {
        var _this = this;
        var rowStruct = this.eventRenderer.rowStructs[row];
        var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
        var col = 0; // col #, left-to-right (not chronologically)
        var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
        var cellMatrix; // a matrix (by level, then column) of all <td> jQuery elements in the row
        var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
        var i;
        var seg;
        var segsBelow; // array of segment objects below `seg` in the current `col`
        var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
        var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
        var td;
        var rowspan;
        var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
        var j;
        var moreTd;
        var moreWrap;
        var moreLink;
        // Iterates through empty level cells and places "more" links inside if need be
        var emptyCellsUntil = function (endCol) {
            while (col < endCol) {
                segsBelow = _this.getCellSegs(row, col, levelLimit);
                if (segsBelow.length) {
                    td = cellMatrix[levelLimit - 1][col];
                    moreLink = _this.renderMoreLink(row, col, segsBelow);
                    moreWrap = $('<div/>').append(moreLink);
                    td.append(moreWrap);
                    moreNodes.push(moreWrap[0]);
                }
                col++;
            }
        };
        if (levelLimit && levelLimit < rowStruct.segLevels.length) {
            levelSegs = rowStruct.segLevels[levelLimit - 1];
            cellMatrix = rowStruct.cellMatrix;
            limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit) // get level <tr> elements past the limit
                .addClass('fc-limited').get(); // hide elements and get a simple DOM-nodes array
            // iterate though segments in the last allowable level
            for (i = 0; i < levelSegs.length; i++) {
                seg = levelSegs[i];
                emptyCellsUntil(seg.leftCol); // process empty cells before the segment
                // determine *all* segments below `seg` that occupy the same columns
                colSegsBelow = [];
                totalSegsBelow = 0;
                while (col <= seg.rightCol) {
                    segsBelow = this.getCellSegs(row, col, levelLimit);
                    colSegsBelow.push(segsBelow);
                    totalSegsBelow += segsBelow.length;
                    col++;
                }
                if (totalSegsBelow) {
                    td = cellMatrix[levelLimit - 1][seg.leftCol]; // the segment's parent cell
                    rowspan = td.attr('rowspan') || 1;
                    segMoreNodes = [];
                    // make a replacement <td> for each column the segment occupies. will be one for each colspan
                    for (j = 0; j < colSegsBelow.length; j++) {
                        moreTd = $('<td class="fc-more-cell"/>').attr('rowspan', rowspan);
                        segsBelow = colSegsBelow[j];
                        moreLink = this.renderMoreLink(row, seg.leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
                        );
                        moreWrap = $('<div/>').append(moreLink);
                        moreTd.append(moreWrap);
                        segMoreNodes.push(moreTd[0]);
                        moreNodes.push(moreTd[0]);
                    }
                    td.addClass('fc-limited').after($(segMoreNodes)); // hide original <td> and inject replacements
                    limitedNodes.push(td[0]);
                }
            }
            emptyCellsUntil(this.colCnt); // finish off the level
            rowStruct.moreEls = $(moreNodes); // for easy undoing later
            rowStruct.limitedEls = $(limitedNodes); // for easy undoing later
        }
    };
    // Reveals all levels and removes all "more"-related elements for a grid's row.
    // `row` is a row number.
    DayGrid.prototype.unlimitRow = function (row) {
        var rowStruct = this.eventRenderer.rowStructs[row];
        if (rowStruct.moreEls) {
            rowStruct.moreEls.remove();
            rowStruct.moreEls = null;
        }
        if (rowStruct.limitedEls) {
            rowStruct.limitedEls.removeClass('fc-limited');
            rowStruct.limitedEls = null;
        }
    };
    // Renders an <a> element that represents hidden event element for a cell.
    // Responsible for attaching click handler as well.
    DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
        var _this = this;
        var view = this.view;
        return $('<a class="fc-more"/>')
            .text(this.getMoreLinkText(hiddenSegs.length))
            .on('click', function (ev) {
            var clickOption = _this.opt('eventLimitClick');
            var date = _this.getCellDate(row, col);
            var moreEl = $(ev.currentTarget);
            var dayEl = _this.getCellEl(row, col);
            var allSegs = _this.getCellSegs(row, col);
            // rescope the segments to be within the cell's date
            var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
            var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
            if (typeof clickOption === 'function') {
                // the returned value can be an atomic option
                clickOption = _this.publiclyTrigger('eventLimitClick', {
                    context: view,
                    args: [
                        {
                            date: date.clone(),
                            dayEl: dayEl,
                            moreEl: moreEl,
                            segs: reslicedAllSegs,
                            hiddenSegs: reslicedHiddenSegs
                        },
                        ev,
                        view
                    ]
                });
            }
            if (clickOption === 'popover') {
                _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
            }
            else if (typeof clickOption === 'string') {
                view.calendar.zoomTo(date, clickOption);
            }
        });
    };
    // Reveals the popover that displays all events within a cell
    DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
        var _this = this;
        var view = this.view;
        var moreWrap = moreLink.parent(); // the <div> wrapper around the <a>
        var topEl; // the element we want to match the top coordinate of
        var options;
        if (this.rowCnt === 1) {
            topEl = view.el; // will cause the popover to cover any sort of header
        }
        else {
            topEl = this.rowEls.eq(row); // will align with top of row
        }
        options = {
            className: 'fc-more-popover ' + view.calendar.theme.getClass('popover'),
            content: this.renderSegPopoverContent(row, col, segs),
            parentEl: view.el,
            top: topEl.offset().top,
            autoHide: true,
            viewportConstrain: this.opt('popoverViewportConstrain'),
            hide: function () {
                // kill everything when the popover is hidden
                // notify events to be removed
                if (_this.popoverSegs) {
                    _this.triggerBeforeEventSegsDestroyed(_this.popoverSegs);
                }
                _this.segPopover.removeElement();
                _this.segPopover = null;
                _this.popoverSegs = null;
            }
        };
        // Determine horizontal coordinate.
        // We use the moreWrap instead of the <td> to avoid border confusion.
        if (this.isRTL) {
            options.right = moreWrap.offset().left + moreWrap.outerWidth() + 1; // +1 to be over cell border
        }
        else {
            options.left = moreWrap.offset().left - 1; // -1 to be over cell border
        }
        this.segPopover = new Popover_1.default(options);
        this.segPopover.show();
        // the popover doesn't live within the grid's container element, and thus won't get the event
        // delegated-handlers for free. attach event-related handlers to the popover.
        this.bindAllSegHandlersToEl(this.segPopover.el);
        this.triggerAfterEventSegsRendered(segs);
    };
    // Builds the inner DOM contents of the segment popover
    DayGrid.prototype.renderSegPopoverContent = function (row, col, segs) {
        var view = this.view;
        var theme = view.calendar.theme;
        var title = this.getCellDate(row, col).format(this.opt('dayPopoverFormat'));
        var content = $('<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
            '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
            '<span class="fc-title">' +
            util_1.htmlEscape(title) +
            '</span>' +
            '<div class="fc-clear"/>' +
            '</div>' +
            '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
            '<div class="fc-event-container"></div>' +
            '</div>');
        var segContainer = content.find('.fc-event-container');
        var i;
        // render each seg's `el` and only return the visible segs
        segs = this.eventRenderer.renderFgSegEls(segs, true); // disableResizing=true
        this.popoverSegs = segs;
        for (i = 0; i < segs.length; i++) {
            // because segments in the popover are not part of a grid coordinate system, provide a hint to any
            // grids that want to do drag-n-drop about which cell it came from
            this.hitsNeeded();
            segs[i].hit = this.getCellHit(row, col);
            this.hitsNotNeeded();
            segContainer.append(segs[i].el);
        }
        return content;
    };
    // Given the events within an array of segment objects, reslice them to be in a single day
    DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
        var dayStart = dayDate.clone();
        var dayEnd = dayStart.clone().add(1, 'days');
        var dayRange = new UnzonedRange_1.default(dayStart, dayEnd);
        var newSegs = [];
        var i;
        var seg;
        var slicedRange;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            slicedRange = seg.footprint.componentFootprint.unzonedRange.intersect(dayRange);
            if (slicedRange) {
                newSegs.push($.extend({}, seg, {
                    footprint: new EventFootprint_1.default(new ComponentFootprint_1.default(slicedRange, seg.footprint.componentFootprint.isAllDay), seg.footprint.eventDef, seg.footprint.eventInstance),
                    isStart: seg.isStart && slicedRange.isStart,
                    isEnd: seg.isEnd && slicedRange.isEnd
                }));
            }
        }
        // force an order because eventsToSegs doesn't guarantee one
        // TODO: research if still needed
        this.eventRenderer.sortEventSegs(newSegs);
        return newSegs;
    };
    // Generates the text that should be inside a "more" link, given the number of events it represents
    DayGrid.prototype.getMoreLinkText = function (num) {
        var opt = this.opt('eventLimitText');
        if (typeof opt === 'function') {
            return opt(num);
        }
        else {
            return '+' + num + ' ' + opt;
        }
    };
    // Returns segments within a given cell.
    // If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
    DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
        var level = startLevel || 0;
        var segs = [];
        var seg;
        while (level < segMatrix.length) {
            seg = segMatrix[level][col];
            if (seg) {
                segs.push(seg);
            }
            level++;
        }
        return segs;
    };
    return DayGrid;
}(InteractiveDateComponent_1.default));
exports.default = DayGrid;
DayGrid.prototype.eventRendererClass = DayGridEventRenderer_1.default;
DayGrid.prototype.businessHourRendererClass = BusinessHourRenderer_1.default;
DayGrid.prototype.helperRendererClass = DayGridHelperRenderer_1.default;
DayGrid.prototype.fillRendererClass = DayGridFillRenderer_1.default;
StandardInteractionsMixin_1.default.mixInto(DayGrid);
DayTableMixin_1.default.mixInto(DayGrid);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Scroller_1 = __webpack_require__(39);
var View_1 = __webpack_require__(41);
var BasicViewDateProfileGenerator_1 = __webpack_require__(228);
var DayGrid_1 = __webpack_require__(61);
/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var BasicView = /** @class */ (function (_super) {
    tslib_1.__extends(BasicView, _super);
    function BasicView(calendar, viewSpec) {
        var _this = _super.call(this, calendar, viewSpec) || this;
        _this.dayGrid = _this.instantiateDayGrid();
        _this.dayGrid.isRigid = _this.hasRigidRows();
        if (_this.opt('weekNumbers')) {
            if (_this.opt('weekNumbersWithinDays')) {
                _this.dayGrid.cellWeekNumbersVisible = true;
                _this.dayGrid.colWeekNumbersVisible = false;
            }
            else {
                _this.dayGrid.cellWeekNumbersVisible = false;
                _this.dayGrid.colWeekNumbersVisible = true;
            }
        }
        _this.addChild(_this.dayGrid);
        _this.scroller = new Scroller_1.default({
            overflowX: 'hidden',
            overflowY: 'auto'
        });
        return _this;
    }
    // Generates the DayGrid object this view needs. Draws from this.dayGridClass
    BasicView.prototype.instantiateDayGrid = function () {
        // generate a subclass on the fly with BasicView-specific behavior
        // TODO: cache this subclass
        var subclass = makeDayGridSubclass(this.dayGridClass);
        return new subclass(this);
    };
    BasicView.prototype.executeDateRender = function (dateProfile) {
        this.dayGrid.breakOnWeeks = /year|month|week/.test(dateProfile.currentRangeUnit);
        _super.prototype.executeDateRender.call(this, dateProfile);
    };
    BasicView.prototype.renderSkeleton = function () {
        var dayGridContainerEl;
        var dayGridEl;
        this.el.addClass('fc-basic-view').html(this.renderSkeletonHtml());
        this.scroller.render();
        dayGridContainerEl = this.scroller.el.addClass('fc-day-grid-container');
        dayGridEl = $('<div class="fc-day-grid" />').appendTo(dayGridContainerEl);
        this.el.find('.fc-body > tr > td').append(dayGridContainerEl);
        this.dayGrid.headContainerEl = this.el.find('.fc-head-container');
        this.dayGrid.setElement(dayGridEl);
    };
    BasicView.prototype.unrenderSkeleton = function () {
        this.dayGrid.removeElement();
        this.scroller.destroy();
    };
    // Builds the HTML skeleton for the view.
    // The day-grid component will render inside of a container defined by this HTML.
    BasicView.prototype.renderSkeletonHtml = function () {
        var theme = this.calendar.theme;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (this.opt('columnHeader') ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    // Generates an HTML attribute string for setting the width of the week number column, if it is known
    BasicView.prototype.weekNumberStyleAttr = function () {
        if (this.weekNumberWidth != null) {
            return 'style="width:' + this.weekNumberWidth + 'px"';
        }
        return '';
    };
    // Determines whether each row should have a constant height
    BasicView.prototype.hasRigidRows = function () {
        var eventLimit = this.opt('eventLimit');
        return eventLimit && typeof eventLimit !== 'number';
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    // Refreshes the horizontal dimensions of the view
    BasicView.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        var eventLimit = this.opt('eventLimit');
        var headRowEl = this.dayGrid.headContainerEl.find('.fc-row');
        var scrollerHeight;
        var scrollbarWidths;
        // hack to give the view some height prior to dayGrid's columns being rendered
        // TODO: separate setting height from scroller VS dayGrid.
        if (!this.dayGrid.rowEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        if (this.dayGrid.colWeekNumbersVisible) {
            // Make sure all week number cells running down the side have the same width.
            // Record the width for cells created later.
            this.weekNumberWidth = util_1.matchCellWidths(this.el.find('.fc-week-number'));
        }
        // reset all heights to be natural
        this.scroller.clear();
        util_1.uncompensateScroll(headRowEl);
        this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
        // is the event limit a constant level number?
        if (eventLimit && typeof eventLimit === 'number') {
            this.dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
        }
        // distribute the height to the rows
        // (totalHeight is a "recommended" value if isAuto)
        scrollerHeight = this.computeScrollerHeight(totalHeight);
        this.setGridHeight(scrollerHeight, isAuto);
        // is the event limit dynamically calculated?
        if (eventLimit && typeof eventLimit !== 'number') {
            this.dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
        }
        if (!isAuto) {
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) {
                util_1.compensateScroll(headRowEl, scrollbarWidths);
                // doing the scrollbar compensation might have created text overflow which created more height. redo
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    BasicView.prototype.computeScrollerHeight = function (totalHeight) {
        return totalHeight -
            util_1.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    // Sets the height of just the DayGrid component in this view
    BasicView.prototype.setGridHeight = function (height, isAuto) {
        if (isAuto) {
            util_1.undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
        }
        else {
            util_1.distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
        }
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    BasicView.prototype.computeInitialDateScroll = function () {
        return { top: 0 };
    };
    BasicView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    BasicView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    return BasicView;
}(View_1.default));
exports.default = BasicView;
BasicView.prototype.dateProfileGeneratorClass = BasicViewDateProfileGenerator_1.default;
BasicView.prototype.dayGridClass = DayGrid_1.default;
// customize the rendering behavior of BasicView's dayGrid
function makeDayGridSubclass(SuperClass) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(SubClass, _super);
        function SubClass() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.colWeekNumbersVisible = false; // display week numbers along the side?
            return _this;
        }
        // Generates the HTML that will go before the day-of week header cells
        SubClass.prototype.renderHeadIntroHtml = function () {
            var view = this.view;
            if (this.colWeekNumbersVisible) {
                return '' +
                    '<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
                    '<span>' + // needed for matchCellWidths
                    util_1.htmlEscape(this.opt('weekNumberTitle')) +
                    '</span>' +
                    '</th>';
            }
            return '';
        };
        // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
        SubClass.prototype.renderNumberIntroHtml = function (row) {
            var view = this.view;
            var weekStart = this.getCellDate(row, 0);
            if (this.colWeekNumbersVisible) {
                return '' +
                    '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
                    view.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                    { date: weekStart, type: 'week', forceOff: this.colCnt === 1 }, weekStart.format('w') // inner HTML
                    ) +
                    '</td>';
            }
            return '';
        };
        // Generates the HTML that goes before the day bg cells for each day-row
        SubClass.prototype.renderBgIntroHtml = function () {
            var view = this.view;
            if (this.colWeekNumbersVisible) {
                return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
                    view.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        // Generates the HTML that goes before every other type of row generated by DayGrid.
        // Affects helper-skeleton and highlight-skeleton rows.
        SubClass.prototype.renderIntroHtml = function () {
            var view = this.view;
            if (this.colWeekNumbersVisible) {
                return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        SubClass.prototype.getIsNumbersVisible = function () {
            return DayGrid_1.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible;
        };
        return SubClass;
    }(SuperClass));
}


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var EventDefParser_1 = __webpack_require__(49);
var EventSource_1 = __webpack_require__(6);
var util_1 = __webpack_require__(35);
var Constraints = /** @class */ (function () {
    function Constraints(eventManager, _calendar) {
        this.eventManager = eventManager;
        this._calendar = _calendar;
    }
    Constraints.prototype.opt = function (name) {
        return this._calendar.opt(name);
    };
    /*
    determines if eventInstanceGroup is allowed,
    in relation to other EVENTS and business hours.
    */
    Constraints.prototype.isEventInstanceGroupAllowed = function (eventInstanceGroup) {
        var eventDef = eventInstanceGroup.getEventDef();
        var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
        var i;
        var peerEventInstances = this.getPeerEventInstances(eventDef);
        var peerEventRanges = peerEventInstances.map(util_1.eventInstanceToEventRange);
        var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);
        var constraintVal = eventDef.getConstraint();
        var overlapVal = eventDef.getOverlap();
        var eventAllowFunc = this.opt('eventAllow');
        for (i = 0; i < eventFootprints.length; i++) {
            if (!this.isFootprintAllowed(eventFootprints[i].componentFootprint, peerEventFootprints, constraintVal, overlapVal, eventFootprints[i].eventInstance)) {
                return false;
            }
        }
        if (eventAllowFunc) {
            for (i = 0; i < eventFootprints.length; i++) {
                if (eventAllowFunc(eventFootprints[i].componentFootprint.toLegacy(this._calendar), eventFootprints[i].getEventLegacy()) === false) {
                    return false;
                }
            }
        }
        return true;
    };
    Constraints.prototype.getPeerEventInstances = function (eventDef) {
        return this.eventManager.getEventInstancesWithoutId(eventDef.id);
    };
    Constraints.prototype.isSelectionFootprintAllowed = function (componentFootprint) {
        var peerEventInstances = this.eventManager.getEventInstances();
        var peerEventRanges = peerEventInstances.map(util_1.eventInstanceToEventRange);
        var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);
        var selectAllowFunc;
        if (this.isFootprintAllowed(componentFootprint, peerEventFootprints, this.opt('selectConstraint'), this.opt('selectOverlap'))) {
            selectAllowFunc = this.opt('selectAllow');
            if (selectAllowFunc) {
                return selectAllowFunc(componentFootprint.toLegacy(this._calendar)) !== false;
            }
            else {
                return true;
            }
        }
        return false;
    };
    Constraints.prototype.isFootprintAllowed = function (componentFootprint, peerEventFootprints, constraintVal, overlapVal, subjectEventInstance // optional
    ) {
        var constraintFootprints; // ComponentFootprint[]
        var overlapEventFootprints; // EventFootprint[]
        if (constraintVal != null) {
            constraintFootprints = this.constraintValToFootprints(constraintVal, componentFootprint.isAllDay);
            if (!this.isFootprintWithinConstraints(componentFootprint, constraintFootprints)) {
                return false;
            }
        }
        overlapEventFootprints = this.collectOverlapEventFootprints(peerEventFootprints, componentFootprint);
        if (overlapVal === false) {
            if (overlapEventFootprints.length) {
                return false;
            }
        }
        else if (typeof overlapVal === 'function') {
            if (!isOverlapsAllowedByFunc(overlapEventFootprints, overlapVal, subjectEventInstance)) {
                return false;
            }
        }
        if (subjectEventInstance) {
            if (!isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance)) {
                return false;
            }
        }
        return true;
    };
    // Constraint
    // ------------------------------------------------------------------------------------------------
    Constraints.prototype.isFootprintWithinConstraints = function (componentFootprint, constraintFootprints) {
        var i;
        for (i = 0; i < constraintFootprints.length; i++) {
            if (this.footprintContainsFootprint(constraintFootprints[i], componentFootprint)) {
                return true;
            }
        }
        return false;
    };
    Constraints.prototype.constraintValToFootprints = function (constraintVal, isAllDay) {
        var eventInstances;
        if (constraintVal === 'businessHours') {
            return this.buildCurrentBusinessFootprints(isAllDay);
        }
        else if (typeof constraintVal === 'object') {
            eventInstances = this.parseEventDefToInstances(constraintVal); // handles recurring events
            if (!eventInstances) {
                return this.parseFootprints(constraintVal);
            }
            else {
                return this.eventInstancesToFootprints(eventInstances);
            }
        }
        else if (constraintVal != null) {
            eventInstances = this.eventManager.getEventInstancesWithId(constraintVal);
            return this.eventInstancesToFootprints(eventInstances);
        }
    };
    // returns ComponentFootprint[]
    // uses current view's range
    Constraints.prototype.buildCurrentBusinessFootprints = function (isAllDay) {
        var view = this._calendar.view;
        var businessHourGenerator = view.get('businessHourGenerator');
        var unzonedRange = view.dateProfile.activeUnzonedRange;
        var eventInstanceGroup = businessHourGenerator.buildEventInstanceGroup(isAllDay, unzonedRange);
        if (eventInstanceGroup) {
            return this.eventInstancesToFootprints(eventInstanceGroup.eventInstances);
        }
        else {
            return [];
        }
    };
    // conversion util
    Constraints.prototype.eventInstancesToFootprints = function (eventInstances) {
        var eventRanges = eventInstances.map(util_1.eventInstanceToEventRange);
        var eventFootprints = this.eventRangesToEventFootprints(eventRanges);
        return eventFootprints.map(util_1.eventFootprintToComponentFootprint);
    };
    // Overlap
    // ------------------------------------------------------------------------------------------------
    Constraints.prototype.collectOverlapEventFootprints = function (peerEventFootprints, targetFootprint) {
        var overlapEventFootprints = [];
        var i;
        for (i = 0; i < peerEventFootprints.length; i++) {
            if (this.footprintsIntersect(targetFootprint, peerEventFootprints[i].componentFootprint)) {
                overlapEventFootprints.push(peerEventFootprints[i]);
            }
        }
        return overlapEventFootprints;
    };
    // Conversion: eventDefs -> eventInstances -> eventRanges -> eventFootprints -> componentFootprints
    // ------------------------------------------------------------------------------------------------
    // NOTE: this might seem like repetitive code with the Grid class, however, this code is related to
    // constraints whereas the Grid code is related to rendering. Each approach might want to convert
    // eventRanges -> eventFootprints in a different way. Regardless, there are opportunities to make
    // this more DRY.
    /*
    Returns false on invalid input.
    */
    Constraints.prototype.parseEventDefToInstances = function (eventInput) {
        var eventManager = this.eventManager;
        var eventDef = EventDefParser_1.default.parse(eventInput, new EventSource_1.default(this._calendar));
        if (!eventDef) {
            return false;
        }
        return eventDef.buildInstances(eventManager.currentPeriod.unzonedRange);
    };
    Constraints.prototype.eventRangesToEventFootprints = function (eventRanges) {
        var i;
        var eventFootprints = [];
        for (i = 0; i < eventRanges.length; i++) {
            eventFootprints.push.apply(// footprints
            eventFootprints, this.eventRangeToEventFootprints(eventRanges[i]));
        }
        return eventFootprints;
    };
    Constraints.prototype.eventRangeToEventFootprints = function (eventRange) {
        return [util_1.eventRangeToEventFootprint(eventRange)];
    };
    /*
    Parses footprints directly.
    Very similar to EventDateProfile::parse :(
    */
    Constraints.prototype.parseFootprints = function (rawInput) {
        var start;
        var end;
        if (rawInput.start) {
            start = this._calendar.moment(rawInput.start);
            if (!start.isValid()) {
                start = null;
            }
        }
        if (rawInput.end) {
            end = this._calendar.moment(rawInput.end);
            if (!end.isValid()) {
                end = null;
            }
        }
        return [
            new ComponentFootprint_1.default(new UnzonedRange_1.default(start, end), (start && !start.hasTime()) || (end && !end.hasTime()) // isAllDay
            )
        ];
    };
    // Footprint Utils
    // ----------------------------------------------------------------------------------------
    Constraints.prototype.footprintContainsFootprint = function (outerFootprint, innerFootprint) {
        return outerFootprint.unzonedRange.containsRange(innerFootprint.unzonedRange);
    };
    Constraints.prototype.footprintsIntersect = function (footprint0, footprint1) {
        return footprint0.unzonedRange.intersectsWith(footprint1.unzonedRange);
    };
    return Constraints;
}());
exports.default = Constraints;
// optional subjectEventInstance
function isOverlapsAllowedByFunc(overlapEventFootprints, overlapFunc, subjectEventInstance) {
    var i;
    for (i = 0; i < overlapEventFootprints.length; i++) {
        if (!overlapFunc(overlapEventFootprints[i].eventInstance.toLegacy(), subjectEventInstance ? subjectEventInstance.toLegacy() : null)) {
            return false;
        }
    }
    return true;
}
function isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance) {
    var subjectLegacyInstance = subjectEventInstance.toLegacy();
    var i;
    var overlapEventInstance;
    var overlapEventDef;
    var overlapVal;
    for (i = 0; i < overlapEventFootprints.length; i++) {
        overlapEventInstance = overlapEventFootprints[i].eventInstance;
        overlapEventDef = overlapEventInstance.def;
        // don't need to pass in calendar, because don't want to consider global eventOverlap property,
        // because we already considered that earlier in the process.
        overlapVal = overlapEventDef.getOverlap();
        if (overlapVal === false) {
            return false;
        }
        else if (typeof overlapVal === 'function') {
            if (!overlapVal(overlapEventInstance.toLegacy(), subjectLegacyInstance)) {
                return false;
            }
        }
    }
    return true;
}


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/*
USAGE:
  import { default as ParsableModelMixin, ParsableModelInterface } from './ParsableModelMixin'
in class:
  applyProps: ParsableModelInterface['applyProps']
  applyManualStandardProps: ParsableModelInterface['applyManualStandardProps']
  applyMiscProps: ParsableModelInterface['applyMiscProps']
  isStandardProp: ParsableModelInterface['isStandardProp']
  static defineStandardProps = ParsableModelMixin.defineStandardProps
  static copyVerbatimStandardProps = ParsableModelMixin.copyVerbatimStandardProps
after class:
  ParsableModelMixin.mixInto(TheClass)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var Mixin_1 = __webpack_require__(14);
var ParsableModelMixin = /** @class */ (function (_super) {
    tslib_1.__extends(ParsableModelMixin, _super);
    function ParsableModelMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParsableModelMixin.defineStandardProps = function (propDefs) {
        var proto = this.prototype;
        if (!proto.hasOwnProperty('standardPropMap')) {
            proto.standardPropMap = Object.create(proto.standardPropMap);
        }
        util_1.copyOwnProps(propDefs, proto.standardPropMap);
    };
    ParsableModelMixin.copyVerbatimStandardProps = function (src, dest) {
        var map = this.prototype.standardPropMap;
        var propName;
        for (propName in map) {
            if (src[propName] != null && // in the src object?
                map[propName] === true // false means "copy verbatim"
            ) {
                dest[propName] = src[propName];
            }
        }
    };
    /*
    Returns true/false for success.
    Meant to be only called ONCE, at object creation.
    */
    ParsableModelMixin.prototype.applyProps = function (rawProps) {
        var standardPropMap = this.standardPropMap;
        var manualProps = {};
        var miscProps = {};
        var propName;
        for (propName in rawProps) {
            if (standardPropMap[propName] === true) {
                this[propName] = rawProps[propName];
            }
            else if (standardPropMap[propName] === false) {
                manualProps[propName] = rawProps[propName];
            }
            else {
                miscProps[propName] = rawProps[propName];
            }
        }
        this.applyMiscProps(miscProps);
        return this.applyManualStandardProps(manualProps);
    };
    /*
    If subclasses override, they must call this supermethod and return the boolean response.
    Meant to be only called ONCE, at object creation.
    */
    ParsableModelMixin.prototype.applyManualStandardProps = function (rawProps) {
        return true;
    };
    /*
    Can be called even after initial object creation.
    */
    ParsableModelMixin.prototype.applyMiscProps = function (rawProps) {
        // subclasses can implement
    };
    /*
    TODO: why is this a method when defineStandardProps is static
    */
    ParsableModelMixin.prototype.isStandardProp = function (propName) {
        return propName in this.standardPropMap;
    };
    return ParsableModelMixin;
}(Mixin_1.default));
exports.default = ParsableModelMixin;
ParsableModelMixin.prototype.standardPropMap = {}; // will be cloned by defineStandardProps


/***/ }),
/* 209 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventInstance = /** @class */ (function () {
    function EventInstance(def, dateProfile) {
        this.def = def;
        this.dateProfile = dateProfile;
    }
    EventInstance.prototype.toLegacy = function () {
        var dateProfile = this.dateProfile;
        var obj = this.def.toLegacy();
        obj.start = dateProfile.start.clone();
        obj.end = dateProfile.end ? dateProfile.end.clone() : null;
        return obj;
    };
    return EventInstance;
}());
exports.default = EventInstance;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var EventDef_1 = __webpack_require__(34);
var EventInstance_1 = __webpack_require__(209);
var EventDateProfile_1 = __webpack_require__(17);
var RecurringEventDef = /** @class */ (function (_super) {
    tslib_1.__extends(RecurringEventDef, _super);
    function RecurringEventDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecurringEventDef.prototype.isAllDay = function () {
        return !this.startTime && !this.endTime;
    };
    RecurringEventDef.prototype.buildInstances = function (unzonedRange) {
        var calendar = this.source.calendar;
        var unzonedDate = unzonedRange.getStart();
        var unzonedEnd = unzonedRange.getEnd();
        var zonedDayStart;
        var instanceStart;
        var instanceEnd;
        var instances = [];
        while (unzonedDate.isBefore(unzonedEnd)) {
            // if everyday, or this particular day-of-week
            if (!this.dowHash || this.dowHash[unzonedDate.day()]) {
                zonedDayStart = calendar.applyTimezone(unzonedDate);
                instanceStart = zonedDayStart.clone();
                instanceEnd = null;
                if (this.startTime) {
                    instanceStart.time(this.startTime);
                }
                else {
                    instanceStart.stripTime();
                }
                if (this.endTime) {
                    instanceEnd = zonedDayStart.clone().time(this.endTime);
                }
                instances.push(new EventInstance_1.default(this, // definition
                new EventDateProfile_1.default(instanceStart, instanceEnd, calendar)));
            }
            unzonedDate.add(1, 'days');
        }
        return instances;
    };
    RecurringEventDef.prototype.setDow = function (dowNumbers) {
        if (!this.dowHash) {
            this.dowHash = {};
        }
        for (var i = 0; i < dowNumbers.length; i++) {
            this.dowHash[dowNumbers[i]] = true;
        }
    };
    RecurringEventDef.prototype.clone = function () {
        var def = _super.prototype.clone.call(this);
        if (def.startTime) {
            def.startTime = moment.duration(this.startTime);
        }
        if (def.endTime) {
            def.endTime = moment.duration(this.endTime);
        }
        if (this.dowHash) {
            def.dowHash = $.extend({}, this.dowHash);
        }
        return def;
    };
    return RecurringEventDef;
}(EventDef_1.default));
exports.default = RecurringEventDef;
/*
HACK to work with TypeScript mixins
NOTE: if super-method fails, should still attempt to apply
*/
RecurringEventDef.prototype.applyProps = function (rawProps) {
    var superSuccess = EventDef_1.default.prototype.applyProps.call(this, rawProps);
    if (rawProps.start) {
        this.startTime = moment.duration(rawProps.start);
    }
    if (rawProps.end) {
        this.endTime = moment.duration(rawProps.end);
    }
    if (rawProps.dow) {
        this.setDow(rawProps.dow);
    }
    return superSuccess;
};
// Parsing
// ---------------------------------------------------------------------------------------------------------------------
RecurringEventDef.defineStandardProps({
    start: false,
    end: false,
    dow: false
});


/***/ }),
/* 211 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventRange = /** @class */ (function () {
    function EventRange(unzonedRange, eventDef, eventInstance) {
        this.unzonedRange = unzonedRange;
        this.eventDef = eventDef;
        if (eventInstance) {
            this.eventInstance = eventInstance;
        }
    }
    return EventRange;
}());
exports.default = EventRange;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(35);
var EventInstanceGroup_1 = __webpack_require__(18);
var RecurringEventDef_1 = __webpack_require__(210);
var EventSource_1 = __webpack_require__(6);
var BUSINESS_HOUR_EVENT_DEFAULTS = {
    start: '09:00',
    end: '17:00',
    dow: [1, 2, 3, 4, 5],
    rendering: 'inverse-background'
    // classNames are defined in businessHoursSegClasses
};
var BusinessHourGenerator = /** @class */ (function () {
    function BusinessHourGenerator(rawComplexDef, calendar) {
        this.rawComplexDef = rawComplexDef;
        this.calendar = calendar;
    }
    BusinessHourGenerator.prototype.buildEventInstanceGroup = function (isAllDay, unzonedRange) {
        var eventDefs = this.buildEventDefs(isAllDay);
        var eventInstanceGroup;
        if (eventDefs.length) {
            eventInstanceGroup = new EventInstanceGroup_1.default(util_1.eventDefsToEventInstances(eventDefs, unzonedRange));
            // so that inverse-background rendering can happen even when no eventRanges in view
            eventInstanceGroup.explicitEventDef = eventDefs[0];
            return eventInstanceGroup;
        }
    };
    BusinessHourGenerator.prototype.buildEventDefs = function (isAllDay) {
        var rawComplexDef = this.rawComplexDef;
        var rawDefs = [];
        var requireDow = false;
        var i;
        var defs = [];
        if (rawComplexDef === true) {
            rawDefs = [{}]; // will get BUSINESS_HOUR_EVENT_DEFAULTS verbatim
        }
        else if ($.isPlainObject(rawComplexDef)) {
            rawDefs = [rawComplexDef];
        }
        else if ($.isArray(rawComplexDef)) {
            rawDefs = rawComplexDef;
            requireDow = true; // every sub-definition NEEDS a day-of-week
        }
        for (i = 0; i < rawDefs.length; i++) {
            if (!requireDow || rawDefs[i].dow) {
                defs.push(this.buildEventDef(isAllDay, rawDefs[i]));
            }
        }
        return defs;
    };
    BusinessHourGenerator.prototype.buildEventDef = function (isAllDay, rawDef) {
        var fullRawDef = $.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, rawDef);
        if (isAllDay) {
            fullRawDef.start = null;
            fullRawDef.end = null;
        }
        return RecurringEventDef_1.default.parse(fullRawDef, new EventSource_1.default(this.calendar) // dummy source
        );
    };
    return BusinessHourGenerator;
}());
exports.default = BusinessHourGenerator;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var StandardTheme = /** @class */ (function (_super) {
    tslib_1.__extends(StandardTheme, _super);
    function StandardTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardTheme;
}(Theme_1.default));
exports.default = StandardTheme;
StandardTheme.prototype.classes = {
    widget: 'fc-unthemed',
    widgetHeader: 'fc-widget-header',
    widgetContent: 'fc-widget-content',
    buttonGroup: 'fc-button-group',
    button: 'fc-button',
    cornerLeft: 'fc-corner-left',
    cornerRight: 'fc-corner-right',
    stateDefault: 'fc-state-default',
    stateActive: 'fc-state-active',
    stateDisabled: 'fc-state-disabled',
    stateHover: 'fc-state-hover',
    stateDown: 'fc-state-down',
    popoverHeader: 'fc-widget-header',
    popoverContent: 'fc-widget-content',
    // day grid
    headerRow: 'fc-widget-header',
    dayRow: 'fc-widget-content',
    // list view
    listView: 'fc-widget-content'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
    close: 'fc-icon-x',
    prev: 'fc-icon-left-single-arrow',
    next: 'fc-icon-right-single-arrow',
    prevYear: 'fc-icon-left-double-arrow',
    nextYear: 'fc-icon-right-double-arrow'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons';
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var JqueryUiTheme = /** @class */ (function (_super) {
    tslib_1.__extends(JqueryUiTheme, _super);
    function JqueryUiTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JqueryUiTheme;
}(Theme_1.default));
exports.default = JqueryUiTheme;
JqueryUiTheme.prototype.classes = {
    widget: 'ui-widget',
    widgetHeader: 'ui-widget-header',
    widgetContent: 'ui-widget-content',
    buttonGroup: 'fc-button-group',
    button: 'ui-button',
    cornerLeft: 'ui-corner-left',
    cornerRight: 'ui-corner-right',
    stateDefault: 'ui-state-default',
    stateActive: 'ui-state-active',
    stateDisabled: 'ui-state-disabled',
    stateHover: 'ui-state-hover',
    stateDown: 'ui-state-down',
    today: 'ui-state-highlight',
    popoverHeader: 'ui-widget-header',
    popoverContent: 'ui-widget-content',
    // day grid
    headerRow: 'ui-widget-header',
    dayRow: 'ui-widget-content',
    // list view
    listView: 'ui-widget-content'
};
JqueryUiTheme.prototype.baseIconClass = 'ui-icon';
JqueryUiTheme.prototype.iconClasses = {
    close: 'ui-icon-closethick',
    prev: 'ui-icon-circle-triangle-w',
    next: 'ui-icon-circle-triangle-e',
    prevYear: 'ui-icon-seek-prev',
    nextYear: 'ui-icon-seek-next'
};
JqueryUiTheme.prototype.iconOverrideOption = 'themeButtonIcons';
JqueryUiTheme.prototype.iconOverrideCustomButtonOption = 'themeIcon';
JqueryUiTheme.prototype.iconOverridePrefix = 'ui-icon-';


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var Promise_1 = __webpack_require__(20);
var EventSource_1 = __webpack_require__(6);
var FuncEventSource = /** @class */ (function (_super) {
    tslib_1.__extends(FuncEventSource, _super);
    function FuncEventSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FuncEventSource.parse = function (rawInput, calendar) {
        var rawProps;
        // normalize raw input
        if ($.isFunction(rawInput.events)) {
            rawProps = rawInput;
        }
        else if ($.isFunction(rawInput)) {
            rawProps = { events: rawInput };
        }
        if (rawProps) {
            return EventSource_1.default.parse.call(this, rawProps, calendar);
        }
        return false;
    };
    FuncEventSource.prototype.fetch = function (start, end, timezone) {
        var _this = this;
        this.calendar.pushLoading();
        return Promise_1.default.construct(function (onResolve) {
            _this.func.call(_this.calendar, start.clone(), end.clone(), timezone, function (rawEventDefs) {
                _this.calendar.popLoading();
                onResolve(_this.parseEventDefs(rawEventDefs));
            });
        });
    };
    FuncEventSource.prototype.getPrimitive = function () {
        return this.func;
    };
    FuncEventSource.prototype.applyManualStandardProps = function (rawProps) {
        var superSuccess = _super.prototype.applyManualStandardProps.call(this, rawProps);
        this.func = rawProps.events;
        return superSuccess;
    };
    return FuncEventSource;
}(EventSource_1.default));
exports.default = FuncEventSource;
FuncEventSource.defineStandardProps({
    events: false // don't automatically transfer
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Promise_1 = __webpack_require__(20);
var EventSource_1 = __webpack_require__(6);
var JsonFeedEventSource = /** @class */ (function (_super) {
    tslib_1.__extends(JsonFeedEventSource, _super);
    function JsonFeedEventSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonFeedEventSource.parse = function (rawInput, calendar) {
        var rawProps;
        // normalize raw input
        if (typeof rawInput.url === 'string') {
            rawProps = rawInput;
        }
        else if (typeof rawInput === 'string') {
            rawProps = { url: rawInput };
        }
        if (rawProps) {
            return EventSource_1.default.parse.call(this, rawProps, calendar);
        }
        return false;
    };
    JsonFeedEventSource.prototype.fetch = function (start, end, timezone) {
        var _this = this;
        var ajaxSettings = this.ajaxSettings;
        var onSuccess = ajaxSettings.success;
        var onError = ajaxSettings.error;
        var requestParams = this.buildRequestParams(start, end, timezone);
        // todo: eventually handle the promise's then,
        // don't intercept success/error
        // tho will be a breaking API change
        this.calendar.pushLoading();
        return Promise_1.default.construct(function (onResolve, onReject) {
            $.ajax($.extend({}, // destination
            JsonFeedEventSource.AJAX_DEFAULTS, ajaxSettings, {
                url: _this.url,
                data: requestParams,
                success: function (rawEventDefs, status, xhr) {
                    var callbackRes;
                    _this.calendar.popLoading();
                    if (rawEventDefs) {
                        callbackRes = util_1.applyAll(onSuccess, _this, [rawEventDefs, status, xhr]); // redirect `this`
                        if ($.isArray(callbackRes)) {
                            rawEventDefs = callbackRes;
                        }
                        onResolve(_this.parseEventDefs(rawEventDefs));
                    }
                    else {
                        onReject();
                    }
                },
                error: function (xhr, statusText, errorThrown) {
                    _this.calendar.popLoading();
                    util_1.applyAll(onError, _this, [xhr, statusText, errorThrown]); // redirect `this`
                    onReject();
                }
            }));
        });
    };
    JsonFeedEventSource.prototype.buildRequestParams = function (start, end, timezone) {
        var calendar = this.calendar;
        var ajaxSettings = this.ajaxSettings;
        var startParam;
        var endParam;
        var timezoneParam;
        var customRequestParams;
        var params = {};
        startParam = this.startParam;
        if (startParam == null) {
            startParam = calendar.opt('startParam');
        }
        endParam = this.endParam;
        if (endParam == null) {
            endParam = calendar.opt('endParam');
        }
        timezoneParam = this.timezoneParam;
        if (timezoneParam == null) {
            timezoneParam = calendar.opt('timezoneParam');
        }
        // retrieve any outbound GET/POST $.ajax data from the options
        if ($.isFunction(ajaxSettings.data)) {
            // supplied as a function that returns a key/value object
            customRequestParams = ajaxSettings.data();
        }
        else {
            // probably supplied as a straight key/value object
            customRequestParams = ajaxSettings.data || {};
        }
        $.extend(params, customRequestParams);
        params[startParam] = start.format();
        params[endParam] = end.format();
        if (timezone && timezone !== 'local') {
            params[timezoneParam] = timezone;
        }
        return params;
    };
    JsonFeedEventSource.prototype.getPrimitive = function () {
        return this.url;
    };
    JsonFeedEventSource.prototype.applyMiscProps = function (rawProps) {
        this.ajaxSettings = rawProps;
    };
    JsonFeedEventSource.AJAX_DEFAULTS = {
        dataType: 'json',
        cache: false
    };
    return JsonFeedEventSource;
}(EventSource_1.default));
exports.default = JsonFeedEventSource;
JsonFeedEventSource.defineStandardProps({
    // automatically transfer (true)...
    url: true,
    startParam: true,
    endParam: true,
    timezoneParam: true
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var EmitterMixin_1 = __webpack_require__(11);
var TaskQueue = /** @class */ (function () {
    function TaskQueue() {
        this.q = [];
        this.isPaused = false;
        this.isRunning = false;
    }
    TaskQueue.prototype.queue = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.q.push.apply(this.q, args); // append
        this.tryStart();
    };
    TaskQueue.prototype.pause = function () {
        this.isPaused = true;
    };
    TaskQueue.prototype.resume = function () {
        this.isPaused = false;
        this.tryStart();
    };
    TaskQueue.prototype.getIsIdle = function () {
        return !this.isRunning && !this.isPaused;
    };
    TaskQueue.prototype.tryStart = function () {
        if (!this.isRunning && this.canRunNext()) {
            this.isRunning = true;
            this.trigger('start');
            this.runRemaining();
        }
    };
    TaskQueue.prototype.canRunNext = function () {
        return !this.isPaused && this.q.length;
    };
    TaskQueue.prototype.runRemaining = function () {
        var _this = this;
        var task;
        var res;
        do {
            task = this.q.shift(); // always freshly reference q. might have been reassigned.
            res = this.runTask(task);
            if (res && res.then) {
                res.then(function () {
                    if (_this.canRunNext()) {
                        _this.runRemaining();
                    }
                });
                return; // prevent marking as stopped
            }
        } while (this.canRunNext());
        this.trigger('stop'); // not really a 'stop' ... more of a 'drained'
        this.isRunning = false;
        // if 'stop' handler added more tasks.... TODO: write test for this
        this.tryStart();
    };
    TaskQueue.prototype.runTask = function (task) {
        return task(); // task *is* the function, but subclasses can change the format of a task
    };
    return TaskQueue;
}());
exports.default = TaskQueue;
EmitterMixin_1.default.mixInto(TaskQueue);


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var TaskQueue_1 = __webpack_require__(217);
var RenderQueue = /** @class */ (function (_super) {
    tslib_1.__extends(RenderQueue, _super);
    function RenderQueue(waitsByNamespace) {
        var _this = _super.call(this) || this;
        _this.waitsByNamespace = waitsByNamespace || {};
        return _this;
    }
    RenderQueue.prototype.queue = function (taskFunc, namespace, type) {
        var task = {
            func: taskFunc,
            namespace: namespace,
            type: type
        };
        var waitMs;
        if (namespace) {
            waitMs = this.waitsByNamespace[namespace];
        }
        if (this.waitNamespace) {
            if (namespace === this.waitNamespace && waitMs != null) {
                this.delayWait(waitMs);
            }
            else {
                this.clearWait();
                this.tryStart();
            }
        }
        if (this.compoundTask(task)) {
            if (!this.waitNamespace && waitMs != null) {
                this.startWait(namespace, waitMs);
            }
            else {
                this.tryStart();
            }
        }
    };
    RenderQueue.prototype.startWait = function (namespace, waitMs) {
        this.waitNamespace = namespace;
        this.spawnWait(waitMs);
    };
    RenderQueue.prototype.delayWait = function (waitMs) {
        clearTimeout(this.waitId);
        this.spawnWait(waitMs);
    };
    RenderQueue.prototype.spawnWait = function (waitMs) {
        var _this = this;
        this.waitId = setTimeout(function () {
            _this.waitNamespace = null;
            _this.tryStart();
        }, waitMs);
    };
    RenderQueue.prototype.clearWait = function () {
        if (this.waitNamespace) {
            clearTimeout(this.waitId);
            this.waitId = null;
            this.waitNamespace = null;
        }
    };
    RenderQueue.prototype.canRunNext = function () {
        if (!_super.prototype.canRunNext.call(this)) {
            return false;
        }
        // waiting for a certain namespace to stop receiving tasks?
        if (this.waitNamespace) {
            var q = this.q;
            // if there was a different namespace task in the meantime,
            // that forces all previously-waiting tasks to suddenly execute.
            // TODO: find a way to do this in constant time.
            for (var i = 0; i < q.length; i++) {
                if (q[i].namespace !== this.waitNamespace) {
                    return true; // allow execution
                }
            }
            return false;
        }
        return true;
    };
    RenderQueue.prototype.runTask = function (task) {
        task.func();
    };
    RenderQueue.prototype.compoundTask = function (newTask) {
        var q = this.q;
        var shouldAppend = true;
        var i;
        var task;
        if (newTask.namespace && newTask.type === 'destroy') {
            // remove all init/add/remove ops with same namespace, regardless of order
            for (i = q.length - 1; i >= 0; i--) {
                task = q[i];
                switch (task.type) {
                    case 'init':
                        shouldAppend = false;
                    // the latest destroy is cancelled out by not doing the init
                    /* falls through */
                    case 'add':
                    /* falls through */
                    case 'remove':
                        q.splice(i, 1); // remove task
                }
            }
        }
        if (shouldAppend) {
            q.push(newTask);
        }
        return shouldAppend;
    };
    return RenderQueue;
}(TaskQueue_1.default));
exports.default = RenderQueue;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var moment_ext_1 = __webpack_require__(10);
var date_formatting_1 = __webpack_require__(47);
var Component_1 = __webpack_require__(237);
var util_2 = __webpack_require__(35);
var DateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateComponent, _super);
    function DateComponent(_view, _options) {
        var _this = _super.call(this) || this;
        _this.isRTL = false; // frequently accessed options
        _this.hitsNeededDepth = 0; // necessary because multiple callers might need the same hits
        _this.hasAllDayBusinessHours = false; // TODO: unify with largeUnit and isTimeScale?
        _this.isDatesRendered = false;
        // hack to set options prior to the this.opt calls
        if (_view) {
            _this['view'] = _view;
        }
        if (_options) {
            _this['options'] = _options;
        }
        _this.uid = String(DateComponent.guid++);
        _this.childrenByUid = {};
        _this.nextDayThreshold = moment.duration(_this.opt('nextDayThreshold'));
        _this.isRTL = _this.opt('isRTL');
        if (_this.fillRendererClass) {
            _this.fillRenderer = new _this.fillRendererClass(_this);
        }
        if (_this.eventRendererClass) {
            _this.eventRenderer = new _this.eventRendererClass(_this, _this.fillRenderer);
        }
        if (_this.helperRendererClass && _this.eventRenderer) {
            _this.helperRenderer = new _this.helperRendererClass(_this, _this.eventRenderer);
        }
        if (_this.businessHourRendererClass && _this.fillRenderer) {
            _this.businessHourRenderer = new _this.businessHourRendererClass(_this, _this.fillRenderer);
        }
        return _this;
    }
    DateComponent.prototype.addChild = function (child) {
        if (!this.childrenByUid[child.uid]) {
            this.childrenByUid[child.uid] = child;
            return true;
        }
        return false;
    };
    DateComponent.prototype.removeChild = function (child) {
        if (this.childrenByUid[child.uid]) {
            delete this.childrenByUid[child.uid];
            return true;
        }
        return false;
    };
    // TODO: only do if isInDom?
    // TODO: make part of Component, along with children/batch-render system?
    DateComponent.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        this.callChildren('updateSize', arguments);
    };
    // Options
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.opt = function (name) {
        return this._getView().opt(name); // default implementation
    };
    DateComponent.prototype.publiclyTrigger = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var calendar = this._getCalendar();
        return calendar.publiclyTrigger.apply(calendar, args);
    };
    DateComponent.prototype.hasPublicHandlers = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var calendar = this._getCalendar();
        return calendar.hasPublicHandlers.apply(calendar, args);
    };
    // Date
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.executeDateRender = function (dateProfile) {
        this.dateProfile = dateProfile; // for rendering
        this.renderDates(dateProfile);
        this.isDatesRendered = true;
        this.callChildren('executeDateRender', arguments);
    };
    DateComponent.prototype.executeDateUnrender = function () {
        this.callChildren('executeDateUnrender', arguments);
        this.dateProfile = null;
        this.unrenderDates();
        this.isDatesRendered = false;
    };
    // date-cell content only
    DateComponent.prototype.renderDates = function (dateProfile) {
        // subclasses should implement
    };
    // date-cell content only
    DateComponent.prototype.unrenderDates = function () {
        // subclasses should override
    };
    // Now-Indicator
    // -----------------------------------------------------------------------------------------------------------------
    // Returns a string unit, like 'second' or 'minute' that defined how often the current time indicator
    // should be refreshed. If something falsy is returned, no time indicator is rendered at all.
    DateComponent.prototype.getNowIndicatorUnit = function () {
        // subclasses should implement
    };
    // Renders a current time indicator at the given datetime
    DateComponent.prototype.renderNowIndicator = function (date) {
        this.callChildren('renderNowIndicator', arguments);
    };
    // Undoes the rendering actions from renderNowIndicator
    DateComponent.prototype.unrenderNowIndicator = function () {
        this.callChildren('unrenderNowIndicator', arguments);
    };
    // Business Hours
    // ---------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.renderBusinessHours = function (businessHourGenerator) {
        if (this.businessHourRenderer) {
            this.businessHourRenderer.render(businessHourGenerator);
        }
        this.callChildren('renderBusinessHours', arguments);
    };
    // Unrenders previously-rendered business-hours
    DateComponent.prototype.unrenderBusinessHours = function () {
        this.callChildren('unrenderBusinessHours', arguments);
        if (this.businessHourRenderer) {
            this.businessHourRenderer.unrender();
        }
    };
    // Event Displaying
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.executeEventRender = function (eventsPayload) {
        if (this.eventRenderer) {
            this.eventRenderer.rangeUpdated(); // poorly named now
            this.eventRenderer.render(eventsPayload);
        }
        else if (this['renderEvents']) {
            this['renderEvents'](convertEventsPayloadToLegacyArray(eventsPayload));
        }
        this.callChildren('executeEventRender', arguments);
    };
    DateComponent.prototype.executeEventUnrender = function () {
        this.callChildren('executeEventUnrender', arguments);
        if (this.eventRenderer) {
            this.eventRenderer.unrender();
        }
        else if (this['destroyEvents']) {
            this['destroyEvents']();
        }
    };
    DateComponent.prototype.getBusinessHourSegs = function () {
        var segs = this.getOwnBusinessHourSegs();
        this.iterChildren(function (child) {
            segs.push.apply(segs, child.getBusinessHourSegs());
        });
        return segs;
    };
    DateComponent.prototype.getOwnBusinessHourSegs = function () {
        if (this.businessHourRenderer) {
            return this.businessHourRenderer.getSegs();
        }
        return [];
    };
    DateComponent.prototype.getEventSegs = function () {
        var segs = this.getOwnEventSegs();
        this.iterChildren(function (child) {
            segs.push.apply(segs, child.getEventSegs());
        });
        return segs;
    };
    DateComponent.prototype.getOwnEventSegs = function () {
        if (this.eventRenderer) {
            return this.eventRenderer.getSegs();
        }
        return [];
    };
    // Event Rendering Triggering
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.triggerAfterEventsRendered = function () {
        this.triggerAfterEventSegsRendered(this.getEventSegs());
        this.publiclyTrigger('eventAfterAllRender', {
            context: this,
            args: [this]
        });
    };
    DateComponent.prototype.triggerAfterEventSegsRendered = function (segs) {
        var _this = this;
        // an optimization, because getEventLegacy is expensive
        if (this.hasPublicHandlers('eventAfterRender')) {
            segs.forEach(function (seg) {
                var legacy;
                if (seg.el) {
                    legacy = seg.footprint.getEventLegacy();
                    _this.publiclyTrigger('eventAfterRender', {
                        context: legacy,
                        args: [legacy, seg.el, _this]
                    });
                }
            });
        }
    };
    DateComponent.prototype.triggerBeforeEventsDestroyed = function () {
        this.triggerBeforeEventSegsDestroyed(this.getEventSegs());
    };
    DateComponent.prototype.triggerBeforeEventSegsDestroyed = function (segs) {
        var _this = this;
        if (this.hasPublicHandlers('eventDestroy')) {
            segs.forEach(function (seg) {
                var legacy;
                if (seg.el) {
                    legacy = seg.footprint.getEventLegacy();
                    _this.publiclyTrigger('eventDestroy', {
                        context: legacy,
                        args: [legacy, seg.el, _this]
                    });
                }
            });
        }
    };
    // Event Rendering Utils
    // -----------------------------------------------------------------------------------------------------------------
    // Hides all rendered event segments linked to the given event
    // RECURSIVE with subcomponents
    DateComponent.prototype.showEventsWithId = function (eventDefId) {
        this.getEventSegs().forEach(function (seg) {
            if (seg.footprint.eventDef.id === eventDefId &&
                seg.el // necessary?
            ) {
                seg.el.css('visibility', '');
            }
        });
        this.callChildren('showEventsWithId', arguments);
    };
    // Shows all rendered event segments linked to the given event
    // RECURSIVE with subcomponents
    DateComponent.prototype.hideEventsWithId = function (eventDefId) {
        this.getEventSegs().forEach(function (seg) {
            if (seg.footprint.eventDef.id === eventDefId &&
                seg.el // necessary?
            ) {
                seg.el.css('visibility', 'hidden');
            }
        });
        this.callChildren('hideEventsWithId', arguments);
    };
    // Drag-n-Drop Rendering (for both events and external elements)
    // ---------------------------------------------------------------------------------------------------------------
    // Renders a visual indication of a event or external-element drag over the given drop zone.
    // If an external-element, seg will be `null`.
    // Must return elements used for any mock events.
    DateComponent.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var renderedHelper = false;
        this.iterChildren(function (child) {
            if (child.renderDrag(eventFootprints, seg, isTouch)) {
                renderedHelper = true;
            }
        });
        return renderedHelper;
    };
    // Unrenders a visual indication of an event or external-element being dragged.
    DateComponent.prototype.unrenderDrag = function () {
        this.callChildren('unrenderDrag', arguments);
    };
    // Event Resizing
    // ---------------------------------------------------------------------------------------------------------------
    // Renders a visual indication of an event being resized.
    DateComponent.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        this.callChildren('renderEventResize', arguments);
    };
    // Unrenders a visual indication of an event being resized.
    DateComponent.prototype.unrenderEventResize = function () {
        this.callChildren('unrenderEventResize', arguments);
    };
    // Selection
    // ---------------------------------------------------------------------------------------------------------------
    // Renders a visual indication of the selection
    // TODO: rename to `renderSelection` after legacy is gone
    DateComponent.prototype.renderSelectionFootprint = function (componentFootprint) {
        this.renderHighlight(componentFootprint);
        this.callChildren('renderSelectionFootprint', arguments);
    };
    // Unrenders a visual indication of selection
    DateComponent.prototype.unrenderSelection = function () {
        this.unrenderHighlight();
        this.callChildren('unrenderSelection', arguments);
    };
    // Highlight
    // ---------------------------------------------------------------------------------------------------------------
    // Renders an emphasis on the given date range. Given a span (unzoned start/end and other misc data)
    DateComponent.prototype.renderHighlight = function (componentFootprint) {
        if (this.fillRenderer) {
            this.fillRenderer.renderFootprint('highlight', componentFootprint, {
                getClasses: function () {
                    return ['fc-highlight'];
                }
            });
        }
        this.callChildren('renderHighlight', arguments);
    };
    // Unrenders the emphasis on a date range
    DateComponent.prototype.unrenderHighlight = function () {
        if (this.fillRenderer) {
            this.fillRenderer.unrender('highlight');
        }
        this.callChildren('unrenderHighlight', arguments);
    };
    // Hit Areas
    // ---------------------------------------------------------------------------------------------------------------
    // just because all DateComponents support this interface
    // doesn't mean they need to have their own internal coord system. they can defer to sub-components.
    DateComponent.prototype.hitsNeeded = function () {
        if (!(this.hitsNeededDepth++)) {
            this.prepareHits();
        }
        this.callChildren('hitsNeeded', arguments);
    };
    DateComponent.prototype.hitsNotNeeded = function () {
        if (this.hitsNeededDepth && !(--this.hitsNeededDepth)) {
            this.releaseHits();
        }
        this.callChildren('hitsNotNeeded', arguments);
    };
    DateComponent.prototype.prepareHits = function () {
        // subclasses can implement
    };
    DateComponent.prototype.releaseHits = function () {
        // subclasses can implement
    };
    // Given coordinates from the topleft of the document, return data about the date-related area underneath.
    // Can return an object with arbitrary properties (although top/right/left/bottom are encouraged).
    // Must have a `grid` property, a reference to this current grid. TODO: avoid this
    // The returned object will be processed by getHitFootprint and getHitEl.
    DateComponent.prototype.queryHit = function (leftOffset, topOffset) {
        var childrenByUid = this.childrenByUid;
        var uid;
        var hit;
        for (uid in childrenByUid) {
            hit = childrenByUid[uid].queryHit(leftOffset, topOffset);
            if (hit) {
                break;
            }
        }
        return hit;
    };
    DateComponent.prototype.getSafeHitFootprint = function (hit) {
        var footprint = this.getHitFootprint(hit);
        if (!this.dateProfile.activeUnzonedRange.containsRange(footprint.unzonedRange)) {
            return null;
        }
        return footprint;
    };
    DateComponent.prototype.getHitFootprint = function (hit) {
        // what about being abstract!?
    };
    // Given position-level information about a date-related area within the grid,
    // should return a jQuery element that best represents it. passed to dayClick callback.
    DateComponent.prototype.getHitEl = function (hit) {
        // what about being abstract!?
    };
    /* Converting eventRange -> eventFootprint
    ------------------------------------------------------------------------------------------------------------------*/
    DateComponent.prototype.eventRangesToEventFootprints = function (eventRanges) {
        var eventFootprints = [];
        var i;
        for (i = 0; i < eventRanges.length; i++) {
            eventFootprints.push.apply(// append
            eventFootprints, this.eventRangeToEventFootprints(eventRanges[i]));
        }
        return eventFootprints;
    };
    DateComponent.prototype.eventRangeToEventFootprints = function (eventRange) {
        return [util_2.eventRangeToEventFootprint(eventRange)];
    };
    /* Converting componentFootprint/eventFootprint -> segs
    ------------------------------------------------------------------------------------------------------------------*/
    DateComponent.prototype.eventFootprintsToSegs = function (eventFootprints) {
        var segs = [];
        var i;
        for (i = 0; i < eventFootprints.length; i++) {
            segs.push.apply(segs, this.eventFootprintToSegs(eventFootprints[i]));
        }
        return segs;
    };
    // Given an event's span (unzoned start/end and other misc data), and the event itself,
    // slices into segments and attaches event-derived properties to them.
    // eventSpan - { start, end, isStart, isEnd, otherthings... }
    DateComponent.prototype.eventFootprintToSegs = function (eventFootprint) {
        var unzonedRange = eventFootprint.componentFootprint.unzonedRange;
        var segs;
        var i;
        var seg;
        segs = this.componentFootprintToSegs(eventFootprint.componentFootprint);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            if (!unzonedRange.isStart) {
                seg.isStart = false;
            }
            if (!unzonedRange.isEnd) {
                seg.isEnd = false;
            }
            seg.footprint = eventFootprint;
            // TODO: rename to seg.eventFootprint
        }
        return segs;
    };
    DateComponent.prototype.componentFootprintToSegs = function (componentFootprint) {
        return [];
    };
    // Utils
    // ---------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.callChildren = function (methodName, args) {
        this.iterChildren(function (child) {
            child[methodName].apply(child, args);
        });
    };
    DateComponent.prototype.iterChildren = function (func) {
        var childrenByUid = this.childrenByUid;
        var uid;
        for (uid in childrenByUid) {
            func(childrenByUid[uid]);
        }
    };
    DateComponent.prototype._getCalendar = function () {
        var t = this;
        return t.calendar || t.view.calendar;
    };
    DateComponent.prototype._getView = function () {
        return this.view;
    };
    DateComponent.prototype._getDateProfile = function () {
        return this._getView().get('dateProfile');
    };
    // Generates HTML for an anchor to another view into the calendar.
    // Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
    // `gotoOptions` can either be a moment input, or an object with the form:
    // { date, type, forceOff }
    // `type` is a view-type like "day" or "week". default value is "day".
    // `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
    DateComponent.prototype.buildGotoAnchorHtml = function (gotoOptions, attrs, innerHtml) {
        var date;
        var type;
        var forceOff;
        var finalOptions;
        if ($.isPlainObject(gotoOptions)) {
            date = gotoOptions.date;
            type = gotoOptions.type;
            forceOff = gotoOptions.forceOff;
        }
        else {
            date = gotoOptions; // a single moment input
        }
        date = moment_ext_1.default(date); // if a string, parse it
        finalOptions = {
            date: date.format('YYYY-MM-DD'),
            type: type || 'day'
        };
        if (typeof attrs === 'string') {
            innerHtml = attrs;
            attrs = null;
        }
        attrs = attrs ? ' ' + util_1.attrsToStr(attrs) : ''; // will have a leading space
        innerHtml = innerHtml || '';
        if (!forceOff && this.opt('navLinks')) {
            return '<a' + attrs +
                ' data-goto="' + util_1.htmlEscape(JSON.stringify(finalOptions)) + '">' +
                innerHtml +
                '</a>';
        }
        else {
            return '<span' + attrs + '>' +
                innerHtml +
                '</span>';
        }
    };
    DateComponent.prototype.getAllDayHtml = function () {
        return this.opt('allDayHtml') || util_1.htmlEscape(this.opt('allDayText'));
    };
    // Computes HTML classNames for a single-day element
    DateComponent.prototype.getDayClasses = function (date, noThemeHighlight) {
        var view = this._getView();
        var classes = [];
        var today;
        if (!this.dateProfile.activeUnzonedRange.containsDate(date)) {
            classes.push('fc-disabled-day'); // TODO: jQuery UI theme?
        }
        else {
            classes.push('fc-' + util_1.dayIDs[date.day()]);
            if (view.isDateInOtherMonth(date, this.dateProfile)) {
                classes.push('fc-other-month');
            }
            today = view.calendar.getNow();
            if (date.isSame(today, 'day')) {
                classes.push('fc-today');
                if (noThemeHighlight !== true) {
                    classes.push(view.calendar.theme.getClass('today'));
                }
            }
            else if (date < today) {
                classes.push('fc-past');
            }
            else {
                classes.push('fc-future');
            }
        }
        return classes;
    };
    // Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
    // Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
    // The timezones of the dates within `range` will be respected.
    DateComponent.prototype.formatRange = function (range, isAllDay, formatStr, separator) {
        var end = range.end;
        if (isAllDay) {
            end = end.clone().subtract(1); // convert to inclusive. last ms of previous day
        }
        return date_formatting_1.formatRange(range.start, end, formatStr, separator, this.isRTL);
    };
    // Compute the number of the give units in the "current" range.
    // Will return a floating-point number. Won't round.
    DateComponent.prototype.currentRangeAs = function (unit) {
        return this._getDateProfile().currentUnzonedRange.as(unit);
    };
    // Returns the date range of the full days the given range visually appears to occupy.
    // Returns a plain object with start/end, NOT an UnzonedRange!
    DateComponent.prototype.computeDayRange = function (unzonedRange) {
        var calendar = this._getCalendar();
        var startDay = calendar.msToUtcMoment(unzonedRange.startMs, true); // the beginning of the day the range starts
        var end = calendar.msToUtcMoment(unzonedRange.endMs);
        var endTimeMS = +end.time(); // # of milliseconds into `endDay`
        var endDay = end.clone().stripTime(); // the beginning of the day the range exclusively ends
        // If the end time is actually inclusively part of the next day and is equal to or
        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
        if (endTimeMS && endTimeMS >= this.nextDayThreshold) {
            endDay.add(1, 'days');
        }
        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
        if (endDay <= startDay) {
            endDay = startDay.clone().add(1, 'days');
        }
        return { start: startDay, end: endDay };
    };
    // Does the given range visually appear to occupy more than one day?
    DateComponent.prototype.isMultiDayRange = function (unzonedRange) {
        var dayRange = this.computeDayRange(unzonedRange);
        return dayRange.end.diff(dayRange.start, 'days') > 1;
    };
    DateComponent.guid = 0; // TODO: better system for this?
    return DateComponent;
}(Component_1.default));
exports.default = DateComponent;
// legacy
function convertEventsPayloadToLegacyArray(eventsPayload) {
    var eventDefId;
    var eventInstances;
    var legacyEvents = [];
    var i;
    for (eventDefId in eventsPayload) {
        eventInstances = eventsPayload[eventDefId].eventInstances;
        for (i = 0; i < eventInstances.length; i++) {
            legacyEvents.push(eventInstances[i].toLegacy());
        }
    }
    return legacyEvents;
}


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var options_1 = __webpack_require__(32);
var Iterator_1 = __webpack_require__(238);
var GlobalEmitter_1 = __webpack_require__(21);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
var Toolbar_1 = __webpack_require__(239);
var OptionsManager_1 = __webpack_require__(240);
var ViewSpecManager_1 = __webpack_require__(241);
var Constraints_1 = __webpack_require__(207);
var locale_1 = __webpack_require__(31);
var moment_ext_1 = __webpack_require__(10);
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var EventDateProfile_1 = __webpack_require__(17);
var EventManager_1 = __webpack_require__(242);
var BusinessHourGenerator_1 = __webpack_require__(212);
var EventSourceParser_1 = __webpack_require__(38);
var EventDefParser_1 = __webpack_require__(49);
var SingleEventDef_1 = __webpack_require__(13);
var EventDefMutation_1 = __webpack_require__(37);
var EventSource_1 = __webpack_require__(6);
var ThemeRegistry_1 = __webpack_require__(51);
var Calendar = /** @class */ (function () {
    function Calendar(el, overrides) {
        this.loadingLevel = 0; // number of simultaneous loading tasks
        this.ignoreUpdateViewSize = 0;
        this.freezeContentHeightDepth = 0;
        // declare the current calendar instance relies on GlobalEmitter. needed for garbage collection.
        // unneeded() is called in destroy.
        GlobalEmitter_1.default.needed();
        this.el = el;
        this.viewsByType = {};
        this.optionsManager = new OptionsManager_1.default(this, overrides);
        this.viewSpecManager = new ViewSpecManager_1.default(this.optionsManager, this);
        this.initMomentInternals(); // needs to happen after options hash initialized
        this.initCurrentDate();
        this.initEventManager();
        this.constraints = new Constraints_1.default(this.eventManager, this);
        this.constructed();
    }
    Calendar.prototype.constructed = function () {
        // useful for monkeypatching. used?
    };
    Calendar.prototype.getView = function () {
        return this.view;
    };
    Calendar.prototype.publiclyTrigger = function (name, triggerInfo) {
        var optHandler = this.opt(name);
        var context;
        var args;
        if ($.isPlainObject(triggerInfo)) {
            context = triggerInfo.context;
            args = triggerInfo.args;
        }
        else if ($.isArray(triggerInfo)) {
            args = triggerInfo;
        }
        if (context == null) {
            context = this.el[0]; // fallback context
        }
        if (!args) {
            args = [];
        }
        this.triggerWith(name, context, args); // Emitter's method
        if (optHandler) {
            return optHandler.apply(context, args);
        }
    };
    Calendar.prototype.hasPublicHandlers = function (name) {
        return this.hasHandlers(name) ||
            this.opt(name); // handler specified in options
    };
    // Options Public API
    // -----------------------------------------------------------------------------------------------------------------
    // public getter/setter
    Calendar.prototype.option = function (name, value) {
        var newOptionHash;
        if (typeof name === 'string') {
            if (value === undefined) {
                return this.optionsManager.get(name);
            }
            else {
                newOptionHash = {};
                newOptionHash[name] = value;
                this.optionsManager.add(newOptionHash);
            }
        }
        else if (typeof name === 'object') {
            this.optionsManager.add(name);
        }
    };
    // private getter
    Calendar.prototype.opt = function (name) {
        return this.optionsManager.get(name);
    };
    // View
    // -----------------------------------------------------------------------------------------------------------------
    // Given a view name for a custom view or a standard view, creates a ready-to-go View object
    Calendar.prototype.instantiateView = function (viewType) {
        var spec = this.viewSpecManager.getViewSpec(viewType);
        if (!spec) {
            throw new Error("View type \"" + viewType + "\" is not valid");
        }
        return new spec['class'](this, spec);
    };
    // Returns a boolean about whether the view is okay to instantiate at some point
    Calendar.prototype.isValidViewType = function (viewType) {
        return Boolean(this.viewSpecManager.getViewSpec(viewType));
    };
    Calendar.prototype.changeView = function (viewName, dateOrRange) {
        if (dateOrRange) {
            if (dateOrRange.start && dateOrRange.end) {
                this.optionsManager.recordOverrides({
                    visibleRange: dateOrRange
                });
            }
            else {
                this.currentDate = this.moment(dateOrRange).stripZone(); // just like gotoDate
            }
        }
        this.renderView(viewName);
    };
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    Calendar.prototype.zoomTo = function (newDate, viewType) {
        var spec;
        viewType = viewType || 'day'; // day is default zoom
        spec = this.viewSpecManager.getViewSpec(viewType) ||
            this.viewSpecManager.getUnitViewSpec(viewType);
        this.currentDate = newDate.clone();
        this.renderView(spec ? spec.type : null);
    };
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initCurrentDate = function () {
        var defaultDateInput = this.opt('defaultDate');
        // compute the initial ambig-timezone date
        if (defaultDateInput != null) {
            this.currentDate = this.moment(defaultDateInput).stripZone();
        }
        else {
            this.currentDate = this.getNow(); // getNow already returns unzoned
        }
    };
    Calendar.prototype.prev = function () {
        var view = this.view;
        var prevInfo = view.dateProfileGenerator.buildPrev(view.get('dateProfile'));
        if (prevInfo.isValid) {
            this.currentDate = prevInfo.date;
            this.renderView();
        }
    };
    Calendar.prototype.next = function () {
        var view = this.view;
        var nextInfo = view.dateProfileGenerator.buildNext(view.get('dateProfile'));
        if (nextInfo.isValid) {
            this.currentDate = nextInfo.date;
            this.renderView();
        }
    };
    Calendar.prototype.prevYear = function () {
        this.currentDate.add(-1, 'years');
        this.renderView();
    };
    Calendar.prototype.nextYear = function () {
        this.currentDate.add(1, 'years');
        this.renderView();
    };
    Calendar.prototype.today = function () {
        this.currentDate = this.getNow(); // should deny like prev/next?
        this.renderView();
    };
    Calendar.prototype.gotoDate = function (zonedDateInput) {
        this.currentDate = this.moment(zonedDateInput).stripZone();
        this.renderView();
    };
    Calendar.prototype.incrementDate = function (delta) {
        this.currentDate.add(moment.duration(delta));
        this.renderView();
    };
    // for external API
    Calendar.prototype.getDate = function () {
        return this.applyTimezone(this.currentDate); // infuse the calendar's timezone
    };
    // Loading Triggering
    // -----------------------------------------------------------------------------------------------------------------
    // Should be called when any type of async data fetching begins
    Calendar.prototype.pushLoading = function () {
        if (!(this.loadingLevel++)) {
            this.publiclyTrigger('loading', [true, this.view]);
        }
    };
    // Should be called when any type of async data fetching completes
    Calendar.prototype.popLoading = function () {
        if (!(--this.loadingLevel)) {
            this.publiclyTrigger('loading', [false, this.view]);
        }
    };
    // High-level Rendering
    // -----------------------------------------------------------------------------------
    Calendar.prototype.render = function () {
        if (!this.contentEl) {
            this.initialRender();
        }
        else if (this.elementVisible()) {
            // mainly for the public API
            this.calcSize();
            this.updateViewSize();
        }
    };
    Calendar.prototype.initialRender = function () {
        var _this = this;
        var el = this.el;
        el.addClass('fc');
        // event delegation for nav links
        el.on('click.fc', 'a[data-goto]', function (ev) {
            var anchorEl = $(ev.currentTarget);
            var gotoOptions = anchorEl.data('goto'); // will automatically parse JSON
            var date = _this.moment(gotoOptions.date);
            var viewType = gotoOptions.type;
            // property like "navLinkDayClick". might be a string or a function
            var customAction = _this.view.opt('navLink' + util_1.capitaliseFirstLetter(viewType) + 'Click');
            if (typeof customAction === 'function') {
                customAction(date, ev);
            }
            else {
                if (typeof customAction === 'string') {
                    viewType = customAction;
                }
                _this.zoomTo(date, viewType);
            }
        });
        // called immediately, and upon option change
        this.optionsManager.watch('settingTheme', ['?theme', '?themeSystem'], function (opts) {
            var themeClass = ThemeRegistry_1.getThemeSystemClass(opts.themeSystem || opts.theme);
            var theme = new themeClass(_this.optionsManager);
            var widgetClass = theme.getClass('widget');
            _this.theme = theme;
            if (widgetClass) {
                el.addClass(widgetClass);
            }
        }, function () {
            var widgetClass = _this.theme.getClass('widget');
            _this.theme = null;
            if (widgetClass) {
                el.removeClass(widgetClass);
            }
        });
        this.optionsManager.watch('settingBusinessHourGenerator', ['?businessHours'], function (deps) {
            _this.businessHourGenerator = new BusinessHourGenerator_1.default(deps.businessHours, _this);
            if (_this.view) {
                _this.view.set('businessHourGenerator', _this.businessHourGenerator);
            }
        }, function () {
            _this.businessHourGenerator = null;
        });
        // called immediately, and upon option change.
        // HACK: locale often affects isRTL, so we explicitly listen to that too.
        this.optionsManager.watch('applyingDirClasses', ['?isRTL', '?locale'], function (opts) {
            el.toggleClass('fc-ltr', !opts.isRTL);
            el.toggleClass('fc-rtl', opts.isRTL);
        });
        this.contentEl = $("<div class='fc-view-container'/>").prependTo(el);
        this.initToolbars();
        this.renderHeader();
        this.renderFooter();
        this.renderView(this.opt('defaultView'));
        if (this.opt('handleWindowResize')) {
            $(window).resize(this.windowResizeProxy = util_1.debounce(// prevents rapid calls
            this.windowResize.bind(this), this.opt('windowResizeDelay')));
        }
    };
    Calendar.prototype.destroy = function () {
        if (this.view) {
            this.clearView();
        }
        this.toolbarsManager.proxyCall('removeElement');
        this.contentEl.remove();
        this.el.removeClass('fc fc-ltr fc-rtl');
        // removes theme-related root className
        this.optionsManager.unwatch('settingTheme');
        this.optionsManager.unwatch('settingBusinessHourGenerator');
        this.el.off('.fc'); // unbind nav link handlers
        if (this.windowResizeProxy) {
            $(window).unbind('resize', this.windowResizeProxy);
            this.windowResizeProxy = null;
        }
        GlobalEmitter_1.default.unneeded();
    };
    Calendar.prototype.elementVisible = function () {
        return this.el.is(':visible');
    };
    // Render Queue
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.bindViewHandlers = function (view) {
        var _this = this;
        view.watch('titleForCalendar', ['title'], function (deps) {
            if (view === _this.view) {
                _this.setToolbarsTitle(deps.title);
            }
        });
        view.watch('dateProfileForCalendar', ['dateProfile'], function (deps) {
            if (view === _this.view) {
                _this.currentDate = deps.dateProfile.date; // might have been constrained by view dates
                _this.updateToolbarButtons(deps.dateProfile);
            }
        });
    };
    Calendar.prototype.unbindViewHandlers = function (view) {
        view.unwatch('titleForCalendar');
        view.unwatch('dateProfileForCalendar');
    };
    // View Rendering
    // -----------------------------------------------------------------------------------
    // Renders a view because of a date change, view-type change, or for the first time.
    // If not given a viewType, keep the current view but render different dates.
    // Accepts an optional scroll state to restore to.
    Calendar.prototype.renderView = function (viewType) {
        var oldView = this.view;
        var newView;
        this.freezeContentHeight();
        if (oldView && viewType && oldView.type !== viewType) {
            this.clearView();
        }
        // if viewType changed, or the view was never created, create a fresh view
        if (!this.view && viewType) {
            newView = this.view =
                this.viewsByType[viewType] ||
                    (this.viewsByType[viewType] = this.instantiateView(viewType));
            this.bindViewHandlers(newView);
            newView.startBatchRender(); // so that setElement+setDate rendering are joined
            newView.setElement($("<div class='fc-view fc-" + viewType + "-view' />").appendTo(this.contentEl));
            this.toolbarsManager.proxyCall('activateButton', viewType);
        }
        if (this.view) {
            // prevent unnecessary change firing
            if (this.view.get('businessHourGenerator') !== this.businessHourGenerator) {
                this.view.set('businessHourGenerator', this.businessHourGenerator);
            }
            this.view.setDate(this.currentDate);
            if (newView) {
                newView.stopBatchRender();
            }
        }
        this.thawContentHeight();
    };
    // Unrenders the current view and reflects this change in the Header.
    // Unregsiters the `view`, but does not remove from viewByType hash.
    Calendar.prototype.clearView = function () {
        var currentView = this.view;
        this.toolbarsManager.proxyCall('deactivateButton', currentView.type);
        this.unbindViewHandlers(currentView);
        currentView.removeElement();
        currentView.unsetDate(); // so bindViewHandlers doesn't fire with old values next time
        this.view = null;
    };
    // Destroys the view, including the view object. Then, re-instantiates it and renders it.
    // Maintains the same scroll state.
    // TODO: maintain any other user-manipulated state.
    Calendar.prototype.reinitView = function () {
        var oldView = this.view;
        var scroll = oldView.queryScroll(); // wouldn't be so complicated if Calendar owned the scroll
        this.freezeContentHeight();
        this.clearView();
        this.calcSize();
        this.renderView(oldView.type); // needs the type to freshly render
        this.view.applyScroll(scroll);
        this.thawContentHeight();
    };
    // Resizing
    // -----------------------------------------------------------------------------------
    Calendar.prototype.getSuggestedViewHeight = function () {
        if (this.suggestedViewHeight == null) {
            this.calcSize();
        }
        return this.suggestedViewHeight;
    };
    Calendar.prototype.isHeightAuto = function () {
        return this.opt('contentHeight') === 'auto' || this.opt('height') === 'auto';
    };
    Calendar.prototype.updateViewSize = function (isResize) {
        if (isResize === void 0) { isResize = false; }
        var view = this.view;
        var scroll;
        if (!this.ignoreUpdateViewSize && view) {
            if (isResize) {
                this.calcSize();
                scroll = view.queryScroll();
            }
            this.ignoreUpdateViewSize++;
            view.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), isResize);
            this.ignoreUpdateViewSize--;
            if (isResize) {
                view.applyScroll(scroll);
            }
            return true; // signal success
        }
    };
    Calendar.prototype.calcSize = function () {
        if (this.elementVisible()) {
            this._calcSize();
        }
    };
    Calendar.prototype._calcSize = function () {
        var contentHeightInput = this.opt('contentHeight');
        var heightInput = this.opt('height');
        if (typeof contentHeightInput === 'number') {
            this.suggestedViewHeight = contentHeightInput;
        }
        else if (typeof contentHeightInput === 'function') {
            this.suggestedViewHeight = contentHeightInput();
        }
        else if (typeof heightInput === 'number') {
            this.suggestedViewHeight = heightInput - this.queryToolbarsHeight();
        }
        else if (typeof heightInput === 'function') {
            this.suggestedViewHeight = heightInput() - this.queryToolbarsHeight();
        }
        else if (heightInput === 'parent') {
            this.suggestedViewHeight = this.el.parent().height() - this.queryToolbarsHeight();
        }
        else {
            this.suggestedViewHeight = Math.round(this.contentEl.width() /
                Math.max(this.opt('aspectRatio'), .5));
        }
    };
    Calendar.prototype.windowResize = function (ev) {
        if (
        // the purpose: so we don't process jqui "resize" events that have bubbled up
        // cast to any because .target, which is Element, can't be compared to window for some reason.
        ev.target === window &&
            this.view &&
            this.view.isDatesRendered) {
            if (this.updateViewSize(true)) {
                this.publiclyTrigger('windowResize', [this.view]);
            }
        }
    };
    /* Height "Freezing"
    -----------------------------------------------------------------------------*/
    Calendar.prototype.freezeContentHeight = function () {
        if (!(this.freezeContentHeightDepth++)) {
            this.forceFreezeContentHeight();
        }
    };
    Calendar.prototype.forceFreezeContentHeight = function () {
        this.contentEl.css({
            width: '100%',
            height: this.contentEl.height(),
            overflow: 'hidden'
        });
    };
    Calendar.prototype.thawContentHeight = function () {
        this.freezeContentHeightDepth--;
        // always bring back to natural height
        this.contentEl.css({
            width: '',
            height: '',
            overflow: ''
        });
        // but if there are future thaws, re-freeze
        if (this.freezeContentHeightDepth) {
            this.forceFreezeContentHeight();
        }
    };
    // Toolbar
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initToolbars = function () {
        this.header = new Toolbar_1.default(this, this.computeHeaderOptions());
        this.footer = new Toolbar_1.default(this, this.computeFooterOptions());
        this.toolbarsManager = new Iterator_1.default([this.header, this.footer]);
    };
    Calendar.prototype.computeHeaderOptions = function () {
        return {
            extraClasses: 'fc-header-toolbar',
            layout: this.opt('header')
        };
    };
    Calendar.prototype.computeFooterOptions = function () {
        return {
            extraClasses: 'fc-footer-toolbar',
            layout: this.opt('footer')
        };
    };
    // can be called repeatedly and Header will rerender
    Calendar.prototype.renderHeader = function () {
        var header = this.header;
        header.setToolbarOptions(this.computeHeaderOptions());
        header.render();
        if (header.el) {
            this.el.prepend(header.el);
        }
    };
    // can be called repeatedly and Footer will rerender
    Calendar.prototype.renderFooter = function () {
        var footer = this.footer;
        footer.setToolbarOptions(this.computeFooterOptions());
        footer.render();
        if (footer.el) {
            this.el.append(footer.el);
        }
    };
    Calendar.prototype.setToolbarsTitle = function (title) {
        this.toolbarsManager.proxyCall('updateTitle', title);
    };
    Calendar.prototype.updateToolbarButtons = function (dateProfile) {
        var now = this.getNow();
        var view = this.view;
        var todayInfo = view.dateProfileGenerator.build(now);
        var prevInfo = view.dateProfileGenerator.buildPrev(view.get('dateProfile'));
        var nextInfo = view.dateProfileGenerator.buildNext(view.get('dateProfile'));
        this.toolbarsManager.proxyCall((todayInfo.isValid && !dateProfile.currentUnzonedRange.containsDate(now)) ?
            'enableButton' :
            'disableButton', 'today');
        this.toolbarsManager.proxyCall(prevInfo.isValid ?
            'enableButton' :
            'disableButton', 'prev');
        this.toolbarsManager.proxyCall(nextInfo.isValid ?
            'enableButton' :
            'disableButton', 'next');
    };
    Calendar.prototype.queryToolbarsHeight = function () {
        return this.toolbarsManager.items.reduce(function (accumulator, toolbar) {
            var toolbarHeight = toolbar.el ? toolbar.el.outerHeight(true) : 0; // includes margin
            return accumulator + toolbarHeight;
        }, 0);
    };
    // Selection
    // -----------------------------------------------------------------------------------------------------------------
    // this public method receives start/end dates in any format, with any timezone
    Calendar.prototype.select = function (zonedStartInput, zonedEndInput) {
        this.view.select(this.buildSelectFootprint.apply(this, arguments));
    };
    Calendar.prototype.unselect = function () {
        if (this.view) {
            this.view.unselect();
        }
    };
    // Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
    Calendar.prototype.buildSelectFootprint = function (zonedStartInput, zonedEndInput) {
        var start = this.moment(zonedStartInput).stripZone();
        var end;
        if (zonedEndInput) {
            end = this.moment(zonedEndInput).stripZone();
        }
        else if (start.hasTime()) {
            end = start.clone().add(this.defaultTimedEventDuration);
        }
        else {
            end = start.clone().add(this.defaultAllDayEventDuration);
        }
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(start, end), !start.hasTime());
    };
    // Date Utils
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initMomentInternals = function () {
        var _this = this;
        this.defaultAllDayEventDuration = moment.duration(this.opt('defaultAllDayEventDuration'));
        this.defaultTimedEventDuration = moment.duration(this.opt('defaultTimedEventDuration'));
        // Called immediately, and when any of the options change.
        // Happens before any internal objects rebuild or rerender, because this is very core.
        this.optionsManager.watch('buildingMomentLocale', [
            '?locale', '?monthNames', '?monthNamesShort', '?dayNames', '?dayNamesShort',
            '?firstDay', '?weekNumberCalculation'
        ], function (opts) {
            var weekNumberCalculation = opts.weekNumberCalculation;
            var firstDay = opts.firstDay;
            var _week;
            // normalize
            if (weekNumberCalculation === 'iso') {
                weekNumberCalculation = 'ISO'; // normalize
            }
            var localeData = Object.create(// make a cheap copy
            locale_1.getMomentLocaleData(opts.locale) // will fall back to en
            );
            if (opts.monthNames) {
                localeData._months = opts.monthNames;
            }
            if (opts.monthNamesShort) {
                localeData._monthsShort = opts.monthNamesShort;
            }
            if (opts.dayNames) {
                localeData._weekdays = opts.dayNames;
            }
            if (opts.dayNamesShort) {
                localeData._weekdaysShort = opts.dayNamesShort;
            }
            if (firstDay == null && weekNumberCalculation === 'ISO') {
                firstDay = 1;
            }
            if (firstDay != null) {
                _week = Object.create(localeData._week); // _week: { dow: # }
                _week.dow = firstDay;
                localeData._week = _week;
            }
            if (weekNumberCalculation === 'ISO' ||
                weekNumberCalculation === 'local' ||
                typeof weekNumberCalculation === 'function') {
                localeData._fullCalendar_weekCalc = weekNumberCalculation; // moment-ext will know what to do with it
            }
            _this.localeData = localeData;
            // If the internal current date object already exists, move to new locale.
            // We do NOT need to do this technique for event dates, because this happens when converting to "segments".
            if (_this.currentDate) {
                _this.localizeMoment(_this.currentDate); // sets to localeData
            }
        });
    };
    // Builds a moment using the settings of the current calendar: timezone and locale.
    // Accepts anything the vanilla moment() constructor accepts.
    Calendar.prototype.moment = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var mom;
        if (this.opt('timezone') === 'local') {
            mom = moment_ext_1.default.apply(null, args);
            // Force the moment to be local, because momentExt doesn't guarantee it.
            if (mom.hasTime()) {
                mom.local();
            }
        }
        else if (this.opt('timezone') === 'UTC') {
            mom = moment_ext_1.default.utc.apply(null, args); // process as UTC
        }
        else {
            mom = moment_ext_1.default.parseZone.apply(null, args); // let the input decide the zone
        }
        this.localizeMoment(mom); // TODO
        return mom;
    };
    Calendar.prototype.msToMoment = function (ms, forceAllDay) {
        var mom = moment_ext_1.default.utc(ms); // TODO: optimize by using Date.UTC
        if (forceAllDay) {
            mom.stripTime();
        }
        else {
            mom = this.applyTimezone(mom); // may or may not apply locale
        }
        this.localizeMoment(mom);
        return mom;
    };
    Calendar.prototype.msToUtcMoment = function (ms, forceAllDay) {
        var mom = moment_ext_1.default.utc(ms); // TODO: optimize by using Date.UTC
        if (forceAllDay) {
            mom.stripTime();
        }
        this.localizeMoment(mom);
        return mom;
    };
    // Updates the given moment's locale settings to the current calendar locale settings.
    Calendar.prototype.localizeMoment = function (mom) {
        mom._locale = this.localeData;
    };
    // Returns a boolean about whether or not the calendar knows how to calculate
    // the timezone offset of arbitrary dates in the current timezone.
    Calendar.prototype.getIsAmbigTimezone = function () {
        return this.opt('timezone') !== 'local' && this.opt('timezone') !== 'UTC';
    };
    // Returns a copy of the given date in the current timezone. Has no effect on dates without times.
    Calendar.prototype.applyTimezone = function (date) {
        if (!date.hasTime()) {
            return date.clone();
        }
        var zonedDate = this.moment(date.toArray());
        var timeAdjust = date.time().asMilliseconds() - zonedDate.time().asMilliseconds();
        var adjustedZonedDate;
        // Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
        if (timeAdjust) {
            adjustedZonedDate = zonedDate.clone().add(timeAdjust); // add milliseconds
            if (date.time().asMilliseconds() - adjustedZonedDate.time().asMilliseconds() === 0) {
                zonedDate = adjustedZonedDate;
            }
        }
        return zonedDate;
    };
    /*
    Assumes the footprint is non-open-ended.
    */
    Calendar.prototype.footprintToDateProfile = function (componentFootprint, ignoreEnd) {
        if (ignoreEnd === void 0) { ignoreEnd = false; }
        var start = moment_ext_1.default.utc(componentFootprint.unzonedRange.startMs);
        var end;
        if (!ignoreEnd) {
            end = moment_ext_1.default.utc(componentFootprint.unzonedRange.endMs);
        }
        if (componentFootprint.isAllDay) {
            start.stripTime();
            if (end) {
                end.stripTime();
            }
        }
        else {
            start = this.applyTimezone(start);
            if (end) {
                end = this.applyTimezone(end);
            }
        }
        return new EventDateProfile_1.default(start, end, this);
    };
    // Returns a moment for the current date, as defined by the client's computer or from the `now` option.
    // Will return an moment with an ambiguous timezone.
    Calendar.prototype.getNow = function () {
        var now = this.opt('now');
        if (typeof now === 'function') {
            now = now();
        }
        return this.moment(now).stripZone();
    };
    // Produces a human-readable string for the given duration.
    // Side-effect: changes the locale of the given duration.
    Calendar.prototype.humanizeDuration = function (duration) {
        return duration.locale(this.opt('locale')).humanize();
    };
    // will return `null` if invalid range
    Calendar.prototype.parseUnzonedRange = function (rangeInput) {
        var start = null;
        var end = null;
        if (rangeInput.start) {
            start = this.moment(rangeInput.start).stripZone();
        }
        if (rangeInput.end) {
            end = this.moment(rangeInput.end).stripZone();
        }
        if (!start && !end) {
            return null;
        }
        if (start && end && end.isBefore(start)) {
            return null;
        }
        return new UnzonedRange_1.default(start, end);
    };
    // Event-Date Utilities
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.initEventManager = function () {
        var _this = this;
        var eventManager = new EventManager_1.default(this);
        var rawSources = this.opt('eventSources') || [];
        var singleRawSource = this.opt('events');
        this.eventManager = eventManager;
        if (singleRawSource) {
            rawSources.unshift(singleRawSource);
        }
        eventManager.on('release', function (eventsPayload) {
            _this.trigger('eventsReset', eventsPayload);
        });
        eventManager.freeze();
        rawSources.forEach(function (rawSource) {
            var source = EventSourceParser_1.default.parse(rawSource, _this);
            if (source) {
                eventManager.addSource(source);
            }
        });
        eventManager.thaw();
    };
    Calendar.prototype.requestEvents = function (start, end) {
        return this.eventManager.requestEvents(start, end, this.opt('timezone'), !this.opt('lazyFetching'));
    };
    // Get an event's normalized end date. If not present, calculate it from the defaults.
    Calendar.prototype.getEventEnd = function (event) {
        if (event.end) {
            return event.end.clone();
        }
        else {
            return this.getDefaultEventEnd(event.allDay, event.start);
        }
    };
    // Given an event's allDay status and start date, return what its fallback end date should be.
    // TODO: rename to computeDefaultEventEnd
    Calendar.prototype.getDefaultEventEnd = function (allDay, zonedStart) {
        var end = zonedStart.clone();
        if (allDay) {
            end.stripTime().add(this.defaultAllDayEventDuration);
        }
        else {
            end.add(this.defaultTimedEventDuration);
        }
        if (this.getIsAmbigTimezone()) {
            end.stripZone(); // we don't know what the tzo should be
        }
        return end;
    };
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.rerenderEvents = function () {
        this.view.flash('displayingEvents');
    };
    Calendar.prototype.refetchEvents = function () {
        this.eventManager.refetchAllSources();
    };
    Calendar.prototype.renderEvents = function (eventInputs, isSticky) {
        this.eventManager.freeze();
        for (var i = 0; i < eventInputs.length; i++) {
            this.renderEvent(eventInputs[i], isSticky);
        }
        this.eventManager.thaw();
    };
    Calendar.prototype.renderEvent = function (eventInput, isSticky) {
        if (isSticky === void 0) { isSticky = false; }
        var eventManager = this.eventManager;
        var eventDef = EventDefParser_1.default.parse(eventInput, eventInput.source || eventManager.stickySource);
        if (eventDef) {
            eventManager.addEventDef(eventDef, isSticky);
        }
    };
    // legacyQuery operates on legacy event instance objects
    Calendar.prototype.removeEvents = function (legacyQuery) {
        var eventManager = this.eventManager;
        var legacyInstances = [];
        var idMap = {};
        var eventDef;
        var i;
        if (legacyQuery == null) {
            eventManager.removeAllEventDefs(); // persist=true
        }
        else {
            eventManager.getEventInstances().forEach(function (eventInstance) {
                legacyInstances.push(eventInstance.toLegacy());
            });
            legacyInstances = filterLegacyEventInstances(legacyInstances, legacyQuery);
            // compute unique IDs
            for (i = 0; i < legacyInstances.length; i++) {
                eventDef = this.eventManager.getEventDefByUid(legacyInstances[i]._id);
                idMap[eventDef.id] = true;
            }
            eventManager.freeze();
            for (i in idMap) {
                eventManager.removeEventDefsById(i); // persist=true
            }
            eventManager.thaw();
        }
    };
    // legacyQuery operates on legacy event instance objects
    Calendar.prototype.clientEvents = function (legacyQuery) {
        var legacyEventInstances = [];
        this.eventManager.getEventInstances().forEach(function (eventInstance) {
            legacyEventInstances.push(eventInstance.toLegacy());
        });
        return filterLegacyEventInstances(legacyEventInstances, legacyQuery);
    };
    Calendar.prototype.updateEvents = function (eventPropsArray) {
        this.eventManager.freeze();
        for (var i = 0; i < eventPropsArray.length; i++) {
            this.updateEvent(eventPropsArray[i]);
        }
        this.eventManager.thaw();
    };
    Calendar.prototype.updateEvent = function (eventProps) {
        var eventDef = this.eventManager.getEventDefByUid(eventProps._id);
        var eventInstance;
        var eventDefMutation;
        if (eventDef instanceof SingleEventDef_1.default) {
            eventInstance = eventDef.buildInstance();
            eventDefMutation = EventDefMutation_1.default.createFromRawProps(eventInstance, eventProps, // raw props
            null // largeUnit -- who uses it?
            );
            this.eventManager.mutateEventsWithId(eventDef.id, eventDefMutation); // will release
        }
    };
    // Public Event Sources API
    // ------------------------------------------------------------------------------------
    Calendar.prototype.getEventSources = function () {
        return this.eventManager.otherSources.slice(); // clone
    };
    Calendar.prototype.getEventSourceById = function (id) {
        return this.eventManager.getSourceById(EventSource_1.default.normalizeId(id));
    };
    Calendar.prototype.addEventSource = function (sourceInput) {
        var source = EventSourceParser_1.default.parse(sourceInput, this);
        if (source) {
            this.eventManager.addSource(source);
        }
    };
    Calendar.prototype.removeEventSources = function (sourceMultiQuery) {
        var eventManager = this.eventManager;
        var sources;
        var i;
        if (sourceMultiQuery == null) {
            this.eventManager.removeAllSources();
        }
        else {
            sources = eventManager.multiQuerySources(sourceMultiQuery);
            eventManager.freeze();
            for (i = 0; i < sources.length; i++) {
                eventManager.removeSource(sources[i]);
            }
            eventManager.thaw();
        }
    };
    Calendar.prototype.removeEventSource = function (sourceQuery) {
        var eventManager = this.eventManager;
        var sources = eventManager.querySources(sourceQuery);
        var i;
        eventManager.freeze();
        for (i = 0; i < sources.length; i++) {
            eventManager.removeSource(sources[i]);
        }
        eventManager.thaw();
    };
    Calendar.prototype.refetchEventSources = function (sourceMultiQuery) {
        var eventManager = this.eventManager;
        var sources = eventManager.multiQuerySources(sourceMultiQuery);
        var i;
        eventManager.freeze();
        for (i = 0; i < sources.length; i++) {
            eventManager.refetchSource(sources[i]);
        }
        eventManager.thaw();
    };
    // not for internal use. use options module directly instead.
    Calendar.defaults = options_1.globalDefaults;
    Calendar.englishDefaults = options_1.englishDefaults;
    Calendar.rtlDefaults = options_1.rtlDefaults;
    return Calendar;
}());
exports.default = Calendar;
EmitterMixin_1.default.mixInto(Calendar);
ListenerMixin_1.default.mixInto(Calendar);
function filterLegacyEventInstances(legacyEventInstances, legacyQuery) {
    if (legacyQuery == null) {
        return legacyEventInstances;
    }
    else if ($.isFunction(legacyQuery)) {
        return legacyEventInstances.filter(legacyQuery);
    }
    else {
        legacyQuery += ''; // normalize to string
        return legacyEventInstances.filter(function (legacyEventInstance) {
            // soft comparison because id not be normalized to string
            // tslint:disable-next-line
            return legacyEventInstance.id == legacyQuery ||
                legacyEventInstance._id === legacyQuery; // can specify internal id, but must exactly match
        });
    }
}


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var UnzonedRange_1 = __webpack_require__(5);
var DateProfileGenerator = /** @class */ (function () {
    function DateProfileGenerator(_view) {
        this._view = _view;
    }
    DateProfileGenerator.prototype.opt = function (name) {
        return this._view.opt(name);
    };
    DateProfileGenerator.prototype.trimHiddenDays = function (unzonedRange) {
        return this._view.trimHiddenDays(unzonedRange);
    };
    DateProfileGenerator.prototype.msToUtcMoment = function (ms, forceAllDay) {
        return this._view.calendar.msToUtcMoment(ms, forceAllDay);
    };
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    DateProfileGenerator.prototype.buildPrev = function (currentDateProfile) {
        var prevDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .subtract(currentDateProfile.dateIncrement);
        return this.build(prevDate, -1);
    };
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    DateProfileGenerator.prototype.buildNext = function (currentDateProfile) {
        var nextDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .add(currentDateProfile.dateIncrement);
        return this.build(nextDate, 1);
    };
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    DateProfileGenerator.prototype.build = function (date, direction, forceToValid) {
        if (forceToValid === void 0) { forceToValid = false; }
        var isDateAllDay = !date.hasTime();
        var validUnzonedRange;
        var minTime = null;
        var maxTime = null;
        var currentInfo;
        var isRangeAllDay;
        var renderUnzonedRange;
        var activeUnzonedRange;
        var isValid;
        validUnzonedRange = this.buildValidRange();
        validUnzonedRange = this.trimHiddenDays(validUnzonedRange);
        if (forceToValid) {
            date = this.msToUtcMoment(validUnzonedRange.constrainDate(date), // returns MS
            isDateAllDay);
        }
        currentInfo = this.buildCurrentRangeInfo(date, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderUnzonedRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.unzonedRange), currentInfo.unit, isRangeAllDay);
        renderUnzonedRange = this.trimHiddenDays(renderUnzonedRange);
        activeUnzonedRange = renderUnzonedRange.clone();
        if (!this.opt('showNonCurrentDates')) {
            activeUnzonedRange = activeUnzonedRange.intersect(currentInfo.unzonedRange);
        }
        minTime = moment.duration(this.opt('minTime'));
        maxTime = moment.duration(this.opt('maxTime'));
        activeUnzonedRange = this.adjustActiveRange(activeUnzonedRange, minTime, maxTime);
        activeUnzonedRange = activeUnzonedRange.intersect(validUnzonedRange); // might return null
        if (activeUnzonedRange) {
            date = this.msToUtcMoment(activeUnzonedRange.constrainDate(date), // returns MS
            isDateAllDay);
        }
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = currentInfo.unzonedRange.intersectsWith(validUnzonedRange);
        return {
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validUnzonedRange: validUnzonedRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentUnzonedRange: currentInfo.unzonedRange,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay: isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeUnzonedRange: activeUnzonedRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderUnzonedRange: renderUnzonedRange,
            // Duration object that denotes the first visible time of any given day
            minTime: minTime,
            // Duration object that denotes the exclusive visible end time of any given day
            maxTime: maxTime,
            isValid: isValid,
            date: date,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration)
            // pass a fallback (might be null) ^
        };
    };
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildValidRange = function () {
        return this._view.getUnzonedRangeOption('validRange', this._view.calendar.getNow()) ||
            new UnzonedRange_1.default(); // completely open-ended
    };
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
        var viewSpec = this._view.viewSpec;
        var duration = null;
        var unit = null;
        var unzonedRange = null;
        var dayCount;
        if (viewSpec.duration) {
            duration = viewSpec.duration;
            unit = viewSpec.durationUnit;
            unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        else if ((dayCount = this.opt('dayCount'))) {
            unit = 'day';
            unzonedRange = this.buildRangeFromDayCount(date, direction, dayCount);
        }
        else if ((unzonedRange = this.buildCustomVisibleRange(date))) {
            unit = util_1.computeGreatestUnit(unzonedRange.getStart(), unzonedRange.getEnd());
        }
        else {
            duration = this.getFallbackDuration();
            unit = util_1.computeGreatestUnit(duration);
            unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return { duration: duration, unit: unit, unzonedRange: unzonedRange };
    };
    DateProfileGenerator.prototype.getFallbackDuration = function () {
        return moment.duration({ days: 1 });
    };
    // Returns a new activeUnzonedRange to have time values (un-ambiguate)
    // minTime or maxTime causes the range to expand.
    DateProfileGenerator.prototype.adjustActiveRange = function (unzonedRange, minTime, maxTime) {
        var start = unzonedRange.getStart();
        var end = unzonedRange.getEnd();
        if (this._view.usesMinMaxTime) {
            if (minTime < 0) {
                start.time(0).add(minTime);
            }
            if (maxTime > 24 * 60 * 60 * 1000) {
                end.time(maxTime - (24 * 60 * 60 * 1000));
            }
        }
        return new UnzonedRange_1.default(start, end);
    };
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed computeGreatestUnit value of duration.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
        var alignment = this.opt('dateAlignment');
        var dateIncrementInput;
        var dateIncrementDuration;
        var start;
        var end;
        var res;
        // compute what the alignment should be
        if (!alignment) {
            dateIncrementInput = this.opt('dateIncrement');
            if (dateIncrementInput) {
                dateIncrementDuration = moment.duration(dateIncrementInput);
                // use the smaller of the two units
                if (dateIncrementDuration < duration) {
                    alignment = util_1.computeDurationGreatestUnit(dateIncrementDuration, dateIncrementInput);
                }
                else {
                    alignment = unit;
                }
            }
            else {
                alignment = unit;
            }
        }
        // if the view displays a single day or smaller
        if (duration.as('days') <= 1) {
            if (this._view.isHiddenDay(start)) {
                start = this._view.skipHiddenDays(start, direction);
                start.startOf('day');
            }
        }
        function computeRes() {
            start = date.clone().startOf(alignment);
            end = start.clone().add(duration);
            res = new UnzonedRange_1.default(start, end);
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this._view.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    };
    // Builds the "current" range when a dayCount is specified.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
        var customAlignment = this.opt('dateAlignment');
        var runningCount = 0;
        var start = date.clone();
        var end;
        if (customAlignment) {
            start.startOf(customAlignment);
        }
        start.startOf('day');
        start = this._view.skipHiddenDays(start, direction);
        end = start.clone();
        do {
            end.add(1, 'day');
            if (!this._view.isHiddenDay(end)) {
                runningCount++;
            }
        } while (runningCount < dayCount);
        return new UnzonedRange_1.default(start, end);
    };
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentUnzonedRange and activeUnzonedRange at the same time.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
        var visibleUnzonedRange = this._view.getUnzonedRangeOption('visibleRange', this._view.calendar.applyTimezone(date) // correct zone. also generates new obj that avoids mutations
        );
        if (visibleUnzonedRange && (visibleUnzonedRange.startMs == null || visibleUnzonedRange.endMs == null)) {
            return null;
        }
        return visibleUnzonedRange;
    };
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        return currentUnzonedRange.clone();
    };
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
        var dateIncrementInput = this.opt('dateIncrement');
        var customAlignment;
        if (dateIncrementInput) {
            return moment.duration(dateIncrementInput);
        }
        else if ((customAlignment = this.opt('dateAlignment'))) {
            return moment.duration(1, customAlignment);
        }
        else if (fallback) {
            return fallback;
        }
        else {
            return moment.duration({ days: 1 });
        }
    };
    return DateProfileGenerator;
}());
exports.default = DateProfileGenerator;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var exportHooks = __webpack_require__(16);
var util_1 = __webpack_require__(4);
var moment_ext_1 = __webpack_require__(10);
var ListenerMixin_1 = __webpack_require__(7);
var HitDragListener_1 = __webpack_require__(23);
var SingleEventDef_1 = __webpack_require__(13);
var EventInstanceGroup_1 = __webpack_require__(18);
var EventSource_1 = __webpack_require__(6);
var Interaction_1 = __webpack_require__(15);
var ExternalDropping = /** @class */ (function (_super) {
    tslib_1.__extends(ExternalDropping, _super);
    function ExternalDropping() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDragging = false; // jqui-dragging an external element? boolean
        return _this;
    }
    /*
    component impements:
      - eventRangesToEventFootprints
      - isEventInstanceGroupAllowed
      - isExternalInstanceGroupAllowed
      - renderDrag
      - unrenderDrag
    */
    ExternalDropping.prototype.end = function () {
        if (this.dragListener) {
            this.dragListener.endInteraction();
        }
    };
    ExternalDropping.prototype.bindToDocument = function () {
        this.listenTo($(document), {
            dragstart: this.handleDragStart,
            sortstart: this.handleDragStart // jqui
        });
    };
    ExternalDropping.prototype.unbindFromDocument = function () {
        this.stopListeningTo($(document));
    };
    // Called when a jQuery UI drag is initiated anywhere in the DOM
    ExternalDropping.prototype.handleDragStart = function (ev, ui) {
        var el;
        var accept;
        if (this.opt('droppable')) {
            el = $((ui ? ui.item : null) || ev.target);
            // Test that the dragged element passes the dropAccept selector or filter function.
            // FYI, the default is "*" (matches all)
            accept = this.opt('dropAccept');
            if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {
                if (!this.isDragging) {
                    this.listenToExternalDrag(el, ev, ui);
                }
            }
        }
    };
    // Called when a jQuery UI drag starts and it needs to be monitored for dropping
    ExternalDropping.prototype.listenToExternalDrag = function (el, ev, ui) {
        var _this = this;
        var component = this.component;
        var view = this.view;
        var meta = getDraggedElMeta(el); // extra data about event drop, including possible event to create
        var singleEventDef; // a null value signals an unsuccessful drag
        // listener that tracks mouse movement over date-associated pixel regions
        var dragListener = this.dragListener = new HitDragListener_1.default(component, {
            interactionStart: function () {
                _this.isDragging = true;
            },
            hitOver: function (hit) {
                var isAllowed = true;
                var hitFootprint = hit.component.getSafeHitFootprint(hit); // hit might not belong to this grid
                var mutatedEventInstanceGroup;
                if (hitFootprint) {
                    singleEventDef = _this.computeExternalDrop(hitFootprint, meta);
                    if (singleEventDef) {
                        mutatedEventInstanceGroup = new EventInstanceGroup_1.default(singleEventDef.buildInstances());
                        isAllowed = meta.eventProps ? // isEvent?
                            component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup) :
                            component.isExternalInstanceGroupAllowed(mutatedEventInstanceGroup);
                    }
                    else {
                        isAllowed = false;
                    }
                }
                else {
                    isAllowed = false;
                }
                if (!isAllowed) {
                    singleEventDef = null;
                    util_1.disableCursor();
                }
                if (singleEventDef) {
                    component.renderDrag(// called without a seg parameter
                    component.eventRangesToEventFootprints(mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, view.calendar)));
                }
            },
            hitOut: function () {
                singleEventDef = null; // signal unsuccessful
            },
            hitDone: function () {
                util_1.enableCursor();
                component.unrenderDrag();
            },
            interactionEnd: function (ev) {
                if (singleEventDef) {
                    view.reportExternalDrop(singleEventDef, Boolean(meta.eventProps), // isEvent
                    Boolean(meta.stick), // isSticky
                    el, ev, ui);
                }
                _this.isDragging = false;
                _this.dragListener = null;
            }
        });
        dragListener.startDrag(ev); // start listening immediately
    };
    // Given a hit to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
    // returns the zoned start/end dates for the event that would result from the hypothetical drop. end might be null.
    // Returning a null value signals an invalid drop hit.
    // DOES NOT consider overlap/constraint.
    // Assumes both footprints are non-open-ended.
    ExternalDropping.prototype.computeExternalDrop = function (componentFootprint, meta) {
        var calendar = this.view.calendar;
        var start = moment_ext_1.default.utc(componentFootprint.unzonedRange.startMs).stripZone();
        var end;
        var eventDef;
        if (componentFootprint.isAllDay) {
            // if dropped on an all-day span, and element's metadata specified a time, set it
            if (meta.startTime) {
                start.time(meta.startTime);
            }
            else {
                start.stripTime();
            }
        }
        if (meta.duration) {
            end = start.clone().add(meta.duration);
        }
        start = calendar.applyTimezone(start);
        if (end) {
            end = calendar.applyTimezone(end);
        }
        eventDef = SingleEventDef_1.default.parse($.extend({}, meta.eventProps, {
            start: start,
            end: end
        }), new EventSource_1.default(calendar));
        return eventDef;
    };
    return ExternalDropping;
}(Interaction_1.default));
exports.default = ExternalDropping;
ListenerMixin_1.default.mixInto(ExternalDropping);
/* External-Dragging-Element Data
----------------------------------------------------------------------------------------------------------------------*/
// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
exportHooks.dataAttrPrefix = '';
// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
// to be used for Event Object creation.
// A defined `.eventProps`, even when empty, indicates that an event should be created.
function getDraggedElMeta(el) {
    var prefix = exportHooks.dataAttrPrefix;
    var eventProps; // properties for creating the event, not related to date/time
    var startTime; // a Duration
    var duration;
    var stick;
    if (prefix) {
        prefix += '-';
    }
    eventProps = el.data(prefix + 'event') || null;
    if (eventProps) {
        if (typeof eventProps === 'object') {
            eventProps = $.extend({}, eventProps); // make a copy
        }
        else {
            eventProps = {};
        }
        // pluck special-cased date/time properties
        startTime = eventProps.start;
        if (startTime == null) {
            startTime = eventProps.time;
        } // accept 'time' as well
        duration = eventProps.duration;
        stick = eventProps.stick;
        delete eventProps.start;
        delete eventProps.time;
        delete eventProps.duration;
        delete eventProps.stick;
    }
    // fallback to standalone attribute values for each of the date/time properties
    if (startTime == null) {
        startTime = el.data(prefix + 'start');
    }
    if (startTime == null) {
        startTime = el.data(prefix + 'time');
    } // accept 'time' as well
    if (duration == null) {
        duration = el.data(prefix + 'duration');
    }
    if (stick == null) {
        stick = el.data(prefix + 'stick');
    }
    // massage into correct data types
    startTime = startTime != null ? moment.duration(startTime) : null;
    duration = duration != null ? moment.duration(duration) : null;
    stick = Boolean(stick);
    return { eventProps: eventProps, startTime: startTime, duration: duration, stick: stick };
}


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventDefMutation_1 = __webpack_require__(37);
var EventDefDateMutation_1 = __webpack_require__(50);
var HitDragListener_1 = __webpack_require__(23);
var Interaction_1 = __webpack_require__(15);
var EventResizing = /** @class */ (function (_super) {
    tslib_1.__extends(EventResizing, _super);
    /*
    component impements:
      - bindSegHandlerToEl
      - publiclyTrigger
      - diffDates
      - eventRangesToEventFootprints
      - isEventInstanceGroupAllowed
      - getSafeHitFootprint
    */
    function EventResizing(component, eventPointing) {
        var _this = _super.call(this, component) || this;
        _this.isResizing = false;
        _this.eventPointing = eventPointing;
        return _this;
    }
    EventResizing.prototype.end = function () {
        if (this.dragListener) {
            this.dragListener.endInteraction();
        }
    };
    EventResizing.prototype.bindToEl = function (el) {
        var component = this.component;
        component.bindSegHandlerToEl(el, 'mousedown', this.handleMouseDown.bind(this));
        component.bindSegHandlerToEl(el, 'touchstart', this.handleTouchStart.bind(this));
    };
    EventResizing.prototype.handleMouseDown = function (seg, ev) {
        if (this.component.canStartResize(seg, ev)) {
            this.buildDragListener(seg, $(ev.target).is('.fc-start-resizer'))
                .startInteraction(ev, { distance: 5 });
        }
    };
    EventResizing.prototype.handleTouchStart = function (seg, ev) {
        if (this.component.canStartResize(seg, ev)) {
            this.buildDragListener(seg, $(ev.target).is('.fc-start-resizer'))
                .startInteraction(ev);
        }
    };
    // Creates a listener that tracks the user as they resize an event segment.
    // Generic enough to work with any type of Grid.
    EventResizing.prototype.buildDragListener = function (seg, isStart) {
        var _this = this;
        var component = this.component;
        var view = this.view;
        var calendar = view.calendar;
        var eventManager = calendar.eventManager;
        var el = seg.el;
        var eventDef = seg.footprint.eventDef;
        var eventInstance = seg.footprint.eventInstance;
        var isDragging;
        var resizeMutation; // zoned event date properties. falsy if invalid resize
        // Tracks mouse movement over the *grid's* coordinate map
        var dragListener = this.dragListener = new HitDragListener_1.default(component, {
            scroll: this.opt('dragScroll'),
            subjectEl: el,
            interactionStart: function () {
                isDragging = false;
            },
            dragStart: function (ev) {
                isDragging = true;
                // ensure a mouseout on the manipulated event has been reported
                _this.eventPointing.handleMouseout(seg, ev);
                _this.segResizeStart(seg, ev);
            },
            hitOver: function (hit, isOrig, origHit) {
                var isAllowed = true;
                var origHitFootprint = component.getSafeHitFootprint(origHit);
                var hitFootprint = component.getSafeHitFootprint(hit);
                var mutatedEventInstanceGroup;
                if (origHitFootprint && hitFootprint) {
                    resizeMutation = isStart ?
                        _this.computeEventStartResizeMutation(origHitFootprint, hitFootprint, seg.footprint) :
                        _this.computeEventEndResizeMutation(origHitFootprint, hitFootprint, seg.footprint);
                    if (resizeMutation) {
                        mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(eventDef.id, resizeMutation);
                        isAllowed = component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
                    }
                    else {
                        isAllowed = false;
                    }
                }
                else {
                    isAllowed = false;
                }
                if (!isAllowed) {
                    resizeMutation = null;
                    util_1.disableCursor();
                }
                else if (resizeMutation.isEmpty()) {
                    // no change. (FYI, event dates might have zones)
                    resizeMutation = null;
                }
                if (resizeMutation) {
                    view.hideEventsWithId(seg.footprint.eventDef.id);
                    view.renderEventResize(component.eventRangesToEventFootprints(mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, calendar)), seg);
                }
            },
            hitOut: function () {
                resizeMutation = null;
            },
            hitDone: function () {
                view.unrenderEventResize(seg);
                view.showEventsWithId(seg.footprint.eventDef.id);
                util_1.enableCursor();
            },
            interactionEnd: function (ev) {
                if (isDragging) {
                    _this.segResizeStop(seg, ev);
                }
                if (resizeMutation) {
                    // no need to re-show original, will rerender all anyways. esp important if eventRenderWait
                    view.reportEventResize(eventInstance, resizeMutation, el, ev);
                }
                _this.dragListener = null;
            }
        });
        return dragListener;
    };
    // Called before event segment resizing starts
    EventResizing.prototype.segResizeStart = function (seg, ev) {
        this.isResizing = true;
        this.component.publiclyTrigger('eventResizeStart', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // Called after event segment resizing stops
    EventResizing.prototype.segResizeStop = function (seg, ev) {
        this.isResizing = false;
        this.component.publiclyTrigger('eventResizeStop', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // Returns new date-information for an event segment being resized from its start
    EventResizing.prototype.computeEventStartResizeMutation = function (startFootprint, endFootprint, origEventFootprint) {
        var origRange = origEventFootprint.componentFootprint.unzonedRange;
        var startDelta = this.component.diffDates(endFootprint.unzonedRange.getStart(), startFootprint.unzonedRange.getStart());
        var dateMutation;
        var eventDefMutation;
        if (origRange.getStart().add(startDelta) < origRange.getEnd()) {
            dateMutation = new EventDefDateMutation_1.default();
            dateMutation.setStartDelta(startDelta);
            eventDefMutation = new EventDefMutation_1.default();
            eventDefMutation.setDateMutation(dateMutation);
            return eventDefMutation;
        }
        return false;
    };
    // Returns new date-information for an event segment being resized from its end
    EventResizing.prototype.computeEventEndResizeMutation = function (startFootprint, endFootprint, origEventFootprint) {
        var origRange = origEventFootprint.componentFootprint.unzonedRange;
        var endDelta = this.component.diffDates(endFootprint.unzonedRange.getEnd(), startFootprint.unzonedRange.getEnd());
        var dateMutation;
        var eventDefMutation;
        if (origRange.getEnd().add(endDelta) > origRange.getStart()) {
            dateMutation = new EventDefDateMutation_1.default();
            dateMutation.setEndDelta(endDelta);
            eventDefMutation = new EventDefMutation_1.default();
            eventDefMutation.setDateMutation(dateMutation);
            return eventDefMutation;
        }
        return false;
    };
    return EventResizing;
}(Interaction_1.default));
exports.default = EventResizing;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var EventDefMutation_1 = __webpack_require__(37);
var EventDefDateMutation_1 = __webpack_require__(50);
var DragListener_1 = __webpack_require__(54);
var HitDragListener_1 = __webpack_require__(23);
var MouseFollower_1 = __webpack_require__(244);
var Interaction_1 = __webpack_require__(15);
var EventDragging = /** @class */ (function (_super) {
    tslib_1.__extends(EventDragging, _super);
    /*
    component implements:
      - bindSegHandlerToEl
      - publiclyTrigger
      - diffDates
      - eventRangesToEventFootprints
      - isEventInstanceGroupAllowed
    */
    function EventDragging(component, eventPointing) {
        var _this = _super.call(this, component) || this;
        _this.isDragging = false;
        _this.eventPointing = eventPointing;
        return _this;
    }
    EventDragging.prototype.end = function () {
        if (this.dragListener) {
            this.dragListener.endInteraction();
        }
    };
    EventDragging.prototype.getSelectionDelay = function () {
        var delay = this.opt('eventLongPressDelay');
        if (delay == null) {
            delay = this.opt('longPressDelay'); // fallback
        }
        return delay;
    };
    EventDragging.prototype.bindToEl = function (el) {
        var component = this.component;
        component.bindSegHandlerToEl(el, 'mousedown', this.handleMousedown.bind(this));
        component.bindSegHandlerToEl(el, 'touchstart', this.handleTouchStart.bind(this));
    };
    EventDragging.prototype.handleMousedown = function (seg, ev) {
        if (!this.component.shouldIgnoreMouse() &&
            this.component.canStartDrag(seg, ev)) {
            this.buildDragListener(seg).startInteraction(ev, { distance: 5 });
        }
    };
    EventDragging.prototype.handleTouchStart = function (seg, ev) {
        var component = this.component;
        var settings = {
            delay: this.view.isEventDefSelected(seg.footprint.eventDef) ? // already selected?
                0 : this.getSelectionDelay()
        };
        if (component.canStartDrag(seg, ev)) {
            this.buildDragListener(seg).startInteraction(ev, settings);
        }
        else if (component.canStartSelection(seg, ev)) {
            this.buildSelectListener(seg).startInteraction(ev, settings);
        }
    };
    // seg isn't draggable, but let's use a generic DragListener
    // simply for the delay, so it can be selected.
    // Has side effect of setting/unsetting `dragListener`
    EventDragging.prototype.buildSelectListener = function (seg) {
        var _this = this;
        var view = this.view;
        var eventDef = seg.footprint.eventDef;
        var eventInstance = seg.footprint.eventInstance; // null for inverse-background events
        if (this.dragListener) {
            return this.dragListener;
        }
        var dragListener = this.dragListener = new DragListener_1.default({
            dragStart: function (ev) {
                if (dragListener.isTouch &&
                    !view.isEventDefSelected(eventDef) &&
                    eventInstance) {
                    // if not previously selected, will fire after a delay. then, select the event
                    view.selectEventInstance(eventInstance);
                }
            },
            interactionEnd: function (ev) {
                _this.dragListener = null;
            }
        });
        return dragListener;
    };
    // Builds a listener that will track user-dragging on an event segment.
    // Generic enough to work with any type of Grid.
    // Has side effect of setting/unsetting `dragListener`
    EventDragging.prototype.buildDragListener = function (seg) {
        var _this = this;
        var component = this.component;
        var view = this.view;
        var calendar = view.calendar;
        var eventManager = calendar.eventManager;
        var el = seg.el;
        var eventDef = seg.footprint.eventDef;
        var eventInstance = seg.footprint.eventInstance; // null for inverse-background events
        var isDragging;
        var mouseFollower; // A clone of the original element that will move with the mouse
        var eventDefMutation;
        if (this.dragListener) {
            return this.dragListener;
        }
        // Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
        // of the view.
        var dragListener = this.dragListener = new HitDragListener_1.default(view, {
            scroll: this.opt('dragScroll'),
            subjectEl: el,
            subjectCenter: true,
            interactionStart: function (ev) {
                seg.component = component; // for renderDrag
                isDragging = false;
                mouseFollower = new MouseFollower_1.default(seg.el, {
                    additionalClass: 'fc-dragging',
                    parentEl: view.el,
                    opacity: dragListener.isTouch ? null : _this.opt('dragOpacity'),
                    revertDuration: _this.opt('dragRevertDuration'),
                    zIndex: 2 // one above the .fc-view
                });
                mouseFollower.hide(); // don't show until we know this is a real drag
                mouseFollower.start(ev);
            },
            dragStart: function (ev) {
                if (dragListener.isTouch &&
                    !view.isEventDefSelected(eventDef) &&
                    eventInstance) {
                    // if not previously selected, will fire after a delay. then, select the event
                    view.selectEventInstance(eventInstance);
                }
                isDragging = true;
                // ensure a mouseout on the manipulated event has been reported
                _this.eventPointing.handleMouseout(seg, ev);
                _this.segDragStart(seg, ev);
                view.hideEventsWithId(seg.footprint.eventDef.id);
            },
            hitOver: function (hit, isOrig, origHit) {
                var isAllowed = true;
                var origFootprint;
                var footprint;
                var mutatedEventInstanceGroup;
                // starting hit could be forced (DayGrid.limit)
                if (seg.hit) {
                    origHit = seg.hit;
                }
                // hit might not belong to this grid, so query origin grid
                origFootprint = origHit.component.getSafeHitFootprint(origHit);
                footprint = hit.component.getSafeHitFootprint(hit);
                if (origFootprint && footprint) {
                    eventDefMutation = _this.computeEventDropMutation(origFootprint, footprint, eventDef);
                    if (eventDefMutation) {
                        mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(eventDef.id, eventDefMutation);
                        isAllowed = component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
                    }
                    else {
                        isAllowed = false;
                    }
                }
                else {
                    isAllowed = false;
                }
                if (!isAllowed) {
                    eventDefMutation = null;
                    util_1.disableCursor();
                }
                // if a valid drop location, have the subclass render a visual indication
                if (eventDefMutation &&
                    view.renderDrag(// truthy if rendered something
                    component.eventRangesToEventFootprints(mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, calendar)), seg, dragListener.isTouch)) {
                    mouseFollower.hide(); // if the subclass is already using a mock event "helper", hide our own
                }
                else {
                    mouseFollower.show(); // otherwise, have the helper follow the mouse (no snapping)
                }
                if (isOrig) {
                    // needs to have moved hits to be a valid drop
                    eventDefMutation = null;
                }
            },
            hitOut: function () {
                view.unrenderDrag(seg); // unrender whatever was done in renderDrag
                mouseFollower.show(); // show in case we are moving out of all hits
                eventDefMutation = null;
            },
            hitDone: function () {
                util_1.enableCursor();
            },
            interactionEnd: function (ev) {
                delete seg.component; // prevent side effects
                // do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
                mouseFollower.stop(!eventDefMutation, function () {
                    if (isDragging) {
                        view.unrenderDrag(seg);
                        _this.segDragStop(seg, ev);
                    }
                    view.showEventsWithId(seg.footprint.eventDef.id);
                    if (eventDefMutation) {
                        // no need to re-show original, will rerender all anyways. esp important if eventRenderWait
                        view.reportEventDrop(eventInstance, eventDefMutation, el, ev);
                    }
                });
                _this.dragListener = null;
            }
        });
        return dragListener;
    };
    // Called before event segment dragging starts
    EventDragging.prototype.segDragStart = function (seg, ev) {
        this.isDragging = true;
        this.component.publiclyTrigger('eventDragStart', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // Called after event segment dragging stops
    EventDragging.prototype.segDragStop = function (seg, ev) {
        this.isDragging = false;
        this.component.publiclyTrigger('eventDragStop', {
            context: seg.el[0],
            args: [
                seg.footprint.getEventLegacy(),
                ev,
                {},
                this.view
            ]
        });
    };
    // DOES NOT consider overlap/constraint
    EventDragging.prototype.computeEventDropMutation = function (startFootprint, endFootprint, eventDef) {
        var eventDefMutation = new EventDefMutation_1.default();
        eventDefMutation.setDateMutation(this.computeEventDateMutation(startFootprint, endFootprint));
        return eventDefMutation;
    };
    EventDragging.prototype.computeEventDateMutation = function (startFootprint, endFootprint) {
        var date0 = startFootprint.unzonedRange.getStart();
        var date1 = endFootprint.unzonedRange.getStart();
        var clearEnd = false;
        var forceTimed = false;
        var forceAllDay = false;
        var dateDelta;
        var dateMutation;
        if (startFootprint.isAllDay !== endFootprint.isAllDay) {
            clearEnd = true;
            if (endFootprint.isAllDay) {
                forceAllDay = true;
                date0.stripTime();
            }
            else {
                forceTimed = true;
            }
        }
        dateDelta = this.component.diffDates(date1, date0);
        dateMutation = new EventDefDateMutation_1.default();
        dateMutation.clearEnd = clearEnd;
        dateMutation.forceTimed = forceTimed;
        dateMutation.forceAllDay = forceAllDay;
        dateMutation.setDateDelta(dateDelta);
        return dateMutation;
    };
    return EventDragging;
}(Interaction_1.default));
exports.default = EventDragging;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var HitDragListener_1 = __webpack_require__(23);
var ComponentFootprint_1 = __webpack_require__(12);
var UnzonedRange_1 = __webpack_require__(5);
var Interaction_1 = __webpack_require__(15);
var DateSelecting = /** @class */ (function (_super) {
    tslib_1.__extends(DateSelecting, _super);
    /*
    component must implement:
      - bindDateHandlerToEl
      - getSafeHitFootprint
      - renderHighlight
      - unrenderHighlight
    */
    function DateSelecting(component) {
        var _this = _super.call(this, component) || this;
        _this.dragListener = _this.buildDragListener();
        return _this;
    }
    DateSelecting.prototype.end = function () {
        this.dragListener.endInteraction();
    };
    DateSelecting.prototype.getDelay = function () {
        var delay = this.opt('selectLongPressDelay');
        if (delay == null) {
            delay = this.opt('longPressDelay'); // fallback
        }
        return delay;
    };
    DateSelecting.prototype.bindToEl = function (el) {
        var _this = this;
        var component = this.component;
        var dragListener = this.dragListener;
        component.bindDateHandlerToEl(el, 'mousedown', function (ev) {
            if (_this.opt('selectable') && !component.shouldIgnoreMouse()) {
                dragListener.startInteraction(ev, {
                    distance: _this.opt('selectMinDistance')
                });
            }
        });
        component.bindDateHandlerToEl(el, 'touchstart', function (ev) {
            if (_this.opt('selectable') && !component.shouldIgnoreTouch()) {
                dragListener.startInteraction(ev, {
                    delay: _this.getDelay()
                });
            }
        });
        util_1.preventSelection(el);
    };
    // Creates a listener that tracks the user's drag across day elements, for day selecting.
    DateSelecting.prototype.buildDragListener = function () {
        var _this = this;
        var component = this.component;
        var selectionFootprint; // null if invalid selection
        var dragListener = new HitDragListener_1.default(component, {
            scroll: this.opt('dragScroll'),
            interactionStart: function () {
                selectionFootprint = null;
            },
            dragStart: function (ev) {
                _this.view.unselect(ev); // since we could be rendering a new selection, we want to clear any old one
            },
            hitOver: function (hit, isOrig, origHit) {
                var origHitFootprint;
                var hitFootprint;
                if (origHit) {
                    origHitFootprint = component.getSafeHitFootprint(origHit);
                    hitFootprint = component.getSafeHitFootprint(hit);
                    if (origHitFootprint && hitFootprint) {
                        selectionFootprint = _this.computeSelection(origHitFootprint, hitFootprint);
                    }
                    else {
                        selectionFootprint = null;
                    }
                    if (selectionFootprint) {
                        component.renderSelectionFootprint(selectionFootprint);
                    }
                    else if (selectionFootprint === false) {
                        util_1.disableCursor();
                    }
                }
            },
            hitOut: function () {
                selectionFootprint = null;
                component.unrenderSelection();
            },
            hitDone: function () {
                util_1.enableCursor();
            },
            interactionEnd: function (ev, isCancelled) {
                if (!isCancelled && selectionFootprint) {
                    // the selection will already have been rendered. just report it
                    _this.view.reportSelection(selectionFootprint, ev);
                }
            }
        });
        return dragListener;
    };
    // Given the first and last date-spans of a selection, returns another date-span object.
    // Subclasses can override and provide additional data in the span object. Will be passed to renderSelectionFootprint().
    // Will return false if the selection is invalid and this should be indicated to the user.
    // Will return null/undefined if a selection invalid but no error should be reported.
    DateSelecting.prototype.computeSelection = function (footprint0, footprint1) {
        var wholeFootprint = this.computeSelectionFootprint(footprint0, footprint1);
        if (wholeFootprint && !this.isSelectionFootprintAllowed(wholeFootprint)) {
            return false;
        }
        return wholeFootprint;
    };
    // Given two spans, must return the combination of the two.
    // TODO: do this separation of concerns (combining VS validation) for event dnd/resize too.
    // Assumes both footprints are non-open-ended.
    DateSelecting.prototype.computeSelectionFootprint = function (footprint0, footprint1) {
        var ms = [
            footprint0.unzonedRange.startMs,
            footprint0.unzonedRange.endMs,
            footprint1.unzonedRange.startMs,
            footprint1.unzonedRange.endMs
        ];
        ms.sort(util_1.compareNumbers);
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(ms[0], ms[3]), footprint0.isAllDay);
    };
    DateSelecting.prototype.isSelectionFootprintAllowed = function (componentFootprint) {
        return this.component.dateProfile.validUnzonedRange.containsRange(componentFootprint.unzonedRange) &&
            this.view.calendar.constraints.isSelectionFootprintAllowed(componentFootprint);
    };
    return DateSelecting;
}(Interaction_1.default));
exports.default = DateSelecting;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Scroller_1 = __webpack_require__(39);
var View_1 = __webpack_require__(41);
var TimeGrid_1 = __webpack_require__(227);
var DayGrid_1 = __webpack_require__(61);
var AGENDA_ALL_DAY_EVENT_LIMIT = 5;
var agendaTimeGridMethods;
var agendaDayGridMethods;
/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.
var AgendaView = /** @class */ (function (_super) {
    tslib_1.__extends(AgendaView, _super);
    function AgendaView(calendar, viewSpec) {
        var _this = _super.call(this, calendar, viewSpec) || this;
        _this.usesMinMaxTime = true; // indicates that minTime/maxTime affects rendering
        _this.timeGrid = _this.instantiateTimeGrid();
        _this.addChild(_this.timeGrid);
        if (_this.opt('allDaySlot')) {
            _this.dayGrid = _this.instantiateDayGrid(); // the all-day subcomponent of this view
            _this.addChild(_this.dayGrid);
        }
        _this.scroller = new Scroller_1.default({
            overflowX: 'hidden',
            overflowY: 'auto'
        });
        return _this;
    }
    // Instantiates the TimeGrid object this view needs. Draws from this.timeGridClass
    AgendaView.prototype.instantiateTimeGrid = function () {
        var timeGrid = new this.timeGridClass(this);
        util_1.copyOwnProps(agendaTimeGridMethods, timeGrid);
        return timeGrid;
    };
    // Instantiates the DayGrid object this view might need. Draws from this.dayGridClass
    AgendaView.prototype.instantiateDayGrid = function () {
        var dayGrid = new this.dayGridClass(this);
        util_1.copyOwnProps(agendaDayGridMethods, dayGrid);
        return dayGrid;
    };
    /* Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    AgendaView.prototype.renderSkeleton = function () {
        var timeGridWrapEl;
        var timeGridEl;
        this.el.addClass('fc-agenda-view').html(this.renderSkeletonHtml());
        this.scroller.render();
        timeGridWrapEl = this.scroller.el.addClass('fc-time-grid-container');
        timeGridEl = $('<div class="fc-time-grid" />').appendTo(timeGridWrapEl);
        this.el.find('.fc-body > tr > td').append(timeGridWrapEl);
        this.timeGrid.headContainerEl = this.el.find('.fc-head-container');
        this.timeGrid.setElement(timeGridEl);
        if (this.dayGrid) {
            this.dayGrid.setElement(this.el.find('.fc-day-grid'));
            // have the day-grid extend it's coordinate area over the <hr> dividing the two grids
            this.dayGrid.bottomCoordPadding = this.dayGrid.el.next('hr').outerHeight();
        }
    };
    AgendaView.prototype.unrenderSkeleton = function () {
        this.timeGrid.removeElement();
        if (this.dayGrid) {
            this.dayGrid.removeElement();
        }
        this.scroller.destroy();
    };
    // Builds the HTML skeleton for the view.
    // The day-grid and time-grid components will render inside containers defined by this HTML.
    AgendaView.prototype.renderSkeletonHtml = function () {
        var theme = this.calendar.theme;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (this.opt('columnHeader') ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '">' +
            (this.dayGrid ?
                '<div class="fc-day-grid"/>' +
                    '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '"/>' :
                '') +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    // Generates an HTML attribute string for setting the width of the axis, if it is known
    AgendaView.prototype.axisStyleAttr = function () {
        if (this.axisWidth != null) {
            return 'style="width:' + this.axisWidth + 'px"';
        }
        return '';
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    AgendaView.prototype.getNowIndicatorUnit = function () {
        return this.timeGrid.getNowIndicatorUnit();
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    // Adjusts the vertical dimensions of the view to the specified values
    AgendaView.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        var eventLimit;
        var scrollerHeight;
        var scrollbarWidths;
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        // make all axis cells line up, and record the width so newly created axis cells will have it
        this.axisWidth = util_1.matchCellWidths(this.el.find('.fc-axis'));
        // hack to give the view some height prior to timeGrid's columns being rendered
        // TODO: separate setting height from scroller VS timeGrid.
        if (!this.timeGrid.colEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        // set of fake row elements that must compensate when scroller has scrollbars
        var noScrollRowEls = this.el.find('.fc-row:not(.fc-scroller *)');
        // reset all dimensions back to the original state
        this.timeGrid.bottomRuleEl.hide(); // .show() will be called later if this <hr> is necessary
        this.scroller.clear(); // sets height to 'auto' and clears overflow
        util_1.uncompensateScroll(noScrollRowEls);
        // limit number of events in the all-day area
        if (this.dayGrid) {
            this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
            eventLimit = this.opt('eventLimit');
            if (eventLimit && typeof eventLimit !== 'number') {
                eventLimit = AGENDA_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
            }
            if (eventLimit) {
                this.dayGrid.limitRows(eventLimit);
            }
        }
        if (!isAuto) {
            scrollerHeight = this.computeScrollerHeight(totalHeight);
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) {
                // make the all-day and header rows lines up
                util_1.compensateScroll(noScrollRowEls, scrollbarWidths);
                // the scrollbar compensation might have changed text flow, which might affect height, so recalculate
                // and reapply the desired height to the scroller.
                scrollerHeight = this.computeScrollerHeight(totalHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
            // if there's any space below the slats, show the horizontal rule.
            // this won't cause any new overflow, because lockOverflow already called.
            if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
                this.timeGrid.bottomRuleEl.show();
            }
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    AgendaView.prototype.computeScrollerHeight = function (totalHeight) {
        return totalHeight -
            util_1.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes the initial pre-configured scroll state prior to allowing the user to change it
    AgendaView.prototype.computeInitialDateScroll = function () {
        var scrollTime = moment.duration(this.opt('scrollTime'));
        var top = this.timeGrid.computeTimeTop(scrollTime);
        // zoom can give weird floating-point values. rather scroll a little bit further
        top = Math.ceil(top);
        if (top) {
            top++; // to overcome top border that slots beyond the first have. looks better
        }
        return { top: top };
    };
    AgendaView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    AgendaView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    /* Hit Areas
    ------------------------------------------------------------------------------------------------------------------*/
    // forward all hit-related method calls to the grids (dayGrid might not be defined)
    AgendaView.prototype.getHitFootprint = function (hit) {
        // TODO: hit.component is set as a hack to identify where the hit came from
        return hit.component.getHitFootprint(hit);
    };
    AgendaView.prototype.getHitEl = function (hit) {
        // TODO: hit.component is set as a hack to identify where the hit came from
        return hit.component.getHitEl(hit);
    };
    /* Event Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    AgendaView.prototype.executeEventRender = function (eventsPayload) {
        var dayEventsPayload = {};
        var timedEventsPayload = {};
        var id;
        var eventInstanceGroup;
        // separate the events into all-day and timed
        for (id in eventsPayload) {
            eventInstanceGroup = eventsPayload[id];
            if (eventInstanceGroup.getEventDef().isAllDay()) {
                dayEventsPayload[id] = eventInstanceGroup;
            }
            else {
                timedEventsPayload[id] = eventInstanceGroup;
            }
        }
        this.timeGrid.executeEventRender(timedEventsPayload);
        if (this.dayGrid) {
            this.dayGrid.executeEventRender(dayEventsPayload);
        }
    };
    /* Dragging/Resizing Routing
    ------------------------------------------------------------------------------------------------------------------*/
    // A returned value of `true` signals that a mock "helper" event has been rendered.
    AgendaView.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var groups = groupEventFootprintsByAllDay(eventFootprints);
        var renderedHelper = false;
        renderedHelper = this.timeGrid.renderDrag(groups.timed, seg, isTouch);
        if (this.dayGrid) {
            renderedHelper = this.dayGrid.renderDrag(groups.allDay, seg, isTouch) || renderedHelper;
        }
        return renderedHelper;
    };
    AgendaView.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        var groups = groupEventFootprintsByAllDay(eventFootprints);
        this.timeGrid.renderEventResize(groups.timed, seg, isTouch);
        if (this.dayGrid) {
            this.dayGrid.renderEventResize(groups.allDay, seg, isTouch);
        }
    };
    /* Selection
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of a selection
    AgendaView.prototype.renderSelectionFootprint = function (componentFootprint) {
        if (!componentFootprint.isAllDay) {
            this.timeGrid.renderSelectionFootprint(componentFootprint);
        }
        else if (this.dayGrid) {
            this.dayGrid.renderSelectionFootprint(componentFootprint);
        }
    };
    return AgendaView;
}(View_1.default));
exports.default = AgendaView;
AgendaView.prototype.timeGridClass = TimeGrid_1.default;
AgendaView.prototype.dayGridClass = DayGrid_1.default;
// Will customize the rendering behavior of the AgendaView's timeGrid
agendaTimeGridMethods = {
    // Generates the HTML that will go before the day-of week header cells
    renderHeadIntroHtml: function () {
        var view = this.view;
        var calendar = view.calendar;
        var weekStart = calendar.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, true);
        var weekText;
        if (this.opt('weekNumbers')) {
            weekText = weekStart.format(this.opt('smallWeekFormat'));
            return '' +
                '<th class="fc-axis fc-week-number ' + calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '>' +
                view.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                { date: weekStart, type: 'week', forceOff: this.colCnt > 1 }, util_1.htmlEscape(weekText) // inner HTML
                ) +
                '</th>';
        }
        else {
            return '<th class="fc-axis ' + calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '></th>';
        }
    },
    // Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
    renderBgIntroHtml: function () {
        var view = this.view;
        return '<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '></td>';
    },
    // Generates the HTML that goes before all other types of cells.
    // Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
    renderIntroHtml: function () {
        var view = this.view;
        return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
    }
};
// Will customize the rendering behavior of the AgendaView's dayGrid
agendaDayGridMethods = {
    // Generates the HTML that goes before the all-day cells
    renderBgIntroHtml: function () {
        var view = this.view;
        return '' +
            '<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
            '<span>' + // needed for matchCellWidths
            view.getAllDayHtml() +
            '</span>' +
            '</td>';
    },
    // Generates the HTML that goes before all other types of cells.
    // Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
    renderIntroHtml: function () {
        var view = this.view;
        return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
    }
};
function groupEventFootprintsByAllDay(eventFootprints) {
    var allDay = [];
    var timed = [];
    var i;
    for (i = 0; i < eventFootprints.length; i++) {
        if (eventFootprints[i].componentFootprint.isAllDay) {
            allDay.push(eventFootprints[i]);
        }
        else {
            timed.push(eventFootprints[i]);
        }
    }
    return { allDay: allDay, timed: timed };
}


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var InteractiveDateComponent_1 = __webpack_require__(40);
var BusinessHourRenderer_1 = __webpack_require__(56);
var StandardInteractionsMixin_1 = __webpack_require__(60);
var DayTableMixin_1 = __webpack_require__(55);
var CoordCache_1 = __webpack_require__(53);
var UnzonedRange_1 = __webpack_require__(5);
var ComponentFootprint_1 = __webpack_require__(12);
var TimeGridEventRenderer_1 = __webpack_require__(246);
var TimeGridHelperRenderer_1 = __webpack_require__(247);
var TimeGridFillRenderer_1 = __webpack_require__(248);
/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// We mixin DayTable, even though there is only a single row of days
// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 }
];
var TimeGrid = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGrid, _super);
    function TimeGrid(view) {
        var _this = _super.call(this, view) || this;
        _this.processOptions();
        return _this;
    }
    // Slices up the given span (unzoned start/end with other misc data) into an array of segments
    TimeGrid.prototype.componentFootprintToSegs = function (componentFootprint) {
        var segs = this.sliceRangeByTimes(componentFootprint.unzonedRange);
        var i;
        for (i = 0; i < segs.length; i++) {
            if (this.isRTL) {
                segs[i].col = this.daysPerRow - 1 - segs[i].dayIndex;
            }
            else {
                segs[i].col = segs[i].dayIndex;
            }
        }
        return segs;
    };
    /* Date Handling
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.sliceRangeByTimes = function (unzonedRange) {
        var segs = [];
        var segRange;
        var dayIndex;
        for (dayIndex = 0; dayIndex < this.daysPerRow; dayIndex++) {
            segRange = unzonedRange.intersect(this.dayRanges[dayIndex]);
            if (segRange) {
                segs.push({
                    startMs: segRange.startMs,
                    endMs: segRange.endMs,
                    isStart: segRange.isStart,
                    isEnd: segRange.isEnd,
                    dayIndex: dayIndex
                });
            }
        }
        return segs;
    };
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Parses various options into properties of this object
    TimeGrid.prototype.processOptions = function () {
        var slotDuration = this.opt('slotDuration');
        var snapDuration = this.opt('snapDuration');
        var input;
        slotDuration = moment.duration(slotDuration);
        snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;
        this.slotDuration = slotDuration;
        this.snapDuration = snapDuration;
        this.snapsPerSlot = slotDuration / snapDuration; // TODO: ensure an integer multiple?
        // might be an array value (for TimelineView).
        // if so, getting the most granular entry (the last one probably).
        input = this.opt('slotLabelFormat');
        if ($.isArray(input)) {
            input = input[input.length - 1];
        }
        this.labelFormat = input ||
            this.opt('smallTimeFormat'); // the computed default
        input = this.opt('slotLabelInterval');
        this.labelInterval = input ?
            moment.duration(input) :
            this.computeLabelInterval(slotDuration);
    };
    // Computes an automatic value for slotLabelInterval
    TimeGrid.prototype.computeLabelInterval = function (slotDuration) {
        var i;
        var labelInterval;
        var slotsPerLabel;
        // find the smallest stock label interval that results in more than one slots-per-label
        for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
            labelInterval = moment.duration(AGENDA_STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = util_1.divideDurationByDuration(labelInterval, slotDuration);
            if (util_1.isInt(slotsPerLabel) && slotsPerLabel > 1) {
                return labelInterval;
            }
        }
        return moment.duration(slotDuration); // fall back. clone
    };
    /* Date Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.renderDates = function (dateProfile) {
        this.dateProfile = dateProfile;
        this.updateDayTable();
        this.renderSlats();
        this.renderColumns();
    };
    TimeGrid.prototype.unrenderDates = function () {
        // this.unrenderSlats(); // don't need this because repeated .html() calls clear
        this.unrenderColumns();
    };
    TimeGrid.prototype.renderSkeleton = function () {
        var theme = this.view.calendar.theme;
        this.el.html('<div class="fc-bg"></div>' +
            '<div class="fc-slats"></div>' +
            '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" style="display:none" />');
        this.bottomRuleEl = this.el.find('hr');
    };
    TimeGrid.prototype.renderSlats = function () {
        var theme = this.view.calendar.theme;
        this.slatContainerEl = this.el.find('> .fc-slats')
            .html(// avoids needing ::unrenderSlats()
        '<table class="' + theme.getClass('tableGrid') + '">' +
            this.renderSlatRowHtml() +
            '</table>');
        this.slatEls = this.slatContainerEl.find('tr');
        this.slatCoordCache = new CoordCache_1.default({
            els: this.slatEls,
            isVertical: true
        });
    };
    // Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
    TimeGrid.prototype.renderSlatRowHtml = function () {
        var view = this.view;
        var calendar = view.calendar;
        var theme = calendar.theme;
        var isRTL = this.isRTL;
        var dateProfile = this.dateProfile;
        var html = '';
        var slotTime = moment.duration(+dateProfile.minTime); // wish there was .clone() for durations
        var slotIterator = moment.duration(0);
        var slotDate; // will be on the view's first day, but we only care about its time
        var isLabeled;
        var axisHtml;
        // Calculate the time for each slot
        while (slotTime < dateProfile.maxTime) {
            slotDate = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.startMs).time(slotTime);
            isLabeled = util_1.isInt(util_1.divideDurationByDuration(slotIterator, this.labelInterval));
            axisHtml =
                '<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
                    (isLabeled ?
                        '<span>' + // for matchCellWidths
                            util_1.htmlEscape(slotDate.format(this.labelFormat)) +
                            '</span>' :
                        '') +
                    '</td>';
            html +=
                '<tr data-time="' + slotDate.format('HH:mm:ss') + '"' +
                    (isLabeled ? '' : ' class="fc-minor"') +
                    '>' +
                    (!isRTL ? axisHtml : '') +
                    '<td class="' + theme.getClass('widgetContent') + '"/>' +
                    (isRTL ? axisHtml : '') +
                    '</tr>';
            slotTime.add(this.slotDuration);
            slotIterator.add(this.slotDuration);
        }
        return html;
    };
    TimeGrid.prototype.renderColumns = function () {
        var dateProfile = this.dateProfile;
        var theme = this.view.calendar.theme;
        this.dayRanges = this.dayDates.map(function (dayDate) {
            return new UnzonedRange_1.default(dayDate.clone().add(dateProfile.minTime), dayDate.clone().add(dateProfile.maxTime));
        });
        if (this.headContainerEl) {
            this.headContainerEl.html(this.renderHeadHtml());
        }
        this.el.find('> .fc-bg').html('<table class="' + theme.getClass('tableGrid') + '">' +
            this.renderBgTrHtml(0) + // row=0
            '</table>');
        this.colEls = this.el.find('.fc-day, .fc-disabled-day');
        this.colCoordCache = new CoordCache_1.default({
            els: this.colEls,
            isHorizontal: true
        });
        this.renderContentSkeleton();
    };
    TimeGrid.prototype.unrenderColumns = function () {
        this.unrenderContentSkeleton();
    };
    /* Content Skeleton
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders the DOM that the view's content will live in
    TimeGrid.prototype.renderContentSkeleton = function () {
        var cellHtml = '';
        var i;
        var skeletonEl;
        for (i = 0; i < this.colCnt; i++) {
            cellHtml +=
                '<td>' +
                    '<div class="fc-content-col">' +
                    '<div class="fc-event-container fc-helper-container"></div>' +
                    '<div class="fc-event-container"></div>' +
                    '<div class="fc-highlight-container"></div>' +
                    '<div class="fc-bgevent-container"></div>' +
                    '<div class="fc-business-container"></div>' +
                    '</div>' +
                    '</td>';
        }
        skeletonEl = this.contentSkeletonEl = $('<div class="fc-content-skeleton">' +
            '<table>' +
            '<tr>' + cellHtml + '</tr>' +
            '</table>' +
            '</div>');
        this.colContainerEls = skeletonEl.find('.fc-content-col');
        this.helperContainerEls = skeletonEl.find('.fc-helper-container');
        this.fgContainerEls = skeletonEl.find('.fc-event-container:not(.fc-helper-container)');
        this.bgContainerEls = skeletonEl.find('.fc-bgevent-container');
        this.highlightContainerEls = skeletonEl.find('.fc-highlight-container');
        this.businessContainerEls = skeletonEl.find('.fc-business-container');
        this.bookendCells(skeletonEl.find('tr')); // TODO: do this on string level
        this.el.append(skeletonEl);
    };
    TimeGrid.prototype.unrenderContentSkeleton = function () {
        if (this.contentSkeletonEl) {
            this.contentSkeletonEl.remove();
            this.contentSkeletonEl = null;
            this.colContainerEls = null;
            this.helperContainerEls = null;
            this.fgContainerEls = null;
            this.bgContainerEls = null;
            this.highlightContainerEls = null;
            this.businessContainerEls = null;
        }
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
    TimeGrid.prototype.groupSegsByCol = function (segs) {
        var segsByCol = [];
        var i;
        for (i = 0; i < this.colCnt; i++) {
            segsByCol.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segsByCol[segs[i].col].push(segs[i]);
        }
        return segsByCol;
    };
    // Given segments grouped by column, insert the segments' elements into a parallel array of container
    // elements, each living within a column.
    TimeGrid.prototype.attachSegsByCol = function (segsByCol, containerEls) {
        var col;
        var segs;
        var i;
        for (col = 0; col < this.colCnt; col++) {
            segs = segsByCol[col];
            for (i = 0; i < segs.length; i++) {
                containerEls.eq(col).append(segs[i].el);
            }
        }
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.getNowIndicatorUnit = function () {
        return 'minute'; // will refresh on the minute
    };
    TimeGrid.prototype.renderNowIndicator = function (date) {
        // HACK: if date columns not ready for some reason (scheduler)
        if (!this.colContainerEls) {
            return;
        }
        // seg system might be overkill, but it handles scenario where line needs to be rendered
        //  more than once because of columns with the same date (resources columns for example)
        var segs = this.componentFootprintToSegs(new ComponentFootprint_1.default(new UnzonedRange_1.default(date, date.valueOf() + 1), // protect against null range
        false // all-day
        ));
        var top = this.computeDateTop(date, date);
        var nodes = [];
        var i;
        // render lines within the columns
        for (i = 0; i < segs.length; i++) {
            nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>')
                .css('top', top)
                .appendTo(this.colContainerEls.eq(segs[i].col))[0]);
        }
        // render an arrow over the axis
        if (segs.length > 0) {
            nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>')
                .css('top', top)
                .appendTo(this.el.find('.fc-content-skeleton'))[0]);
        }
        this.nowIndicatorEls = $(nodes);
    };
    TimeGrid.prototype.unrenderNowIndicator = function () {
        if (this.nowIndicatorEls) {
            this.nowIndicatorEls.remove();
            this.nowIndicatorEls = null;
        }
    };
    /* Coordinates
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        this.slatCoordCache.build();
        if (isResize) {
            this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []));
        }
    };
    TimeGrid.prototype.getTotalSlatHeight = function () {
        return this.slatContainerEl.outerHeight();
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // `ms` can be a millisecond UTC time OR a UTC moment.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeGrid.prototype.computeDateTop = function (ms, startOfDayDate) {
        return this.computeTimeTop(moment.duration(ms - startOfDayDate.clone().stripTime()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    TimeGrid.prototype.computeTimeTop = function (time) {
        var len = this.slatEls.length;
        var dateProfile = this.dateProfile;
        var slatCoverage = (time - dateProfile.minTime) / this.slotDuration; // floating-point value of # of slots covered
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because minTime/maxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return this.slatCoordCache.getTopPosition(slatIndex) +
            this.slatCoordCache.getHeight(slatIndex) * slatRemainder;
    };
    // Refreshes the CSS top/bottom coordinates for each segment element.
    // Works when called after initial render, after a window resize/zoom for example.
    TimeGrid.prototype.updateSegVerticals = function (segs) {
        this.computeSegVerticals(segs);
        this.assignSegVerticals(segs);
    };
    // For each segment in an array, computes and assigns its top and bottom properties
    TimeGrid.prototype.computeSegVerticals = function (segs) {
        var eventMinHeight = this.opt('agendaEventMinHeight');
        var i;
        var seg;
        var dayDate;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            dayDate = this.dayDates[seg.dayIndex];
            seg.top = this.computeDateTop(seg.startMs, dayDate);
            seg.bottom = Math.max(seg.top + eventMinHeight, this.computeDateTop(seg.endMs, dayDate));
        }
    };
    // Given segments that already have their top/bottom properties computed, applies those values to
    // the segments' elements.
    TimeGrid.prototype.assignSegVerticals = function (segs) {
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            seg.el.css(this.generateSegVerticalCss(seg));
        }
    };
    // Generates an object with CSS properties for the top/bottom coordinates of a segment element
    TimeGrid.prototype.generateSegVerticalCss = function (seg) {
        return {
            top: seg.top,
            bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
        };
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.prepareHits = function () {
        this.colCoordCache.build();
        this.slatCoordCache.build();
    };
    TimeGrid.prototype.releaseHits = function () {
        this.colCoordCache.clear();
        // NOTE: don't clear slatCoordCache because we rely on it for computeTimeTop
    };
    TimeGrid.prototype.queryHit = function (leftOffset, topOffset) {
        var snapsPerSlot = this.snapsPerSlot;
        var colCoordCache = this.colCoordCache;
        var slatCoordCache = this.slatCoordCache;
        if (colCoordCache.isLeftInBounds(leftOffset) && slatCoordCache.isTopInBounds(topOffset)) {
            var colIndex = colCoordCache.getHorizontalIndex(leftOffset);
            var slatIndex = slatCoordCache.getVerticalIndex(topOffset);
            if (colIndex != null && slatIndex != null) {
                var slatTop = slatCoordCache.getTopOffset(slatIndex);
                var slatHeight = slatCoordCache.getHeight(slatIndex);
                var partial = (topOffset - slatTop) / slatHeight; // floating point number between 0 and 1
                var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
                var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
                var snapTop = slatTop + (localSnapIndex / snapsPerSlot) * slatHeight;
                var snapBottom = slatTop + ((localSnapIndex + 1) / snapsPerSlot) * slatHeight;
                return {
                    col: colIndex,
                    snap: snapIndex,
                    component: this,
                    left: colCoordCache.getLeftOffset(colIndex),
                    right: colCoordCache.getRightOffset(colIndex),
                    top: snapTop,
                    bottom: snapBottom
                };
            }
        }
    };
    TimeGrid.prototype.getHitFootprint = function (hit) {
        var start = this.getCellDate(0, hit.col); // row=0
        var time = this.computeSnapTime(hit.snap); // pass in the snap-index
        var end;
        start.time(time);
        end = start.clone().add(this.snapDuration);
        return new ComponentFootprint_1.default(new UnzonedRange_1.default(start, end), false // all-day?
        );
    };
    // Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
    TimeGrid.prototype.computeSnapTime = function (snapIndex) {
        return moment.duration(this.dateProfile.minTime + this.snapDuration * snapIndex);
    };
    TimeGrid.prototype.getHitEl = function (hit) {
        return this.colEls.eq(hit.col);
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event being dragged over the specified date(s).
    // A returned value of `true` signals that a mock "helper" event has been rendered.
    TimeGrid.prototype.renderDrag = function (eventFootprints, seg, isTouch) {
        var i;
        if (seg) {
            if (eventFootprints.length) {
                this.helperRenderer.renderEventDraggingFootprints(eventFootprints, seg, isTouch);
                // signal that a helper has been rendered
                return true;
            }
        }
        else {
            for (i = 0; i < eventFootprints.length; i++) {
                this.renderHighlight(eventFootprints[i].componentFootprint);
            }
        }
    };
    // Unrenders any visual indication of an event being dragged
    TimeGrid.prototype.unrenderDrag = function () {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of an event being resized
    TimeGrid.prototype.renderEventResize = function (eventFootprints, seg, isTouch) {
        this.helperRenderer.renderEventResizingFootprints(eventFootprints, seg, isTouch);
    };
    // Unrenders any visual indication of an event being resized
    TimeGrid.prototype.unrenderEventResize = function () {
        this.helperRenderer.unrender();
    };
    /* Selection
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
    TimeGrid.prototype.renderSelectionFootprint = function (componentFootprint) {
        if (this.opt('selectHelper')) {
            this.helperRenderer.renderComponentFootprint(componentFootprint);
        }
        else {
            this.renderHighlight(componentFootprint);
        }
    };
    // Unrenders any visual indication of a selection
    TimeGrid.prototype.unrenderSelection = function () {
        this.helperRenderer.unrender();
        this.unrenderHighlight();
    };
    return TimeGrid;
}(InteractiveDateComponent_1.default));
exports.default = TimeGrid;
TimeGrid.prototype.eventRendererClass = TimeGridEventRenderer_1.default;
TimeGrid.prototype.businessHourRendererClass = BusinessHourRenderer_1.default;
TimeGrid.prototype.helperRendererClass = TimeGridHelperRenderer_1.default;
TimeGrid.prototype.fillRendererClass = TimeGridFillRenderer_1.default;
StandardInteractionsMixin_1.default.mixInto(TimeGrid);
DayTableMixin_1.default.mixInto(TimeGrid);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var UnzonedRange_1 = __webpack_require__(5);
var DateProfileGenerator_1 = __webpack_require__(221);
var BasicViewDateProfileGenerator = /** @class */ (function (_super) {
    tslib_1.__extends(BasicViewDateProfileGenerator, _super);
    function BasicViewDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    BasicViewDateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        var renderUnzonedRange = _super.prototype.buildRenderRange.call(this, currentUnzonedRange, currentRangeUnit, isRangeAllDay); // an UnzonedRange
        var start = this.msToUtcMoment(renderUnzonedRange.startMs, isRangeAllDay);
        var end = this.msToUtcMoment(renderUnzonedRange.endMs, isRangeAllDay);
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start.startOf('week');
            // make end-of-week if not already
            if (end.weekday()) {
                end.add(1, 'week').startOf('week'); // exclusively move backwards
            }
        }
        return new UnzonedRange_1.default(start, end);
    };
    return BasicViewDateProfileGenerator;
}(DateProfileGenerator_1.default));
exports.default = BasicViewDateProfileGenerator;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var moment = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var BasicView_1 = __webpack_require__(62);
var MonthViewDateProfileGenerator_1 = __webpack_require__(253);
/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/
var MonthView = /** @class */ (function (_super) {
    tslib_1.__extends(MonthView, _super);
    function MonthView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Overrides the default BasicView behavior to have special multi-week auto-height logic
    MonthView.prototype.setGridHeight = function (height, isAuto) {
        // if auto, make the height of each row the height that it would be if there were 6 weeks
        if (isAuto) {
            height *= this.dayGrid.rowCnt / 6;
        }
        util_1.distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
    };
    MonthView.prototype.isDateInOtherMonth = function (date, dateProfile) {
        return date.month() !== moment.utc(dateProfile.currentUnzonedRange.startMs).month(); // TODO: optimize
    };
    return MonthView;
}(BasicView_1.default));
exports.default = MonthView;
MonthView.prototype.dateProfileGeneratorClass = MonthViewDateProfileGenerator_1.default;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var UnzonedRange_1 = __webpack_require__(5);
var View_1 = __webpack_require__(41);
var Scroller_1 = __webpack_require__(39);
var ListEventRenderer_1 = __webpack_require__(254);
var ListEventPointing_1 = __webpack_require__(255);
/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /** @class */ (function (_super) {
    tslib_1.__extends(ListView, _super);
    function ListView(calendar, viewSpec) {
        var _this = _super.call(this, calendar, viewSpec) || this;
        _this.segSelector = '.fc-list-item'; // which elements accept event actions
        _this.scroller = new Scroller_1.default({
            overflowX: 'hidden',
            overflowY: 'auto'
        });
        return _this;
    }
    ListView.prototype.renderSkeleton = function () {
        this.el.addClass('fc-list-view ' +
            this.calendar.theme.getClass('listView'));
        this.scroller.render();
        this.scroller.el.appendTo(this.el);
        this.contentEl = this.scroller.scrollEl; // shortcut
    };
    ListView.prototype.unrenderSkeleton = function () {
        this.scroller.destroy(); // will remove the Grid too
    };
    ListView.prototype.updateSize = function (totalHeight, isAuto, isResize) {
        _super.prototype.updateSize.call(this, totalHeight, isAuto, isResize);
        this.scroller.clear(); // sets height to 'auto' and clears overflow
        if (!isAuto) {
            this.scroller.setHeight(this.computeScrollerHeight(totalHeight));
        }
    };
    ListView.prototype.computeScrollerHeight = function (totalHeight) {
        return totalHeight -
            util_1.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    ListView.prototype.renderDates = function (dateProfile) {
        var calendar = this.calendar;
        var dayStart = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.startMs, true);
        var viewEnd = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.endMs, true);
        var dayDates = [];
        var dayRanges = [];
        while (dayStart < viewEnd) {
            dayDates.push(dayStart.clone());
            dayRanges.push(new UnzonedRange_1.default(dayStart, dayStart.clone().add(1, 'day')));
            dayStart.add(1, 'day');
        }
        this.dayDates = dayDates;
        this.dayRanges = dayRanges;
        // all real rendering happens in EventRenderer
    };
    // slices by day
    ListView.prototype.componentFootprintToSegs = function (footprint) {
        var dayRanges = this.dayRanges;
        var dayIndex;
        var segRange;
        var seg;
        var segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex++) {
            segRange = footprint.unzonedRange.intersect(dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    startMs: segRange.startMs,
                    endMs: segRange.endMs,
                    isStart: segRange.isStart,
                    isEnd: segRange.isEnd,
                    dayIndex: dayIndex
                };
                segs.push(seg);
                // detect when footprint won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !footprint.isAllDay &&
                    dayIndex + 1 < dayRanges.length &&
                    footprint.unzonedRange.endMs < dayRanges[dayIndex + 1].startMs + this.nextDayThreshold) {
                    seg.endMs = footprint.unzonedRange.endMs;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    };
    ListView.prototype.renderEmptyMessage = function () {
        this.contentEl.html('<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
            '<div class="fc-list-empty-wrap1">' +
            '<div class="fc-list-empty">' +
            util_1.htmlEscape(this.opt('noEventsMessage')) +
            '</div>' +
            '</div>' +
            '</div>');
    };
    // render the event segments in the view
    ListView.prototype.renderSegList = function (allSegs) {
        var segsByDay = this.groupSegsByDay(allSegs); // sparse array
        var dayIndex;
        var daySegs;
        var i;
        var tableEl = $('<table class="fc-list-table ' + this.calendar.theme.getClass('tableList') + '"><tbody/></table>');
        var tbodyEl = tableEl.find('tbody');
        for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
            daySegs = segsByDay[dayIndex];
            if (daySegs) {
                // append a day header
                tbodyEl.append(this.dayHeaderHtml(this.dayDates[dayIndex]));
                this.eventRenderer.sortEventSegs(daySegs);
                for (i = 0; i < daySegs.length; i++) {
                    tbodyEl.append(daySegs[i].el); // append event row
                }
            }
        }
        this.contentEl.empty().append(tableEl);
    };
    // Returns a sparse array of arrays, segs grouped by their dayIndex
    ListView.prototype.groupSegsByDay = function (segs) {
        var segsByDay = []; // sparse array
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
                .push(seg);
        }
        return segsByDay;
    };
    // generates the HTML for the day headers that live amongst the event rows
    ListView.prototype.dayHeaderHtml = function (dayDate) {
        var mainFormat = this.opt('listDayFormat');
        var altFormat = this.opt('listDayAltFormat');
        return '<tr class="fc-list-heading" data-date="' + dayDate.format('YYYY-MM-DD') + '">' +
            '<td class="' + (this.calendar.theme.getClass('tableListHeading') ||
            this.calendar.theme.getClass('widgetHeader')) + '" colspan="3">' +
            (mainFormat ?
                this.buildGotoAnchorHtml(dayDate, { 'class': 'fc-list-heading-main' }, util_1.htmlEscape(dayDate.format(mainFormat)) // inner HTML
                ) :
                '') +
            (altFormat ?
                this.buildGotoAnchorHtml(dayDate, { 'class': 'fc-list-heading-alt' }, util_1.htmlEscape(dayDate.format(altFormat)) // inner HTML
                ) :
                '') +
            '</td>' +
            '</tr>';
    };
    return ListView;
}(View_1.default));
exports.default = ListView;
ListView.prototype.eventRendererClass = ListEventRenderer_1.default;
ListView.prototype.eventPointingClass = ListEventPointing_1.default;


/***/ }),
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
var exportHooks = __webpack_require__(16);
var util_1 = __webpack_require__(4);
var Calendar_1 = __webpack_require__(220);
// for intentional side-effects
__webpack_require__(10);
__webpack_require__(47);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
$.fullCalendar = exportHooks;
$.fn.fullCalendar = function (options) {
    var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
    var res = this; // what this function will return (this jQuery object by default)
    this.each(function (i, _element) {
        var element = $(_element);
        var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
        var singleRes; // the returned value of this single method call
        // a method call
        if (typeof options === 'string') {
            if (options === 'getCalendar') {
                if (!i) {
                    res = calendar;
                }
            }
            else if (options === 'destroy') {
                if (calendar) {
                    calendar.destroy();
                    element.removeData('fullCalendar');
                }
            }
            else if (!calendar) {
                util_1.warn('Attempting to call a FullCalendar method on an element with no calendar.');
            }
            else if ($.isFunction(calendar[options])) {
                singleRes = calendar[options].apply(calendar, args);
                if (!i) {
                    res = singleRes; // record the first method call result
                }
                if (options === 'destroy') {
                    element.removeData('fullCalendar');
                }
            }
            else {
                util_1.warn("'" + options + "' is an unknown FullCalendar method.");
            }
        }
        else if (!calendar) {
            calendar = new Calendar_1.default(element, options);
            element.data('fullCalendar', calendar);
            calendar.render();
        }
    });
    return res;
};
module.exports = exportHooks;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Model_1 = __webpack_require__(48);
var Component = /** @class */ (function (_super) {
    tslib_1.__extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.setElement = function (el) {
        this.el = el;
        this.bindGlobalHandlers();
        this.renderSkeleton();
        this.set('isInDom', true);
    };
    Component.prototype.removeElement = function () {
        this.unset('isInDom');
        this.unrenderSkeleton();
        this.unbindGlobalHandlers();
        this.el.remove();
        // NOTE: don't null-out this.el in case the View was destroyed within an API callback.
        // We don't null-out the View's other jQuery element references upon destroy,
        //  so we shouldn't kill this.el either.
    };
    Component.prototype.bindGlobalHandlers = function () {
        // subclasses can override
    };
    Component.prototype.unbindGlobalHandlers = function () {
        // subclasses can override
    };
    /*
    NOTE: Can't have a `render` method. Read the deprecation notice in View::executeDateRender
    */
    // Renders the basic structure of the view before any content is rendered
    Component.prototype.renderSkeleton = function () {
        // subclasses should implement
    };
    // Unrenders the basic structure of the view
    Component.prototype.unrenderSkeleton = function () {
        // subclasses should implement
    };
    return Component;
}(Model_1.default));
exports.default = Component;


/***/ }),
/* 238 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Iterator = /** @class */ (function () {
    function Iterator(items) {
        this.items = items || [];
    }
    /* Calls a method on every item passing the arguments through */
    Iterator.prototype.proxyCall = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var results = [];
        this.items.forEach(function (item) {
            results.push(item[methodName].apply(item, args));
        });
        return results;
    };
    return Iterator;
}());
exports.default = Iterator;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
/* Toolbar with buttons and title
----------------------------------------------------------------------------------------------------------------------*/
var Toolbar = /** @class */ (function () {
    function Toolbar(calendar, toolbarOptions) {
        this.el = null; // mirrors local `el`
        this.viewsWithButtons = [];
        this.calendar = calendar;
        this.toolbarOptions = toolbarOptions;
    }
    // method to update toolbar-specific options, not calendar-wide options
    Toolbar.prototype.setToolbarOptions = function (newToolbarOptions) {
        this.toolbarOptions = newToolbarOptions;
    };
    // can be called repeatedly and will rerender
    Toolbar.prototype.render = function () {
        var sections = this.toolbarOptions.layout;
        var el = this.el;
        if (sections) {
            if (!el) {
                el = this.el = $("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>");
            }
            else {
                el.empty();
            }
            el.append(this.renderSection('left'))
                .append(this.renderSection('right'))
                .append(this.renderSection('center'))
                .append('<div class="fc-clear"/>');
        }
        else {
            this.removeElement();
        }
    };
    Toolbar.prototype.removeElement = function () {
        if (this.el) {
            this.el.remove();
            this.el = null;
        }
    };
    Toolbar.prototype.renderSection = function (position) {
        var _this = this;
        var calendar = this.calendar;
        var theme = calendar.theme;
        var optionsManager = calendar.optionsManager;
        var viewSpecManager = calendar.viewSpecManager;
        var sectionEl = $('<div class="fc-' + position + '"/>');
        var buttonStr = this.toolbarOptions.layout[position];
        var calendarCustomButtons = optionsManager.get('customButtons') || {};
        var calendarButtonTextOverrides = optionsManager.overrides.buttonText || {};
        var calendarButtonText = optionsManager.get('buttonText') || {};
        if (buttonStr) {
            $.each(buttonStr.split(' '), function (i, buttonGroupStr) {
                var groupChildren = $();
                var isOnlyButtons = true;
                var groupEl;
                $.each(buttonGroupStr.split(','), function (j, buttonName) {
                    var customButtonProps;
                    var viewSpec;
                    var buttonClick;
                    var buttonIcon; // only one of these will be set
                    var buttonText; // "
                    var buttonInnerHtml;
                    var buttonClasses;
                    var buttonEl;
                    var buttonAriaAttr;
                    if (buttonName === 'title') {
                        groupChildren = groupChildren.add($('<h2>&nbsp;</h2>')); // we always want it to take up height
                        isOnlyButtons = false;
                    }
                    else {
                        if ((customButtonProps = calendarCustomButtons[buttonName])) {
                            buttonClick = function (ev) {
                                if (customButtonProps.click) {
                                    customButtonProps.click.call(buttonEl[0], ev);
                                }
                            };
                            (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = customButtonProps.text);
                        }
                        else if ((viewSpec = viewSpecManager.getViewSpec(buttonName))) {
                            _this.viewsWithButtons.push(buttonName);
                            buttonClick = function () {
                                calendar.changeView(buttonName);
                            };
                            (buttonText = viewSpec.buttonTextOverride) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = viewSpec.buttonTextDefault);
                        }
                        else if (calendar[buttonName]) {
                            buttonClick = function () {
                                calendar[buttonName]();
                            };
                            (buttonText = calendarButtonTextOverrides[buttonName]) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = calendarButtonText[buttonName]);
                            //            ^ everything else is considered default
                        }
                        if (buttonClick) {
                            buttonClasses = [
                                'fc-' + buttonName + '-button',
                                theme.getClass('button'),
                                theme.getClass('stateDefault')
                            ];
                            if (buttonText) {
                                buttonInnerHtml = util_1.htmlEscape(buttonText);
                                buttonAriaAttr = '';
                            }
                            else if (buttonIcon) {
                                buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
                                buttonAriaAttr = ' aria-label="' + buttonName + '"';
                            }
                            buttonEl = $(// type="button" so that it doesn't submit a form
                            '<button type="button" class="' + buttonClasses.join(' ') + '"' +
                                buttonAriaAttr +
                                '>' + buttonInnerHtml + '</button>')
                                .click(function (ev) {
                                // don't process clicks for disabled buttons
                                if (!buttonEl.hasClass(theme.getClass('stateDisabled'))) {
                                    buttonClick(ev);
                                    // after the click action, if the button becomes the "active" tab, or disabled,
                                    // it should never have a hover class, so remove it now.
                                    if (buttonEl.hasClass(theme.getClass('stateActive')) ||
                                        buttonEl.hasClass(theme.getClass('stateDisabled'))) {
                                        buttonEl.removeClass(theme.getClass('stateHover'));
                                    }
                                }
                            })
                                .mousedown(function () {
                                // the *down* effect (mouse pressed in).
                                // only on buttons that are not the "active" tab, or disabled
                                buttonEl
                                    .not('.' + theme.getClass('stateActive'))
                                    .not('.' + theme.getClass('stateDisabled'))
                                    .addClass(theme.getClass('stateDown'));
                            })
                                .mouseup(function () {
                                // undo the *down* effect
                                buttonEl.removeClass(theme.getClass('stateDown'));
                            })
                                .hover(function () {
                                // the *hover* effect.
                                // only on buttons that are not the "active" tab, or disabled
                                buttonEl
                                    .not('.' + theme.getClass('stateActive'))
                                    .not('.' + theme.getClass('stateDisabled'))
                                    .addClass(theme.getClass('stateHover'));
                            }, function () {
                                // undo the *hover* effect
                                buttonEl
                                    .removeClass(theme.getClass('stateHover'))
                                    .removeClass(theme.getClass('stateDown')); // if mouseleave happens before mouseup
                            });
                            groupChildren = groupChildren.add(buttonEl);
                        }
                    }
                });
                if (isOnlyButtons) {
                    groupChildren
                        .first().addClass(theme.getClass('cornerLeft')).end()
                        .last().addClass(theme.getClass('cornerRight')).end();
                }
                if (groupChildren.length > 1) {
                    groupEl = $('<div/>');
                    if (isOnlyButtons) {
                        groupEl.addClass(theme.getClass('buttonGroup'));
                    }
                    groupEl.append(groupChildren);
                    sectionEl.append(groupEl);
                }
                else {
                    sectionEl.append(groupChildren); // 1 or 0 children
                }
            });
        }
        return sectionEl;
    };
    Toolbar.prototype.updateTitle = function (text) {
        if (this.el) {
            this.el.find('h2').text(text);
        }
    };
    Toolbar.prototype.activateButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .addClass(this.calendar.theme.getClass('stateActive'));
        }
    };
    Toolbar.prototype.deactivateButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .removeClass(this.calendar.theme.getClass('stateActive'));
        }
    };
    Toolbar.prototype.disableButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .prop('disabled', true)
                .addClass(this.calendar.theme.getClass('stateDisabled'));
        }
    };
    Toolbar.prototype.enableButton = function (buttonName) {
        if (this.el) {
            this.el.find('.fc-' + buttonName + '-button')
                .prop('disabled', false)
                .removeClass(this.calendar.theme.getClass('stateDisabled'));
        }
    };
    Toolbar.prototype.getViewsWithButtons = function () {
        return this.viewsWithButtons;
    };
    return Toolbar;
}());
exports.default = Toolbar;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var options_1 = __webpack_require__(32);
var locale_1 = __webpack_require__(31);
var Model_1 = __webpack_require__(48);
var OptionsManager = /** @class */ (function (_super) {
    tslib_1.__extends(OptionsManager, _super);
    function OptionsManager(_calendar, overrides) {
        var _this = _super.call(this) || this;
        _this._calendar = _calendar;
        _this.overrides = $.extend({}, overrides); // make a copy
        _this.dynamicOverrides = {};
        _this.compute();
        return _this;
    }
    OptionsManager.prototype.add = function (newOptionHash) {
        var optionCnt = 0;
        var optionName;
        this.recordOverrides(newOptionHash); // will trigger this model's watchers
        for (optionName in newOptionHash) {
            optionCnt++;
        }
        // special-case handling of single option change.
        // if only one option change, `optionName` will be its name.
        if (optionCnt === 1) {
            if (optionName === 'height' || optionName === 'contentHeight' || optionName === 'aspectRatio') {
                this._calendar.updateViewSize(true); // isResize=true
                return;
            }
            else if (optionName === 'defaultDate') {
                return; // can't change date this way. use gotoDate instead
            }
            else if (optionName === 'businessHours') {
                return; // this model already reacts to this
            }
            else if (/^(event|select)(Overlap|Constraint|Allow)$/.test(optionName)) {
                return; // doesn't affect rendering. only interactions.
            }
            else if (optionName === 'timezone') {
                this._calendar.view.flash('initialEvents');
                return;
            }
        }
        // catch-all. rerender the header and footer and rebuild/rerender the current view
        this._calendar.renderHeader();
        this._calendar.renderFooter();
        // even non-current views will be affected by this option change. do before rerender
        // TODO: detangle
        this._calendar.viewsByType = {};
        this._calendar.reinitView();
    };
    // Computes the flattened options hash for the calendar and assigns to `this.options`.
    // Assumes this.overrides and this.dynamicOverrides have already been initialized.
    OptionsManager.prototype.compute = function () {
        var locale;
        var localeDefaults;
        var isRTL;
        var dirDefaults;
        var rawOptions;
        locale = util_1.firstDefined(// explicit locale option given?
        this.dynamicOverrides.locale, this.overrides.locale);
        localeDefaults = locale_1.localeOptionHash[locale];
        if (!localeDefaults) {
            locale = options_1.globalDefaults.locale;
            localeDefaults = locale_1.localeOptionHash[locale] || {};
        }
        isRTL = util_1.firstDefined(// based on options computed so far, is direction RTL?
        this.dynamicOverrides.isRTL, this.overrides.isRTL, localeDefaults.isRTL, options_1.globalDefaults.isRTL);
        dirDefaults = isRTL ? options_1.rtlDefaults : {};
        this.dirDefaults = dirDefaults;
        this.localeDefaults = localeDefaults;
        rawOptions = options_1.mergeOptions([
            options_1.globalDefaults,
            dirDefaults,
            localeDefaults,
            this.overrides,
            this.dynamicOverrides
        ]);
        locale_1.populateInstanceComputableOptions(rawOptions); // fill in gaps with computed options
        this.reset(rawOptions);
    };
    // stores the new options internally, but does not rerender anything.
    OptionsManager.prototype.recordOverrides = function (newOptionHash) {
        var optionName;
        for (optionName in newOptionHash) {
            this.dynamicOverrides[optionName] = newOptionHash[optionName];
        }
        this._calendar.viewSpecManager.clearCache(); // the dynamic override invalidates the options in this cache, so just clear it
        this.compute(); // this.options needs to be recomputed after the dynamic override
    };
    return OptionsManager;
}(Model_1.default));
exports.default = OptionsManager;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(0);
var $ = __webpack_require__(3);
var ViewRegistry_1 = __webpack_require__(22);
var util_1 = __webpack_require__(4);
var options_1 = __webpack_require__(32);
var locale_1 = __webpack_require__(31);
var ViewSpecManager = /** @class */ (function () {
    function ViewSpecManager(optionsManager, _calendar) {
        this.optionsManager = optionsManager;
        this._calendar = _calendar;
        this.clearCache();
    }
    ViewSpecManager.prototype.clearCache = function () {
        this.viewSpecCache = {};
    };
    // Gets information about how to create a view. Will use a cache.
    ViewSpecManager.prototype.getViewSpec = function (viewType) {
        var cache = this.viewSpecCache;
        return cache[viewType] || (cache[viewType] = this.buildViewSpec(viewType));
    };
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
    ViewSpecManager.prototype.getUnitViewSpec = function (unit) {
        var viewTypes;
        var i;
        var spec;
        if ($.inArray(unit, util_1.unitsDesc) !== -1) {
            // put views that have buttons first. there will be duplicates, but oh well
            viewTypes = this._calendar.header.getViewsWithButtons(); // TODO: include footer as well?
            $.each(ViewRegistry_1.viewHash, function (viewType) {
                viewTypes.push(viewType);
            });
            for (i = 0; i < viewTypes.length; i++) {
                spec = this.getViewSpec(viewTypes[i]);
                if (spec) {
                    if (spec.singleUnit === unit) {
                        return spec;
                    }
                }
            }
        }
    };
    // Builds an object with information on how to create a given view
    ViewSpecManager.prototype.buildViewSpec = function (requestedViewType) {
        var viewOverrides = this.optionsManager.overrides.views || {};
        var specChain = []; // for the view. lowest to highest priority
        var defaultsChain = []; // for the view. lowest to highest priority
        var overridesChain = []; // for the view. lowest to highest priority
        var viewType = requestedViewType;
        var spec; // for the view
        var overrides; // for the view
        var durationInput;
        var duration;
        var unit;
        // iterate from the specific view definition to a more general one until we hit an actual View class
        while (viewType) {
            spec = ViewRegistry_1.viewHash[viewType];
            overrides = viewOverrides[viewType];
            viewType = null; // clear. might repopulate for another iteration
            if (typeof spec === 'function') {
                spec = { 'class': spec };
            }
            if (spec) {
                specChain.unshift(spec);
                defaultsChain.unshift(spec.defaults || {});
                durationInput = durationInput || spec.duration;
                viewType = viewType || spec.type;
            }
            if (overrides) {
                overridesChain.unshift(overrides); // view-specific option hashes have options at zero-level
                durationInput = durationInput || overrides.duration;
                viewType = viewType || overrides.type;
            }
        }
        spec = util_1.mergeProps(specChain);
        spec.type = requestedViewType;
        if (!spec['class']) {
            return false;
        }
        // fall back to top-level `duration` option
        durationInput = durationInput ||
            this.optionsManager.dynamicOverrides.duration ||
            this.optionsManager.overrides.duration;
        if (durationInput) {
            duration = moment.duration(durationInput);
            if (duration.valueOf()) {
                unit = util_1.computeDurationGreatestUnit(duration, durationInput);
                spec.duration = duration;
                spec.durationUnit = unit;
                // view is a single-unit duration, like "week" or "day"
                // incorporate options for this. lowest priority
                if (duration.as(unit) === 1) {
                    spec.singleUnit = unit;
                    overridesChain.unshift(viewOverrides[unit] || {});
                }
            }
        }
        spec.defaults = options_1.mergeOptions(defaultsChain);
        spec.overrides = options_1.mergeOptions(overridesChain);
        this.buildViewSpecOptions(spec);
        this.buildViewSpecButtonText(spec, requestedViewType);
        return spec;
    };
    // Builds and assigns a view spec's options object from its already-assigned defaults and overrides
    ViewSpecManager.prototype.buildViewSpecOptions = function (spec) {
        var optionsManager = this.optionsManager;
        spec.options = options_1.mergeOptions([
            options_1.globalDefaults,
            spec.defaults,
            optionsManager.dirDefaults,
            optionsManager.localeDefaults,
            optionsManager.overrides,
            spec.overrides,
            optionsManager.dynamicOverrides // dynamically set via setter. highest precedence
        ]);
        locale_1.populateInstanceComputableOptions(spec.options);
    };
    // Computes and assigns a view spec's buttonText-related options
    ViewSpecManager.prototype.buildViewSpecButtonText = function (spec, requestedViewType) {
        var optionsManager = this.optionsManager;
        // given an options object with a possible `buttonText` hash, lookup the buttonText for the
        // requested view, falling back to a generic unit entry like "week" or "day"
        function queryButtonText(options) {
            var buttonText = options.buttonText || {};
            return buttonText[requestedViewType] ||
                // view can decide to look up a certain key
                (spec.buttonTextKey ? buttonText[spec.buttonTextKey] : null) ||
                // a key like "month"
                (spec.singleUnit ? buttonText[spec.singleUnit] : null);
        }
        // highest to lowest priority
        spec.buttonTextOverride =
            queryButtonText(optionsManager.dynamicOverrides) ||
                queryButtonText(optionsManager.overrides) || // constructor-specified buttonText lookup hash takes precedence
                spec.overrides.buttonText; // `buttonText` for view-specific options is a string
        // highest to lowest priority. mirrors buildViewSpecOptions
        spec.buttonTextDefault =
            queryButtonText(optionsManager.localeDefaults) ||
                queryButtonText(optionsManager.dirDefaults) ||
                spec.defaults.buttonText || // a single string. from ViewSubclass.defaults
                queryButtonText(options_1.globalDefaults) ||
                (spec.duration ? this._calendar.humanizeDuration(spec.duration) : null) || // like "3 days"
                requestedViewType; // fall back to given view name
    };
    return ViewSpecManager;
}());
exports.default = ViewSpecManager;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventPeriod_1 = __webpack_require__(243);
var ArrayEventSource_1 = __webpack_require__(52);
var EventSource_1 = __webpack_require__(6);
var EventSourceParser_1 = __webpack_require__(38);
var SingleEventDef_1 = __webpack_require__(13);
var EventInstanceGroup_1 = __webpack_require__(18);
var EmitterMixin_1 = __webpack_require__(11);
var ListenerMixin_1 = __webpack_require__(7);
var EventManager = /** @class */ (function () {
    function EventManager(calendar) {
        this.calendar = calendar;
        this.stickySource = new ArrayEventSource_1.default(calendar);
        this.otherSources = [];
    }
    EventManager.prototype.requestEvents = function (start, end, timezone, force) {
        if (force ||
            !this.currentPeriod ||
            !this.currentPeriod.isWithinRange(start, end) ||
            timezone !== this.currentPeriod.timezone) {
            this.setPeriod(// will change this.currentPeriod
            new EventPeriod_1.default(start, end, timezone));
        }
        return this.currentPeriod.whenReleased();
    };
    // Source Adding/Removing
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.addSource = function (eventSource) {
        this.otherSources.push(eventSource);
        if (this.currentPeriod) {
            this.currentPeriod.requestSource(eventSource); // might release
        }
    };
    EventManager.prototype.removeSource = function (doomedSource) {
        util_1.removeExact(this.otherSources, doomedSource);
        if (this.currentPeriod) {
            this.currentPeriod.purgeSource(doomedSource); // might release
        }
    };
    EventManager.prototype.removeAllSources = function () {
        this.otherSources = [];
        if (this.currentPeriod) {
            this.currentPeriod.purgeAllSources(); // might release
        }
    };
    // Source Refetching
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.refetchSource = function (eventSource) {
        var currentPeriod = this.currentPeriod;
        if (currentPeriod) {
            currentPeriod.freeze();
            currentPeriod.purgeSource(eventSource);
            currentPeriod.requestSource(eventSource);
            currentPeriod.thaw();
        }
    };
    EventManager.prototype.refetchAllSources = function () {
        var currentPeriod = this.currentPeriod;
        if (currentPeriod) {
            currentPeriod.freeze();
            currentPeriod.purgeAllSources();
            currentPeriod.requestSources(this.getSources());
            currentPeriod.thaw();
        }
    };
    // Source Querying
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.getSources = function () {
        return [this.stickySource].concat(this.otherSources);
    };
    // like querySources, but accepts multple match criteria (like multiple IDs)
    EventManager.prototype.multiQuerySources = function (matchInputs) {
        // coerce into an array
        if (!matchInputs) {
            matchInputs = [];
        }
        else if (!$.isArray(matchInputs)) {
            matchInputs = [matchInputs];
        }
        var matchingSources = [];
        var i;
        // resolve raw inputs to real event source objects
        for (i = 0; i < matchInputs.length; i++) {
            matchingSources.push.apply(// append
            matchingSources, this.querySources(matchInputs[i]));
        }
        return matchingSources;
    };
    // matchInput can either by a real event source object, an ID, or the function/URL for the source.
    // returns an array of matching source objects.
    EventManager.prototype.querySources = function (matchInput) {
        var sources = this.otherSources;
        var i;
        var source;
        // given a proper event source object
        for (i = 0; i < sources.length; i++) {
            source = sources[i];
            if (source === matchInput) {
                return [source];
            }
        }
        // an ID match
        source = this.getSourceById(EventSource_1.default.normalizeId(matchInput));
        if (source) {
            return [source];
        }
        // parse as an event source
        matchInput = EventSourceParser_1.default.parse(matchInput, this.calendar);
        if (matchInput) {
            return $.grep(sources, function (source) {
                return isSourcesEquivalent(matchInput, source);
            });
        }
    };
    /*
    ID assumed to already be normalized
    */
    EventManager.prototype.getSourceById = function (id) {
        return $.grep(this.otherSources, function (source) {
            return source.id && source.id === id;
        })[0];
    };
    // Event-Period
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.setPeriod = function (eventPeriod) {
        if (this.currentPeriod) {
            this.unbindPeriod(this.currentPeriod);
            this.currentPeriod = null;
        }
        this.currentPeriod = eventPeriod;
        this.bindPeriod(eventPeriod);
        eventPeriod.requestSources(this.getSources());
    };
    EventManager.prototype.bindPeriod = function (eventPeriod) {
        this.listenTo(eventPeriod, 'release', function (eventsPayload) {
            this.trigger('release', eventsPayload);
        });
    };
    EventManager.prototype.unbindPeriod = function (eventPeriod) {
        this.stopListeningTo(eventPeriod);
    };
    // Event Getting/Adding/Removing
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.getEventDefByUid = function (uid) {
        if (this.currentPeriod) {
            return this.currentPeriod.getEventDefByUid(uid);
        }
    };
    EventManager.prototype.addEventDef = function (eventDef, isSticky) {
        if (isSticky) {
            this.stickySource.addEventDef(eventDef);
        }
        if (this.currentPeriod) {
            this.currentPeriod.addEventDef(eventDef); // might release
        }
    };
    EventManager.prototype.removeEventDefsById = function (eventId) {
        this.getSources().forEach(function (eventSource) {
            eventSource.removeEventDefsById(eventId);
        });
        if (this.currentPeriod) {
            this.currentPeriod.removeEventDefsById(eventId); // might release
        }
    };
    EventManager.prototype.removeAllEventDefs = function () {
        this.getSources().forEach(function (eventSource) {
            eventSource.removeAllEventDefs();
        });
        if (this.currentPeriod) {
            this.currentPeriod.removeAllEventDefs();
        }
    };
    // Event Mutating
    // -----------------------------------------------------------------------------------------------------------------
    /*
    Returns an undo function.
    */
    EventManager.prototype.mutateEventsWithId = function (eventDefId, eventDefMutation) {
        var currentPeriod = this.currentPeriod;
        var eventDefs;
        var undoFuncs = [];
        if (currentPeriod) {
            currentPeriod.freeze();
            eventDefs = currentPeriod.getEventDefsById(eventDefId);
            eventDefs.forEach(function (eventDef) {
                // add/remove esp because id might change
                currentPeriod.removeEventDef(eventDef);
                undoFuncs.push(eventDefMutation.mutateSingle(eventDef));
                currentPeriod.addEventDef(eventDef);
            });
            currentPeriod.thaw();
            return function () {
                currentPeriod.freeze();
                for (var i = 0; i < eventDefs.length; i++) {
                    currentPeriod.removeEventDef(eventDefs[i]);
                    undoFuncs[i]();
                    currentPeriod.addEventDef(eventDefs[i]);
                }
                currentPeriod.thaw();
            };
        }
        return function () { };
    };
    /*
    copies and then mutates
    */
    EventManager.prototype.buildMutatedEventInstanceGroup = function (eventDefId, eventDefMutation) {
        var eventDefs = this.getEventDefsById(eventDefId);
        var i;
        var defCopy;
        var allInstances = [];
        for (i = 0; i < eventDefs.length; i++) {
            defCopy = eventDefs[i].clone();
            if (defCopy instanceof SingleEventDef_1.default) {
                eventDefMutation.mutateSingle(defCopy);
                allInstances.push.apply(allInstances, // append
                defCopy.buildInstances());
            }
        }
        return new EventInstanceGroup_1.default(allInstances);
    };
    // Freezing
    // -----------------------------------------------------------------------------------------------------------------
    EventManager.prototype.freeze = function () {
        if (this.currentPeriod) {
            this.currentPeriod.freeze();
        }
    };
    EventManager.prototype.thaw = function () {
        if (this.currentPeriod) {
            this.currentPeriod.thaw();
        }
    };
    // methods that simply forward to EventPeriod
    EventManager.prototype.getEventDefsById = function (eventDefId) {
        return this.currentPeriod.getEventDefsById(eventDefId);
    };
    EventManager.prototype.getEventInstances = function () {
        return this.currentPeriod.getEventInstances();
    };
    EventManager.prototype.getEventInstancesWithId = function (eventDefId) {
        return this.currentPeriod.getEventInstancesWithId(eventDefId);
    };
    EventManager.prototype.getEventInstancesWithoutId = function (eventDefId) {
        return this.currentPeriod.getEventInstancesWithoutId(eventDefId);
    };
    return EventManager;
}());
exports.default = EventManager;
EmitterMixin_1.default.mixInto(EventManager);
ListenerMixin_1.default.mixInto(EventManager);
function isSourcesEquivalent(source0, source1) {
    return source0.getPrimitive() === source1.getPrimitive();
}


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var Promise_1 = __webpack_require__(20);
var EmitterMixin_1 = __webpack_require__(11);
var UnzonedRange_1 = __webpack_require__(5);
var EventInstanceGroup_1 = __webpack_require__(18);
var EventPeriod = /** @class */ (function () {
    function EventPeriod(start, end, timezone) {
        this.pendingCnt = 0;
        this.freezeDepth = 0;
        this.stuntedReleaseCnt = 0;
        this.releaseCnt = 0;
        this.start = start;
        this.end = end;
        this.timezone = timezone;
        this.unzonedRange = new UnzonedRange_1.default(start.clone().stripZone(), end.clone().stripZone());
        this.requestsByUid = {};
        this.eventDefsByUid = {};
        this.eventDefsById = {};
        this.eventInstanceGroupsById = {};
    }
    EventPeriod.prototype.isWithinRange = function (start, end) {
        // TODO: use a range util function?
        return !start.isBefore(this.start) && !end.isAfter(this.end);
    };
    // Requesting and Purging
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.requestSources = function (sources) {
        this.freeze();
        for (var i = 0; i < sources.length; i++) {
            this.requestSource(sources[i]);
        }
        this.thaw();
    };
    EventPeriod.prototype.requestSource = function (source) {
        var _this = this;
        var request = { source: source, status: 'pending', eventDefs: null };
        this.requestsByUid[source.uid] = request;
        this.pendingCnt += 1;
        source.fetch(this.start, this.end, this.timezone).then(function (eventDefs) {
            if (request.status !== 'cancelled') {
                request.status = 'completed';
                request.eventDefs = eventDefs;
                _this.addEventDefs(eventDefs);
                _this.pendingCnt--;
                _this.tryRelease();
            }
        }, function () {
            if (request.status !== 'cancelled') {
                request.status = 'failed';
                _this.pendingCnt--;
                _this.tryRelease();
            }
        });
    };
    EventPeriod.prototype.purgeSource = function (source) {
        var request = this.requestsByUid[source.uid];
        if (request) {
            delete this.requestsByUid[source.uid];
            if (request.status === 'pending') {
                request.status = 'cancelled';
                this.pendingCnt--;
                this.tryRelease();
            }
            else if (request.status === 'completed') {
                request.eventDefs.forEach(this.removeEventDef.bind(this));
            }
        }
    };
    EventPeriod.prototype.purgeAllSources = function () {
        var requestsByUid = this.requestsByUid;
        var uid;
        var request;
        var completedCnt = 0;
        for (uid in requestsByUid) {
            request = requestsByUid[uid];
            if (request.status === 'pending') {
                request.status = 'cancelled';
            }
            else if (request.status === 'completed') {
                completedCnt++;
            }
        }
        this.requestsByUid = {};
        this.pendingCnt = 0;
        if (completedCnt) {
            this.removeAllEventDefs(); // might release
        }
    };
    // Event Definitions
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.getEventDefByUid = function (eventDefUid) {
        return this.eventDefsByUid[eventDefUid];
    };
    EventPeriod.prototype.getEventDefsById = function (eventDefId) {
        var a = this.eventDefsById[eventDefId];
        if (a) {
            return a.slice(); // clone
        }
        return [];
    };
    EventPeriod.prototype.addEventDefs = function (eventDefs) {
        for (var i = 0; i < eventDefs.length; i++) {
            this.addEventDef(eventDefs[i]);
        }
    };
    EventPeriod.prototype.addEventDef = function (eventDef) {
        var eventDefsById = this.eventDefsById;
        var eventDefId = eventDef.id;
        var eventDefs = eventDefsById[eventDefId] || (eventDefsById[eventDefId] = []);
        var eventInstances = eventDef.buildInstances(this.unzonedRange);
        var i;
        eventDefs.push(eventDef);
        this.eventDefsByUid[eventDef.uid] = eventDef;
        for (i = 0; i < eventInstances.length; i++) {
            this.addEventInstance(eventInstances[i], eventDefId);
        }
    };
    EventPeriod.prototype.removeEventDefsById = function (eventDefId) {
        var _this = this;
        this.getEventDefsById(eventDefId).forEach(function (eventDef) {
            _this.removeEventDef(eventDef);
        });
    };
    EventPeriod.prototype.removeAllEventDefs = function () {
        var isEmpty = $.isEmptyObject(this.eventDefsByUid);
        this.eventDefsByUid = {};
        this.eventDefsById = {};
        this.eventInstanceGroupsById = {};
        if (!isEmpty) {
            this.tryRelease();
        }
    };
    EventPeriod.prototype.removeEventDef = function (eventDef) {
        var eventDefsById = this.eventDefsById;
        var eventDefs = eventDefsById[eventDef.id];
        delete this.eventDefsByUid[eventDef.uid];
        if (eventDefs) {
            util_1.removeExact(eventDefs, eventDef);
            if (!eventDefs.length) {
                delete eventDefsById[eventDef.id];
            }
            this.removeEventInstancesForDef(eventDef);
        }
    };
    // Event Instances
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.getEventInstances = function () {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var eventInstances = [];
        var id;
        for (id in eventInstanceGroupsById) {
            eventInstances.push.apply(eventInstances, // append
            eventInstanceGroupsById[id].eventInstances);
        }
        return eventInstances;
    };
    EventPeriod.prototype.getEventInstancesWithId = function (eventDefId) {
        var eventInstanceGroup = this.eventInstanceGroupsById[eventDefId];
        if (eventInstanceGroup) {
            return eventInstanceGroup.eventInstances.slice(); // clone
        }
        return [];
    };
    EventPeriod.prototype.getEventInstancesWithoutId = function (eventDefId) {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var matchingInstances = [];
        var id;
        for (id in eventInstanceGroupsById) {
            if (id !== eventDefId) {
                matchingInstances.push.apply(matchingInstances, // append
                eventInstanceGroupsById[id].eventInstances);
            }
        }
        return matchingInstances;
    };
    EventPeriod.prototype.addEventInstance = function (eventInstance, eventDefId) {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var eventInstanceGroup = eventInstanceGroupsById[eventDefId] ||
            (eventInstanceGroupsById[eventDefId] = new EventInstanceGroup_1.default());
        eventInstanceGroup.eventInstances.push(eventInstance);
        this.tryRelease();
    };
    EventPeriod.prototype.removeEventInstancesForDef = function (eventDef) {
        var eventInstanceGroupsById = this.eventInstanceGroupsById;
        var eventInstanceGroup = eventInstanceGroupsById[eventDef.id];
        var removeCnt;
        if (eventInstanceGroup) {
            removeCnt = util_1.removeMatching(eventInstanceGroup.eventInstances, function (currentEventInstance) {
                return currentEventInstance.def === eventDef;
            });
            if (!eventInstanceGroup.eventInstances.length) {
                delete eventInstanceGroupsById[eventDef.id];
            }
            if (removeCnt) {
                this.tryRelease();
            }
        }
    };
    // Releasing and Freezing
    // -----------------------------------------------------------------------------------------------------------------
    EventPeriod.prototype.tryRelease = function () {
        if (!this.pendingCnt) {
            if (!this.freezeDepth) {
                this.release();
            }
            else {
                this.stuntedReleaseCnt++;
            }
        }
    };
    EventPeriod.prototype.release = function () {
        this.releaseCnt++;
        this.trigger('release', this.eventInstanceGroupsById);
    };
    EventPeriod.prototype.whenReleased = function () {
        var _this = this;
        if (this.releaseCnt) {
            return Promise_1.default.resolve(this.eventInstanceGroupsById);
        }
        else {
            return Promise_1.default.construct(function (onResolve) {
                _this.one('release', onResolve);
            });
        }
    };
    EventPeriod.prototype.freeze = function () {
        if (!(this.freezeDepth++)) {
            this.stuntedReleaseCnt = 0;
        }
    };
    EventPeriod.prototype.thaw = function () {
        if (!(--this.freezeDepth) && this.stuntedReleaseCnt && !this.pendingCnt) {
            this.release();
        }
    };
    return EventPeriod;
}());
exports.default = EventPeriod;
EmitterMixin_1.default.mixInto(EventPeriod);


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ListenerMixin_1 = __webpack_require__(7);
/* Creates a clone of an element and lets it track the mouse as it moves
----------------------------------------------------------------------------------------------------------------------*/
var MouseFollower = /** @class */ (function () {
    function MouseFollower(sourceEl, options) {
        this.isFollowing = false;
        this.isHidden = false;
        this.isAnimating = false; // doing the revert animation?
        this.options = options = options || {};
        this.sourceEl = sourceEl;
        this.parentEl = options.parentEl ? $(options.parentEl) : sourceEl.parent(); // default to sourceEl's parent
    }
    // Causes the element to start following the mouse
    MouseFollower.prototype.start = function (ev) {
        if (!this.isFollowing) {
            this.isFollowing = true;
            this.y0 = util_1.getEvY(ev);
            this.x0 = util_1.getEvX(ev);
            this.topDelta = 0;
            this.leftDelta = 0;
            if (!this.isHidden) {
                this.updatePosition();
            }
            if (util_1.getEvIsTouch(ev)) {
                this.listenTo($(document), 'touchmove', this.handleMove);
            }
            else {
                this.listenTo($(document), 'mousemove', this.handleMove);
            }
        }
    };
    // Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
    // `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
    MouseFollower.prototype.stop = function (shouldRevert, callback) {
        var _this = this;
        var revertDuration = this.options.revertDuration;
        var complete = function () {
            _this.isAnimating = false;
            _this.removeElement();
            _this.top0 = _this.left0 = null; // reset state for future updatePosition calls
            if (callback) {
                callback();
            }
        };
        if (this.isFollowing && !this.isAnimating) {
            this.isFollowing = false;
            this.stopListeningTo($(document));
            if (shouldRevert && revertDuration && !this.isHidden) {
                this.isAnimating = true;
                this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {
                    duration: revertDuration,
                    complete: complete
                });
            }
            else {
                complete();
            }
        }
    };
    // Gets the tracking element. Create it if necessary
    MouseFollower.prototype.getEl = function () {
        var el = this.el;
        if (!el) {
            el = this.el = this.sourceEl.clone()
                .addClass(this.options.additionalClass || '')
                .css({
                position: 'absolute',
                visibility: '',
                display: this.isHidden ? 'none' : '',
                margin: 0,
                right: 'auto',
                bottom: 'auto',
                width: this.sourceEl.width(),
                height: this.sourceEl.height(),
                opacity: this.options.opacity || '',
                zIndex: this.options.zIndex
            });
            // we don't want long taps or any mouse interaction causing selection/menus.
            // would use preventSelection(), but that prevents selectstart, causing problems.
            el.addClass('fc-unselectable');
            el.appendTo(this.parentEl);
        }
        return el;
    };
    // Removes the tracking element if it has already been created
    MouseFollower.prototype.removeElement = function () {
        if (this.el) {
            this.el.remove();
            this.el = null;
        }
    };
    // Update the CSS position of the tracking element
    MouseFollower.prototype.updatePosition = function () {
        var sourceOffset;
        var origin;
        this.getEl(); // ensure this.el
        // make sure origin info was computed
        if (this.top0 == null) {
            sourceOffset = this.sourceEl.offset();
            origin = this.el.offsetParent().offset();
            this.top0 = sourceOffset.top - origin.top;
            this.left0 = sourceOffset.left - origin.left;
        }
        this.el.css({
            top: this.top0 + this.topDelta,
            left: this.left0 + this.leftDelta
        });
    };
    // Gets called when the user moves the mouse
    MouseFollower.prototype.handleMove = function (ev) {
        this.topDelta = util_1.getEvY(ev) - this.y0;
        this.leftDelta = util_1.getEvX(ev) - this.x0;
        if (!this.isHidden) {
            this.updatePosition();
        }
    };
    // Temporarily makes the tracking element invisible. Can be called before following starts
    MouseFollower.prototype.hide = function () {
        if (!this.isHidden) {
            this.isHidden = true;
            if (this.el) {
                this.el.hide();
            }
        }
    };
    // Show the tracking element after it has been temporarily hidden
    MouseFollower.prototype.show = function () {
        if (this.isHidden) {
            this.isHidden = false;
            this.updatePosition();
            this.getEl().show();
        }
    };
    return MouseFollower;
}());
exports.default = MouseFollower;
ListenerMixin_1.default.mixInto(MouseFollower);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var HitDragListener_1 = __webpack_require__(23);
var Interaction_1 = __webpack_require__(15);
var DateClicking = /** @class */ (function (_super) {
    tslib_1.__extends(DateClicking, _super);
    /*
    component must implement:
      - bindDateHandlerToEl
      - getSafeHitFootprint
      - getHitEl
    */
    function DateClicking(component) {
        var _this = _super.call(this, component) || this;
        _this.dragListener = _this.buildDragListener();
        return _this;
    }
    DateClicking.prototype.end = function () {
        this.dragListener.endInteraction();
    };
    DateClicking.prototype.bindToEl = function (el) {
        var component = this.component;
        var dragListener = this.dragListener;
        component.bindDateHandlerToEl(el, 'mousedown', function (ev) {
            if (!component.shouldIgnoreMouse()) {
                dragListener.startInteraction(ev);
            }
        });
        component.bindDateHandlerToEl(el, 'touchstart', function (ev) {
            if (!component.shouldIgnoreTouch()) {
                dragListener.startInteraction(ev);
            }
        });
    };
    // Creates a listener that tracks the user's drag across day elements, for day clicking.
    DateClicking.prototype.buildDragListener = function () {
        var _this = this;
        var component = this.component;
        var dayClickHit; // null if invalid dayClick
        var dragListener = new HitDragListener_1.default(component, {
            scroll: this.opt('dragScroll'),
            interactionStart: function () {
                dayClickHit = dragListener.origHit;
            },
            hitOver: function (hit, isOrig, origHit) {
                // if user dragged to another cell at any point, it can no longer be a dayClick
                if (!isOrig) {
                    dayClickHit = null;
                }
            },
            hitOut: function () {
                dayClickHit = null;
            },
            interactionEnd: function (ev, isCancelled) {
                var componentFootprint;
                if (!isCancelled && dayClickHit) {
                    componentFootprint = component.getSafeHitFootprint(dayClickHit);
                    if (componentFootprint) {
                        _this.view.triggerDayClick(componentFootprint, component.getHitEl(dayClickHit), ev);
                    }
                }
            }
        });
        // because dragListener won't be called with any time delay, "dragging" will begin immediately,
        // which will kill any touchmoving/scrolling. Prevent this.
        dragListener.shouldCancelTouchScroll = false;
        dragListener.scrollAlwaysKills = true;
        return dragListener;
    };
    return DateClicking;
}(Interaction_1.default));
exports.default = DateClicking;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var EventRenderer_1 = __webpack_require__(42);
/*
Only handles foreground segs.
Does not own rendering. Use for low-level util methods by TimeGrid.
*/
var TimeGridEventRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGridEventRenderer, _super);
    function TimeGridEventRenderer(timeGrid, fillRenderer) {
        var _this = _super.call(this, timeGrid, fillRenderer) || this;
        _this.timeGrid = timeGrid;
        return _this;
    }
    TimeGridEventRenderer.prototype.renderFgSegs = function (segs) {
        this.renderFgSegsIntoContainers(segs, this.timeGrid.fgContainerEls);
    };
    // Given an array of foreground segments, render a DOM element for each, computes position,
    // and attaches to the column inner-container elements.
    TimeGridEventRenderer.prototype.renderFgSegsIntoContainers = function (segs, containerEls) {
        var segsByCol;
        var col;
        segsByCol = this.timeGrid.groupSegsByCol(segs);
        for (col = 0; col < this.timeGrid.colCnt; col++) {
            this.updateFgSegCoords(segsByCol[col]);
        }
        this.timeGrid.attachSegsByCol(segsByCol, containerEls);
    };
    TimeGridEventRenderer.prototype.unrenderFgSegs = function () {
        if (this.fgSegs) {
            this.fgSegs.forEach(function (seg) {
                seg.el.remove();
            });
        }
    };
    // Computes a default event time formatting string if `timeFormat` is not explicitly defined
    TimeGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('noMeridiemTimeFormat'); // like "6:30" (no AM/PM)
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    TimeGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    // Renders the HTML for a single event segment's default rendering
    TimeGridEventRenderer.prototype.fgSegHtml = function (seg, disableResizing) {
        var view = this.view;
        var calendar = view.calendar;
        var componentFootprint = seg.footprint.componentFootprint;
        var isAllDay = componentFootprint.isAllDay;
        var eventDef = seg.footprint.eventDef;
        var isDraggable = view.isEventDefDraggable(eventDef);
        var isResizableFromStart = !disableResizing && seg.isStart && view.isEventDefResizableFromStart(eventDef);
        var isResizableFromEnd = !disableResizing && seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
        var skinCss = util_1.cssToStr(this.getSkinCss(eventDef));
        var timeText;
        var fullTimeText; // more verbose time text. for the print stylesheet
        var startTimeText; // just the start time text
        classes.unshift('fc-time-grid-event', 'fc-v-event');
        // if the event appears to span more than one day...
        if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
            // Don't display time text on segments that run entirely through a day.
            // That would appear as midnight-midnight and would look dumb.
            // Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
            if (seg.isStart || seg.isEnd) {
                var zonedStart = calendar.msToMoment(seg.startMs);
                var zonedEnd = calendar.msToMoment(seg.endMs);
                timeText = this._getTimeText(zonedStart, zonedEnd, isAllDay);
                fullTimeText = this._getTimeText(zonedStart, zonedEnd, isAllDay, 'LT');
                startTimeText = this._getTimeText(zonedStart, zonedEnd, isAllDay, null, false); // displayEnd=false
            }
        }
        else {
            // Display the normal time text for the *event's* times
            timeText = this.getTimeText(seg.footprint);
            fullTimeText = this.getTimeText(seg.footprint, 'LT');
            startTimeText = this.getTimeText(seg.footprint, null, false); // displayEnd=false
        }
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + util_1.htmlEscape(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (timeText ?
                '<div class="fc-time"' +
                    ' data-start="' + util_1.htmlEscape(startTimeText) + '"' +
                    ' data-full="' + util_1.htmlEscape(fullTimeText) + '"' +
                    '>' +
                    '<span>' + util_1.htmlEscape(timeText) + '</span>' +
                    '</div>' :
                '') +
            (eventDef.title ?
                '<div class="fc-title">' +
                    util_1.htmlEscape(eventDef.title) +
                    '</div>' :
                '') +
            '</div>' +
            '<div class="fc-bg"/>' +
            /* TODO: write CSS for this
            (isResizableFromStart ?
              '<div class="fc-resizer fc-start-resizer" />' :
              ''
              ) +
            */
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer" />' :
                '') +
            '</a>';
    };
    // Given segments that are assumed to all live in the *same column*,
    // compute their verical/horizontal coordinates and assign to their elements.
    TimeGridEventRenderer.prototype.updateFgSegCoords = function (segs) {
        this.timeGrid.computeSegVerticals(segs); // horizontals relies on this
        this.computeFgSegHorizontals(segs); // compute horizontal coordinates, z-index's, and reorder the array
        this.timeGrid.assignSegVerticals(segs);
        this.assignFgSegHorizontals(segs);
    };
    // Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
    // NOTE: Also reorders the given array by date!
    TimeGridEventRenderer.prototype.computeFgSegHorizontals = function (segs) {
        var levels;
        var level0;
        var i;
        this.sortEventSegs(segs); // order by certain criteria
        levels = buildSlotSegLevels(segs);
        computeForwardSlotSegs(levels);
        if ((level0 = levels[0])) {
            for (i = 0; i < level0.length; i++) {
                computeSlotSegPressures(level0[i]);
            }
            for (i = 0; i < level0.length; i++) {
                this.computeFgSegForwardBack(level0[i], 0, 0);
            }
        }
    };
    // Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
    // from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
    // seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
    //
    // The segment might be part of a "series", which means consecutive segments with the same pressure
    // who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
    // segments behind this one in the current series, and `seriesBackwardCoord` is the starting
    // coordinate of the first segment in the series.
    TimeGridEventRenderer.prototype.computeFgSegForwardBack = function (seg, seriesBackwardPressure, seriesBackwardCoord) {
        var forwardSegs = seg.forwardSegs;
        var i;
        if (seg.forwardCoord === undefined) {
            if (!forwardSegs.length) {
                // if there are no forward segments, this segment should butt up against the edge
                seg.forwardCoord = 1;
            }
            else {
                // sort highest pressure first
                this.sortForwardSegs(forwardSegs);
                // this segment's forwardCoord will be calculated from the backwardCoord of the
                // highest-pressure forward segment.
                this.computeFgSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
                seg.forwardCoord = forwardSegs[0].backwardCoord;
            }
            // calculate the backwardCoord from the forwardCoord. consider the series
            seg.backwardCoord = seg.forwardCoord -
                (seg.forwardCoord - seriesBackwardCoord) / // available width for series
                    (seriesBackwardPressure + 1); // # of segments in the series
            // use this segment's coordinates to computed the coordinates of the less-pressurized
            // forward segments
            for (i = 0; i < forwardSegs.length; i++) {
                this.computeFgSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
            }
        }
    };
    TimeGridEventRenderer.prototype.sortForwardSegs = function (forwardSegs) {
        forwardSegs.sort(util_1.proxy(this, 'compareForwardSegs'));
    };
    // A cmp function for determining which forward segment to rely on more when computing coordinates.
    TimeGridEventRenderer.prototype.compareForwardSegs = function (seg1, seg2) {
        // put higher-pressure first
        return seg2.forwardPressure - seg1.forwardPressure ||
            // put segments that are closer to initial edge first (and favor ones with no coords yet)
            (seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
            // do normal sorting...
            this.compareEventSegs(seg1, seg2);
    };
    // Given foreground event segments that have already had their position coordinates computed,
    // assigns position-related CSS values to their elements.
    TimeGridEventRenderer.prototype.assignFgSegHorizontals = function (segs) {
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            seg.el.css(this.generateFgSegHorizontalCss(seg));
            // if the height is short, add a className for alternate styling
            if (seg.bottom - seg.top < 30) {
                seg.el.addClass('fc-short');
            }
        }
    };
    // Generates an object with CSS properties/values that should be applied to an event segment element.
    // Contains important positioning-related properties that should be applied to any event element, customized or not.
    TimeGridEventRenderer.prototype.generateFgSegHorizontalCss = function (seg) {
        var shouldOverlap = this.opt('slotEventOverlap');
        var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
        var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
        var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first
        var isRTL = this.timeGrid.isRTL;
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
        }
        if (isRTL) {
            left = 1 - forwardCoord;
            right = backwardCoord;
        }
        else {
            left = backwardCoord;
            right = 1 - forwardCoord;
        }
        props.zIndex = seg.level + 1; // convert from 0-base to 1-based
        props.left = left * 100 + '%';
        props.right = right * 100 + '%';
        if (shouldOverlap && seg.forwardPressure) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRTL ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeGridEventRenderer;
}(EventRenderer_1.default));
exports.default = TimeGridEventRenderer;
// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
    var levels = [];
    var i;
    var seg;
    var j;
    for (i = 0; i < segs.length; i++) {
        seg = segs[i];
        // go through all the levels and stop on the first level where there are no collisions
        for (j = 0; j < levels.length; j++) {
            if (!computeSlotSegCollisions(seg, levels[j]).length) {
                break;
            }
        }
        seg.level = j;
        (levels[j] || (levels[j] = [])).push(seg);
    }
    return levels;
}
// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
    var i;
    var level;
    var j;
    var seg;
    var k;
    for (i = 0; i < levels.length; i++) {
        level = levels[i];
        for (j = 0; j < level.length; j++) {
            seg = level[j];
            seg.forwardSegs = [];
            for (k = i + 1; k < levels.length; k++) {
                computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
            }
        }
    }
}
// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
    var forwardSegs = seg.forwardSegs;
    var forwardPressure = 0;
    var i;
    var forwardSeg;
    if (seg.forwardPressure === undefined) {
        for (i = 0; i < forwardSegs.length; i++) {
            forwardSeg = forwardSegs[i];
            // figure out the child's maximum forward path
            computeSlotSegPressures(forwardSeg);
            // either use the existing maximum, or use the child's forward pressure
            // plus one (for the forwardSeg itself)
            forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
        }
        seg.forwardPressure = forwardPressure;
    }
}
// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
    if (results === void 0) { results = []; }
    for (var i = 0; i < otherSegs.length; i++) {
        if (isSlotSegCollision(seg, otherSegs[i])) {
            results.push(otherSegs[i]);
        }
    }
    return results;
}
// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
    return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var HelperRenderer_1 = __webpack_require__(58);
var TimeGridHelperRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGridHelperRenderer, _super);
    function TimeGridHelperRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridHelperRenderer.prototype.renderSegs = function (segs, sourceSeg) {
        var helperNodes = [];
        var i;
        var seg;
        var sourceEl;
        // TODO: not good to call eventRenderer this way
        this.eventRenderer.renderFgSegsIntoContainers(segs, this.component.helperContainerEls);
        // Try to make the segment that is in the same row as sourceSeg look the same
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            if (sourceSeg && sourceSeg.col === seg.col) {
                sourceEl = sourceSeg.el;
                seg.el.css({
                    left: sourceEl.css('left'),
                    right: sourceEl.css('right'),
                    'margin-left': sourceEl.css('margin-left'),
                    'margin-right': sourceEl.css('margin-right')
                });
            }
            helperNodes.push(seg.el[0]);
        }
        return $(helperNodes); // must return the elements rendered
    };
    return TimeGridHelperRenderer;
}(HelperRenderer_1.default));
exports.default = TimeGridHelperRenderer;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var FillRenderer_1 = __webpack_require__(57);
var TimeGridFillRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TimeGridFillRenderer, _super);
    function TimeGridFillRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridFillRenderer.prototype.attachSegEls = function (type, segs) {
        var timeGrid = this.component;
        var containerEls;
        // TODO: more efficient lookup
        if (type === 'bgEvent') {
            containerEls = timeGrid.bgContainerEls;
        }
        else if (type === 'businessHours') {
            containerEls = timeGrid.businessContainerEls;
        }
        else if (type === 'highlight') {
            containerEls = timeGrid.highlightContainerEls;
        }
        timeGrid.updateSegVerticals(segs);
        timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls);
        return segs.map(function (seg) {
            return seg.el[0];
        });
    };
    return TimeGridFillRenderer;
}(FillRenderer_1.default));
exports.default = TimeGridFillRenderer;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
  - className (string)
  - content (HTML string or jQuery element set)
  - parentEl
  - top
  - left
  - right (the x coord of where the right edge should be. not a "CSS" right)
  - autoHide (boolean)
  - show (callback)
  - hide (callback)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var ListenerMixin_1 = __webpack_require__(7);
var Popover = /** @class */ (function () {
    function Popover(options) {
        this.isHidden = true;
        this.margin = 10; // the space required between the popover and the edges of the scroll container
        this.options = options || {};
    }
    // Shows the popover on the specified position. Renders it if not already
    Popover.prototype.show = function () {
        if (this.isHidden) {
            if (!this.el) {
                this.render();
            }
            this.el.show();
            this.position();
            this.isHidden = false;
            this.trigger('show');
        }
    };
    // Hides the popover, through CSS, but does not remove it from the DOM
    Popover.prototype.hide = function () {
        if (!this.isHidden) {
            this.el.hide();
            this.isHidden = true;
            this.trigger('hide');
        }
    };
    // Creates `this.el` and renders content inside of it
    Popover.prototype.render = function () {
        var _this = this;
        var options = this.options;
        this.el = $('<div class="fc-popover"/>')
            .addClass(options.className || '')
            .css({
            // position initially to the top left to avoid creating scrollbars
            top: 0,
            left: 0
        })
            .append(options.content)
            .appendTo(options.parentEl);
        // when a click happens on anything inside with a 'fc-close' className, hide the popover
        this.el.on('click', '.fc-close', function () {
            _this.hide();
        });
        if (options.autoHide) {
            this.listenTo($(document), 'mousedown', this.documentMousedown);
        }
    };
    // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
    Popover.prototype.documentMousedown = function (ev) {
        // only hide the popover if the click happened outside the popover
        if (this.el && !$(ev.target).closest(this.el).length) {
            this.hide();
        }
    };
    // Hides and unregisters any handlers
    Popover.prototype.removeElement = function () {
        this.hide();
        if (this.el) {
            this.el.remove();
            this.el = null;
        }
        this.stopListeningTo($(document), 'mousedown');
    };
    // Positions the popover optimally, using the top/left/right options
    Popover.prototype.position = function () {
        var options = this.options;
        var origin = this.el.offsetParent().offset();
        var width = this.el.outerWidth();
        var height = this.el.outerHeight();
        var windowEl = $(window);
        var viewportEl = util_1.getScrollParent(this.el);
        var viewportTop;
        var viewportLeft;
        var viewportOffset;
        var top; // the "position" (not "offset") values for the popover
        var left; //
        // compute top and left
        top = options.top || 0;
        if (options.left !== undefined) {
            left = options.left;
        }
        else if (options.right !== undefined) {
            left = options.right - width; // derive the left value from the right value
        }
        else {
            left = 0;
        }
        if (viewportEl.is(window) || viewportEl.is(document)) {
            viewportEl = windowEl;
            viewportTop = 0; // the window is always at the top left
            viewportLeft = 0; // (and .offset() won't work if called here)
        }
        else {
            viewportOffset = viewportEl.offset();
            viewportTop = viewportOffset.top;
            viewportLeft = viewportOffset.left;
        }
        // if the window is scrolled, it causes the visible area to be further down
        viewportTop += windowEl.scrollTop();
        viewportLeft += windowEl.scrollLeft();
        // constrain to the view port. if constrained by two edges, give precedence to top/left
        if (options.viewportConstrain !== false) {
            top = Math.min(top, viewportTop + viewportEl.outerHeight() - height - this.margin);
            top = Math.max(top, viewportTop + this.margin);
            left = Math.min(left, viewportLeft + viewportEl.outerWidth() - width - this.margin);
            left = Math.max(left, viewportLeft + this.margin);
        }
        this.el.css({
            top: top - origin.top,
            left: left - origin.left
        });
    };
    // Triggers a callback. Calls a function in the option hash of the same name.
    // Arguments beyond the first `name` are forwarded on.
    // TODO: better code reuse for this. Repeat code
    Popover.prototype.trigger = function (name) {
        if (this.options[name]) {
            this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    return Popover;
}());
exports.default = Popover;
ListenerMixin_1.default.mixInto(Popover);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var util_1 = __webpack_require__(4);
var EventRenderer_1 = __webpack_require__(42);
/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
var DayGridEventRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DayGridEventRenderer, _super);
    function DayGridEventRenderer(dayGrid, fillRenderer) {
        var _this = _super.call(this, dayGrid, fillRenderer) || this;
        _this.dayGrid = dayGrid;
        return _this;
    }
    DayGridEventRenderer.prototype.renderBgRanges = function (eventRanges) {
        // don't render timed background events
        eventRanges = $.grep(eventRanges, function (eventRange) {
            return eventRange.eventDef.isAllDay();
        });
        _super.prototype.renderBgRanges.call(this, eventRanges);
    };
    // Renders the given foreground event segments onto the grid
    DayGridEventRenderer.prototype.renderFgSegs = function (segs) {
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // append to each row's content skeleton
        this.dayGrid.rowEls.each(function (i, rowNode) {
            $(rowNode).find('.fc-content-skeleton > table').append(rowStructs[i].tbodyEl);
        });
    };
    // Unrenders all currently rendered foreground event segments
    DayGridEventRenderer.prototype.unrenderFgSegs = function () {
        var rowStructs = this.rowStructs || [];
        var rowStruct;
        while ((rowStruct = rowStructs.pop())) {
            rowStruct.tbodyEl.remove();
        }
        this.rowStructs = null;
    };
    // Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
    // Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
    // PRECONDITION: each segment shoud already have a rendered and assigned `.el`
    DayGridEventRenderer.prototype.renderSegRows = function (segs) {
        var rowStructs = [];
        var segRows;
        var row;
        segRows = this.groupSegRows(segs); // group into nested arrays
        // iterate each row of segment groupings
        for (row = 0; row < segRows.length; row++) {
            rowStructs.push(this.renderSegRow(row, segRows[row]));
        }
        return rowStructs;
    };
    // Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
    // the segments. Returns object with a bunch of internal data about how the render was calculated.
    // NOTE: modifies rowSegs
    DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
        var colCnt = this.dayGrid.colCnt;
        var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
        var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
        var tbody = $('<tbody/>');
        var segMatrix = []; // lookup for which segments are rendered into which level+col cells
        var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
        var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
        var i;
        var levelSegs;
        var col;
        var tr;
        var j;
        var seg;
        var td;
        // populates empty cells from the current column (`col`) to `endCol`
        function emptyCellsUntil(endCol) {
            while (col < endCol) {
                // try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
                td = (loneCellMatrix[i - 1] || [])[col];
                if (td) {
                    td.attr('rowspan', parseInt(td.attr('rowspan') || 1, 10) + 1);
                }
                else {
                    td = $('<td/>');
                    tr.append(td);
                }
                cellMatrix[i][col] = td;
                loneCellMatrix[i][col] = td;
                col++;
            }
        }
        for (i = 0; i < levelCnt; i++) {
            levelSegs = segLevels[i];
            col = 0;
            tr = $('<tr/>');
            segMatrix.push([]);
            cellMatrix.push([]);
            loneCellMatrix.push([]);
            // levelCnt might be 1 even though there are no actual levels. protect against this.
            // this single empty row is useful for styling.
            if (levelSegs) {
                for (j = 0; j < levelSegs.length; j++) {
                    seg = levelSegs[j];
                    emptyCellsUntil(seg.leftCol);
                    // create a container that occupies or more columns. append the event element.
                    td = $('<td class="fc-event-container"/>').append(seg.el);
                    if (seg.leftCol !== seg.rightCol) {
                        td.attr('colspan', seg.rightCol - seg.leftCol + 1);
                    }
                    else {
                        loneCellMatrix[i][col] = td;
                    }
                    while (col <= seg.rightCol) {
                        cellMatrix[i][col] = td;
                        segMatrix[i][col] = seg;
                        col++;
                    }
                    tr.append(td);
                }
            }
            emptyCellsUntil(colCnt); // finish off the row
            this.dayGrid.bookendCells(tr);
            tbody.append(tr);
        }
        return {
            row: row,
            tbodyEl: tbody,
            cellMatrix: cellMatrix,
            segMatrix: segMatrix,
            segLevels: segLevels,
            segs: rowSegs
        };
    };
    // Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
    // NOTE: modifies segs
    DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
        var levels = [];
        var i;
        var seg;
        var j;
        // Give preference to elements with certain criteria, so they have
        // a chance to be closer to the top.
        this.sortEventSegs(segs);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            // loop through levels, starting with the topmost, until the segment doesn't collide with other segments
            for (j = 0; j < levels.length; j++) {
                if (!isDaySegCollision(seg, levels[j])) {
                    break;
                }
            }
            // `j` now holds the desired subrow index
            seg.level = j;
            // create new level array if needed and append segment
            (levels[j] || (levels[j] = [])).push(seg);
        }
        // order segments left-to-right. very important if calendar is RTL
        for (j = 0; j < levels.length; j++) {
            levels[j].sort(compareDaySegCols);
        }
        return levels;
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
    DayGridEventRenderer.prototype.groupSegRows = function (segs) {
        var segRows = [];
        var i;
        for (i = 0; i < this.dayGrid.rowCnt; i++) {
            segRows.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segRows[segs[i].row].push(segs[i]);
        }
        return segRows;
    };
    // Computes a default event time formatting string if `timeFormat` is not explicitly defined
    DayGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('extraSmallTimeFormat'); // like "6p" or "6:30p"
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
    };
    // Builds the HTML to be used for the default element for an individual segment
    DayGridEventRenderer.prototype.fgSegHtml = function (seg, disableResizing) {
        var view = this.view;
        var eventDef = seg.footprint.eventDef;
        var isAllDay = seg.footprint.componentFootprint.isAllDay;
        var isDraggable = view.isEventDefDraggable(eventDef);
        var isResizableFromStart = !disableResizing && isAllDay &&
            seg.isStart && view.isEventDefResizableFromStart(eventDef);
        var isResizableFromEnd = !disableResizing && isAllDay &&
            seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
        var skinCss = util_1.cssToStr(this.getSkinCss(eventDef));
        var timeHtml = '';
        var timeText;
        var titleHtml;
        classes.unshift('fc-day-grid-event', 'fc-h-event');
        // Only display a timed events time if it is the starting segment
        if (seg.isStart) {
            timeText = this.getTimeText(seg.footprint);
            if (timeText) {
                timeHtml = '<span class="fc-time">' + util_1.htmlEscape(timeText) + '</span>';
            }
        }
        titleHtml =
            '<span class="fc-title">' +
                (util_1.htmlEscape(eventDef.title || '') || '&nbsp;') + // we always want one line of height
                '</span>';
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + util_1.htmlEscape(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (this.dayGrid.isRTL ?
                titleHtml + ' ' + timeHtml : // put a natural space in between
                timeHtml + ' ' + titleHtml //
            ) +
            '</div>' +
            (isResizableFromStart ?
                '<div class="fc-resizer fc-start-resizer" />' :
                '') +
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer" />' :
                '') +
            '</a>';
    };
    return DayGridEventRenderer;
}(EventRenderer_1.default));
exports.default = DayGridEventRenderer;
// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
    var i;
    var otherSeg;
    for (i = 0; i < otherSegs.length; i++) {
        otherSeg = otherSegs[i];
        if (otherSeg.leftCol <= seg.rightCol &&
            otherSeg.rightCol >= seg.leftCol) {
            return true;
        }
    }
    return false;
}
// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
    return a.leftCol - b.leftCol;
}


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var HelperRenderer_1 = __webpack_require__(58);
var DayGridHelperRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DayGridHelperRenderer, _super);
    function DayGridHelperRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
    DayGridHelperRenderer.prototype.renderSegs = function (segs, sourceSeg) {
        var helperNodes = [];
        var rowStructs;
        // TODO: not good to call eventRenderer this way
        rowStructs = this.eventRenderer.renderSegRows(segs);
        // inject each new event skeleton into each associated row
        this.component.rowEls.each(function (row, rowNode) {
            var rowEl = $(rowNode); // the .fc-row
            var skeletonEl = $('<div class="fc-helper-skeleton"><table/></div>'); // will be absolutely positioned
            var skeletonTopEl;
            var skeletonTop;
            // If there is an original segment, match the top position. Otherwise, put it at the row's top level
            if (sourceSeg && sourceSeg.row === row) {
                skeletonTop = sourceSeg.el.position().top;
            }
            else {
                skeletonTopEl = rowEl.find('.fc-content-skeleton tbody');
                if (!skeletonTopEl.length) {
                    skeletonTopEl = rowEl.find('.fc-content-skeleton table');
                }
                skeletonTop = skeletonTopEl.position().top;
            }
            skeletonEl.css('top', skeletonTop)
                .find('table')
                .append(rowStructs[row].tbodyEl);
            rowEl.append(skeletonEl);
            helperNodes.push(skeletonEl[0]);
        });
        return $(helperNodes); // must return the elements rendered
    };
    return DayGridHelperRenderer;
}(HelperRenderer_1.default));
exports.default = DayGridHelperRenderer;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var FillRenderer_1 = __webpack_require__(57);
var DayGridFillRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DayGridFillRenderer, _super);
    function DayGridFillRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fillSegTag = 'td'; // override the default tag name
        return _this;
    }
    DayGridFillRenderer.prototype.attachSegEls = function (type, segs) {
        var nodes = [];
        var i;
        var seg;
        var skeletonEl;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            skeletonEl = this.renderFillRow(type, seg);
            this.component.rowEls.eq(seg.row).append(skeletonEl);
            nodes.push(skeletonEl[0]);
        }
        return nodes;
    };
    // Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
    DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
        var colCnt = this.component.colCnt;
        var startCol = seg.leftCol;
        var endCol = seg.rightCol + 1;
        var className;
        var skeletonEl;
        var trEl;
        if (type === 'businessHours') {
            className = 'bgevent';
        }
        else {
            className = type.toLowerCase();
        }
        skeletonEl = $('<div class="fc-' + className + '-skeleton">' +
            '<table><tr/></table>' +
            '</div>');
        trEl = skeletonEl.find('tr');
        if (startCol > 0) {
            trEl.append('<td colspan="' + startCol + '"/>');
        }
        trEl.append(seg.el.attr('colspan', endCol - startCol));
        if (endCol < colCnt) {
            trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
        }
        this.component.bookendCells(trEl);
        return skeletonEl;
    };
    return DayGridFillRenderer;
}(FillRenderer_1.default));
exports.default = DayGridFillRenderer;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var BasicViewDateProfileGenerator_1 = __webpack_require__(228);
var UnzonedRange_1 = __webpack_require__(5);
var MonthViewDateProfileGenerator = /** @class */ (function (_super) {
    tslib_1.__extends(MonthViewDateProfileGenerator, _super);
    function MonthViewDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    MonthViewDateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        var renderUnzonedRange = _super.prototype.buildRenderRange.call(this, currentUnzonedRange, currentRangeUnit, isRangeAllDay);
        var start = this.msToUtcMoment(renderUnzonedRange.startMs, isRangeAllDay);
        var end = this.msToUtcMoment(renderUnzonedRange.endMs, isRangeAllDay);
        var rowCnt;
        // ensure 6 weeks
        if (this.opt('fixedWeekCount')) {
            rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            end.diff(start, 'weeks', true) // dontRound=true
            );
            end.add(6 - rowCnt, 'weeks');
        }
        return new UnzonedRange_1.default(start, end);
    };
    return MonthViewDateProfileGenerator;
}(BasicViewDateProfileGenerator_1.default));
exports.default = MonthViewDateProfileGenerator;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var util_1 = __webpack_require__(4);
var EventRenderer_1 = __webpack_require__(42);
var ListEventRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(ListEventRenderer, _super);
    function ListEventRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListEventRenderer.prototype.renderFgSegs = function (segs) {
        if (!segs.length) {
            this.component.renderEmptyMessage();
        }
        else {
            this.component.renderSegList(segs);
        }
    };
    // generates the HTML for a single event row
    ListEventRenderer.prototype.fgSegHtml = function (seg) {
        var view = this.view;
        var calendar = view.calendar;
        var theme = calendar.theme;
        var eventFootprint = seg.footprint;
        var eventDef = eventFootprint.eventDef;
        var componentFootprint = eventFootprint.componentFootprint;
        var url = eventDef.url;
        var classes = ['fc-list-item'].concat(this.getClasses(eventDef));
        var bgColor = this.getBgColor(eventDef);
        var timeHtml;
        if (componentFootprint.isAllDay) {
            timeHtml = view.getAllDayHtml();
        }
        else if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
            if (seg.isStart || seg.isEnd) {
                timeHtml = util_1.htmlEscape(this._getTimeText(calendar.msToMoment(seg.startMs), calendar.msToMoment(seg.endMs), componentFootprint.isAllDay));
            }
            else {
                timeHtml = view.getAllDayHtml();
            }
        }
        else {
            // Display the normal time text for the *event's* times
            timeHtml = util_1.htmlEscape(this.getTimeText(eventFootprint));
        }
        if (url) {
            classes.push('fc-has-url');
        }
        return '<tr class="' + classes.join(' ') + '">' +
            (this.displayEventTime ?
                '<td class="fc-list-item-time ' + theme.getClass('widgetContent') + '">' +
                    (timeHtml || '') +
                    '</td>' :
                '') +
            '<td class="fc-list-item-marker ' + theme.getClass('widgetContent') + '">' +
            '<span class="fc-event-dot"' +
            (bgColor ?
                ' style="background-color:' + bgColor + '"' :
                '') +
            '></span>' +
            '</td>' +
            '<td class="fc-list-item-title ' + theme.getClass('widgetContent') + '">' +
            '<a' + (url ? ' href="' + util_1.htmlEscape(url) + '"' : '') + '>' +
            util_1.htmlEscape(eventDef.title || '') +
            '</a>' +
            '</td>' +
            '</tr>';
    };
    // like "4:00am"
    ListEventRenderer.prototype.computeEventTimeFormat = function () {
        return this.opt('mediumTimeFormat');
    };
    return ListEventRenderer;
}(EventRenderer_1.default));
exports.default = ListEventRenderer;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var EventPointing_1 = __webpack_require__(59);
var ListEventPointing = /** @class */ (function (_super) {
    tslib_1.__extends(ListEventPointing, _super);
    function ListEventPointing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // for events with a url, the whole <tr> should be clickable,
    // but it's impossible to wrap with an <a> tag. simulate this.
    ListEventPointing.prototype.handleClick = function (seg, ev) {
        var url;
        _super.prototype.handleClick.call(this, seg, ev); // might prevent the default action
        // not clicking on or within an <a> with an href
        if (!$(ev.target).closest('a[href]').length) {
            url = seg.footprint.eventDef.url;
            if (url && !ev.isDefaultPrevented()) {
                window.location.href = url; // simulate link click
            }
        }
    };
    return ListEventPointing;
}(EventPointing_1.default));
exports.default = ListEventPointing;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventSourceParser_1 = __webpack_require__(38);
var ArrayEventSource_1 = __webpack_require__(52);
var FuncEventSource_1 = __webpack_require__(215);
var JsonFeedEventSource_1 = __webpack_require__(216);
EventSourceParser_1.default.registerClass(ArrayEventSource_1.default);
EventSourceParser_1.default.registerClass(FuncEventSource_1.default);
EventSourceParser_1.default.registerClass(JsonFeedEventSource_1.default);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ThemeRegistry_1 = __webpack_require__(51);
var StandardTheme_1 = __webpack_require__(213);
var JqueryUiTheme_1 = __webpack_require__(214);
var Bootstrap3Theme_1 = __webpack_require__(258);
var Bootstrap4Theme_1 = __webpack_require__(259);
ThemeRegistry_1.defineThemeSystem('standard', StandardTheme_1.default);
ThemeRegistry_1.defineThemeSystem('jquery-ui', JqueryUiTheme_1.default);
ThemeRegistry_1.defineThemeSystem('bootstrap3', Bootstrap3Theme_1.default);
ThemeRegistry_1.defineThemeSystem('bootstrap4', Bootstrap4Theme_1.default);


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var Bootstrap3Theme = /** @class */ (function (_super) {
    tslib_1.__extends(Bootstrap3Theme, _super);
    function Bootstrap3Theme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bootstrap3Theme;
}(Theme_1.default));
exports.default = Bootstrap3Theme;
Bootstrap3Theme.prototype.classes = {
    widget: 'fc-bootstrap3',
    tableGrid: 'table-bordered',
    tableList: 'table',
    tableListHeading: 'active',
    buttonGroup: 'btn-group',
    button: 'btn btn-default',
    stateActive: 'active',
    stateDisabled: 'disabled',
    today: 'alert alert-info',
    popover: 'panel panel-default',
    popoverHeader: 'panel-heading',
    popoverContent: 'panel-body',
    // day grid
    // for left/right border color when border is inset from edges (all-day in agenda view)
    // avoid `panel` class b/c don't want margins/radius. only border color.
    headerRow: 'panel-default',
    dayRow: 'panel-default',
    // list view
    listView: 'panel panel-default'
};
Bootstrap3Theme.prototype.baseIconClass = 'glyphicon';
Bootstrap3Theme.prototype.iconClasses = {
    close: 'glyphicon-remove',
    prev: 'glyphicon-chevron-left',
    next: 'glyphicon-chevron-right',
    prevYear: 'glyphicon-backward',
    nextYear: 'glyphicon-forward'
};
Bootstrap3Theme.prototype.iconOverrideOption = 'bootstrapGlyphicons';
Bootstrap3Theme.prototype.iconOverrideCustomButtonOption = 'bootstrapGlyphicon';
Bootstrap3Theme.prototype.iconOverridePrefix = 'glyphicon-';


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Theme_1 = __webpack_require__(19);
var Bootstrap4Theme = /** @class */ (function (_super) {
    tslib_1.__extends(Bootstrap4Theme, _super);
    function Bootstrap4Theme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bootstrap4Theme;
}(Theme_1.default));
exports.default = Bootstrap4Theme;
Bootstrap4Theme.prototype.classes = {
    widget: 'fc-bootstrap4',
    tableGrid: 'table-bordered',
    tableList: 'table',
    tableListHeading: 'table-active',
    buttonGroup: 'btn-group',
    button: 'btn btn-primary',
    stateActive: 'active',
    stateDisabled: 'disabled',
    today: 'alert alert-info',
    popover: 'card card-primary',
    popoverHeader: 'card-header',
    popoverContent: 'card-body',
    // day grid
    // for left/right border color when border is inset from edges (all-day in agenda view)
    // avoid `table` class b/c don't want margins/padding/structure. only border color.
    headerRow: 'table-bordered',
    dayRow: 'table-bordered',
    // list view
    listView: 'card card-primary'
};
Bootstrap4Theme.prototype.baseIconClass = 'fa';
Bootstrap4Theme.prototype.iconClasses = {
    close: 'fa-times',
    prev: 'fa-chevron-left',
    next: 'fa-chevron-right',
    prevYear: 'fa-angle-double-left',
    nextYear: 'fa-angle-double-right'
};
Bootstrap4Theme.prototype.iconOverrideOption = 'bootstrapFontAwesome';
Bootstrap4Theme.prototype.iconOverrideCustomButtonOption = 'bootstrapFontAwesome';
Bootstrap4Theme.prototype.iconOverridePrefix = 'fa-';


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ViewRegistry_1 = __webpack_require__(22);
var BasicView_1 = __webpack_require__(62);
var MonthView_1 = __webpack_require__(229);
ViewRegistry_1.defineView('basic', {
    'class': BasicView_1.default
});
ViewRegistry_1.defineView('basicDay', {
    type: 'basic',
    duration: { days: 1 }
});
ViewRegistry_1.defineView('basicWeek', {
    type: 'basic',
    duration: { weeks: 1 }
});
ViewRegistry_1.defineView('month', {
    'class': MonthView_1.default,
    duration: { months: 1 },
    defaults: {
        fixedWeekCount: true
    }
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ViewRegistry_1 = __webpack_require__(22);
var AgendaView_1 = __webpack_require__(226);
ViewRegistry_1.defineView('agenda', {
    'class': AgendaView_1.default,
    defaults: {
        allDaySlot: true,
        slotDuration: '00:30:00',
        slotEventOverlap: true // a bad name. confused with overlap/constraint system
    }
});
ViewRegistry_1.defineView('agendaDay', {
    type: 'agenda',
    duration: { days: 1 }
});
ViewRegistry_1.defineView('agendaWeek', {
    type: 'agenda',
    duration: { weeks: 1 }
});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ViewRegistry_1 = __webpack_require__(22);
var ListView_1 = __webpack_require__(230);
ViewRegistry_1.defineView('list', {
    'class': ListView_1.default,
    buttonTextKey: 'list',
    defaults: {
        buttonText: 'list',
        listDayFormat: 'LL',
        noEventsMessage: 'No events to display'
    }
});
ViewRegistry_1.defineView('listDay', {
    type: 'list',
    duration: { days: 1 },
    defaults: {
        listDayFormat: 'dddd' // day-of-week is all we need. full date is probably in header
    }
});
ViewRegistry_1.defineView('listWeek', {
    type: 'list',
    duration: { weeks: 1 },
    defaults: {
        listDayFormat: 'dddd',
        listDayAltFormat: 'LL'
    }
});
ViewRegistry_1.defineView('listMonth', {
    type: 'list',
    duration: { month: 1 },
    defaults: {
        listDayAltFormat: 'dddd' // day-of-week is nice-to-have
    }
});
ViewRegistry_1.defineView('listYear', {
    type: 'list',
    duration: { year: 1 },
    defaults: {
        listDayAltFormat: 'dddd' // day-of-week is nice-to-have
    }
});


/***/ }),
/* 263 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ })
/******/ ]);
});;
/*!
 * FullCalendar v3.9.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fullcalendar"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["fullcalendar", "jquery"], factory);
	else if(typeof exports === 'object')
		factory(require("fullcalendar"), require("jquery"));
	else
		factory(root["FullCalendar"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 266);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/*
derived from:
https://github.com/Microsoft/tslib/blob/v1.6.0/tslib.js

only include the helpers we need, to keep down filesize
*/
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p]; };
exports.__extends = function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var exportHooks = __webpack_require__(1);
var GcalEventSource_1 = __webpack_require__(267);
exportHooks.EventSourceParser.registerClass(GcalEventSource_1.default);
exportHooks.GcalEventSource = GcalEventSource_1.default;


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var $ = __webpack_require__(3);
var fullcalendar_1 = __webpack_require__(1);
var GcalEventSource = /** @class */ (function (_super) {
    tslib_1.__extends(GcalEventSource, _super);
    function GcalEventSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GcalEventSource.parse = function (rawInput, calendar) {
        var rawProps;
        if (typeof rawInput === 'object') {
            rawProps = rawInput;
        }
        else if (typeof rawInput === 'string') {
            rawProps = { url: rawInput }; // url will be parsed with parseGoogleCalendarId
        }
        if (rawProps) {
            return fullcalendar_1.EventSource.parse.call(this, rawProps, calendar);
        }
        return false;
    };
    GcalEventSource.prototype.fetch = function (start, end, timezone) {
        var _this = this;
        var url = this.buildUrl();
        var requestParams = this.buildRequestParams(start, end, timezone);
        var ajaxSettings = this.ajaxSettings || {};
        var onSuccess = ajaxSettings.success;
        if (!requestParams) {
            return fullcalendar_1.Promise.reject();
        }
        this.calendar.pushLoading();
        return fullcalendar_1.Promise.construct(function (onResolve, onReject) {
            $.ajax($.extend({}, // destination
            fullcalendar_1.JsonFeedEventSource.AJAX_DEFAULTS, ajaxSettings, {
                url: url,
                data: requestParams,
                success: function (responseData, status, xhr) {
                    var rawEventDefs;
                    var successRes;
                    _this.calendar.popLoading();
                    if (responseData.error) {
                        _this.reportError('Google Calendar API: ' + responseData.error.message, responseData.error.errors);
                        onReject();
                    }
                    else if (responseData.items) {
                        rawEventDefs = _this.gcalItemsToRawEventDefs(responseData.items, requestParams.timeZone);
                        successRes = fullcalendar_1.applyAll(onSuccess, _this, [responseData, status, xhr]); // passthru
                        if ($.isArray(successRes)) {
                            rawEventDefs = successRes;
                        }
                        onResolve(_this.parseEventDefs(rawEventDefs));
                    }
                },
                error: function (xhr, statusText, errorThrown) {
                    _this.reportError('Google Calendar network failure: ' + statusText, [xhr, errorThrown]);
                    _this.calendar.popLoading();
                    onReject();
                }
            }));
        });
    };
    GcalEventSource.prototype.gcalItemsToRawEventDefs = function (items, gcalTimezone) {
        var _this = this;
        return items.map(function (item) {
            return _this.gcalItemToRawEventDef(item, gcalTimezone);
        });
    };
    GcalEventSource.prototype.gcalItemToRawEventDef = function (item, gcalTimezone) {
        var url = item.htmlLink || null;
        // make the URLs for each event show times in the correct timezone
        if (url && gcalTimezone) {
            url = injectQsComponent(url, 'ctz=' + gcalTimezone);
        }
        return {
            id: item.id,
            title: item.summary,
            start: item.start.dateTime || item.start.date,
            end: item.end.dateTime || item.end.date,
            url: url,
            location: item.location,
            description: item.description
        };
    };
    GcalEventSource.prototype.buildUrl = function () {
        return GcalEventSource.API_BASE + '/' +
            encodeURIComponent(this.googleCalendarId) +
            '/events?callback=?'; // jsonp
    };
    GcalEventSource.prototype.buildRequestParams = function (start, end, timezone) {
        var apiKey = this.googleCalendarApiKey || this.calendar.opt('googleCalendarApiKey');
        var params;
        if (!apiKey) {
            this.reportError('Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/');
            return null;
        }
        // The API expects an ISO8601 datetime with a time and timezone part.
        // Since the calendar's timezone offset isn't always known, request the date in UTC and pad it by a day on each
        // side, guaranteeing we will receive all events in the desired range, albeit a superset.
        // .utc() will set a zone and give it a 00:00:00 time.
        if (!start.hasZone()) {
            start = start.clone().utc().add(-1, 'day');
        }
        if (!end.hasZone()) {
            end = end.clone().utc().add(1, 'day');
        }
        params = $.extend(this.ajaxSettings.data || {}, {
            key: apiKey,
            timeMin: start.format(),
            timeMax: end.format(),
            singleEvents: true,
            maxResults: 9999
        });
        if (timezone && timezone !== 'local') {
            // when sending timezone names to Google, only accepts underscores, not spaces
            params.timeZone = timezone.replace(' ', '_');
        }
        return params;
    };
    GcalEventSource.prototype.reportError = function (message, apiErrorObjs) {
        var calendar = this.calendar;
        var calendarOnError = calendar.opt('googleCalendarError');
        var errorObjs = apiErrorObjs || [{ message: message }]; // to be passed into error handlers
        if (this.googleCalendarError) {
            this.googleCalendarError.apply(calendar, errorObjs);
        }
        if (calendarOnError) {
            calendarOnError.apply(calendar, errorObjs);
        }
        // print error to debug console
        fullcalendar_1.warn.apply(null, [message].concat(apiErrorObjs || []));
    };
    GcalEventSource.prototype.getPrimitive = function () {
        return this.googleCalendarId;
    };
    GcalEventSource.prototype.applyManualStandardProps = function (rawProps) {
        var superSuccess = fullcalendar_1.EventSource.prototype.applyManualStandardProps.apply(this, arguments);
        var googleCalendarId = rawProps.googleCalendarId;
        if (googleCalendarId == null && rawProps.url) {
            googleCalendarId = parseGoogleCalendarId(rawProps.url);
        }
        if (googleCalendarId != null) {
            this.googleCalendarId = googleCalendarId;
            return superSuccess;
        }
        return false;
    };
    GcalEventSource.prototype.applyMiscProps = function (rawProps) {
        if (!this.ajaxSettings) {
            this.ajaxSettings = {};
        }
        $.extend(this.ajaxSettings, rawProps);
    };
    GcalEventSource.API_BASE = 'https://www.googleapis.com/calendar/v3/calendars';
    return GcalEventSource;
}(fullcalendar_1.EventSource));
exports.default = GcalEventSource;
GcalEventSource.defineStandardProps({
    // manually process...
    url: false,
    googleCalendarId: false,
    // automatically transfer...
    googleCalendarApiKey: true,
    googleCalendarError: true
});
function parseGoogleCalendarId(url) {
    var match;
    // detect if the ID was specified as a single string.
    // will match calendars like "asdf1234@calendar.google.com" in addition to person email calendars.
    if (/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(url)) {
        return url;
    }
    else if ((match = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(url)) ||
        (match = /^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(url))) {
        return decodeURIComponent(match[1]);
    }
}
// Injects a string like "arg=value" into the querystring of a URL
function injectQsComponent(url, component) {
    // inject it after the querystring but before the fragment
    return url.replace(/(\?.*?)?(#|$)/, function (whole, qs, hash) {
        return (qs ? qs + '&' : '?') + component + hash;
    });
}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })

/******/ });
});;
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var h=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,h=t(this),l=h.outerWidth(),c=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),h.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}});var c="ui-effects-",u="ui-effects-style",d="ui-effects-animated",p=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(p),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(c+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(d,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?l?this[l](s.duration,h):this.each(function(){h&&h.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)
}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var f=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=h?2*u:u/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",c="+="===l?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,u[h]=l+s,a&&(n.css(u),u[h]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,c=l?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);h>u;u++)s.animate({opacity:c},l,e.easing),c=1-c;s.animate({opacity:c},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var f;t.uiBackCompat!==!1&&(f=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)})),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;
this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var g=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(g,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var m;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+c,l/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),m===n&&(m=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))
}},_updateDatepicker:function(e){this.maxRows=4,m=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+h},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,L,R=new Date,B=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",X){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,P+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=Math.ceil((H+S)/7),O=X?this.maxRows>z?this.maxRows:z:z,this.maxRows=O,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;O>N;N++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)E=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!E[0]||Q&&Q>A||J&&A>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+E[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var _=!1;t(document).on("mouseup",function(){_=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!_){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),_=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,_=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,h-g>_||m>l+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,h=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=c),g&&(p-=l),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog
},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&v(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var v=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=l&&u>=r&&a>=c&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d)&&(o>=l&&u>=o||r>=l&&u>=r||l>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&v(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=v(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(c.left>r||o>c.right||c.top>h||a>c.bottom):"fit"===n.tolerance&&(l=c.left>o&&r>c.right&&c.top>a&&h>c.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[u]-h)&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;
this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),h(n,e)},1)}).fail(function(t,e){setTimeout(function(){h(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip});;
/**
 * @file
 * Provides FullCalendar defaults and functions.
 */

(function ($, Drupal, drupalSettings) {

  "use strict";

  Drupal.fullcalendar = Drupal.fullcalendar || {};
  Drupal.fullcalendar.plugins = Drupal.fullcalendar.plugins || {};
  Drupal.fullcalendar.cache = Drupal.fullcalendar.cache || {};

  // Alias old fullCalendar namespace.
  Drupal.fullCalendar = Drupal.fullcalendar;

  Drupal.fullcalendar.fullcalendar = function (dom_id) {
    this.dom_id = dom_id;
    this.$calendar = $(dom_id);
    this.$options = {};
    this.navigate = false;
    this.refetch = false;

    // Allow other modules to overwrite options.
    var $plugins = Drupal.fullcalendar.plugins;
    for (var i = 0; i < drupalSettings.fullcalendar[dom_id].weights.length; i++) {
      var $plugin = drupalSettings.fullcalendar[dom_id].weights[i];
      if ($plugins.hasOwnProperty($plugin) && $.isFunction($plugins[$plugin].options)) {
        $.extend(this.$options, $plugins[$plugin].options(this, drupalSettings.fullcalendar[this.dom_id]));
      }
    }

    this.$calendar.find('.fullcalendar').once().fullCalendar(this.$options);

    $(this.$calendar).delegate('.fullcalendar-status-close', 'click', function () {
      $(this).parent().slideUp();
      return false;
    });
  };

  Drupal.fullcalendar.fullcalendar.prototype.update = function (result) {
    var fcStatus = $(result.dom_id).find('.fullcalendar-status');
    if (fcStatus.is(':hidden')) {
      fcStatus.html(result.msg).slideDown();
    }
    else {
      fcStatus.effect('highlight');
    }
    Drupal.attachBehaviors();
    return false;
  };

  /**
   * Parse Drupal events from the DOM.
   */
  Drupal.fullcalendar.fullcalendar.prototype.parseEvents = function (callback) {
    var events = [];
    var details = this.$calendar.find('.fullcalendar-event-details');
    for (var i = 0; i < details.length; i++) {
      var event = $(details[i]);
      events.push({
        field: event.data('field'),
        index: event.data('index'),
        eid: event.data('eid'),
        entity_type: event.data('entity-type'),
        title: event.attr('title'),
        start: event.data('start'),
        end: event.data('end'),
        url: event.attr('href'),
        allDay: (event.data('all-day') === 1),
        className: event.data('cn'),
        editable: (event.data('editable') === 1),
        dom_id: this.dom_id
      });
    }
    callback(events);
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Integrates Views data with the FullCalendar plugin.
 */

(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.fullcalendar = {
    attach: function (context, settings) {
      // Process each view and its settings.
      for (var dom_id in settings.fullcalendar) {
        if (settings.fullcalendar.hasOwnProperty(dom_id)) {
          // Create a new fullcalendar object unless one exists.
          if (typeof Drupal.fullcalendar.cache[dom_id] === "undefined") {
            Drupal.fullcalendar.cache[dom_id] = new Drupal.fullcalendar.fullcalendar(dom_id);
          }
        }
      }

      // Trigger a window resize so that calendar will redraw itself.
      $(window).resize();
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * Processes the FullCalendar options and passes them to the integration.
 */

(function ($, Drupal, drupalSettings) {

  "use strict";

  Drupal.fullcalendar.plugins.fullcalendar = {
    options: function (fullcalendar, settings) {
      if (settings.ajax) {
        fullcalendar.submitInit(settings);
      }

      var options = {
        eventClick: function (calEvent, jsEvent, view) {
          if (settings.sameWindow) {
            window.open(calEvent.url, '_self');
          }
          else {
            window.open(calEvent.url);
          }
          return false;
        },
        drop: function (date, allDay, jsEvent, ui) {
          for (var $plugin in Drupal.fullcalendar.plugins) {
            if (Drupal.fullcalendar.plugins.hasOwnProperty($plugin) && $.isFunction(Drupal.fullcalendar.plugins[$plugin].drop)) {
              try {
                Drupal.fullcalendar.plugins[$plugin].drop(date, allDay, jsEvent, ui, this, fullcalendar);
              }
              catch (exception) {
                alert(exception);
              }
            }
          }
        },
        events: function (start, end, timezone, callback) {
          // Fetch new items from Views if possible.
          if (settings.ajax && settings.fullcalendar_fields) {
            fullcalendar.dateChange(settings.fullcalendar_fields);
            if (fullcalendar.navigate) {
              if (!fullcalendar.refetch) {
                fullcalendar.fetchEvents();
              }
              fullcalendar.refetch = false;
            }
          }

          fullcalendar.parseEvents(callback);

          if (!fullcalendar.navigate) {
            // Add events from Google Calendar feeds.
            for (var entry in settings.gcal) {
              if (settings.gcal.hasOwnProperty(entry)) {
                fullcalendar.$calendar.find('.fullcalendar').fullCalendar('addEventSource',
                  $.fullCalendar.gcalFeed(settings.gcal[entry][0], settings.gcal[entry][1])
                );
              }
            }
          }

          // Set navigate to true which means we've starting clicking on
          // next and previous buttons if we re-enter here again.
          fullcalendar.navigate = true;
        },
        eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {
          // @todo Remove once http://drupal.org/node/1915752 is resolved.
          var index = parseInt(event.index, 10) + 1;
          $.post(
            drupalSettings.path.basePath + 'fullcalendar/ajax/update/drop/' + event.entity_type + '/' + event.eid + '/' + event.field + '/' + index,
            'day_delta=' + dayDelta + '&minute_delta=' + minuteDelta + '&dom_id=' + event.dom_id,
            fullcalendar.update
          );
          return false;
        },
        eventResize: function (event, dayDelta, minuteDelta, revertFunc) {
          $.post(
            drupalSettings.path.basePath + 'fullcalendar/ajax/update/drop/' + event.entity_type + '/' + event.eid + '/' + event.field + '/' + event.index,
            'day_delta=' + dayDelta + '&minute_delta=' + minuteDelta + '&dom_id=' + event.dom_id,
            fullcalendar.update
          );
          return false;
        }
      };

      // Merge in our settings.
      $.extend(options, settings.fullcalendar);

      // Pull in overrides from URL.
      if (settings.date) {
        $.extend(options, settings.date);
      }

      return options;
    }
  };

})(jQuery, Drupal, drupalSettings);
;
