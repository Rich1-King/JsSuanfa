
exports.insertsort = function(arrays){
    console.log('##############');
    console.log('##插入排序');
    console.log('##############');
    var index = 0;
    for(;index<arrays.length;index++){
        sort(arrays, index);
    }
}

function sort(arrays,index){
    if(arrays == null){
        return '排序数组为空';
    }
    if(index == 0){
        return;
    }
    var temp = arrays[index];
    console.log(arrays);
    while(temp<arrays[index-1]){
        arrays[index] = arrays[index-1];
        index--;
        if(index == 0){
            break;
        }
    }
    arrays[index] = temp;
}