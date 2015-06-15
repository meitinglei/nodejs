var redis=require('redis');
var client=redis.createClient(6379,'123.57.143.189');
client.on('error',function(err){
    console.log(err);
})
client.select(10);
client.hmset('person_100','name','tom','age','100',function(err,result){
    console.log(arguments);
})
client.hgetall('person_100',function(err,result){
    console.log(arguments);
})
client.set('name','lewis',function(err,result){
    console.log(arguments);
})