import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Testing res msg"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
