/*
哎呀直播解锁收费房间，你懂的，开车软件
下载链接https://feq.xyz/1mdy9.html
https://api.hlo.xyz/api/public/\?service=Live.checkLive
*/


var obj = JSON.parse($response.body);

obj = {
  "ret": 200,
  "data": {
    "msg": "",
    "info": [
      {
        "type": "0",
        "type_val": "35",
        "type_msg": "本房间为收费房间，需支付35钻石"
      }
    ],
    "code": 0
  },
  "msg": ""
}
$done({body: JSON.stringify(obj)});
