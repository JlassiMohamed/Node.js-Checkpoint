var fs = require("fs");

var Buf = fs.readFileSync(process.argv[2]);
var str = Buf.toString();
var strArray = str.split('\n');
console.log(strArray.length - 1);
