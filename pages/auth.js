import { withAuthUser, AuthAction } from "next-firebase-auth"
import FirebaseAuth from "../components/FirebaseAuth"

const Auth = () => (
    <div className="bg-gray-900 h-screen grid place-content-center">
        <div className="">
            <FirebaseAuth />
        </div>
    </div>
    
)

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth)