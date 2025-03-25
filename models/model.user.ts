import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface User {
    email: string;
    password: string;
    role: string;
    rememberMe: string;
    verificationCode: string; //parent's verificationCode
    verificationStatus: string;
    profile: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<User>({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    rememberMe: { type: String },
    verificationCode: { type: String },
    verificationStatus: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: "Profile"},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

