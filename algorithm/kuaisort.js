
exports.kuaipai =　function(arrays){
    console.log('#################');
    console.log('##开始快速排序');
    console.log('##排序元素个数为：'+arrays.length);
    console.log('#################');
    var i = 0;
    var j = arrays.length-1;
    sort(arrays, i, j);
    console.log('排序结束');
    return arrays;
}

function sort(arrays, start, end){
    console.log('start:'+start+'  '+'end:'+end);
    var parm1 = start;
    var parm2 = end;
    var sign = start;
    if(start == end-1){
        if(arrays[start] > arrays[end]){
            var temp = arrays[start];
            arrays[start] = arrays[end];
            arrays[end] = temp;
        }
        return arrays;
    }
    if(start >= end){
        return arrays;
    }
    while(start != end){
        if(sign != end){
            if(arrays[sign] > arrays[end]){
                var temp = arrays[sign];
                arrays[sign] = arrays[end];
                arrays[end] = temp;
                sign = end;
                continue;
            }
            end--;
        }
        if(sign != start){
            if(arrays[sign] < arrays[start]){
                var temp = arrays[sign];
                arrays[sign] = arrays[start];
                arrays[start] = temp;
                sign = start;
                continue;
            }
            start++;
        }
    }
    sort(arrays, parm1, sign-1);
    sort(arrays, sign+1, parm2);
}