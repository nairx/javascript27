//Hoisting
// console.log(a)
// var a = 10

// var a
// console.log(a)
// a = 10

// console.log(a)
// let a = 10

// greet()
// function greet(){
//     console.log("Hello World")
// }


//TMZ Temporal Dead Zone
greet()
const greet = () => {
    console.log("Hello World")
}