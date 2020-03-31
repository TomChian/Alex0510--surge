/*
熊猫助手黄金版下载地址https://www.lanzous.com/iatt06j
如果无法安装自行下载IPA重新签名安装即可
去除app显示到期限制
*/


let obj = JSON.parse($response.body);

obj.Data = {
    "InvalidDays": 999,
    "InvalidTime": "2099-01-25",
    "Status": 1,
    "Udid": "fdc2037e2041684081fe1bc42eb52d2aa8816a58",
    "SubscribeVip": 1,
    "ActualTotal": 0,
    "ClientShow": 0,
    "Uid": 0,
    "NextTime": null,
    "CreateTime": "2018-01-29"
  }
}
$done({body: JSON.stringify(obj)});
