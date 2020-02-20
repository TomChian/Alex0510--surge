/*
https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare)
*/

body = $response.body.replace(/\"isPremium\":false/, "\"isPremium\":true").replace(/\"isForeverPremium\":false/, "\"isForeverPremium\":true").replace(/\"valid\":false/, "\"valid\":true")
$done({body});
