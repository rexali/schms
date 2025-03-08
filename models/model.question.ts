import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

type Objective = {
    id: number;
    answer: string;
    text: string;
    options: Array<String>
}

type Theory = {
    id: number;
    answer: string;
    text: string;
}

interface Question {
    class: string;
    subject: string;
    teacher: Types.ObjectId;
    term: string;
    year: string;
    objectives: [Objective],
    theories: [Theory],
    createdAt: Date;
    updatedAt: Date;
    comment:string;
    parent: Types.ObjectId;
}

const objectiveSchema = new Schema<Objective>({
    id: { type: Number, required: true, unique: true },
    answer: { type: String },
    text: { type: String },
    options: { type: [String] }
})

const theorySchema = new Schema<Theory>({
    id: { type: Number, required: true, unique: true },
    answer: { type: String },
    text: { type: String },
})

const questionSchema = new Schema<Question>({
    class: { type: String, required: true },
    subject: { type: String, required: true, unique: true},
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    term: { type: String, required: true },
    year: { type: String, required: true },
    objectives: [objectiveSchema],
    theories: [theorySchema],
    comment:{ type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Question || mongoose.model("Question", questionSchema);