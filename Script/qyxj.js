/*
轻颜相机解锁VIP
https?:\/\/commerce-api\.faceu\.mobi\/commerce\/.*\/subscription\/user_info*
*/

let obj = JSON.parse($response.body);
obj.data.start_time = 1584674770;
obj.data.end_time = 4077660370;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
$done({body: JSON.stringify(obj)});
