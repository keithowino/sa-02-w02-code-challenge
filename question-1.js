
const prompt = require("prompt-sync")({sigint : true});

const inputStr = prompt("Input text: ");    // Collecting string.

let div = "\n============\n\n";

let swapCase = function(str){
  let edit = str.split("");
  let swap = edit.map(swapString);

  function swapString(value){
    let output;    // Value to be returned.

    // Cheking case
    if (value === value.toUpperCase()){
      output = value.toLowerCase();
    } else if (value === value.toLowerCase()){
      output = value.toUpperCase();
    };

    return output;
  };

  return div + swap.join("");
};

console.log(swapCase(inputStr));