const fs = require(
    'fs'
)

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

(async () => {
    while (true) {
        try {
            fs.appendFileSync("log.txt", "Hello World\t" + new Date().toISOString() + "\n")
            await sleep(1000)
        }
        catch (e) {
            console.log(e)
        }
    }
})();