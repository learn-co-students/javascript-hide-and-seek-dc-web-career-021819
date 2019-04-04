function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var grandNodeId = document.querySelector('#grand-node')
  var allChildren = grandNodeId.children
  var thisOne = Array.from(allChildren)
  return allChildren[0].children[0].children[0].children[0]
}

function increaseRankBy(n){
  const getRankedList = document.querySelectorAll('.ranked-list li')
    return getRankedList.forEach(function (li) { li.innerText = parseInt(li.innerText) + 1})

  }

  // increaseRankBy(3)
