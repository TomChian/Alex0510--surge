/*

大千世界
hostname=api.mvmtv.com
https:\/\/api\.mvmtv\.com\/index\.php\?m=(mvmtv|order)&c=(user|orders)&a=(info|getContinueRent)

*/


const path1 = "index.php\?m=mvmtv&c=user&a=info";
const path2 = "/index.php\?m=order&c=orders&a=getContinueRent";


let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
  obj.data["vip_exp"] = "2029-10-20 00:00:00",
  obj.data["rent_exp"] = "2029-10-20 10:37:17",
  obj.data["is_expire"] = 1,
  obj.data["rent_days"] = 9999,
}

if ($request.url.indexOf(path2) != -1){
 obj.data["is_pay"] = true,
 obj.data["expdate"] = 9999,
 obj.data["time"] = 1887159650
}

$done({body: JSON.stringify(obj)});
