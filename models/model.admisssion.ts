import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Admission {
    firstName: string;
    lastName: string;
    photo: string;
    email: String;
    phone: String; //parent's phone
    admissionNo: String;
    dateOfBirth: Date;
    streetAddress: string;
    localGovt: string;
    state: string;
    country: string;
    documents: [string];
    createdAt: Date;
    updatedAt: Date;
    parent: Types.ObjectId;
    class: Types.ObjectId;
}

const admissionSchema = new Schema<Admission>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String },
    email: { type: String },
    phone: { type: String },
    admissionNo: { type: String },
    dateOfBirth: { type: Date },
    streetAddress: { type: String },
    localGovt: { type: String },
    state: { type: String },
    country: { type: String },
    documents: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    parent: { type: Schema.Types.ObjectId, ref: "Parent" },
    class: { type: Schema.Types.ObjectId, ref: "Class" }
});

export default mongoose.models.Admission || mongoose.model("Admission", admissionSchema);