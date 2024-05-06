import { Schema } from "mongoose"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: emailRegex
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  verifyToken: {
    type: String,
  },
  admin: {
    type: Boolean,
    default: false
  },
  editedFolio: {
    type: Array,
    default: []
  },
  publishedFolio: {
    type: Array,
    default: []
  }
})

export default userSchema

