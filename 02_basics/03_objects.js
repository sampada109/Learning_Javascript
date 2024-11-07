//objects has two ways to declare them
// by constructor -> object.create()  (a singleton object is create means that it is the single object of its type)

//by object literal (singleton is not created when declared through literal)
const user1 = {
    name : "userOne",
    email : 'userOne@gmail.com',
    age : 23,
    isLoggedIn : false,
    lastLogged : ['Monday', 'Saturday']
}

//access object values
// console.log(user1.name);
// console.log(user1['name']);


// using a symbol in an object as 'key'
const mySymbl = Symbol("secretkey1")

const user2 = {
    name : "userTwo",
    email : 'userTwo@gmail.com',
    [mySymbl] : "mysecretkey1",
    age : 25,
    isLoggedIn : false,
    lastLogged : ['Tuesday', 'Sunday']
}

// console.log(user2[mySymbl]);
// console.log(user2);

// changing / updating values of an object
user1['email'] = "userOne@yahoo.com"
// console.log(user1['email']);
// console.log(user1);


// freeze -> method/function that restrict any changes in the values of object
Object.freeze(user2)
user2['email'] = "userTwo@yahoo.com"
// console.log(user2['email']);


//adding functions in an object
user1.greeting = function(){
    console.log("Hello user!")
}
// console.log(user1);
console.log(user1.greeting);    //function is not called, only reference is called
console.log(user1.greeting());

// accessing own object value using 'this'
user1.greetingTwo = function(){
    console.log(`Hello user!, ${this.name}`)
}
console.log(user1.greetingTwo());