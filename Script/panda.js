/*
熊猫助手黄金版下载地址https://www.lanzous.com/iatt06j
如果无法安装自行下载IPA重新签名安装即可
去除app显示到期限制--Eric
http://usapi.tongbu.com/v.html
hostname=usapi.tongbu.com
*/


let obj = JSON.parse($response.body);

obj.Data.InvalidDays = 999,
obj.Data.InvalidTime = "2099-01-25",
obj.Data.Status = 1,
obj.Data.SubscribeVip = 1

$done({body: JSON.stringify(obj)});
