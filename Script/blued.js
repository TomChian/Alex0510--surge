 var obj = JSON.parse($response.body);

var id = obj.userid;

obj.user ={
    "vip_grade": 2,
    "is_vip_annual": 1,
   }
obj.userid = id;

$done({body: JSON.stringify(obj)});
