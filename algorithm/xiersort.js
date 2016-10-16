exports.xierSort = function(arrays){
    console.log('##################');
    console.log('##希尔排序');
    console.log('##################');
    var k = parseInt(arrays.length/2);
    for(; k>0; k=parseInt(k/2)){
        sort(arrays, k);
    }
   
}

function sort(arrays, value){
    for(var i=0; i<value; i++){
        for(var j=i;j<(arrays.length-value);j+=value){
            if(arrays[j]>arrays[j+value]){
                var temp = arrays[j];
                arrays[j] = arrays[j+value];
                arrays[j+value] = temp;
            }
        }
    }
}