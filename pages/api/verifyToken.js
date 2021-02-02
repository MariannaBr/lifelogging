import { verifyIdToken } from "next-firebase-auth"
import initAuth from "../../utils/initAuth"

initAuth()

const handler = async (req, res) => {
    if (!(req.headers && req.headers.authorization)) {
        return res.status(400).json({ error: "Missing Authorization header value" })
    }
    const token = req.headers.authorization
    console.log(token)

    try {
        await verifyIdToken(token)
    } catch (e) {
        console.log(e)
        return res.status(403).json({ error: "Not authorized" })
    }
    return res.status(200).json({result: "success"})
}
export default handler