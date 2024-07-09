//test/async.js
//how we can perform unit tests on async 
//function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },1000)
}
//calls admin after 4 seconds 
module.exports={fetchData,MyData};