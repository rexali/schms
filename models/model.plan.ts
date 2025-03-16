import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Plan {
    teacher: string;
    week: string;
    duration: string;
    subject: string;
    topic: string;
    class: String;
    objectives: string;
    materials: String;
    previousKnowledge: string;
    introduction: string;
    presentations: [Presentation];
    evaluation: string;
    conclusion: string;
    comment: Types.ObjectId;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    lesson: Types.ObjectId;
}

type Presentation = {
    id: number,
    text: string
}

const presentationSchema = new Schema<Presentation>({
    id: { type: Number },
    text: { type: String },
})

const planSchema = new Schema<Plan>({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    teacher: { type: String },
    week: { type: String },
    duration: { type: String },
    class: { type: String },
    subject: { type: String },
    topic: { type: String },
    objectives: { type: String },
    materials: { type: String },
    previousKnowledge: { type: String },
    introduction: { type: String },
    presentations: [presentationSchema],
    evaluation: { type: String },
    conclusion: { type: String },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    lesson: { type: Schema.Types.ObjectId, ref: "Lesson" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});

export default mongoose.models.Plan || mongoose.model("Plan", planSchema);