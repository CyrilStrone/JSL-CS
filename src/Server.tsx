import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Html } from "./Html/Server";
import { BrowserRouter } from "react-router-dom";
import App from "App";

const port = 3000;
const server = express();
const jsFiles: Array<string> = [];

fs.readdirSync("./dist/assets").forEach((file) => {
  if (file.split(".").pop() === "js") jsFiles.push("/assets/" + file);
});

server.use("/assets", express.static("./dist/assets"));

server.get("*", async (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <Html scripts={jsFiles}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Html>
  ).pipe(res);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
