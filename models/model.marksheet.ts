import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface MarkSheet {
    subject: string;
    date: Date;
    teacher: string;
    term: string;
    class: string;
    year: string;
    students: [Student];
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

type Student = {
    id: number,
    name: string,
    scores: [Score]
}

type Score = {
    week: number,
    maxMark: number,
    score: number
}

const scoreSchema = new Schema<Score>({
    week: { type: Number },
    maxMark: { type: Number },
    score: { type: Number },
});

const studentSchema = new Schema<Student>({
    id: { type: Number },
    name: { type: String },
    scores: [scoreSchema]
});


const markSheetSchema = new Schema<MarkSheet>({
    subject: { type: String },
    date: { type: Date, default: Date.now },
    teacher: { type: String },
    term: { type: String },
    class: { type: String },
    year: { type: String },
    students: [studentSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.MarkSheet || mongoose.model("MarkSheet", markSheetSchema); 