import { SignJWT } from "jose"

const generateAuthToken = async ({ email, username, admin }, res) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  // eslint-disable-next-line new-cap
  const token = await new SignJWT({
    email,
    username,
    admin
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret)

  res.setHeader("Set-Cookie", `token=${token}; Secure; SameSite=None; Path=/; Max-Age=7200; email=${email}; Secure; SameSite=None; Path=/; Max-Age=7200`)
  res.status(200).json({ message: "Logged in successfully" })
}

export default generateAuthToken