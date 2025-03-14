import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Profile {
    firstName: string;
    lastName: string;
    photo: string;
    phone: String;
    dateOfBirth: Date;
    streetAddress: string;
    localGovt: string;
    state: string;
    country: string;
    documents: [string];
    user: Types.ObjectId;
    classes: [Types.ObjectId];
    subjects: [Types.ObjectId];
    lessons: [Types.ObjectId];
    plans: [Types.ObjectId];
    questions: [Types.ObjectId];
    reports: [Types.ObjectId];
    createdAt: Date;
    updatedAt: Date;
}

const profileSchema = new Schema<Profile>({
    firstName: { type: String },
    lastName: { type: String },
    photo: { type: String },
    phone: { type: String },
    dateOfBirth: { type: Date },
    streetAddress: { type: String },
    localGovt: { type: String },
    state: { type: String },
    country: { type: String },
    documents: [{ type: String }],
    subjects:[{ type: Schema.Types.ObjectId, ref: "Subject" }],
    classes:[{ type: Schema.Types.ObjectId, ref: "Class" }],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
    plans: [{ type: Schema.Types.ObjectId, ref: "Plan" }],
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    reports: [{ type: Schema.Types.ObjectId, ref: "Report" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Profile || mongoose.model("Profile", profileSchema);