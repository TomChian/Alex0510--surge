 var obj = JSON.parse($response.body);

obj = "sdkrows_iOS": [
   {
    "pic": "",
    "title": "启动",
    "pos": "ad10",
    "sdkid": "1"
   },
   {
    "pic": "",
    "title": "播放前贴片",
    "pos": "ad2",
    "sdkid": "1"
   },
   {
    "pic": "",
    "title": "详情页下方",
    "pos": "ad3",
    "sdkid": "1"
   }
  ],


$done({body: JSON.stringify(obj)});
