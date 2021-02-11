import Header from "../components/Header"
import User from "../components/User"
import Category from "../components/Category"
import inputs from "../public/inputs"
import Statistics from "../components/Statistics"
import DaySum from "../components/DaySum"
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
    AuthAction,
  } from 'next-firebase-auth'
import firebase from "../utils/initFirebase"
import { setState } from "../redux/actions"
import { useDispatch } from "react-redux"

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
        <div className="bg-gray-900 relative h-full">
            <Header email={AuthUser.email} signOut={AuthUser.signOut} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-900">
            <User name={AuthUser.email}/>
            <div className="flex justify-between flex-wrap flex-grow">
                {inputs.categories.map(cat => <Category key={cat.id} id={cat.id} name={cat.name} bg={cat.color} cells={cat.cells}/>)}
            </div>
            <DaySum />
             <Statistics  />  {/*userData={userData} */}
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