//Dates
let myDate = new Date()
// console.log(myDate);   //date object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2023, 0 , 20)  //in js months starts from 0
// console.log(myCreatedDate);

myCreatedDate = new Date(2024, 3, 15, 4, 7)   //yy-mm-dd
// console.log(myCreatedDate.toString());

myCreatedDate = new Date("01-14-2024")    //mm-dd-yy
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);   //milisecond

//now to compare dates is very important part in any real time project
// to compare date prefer to compare in timestamp

// console.log(myCreatedDate.getTime());  //time in miliseconds from jan

// console.log(Math.floor(Date.now()/1000));  //to convert into seconds




let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth());  //starting from 0
// console.log(newDate.getMonth() + 1);

//costomize more
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    month: 'long',
}));
