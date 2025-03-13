import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Lesson {
    subject: string;
    topic: string;
    objectives: string;
    materials: Date;
    prerequisite: string;
    introduction: string;
    description: string;
    conclusion: string;
    comments: Types.ObjectId;
    replies: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    teacher: Types.ObjectId;
    class: Types.ObjectId;
}

const lessonSchema = new Schema<Lesson>({
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    class: { type: Schema.Types.ObjectId, ref: "Class" },
    subject: { type: String, required: true },
    topic: { type: String, required: true },
    objectives: { type: String },
    materials: { type: Date },
    prerequisite: { type: String },
    introduction: { type: String },
    description: { type: String },
    conclusion: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
});

export default mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema); 