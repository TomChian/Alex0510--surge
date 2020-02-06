/*
微商相册正则
https:\/\/www\.wsxcme\.com\/service\/account\/user_info_operation

hostname：*.wsxcme.com
let obj = JSON.parse($response.body);

obj. result = {
    "is_vip": true,
    "is_expire": false,
    "deadline": "2029-02-13",
}

$done({body: JSON.stringify(obj)});
