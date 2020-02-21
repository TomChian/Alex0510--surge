/*
1:mix视频下载自动升级VIP
2:沙拉视频点击恢复购买升级VIP
https://bmall.camera360.com/api/(mix/getinfo|iap/check-receipt)
hostname=bmall.camera360.com
*/

const path1 = "/mix/getinfo";
const path2 = "/iap/check-receipt";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
 obj.data["autoStatus"] = 0,
 obj.data["expires"] = 0,
 obj.data["autoMobileMMExpires"] = 0,
 obj.data["isMiguVip"] = 2,
 obj.data["autoState"] = 10,
 obj.data["autoExpires"] = 1866117937
}
if ($request.url.indexOf(path2) != -1){
    obj.data={
    "sandbox": 0,
    "purchaseTime": 1582037377,
    "giftVip": 1,
    "productId": "SaladVip_Int01",
    "appleVip": 1,
    "expireTime": 1866117937,
    "operationVip": 1,
    "errorCode": 0
  }
}

$done({body: JSON.stringify(obj)});
