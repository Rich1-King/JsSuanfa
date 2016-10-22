kuaisort=require('./algorithm/kuaisort.js');
insertsort=require('./algorithm/insertsort.js');
maoposort=require('./algorithm/maoposort.js');
xiersort=require('./algorithm/xiersort.js');
selectsort=require('./algorithm/selectsort.js');

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

var maopoArrays = [10,2,5,1,3,6,3];
console.log('需要排序的:'+maopoArrays);
maoposort.maopoSort(maopoArrays);
console.log('排序之后:'+maopoArrays);
console.log('排序结束');

var xierArrays = [10,2,5,1,3,6,3];
console.log('需要排序的:'+xierArrays);
xiersort.xierSort(xierArrays);
console.log('排序之后:'+xierArrays);
console.log('排序结束');

var selectArrays = [10,2,5,1,3,6,3];
console.log('需要排序的:'+selectArrays);
selectsort.selectSort(selectArrays);
console.log('排序之后:'+selectArrays);
console.log('排序结束');


