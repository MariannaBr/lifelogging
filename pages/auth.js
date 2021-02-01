import { withAuthUser, AuthAction } from "next-firebase-auth"
import FirebaseAuth from "../components/FirebaseAuth"

const Auth = () => (
    <div className="justify-content-center">
        <FirebaseAuth />
    </div>
)
export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth)