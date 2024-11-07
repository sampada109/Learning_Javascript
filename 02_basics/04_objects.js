/*
by constructor
const tinder = new Object()
++++++++++++ no difference b/w these object, only that constructor object is singleton object
by object literal
const tinder = {}
*/

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Eddie"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "regular@gmail.com",
    fullname : {
        username : {
            firstname : "Alex",
            lastname : "Brook"
        }
    }
}
// console.log(regularUser.firstname);  //can't access nested elements directly
// console.log(regularUser.fullname.username.firstname);



// merging objects
const obj1 = {1 : "ab", 2 : "cd"}
const obj2 = {3 : "ef", 4 : "gh"}

// const obj3 = {obj1, obj2}  //same problem as array, obj inside obj (nested obj)
const obj3 = {...obj1, ...obj2}   //same way like array, spread operator
// console.log(obj3);

/* const obj3 = Object.assign({}, obj1, obj2)   //another way of merging objs
                               ^ here we have passed an empty object to store the combine obj in this obj
            if we do not pass any empty object then all the values will be storedd in first obj
    const obj3 = Object.assign(obj1, obj2)
                               ^ now obj1 will have all the combined values
*/



//how to access list of objects, eg- data from database
const db = [
    {
        id : 1,
        name : "user1"
    },
    {
        id : 2,
        name : "user2"
    },
    {
        id : 1,
        name : "user3"
    },
]
// console.log(db[1].name);


//access keys of objects
// console.log(Object.keys(tinderUser));

//access values of objects
// console.log(Object.values(tinderUser));

//entries -> key value pair as array
// console.log(Object.entries(tinderUser));


//check if a particular key exist in an object
console.log(tinderUser.hasOwnProperty('email'));
