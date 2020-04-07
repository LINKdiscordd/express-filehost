try {
  const filehost = require("./index.js")
  
  filehost.host("./.circleci")
  filehost.port(3000)
  process.exit()
} catch(er) {
  console.error(er)
}
