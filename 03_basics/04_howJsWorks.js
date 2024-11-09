/*
EXECUTION CONTEXT
the basic meaning of execution context is how the javascript will run or execute the file that you have created



SOME IMPORTANT TERMS TO KNOW:
- Parser : A parser or syntax parser is a program that reads your code line by line. It checks the code fits the syntax defined by the language and what the code is expected to do.

- JavaScript Engine : It is simply a computer program that recives the javascript source code and compile it to machine code(binary). JavaScript engines are typically developed by web browser vendors, and each major browser has one. Examples include the V8 engine for Google chrome, SpiderMonkey for Firefox, etc.
  -> JavaScript always needs an engine to run, whether in browser or on computer - it's just different environments with different capabilities but same core language features.

  -> Browser -  JavaScript code runs in the browser's built-in engine
                Each browser comes with its own JS engine
                The engine compiles and executes your code
                Provides access to Web APIs (DOM, fetch, etc.)

  -> Node.js (Computer) -   Uses V8 engine (same as Chrome)
                            But runs outside the browser
                            Has different APIs (file system, HTTP, etc.)
                            No browser-specific APIs like DOM



How JAVASCRIPT CODE GET EXECUTED
-To execute the javascript code it is send to JavaScript Engine to convert it in machine code.
-The Javascript Engine creates a special enviroment to handle the transformation and execution and this enviroment is called "Execution Context".
-The Execution Context contain the code that is currently running and everything envolve in its execution.
-During the Execution Context is running, the code is parsed, the variables and functions are stored in memory, executable byte code get generated, and the code get executed.

There are two kinds of Execution Context in javascript:
1- Global Execution Context (GEC)
2- Function Execution Context (FEC)


Global Execution Context (GEC)
-Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).
-*In every javascript code first of all global EC is created (kuch bhi ho sabse phle ye bhi create hota hai)
-The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.
-For every JavaScript file, there can only be one GEC.

Function Execution Context (FEC)
-Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) *within the GEC to evaluate and execute the code within that function.
-Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.
-When the function is executed, then the FEC for that function is also get deleted



HOW ARE EXECUTION CONTEXTS CREATED
The creation of execution context happens in two phases:
1 - Creation Phase / Memory Creation Phase
2 - Execution Phase

1- Creation Phase:
In the creation phase, the Execution Context is first associated with an Execution Context Object (ECO). The Execution Context Object stores a lot of important data which the code in the Execution Context uses during its run-time.
The creation phase occurs in 3 stages, during which the properties of the Execution Context Object are defined and set. These stages are:
-> global context is created and associated with this keyword
-> JavaScript allocates memory for variables and functions
-> Every Variables are initialized with undefined (means value of variables are undefined)
-> Function declarations are stored in memory completely (value of functions are not undefined, the code inside the function is stored in memory)
-> NO code execution happens yet

(-Creation of the Variable Object (VO)
        -> Creates container for variables and functions
        -> In Global Context: Creates properties for var variables (set to undefined) and stores function declarations
        -> In Function Context: Creates 'arguments' object instead of VO
-Creation of the Scope Chain
        -> Determines variable accessibility
        -> Inner functions can access outer function variables (lexical scoping)
        -> Works one-way: outer can't access inner scope
        -> Forms chain of accessible variables going up to global scope
-Setting the value of the this keyword
        -> In Global Context: this = window object
        -> In Function Context: this references calling context
        -> In Objects: this refers to the object itself)

2- Code Execution Phase:
-> Code is executed line by line
-> Values are assigned to variables
-> Functions get called
-> Every time a function is called, a new Execution Context is created
-> Each context has its own Memory and Code Execution phase
-> These contexts form a stack (Execution Stack/Call Stack)



JAVASCRIPT EXECUTION STACK
-The Execution Stack, also known as the Call Stack, keeps track of all the Execution Contexts created during the life cycle of a script.
-****JavaScript is a single-threaded language, which means that it is capable of only executing a single task at a time. Thus, when other actions, functions, and events occur, an Execution Context is created for each of these events. Due to the single-threaded nature of JavaScript, a stack of piled-up execution contexts to be executed is created, known as the Execution Stack.
-When scripts load in the browser, the Global context is created as the default context where the JS engine starts executing code and is placed at the bottom of the execution stack.
-The JS engine then searches for function calls in the code. For each function call, a new FEC is created for that function and is placed on top of the currently executing Execution Context.
-The Execution Context at the top of the Execution stack becomes the active Execution Context, and will always get executed first by the JS engine.
-As soon as the execution of all the code within the active Execution Context is done, the JS engine pops out that particular function's Execution Context of the execution stack, moves towards the next below it, and so on.



EXAMPLE:
let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)


1-> Global EC (this) and creation of scope chain
2-> Creation phase
         -> val1 : undefined
         -> val2 : undefined
         -> addnum : function(num1,num2){.......} entire defination stored in memory
         -> result1 : undefined
         -> result2 : undefined
3-> Execution Phase
         -> val1 : 10
         -> val2 : 5
         -> addnum -> Function Execution Context created and get pushed to call stack 
                                => New Variable Enviroment + Execution Thread
                                        -> Memory phase
                                                -> num1 : undefined
                                                -> num2 : undefined
                                                -> total : undefined
                                        -> Execution phase
                                                -> num1 : 10
                                                -> num2 : 5
                                                -> total : 15   
        ->now val return to gloabl context
        ->Function context popped from call stack (delete above function execution context)
        ->result1 becomes 15
        ->addnum -> Function Execution Context and get pushed to call stack
                                => New Variable Enviroment + Execution Thread
                                        -> Memory phase
                                                -> num1 : undefined
                                                -> num2 : undefined
                                                -> total : undefined
                                        -> Execution phase
                                                -> num1 : 10
                                                -> num2 : 2
                                                -> total : 12   (now val return to gloabl context)
        ->now val return to gloabl context
        ->Function context popped from call stack (delete above function execution context)
        ->result1 becomes 15


CALL STACK (LIFO)
1-Global EC (top)
1-Global EC, 2-addnum(top)
1-Global EC, 2-addnum(poped)
1-Global EC (top)
1-Global EC, 2-addnum(top)
1-Global EC, 2-addnum(poped)
1-Global EC (top)

*/