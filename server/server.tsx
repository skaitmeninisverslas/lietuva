import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { ServerStyleSheet } from "styled-components";

import App from "../src/App";

const PORT = 8000;

const app = express();

const router = express.Router();

app.use("/build", express.static("build"));

app.use((req, res, next) => {
  if (/\.js|\.css|\.svg|\.png|\.jpeg|\.jpg/.test(req.path)) {
    res.redirect("/build" + req.path);
  } else {
    next();
  }
});

app.get("*", (req, res) => {
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags();

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${styles} ${body}</div>`
      )
    );
  });
});

router.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(router);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
