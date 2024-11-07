**Server** is a computer that runs continuously.
	It is used to run *web servers*.

# Using `node.js`
``` JavaScript
import http from 'http';

const server = http.createServer((req, res) => {
	res.end("Hellow from the server");
});

server.listen(8000, '127.0.0.1', () => {
	console.log("Listening to requests on port 8000...");
});
```