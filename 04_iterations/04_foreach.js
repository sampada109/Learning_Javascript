// for each

// +++++++++++ array +++++++++++
const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']

//days.forEach( function dayname() {}) //for each takes a function
//it takes call back function -> call back function does not have name and function takes parameters 
//but it is inside foreach so it already know the array on which we are working, so we are only passing the iterator(i) which refers to each items when iterating array
days.forEach( function (i) {
    // console.log(i);
}) 

// days.forEach( (i) => {       //another way using arrow function
//     console.log(i);
// } )


// another way by writing function and passing it in for each
// function printDays(day){
//     console.log(day);
// }
// days.forEach(printDays)


//++++++++ for each also have other parameters also+++++
days.forEach( (i, index, arr) => {
    // console.log(i, index, arr);
} )


const data = [
    {
        name : 'javascript',
        filename : 'js'
    },
    {
        name : 'java',
        filename : 'java'
    },
    {
        name : 'python',
        filename : 'py'
    },
]
data.forEach( (i) => {
    console.log(i.filename);
} )