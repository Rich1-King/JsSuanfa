exports.tree = function(root) {
    this.root = root;

    this.clearNode = function(node){
         if(node!=undefined){
                this.clearNode(node.rightnode);
                this.clearNode(node.rightnode);
                node=undefined;
            }
            return this.root;
    }

    this.clearTree = function(){
        this.clearNode(this.root);
        return this.root;
    }

    this.printNode = function(node){
        if(node!=undefined){
            this.printNode(node.leftnode);
            this.printNode(node.rightnode);
            console.log(node.data);
        }
        return this.root;
    }

    this.printTree = function(){
        this.printNode(this.root);
        return this.root;
    }

    this.printCenterNode = function(node){
        if(node != undefined){
            this.printCenterNode(node.leftnode);
            console.log(node.data);
            this.printCenterNode(node.rightnode);
        }
        return this.node;
    }

    this.printCenterTree =  function(){
        this.printCenterNode(this.root);
        return this.root;
    }

    this.printFirstNode = function(node){
        if(node != undefined){
            console.log(node.data);
            this.printFirstNode(node.leftnode);
            this.printFirstNode(node.rightnode);
        }
        return node;
    }
    this.printFirstTree = function(){
        this.printFirstNode(root);
        return this.root;
    }  
}