const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
res.writeHead(200, { 'content-type': 'text/html' })
fs.createReadStream('index1.html').pipe(res)
})
server.listen(process.env.PORT || 3000)
console.log('Server running at http://127.0.0.1:3000/');