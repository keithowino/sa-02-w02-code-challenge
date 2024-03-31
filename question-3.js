
const prompt = require("prompt-sync")({sigint : true});

let div = "\n============\n\n";

let inputArr = prompt("Input an array of numbers: ");    // Here we ask the user to input an array of numbers.

// After input submission we evaluate to determine whether it is valid to be processed as an array.
function validateInput(){
  let output;

  if(inputArr[0] === "[" && inputArr[inputArr.length - 1] === "]"){
    // Our input is valid, now we have the array we need.
    output = validPrime(inputArr.slice(1, -1).split(',').map(Number));
  }else{
    output = "Your input was not an array";    // If input was not an array we throw an error message.
  };

  return output;
};

function validPrime(arr){

  /*
  The validated array is passed through an array filter iteration method. Goal is to filter out prime numbers.
  */
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