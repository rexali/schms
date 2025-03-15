import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Reply {
    comment: string;
    user: Types.ObjectId;
    lesson: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
const replySchema = new Schema<Reply>({
    comment: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lesson: { type: Schema.Types.ObjectId, ref: 'Lesson' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Reply || mongoose.model("Reply", replySchema);