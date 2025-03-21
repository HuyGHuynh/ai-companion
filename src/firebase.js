import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDAy3jaDm6PjbLiw5A95D97lCgAqR-SP-A",
    authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app