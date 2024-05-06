import { mw } from "@/api/mw"
import UserModel from "@/utils/database/model/userModel"
import hashPassword from "@/utils/password/hashPassword"
import * as yup from "yup"

const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match")
})
// eslint-disable-next-line consistent-return
const handler = mw(async (req, res) => {
  if (req.method === "POST") {
    const user = req.body
    const newUser = {}

    try {
      await registerSchema.validate(user)
      newUser.username = user.username
      newUser.email = user.email
      newUser.password = await hashPassword(user.password)

      const usr = new UserModel(newUser)
      await usr.save()
      res.status(201).json({ message: "User registered" })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }
}
)

export default handler