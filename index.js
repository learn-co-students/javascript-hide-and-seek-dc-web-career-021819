function getFirstSelector(selector){
  return document.querySelector(selector)
}

const nestedTarget = function(){
  return document.querySelector("#nested .target")
}

const increaseRankBy = function(n){
  let uls = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < uls.length; i++){
    let lis = uls[i].children
    for (let j = 0; j < lis.length; j++){
      lis[j].innerHTML = parseInt(lis[j].innerHTML) + n
    }
  }
}

const deepestChild = function(){
  let grandNode = document.getElementById("grand-node")
  let currentElement = grandNode
  let children
  debugger
  while (currentElement.childElementCount > 0) {
    children = currentElement.children
    currentElement = children[0]
  }
  return currentElement
}
