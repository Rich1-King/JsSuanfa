var node = require('./tree/node.js');
var tree = require('./tree/tree.js');
var question = require('./question/suanfa.js');
var map = require('./map/map.js');

var node4 = new node.node(undefined,undefined,'D');
var node5 = new node.node(undefined,undefined,'E');
var node6 = new node.node(undefined,undefined,'F');
var node7 = new node.node(undefined,undefined,'H');
var node2 = new node.node(node4,node5,'B');
var node3 = new node.node(node6,node7,'C');
var node1 = new node.node(node2,node3,'A');
var tree1 = new tree.tree(node1);

console.log(tree1);

console.log('##########先序遍历########');
tree1.printFirstTree();

console.log('##########后序遍历########');
tree1.printTree();

console.log('##########中序遍历########');
tree1.printCenterTree();

console.log('#####################');
var newtree = tree1.clearTree();
console.log(newtree);     

console.log('#####################');
console.log('##排序##');
var arrays=[1,2,3,-1,-2,-3];
var newarrays = question.xiangjian(arrays);
console.log(newarrays);

console.log('#####################');
console.log('##图##');
var mapValue = [10,5,20,30];
var mapCtrl = new map.map();
mapCtrl.initMap(mapValue);
mapCtrl.setEdage(0,1);
mapCtrl.setEdage(0,2);
mapCtrl.setEdage(0,3);
mapCtrl.setEdage(1,0);
mapCtrl.setEdage(1,3);
mapCtrl.setEdage(2,0);
mapCtrl.setEdage(2,3);
mapCtrl.setEdage(3,0);
mapCtrl.setEdage(3,1);
mapCtrl.setEdage(3,2);

mapCtrl.depthFound();

