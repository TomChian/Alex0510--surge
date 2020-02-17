let obj = JSON.parse($response.body);

obj= {
  "result": "ok",
  "total_cost": 0,
  "privilege": [
  ],
  "userid": 123014047,
  "wealth": 0,
  "level": 5,
  "exp": 0,
  "vip": {
    "memberid": 20,
    "expire_time": 1739785014,
    "name": "Register",
    "has_ad": 0
  },
  "total_buy": 1
}

$done({body: JSON.stringify(obj)});
