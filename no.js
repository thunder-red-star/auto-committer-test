const fs = require(
    'fs'
)

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

(async () => {
    while (true) {
        try {
            fs.appendFileSync("not gitignored.txt", "acplaygames and the potato powers are the best\n")
            fs.appendFileSync("not gitignored.txt", "written by copilot github")
            await sleep(100)
            console.log("i wrote to the file")
        }
        catch (e) {
            console.log(e)
        }
    }
})();