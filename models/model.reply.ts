import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Reply {
    comment: string;
    student: Types.ObjectId;
    teacher: Types.ObjectId;
    lesson: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
const replySchema = new Schema<Reply>({
    comment: { type: String, required: true },
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    lesson: { type: Schema.Types.ObjectId, ref: 'Lesson' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Reply || mongoose.model("Reply", replySchema);