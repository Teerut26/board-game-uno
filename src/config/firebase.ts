import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDcQ_t8aUUoTH5LxQTKSLui13N4WZKsOv0",
    authDomain: "uno-board-game.firebaseapp.com",
    databaseURL:
        "https://uno-board-game-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "uno-board-game",
    storageBucket: "uno-board-game.appspot.com",
    messagingSenderId: "121497003076",
    appId: "1:121497003076:web:fb4b327784aef639728811",
    measurementId: "G-FH7C3X40K8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
