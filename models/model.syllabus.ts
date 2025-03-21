import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Syllabus {
    subject: string;
    user: Types.ObjectId;
    teacher: String;
    class: String;
    year: String;
    term: string;
    textbooks: [String];
    topics: [Topic];
    createdAt: Date;
    updatedAt: Date;
}

type Topic = {
    id: Number;
    week: String;
    topic: String;
    subtopics: [Subtopic];
}

type Subtopic = {
    id: Number;
    subtopic: String
}

const subTopicSchema = new Schema<Subtopic>({
    id: { type: Number },
    subtopic: { type: String },
})

const topicSchema = new Schema<Topic>({
    id: { type: Number },
    week: { type: String },
    topic: { type: String },
    subtopics: [subTopicSchema]
})

const syllabusSchema = new Schema<Syllabus>({
    subject: { type: String },
    class: { type: String },
    year: { type: String },
    teacher: { type: String },
    term: { type: String },
    textbooks: { type: [String] },
    topics: [topicSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Syllabus || mongoose.model("Syllabus", syllabusSchema);