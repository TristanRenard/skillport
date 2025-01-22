const logoutHandler = (req, res) => {
  if (req.method === "GET") {
    res.setHeader(
      "Set-Cookie",
      "token=; Secure; SameSite=None; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    )

    return res.status(200).json({ message: "Logged out successfully" })
  }

  return res.status(404).json({ message: "Not found" })
}

export default logoutHandler
