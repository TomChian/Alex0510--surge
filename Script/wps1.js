let obj = JSON.parse($response.body);

obj = "vip": {
    "memberid": 20,
    "expire_time": 1739785014,
    "has_ad": 0

$done({body: JSON.stringify(obj)});
