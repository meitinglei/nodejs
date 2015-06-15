var http = require('http');
var url = require('url');
//req 读流对象 IncoingMessage
// res 写流对象 ServerResponse
var server = http.createServer();
var booklist = {1:{id:1,name:'node'},
    2:{id:2,name:'js'},
    3:{id:3,name:'node.js'}};
//   请求 / 返回所有的书籍列表
// 请求 /book?id=? 返回对应的书籍信息
server.on('request',function(req,res){
    var urlObj=url.parse(req.url,true);
    var path=urlObj.pathname;
    var query=urlObj.query;
    console.log(query);
    if(path == '/'){ // /  返回所有的书籍
        var result = '';
        for(var attr in booklist){
            result+= (booklist[attr].name)+",";
        }
        res.end(result);
    }else if(path =='/book'){ // /book?id=2
        res.end(booklist[query['id']].name);
    }
});

server.on('connection',function(socket){
    socket.on('close',function(){
        console.log('客户端close');
    });
    socket.on('end',function(){
        console.log('客户端end');
    });
    console.log('一个新的连接建立了');
});

server.on('close',function(){
    console.log('服务器关闭了');
});
/*server.setTimeout(30000,function(){
 console.log('连接已超时');
 });*/
server.on('error',function(err){
    console.error(err);
});

server.listen(8080);

//什么情况
//好吧，这个是第一个版本
//分支还是不太会用，就先这样吧
