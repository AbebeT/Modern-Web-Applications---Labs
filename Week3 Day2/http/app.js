var http = require('http');
var fs = require('fs');
var url = require('url');
const querystring = require('querystring');

http.createServer(function(req, res){
    var queryData = url.parse(req.url, true).query;
    console.log(queryData.page);

    if(req.url === "/index?page=1" || req.url === "/page1"){
    fs.readFile('page1.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}
else  if(req.url === "/index?page=2" || req.url === "/page2"){
    fs.readFile('page2.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}
else  if(req.url === "/index?page=3" || req.url === "/page3"){
    fs.readFile('page3.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}

else if(req.url === "/"){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}

}).listen(8000, function(){
    console.log("listening to port 8000");
});