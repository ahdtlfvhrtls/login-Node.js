import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(express.static("."));
app.use(cors());
app.get("/login", (req, res) => {
  fs.readFile("login.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("읽기 오류");
    }
    res.status(200, { "Content-Type": "text/html" });
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
