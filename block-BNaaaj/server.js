// const https = require('https');
const url = require('url');
// console.dir(https);

// const option = new URL("https://airindia.com/fares/calculate?from=delhi&to=detroit");
// const response = https.request(option.parse());
// console.log(response);

const parsedURL = url.parse("https://airindia.com/fares/calculate?from=delhi&to=detroit",true);
console.log(parsedURL);
console.log(parsedURL.query);
console.log(parsedURL.pathname);
console.log(parsedURL.protocol);