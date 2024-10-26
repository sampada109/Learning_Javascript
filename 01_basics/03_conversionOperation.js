let score = 33;
console.log(typeof score);

//string
score = "33"
console.log(typeof score);

// converting string to number
let cnvt = Number(score);
console.log(typeof cnvt);

//alpha numberic
score = "33abc"
console.log(typeof score);
cnvt = Number(score);
console.log(cnvt);
console.log(typeof cnvt);

// null
score = null
console.log(typeof score);
cnvt = Number(score);
console.log(cnvt);
console.log(typeof cnvt);

//undefined
score = undefined
cnvt = Number(score);
console.log(cnvt);
console.log(typeof cnvt);



// "33" -> 33
// "33abc" -> NaN
// null -> 0
// undefined -> NaN


/* for converting data type from one to other 
we have function which is represented by Number, String, Boolean ,etc
*/