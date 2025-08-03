const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const targetUrl = "ws://204.2.43.152:3000/websocket";
app.use(
  "*",
  createProxyMiddleware({
    target: targetUrl,
    ws: true,
    secure: true,
    changeOrigin: true,
  })
);
app.listen(process.env.PORT || 3000);
