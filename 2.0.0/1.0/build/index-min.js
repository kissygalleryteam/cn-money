/*! cn-money - v1.0 - 2013-10-25 10:07:12 AM
* Copyright (c) 2013 bofang.zxj; Licensed  */
KISSY.add("gallery/cn-money/1.0/index",function(a){var b={},c=["\u96f6","\u58f9","\u8d30","\u53c1","\u8086","\u4f0d","\u9646","\u67d2","\u634c","\u7396"],d=["\u5143","\u62fe","\u4f70","\u4edf","\u4e07","\u62fe","\u4f70","\u4edf","\u4ebf","\u62fe","\u4f70","\u4edf","\u4e07","\u62fe","\u4f70","\u4edf"],e=["\u89d2","\u5206","\u5398","\u6beb","\u4e1d","\u5ffd"],f=16,g=6,h=/^\d+(.\d+)?$/;return a.mix(b,{convert:function(b,c){if(!a.isNumber(b)&&!a.isString(b)||!h.test(b))return a.log("Error type !"),!1;this.decimalsSize=parseInt(c)||2;var d=this.parseParam(b+"");return d.i.length>f?(a.log("Too large !"),!1):this.trimValue(d)},trimValue:function(a){var b=this.isNeedTenThousand(a.i),c=this._convertInteger(a.i,b),d=this._convertDecimal(a.d);return"0"===a.i?""===a.d?"\u96f6\u5143":d.replace(/^\u96F6{1,}/,""):c+d},parseParam:function(a){var b,c,d=a.indexOf(".");return d>0?(b=a.substring(0,d),c=a.substring(d+1)):0==d?(b="",c=a.substring(1)):(b=a,c=""),""===!b&&(b=parseInt(b,10),b.equals("0")&&(b="")),{i:b,d:c}},_convertInteger:function(a,b){for(var e=[],f=a.length,g=0;f>g;g++){var h="",i=f-g;0==a[g]&&(13==i?h=d[4]:9==i?h=d[8]:5==i&&b?h=d[4]:1==i&&(h=d[0]),i>1&&0!=a[g+1]&&(h+=c[0])),e.push(0==a[g]?h:c[a[g]]+d[i-1])}return e.join("")},_convertDecimal:function(a){for(var b=[],d=0,f=a.length;f>d&&d!==g&&d!==this.decimalsSize;d++)b.push(0==a[d]?"\u96f6":c[a[d]]+e[d]);return b.join("").replace(/\u96F6{2,}/g,"\u96f6").replace(/\u96F6{1,}$/,"")},isNeedTenThousand:function(a){var b=a.length,c="";return b>4?(c=b>8?a.substring(b-8,b-4):a.substring(0,b-4),parseInt(c,10)>0):!1}}),b});