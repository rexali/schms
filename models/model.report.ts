import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";


type Subject = {
    subject: String;
    ca: Number;
    exams: Number;
    total: Number;
    position: String;
    grade: String;
    remark: String;
}

type Cognitive = {
    attention: String;
    memory: String;
    problemSolving: String;
}

type Psychomotor = {
    coordination: String;
    dexterity: String;
    reactionTime: String;
}


interface Report {
    teacher: Types.ObjectId;
    student: Types.ObjectId;
    class: Types.ObjectId;
    term: String;
    examsNumber: string;
    year: String;
    subjects: [Subject];
    coginitive: Cognitive,
    psychomotor: Psychomotor,
    teacherComment: String,
    principalComment: String
    createdAt: Date;
    updatedAt: Date;
}

const subjectSchema = new Schema<Subject>({
    subject: String,
    ca: Number,
    exams: Number,
    total: Number,
    position: String,
    grade: String,
    remark: String
});

const cognitiveSchema = new Schema<Cognitive>({
    attention: String,
    memory: String,
    problemSolving: String,
});

const psychomotorSchema = new Schema<Psychomotor>({
    coordination: String,
    dexterity: String,
    reactionTime: String,
});

const reportSchema = new Schema<Report>({
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    class: { type: Schema.Types.ObjectId, ref: 'Class' },
    term: { type: String, required: true },
    examsNumber: { type: String, required: true, unique: true },
    year: { type: String, required: true },
    subjects: [subjectSchema],
    coginitive: cognitiveSchema,
    psychomotor: psychomotorSchema,
    teacherComment: { type: String },
    principalComment: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Report || mongoose.model("Report", reportSchema);