const treeViewer = document.getElementById("binary-trees");

// creating a dom element to show display a binary tree visually

const binaryTreeViewer = (tree) => {
  const wrapper = createWrapper();
  if (tree === null) {
    wrapper.appendChild(createArticle(null));
    return wrapper;
  }
  const { left, right, val } = tree;
  const section = createSection();
  section.appendChild(binaryTreeViewer(left));
  section.appendChild(binaryTreeViewer(right));
  wrapper.appendChild(createArticle(val));
  wrapper.appendChild(section);
  return wrapper;
};

const createWrapper = () => {
  const wrapper = document.createElement("article");
  wrapper.className = "grid g-1 c-grey-950 sp-5 grey-500 gj-center";
  return wrapper;
};

const createSection = () => {
  const element = document.createElement("section");
  element.className = "flex g-1 j-center a-start";
  return element;
};

const createArticle = (content) => {
  const article = document.createElement("article");
  article.className = "pi-1 spbl-1";
  if (content !== null) {
    article.className = "p-1 white";
    article.innerHTML = content;
  }
  return article;
};

// convert and array into a binary tree
const arrayToBinaryTree = (arr) => {
  const { length } = arr;
  const table = Array(length)
    .fill(null)
    .map((_, index) =>
      ![null, undefined].includes(arr[index])
        ? { val: arr[index], left: null, right: null }
        : null
    );
  let lastVisited = 0;
  for (let index = 0; index < length; index++) {
    const element = table[index];
    if (element !== null) {
      let toRight = false,
        i = 0;
      while (i < 2 && lastVisited < length) {
        const toAdd = table[++lastVisited];
        if (toAdd) element[toRight ? "right" : "left"] = toAdd;
        toRight = true;
        i++;
      }
    }
  }
  const [tree] = table;
  return tree;
};

const zigZagTraversal = (root) => {
  // code here
  if (!root) return [];
  const arr = [{ root, rightToLeft: true }];
  const results = [];
  while (arr.length > 0) {
    const {
      root: { val, left, right },
      rightToLeft,
    } = arr.shift();
    const first = rightToLeft ? right : left;
    const second = rightToLeft ? left : right;
    if (first) arr.push({ root: first, rightToLeft: !rightToLeft });
    if (second) arr.push({ root: second, rightToLeft: !rightToLeft });
    results.push(val);
  }
  return results;
};

[
  ["A", "B", "C", "D", "E", , "F"],
  [7, 9, 7, 8, 8, 6, , 10, 9],
  [1, 2, 3, 4, 5, 6, 7],
  [-1, -6, -5, -3, 0, null, -13, , , -1, , , -2, 23],
].forEach((arr) => {
  const tree = arrayToBinaryTree(arr);
  treeViewer?.appendChild(binaryTreeViewer(tree));
  console.log(zigZagTraversal(tree));
});
