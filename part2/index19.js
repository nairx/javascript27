function fetchData() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve("Data Received"), 3000)
        setTimeout(() => reject("Something went wrong"), 3000)
    })
}

async function getData() {
    try {
        console.log("Start")
        let data = await fetchData()
        console.log(data)
        console.log("End")
    }
    catch (error) {
        console.log(error)
    }
}

getData()