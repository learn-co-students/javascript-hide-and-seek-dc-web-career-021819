
function getFirstSelector(selector){
  // returns the first element that matches the selector
  return document.querySelector(selector)
}

function nestedTarget(){
  // pulls a .target out of #nested
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  // returns the most deeply nested child in #grand-node
  const lis = document.getElementById('grand-node').querySelectorAll('div');
  return lis[lis.length - 1];
}

function increaseRankBy(n){
  // increases ranks in .ranked-list by n
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (n + parseInt(lis[i].innerHTML)).toString();
  }
  return lis;
}
