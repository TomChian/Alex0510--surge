
var obj = JSON.parse($response.body);

  obj. data= {
    "user_id": 398201034,
    "nick_name": "我是你爸爸",
    "head_img":"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJvgtX8RuqzibHQahW09liald0ptWnNBx7I2ztqyM6lWvfNNhQHDAyKW2Y7aDWwJhaAHFhkyGTkLwhQ/132",
    "is_vip": 1,
    "vip_end_time": "2099-12-15 12:15:12"
  }

$done({body: JSON.stringify(obj)});
