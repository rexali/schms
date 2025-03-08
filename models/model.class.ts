import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Class {
    class: string;
    section: string;
    teacher: Types.ObjectId;
    captain: string;
    students: [Types.ObjectId];
    createdAt: Date;
    updatedAt: Date; 
}

const classSchema = new Schema<Class>({
    class: { type: String },
    section: { type: String },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" }, // class teacher
    captain: { type: String }, // class captain
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Class || mongoose.model("Class", classSchema);