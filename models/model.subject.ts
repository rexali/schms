import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Subject {
    name: string;
    teachers: [Types.ObjectId];
    lessons: [Types.ObjectId];
    students: [Types.ObjectId];
    createdAt: Date;
    updatedAt: Date;
} 
const subjectSchema = new Schema<Subject>({
    name: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Subject || mongoose.model("Subject", subjectSchema);