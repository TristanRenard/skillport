import mongoose from "mongoose"

export const mw = (handle) => async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_URI)
    await handle(req, res)
  } finally {
    await mongoose.disconnect()
  }
}