import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";
type Description = {
    id: Number,
    text: String,
    photo: String,
    video: String,
}

interface Lesson {
    subject: string;
    topic: string;
    class: String;
    objectives: string;
    materials: String;
    prerequisite: string;
    introduction: string;
    descriptions: [Description];
    conclusion: string;
    comments: Types.ObjectId;
    replies: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    teacher: String;
    user: Types.ObjectId;
    question:Types.ObjectId;
}

const descriptionSchema = new Schema<Description>({
    id: { type: Number},
    text: { type: String },
    photo: { type: String },
    video: { type: String },
})

const lessonSchema = new Schema<Lesson>({
    teacher: { type: String },
    class: { type: String },
    subject: { type: String },
    topic: { type: String },
    objectives: { type: String },
    materials: { type: String },
    prerequisite: { type: String },
    introduction: { type: String },
    descriptions: [descriptionSchema],
    conclusion: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "Question" },
    question: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});

export default mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema); 