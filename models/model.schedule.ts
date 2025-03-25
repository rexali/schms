import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Schedule {
    time: string;
    user: Types.ObjectId;
    duration: string;
    class: string;
    subject: string;
    teacher: string;
    createdAt: Date;
    updatedAt: Date;
}
const scheduleSchema = new Schema<Schedule>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    time: { type: String },
    duration: { type: String },
    class: { type: String },
    subject: { type: String },
    teacher: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);