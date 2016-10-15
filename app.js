kuaisort=require('./algorithm/kuaisort.js');
insertsort=require('./algorithm/insertsort.js');

console.log('###############');
console.log('##快速排序');
var kuaiArrays = [10,2,5,1,3,6,3];
console.log('要排序的:'+kuaiArrays);
kuaiArrays = kuaisort.kuaipai(kuaiArrays);
console.log('排序之后:'+kuaiArrays);
console.log('排序结束');

var insertArrays = [10,2,5,1,3,6,3];
console.log('需要排序的:'+insertArrays);
insertsort.insertsort(insertArrays);
console.log('排序之后:'+insertArrays);
console.log('排序结束');

