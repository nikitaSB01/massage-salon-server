const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Заполните все обязательные поля" });
  }

  console.log(`Новая заявка: ${name}, ${phone}, ${message || "Без сообщения"}`);
  res.status(200).json({ success: true, message: "Заявка принята!" });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
