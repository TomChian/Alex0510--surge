/*
奇热小说解锁VIP
https://api.weiqire.com/api3/user/info
*/


let obj = JSON.parse($response.body);

obj.data.data.expire_days = 999,
obj.data.data.xcx_vip_expire = "2685425863",
obj.data.data.xcx_vip = "1",
obj.data.data.vip_expire = "2685425863",
obj.data.data.vip = 1
$done({body: JSON.stringify(obj)});
