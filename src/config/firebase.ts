import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG!);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };