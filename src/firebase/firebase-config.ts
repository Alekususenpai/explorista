import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAkpN0NDgE0umiLgqytcBt0sxIaxnvXjxE",
  authDomain: "explorista-49496.firebaseapp.com",
  projectId: "explorista-49496",
  storageBucket: "explorista-49496.appspot.com",
  messagingSenderId: "853512018584",
  appId: "1:853512018584:web:a3d86915644cc391708eed",
  measurementId: "G-HWL4SMZJE0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics, app };