/*
蒸汽波相机vaporcam解锁VIP
https://pay.wecut.com/apple/iosAppVerifyReceipt.php
*/

let obj = JSON.parse($response.body);

obj.data = {
    "isValid": 1,
    "expiresTs": 4077660370
  }
$done({body: JSON.stringify(obj)});

