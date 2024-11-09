/*  iife -> Immediately Invoked Function Expression
to execute function immediately after writing it
many time global scope variables can pollute the functioning of a function
OR kayi baar global scope ke pollution se problem hoti hai, uss pollution se bachne ke liye iife ka use krte hai

function ko parenthesis () me wrap kr diya(inside function is written/act as function block) and uske agye ek or parenthesis() lga diya which indicate its execution
*/


//syntax - ()();
(function immeConnection(){     //named iife
    console.log("DB Connected");
})();  //semicolon is very important as it indicate end of this context, if semicolon is not put there then next code will not be able to execute


//iife in arrow function syntax
( () => {      // simple iife or unnamed iife
    console.log("Arrow Function");
} )();


//passing values
( (name)=>{
    console.log(`hey ${name}, Welcome!`); 
} )("Harry");


//writing two iifes in a single file -> above code just remember to put semicolon to execute both