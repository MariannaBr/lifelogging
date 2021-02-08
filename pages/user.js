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
import { useSelector } from "react-redux"
import firebase from "../utils/initFirebase"

const db = firebase.firestore()
const selectDays = state => state.categories.days

function userPage() {

    const storeDays = useSelector(selectDays)
    const AuthUser = useAuthUser()

    const addDataToFirestore = async () => {
        try {
            if (AuthUser.id) {
                const userRef = db.collection('users').doc(AuthUser.id)
                const user = await userRef.get()
                if (user.exists) {
                    console.log("was updated")
                    await userRef.update({data: storeDays})
                } else {
                    console.log("was added")
                    await userRef.set({id: AuthUser.id, data: storeDays})
                }
            } 
        } catch (e) {
            console.error(e, "Error")
        }
    }

    addDataToFirestore()


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