const score = 400
// console.log(typeof score);

const balance = new Number(1000)
// console.log(typeof balance);

// console.log(balance.toString());

// console.log(balance.toFixed(2));

const num2 = 123.8994
// console.log(num2.toFixed(1));        //take decimal places
// console.log(num2.toPrecision(2));    //take number from starting thats why it take only 2 numbers(123- 12) and take the other number in exponent
// console.log(num2.toPrecision(4));

const amount = 1500000
// console.log(amount.toLocaleString());           //takes as per US standarad
// console.log(amount.toLocaleString('en-IN'));    //indian standarad




//++++++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.8));

// console.log(Math.sqrt(144));

// console.log(Math.min(3,8,23));


// const ran = Math.random()
// console.log(ran);
// console.log(ran*10);
// console.log((ran*10) + 1);   //to avoid 0 value
// console.log(Math.floor(ran*10) + 1);   //to round the number to 1 digit

//random value in the specific range
const min = 5
const max = 10
const num = Math.random()
console.log(num);
console.log(num*(max-min));
console.log(num*(max - min + 1));
console.log(num*(max - min + 1) + min);
console.log(Math.floor(num*(max - min + 1) + min));
