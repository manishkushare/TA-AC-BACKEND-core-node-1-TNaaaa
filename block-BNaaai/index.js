var url = require("url");
var https = require("https")
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);
// - console parsedUrl.pathname
// - console parsedUrl.query
// - console.log parsed Url host and protocol
console.log(parsedUrl.pathname,":pathname");
console.log(parsedUrl.query," :query");
console.log(parsedUrl.host," :host");
console.log(parsedUrl.protocol," :protocol");

let res = https.get("https://www.google.com/", (err,res) => {
    console.log(res);
})
console.log("res: ",res);