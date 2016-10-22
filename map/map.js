exports.map = function(){

    this.mapNode = new Array();
    this.edage = new Array();
    this.unVisited = new Array();

    this.initMap = function(mapList){
        console.log('mapList:'+mapList);
        for(var i=0; i<mapList.length; i++){
            this.mapNode[i] = mapList[i];
            this.edage[i] = new Array();
            this.unVisited[i] = -1;
        }
        console.log('init is over!!!');
    }

    this.setEdage = function(start, end){
        console.log(start+' '+end);
        if(start == -1 || end == -1 || start >= this.mapNode.length || end >= this.mapNode.length){
            return;
        }
        this.edage[start][end] = 1;
        console.log('set Edage:'+start+'  '+end);
    }

    this.depthFound = function(){
        console.log('edage:' + this.edage.length);
        console.log('edage is :'+this.edage);
        for(var i=0; i<this.edage.length; i++){
            if(this.unVisited[i] != -1){
                continue;
            }
            console.log(i + '=>' + this.mapNode[i]);
            search(i);
            if(i = this.edage.length -1){
                this.unVisited[i] = 1;
            }
        }
    }
    function search(i){
        console.log('search');
        console.log(this.unVisited);
        console.log(this.unVisited[i]);
        if(this.unVisited[i] != -1){
            return;
        }
        console.log('mapNode:' + this.mapNode.length);
        for(var j=0; j<this.mapNode.length; j++){
            if(this.edage[i][j] == 1){
                console.log(j+'=>'+this.mapNode[j]);
                search(j);
                if(j == this.mapNode.length - 1){
                    this.unVisited[j] = 1;
                }
            }

        }
    }



}