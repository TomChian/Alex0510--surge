
*/
var url = $request.url;
var murl = url.replace(/baidu/i, "baiduwp");
var furl = murl.replace(/https/i, "alook");
console.log(furl);
var title = "Meeta 正在为您解析百度云盘分享链接";
var subtitle = "如需下载该文件请下拉通知点击链接跳转";
$notification.post(title, subtitle, furl);

$done();
