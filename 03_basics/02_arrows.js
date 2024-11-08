//this keyword
const user = {
    username : "Rystun",
    age : 12,
    greeting : function(){
        console.log(`Hi ${this.username}, welcome to git`);
        // console.log(this);
    }
}

// user.greeting()
// user.username = "Nick"
// user.greeting()
// console.log(this);

/*this is nothing but refers to the current context, 
so when we are inside the function the context is function and 'this' prints the function which is basically current context
when we tried to print 'this' outside the function it return the empty object, which means there is not current context(as we are not inside any function)

++++++++++++++++++++++++++++++++++++++++++++++++++++++

'this' works differently in browser window and node
in browser window 'console.log(this)' will be return a window object and in node it is returning empty object

*/


// ++++++++ this in function ++++++++++++
function letsee(){
    let username = "Alice"
    console.log(this.username);
}
// letsee()
//this is not working inside function, only in object



// +++++++++++++ Arrow functions ++++++++++
const arrowfun = () => {
    console.log("I'm Arrow Function");
}
// arrowfun()

const letsee2 = () => {
    username = "user2"
    console.log(this.username);      //this does not work in arrow functions as well
}
// letsee2()


const sum = (n1, n2) => {
    return n1+n2            //Explicit Return, when need to use return
}
// console.log(sum(5,8));


//++++++ Implicit Return Function +++++++++
const mul = (n1, n2) => n1*n2        //no curly brackets and return

const diff = (n1, n2) => (n1-n2)   //2nd way, only normal brackets

//******* when using curly brackets then need to write return, if not using curly brackets then no need to write return


const objFun = (name, age) => ({username : name, age : age})
console.log(objFun('Megnus', 34))