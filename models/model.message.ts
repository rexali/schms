import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Message {
    title: string;
    sender: string;
    receiver: string;
    createdAt: Date;
    updatedAt: Date;
    parent: Types.ObjectId;
}
const messageSchema = new Schema<Message>({
    title: { type: String, required: true },
    sender: { type: String, required: true, unique: true },
    receiver: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    parent: { type: Schema.Types.ObjectId, ref: 'Parent' }
});

export default mongoose.models.Message || mongoose.model("Message", messageSchema);