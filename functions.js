const fs = require("fs")

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data)
    } catch (err) {
        console.log(err)
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (err) {
        console.log(err)
    }
} 

module.exports = { readData, writeData }