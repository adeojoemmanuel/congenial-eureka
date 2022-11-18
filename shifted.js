let max = -Infinity
const initialList = [1, 3, 7, 8, 9, 10, 11];  
const shiftedList = [8, 9, 10, 11, 1, 3, 7];


const shiftIndex = initialList.indexOf(initialList[initialList.length - 1]) - shiftedList.indexOf(initialList[initialList.length - 1]);

if(shiftIndex === 0) {
    max =  shiftedList[-1];
} 

max = shiftedList[shiftedList.length-1-shiftIndex];

console.log(max);



/*
1) Can you identify any edge cases that we need to account for?
 when the shift index is 0 
 when numbers are repeated

2) Can you explain the orders of growth implications of the algorithm you implemented?

Big O(1)

constant time

3) Suppose our initial list contains 1 million elements, is there a more performant way we can find the answer?
using this meth

using this approach, we have would have the best perfomace 
what might complicate this is having to get shift index while searching through the list

*/

