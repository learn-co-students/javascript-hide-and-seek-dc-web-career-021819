const getFirstSelector = function(arg) {
  return document.getElementById("app").querySelector(arg);
};

const nestedTarget = function() {
  return document.getElementById("app").querySelector("#nested .target");
};

const deepestChild = function() {
  const child = document.getElementById("grand-node").querySelectorAll("div");

  return child[child.length - 1];
};

const increaseRankBy = function(num) {
  const lists = document.getElementById("app").querySelectorAll(".ranked-list");
  for (const list of lists) {
    for (let li of list.querySelectorAll("li")) {
      li.textContent = parseInt(li.textContent) + num;
    }
  }
};
