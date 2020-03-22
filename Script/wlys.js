/*


万里影视App Store版 : http://t.cn/A6zB6tlH

# 解锁万里影视VIP无限时长 
http?:\/\/.*\.arten.cn/login/login
hostname= *.arten.cn,

*/

let obj = JSON.parse($response.body);
obj.msg.time = 4070957802;
$done({body: JSON.stringify(obj)});
