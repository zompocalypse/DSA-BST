const BinarySearchTree = require('./BinarySearchTree');

// 1. Draw a BST
//    1.1 [3,1,4,6,9,2,5,7]
//                3
//               / \
//              1   4
//               \   \
//                2   6
//                   / \
//                  5   9
//                     /
//                    7

//    1.2 [ E A S Y Q U E S T I O N ]
//                   E
//                  /  \
//                 A    S
//                    /   \
//                  Q      Y
//                 /      /
//                E      U
//                 \    /
//                  I  S
//                   \  \
//                    O  T
//                   /
//                  N

// 2. Remove the root
//    2.1 [(3),1,4,6,9,2,5,7]
//                    4
//                  /   \
//                 1     6
//                  \   / \
//                   2 5   9
//                    /
//                   7

//    2.2 [ (E) A S Y Q U E S T I O N ]
//                   E
//                  /  \
//                 A    S
//                    /   \
//                  Q      Y
//                 /      /
//                I      U
//                 \    /
//                  O  S
//                 /    \
//                N      T

// 3. Create a BST Class

function displayTree(key) {
  if (key) {
    console.log(key);
    displayTree(key.left);
    displayTree(key.right);
  }
}

function tree(t) {
  if (!t) {
    return '';
  }
  return tree(t.left) + t.value + tree(t.right);
}

const nums = [3, 1, 4, 6, 9, 2, 5, 7];
function numbers(values) {
  let BST = new BinarySearchTree();
  for (let i = 0; i < values.length; i++) {
    BST.insert(values[i], values[i]);
  }

  // displayTree(BST);
  // console.log(tree(BST));
  // console.log(findHeight(BST));
  // console.log(isBST(BST));
  // console.log(thirdLargest(BST));
  // console.log(balancedTree(BST));
}

numbers(nums);

const lettersArray = [
  'E',
  'A',
  'S',
  'Y',
  'Q',
  'U',
  'E',
  'S',
  'T',
  'I',
  'O',
  'N',
];
function letters(letters) {
  let BST = new BinarySearchTree();
  for (let i = 0; i < letters.length; i++) {
    BST.insert(letters[i], letters[i]);
  }

  // displayTree(BST);
  // console.log(tree(BST));
  // console.log(findHeight(BST));
  // console.log(isBST(BST));
  // console.log(thirdLargest(BST));
  // console.log(balancedTree(BST));
}

letters(lettersArray);

// 4. What does this program do?

// function tree(t) {
//   if (!t) {
//     return 0;
//   }
//   return tree(t.left) + t.value + tree(t.right);
// }

// Recursively traverses the tree and adds all values of the tree in index order;

// 5. Height of a BST

function findHeight(bst) {
  if (!bst) return 0;
  let leftHeight = findHeight(bst.left);
  let rightHeight = findHeight(bst.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

// 6. Is it a BST?

function isBST(bst) {
  if (!bst) return true;
  const checked = [];
  function check(node) {
    if (node.left) check(node.left);
    checked.push(node.value);
    if (node.right) check(node.right);
  }
  check(bst);
  for (let i = 0; i < checked.length; i++) {
    if (checked[i] > checked[i + 1]) {
      return false;
    }
  }
  return true;
}

// function isBST(tree) {
//   if (!tree.left || !tree.right) {
//     return false;
//   }
//   if (tree.left) {
//     if (tree.left.value >= tree.value) {
//       return false;
//     } else {
//       isBST(tree.left);
//     }
//   }
//   if (tree.right) {
//     if (tree.right.value < tree.value) {
//       return false;
//     } else {
//       isBST(tree.right);
//     }
//   }
//   return true;
// }

// 7. 3rd larget node

function thirdLargest(bst) {
  if (!bst) return null;
  let checked = [];
  function check(node) {
    if (node.left) check(node.left);
    checked.push(node.value);
    if (node.right) check(node.right);
  }
  check(bst);
  checked = checked.sort();
  return checked[checked.length - 3];
}

// 8. Balanced BST

function balancedTree(tree) {
  let balanced = true;
  function _height(tree) {
    if (!tree) {
      return 0;
    }
    let leftHeight = _height(tree.left);
    let rightHeight = _height(tree.right);
    let heightDiff = 0;
    if (leftHeight > rightHeight) {
      heightDiff = leftHeight - rightHeight;
    } else {
      heightDiff = rightHeight - leftHeight;
    }
    if (heightDiff > 1) {
      balanced = false;
      return;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  _height(tree);
  return balanced;
}

// 9. Are they the same BSTs?

function sameTree(arr1, arr2) {
  // arrays need to be same length, and have same root character
  if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) {
    return false;
  }
  if (arr1.length === 0 || arr2.length === 0) {
    return true;
  }
  // create variables to hold right and left tree values
  let right1 = [];
  let right2 = [];
  let left1 = [];
  let left2 = [];
  // // loop through, push the value to the correct array
  for (let i = 1; i < arr1.length; i++) {
    // compare the index to the 'root' value
    if (arr1[i] > arr1[0]) {
      right1.push(arr1[i]);
    } else {
      left1.push(arr1[i]);
    }
  }
  // repeat for array 2
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > arr2[0]) {
      right2.push(arr2[i]);
    } else {
      left2.push(arr2[i]);
    }
  }
  return sameTree(right1, right2) && sameTree(left1, left2);
}

let arr1 = [3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];
console.log(sameTree(arr1, arr2));
