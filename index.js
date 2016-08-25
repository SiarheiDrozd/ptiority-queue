const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

h = new MaxHeap();

h.push(42, 15);
h.push(14, 32);
h.push(0, 0);
// h.push(1,1);

const root = h.root;
const left = h.root.left;
const lastInsertedNode = h.root.right;

document.write("parentNode length: " + h.parentNodes.length);
h.parentNodes.forEach(function(item,index){
    document.write("item " + item.priority + " index: " + index + "<br>");
});

const detached = h.detachRoot();
h.restoreRootFromLastInsertedNode(detached);

    document.write("<br>root: " + h.root.data + ", " + h.root.priority);
    if(h.root.left)
        document.write(" left ");
    if(h.root.right)
        document.write(" right ");

h.parentNodes.forEach(function(item,index){
    document.write("item " + item.priority + " index: " + index + "<br>");
});

window.h = h;
