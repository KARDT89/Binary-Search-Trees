class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(this.sortAndClean(array));
    }

    buildTree(array) {
        const start = 0;
        const end = array.length - 1;

        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);

        const root = new Node(array[mid]);
        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1));
        return root;
    }

    sortAndClean(array) {
        const sortedArray = array.sort((a, b) => a - b);
        return [...new Set(sortedArray)];
    }

    insert(value) {
        let node = this.root;
        let lastNode = null;
        while (node !== null) {
            if (node.data === value) return "Value Already Present";
            if (value > node.data) {
                lastNode = node;
                node = node.right;
            } else {
                lastNode = node;
                node = node.left;
            }
        }

        if (value > lastNode.data) {
            lastNode.right = new Node(value);
        } else {
            lastNode.left = new Node(value);
        }

        return "Successfully Added Value to Tree";
    }

    find(value) {
        let node = this.root;
        while (node !== null) {
            if (node.data === value) return node;
            if (value > node.data) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return null;
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    }
}

const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(bst.insert(8.5));
bst.prettyPrint();
