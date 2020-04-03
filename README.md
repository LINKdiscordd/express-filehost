# express-filehost
Allows you to host the content from a folder and then access it through a **GET method** on the **/files** endpoint
**/files/(file)** or **/files/(folder)/(file)** etc.

# Usage
```javascript
const filehost = require("express-filehost")

filehost.host("./example") //The folder you want to use (Only 1 folder)
filehost.port(3000) //The port you want to use
```

# Install
```
npm install express-filehost
```
