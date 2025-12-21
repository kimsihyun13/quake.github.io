const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.static("public"));

app.get("/kmoni", async (req, res) => {
  try {
    const r = await fetch(
      "https://www.kmoni.bosai.go.jp/webservice/monitoring/latest.json"
    );
    const text = await r.text();
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Content-Type", "application/json");
    res.send(text);
  } catch (e) {
    res.status(500).json({ error: "fetch failed" });
  }
});

app.listen(3000, () => {
  console.log("✅ http://localhost:3000");
});
