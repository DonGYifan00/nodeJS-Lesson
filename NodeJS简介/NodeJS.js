const http = require("http");

var server = http.createServer(function(req,res){
	res.write("hello world");
	res.end();
});

server.listen(8081);
console.log("server 8081");

/**
*1.shift + 鼠标右键
*2.node + 文件名
*3.修改了文件，需重新执行node + 文件名
*/