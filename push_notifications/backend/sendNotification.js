// sendNotification.js
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function sendNotification(token, title, body) {
  const message = {
    token,
    notification: {
      title,
      body,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent message:", response);
    return response;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error;
  }
}

module.exports = sendNotification; // ✅ Make sure this line exists
