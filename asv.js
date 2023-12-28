/*
a i r s p e e d v p n

[rewrite_local]
^https:\/\/api\.express-api\.com\/v1\/(device|connect) url script-response-body https://raw.githubusercontent.com/puss3888/Qx_pub/main/asv.js

[mitm]
hostname = api.express-api.com
*/

var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);
var modifiedHeaders = $response.headers;
var modifiedStatus = 'HTTP/1.1 200 OK'
obj.userid = "5e8b22ad80ac550b214fb9d3";
obj.expire = 9999999999999;
obj.username = "Fly";
obj.type = "gold";
obj.verify = true;
obj.email = "nobody@qq.com";
obj.token =  "1e132dc23df9d4e3a75df4066313a7b2";
obj.publickey = "307b87e5e2deb035";
obj.idfv = "BE0D0FBA-970F-456F-B98B-E1F962FDA10F";
obj.idfa = "C032EAB9-3348-41EA-A654-ADE0BD3332CC";

modifiedBody = JSON.stringify(obj); 

$done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus})
