//Optional Chaining

// const user = null;
// user.name && console.log("Hello " + user.name)

// const user = null;
// user?.name && console.log("Hello " + user.name)

const user = {name:"John"};
user?.name && console.log("Hello " + user.name)