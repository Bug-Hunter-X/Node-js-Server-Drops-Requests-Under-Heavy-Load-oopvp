const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  console.log(req.url);
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// The problem is that if you make multiple requests in quick succession, the server might not respond to all of them. This is because the `res.end()` method is asynchronous, so the server might close the connection before it has finished sending the response to all of the clients.  In high load scenarios, this leads to dropped requests.
