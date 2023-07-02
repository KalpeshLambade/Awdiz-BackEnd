// function Capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

module.exports = {
  Capitalize,
  reverse,
};


function getElements(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getReverseElement(str){
  return str.split("").reverse().join("");
}


function Capitalize(arr) {
  for(let i=0; i<arr.length; i++){
    let answer = getElements(arr[i]);
    console.log(answer);
  }
}

function reverse(arr){
  for(let i=0; i<arr.length; i++){
    let answer = getReverseElement(arr[i]);
    console.log(answer);
  }
}