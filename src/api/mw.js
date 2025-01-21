/* eslint-disable no-console */
import mongoose from "mongoose"

export const mw = (handle) => async (req, res) => {
  if (!mongoose.connection.readyState) {
    console.log("Connecting to the database...")

    try {
      await mongoose.connect(process.env.DB_URI)
      console.log("Database connected")

      return await handle(req, res)
    } catch (err) {
      console.error("Failed to connect to the database", err)
      throw new Error("Database connection error")
    }
  } else {
    return await handle(req, res)
  }
}