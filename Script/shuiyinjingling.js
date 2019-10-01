var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {
  "status": 200,
  "msg": "获取成功",
  "data": {
    "is_vip": 1,
    "vip_end_time": "2099-05-05",
  }
}

obj.userid = id;

$done({body: JSON.stringify(obj)});
