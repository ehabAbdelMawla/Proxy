const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const targetUrl = "http://120.203.20.151:5000";
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
