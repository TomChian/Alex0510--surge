
var obj = JSON.parse($response.body);

obj = {"status":200,"msg":"\u83b7\u53d6\u6210\u529f","data":{"","is_vip":1,"vip_end_time":"2099-05-02"}}

$done({body: JSON.stringify(obj)});