import firebase, { initFirebase } from "../utils/initFirebase"

initFirebase()
const db = firebase.firestore()

const addDataToFirestore = async (userId, userData) => {
    try {
        if (userId) {
            const userRef = db.collection('users').doc(userId)
            const user = await userRef.get()
            if (user.exists) {
                console.log("was updated")
                await userRef.update({data: userData})
            } else {
                console.log("was added")
                await userRef.set({id: userId, data: userData})
            }
        } 
    } catch (e) {
        console.error("Error in addDataToFirestore", e)
    }
}

export { addDataToFirestore } 