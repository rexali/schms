import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Comment {
    comment: string;
    user: Types.ObjectId;
    lesson: Types.ObjectId;
    replies: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
const commentSchema = new Schema<Comment>({
    comment: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lesson: { type: Schema.Types.ObjectId, ref: 'Lesson' },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Comment || mongoose.model("Comment", commentSchema);