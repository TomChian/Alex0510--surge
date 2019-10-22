var obj = JSON.parse($response.body);

obj = {
  "msg": "OK",
  "result": {
    "openCourseIds": [
    ],
    "vipDaysOverdue": 1,
    "has_append_service": 1,
    "begintime": "2019-10-22",
    "endtime": "2029-10-22",
    "vipResidualDay": 365,
    "vipLevel": 2,
    "vipstatus": 1,
    "isRenewals": 1,
    "vipType": 1,
    "isexpert": true,
    "choreographySkills": 0,
    "imeiVIPOrderBindStatus": 1
  },
  "code": 0
}

$done({body: JSON.stringify(obj)});
