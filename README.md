# express-filehost
Allows you to host the content from a folder and then access it through the /files/(file) endpoint or if there is a folder inside the folder /files/(folder)/(file) it also works for a folder inside a folder inside a folder. It doesn't matter how many folders there are.

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
