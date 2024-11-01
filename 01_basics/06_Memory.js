/*  Values are stored in the memory in 2 ways - 

Stack Memory and Heap Memory

stack memory is used in Primitive Datatype && heap memory is used in Non-Primitive

stack memory means whenevery we declare a variable, a copy of that variable is recieved

in heap memory we get a reference of the original memory/value 

*/



// stack 

let val1 = 'first var value'    //declare 1st value
let val2 = val1                // declare 2nd val and assign the 1st value
console.log(val1);           
console.log(val2);             // both have same value
console.log("------------------After value change-----------------");
val2 = "second value"         // second var value changed
console.log(val1);           // first var value is not changed because above the copy of val1 is passed to val2
console.log(val2);          // val2 value is changed



console.log("");
console.log("+++++++++++++++++++++++++++++++++++");
console.log("");


// heap
//object
let user1 = {
    email : "user1@gmail.com",
    password : 1234
}

let user2 = user1
console.log("user1 - ", user1);     // both have same value 
console.log("user2 - ", user2);

user2.email = "user2@gmail.com"     //user2 email is changed

console.log("------------------After Change--------------");

console.log("user1 - ", user1);     //only the value of user2 is changed 
console.log("user2 - ", user2);     //but the value of both the users are changed
// this is because object uses heap memory and heap memory uses reference to the original value
// when the val1 is passed in val2 then val1&val2 points to the same address and when the val2 email is changed, the oriiginal value is also changed
// because the val2 is pointing to the original value 