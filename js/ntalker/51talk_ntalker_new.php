function close_ntalker_box(){
document.getElementById('ntalker_box').style.display='none';
document.getElementById('ntalker_box_close').style.display='';
}
function open_ntalker_box(){
document.getElementById('ntalker_box').style.display='';
document.getElementById('ntalker_box_close').style.display='none';
}
function scroll_to_top(){
goTop(0.1,10);
}
/**
*收藏本站
*/
function addFavorite() {
var thisURL = document.URL;
var favURL = "//" + getHost(thisURL);
if (document.all) {
window.external.addFavorite(favURL, "网站名称");
} else {
window.sidebar.addPanel('网站名称', favURL, "");
}
return false;
}
/**
* 回到页面顶部
* @param acceleration 加速度
* @param time 时间间隔 (毫秒)
**/
function goTop(acceleration, time) {
acceleration = acceleration || 0.1;
time = time || 16;

var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;

if (document.documentElement) {
x1 = document.documentElement.scrollLeft || 0;
y1 = document.documentElement.scrollTop || 0;
}
if (document.body) {
x2 = document.body.scrollLeft || 0;
y2 = document.body.scrollTop || 0;
}
var x3 = window.scrollX || 0;
var y3 = window.scrollY || 0;

// 滚动条到页面顶部的水平距离
var x = Math.max(x1, Math.max(x2, x3));
// 滚动条到页面顶部的垂直距离
var y = Math.max(y1, Math.max(y2, y3));

// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
var speed = 1 + acceleration;
window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

// 如果距离不为零, 继续调用迭代本函数
if(x > 0 || y > 0) {
var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
window.setTimeout(invokeFunction, time);
}
}
/*function ntcall_onChatWindowStatus(status){
if(status == 1){
//        alert('打开');
}else if(status == 2){
//        alert('最小化');
$('#ntkf_chat_container').animate({width:'0',height:'0'});
}else if(status == 3){
alert('关闭');
}
}*/
function getHost(url) {
var host = "null";
if (typeof url == "undefined" || null == url)
url = window.location.href;
var regex = /.*\:\/\/([^\/]*).*/;
var match = url.match(regex);
if (typeof match != "undefined" && null != match)
host = match[1];
return host;
}
(function () {
var ie = !!(window.attachEvent && !window.opera);
var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
var fn = [];
var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
var d = document;
d.ready = function (f) {
if (!ie && !wk && d.addEventListener)
return d.addEventListener('DOMContentLoaded', f, false);
if (fn.push(f) > 1) return;
if (ie)
(function () {
try { d.documentElement.doScroll('left'); run(); }
catch (err) { setTimeout(arguments.callee, 0); }
})();
else if (wk)
var t = setInterval(function () {
if (/^(loaded|complete)$/.test(d.readyState))
clearInterval(t), run();
}, 0);
};
})();
(function(){
var ntalker_box_container = document.createElement('div');
ntalker_box_container.id = 'ntalker_box_container';
document.write(ntalker_box_container.outerHTML);
document.write('<style>\
    .ntalker_floatdiv {margin: 0 auto;position: fixed;top:50%;right:0;z-index: 999;_bottom:auto;_position: absolute;_top:expression(document.documentElement.scrollTop+document.documentElement.clientHeight/2-this.style.height);_right:0;}\
    #ntkf_chat_container .ntkf-tips-window table td { background: none; text-align: center;border:none;padding:0;line-height: 18px; }\
    #ntalker_box { width: 100px; float: left; margin-top: -150px;_margin-top: -150px; background:url(//www.51talk.com/js/ntalker/Ntalker.png) no-repeat;} \
    #ntalker_close { float: left; width: 100px; list-style-type: none; margin: 0; padding: 0; text-align: left; background: #817365; line-height: 20px; } \
    #ntalker_close a { float: left; color: #fff; height: 20px; line-height:20px;background:#817365;text-align:center;float:right;font-family:"Arial";text-decoration:none;font-size: 20px;font-weight: bold;}\
    #ntalker_close a:hover{background:#6f6152;text-decoration:none;}\
    #ntalker_bookmark{float:left;list-style-type:none;margin:0;padding:0;font-family:"Arial,宋体";}\
    #ntalker_bookmark a{display:block;width:100px;height:37px;color:#7a6c5c;background:#e8e8e8;text-align:center;line-height:37px;font-size:16px;float:left;text-decoration:none;}\
    #ntalker_bookmark a:hover{font-weight:bolder;text-decoration:none;}\
    #ntalker_pic{width:100px;height:220px;float:left;list-style-type:none;margin:0;padding:0;}\
    #ntalker_pic img{float:left;margin:0;padding:0;border:0;}\
    #ntalker_top{float:left;list-style-type:none;margin:0;padding:0;font-family:"Arial,宋体";}\
    #ntalker_top a{display:block;width:100px;height:37px;color:#fff;text-indent:36px;line-height:37px;font-size:16px;float:left;text-decoration:none;}\
    #ntalker_box_close{width:20px;background:#817365;color:#fff;margin-top:-100px;_margin-top:-100px;}\
    #ntalker_ask{width:20px;text-align:center;text-align:center;list-style-type:none;margin:0;padding:0;font-family:"Arial,宋体";}\
    #ntalker_ask a{display:block;width:20px;height:100px;color:#fff;padding:10px 0;text-decoration:none;}\
    #ntalker_ask a:hover{background:#6f6152;text-decoration:none;}\
    #ntalker_top_20 {list-style-type:none;margin:0;padding:0;}\
    #ntalker_top_20 a{display:block;width:20px;height:20px;padding:0 0 10px 0;text-decoration:none;}\
</style>');
})();

