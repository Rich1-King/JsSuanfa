exports.xiangjian = function(arrays){
   var newarrays = checkout(arrays);
   return newarrays;
}

function checkout(arrays){
    var newarrays = new Array();
    var j = 0;
    var k = 1;
    for(var i=0; i<arrays.length; i++){
        if( arrays[i]>=0 ){
            newarrays[k] = arrays[i];
            k = k + 2;
        }
        if( arrays[i]<0 ){
            newarrays[j] = arrays[i];
            j = j + 2;
        }
    }

    return newarrays;
}