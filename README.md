
#   SA 02 W02 CODE CHALLENGE

29<sup>th</sup> March 2024

#### By *Keith Owino*


This document was created with Javascript

---

### Description

This was a code challenge comprised of 3 different tasks, the scripting of:-

* Case swapper function

* Retrieving an entire array

    ```js
        // We first collect the 2 numbers.
        const numOne = parseInt(prompt("Input first number: "));
        const numTwo = parseInt(prompt("Input second number: "));

        let generateArr = function(a, b){
            let arr = [];

            if (a < b){
                // here we use a for loop to loop through the numbers between a, b and adding them to the arr array object.
            } else if (a > b){
                // Some code here...
            }

            return arr;
        };

        console.log(generateArr(numOne, numTwo))
    ```

* Retrieving prime numbers from an array

    ```js
        //We first get the input.
        let inputArr = prompt("Input an array of numbers: ");

        // Then we check if input is a valid array object. 
        function validateInput(){
            // Some code in here...
        };

        function validPrime(arr){

            // Then we embark on operation filter prime numbers.
            let newArr = arr.filter(allPrime);

            // Some other code here...
        };
    ```

>Love this project? Buy me a coffee...
---

## Development
> Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repository

    ```
    https://github.com/keithowino/sa-02-w02-code-challenge/fork
    ```
2. Create a new branch

    ```
    git checkout -b improve-feature
    ```
3. Make the appropriate changes in the files
4. Add changes to reflect the changes made
5. Commit your changes

    ```
    git commit -am 'Improve feature'
    ```
6. Push to the branch

    ```
    git push origin improve-feature
    ```
7. Create a Pull Request 


## Setup/ Installation Requirements
- To clone this repository to your machine do this in the root directory of where you would like to save the project. Before using this be sure which url link you should use, is it for HTTP or shh.

    ```
    git clone https://github.com/keithowino/sa-02-w02-code-challenge.git
    ```

- Open the repository.

    ```
    cd sa-02-w02-code-challenge
    ```

### Installation Medium
1. Steady Network.
2. Web-link
3. Github account.

## Bug / Feature Request

- If you find a bug that gave undesired results, kindly open an issue [here](https://github.com/keithowino/sa-02-w02-code-challenge/issues/new).

---
<br>

<p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=keithowino&show_icons=true&locale=en&layout=compact" alt="Image showcasing the site author's github status on top languages used" /></p>

## Support and contact details

- Email - designsolutions1629@gmail.com 

## License
>The content of this site is licensed under the MIT license
Copyright (c) 2024.