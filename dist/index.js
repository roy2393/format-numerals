!function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=0)}([function(r,e,n){var t=n(1);function o(r,e){var n=r.toString(),t="";if(n.indexOf(".")>0&&(t=n.substring(n.indexOf("."),n.length)),n=Math.floor(r).toString(),1===e.comma){var o=n.substring(n.length-3),u=n.substring(0,n.length-3);return""!=u&&(o=","+o),u.replace(/\B(?=(\d{2})+(?!\d))/g,",")+o+t}return n.replace(/\B(?=(\d{3})+(?!\d))/g,",")+t}r.exports=function(r,e){var n=function(r){return"object"!=typeof r?{}:r}(e),u=function(r){return"number"!=typeof r?null:r}(r);return null===u?NaN:n.curr?""+t[n.curr]+o(u,n):""+o(u,n)}},function(r,e){r.exports={USD:"$",CAD:"CA$",EUR:"€",AED:"AED",AFN:"Af",ALL:"ALL",AMD:"AMD",ARS:"AR$",AUD:"AU$",AZN:"man.",BAM:"KM",BDT:"Tk",BGN:"BGN",BHD:"BD",BIF:"FBu",BND:"BN$",BOB:"Bs",BRL:"R$",BWP:"BWP",BYR:"BYR",BZD:"BZ$",CDF:"CDF",CHF:"CHF",CLP:"CL$",CNY:"CN¥",COP:"CO$",CRC:"₡",CVE:"CV$",CZK:"Kč",DJF:"Fdj",DKK:"Dkr",DOP:"RD$",DZD:"DA",EEK:"Ekr",EGP:"EGP",ERN:"Nfk",ETB:"Br",GBP:"£",GEL:"GEL",GHS:"GH₵",GNF:"FG",GTQ:"GTQ",HKD:"HK$",HNL:"HNL",HRK:"kn",HUF:"Ft",IDR:"Rp",ILS:"₪",INR:"₹",IQD:"IQD",IRR:"IRR",ISK:"Ikr",JMD:"J$",JOD:"JD",JPY:"¥",KES:"Ksh",KHR:"KHR",KMF:"CF",KRW:"₩",KWD:"KD",KZT:"KZT",LBP:"LB£",LKR:"SLRs",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"MDL",MGA:"MGA",MKD:"MKD",MMK:"MMK",MOP:"MOP$",MUR:"MURs",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"₦",NIO:"C$",NOK:"Nkr",NPR:"NPRs",NZD:"NZ$",OMR:"OMR",PAB:"B/.",PEN:"S/.",PHP:"₱",PKR:"PKRs",PLN:"zł",PYG:"₲",QAR:"QR",RON:"RON",RSD:"din.",RUB:"RUB",RWF:"RWF",SAR:"SR",SDG:"SDG",SEK:"Skr",SGD:"S$",SOS:"Ssh",SYP:"SY£",THB:"฿",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",UYU:"$U",UZS:"UZS",VEF:"Bs.F.",VND:"₫",XAF:"FCFA",XOF:"CFA",YER:"YR",ZAR:"R",ZMK:"ZK"}}]);