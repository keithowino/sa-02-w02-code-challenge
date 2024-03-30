
/*

You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

*/

const prompt = require("prompt-sync")({sigint : true});

let div = "\n============\n\n";

let inputArr = prompt("Input an array of numbers: ").slice(1, -1).split(',').map(Number);;
console.log(div);

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

// console.log(validPrime(inputArr));

if(Array.isArray(inputArr)){
  console.log(validPrime(inputArr));
}else{
  console.log("Your input was not an array");
};