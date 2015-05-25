var buf1 = new Buffer([0x31,0x32,0x33,0x34,0x35,0x36,
    0x37]);
var buf2 = new Buffer([0x38,0x39,0x30,0x31,0x32]);
//1.先存储后合并
function concat(arr,length){
    var totalBuf = new Buffer(length);
    var index =0;
    for(var i=0;i<arr.length;i++){
        arr[i].copy(totalBuf,index,0);
        index+=arr[i].length;
    }
    return totalBuf;
}
console.log(concat([buf1,buf2],
    buf1.length+buf2.length).toString());