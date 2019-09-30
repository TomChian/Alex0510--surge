
var obj = JSON.parse($response.body);

 {"status":200,"msg":"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6210\u529f","is_vip":1,"vip_end_time":"2099-05-02"}

$done({body: JSON.stringify(obj)});
