/*   In js data types are basically divided into 2 categories -> Primitive and Non Primitive

The difference is based on -> CallbyValue and CallbyRefrence

means how the data is stored in the memory and accessed

*/


/* Primitive Data Types - 7 types

Primitive are the 'Call by Value' -> means when these are copied or any operations are done 
then a copy of these variables are provided, the actual variable/ memory address is not provided

String, Number, Boolean, Null, Undefined, Symbol, BitInt

*/

// symbol are used to make the unique values, here the in both variables are same but by using symbol they are different
const id = Symbol('123')
const otherID = Symbol('123')
console.log(id === otherID);



/* Non-Primitive Data Types

These are Reference types -> means the reference of memory allocation is provided of these data types

Array, Objects(key-value pairs), Functions

*/


// Javascript is Dynamically typed Language as we don't need to provide the type of the variable when defining


const myArr = ['hero', 'villan']
console.log(typeof myArr);
