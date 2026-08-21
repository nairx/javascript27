
//Rest operator
function add(...numbers){
    const result = numbers.reduce((sum,number)=>sum+number,0)
    console.log(result)
}

add(4,5,7,8,9)