import { initializeApp } from 'firebase/app'; // Import specific member initializeApp
import { getStorage } from 'firebase/storage'; // Import specific member getStorage
const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId
} = process.env;
const firebaseConfig = {
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp, 'gs://progess-e18eb.appspot.com');
