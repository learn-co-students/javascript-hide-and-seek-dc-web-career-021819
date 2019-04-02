function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  for (let item of document.querySelectorAll(".ranked-list li") ) {
    item.textContent = parseInt(item.textContent) + n
  }
}

function deepestChild() {
  return document.querySelectorAll("div#grand-node div")[document.querySelectorAll("div#grand-node div").length - 1]
}
