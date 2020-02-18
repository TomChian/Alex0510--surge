
var obj = JSON.parse($response.body);

obj = {
  "status": 200,
  "data": {
    "sandbox": 0,
    "purchaseTime": 1582037377,
    "giftVip": 0,
    "productId": "SaladVip_Int01",
    "appleVip": 1,
    "expireTime": 1866117937,
    "operationVip": 0,
    "errorCode": 0
  },
  "message": "ok",
  "exetime": "1582044945167-1582044973649",
  "serverTime": 1582044973.6499
}


$done({body: JSON.stringify(obj)});
