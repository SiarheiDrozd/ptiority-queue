const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

h = new MaxHeap();

h.root = new Node(0, 10);
h.root.appendChild(new Node(1, 5));
h.root.appendChild(new Node(2, 7));
h.root.left.appendChild(new Node(3, 20));

h.parentNodes = [
    h.root.left,
    h.root.right,
    h.root.left.left,
];



h.shiftNodeUp(h.root.left.left);

document.write(h.root.data + " " + h.root.priority + "<br>");

document.write(h.parentNodes.indexOf(h.root) + " ");
document.write(h.parentNodes.indexOf(h.root.left) + " ");
document.write(h.parentNodes.indexOf(h.root.right) + " ");
document.write(h.parentNodes.indexOf(h.root.left.left) + " <br>");

for(var i = 0; i<h.parentNodes.length; i++)
{
    document.write(h.parentNodes[i].data + " ");
}

/**
 10                       20
 /  \                     /  \
 5    7  - shift up ->   10   7
 /                        /
 20                       5
 **/
window.h = h;
