import { init } from "next-firebase-auth"

const initAuth = () => {
    init({
        debug: false,
        authPageURL: '/auth',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        firebaseAdminInitConfig: {
            credential: {
              projectId: 'lifelogging-20c8a',
              clientEmail: 'firebase-adminsdk-c72lu@lifelogging-20c8a.iam.gserviceaccount.com',
              // The private key must not be accesssible on the client side.
              privateKey: process.env.FIREBASE_PRIVATE_KEY,
            },
            databaseURL: "https://lifelogging-20c8a-default-rtdb.europe-west1.firebasedatabase.app",
        },
        firebaseClientInitConfig: {
            apiKey: 'AIzaSyD61dFVqFCDh029N8Rr_PQjhJg5xAFOcRk', // required
            authDomain: 'lifelogging-20c8a.firebaseapp.com',
            databaseURL: 'https://lifelogging-20c8a.firebaseio.com',
            projectId: 'lifelogging-20c8a',
        },
        cookies: {
            name: 'lifelogging', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
              process.env.COOKIE_SECRET_CURRENT,
              process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
          },
    })
}

export default initAuth

