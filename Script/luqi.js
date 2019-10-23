let obj = JSON.parse($response.body);

obj.data={
    "login_num": 1,
    "nickname": "我是你爸爸",
    "is_vip": 1,
    "vip_endtime": 1,
    "expiretime": 1,
  }


$done({body: JSON.stringify(obj)});
