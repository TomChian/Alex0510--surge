
var obj = JSON.parse($response.body);

 var = {
  "status": 200,
  "msg": "获取成功",
  "data": {
    "nick_name": "半根",
    "gender": 0,
    "mobile": "",
    "is_vip": 1,
    "vip_end_time": "2099-05-05",
    "user_id": 20245,
    "head_img": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM5GawY2JqGFcqUicbibN4V5E2hr4NnA88Z4x2rIicaf4PQWHV0RAKO5HCLjy9Lr53yLaIa3PHhUUb0VQ/132"
  }
}

$done({body: JSON.stringify(obj)});
