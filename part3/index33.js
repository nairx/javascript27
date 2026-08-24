//this keyword

// const employee = {
//     name: "Amit",
//     greet: function () {
//         console.log(this.name)
//     }
// }

// employee.greet()


//////////////////
const employee = {
    name: "Amit",
    greet: () =>  {
        console.log(this.name)
    }
}

employee.greet()