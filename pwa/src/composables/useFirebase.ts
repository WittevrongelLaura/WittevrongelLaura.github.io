import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import {
  Auth,
  browserLocalPersistence,
  connectAuthEmulator,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export default () => {
  const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.appId,
  }

  const app: FirebaseApp = initializeApp(firebaseConfig)

  const auth: Auth = getAuth()
setPersistence(auth, browserLocalPersistence)
;(async () => {
  try{
    // @ts-ignore
    if (window.Cypress)
    // @ts-ignore
      connectAuthEmulator(auth, Cypress.env('FIREBASE_EMULATOR_URL'))

  } catch (e){
    console.log(e)
  }
})()

  return {
    app,
    auth,
  }
}
