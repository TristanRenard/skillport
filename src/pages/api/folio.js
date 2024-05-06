import { mw } from "@/api/mw"
import UserModel from "@/utils/database/model/userModel"
import verifyTokenValidity from "@/utils/password/verifyTokenValidity"

const handler = mw(async (req, res) => {
  const { token } = await req.cookies

  if (!token) {
    res.status(401).json({ message: "Unauthorized" })
  }

  const { username } = await verifyTokenValidity(token)

  if (!username) {
    res.status(401).json({ message: "Unauthorized" })
  }

  const user = await UserModel.findOne({ username })

  if (!user) {
    res.status(404).json({ message: "User not found" })
  }

  if (req.method === "GET") {
    const { editedFolio } = user

    res.status(200).json({ message: "User found", username: user.username, folio: editedFolio })
  }

  if (req.method === "POST") {
    const { folio } = await req.body
    await Object.assign(user, { editedFolio: folio })
    await user.save()
    res.status(200).json({ message: "Folio updated" })
  }

  if (req.method === "PUT") {
    user.publishedFolio = user.editedFolio
    await user.save()
    res.status(200).json({ message: "Folio updated", user })
  }

  res.status(400).json({ message: "Bad request" })
})

export default handler