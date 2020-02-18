var obj = JSON.parse($response.body);

  obj.data["errorCode"] = 0,
  obj.data["sandbox"] = 0,
  obj.data["expireTime"] = 1866117937,
  obj.data["productId"] = SaladVip_Int01,
  obj.data["appleVip"] = 1,
  obj.data["operationVip"] = 1,
  obj.data["giftVip"] = 1


$done({body: JSON.stringify(obj)});
