var arr = [{id:'a'},{id:'b'},{id:'c'}];
var index = arr.findIndex(function(o){
     return o.id === 'a';
})
if (index !== -1) arr.splice(index, 1);
console.log(arr)