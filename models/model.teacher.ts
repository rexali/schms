import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Teacher {
    firstName: string;
    lastName: string;
    photo: string;
    email: String;
    phone: String;
    dateOfBirth: Date;
    streetAddress: string;
    localGovt: string;
    state: string;
    country: string;
    documents: [string];
    createdAt: Date;
    updatedAt: Date;
}

const teacherSchema = new Schema<Teacher>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String },
    email: { type: String },
    phone: { type: String },
    dateOfBirth: { type: Date },
    streetAddress: { type: String },
    localGovt: { type: String },
    state: { type: String },
    country: { type: String },
    documents: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);