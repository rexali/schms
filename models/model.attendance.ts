import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

type Student = {
    id: Number;
    name: String;
    weeklyStudentAttendance:Number;
    morning: String;
    afternoon: String
}

interface Attendance {
    teacher: Types.ObjectId;
    class: string;
    date: Date;
    day: string;
    week: string;
    weeklyClassAttendance:Number;
    weeklyPercent:String,
    term: string;
    comment: string
    students: [Student];
    createdAt: Date;
    updatedAt: Date;
}

const studentSchema = new Schema<Student>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    morning: { type: String },
    afternoon: { type: String },
    weeklyStudentAttendance:{type:Number}
});

const attendanceSchema = new Schema<Attendance>({
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    class: { type: String, required: true },
    date: { type: Date, default: Date.now },
    term: { type: String, required: true },
    day: { type: String, required: true },
    week: { type: String, required: true },
    weeklyClassAttendance:{type:Number},
    weeklyPercent:{type:String},
    students: [studentSchema],
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);