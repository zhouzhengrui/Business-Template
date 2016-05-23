var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=b_version.split(";");
var trim_Version=version[1].replace(/[ ]/g,"");
if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){
    location.href('http://www.maszy.cn/byeIE6/help.html');
}