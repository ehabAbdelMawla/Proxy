const httpProxy = require("http-proxy");

httpProxy
  .createServer({
    target: "ws://204.2.43.152:3000/websocket",
    ws: true,
  })
  .listen(5555)
  .on("error", (e) => {
    console.log(e);
  });

console.log("Proxy server is running on port 5555");
