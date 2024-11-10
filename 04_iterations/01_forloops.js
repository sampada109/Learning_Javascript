// for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// for (let i = 0; i <= 5; i++) {
    
//     for (let j = 0; j <= i; j++) {
//         console.log(i, '*', j,'=',i*j);
//     }
    
// }


const users = [
    {
        name : 'Alice',
        age : 23
    },
    {
        name : 'brad',
        age : 22
    },
    {
        name : 'ellen',
        age : 24
    }
]

// for( let i =0 ; i<users.length; i++){
//     console.log(users[i]);
// }


const userDetail = {
    name : 'Jack',
    age : '34',
    email : 'jack@gmail.com',
    isLoggedIn : false,
    likes : ['football','hamburger','cats']
}
//length of object -> Object.keys(userDetail).length

const keys = Object.keys(userDetail)
for(let i=0; i<keys.length; i++){
    const key = keys[i]
    console.log(userDetail[key]);
}


//using for in
// for(let keys in userDetail){
//     console.log(keys, userDetail[keys]);
// }


//using object key - foreach
// Object.keys(userDetail).forEach(key => {
//     console.log(key, userDetail[key]);
// })


// using object entites - foreach
// Object.entries(userDetail).forEach( ([key,value]) => {
//     console.log(key, value);
// })