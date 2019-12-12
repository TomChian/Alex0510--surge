
var obj = JSON.parse($response.body);

  obj. data= {
    "nick_name": "我是你爸爸",
    "is_vip": 1,
    "vip_end_time": "2099-12-15",
    "user_id": 20245
  }

$done({body: JSON.stringify(obj)});
