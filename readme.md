# 🌲 Binary Search Tree (BST) — The Odin Project

Welcome to my implementation of a self-balancing Binary Search Tree in JavaScript, built as part of The Odin Project curriculum. This project is more than just inserting and deleting nodes — it's about mastering recursion, higher-order functions, and fundamental tree operations like a boss.

⚠️ **Warning**: May cause a serious love for data structures and an unhealthy obsession with tree balancing.

## 🚀 Features

* ✅ Construct a balanced BST from a sorted array (duplicates get the boot)
* 🌿 Auto-balancing logic with `rebalance()` — because nobody likes a wonky tree
* 🔁 Full suite of tree traversal methods: level, in-order, pre-order, post-order
* ⚔️ CRUD operations: `insert()`, `delete()`, `find()` — the holy trinity
* 📏 Utility methods: `height()`, `depth()`, `isBalanced()` — for when you need the stats
* 🔍 Visual debug with `prettyPrint()` — prints a gorgeous vertical tree in your terminal
* 🧠 Written with pure recursion & functional callbacks — no third-party libs, just raw JavaScript muscle

## 🧩 Class Structure

### `Node`
A simple node class holding:
* `data` — the actual value
* `left` — left child (smaller values)
* `right` — right child (larger values)

### `Tree`
Main class that:
* Accepts an array, sorts and deduplicates it like a neat freak
* Builds a balanced BST using divide-and-conquer wizardry
* Exposes all traversal and manipulation methods

## 📦 Usage

```javascript
import Tree from './Tree.js';

const bst = new Tree([10, 5, 15, 20, 3, 5, 7]);
bst.prettyPrint(); // visual output of tree

bst.insert(12);
bst.delete(5);
console.log(bst.find(15)); // returns Node

bst.inOrderForEach((node) => console.log(node.data));
console.log("Height:", bst.height(10));
console.log("Depth:", bst.depth(12));
console.log("Balanced?", bst.isBalanced());

bst.rebalance();
console.log("Rebalanced like a pro!");
```

## 🧪 Core Methods

| Method | Description |
|--------|-------------|
| `insert(value)` | Adds a value to the BST (with swagger) |
| `delete(value)` | Removes a node with proper 3-case handling |
| `find(value)` | Returns node if found, else `null` (the harsh truth) |
| `height(value)` | Returns the height of a given node |
| `depth(value)` | Returns depth from the root |
| `isBalanced()` | Checks if tree is height-balanced (or needs therapy) |
| `rebalance()` | Rebuilds tree into a balanced BST |
| `prettyPrint()` | Beautiful vertical tree render in console |

### Traversals (with callbacks!)
* `levelOrderForEach(callback)` — breadth-first, level by level
* `inOrderForEach(callback)` — gives you sorted order (magic!)
* `preOrderForEach(callback)` — root first, questions later
* `postOrderForEach(callback)` — saves the root for dessert

All traversal methods expect a function and run recursively. No callback? No dice. 🎲

## 🎯 Example Output

```
bst.prettyPrint();

│                   ┌── 99
│               ┌── 93
│           ┌── 90
│           │   └── 89
│       ┌── 79
│       │   │   ┌── 78
│       │   └── 77
│       │       └── 72
│   ┌── 70
│   │   │       ┌── 66
│   │   │   ┌── 65
│   │   │   │   └── 62
│   │   └── 61
│   │       │   ┌── 60
│   │       └── 59
│   │           └── 56
└── 54
    │           ┌── 45
    │       ┌── 44
    │       │   └── 43
    │   ┌── 41
    │   │   │   ┌── 38
    │   │   └── 34
    │   │       └── 29
    └── 27
        │       ┌── 26
        │   ┌── 25
        │   │   └── 20
        └── 13
            │   ┌── 10
            └── 7
                └── 4
```

*Look at that beauty! ASCII art meets computer science.*

## 📚 What I Learned (The Real MVP Section)

This project wasn't just about building — it was about *understanding*. Here's what really clicked:

* 🔁 **Recursion** — finally made peace with functions calling themselves
* 🌳 **Delete logic** — thanks to NeetCode's legendary BST deletion breakdown
* 🤯 **Higher-order functions** — callbacks became my new best friends
* 🎯 **Tree balancing** — because life's too short for unbalanced trees
* 🧠 **Algorithm complexity** — O(log n) became my favorite phrase

## 🎓 The Odin Project Vibes

Built as part of The Odin Project's computer science curriculum, this BST implementation covers:
- Data structures that don't suck
- Recursive thinking (prepare for mind-bending)
- Functional programming concepts
- Algorithm analysis and optimization
- The art of clean, readable code

## 🤓 Fun Facts

* The tree auto-balances itself on construction (like a self-organizing bookshelf)
* Deletion handles all three cases: no children, one child, or two children (it's complicated)
* InOrder traversal gives you sorted data for free (who doesn't love free stuff?)
* The pretty print function is basically tree Instagram — all about those angles

## 🚨 Common Gotchas

* Don't forget your callback functions — the traversals are picky
* Duplicate values get filtered out during construction (no double entries allowed)
* Tree height is measured from the node, not to it (mind the direction)
* An empty tree is balanced by definition (philosophy meets code)

## 🔧 Implementation Notes

* **Time Complexity**: O(log n) for balanced operations, O(n) worst case
* **Space Complexity**: O(n) for storage, O(log n) for recursive calls
* **Memory Efficient**: Minimal overhead with clean node structure
* **Error Handling**: Validates inputs and handles edge cases gracefully

## 🤝 Contributing

This is a learning project, but if you spot something funky or have suggestions:
- Open an issue
- Suggest improvements
- Share your own BST war stories

---

*Built with ❤️, JavaScript, and way too much coffee*  
*Part of The Odin Project journey — where trees grow and developers flourish* 🌳

**Bonus Thought**: *"A tree is only as strong as its root — and the recursion behind it."*