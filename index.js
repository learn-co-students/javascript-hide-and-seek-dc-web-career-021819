//
// const test = document.querySelector('') //returns the first
//
// const test1 = document.querySelectorAll('') //returns a NodeList (***not*** an array) of matching elements
//
//
//

function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}
//
// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
