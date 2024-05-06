import userSchema from "@/utils/database/schema/userSchema"
import mongoose from "mongoose"

const UserModel = mongoose.models.User || mongoose.model("User", userSchema)

export default UserModel