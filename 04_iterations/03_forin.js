// for in

//++++++++++ objects +++++++++++
// const myobj = {
//     js : 'javascript',
//     py : 'python',
//     cpp : "C++",
//     rb : "ruby"
// }

// for (const key in myobj) {
//     console.log(key);
//     console.log(`${key} : ${myobj[key]}`);
// }


//++++++ array+++++
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
// for (const key in days) {
//     //console.log(key);    // this will print the indexes
//     console.log(days[key]);
// }


//++++++++++++ map ++++++++++++
const mymap = new Map()
mymap.set("Mon", "Monday")
mymap.set("Tues", "Tuesday")
mymap.set("Wed", "Wednesday")

// for (const key in mymap) {
//     console.log(key);       //maps are not iterable in this way
// }