/*
document.write(ntalker_box.outerHTML);
document.write(ntalker_box_close.outerHTML);
*/

//var ntalker_box_container = document.getElementById('ntalker_box_container');
/*    ntalker_box_container.appendChild(ntalker);
ntalker_box_container.appendChild(ntalker_box);
ntalker_box_container.appendChild(ntalker_box_close);*/
/*
document.body.appendChild(ntalker);
document.body.appendChild(ntalker_box);
document.body.appendChild(ntalker_box_close);
*/
/**/
document.ready(function(){
var ntalker_box = document.createElement('div');
ntalker_box.id = 'ntalker_box';
ntalker_box.className = 'ntalker_floatdiv';
ntalker_box.style.float = 'left';
ntalker_box.innerHTML= '<ul style="list-style-type:none;margin:0;padding:0;">\
    <li id="ntalker_pic" style="width:100px;height:273px; display:block;cursor:pointer;" onclick="NTKF.im_openInPageChat()"></li>\
    <li id="ntalker_top" onclick="scroll_to_top();" style="width:100px;height:30px;display:block;cursor:pointer;"></li></ul>';

var ntalker_box_close = document.createElement('div');
ntalker_box_close.id = 'ntalker_box_close';
ntalker_box_close.className = 'ntalker_floatdiv';
ntalker_box_close.style.float = 'left';
ntalker_box_close.style.display = 'none';
ntalker_box_close.innerHTML = '<ul style="list-style-type:none;margin:0;padding:0;"><li id="ntalker_ask"><a href="javascript:void(0);" onclick="open_ntalker_box();">立即垂询</a></li><li id="ntalker_top_20"><a href="javascript:void(0);" onclick="scroll_to_top();"></a></li></ul>';

NTKF_PARAM = {
siteid:"kf_9992",
settingid: "kf_9992_1358841454525",
itemid:"",
uid:"",
uname:""
}

var ntalker =document.createElement("script");
ntalker.setAttribute("type","text/javascript");
ntalker.setAttribute("charset","utf-8");
ntalker.setAttribute("src","//download.ntalker.com/t2d2/ntkfstat.js");// 在这里引入ntalker文件

ntalker_box_container.appendChild(ntalker);
//ntalker_box_container.appendChild(ntalker_box);
//ntalker_box_container.appendChild(ntalker_box_close);
});
