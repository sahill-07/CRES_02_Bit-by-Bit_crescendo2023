import '../../config/firebase-config'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


export function firebaseLogin() {
        
    const provider = new GoogleAuthProvider();
    var currentUser = getAuth().currentUser;
    var auth = getAuth();
    if (currentUser !== null) {
        console.log(currentUser.displayName);
    } else {
        signInWithRedirect(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
                // ...
                // console.log("error code is " + errorCode);
            });
    }
}
