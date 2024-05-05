import mongoose from "mongoose"

export const mw = (handle) => async (req, res) => {
  await mongoose.connect(process.env.DB_URI)

  await handle(req, res)
}