#! /usr/bin/env node

 import inquirer from "inquirer";

 console.log("\n\tMy_Array_Assignment\n");
//Question.no:01
//             Create an array named fruits that contains the following string elements:
//             ("Apple" , "Banana" , "Mango" , "Orange").

var fruits = ["Apple" , "Banana" , "Mango" , "Orange"];
console.log("fruits",fruits);

//Question.no:02
//            Declare an array named numbers that can contain only number  elements and initialize it with the values: 
//            (10, 20, 30 and 40).
var numbers:number[] = [10 , 20 , 30 , 40];
console.log("number",numbers);

//Question.no:03
//              Access the third element of the fruits array and assign it to a variable named thirdFruit.

var  thirdFruit = fruits[3];
console.log("thirdFruit", thirdFruit);

//Question.no:04
//              channge the second element of the numbers array and assign it to a variables named thirdFruit.

numbers[1]=  25;
console.log("change second element of the number array:", numbers);

//Question.no:05
//              Add the element  "grapes" to the end of the fruits array using the method.

fruits.push("grape");
console.log("Add element end of array",fruits);

//Question.no:06
//             Remove the last element from the fruits array using the method and assign it to a variable 
//              named lastFruit.         

fruits.pop();
console.log("Remove last element of the array ",fruits);

//Question.no:07
//              Remove the first element from the fruits array using the method and assign it to a variable
//              named firstFruit.

var firstFruits= fruits.shift();
console.log("remove first element of array",firstFruits);

//Question.no:08
//              Add the element"kiwi" to the beginning of the fruits array using the method.

fruits.unshift("kiwi");
console.log("Add element beginning of array",fruits);

//Question.no:09
//             Remove 2 elements from the fruits array starting from index 1 using the method.
    
fruits.splice(1, 2);
console.log("removing elements starting of index1:", fruits);

//Question.no:10
//             Insert the elements"pineapple" and "pear" at index 2 of the fruits array  using the method.

fruits.splice(2, 0, "pineapple", "pear");
console.log("inserting Element at index2:", fruits);

//Question.no:11
//             Create a new array named citrusFruits that  contain the first two elements of the fruits 
//             array using the method.

var citrusFruits = fruits.slice(0,2);
console.log ("first two elements:", citrusFruits);

//Question.no:12
//             Create a new array named lastTwoFruits that contains the last two elements 
//             of the fruits array using the method.

const lastTwoFruits = fruits.slice(-2);
console.log("last two element :", lastTwoFruits);

console.log("\n\tThe End\n");




