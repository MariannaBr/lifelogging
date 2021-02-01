import { setAuthCookies } from "next-firebase-auth"
import initAuth from "../../utils/initAuth"

initAuth()

const handler = async (req, res) => {
    try {
        console.log("login setCookie")
        await setAuthCookies(req, res)
        
    } catch (e) {
        console.log("login error", e)
        return res.status(500).json({ error: "unexpected error."})
    }
    return res.status(200).json({ success: true })
}
export default handler