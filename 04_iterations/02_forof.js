// for of

// const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }

// const greet = "Hello World";
// for (const i of greet) {
//     console.log(i);
// }



//++++++++++++++ MAP +++++++++++++
// map are like objects store data in key value pair
// the difference is the map only stores unique value , no duplicate values
// it stores the data in the order it is inserted

const map = new Map();    //declaration
map.set("IN", "India")
map.set("Fr", "France")
map.set("Au", "Austratia")
map.set("IN", "India")
// console.log(map);


// loops on map
// for (const i of map) {
//     console.log(i);
//     console.log(map[i]);   //not a valid syntax
// }

// for (const [key,value] of map) {
//     console.log(`${key} : ${value}`);
// }



//+++++++ for of loops on objects ++++++++
// const myobject = {
//     'name' : 'harry',
//     'team' : 'delhi'
// }
// for (const [key,value] of myobject) {       //objects are not iterable this way
//     console.log(`${key} : ${value}`)
// }