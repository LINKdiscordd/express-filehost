try {
  const filehost = require("./index.js")
  
  filehost.host("./.circleci")
  filehost.port(3000)
    
} catch(er) {
  console.error(er)
}
