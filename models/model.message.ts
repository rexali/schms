import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";
import User from "./model.user";
import Reply from "./model.reply";

interface Message {
    title: string;
    comment: string;
    sender: string;
    receiver: string;
    replies: [Types.ObjectId]
    createdAt: Date;
    updatedAt: Date;
    user: Types.ObjectId;
}

const messageSchema = new Schema<Message>({
    title: { type: String },
    comment: { type: String },
    sender: { type: String },
    receiver: { type: String },
    replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: User }
});

const Message = mongoose.models?.Message || mongoose.model<Message>("Message", messageSchema);

export default Message;

