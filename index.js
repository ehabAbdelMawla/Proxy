const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const http = require("http");

const app = express();

const target = "ws://204.2.43.152:3000"; 

app.use(
  "/websocket",
  createProxyMiddleware({
    target,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/websocket": "/websocket", 
    },
    secure: false,
    logLevel: "debug", 
  })
);

// Create raw HTTP server to handle WS upgrade
const server = http.createServer(app);

// Attach the WS upgrade handler
server.on("upgrade", (req, socket, head) => {
  // Forward upgrade requests to the same middleware
  app.handle(req, socket, head);
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Proxy server listening on http://localhost:${port}`);
});
