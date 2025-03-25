import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";
import User from "./model.user";
import Message from "./model.message";
import Lesson from "./model.lesson";


interface Reply {
    comment: string;
    user: Types.ObjectId;
    message: Types.ObjectId;
    lesson: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const replySchema = new Schema<Reply>({
    comment: { type: String },
    user: { type: Schema.Types.ObjectId, ref: User },
    message: { type: Schema.Types.ObjectId, ref: Message },
    lesson: { type: Schema.Types.ObjectId, ref: Lesson },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Reply = mongoose.models?.Reply || mongoose.model<Reply>("Reply", replySchema);

export default Reply;