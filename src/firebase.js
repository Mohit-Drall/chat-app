import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA97PRidkj64bAXB-hvKzUWAbZVXFosi7A",
  authDomain: "chat-app-7100.firebaseapp.com",
  projectId: "chat-app-7100",
  storageBucket: "chat-app-7100.appspot.com",
  messagingSenderId: "427287452146",
  appId: "1:427287452146:web:b38fb37bb652c2ab15f36b"
};

export const app = initializeApp(firebaseConfig);