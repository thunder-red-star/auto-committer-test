const fs = require(
    'fs'
)

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

(async () => {
    while (true) {
        try {
            fs.appendFileSync("not gitignored.txt", "example text")
            fs.appendFileSync("not gitignored.txt", "asdad")
            await sleep(100)
            console.log("i wrote to the file")
        }
        catch (e) {
            console.log(e)
        }
    }
})();