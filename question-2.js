
const prompt = require("prompt-sync")({sigint : true});

let div = "\n============\n\n";

const numOne = parseInt(prompt("Input first number: "));
console.log(div);
const numTwo = parseInt(prompt("Input second number: "));
console.log(div);

let generateArr = function(a, b){
  let arr = [];

  if (a < b){
    for(let i = a; i <= b; i++){
      arr.push(i);
    };
  } else if (a > b){
    for(let i = b; i <= a; i++){
      arr.push(i);
    };
  }

  return arr;
};

console.log(generateArr(numOne, numTwo))