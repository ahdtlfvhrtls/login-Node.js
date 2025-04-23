import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("."));
app.get("/login", (req, res) => {
  fs.readFile("login.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("읽기 오류");
    }
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(data);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("서버 실행 중");
});
