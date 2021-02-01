import { init } from "next-firebase-auth"
//import * as admin from "firebase-admin"

// var firebaseui = require('firebaseui')

// var ui = new firebaseui.auth.AuthUI(firebase.auth())

// var uiConfig = {
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         // User successfully signed in.
//         // Return type determines whether we continue the redirect automatically
//         // or whether we leave that to developer to handle.
//         return true;
//       },
//       uiShown: function() {
//         // The widget is rendered.
//         // Hide the loader.
//         document.getElementById('loader').style.display = 'none'
//       }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
//   };

// ui.start('#firebaseui-auth-container', uiConfig)

// export default ui

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
              clientEmail: 'lifelogging-20c8a@appspot.gserviceaccount.com',
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
            secure: false, // set this to false in local (non-HTTPS) development
            signed: false,
          },
    })
}

export default initAuth

