// for Each loop does not return anything back
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
// const returnedDays = days.forEach( (i) => {
//     return i
// } )
//console.log(returnedDays);   //undefined 



//++++++++++++ filter ++++++++++
const numbers = [1,2,3,4,5,6]
const newNumbers = numbers.filter( (nums) => nums > 4 )
// console.log(newNumbers);



// example
const books = [
    {
        title:"Book One", genre:'Histroy', publish:2003
    },
    {
        title:"Book Two", genre:'Science', publish:2013
    },
    {
        title:"Book Three", genre:'Fiction', publish:2008
    },
    {
        title:"Book Four", genre:'Histroy', publish:2014
    },
    {
        title:"Book Five", genre:'Non-Friction', publish:2005
    },
]

let userBook = books.filter( (book) => book.genre === 'Histroy' )
userBook = books.filter( (book) => {
    return book.publish >= 2006 && book.genre === 'Histroy'
})
console.log(userBook);
