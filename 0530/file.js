var fs = require('fs');
fs.open('./msg.txt','r',function(err,fd){
    console.log(fd);
});

/**
 读取文件fs.read
 fd 文件描述符
 buffer 读到哪个缓存区内
 offset 向缓存区中写入的数据的起始位置
 length 从文件中读取到的字节
 position 文件中读取的开始位置
 callback
 err 错误对象
 bytesRead 表示实际读取到的字节数
 buffer 就是读取到的缓存区对象
 */
fs.open('./msg.txt','r',function(err,fd){
    var buff = new Buffer(6);
    fs.read(fd,buff,0,6,3,function(err,bytesRead,buffer){
        console.log(bytesRead);
        console.log(buff);
        console.log(buff.toString());
        console.log(buff === buffer);
    });
});
/**
 * 可以读取多次
 */
fs.open('./msg.txt','r',function(err,fd){
    var buff = new Buffer(12);
    fs.read(fd,buff,0,6,0,function(err,bytesRead,buffer){
        fs.read(fd,buff,6,6,null,function(err,bytesRead,buffer){
            console.log(buff.toString());
        });
    });
});