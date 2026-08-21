const numbers = [20, 45, 23, 90]
// console.log(numbers.length)
// console.log(numbers[0])

// numbers.forEach(number => console.log(number))

// numbers.map(number => console.log(number))

// const newArr = numbers.map(number => number*2)
// console.log(newArr)

// const newArr = numbers.filter(number => number%2===0)
// console.log(newArr)

// const result = numbers.find(number => number%2===0)
// console.log(result)

const total = numbers.reduce((sum, number) => sum + number, 0)
console.log(total)