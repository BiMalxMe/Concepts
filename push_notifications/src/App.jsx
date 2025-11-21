import { useState, useEffect } from 'react';
import { requestFcmToken } from './config/config';

function App() {
  const [data, setData] = useState(null);

  // Register SW once
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((reg) => console.log('SW registered:', reg))
        .catch((err) => console.error('SW registration failed:', err));
    }
  }, []);

  async function requesttoken() {
    const token = await requestFcmToken();
    console.log("Token in App.jsx:", token);
    setData(token);
  }

  return (
    <div>
      <h1>Push Notification App</h1>
      <button onClick={requesttoken}>Get FCM Token</button>
      <div>{data}</div>
    </div>
  );
}

export default App;
