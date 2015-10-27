var arr = [];
for(var i=0;i<10000000;i++){
  arr.push(i);
}
var start = Date.now();
arr = arr.sort(function(a, b){
  return Math.random() >= 0.5 ? 1 : -1
})
var end = Date.now();
console.log(end - start);