/* eslint-disable no-console */
import mongoose from "mongoose"

export const mw = (handle) => async (req, res) => {
  if (!mongoose.connection.readyState) {
    console.log("Connecting to the database...")

    try {
      await mongoose.connect(process.env.DB_URI, {
        serverSelectionTimeoutMS: 5000,
        autoCreate: true,
        autoIndex: true,
      })
      console.log("Database connected successfully")
      console.log(`Connected to database: ${mongoose.connection.db.databaseName}`)

      return await handle(req, res)
    } catch (err) {
      console.error("Failed to connect to the database", err)
      throw new Error("Database connection error")
    }
  } else {
    return await handle(req, res)
  }
}