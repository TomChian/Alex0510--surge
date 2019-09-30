// [Script]
// http-response ^https://api1.dobenge.cn/api/user/ script-path=https://github.com/ConnersHua/Profiles/raw/master/Surge/Script/com.poizon.js,requires-body=true
// [MITM]
// hostname = api1.dobenge.cn
var obj = JSON.parse($response.body);

obj = {"status":200,"msg":"\u83b7\u53d6\u6210\u529f","data":{"","is_vip":1,"vip_end_time":"2099-05-02"}}

$done({body: JSON.stringify(obj)});
