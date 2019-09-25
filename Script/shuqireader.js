var obj = JSON.parse($response.body);

var id = obj.userid;

obj ={
  "state": "200",
  "message": "success",
  "data": {
    "ticketInfo": {
      "monthTicketNum": 0,
      "recommendTicketNum": 0,
      "isShowRedDot": 0
    },
    "superInfo": {
      "expiredTime": 1,
      "superMsg": "",
      "isRemind": ture,
      "superType": 1
    },
    "priorityInfo": {
      "newInfo": 1,
      "superInfo": 2,
      "monthlyInfo": 3
    },
    "newInfo": {
      "expiredTime": 1,
      "superMsg": "",
      "isRemind": ture,
      "superType": 1
    },
    "highInfo": {
      "isHigh": 0,
      "remainDay": 0
    },
    "monthlyInfo": {
      "extraDiscount": 8,
      "autoRenewMsg": "",
      "isRemind": ture,
      "expiredTime": 4081672705,
      "monthlyAutoRenewSwitch": 0,
      "monthlyMsg": "2099-05-05到期",
      "monthlyType": 2
    },
    "userTipsInfo": {
      "msgId": 0
    },
    "userCouponInfo": {
      "ticket": {
        "unUsedNum": 0
      },
      "sign": {
        "unUsedNum": 0
      },
      "fullBuy": {
        "unUsedNum": 0,
        "expiredTime": 1,
        "totalUnUsedNum": 0,
        "usedNum": 0
      },
      "chapterBuy": {
        "unUsedNum": 0,
        "expiredTime": 1,
        "totalUnUsedNum": 0,
        "usedNum": 0
      },
      "buyRecord": {
        "num": 2
      }
    },
    "beanInfo": {
      "beanNum": 0,
      "beanTotal": "0",
      "expiringNum": 0
    },
    "userInfo": {
      "vipBanner": {
        "state": 2,
        "title": "",
        "subtitle": ""
      },
      "identityInfo": [
      ],
      "balance": "0",
      "isAuthor": 2
    },
    "autoRenewInfo": {
      "autoRenewSwitch": 0,
      "type": 0,
      "autoRenewTag": ""
    }
  }
}
obj.userid = id;

$done({body: JSON.stringify(obj)});
