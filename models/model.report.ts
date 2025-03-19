import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";


type Subject = {
    id:Number;
    subject: String;
    testScore: Number;
    examScore: Number;
    totalScore: Number;
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
    studentName: String;
    class: String;
    user: Types.ObjectId;
    term: String;
    examinationNumber: string;
    admissionNumber: string;
    year: String;
    subjects: [Subject];
    cognitive: Cognitive,
    psychomotor: Psychomotor,
    teacherComments: String,
    classTeacher: String,
    principal: String,
    principalComments: String
    createdAt: Date;
    updatedAt: Date;
}

const subjectSchema = new Schema<Subject>({
    subject: String,
    testScore: Number,
    examScore: Number,
    totalScore: Number,
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
    studentName: { type: String },
    class: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    term: { type: String },
    examinationNumber: { type: String },
    admissionNumber: { type: String },
    year: { type: String },
    subjects: [subjectSchema],
    cognitive: cognitiveSchema,
    psychomotor: psychomotorSchema,
    teacherComments: { type: String },
    principalComments: { type: String },
    classTeacher: { type: String },
    principal: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Report || mongoose.model("Report", reportSchema);