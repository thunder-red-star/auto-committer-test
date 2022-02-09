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
            fs.appendFileSync()
        }
    }
})();