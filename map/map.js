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
            for(var j=0; j<mapList.length; j++){
                this.edage[i][j] = 0;
            }
        }
        console.log('init is over!!!');
        console.log('mapNode:'+this.mapNode);
        console.log('edage:'+this.edage);
        console.log('unVisited:'+this.unVisited);
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
            this.depthSearch(i);
        }
    }
    this.depthSearch = function(i){
        if(this.unVisited[i] != -1){
            return;
        }
        console.log(i+'=>'+this.mapNode[i]);
        this.unVisited[i]=1;
        for(var j=0; j<this.mapNode.length; j++){
            if(this.edage[i][j] == 1){
                this.depthSearch(j);
            }
        }
    }

    this.guangFound = function(){
        console.log('edage:' + this.edage.length);
        console.log('edage is :'+this.edage);
        for(var i=0; i<this.edage.length; i++){
            this.guangSearch(i);
        }
    }

    this.guangSearch = function(i){
        if(this.unVisited[i] !=  -1){
            return;
        }

        console.log(i+'=>'+this.mapNode[i]);
        this.unVisited[i]=1;
        for(var j=0; j<this.mapNode.length; j++){
            if(this.edage[i][j] == 1){
                console.log(j+'=>'+this.mapNode[j]);
                this.unVisited[j]=1;
            }
        }
    }



}