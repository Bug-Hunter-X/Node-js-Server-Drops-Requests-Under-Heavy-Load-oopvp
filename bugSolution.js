const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//using res.writeHead and res.write to ensure data is sent before closing connection
//this is a more robust solution than the original code which might fail under stress.