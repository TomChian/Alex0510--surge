/*
魔板视频和通话录音同时解锁VIP
http://micro-tool-api.foundao.com/orderPayCenterService/user/userInfo
*/


let obj = JSON.parse($response.body);

obj.data.vipExpireTime = "2029-03-29 22:18:59",
obj.data.isVip = 1

$done({body: JSON.stringify(obj)});
