const ip = require("ip");

const http = require("http");

const { app, port } = require("./core");

const { connectLocalMongoDB } = require("./database/configs");

http
  .createServer(app)
  .listen(port, () => {
    connectLocalMongoDB();
    console.log(`server listening on port ${port}`);
  });