importScripts("https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.1/firebase-messaging-compat.js");


firebase.initializeApp({
 apiKey: "AIzaSyD1XnsGlHhSH_AUsNWjXgmR4I5zNDY5u5Y",
  authDomain: "notificationloger-15c45.firebaseapp.com",
  projectId: "notificationloger-15c45",
  messagingSenderId: "582067655220",
  appId: "1:582067655220:web:c9cf7cfd1b11f4b577b061",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});