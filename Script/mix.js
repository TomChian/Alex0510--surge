let obj = JSON.parse($response.body);

 obj.data["autoStatus"] = 0,
 obj.data["expires"] = 0,
 obj.data["autoMobileMMExpires"] = 0,
 obj.data["isMiguVip"] = 2,
 obj.data["autoState"] = 10,
 obj.data["autoExpires"] = 1866117937

$done({body: JSON.stringify(obj)});
