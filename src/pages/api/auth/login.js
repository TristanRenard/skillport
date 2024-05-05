import { mw } from "@/api/mw"
import UserModel from "@/utils/database/model/userModel"
import generateAuthToken from "@/utils/password/generateAuthToken"
import verifyPassword from "@/utils/password/verifyPassword"


const handler = mw(async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })

    if (user) {
      const isPasswordCorrect = await verifyPassword(password, user.password)

      if (isPasswordCorrect) {
        await generateAuthToken(user, res)
      }

      res.status(401).json({ message: "Invalid credentials" })
    }

    res.status(404).json({ message: "User not found" })
  }
})

export default handler