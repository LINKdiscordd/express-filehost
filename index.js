const express = require("express")
const app = express()

function isString(x) {
    return typeof (x) == "string";
}

function host(path) {
    if (!path || !isString(path)) return new Error("Argument must be a string")

    const fs = require("fs")
    if (!fs.existsSync(path)) return new Error("Path doesn't exist")

    app.get("/files/*", (req, res) => {
        let fileRequested = req.url.split("/")
        fileRequested = fileRequested.filter(r => r != '')
        fileRequested.shift()
        fileRequested = fileRequested.join("/")
        if (!fileRequested) return res.status(404).send("That file doesn't exist or has been moved")
        if (!fs.existsSync("./" + path + "/" + fileRequested)) return res.status(404).send("That file doesn't exist or has been moved")
        res.sendFile(`${__dirname}/${path}/${fileRequested}`)
    })
    
    console.log("Filehost: Files and folders inside "+path+" are now accessible")
}

function port(port) {
    if (!Number(port)) return new Error("Argument must be a number")
    try {
        app.listen(port)
        console.log(`Filehost: Listening on port ${port}`)
    } catch (e) {
        return console.error(e);
    }
}

module.exports = {
    host: host,
    port: port
}
