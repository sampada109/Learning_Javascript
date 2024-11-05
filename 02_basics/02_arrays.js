const marvel_heros = ["hulk", "ironman", "siperman"]
const colors = ["green", "red", "blue"]

// marvel_heros.push(colors)  //this will insert the other array in the form of array only in the existing array
// console.log(marvel_heros);

// const hero_color1 = marvel_heros.concat(colors)  //this will return the combine of both in a new array, not modifying the existing one
// console.log(hero_color1);

// const hero_color2 = [...marvel_heros, ...colors]  //spread operator, in concat only 1 value can be passed and in spread more value can passed at the same time
// console.log(hero_color2);


// const crazy_arr = [1, 3, 4, [6,8,4], 7, [2, 9, [5,1,0]]]

// const correct_crazy1 = crazy_arr.flat(1)  //pass the depth
// console.log(correct_crazy1);    //flat return a new array concating all the subarrays

// const correct_crazy2 = crazy_arr.flat(2)  //pass the depth
// console.log(correct_crazy2);    //flat return a new array concating all the subarrays


// console.log(Array.isArray("helloworld"))   //checks if it is an array
// console.log(Array.from("helloworld"))   //convert into array
// console.log(Array.from({subject:"hello"}))   //return empty because in such cases we have to specify if we want the array of key or values


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
