//Array of Objects

const products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Desktop", price: 25000 },
    { id: 3, name: "Keyboard", price: 1000 }
]

//Print names of all the products using forEach
// products.forEach(product => console.log(product.name))

//create a new array with all the products having price greater than 5000 then print the new array using filter
// const newArr = products.filter(product => product.price > 5000)
// console.log(newArr)

//create a new array by increasing the price of product id 2 by 3000 using map
// const newArr = products.map(product => {
//     if (product.id === 2){
//         return {...product,price:product.price+3000}
//     }
//     return product
// })
// console.log(newArr)

//create a new array by increasing the price of product id 2 by 3000 using map
// const newArr = products.map(product => product.id === 2 ? {...product,price:product.price+3000} : product)
// console.log(newArr)

let cart = []
//Write a function addToCart(id) to add the product into the cart using spread operator
//Example addToCart(1) should add product 1 into the cart array and then print the cart
//addToCart(1)
//addToCart(3)
function addToCart(id) {
    const product = products.find(product => product.id === id);
    if (product) {

        cart = [...cart, { ...product, quantity: 1 }];
    }
}
console.log("Product List")
console.log(products)
console.log("Adding Product 1 to the cart")
addToCart(1);
console.log("Adding Product 3 to the cart")
addToCart(3);
console.log("My Cart");
console.log(cart);
console.log("================")
const totalOrderValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
console.log("Total Order Value: " + totalOrderValue)

//print total Order Value


