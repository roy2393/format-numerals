!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FN=t():e.FN=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);function o(e,t){var r=e.toString(),n="";if(r.indexOf(".")>0&&(n=r.substring(r.indexOf("."),r.length)),r=Math.floor(e).toString(),1===t.comma){var o=r.substring(r.length-3),u=r.substring(0,r.length-3);return""!=u&&(o=","+o),u.replace(/\B(?=(\d{2})+(?!\d))/g,",")+o+n}return r.replace(/\B(?=(\d{3})+(?!\d))/g,",")+n}t.formatNumerals=function(e,t){var r=function(e){return"object"!=typeof e?{}:e}(t),u=function(e){return"number"!=typeof e?null:e}(e);return null===u?NaN:r.curr?""+n[r.curr]+o(u,r):""+o(u,r)}},function(e,t){e.exports={USD:"$",CAD:"CA$",EUR:"€",AED:"AED",AFN:"Af",ALL:"ALL",AMD:"AMD",ARS:"AR$",AUD:"AU$",AZN:"man.",BAM:"KM",BDT:"Tk",BGN:"BGN",BHD:"BD",BIF:"FBu",BND:"BN$",BOB:"Bs",BRL:"R$",BWP:"BWP",BYR:"BYR",BZD:"BZ$",CDF:"CDF",CHF:"CHF",CLP:"CL$",CNY:"CN¥",COP:"CO$",CRC:"₡",CVE:"CV$",CZK:"Kč",DJF:"Fdj",DKK:"Dkr",DOP:"RD$",DZD:"DA",EEK:"Ekr",EGP:"EGP",ERN:"Nfk",ETB:"Br",GBP:"£",GEL:"GEL",GHS:"GH₵",GNF:"FG",GTQ:"GTQ",HKD:"HK$",HNL:"HNL",HRK:"kn",HUF:"Ft",IDR:"Rp",ILS:"₪",INR:"₹",IQD:"IQD",IRR:"IRR",ISK:"Ikr",JMD:"J$",JOD:"JD",JPY:"¥",KES:"Ksh",KHR:"KHR",KMF:"CF",KRW:"₩",KWD:"KD",KZT:"KZT",LBP:"LB£",LKR:"SLRs",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"MDL",MGA:"MGA",MKD:"MKD",MMK:"MMK",MOP:"MOP$",MUR:"MURs",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"₦",NIO:"C$",NOK:"Nkr",NPR:"NPRs",NZD:"NZ$",OMR:"OMR",PAB:"B/.",PEN:"S/.",PHP:"₱",PKR:"PKRs",PLN:"zł",PYG:"₲",QAR:"QR",RON:"RON",RSD:"din.",RUB:"RUB",RWF:"RWF",SAR:"SR",SDG:"SDG",SEK:"Skr",SGD:"S$",SOS:"Ssh",SYP:"SY£",THB:"฿",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",UYU:"$U",UZS:"UZS",VEF:"Bs.F.",VND:"₫",XAF:"FCFA",XOF:"CFA",YER:"YR",ZAR:"R",ZMK:"ZK"}}])});