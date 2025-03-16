import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Submission {
    user: Types.ObjectId;
    score: Number;
    totalScore: Number;
    file: string;
    question: Types.ObjectId;
    feedback: string;
    createdAt: Date;
    updatedAt: Date;
}

const submissionSchema = new Schema<Submission>({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    score: { type: Number },
    totalScore: { type: Number },
    file: { type: String },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    feedback: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Submission || mongoose.model("Submission", submissionSchema);