/*
卡点视频VIP
http://kadian.nineton.cn/api/v1.user/info
/*


let obj = JSON.parse($response.body);

obj.result.vip_type = 1,
obj.result.vip_end_time = 3983234797,
obj.result.permanent_vip = 1,
obj.result.is_vip = 1,
obj.result.vip_grade = 1

$done({body: JSON.stringify(obj)});
