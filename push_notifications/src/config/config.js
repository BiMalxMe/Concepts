import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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
    // Re-register explicitly (safe; browser dedupes)
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');

    const token = await getToken(messaging, {
      vapidKey: "BOzF6ofkgCg_D6blfgTwwUkuVPvPjL071bTB9G7ixh5lS1nMlbq0nCsxZXzu6YDhk4vAWk_9sSrsyxABBLTOXqM",
      serviceWorkerRegistration: registration,
    });

    console.log("FCM Token:", token);
    return token;

  } catch (err) {
    console.error("Token Error:", err);
  }
}

onMessage(messaging, (payload) => {
  console.log("Message received", payload);
});
