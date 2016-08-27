const MaxHeap = require('./src/max-heap');
// const Node = require('./src/node');
const Queue = require('./src/queue');

h = new MaxHeap();
q = new Queue;
const expectedData = [3, 5, 1, 0, 4, 2];

q.push(0, 10);
q.push(1, 15);
q.push(2, 4);
q.push(3, 17);
q.push(4, 6);
q.push(5, 17);
//
// document.write("<br>before all - parentnodes: ");
// for (var i = 0; i < q.heap.parentNodes.length; i++) {
//     document.write(" " + q.heap.parentNodes[i].data);
// }
// if(q.heap.root.left)
// document.write("<br>root left: " + q.heap.root.left.data);
// if(q.heap.root.right)
// document.write("<br>root right: " + q.heap.root.right.data);

var node = q.shift();

document.write("<br>q.shift() = " + node);
document.write("<br>expected: = " + expectedData);
// for (var i = 0; i < 6; i++) {
//     document.write("<br>root node out: data " + node[i]);
//     document.write("<br>expected data: data " + expectedData[i]);
// }
window.h = h;
