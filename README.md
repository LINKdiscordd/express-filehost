# express-filehost
Allows you to host the content from a folder and then access it through a **GET method** on the **/files** endpoint
**/files/(file)** or **/files/(folder)/(file)** etc.
the default is /files but can also be changed

# Usage
```javascript
const filehost = require("express-filehost") 

filehost.host("./example-folder", "examples") 
//the second argument is "files" by default which results to the endpoint being /files

//   2 folders can NOT use the same endpoint

filehost.port(3000) //use the port 3000
```

# Install
```
npm install express-filehost
```