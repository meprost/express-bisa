import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({
    message: "ini adalah rute default",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "hallo ini udah di deploy",
  });
});

app.listen(port, () => {
  console.log(`Http server is up and running on http://localhost:${port}`);
});
