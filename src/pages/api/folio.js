/* eslint-disable no-console */
import { mw } from "@/api/mw"
import UserModel from "@/utils/database/model/userModel"
import verifyTokenValidity from "@/utils/password/verifyTokenValidity"

const handler = mw(async (req, res) => {
  try {
    const { token } = req.cookies

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    const { username } = await verifyTokenValidity(token)

    if (!username) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    const user = await UserModel.findOne({ username })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    switch (req.method) {
      case "GET":
        return res.status(200).json({ message: "User found", username: user.username, folio: user.editedFolio })

      case "POST":
        // eslint-disable-next-line no-case-declarations
        const { folio } = req.body
        user.editedFolio = folio
        await user.save()


        return res.status(200).json({ message: "Folio updated" })

      case "PUT":
        user.publishedFolio = user.editedFolio
        await user.save()


        return res.status(200).json({ message: "Folio published", user })

      default:
        return res.status(400).json({ message: "Bad request" })
    }
  } catch (err) {
    console.error("Error handling request", err)


    return res.status(500).json({ message: "Internal server error" })
  }
})

export default handler
