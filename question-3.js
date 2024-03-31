
const prompt = require("prompt-sync")({sigint : true});

let div = "\n============\n\n";

let inputArr = prompt("Input an array of numbers: ");

function validateInput(){
  let output;

  if(inputArr[0] === "[" && inputArr[inputArr.length - 1] === "]"){
    output = validPrime(inputArr.slice(1, -1).split(',').map(Number));
  }else{
    output = "Your input was not an array";
  };

  return output;
};

function validPrime(arr){

  let newArr = arr.filter(allPrime);

  function allPrime(value){

    let isPrime = true;

    if(value === 1){
      isPrime = false;
    }

    for(let i = 2; i < value; i++){
      if(value % i === 0){
        isPrime = false;
      };
    };

    if(isPrime){
      return value;
    };

  };

  return newArr;
};

console.log(validateInput());