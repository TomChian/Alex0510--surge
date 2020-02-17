/*
正则
https://viva.v21xy.com/api/rest/u/vip(InfoNew|VerifyReceipt)
hostname=viva.v21xy.com

*/

const path1 = "/vipInfoNew";
const path2 = "/vipVerifyReceipt";



let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
     obj =obj = {
  "autoRenewProductId": "premium_platinum_yearly",
  "autoRenewStatus": 0,
  "originalTransactionId": "160000688578078",
  "duidDgest": "DIfaymwn",
  "iosDeviceProductVo": {
    "nonOrganicVipMonthly": 3,
    "nonOrganicVipWeekly": 3,
    "premiumGoldMonthly": 3,
    "nonOrganicVipYearly": 3,
    "premiumPlatinumMonthly": 3,
    "premiumPlatinumQuarterly": 3,
    "premiumVipWeekly": 3,
    "premiumGoldYearly": 3,
    "premiumPlatinumYearly": 2,
    "premiumPlatinumHalfYearly": 3,
    "premiumVipYearly": 3
  },
  "platform": 2,
  "endTime": 1866033855000,
  "systemDate": 1581950694047,
  "productList": [
    {
      "isRenew": true,
      "vipType": "premium_platinum_yearly"
    }
  ],
  "isTrialPeriod": false,
  "transactionId": "160000688578078",
  "vipType": "premium_platinum_yearly",
  "startTime": 1581950676000,
  "sign": "8b627cd85501e2e8642bd0ac4c9433f0"
}
 }


if ($request.url.indexOf(path2) != -1){
     obj =obj = {
  "vipType": "premium_platinum_yearly",
  "autoRenewStatus": 0,
  "auidDgest": "zP5j9",
  "allEndTime": 1866033855000,
  "duidDgest": "DIfaymwn",
  "originalTransactionId": "160000688578078",
  "iosDeviceProductVo": {
    "nonOrganicVipMonthly": 3,
    "nonOrganicVipWeekly": 3,
    "premiumGoldMonthly": 3,
    "nonOrganicVipYearly": 3,
    "premiumPlatinumMonthly": 3,
    "premiumPlatinumQuarterly": 3,
    "premiumVipWeekly": 3,
    "premiumGoldYearly": 3,
    "premiumPlatinumYearly": 2,
    "premiumPlatinumHalfYearly": 3,
    "premiumVipYearly": 3
  },
  "allVipType": "vip_normal",
  "allStartTime": 1581950676000,
  "endTime": 1866033855000,
  "platform": 2,
  "isTrialPeriod": true,
  "productList": [
    {
      "isRenew": true,
      "vipType": "premium_platinum_yearly"
    }
  ],
  "systemDate": 1581952112835,
  "startTime": 1581950676000,
  "transactionId": "160000688578078",
  "sign": "d82f409683bf8dce713b0128cc962f29"
}
 }
 
 $done({body: JSON.stringify(obj)});

