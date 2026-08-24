// const url = "https://jsonplaceholder.typicode.com/users"

const url = "http://localhost:8081/api/products"

const showUsers = async () => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        // const str = JSON.stringify(json)
        // console.log(str)
    }
    catch (error) {
        console.log(error)
    }
}

showUsers()
