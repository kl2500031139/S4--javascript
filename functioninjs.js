/* syntax

function function-name([argument-list]){
    body of the function

    [return expression/variable/function]
}
 calling a function
 variable = function-name([argiment-list])
*/


function greets(){
    console.log("welcome to javascript function")
}
greets();
//console.log(greets())

function add(x,y)
{
    console.log("adding of two variables:", x + y)
}
add(45,55)
add(58.36,91.23)
add('Hello','World')
add([1,2],[3,4])

function sum(x,y){
    return x + y
}
console.log(sum(45,55))
console.log(sum(58.36,91.23))
console.log(sum('Hello','World'))
console.log(sum([1,2],[3,4]))

//function Expression

let sum1 = function (a,b){
    return a + b
}

console.log(sum1(58,47))
// Arrow function 

let mul = (a,b) => { return a * b}
console.log(mul(5,6))

//passiing a function as argument to another function
// these type of function called as callback functions

function wishes(){
    console.log("wishes functions!")
}

function wish(){
    console.log('wish function!')
}

function greetings(callgreet){
    callgreet();
}
greetings(wishes)
greetings(wish)


// call back function with arguments

function add1(x,y){
    console.log("addition of two numbers:", x + y)
}
function subtract(x,y){
    console.log("subtraction of two numbers:", x - y)
}
function multiply(x,y){
    console.log("multipication of two numbers:", x * y)
}
function calculater(x,y,operation){
    operation(x,y)
}

calculater(45,55,add1)
calculater(45,55,subtract)
calculater(45,55,multiply)
