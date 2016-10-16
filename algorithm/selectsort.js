exports.selectSort = function(arrays){
    console.log('###############');
    console.log('##选择排序');
    console.log('###############');
    sort(arrays);
}

function sort(arrays){
    var i = 0;
    while(i!=arrays.length-1){  
        var temp = arrays[0];
        var index = 0;
        var j = 0;
        for(; j<arrays.length-i; j++){
            if(temp < arrays[j]){
                temp = arrays[j];
                index = j;
            }
        }
        arrays[index] = arrays[j-1];
        arrays[j-1] = temp;
        i++;
        console.log(arrays);
    }
}