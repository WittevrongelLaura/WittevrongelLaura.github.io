import { Injectable } from '@nestjs/common'
import { App, applicationDefault, initializeApp } from 'firebase-admin/app'
import { Auth } from 'firebase-admin/lib/auth/auth'
import { getAuth } from 'firebase-admin/auth'

@Injectable()
export class FirebaseService {
  private app: App

  constructor() {
    this.app = initializeApp({
      credential: applicationDefault(), // not always the case
    })

    
    if (!(this.app.options.credential as any).projectId)
      throw new Error(
        '\n\n⛔️ Firebase app not initialized.\nYou probably forgot to set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable.\n',
      )
  
  }
  // eigen                    firebase getauth
  getAuth = (): Auth => getAuth()
}
