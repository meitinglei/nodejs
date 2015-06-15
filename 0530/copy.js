var fs = require('fs');
var BUFFER_SIZE = 1;
function copy(src,dest){
    var readSoFar=0,fdsrc,fddest,read;
    var buff = new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(dest,'w');
    do{
        //fd, buffer, offset, length, position
        read  = fs.readSync(
            fd,buffer,0,BUFFER_SIZE,readSoFar);
        readSoFar+=BUFFER_SIZE;
        //fd, buffer, offset, length, position
        fs.writeSync(fd,buffer,0,read);
    }while(read>0)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
}

function deepVerse2(dir,cb){
    fs.readdirSync(dir).forEach(function(file){
        var pathname = path.join(dir,file);
        if(fs.statSync(pathname).isDirectory()){
            cb(pathname);
            deepVerse2(pathname,cb);
        }else{
            cb(pathname);
            fs.unlinkSync(pathname)
        }
    });
}