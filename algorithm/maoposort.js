exports.maopoSort=function(arrays){
  console.log('####################');
  console.log('##冒泡排序');
  console.log('####################');
  sort(arrays);
}

function sort(arrays){
    var j = 1;
    for(;j<arrays.length-1;j++){
        for(var i=0;i<arrays.length-j;i++){
            if(arrays[i]>arrays[i+1]){
                temp = arrays[i];
                arrays[i] = arrays[i+1];
                arrays[i+1] = temp;
            }
        }
    }
}