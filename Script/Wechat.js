/*
[Script]
http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://raw.githubusercontent.com/Alex0510/surge/master/Script/Wechat.js

[MITM]
hostname = mp.weixin.qq.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});
