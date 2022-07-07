import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}