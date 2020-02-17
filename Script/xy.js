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
  "platform": 1,
  "endTime": 1866033855000,
  "systemDate": 1581950694047,
  "productList": [
    {
      "isRenew": false,
      "vipType": "premium_platinum_yearly"
    }
  ],
  "isTrialPeriod": false,
  "vipType": "premium_platinum_yearly",
  "startTime": 1581950676000,
}
 }


if ($request.url.indexOf(path2) != -1){
     obj =obj = {
  "vipType": "premium_platinum_yearly",
  "autoRenewStatus": 0,
  "allEndTime": 1866033855000,
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
  "platform": 1,
  "isTrialPeriod": false,
  "productList": [
    {
      "isRenew": false,
      "vipType": "premium_platinum_yearly"
    }
  ],
  "systemDate": 1581952112835,
  "startTime": 1581950676000,
}
 }
 
 $done({body: JSON.stringify(obj)});
