// +++++++++++++ MAP Function ++++++++++

const myNumbers = [1,2,3,4,5,6]
const newNum = myNumbers.map( (num) => num + 10 )
// console.log(newNum);


// ++++++++ Chaining ++++++++++
const newNum2 = myNumbers
                .map( (num) => num*10 )   //1st map -> *10, now this array will go to 2nd map function
                .map( (num) => num + 1 )  //2nd map ->  +1
                .filter( (num) => num > 50 )     //3rd filter , now after there is no chaining now it will be stored in newNum2
console.log(newNum2);
