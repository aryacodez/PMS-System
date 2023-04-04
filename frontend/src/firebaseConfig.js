import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfcUksJHNwKJnSSdL5g3VseIRpu6Lfe6U",
  authDomain: "pms-system-5f86e.firebaseapp.com",
  projectId: "pms-system-5f86e",
  storageBucket: "pms-system-5f86e.appspot.com",
  messagingSenderId: "880371752616",
  appId: "1:880371752616:web:e94f9c17dc780d9ce46c9d"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);