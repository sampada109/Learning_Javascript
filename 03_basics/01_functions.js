//++++++++++++++++++syntax++++++++++++++++++++
function greeting(){    //function syntax
    console.log("Hello world!")
} 
// greeting      //function refrence
// greeting()   // function execution


//++++++++++++++++++++++Arguments & Parameters+++++++++++++++++++++++++
// function sum(number1, number2){   //parameters
//     console.log(number1 + number2);
// }
// sum(3, "4")  //arguments


//++++++++++++++++++++++++Storing Function In Variable++++++++++++++++++++++++++
//if we store function in a variable
// const result = sum(8,5)
// console.log("result: ", result);    //now the result variable have undefined value but we stored a function in it, this is because the function does not return any value only console log


//++++++++++++++++++++++returning the value+++++++++++++++++++++++
function sum(number1, number2){   //parameters
    return(number1 + number2);
}
const result = sum(8,5)
// console.log("result: ", result);  


//+++++++++++++++++++++++++++++
function message1(username){
    console.log(`${username} just logged-In!`);
}
// message('Alice')
// message() //when nothing is passed
function message2(username){
    if(!username){
        console.log("please enter name");
    }
    else{
        console.log(`${username} just logged-In!`);
    }
}
// message2()




//++++++++++++++++++++REST operator+++++++++++++++
//when we have a situation where we don't know how many arguments will be passed then we can use rest operator
// like a calculating shopping cart price where we have no idea how many item will be there
// rest operator look similar to spread operator the difference is in use cases
// rest operator bundles all the values/arguments that is passed in a list
function calculateCartPrice1(...num){
    return num
}
// console.log(calculateCartPrice1(200,400,500,100,3000))

function calculateCartPrice2(val1,val2,...num){    //val1=200, val2=400, rest=[500,100,3000]
    return num
}
// console.log(calculateCartPrice2(200,400,500,100,3000))



//+++++++++++++++++passing object in function++++++++++++++
const user = {
    name : "Anderson",
    order : 3
}

function handlingUser(anyobject){
    console.log(`Username is ${anyobject.name} and has ${anyobject.order} orders`);
}
handlingUser(user)


//+++++++++++++++++passing array in function++++++++++++++
const arr = [23,56,98,12]

function handlingArray(anyArr){
    console.log(anyArr[2]);
}
handlingArray(arr)