const http = require("http");

const { app, port } = require("./core");

http
  .createServer(app)
  .listen(port, () => {
    console.log(`server listening on port ${port}`);
  });