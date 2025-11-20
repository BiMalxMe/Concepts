const { GoogleAuth } = require("google-auth-library");
const axios = require("axios");
const serviceAccount = require("./service-account.json");

async function sendNotification(target, title, body) {
  const auth = new GoogleAuth({
    credentials: serviceAccount,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  const projectId = serviceAccount.project_id;   // FIXED

  const url = `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`;

  const message = {
    message: {
      token: target,  
      notification: {
        title: title,
        body: body,
      },
    },
  };

  try {
    const response = await axios.post(url, message, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.token}`,
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.log(error.response?.data);
    return { success: false, error: error.response?.data };
  }
}

module.exports = sendNotification;
