import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Initialize Firebase and Firestore
const firebaseConfig = {
  apiKey: "AIzaSyD31EFQHRhw6JQ8NK_2Y_A7QxBOUrDRTX8",
  authDomain: "dummy-7fba5.firebaseapp.com",
  projectId: "dummy-7fba5",
  storageBucket: "dummy-7fba5.appspot.com",
  messagingSenderId: "1010057645913",
  appId: "1:1010057645913:web:02df7dd35342d16f918648",
  measurementId: "G-NE755KJXCB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const messaging = getMessaging(app);

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const fetchToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await getToken(messaging, { vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
