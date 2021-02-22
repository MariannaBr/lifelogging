import Header from "../components/Header"
import User from "../components/User"
import Category from "../components/Category"
import inputs from "../public/inputs"
import DaySum from "../components/DaySum"
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
    AuthAction,
  } from 'next-firebase-auth'
import firebase, { initFirebase } from "../utils/initFirebase"
import { setState } from "../redux/actions"
import { useDispatch } from "react-redux"
import Link from "next/link"

initFirebase()
const db = firebase.firestore()

function userPage() {

    const AuthUser = useAuthUser()
    const dispatch = useDispatch()

    const fetchDataFromFirestore = async (userId) => {
        try {
            if (userId) {
                const userRef = db.collection('users').doc(userId)
                const user = await userRef.get()
                if (user.exists) {
                    console.log("user found")
                    let userData = user.data().data
                    dispatch(setState(userData))
                }
            }
        } catch (e) {
            console.log("Error in fetchDataFromFirestore", e)
        }        
    }
    fetchDataFromFirestore(AuthUser.id)
    
    return (
        <div className="bg-gray-900 h-full min-h-screen">
            <Header email={AuthUser.email} signOut={AuthUser.signOut} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-900 h-full">
                <User name={AuthUser.email}/>
                <div className="grid grid-cols-3 gap-y-6 gap-x-3 sm:gap-x-8 lg:flex lg:justify-between lg:flex-wrap lg:flex-grow">
                    {inputs.categories.map(cat => <Category key={cat.id} id={cat.id} name={cat.name} bg={cat.color} cells={cat.cells}/>)}
                </div>
                <DaySum />
                <Link href="/userStatistics">
                    <button type="button" className="gradient-background text-3xl font-extrabold px-8 py-5 justify-center rounded-lg mt-20 mb-40">
                        Statistics
                    </button>
                </Link>
            </div>
        </div>
    )
}

// export const getServerSideProps = withAuthUserTokenSSR({
//     whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
// })(async ({ AuthUser, req }) => {
//     const token = await AuthUser.getIdToken()
//     const endpoint = getAbsoluteURL("/api/verifyToken", req)
//     const response = await fetch(endpoint, {
//         method: "GET",
//         headers: {
//             Authorization: token || "unauthenticated"
//         }
//     })
//     const data = await response.json()
//     if (!response.ok) {
//         throw new Error(
//             `Data fetching failed with status ${response.status}: ${JSON.stringify(data)}`
//         )
//     }
//     return {data}
// })
export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(userPage)