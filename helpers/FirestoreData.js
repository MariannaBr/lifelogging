import firebase, { initFirebase } from "../utils/initFirebase"

initFirebase()
const db = firebase.firestore()

const addDataToFirestore = async (userId, userData) => {

    try {
        if (userId) {
            const userRef = db.collection('users').doc(userId)
            const user = await userRef.get()
            if (user.exists && Object.keys(userData).length > 0) {
                await userRef.update({data: userData})
                console.log("user was updated")
            } else if (!user.exists)  {
                await userRef.set({id: userId, data: userData})
                console.log("user was added")
            }
        } 
    } catch (e) {
        console.error("Error in addDataToFirestore", e)
    }
}

export { addDataToFirestore }