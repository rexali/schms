import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Plan {
    teacher: Types.ObjectId;
    Week: string;
    duration: string;
    subject: string;
    topic: string;
    class: Types.ObjectId;
    objectives: string;
    materials: Date;
    previousKnowledge: string;
    introduction: string;
    presentation: string;
    evaluation: Types.ObjectId;
    conclusion: string;
    comment: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    lesson: Types.ObjectId;
}

const planSchema = new Schema<Plan>({
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    class: { type: Schema.Types.ObjectId, ref: "Class" },
    subject: { type: String, required: true },
    topic: { type: String, required: true },
    objectives: { type: String },
    materials: { type: Date },
    previousKnowledge: { type: String },
    introduction: { type: String },
    presentation: { type: String },
    conclusion: { type: String },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    lesson: { type: Schema.Types.ObjectId, ref: "Plan" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
});

export default mongoose.models.Plan || mongoose.model("Plan", planSchema);