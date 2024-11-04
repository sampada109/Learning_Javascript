const name = "user"
const age = 68

// console.log(name + " age is " + age)
// console.log(name, " age is ", age)


/*modern way to writing strings is backticks
backtick allows string interpolation - means we create placeholders and inject variable in them*/
// console.log(`hello ${name} age is ${age}`);


/*string can also be declared with 'new String()', 
the difference is that it create a object of the string means key-value pair of each character with their index*/

const gameName = new String("gta_5")

// console.log(gameName);
// console.log(gameName[2]);

// console.log(name.toUpperCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)   //substring doesnt work with negative indexes
// console.log(newString);

const anotherString = gameName.slice(-4,-2)
// console.log(anotherString);


const otherString = "    user002  "
// console.log(otherString);
// console.log(otherString.trim());
// console.log(otherString.trimStart());
// console.log(otherString.trimEnd());


const url = "https://users.com/user%20one%20singh"
// console.log(url.replace('%20', '-'));
// console.log(url.replaceAll('%20', '-'));




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Key Difference b/w two ways of creating strings in JavaScript:

/* 
1- Direct string literal (let name = "user"):
- This is the simpler and recommended way
- Creates a primitive string value
- Better memory efficiency
- Has access to all String prototype methods
- Allows for string comparison using ===
*/

let name1 = "user";
let name2 = "user";

// console.log(typeof name1); // "string"
// console.log(name1 === name2); // true



/*
2- String constructor (let name = new String("user")):
- Creates a String object wrapper around the value
- Less memory efficient
- Creates a new object instance each time
- Behaves differently in comparisons
*/
let record1 = new String("user");
let record2 = new String("user");

console.log(typeof name1); // "object"
console.log(record1 === record2); // false (because they're different objects)
console.log(record1.valueOf() === record2.valueOf()); // true (comparing the actual string values)



/* +++++++++
in string constructor , the  both are not equal to each other because 
this time string acts as a object and both object have different memory refrence 
that's it is coming false unless we specify to compare the values , 
while in direct string literal it is static string which just compares a values of both variables */