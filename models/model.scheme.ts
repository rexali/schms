import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Scheme {
    subject: string;
    teacher: string;
    class: string;
    term: string;
    year: string;
    month: string;
    weekEnding: Date,
    teacherSignature: string;
    principalSignature: string;
    schemeOfWork: string;
    recordOfWork: string;
    prepWorkSet: string;
    refToMarkSheet: string;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
const schemeSchema = new Schema<Scheme>({
    subject: { type: String },
    teacher: { type: String },
    class: { type: String },
    term: { type: String },
    year: { type: String },
    month: { type: String },
    weekEnding: { type: Date, default: Date.now },
    teacherSignature: { type: String },
    principalSignature: { type: String },
    schemeOfWork: { type: String },
    recordOfWork: { type: String },
    prepWorkSet: { type: String },
    refToMarkSheet: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Scheme || mongoose.model("Scheme", schemeSchema); 