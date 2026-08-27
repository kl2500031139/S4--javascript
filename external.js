function data(){
let x = parseInt(prompt("enter the number:"))
let y = parseInt(prompt("enter the number:"))

let result = ''
let c = x + y
result += 'add of two numbers is:  ' +c

document.getElementById('data').innerText = result
}