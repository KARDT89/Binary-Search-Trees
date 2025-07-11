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

    // my Implimentation
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return "Successfully Added Value to Tree";
        }

        let node = this.root;
        let lastNode = null;

        while (node !== null) {
            if (node.data === value) return "Value Already Present";
            lastNode = node;
            node = value > node.data ? node.right : node.left;
        }

        if (value > lastNode.data) {
            lastNode.right = new Node(value);
        } else {
            lastNode.left = new Node(value);
        }

        return "Successfully Added Value to Tree";
    }

    // Help from Neetcode : https://www.youtube.com/watch?v=LFzAoJJt92M
    delete(value, root = this.root) {
        if (!root) return root;

        if (value > root.data) {
            root.right = this.delete(value, root.right);
        } else if (value < root.data) {
            root.left = this.delete(value, root.left);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            let current = root.right;
            while (current.left) {
                current = current.left;
            }

            root.data = current.data;
            root.right = this.delete(root.data, root.right);
        }

        return root;
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

    levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Callback function is required");
        }
        if (!this.root) return;
        let queue = [];
        queue.push(this.root);
        // while there is atleast one discovered node
        while (queue.length !== 0) {
            let current = queue.shift();
            callback(current);
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
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

// console.log(bst.insert(8.5));
// bst.prettyPrint();
// console.log(bst.delete(8));
bst.prettyPrint()
bst.levelOrderForEach((val) => {
    console.log(val.data);
});
