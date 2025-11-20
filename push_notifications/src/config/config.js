// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD1XnsGlHhSH_AUsNWjXgmR4I5zNDY5u5Y",
  authDomain: "notificationloger-15c45.firebaseapp.com",
  projectId: "notificationloger-15c45",
  storageBucket: "notificationloger-15c45.firebasestorage.app",
  messagingSenderId: "582067655220",
  appId: "1:582067655220:web:c9cf7cfd1b11f4b577b061",
  measurementId: "G-74J80ZF4SZ"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestFcmToken() {
  try {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_VAPID_KEY"
    });
    console.log("FCM Token:", token);
    return token;
  } catch (err) {
    console.error(err);
  }
}

// Receive notifications while app is open
onMessage(messaging, (payload) => {
  console.log("Message received", payload);
});