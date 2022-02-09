const fs = require(
    'fs'
)

const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

(async () => {
    while (true) {
        try {
            fs.appendFileSync("log.txt", "Hello World\t" + new Date().toISOString() + "\n")
            sleep(1000)
        }
        catch (e) {
            console.log(e)
        }
    }
})();