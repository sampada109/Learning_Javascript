/* Arrays -> are the objects that store collection of elements
- js arrays are resizable and can contain mix of different data types
*** - js array copy operation creates "shallow copies"

shallow copy -> copy of an object whose properties share the same references
deep copy -> copy whose properties do not share the same references
*/


//array initialization 
const arr1 = [3,4,5,98]
const arr2 = ["Hero", "Villan"]
const arr3 = new Array(23,"hello", 98, 2, "world")


//array methods

// arr1.push(6)   // add element at the end
// console.log(arr1);
// arr1.pop()   // deletes the last element
// console.log(arr1);

// arr1.unshift(9)   //add element in the starting
// console.log(arr1);

// console.log(arr1);
// arr1.shift()    // removes the element from starting
// console.log(arr1);


// const arr4 = arr1.join()  //converts the array into string format

// console.log(typeof arr1);
// console.log(arr4);
// console.log(typeof arr4);


//+++++++++++++++++VERY IMPORTANT CONCEPT OF SLICE & SPLICE++++++++++++++++++++++++

console.log("original", arr3);

const newarr1 = arr3.slice(1,3)          //slice return the copy of selected part from original array and does not include the end index
console.log("new slice(1,3)", newarr1);

console.log("original", arr3);

const newarr2 = arr3.splice(1,3)         //splice remove the selected part from the original array and also include end index
console.log("new splice(1,3)", newarr2);

console.log("original", arr3);