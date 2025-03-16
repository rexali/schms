import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

type Objective = {
    id: number;
    answer: string;
    text: string;
    options: [string]
}

type Theory = {
    id: number;
    answer: string;
    text: string;
}

interface Question {
    mark: number;
    duration: string;
    class: string;
    subject: string;
    type: string; // C.A, Exams, Home Work, Assignment, Class Work 
    teacher: String;
    term: string;
    year: string;
    objectives: [Objective],
    theories: [Theory],
    createdAt: Date;
    updatedAt: Date;
    comment: string;
    user: Types.ObjectId;
    lesson: Types.ObjectId;
}

type Option = {
    A: string;
    B: string;
    C: string;
    E: string;
}

const optionSchema = new Schema<Option>({
    A: { type: String },
    B: { type: String },
    C: { type: String },
    E: { type: String },
})

const objectiveSchema = new Schema<Objective>({
    id: { type: Number },
    answer: { type: String },
    text: { type: String },
    options: { type: [String] }
})

const theorySchema = new Schema<Theory>({
    id: { type: Number },
    answer: { type: String },
    text: { type: String },
})

const questionSchema = new Schema<Question>({
    mark: { type: Number },
    duration: { type: String },
    class: { type: String },
    subject: { type: String },
    teacher: { type: String },
    term: { type: String },
    type: { type: String },
    year: { type: String },
    objectives: [objectiveSchema],
    theories: [theorySchema],
    comment: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lesson: { type: Schema.Types.ObjectId, ref: 'Lesson' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Question || mongoose.model("Question", questionSchema);