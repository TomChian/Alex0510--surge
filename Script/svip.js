let obj = JSON.parse($response.body);

obj = {
  "msg": {
    "money": "0",
    "share_ma": "226559",
    "parentid": 1,
    "Source": "自由注册",
    "time": 1919135552,
    "player_starttimes": 1,
    "shiyong": "60",
    "headimgurl": "",
    "yongjinsu": null,
    "qdtime": 1575803958,
    "power": "2",
    "share": 34,
    "tudi": 0,
    "nick_name": "",
    "txje": 0,
    "tudilist": [],
    "zfb": ""
  },
  "code": "1"
}

$done({body: JSON.stringify(obj)});
