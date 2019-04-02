const getFirstSelector = function(selector){
  return document.querySelector(selector);
}

const nestedTarget = function(){
  return document.querySelector('#nested .target')
}

// function increaseRankBy(n){
//   // document.querySelectorAll('.ranked-list li').forEach(x => x.textContent = parseInt(x.textContent) + n);
//   for (let x of document.querySelectorAll('.ranked-list li')){x.textContent = parseInt(x.textContent) + n};
// }

const increaseRankBy = function(n){
  for (let x of document.querySelectorAll('.ranked-list li')){x.textContent = parseInt(x.textContent) + n};
}

const deepestChild = function(){
  let a = document.querySelector('#grand-node').querySelectorAll('div')
  return a[a.length - 1]
}
