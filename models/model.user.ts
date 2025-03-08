import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface User {
    email: string;
    password: string;
    verificationCode: String; //parent's verificationCode
    verificationStatus: string;
    teacher: Types.ObjectId;
    parent: Types.ObjectId;
    student: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<User>({
    email: { type: String },
    password: { type: String },
    verificationCode: { type: String },
    verificationStatus: { type: String },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    student: { type: Schema.Types.ObjectId, ref: "Student" },
    parent: { type: Schema.Types.ObjectId, ref: "Parent" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", userSchema);