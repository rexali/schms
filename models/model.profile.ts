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
    createdAt: Date;
    updatedAt: Date;
}

const profileSchema = new Schema<Profile>({
    firstName: { type: String},
    lastName: { type: String },
    photo: { type: String },
    phone: { type: String },
    dateOfBirth: { type: Date },
    streetAddress: { type: String },
    localGovt: { type: String },
    state: { type: String },
    country: { type: String },
    documents: { type: [String] },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Profile || mongoose.model("Profile", profileSchema);