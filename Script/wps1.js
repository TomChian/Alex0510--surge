let obj = JSON.parse($response.body);

obj.vip.memberid = 20,
obj.vip.expire_time = 1739785014,
obj.vip.has_ad = 0

$done({body: JSON.stringify(obj)});
