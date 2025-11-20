const express = require("express");
const cors = require("cors");
const sendNotification = require("./sendNotification");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Notification server running");
});

// Route to send notification
app.post("/send-notification", async (req, res) => {
  const { token, title, body } = req.body;

  try {
    const response = await sendNotification(token, title, body);
    res.json({ success: true, response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
