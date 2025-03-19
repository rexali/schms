import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

type StudentAttendance = {
    id: String,
    name: String,
    attendance: [[String,String]]
}

type DailyTotal = {
    day: Number;
    total: Number;
    percentage: String;
    morning: String;
    afternoon: String
}

type OverallTotal = {
    total: Number;
    percentage: String;
    morning: String;
    afternoon: String
}

type WeeklyTotal = {
    studentId: Number;
    totalPresent: Number;
}

interface Attendance {
    user: Types.ObjectId;
    class: string;
    teacher: string
    date: Date;
    day: string;
    week: string;
    term: string;
    session: string;
    students: [StudentAttendance];
    weeklyTotals: [WeeklyTotal];
    dailyTotals: [DailyTotal],
    overallTotal: OverallTotal,
    comment: string
    createdAt: Date;
    updatedAt: Date;
}

const studentAttendanceSchema = new Schema<StudentAttendance>({
    id: { type: String },
    name: { type: String },
    attendance: { type: [[String,String]] },
});

const weeklyTotalSchema = new Schema<WeeklyTotal>({
    studentId: { type: Number },
    totalPresent: { type: Number },
});

const dailyTotalSchema = new Schema<DailyTotal>({
    day: { type: String },
    morning: { type: Number },
    afternoon: { type: Number },
    total: { type: Number },
    percentage:{ type: String },
});

const overallTotalSchema = new Schema<OverallTotal>({
    total: { type: Number },
    percentage: { type: String },
    morning: { type: String },
    afternoon: { type: String },
});

const attendanceSchema = new Schema<Attendance>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    class: { type: String },
    teacher: { type: String },
    date: { type: Date, default: Date.now },
    term: { type: String },
    day: { type: String },
    week: { type: String },
    session: { type: String },
    students: [studentAttendanceSchema],
    weeklyTotals: [weeklyTotalSchema],
    dailyTotals: [dailyTotalSchema],
    overallTotal: overallTotalSchema,
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);






// import { Schema, Types } from "mongoose";
// import { mongoose } from "../config/db";

// type Student = {
//     id: Number;
//     name: String;
//     weeklyStudentAttendance:Number;
//     morning: String;
//     afternoon: String
// }

// interface Attendance {
//     user: Types.ObjectId;
//     class: string;
//     date: Date;
//     day: string;
//     week: string;
//     weeklyClassAttendance:Number;
//     weeklyPercent:String,
//     term: string;
//     comment: string
//     students: [Student];
//     createdAt: Date;
//     updatedAt: Date;
// }

// const studentAttendanceSchema=new Schema({

// })
// const studentSchema = new Schema<Student>({
//     id: { type: Number, required: true },
//     name: { type: String, required: true },
//     morning: { type: String },
//     afternoon: { type: String },
//     weeklyStudentAttendance:{type:Number}
// });

// const attendanceSchema = new Schema<Attendance>({
//     user: { type: Schema.Types.ObjectId, ref: 'Teacher' },
//     class: { type: String, required: true },
//     date: { type: Date, default: Date.now },
//     term: { type: String, required: true },
//     day: { type: String, required: true },
//     week: { type: String, required: true },
//     weeklyClassAttendance:{type:Number},
//     weeklyPercent:{type:String},
//     students: [studentSchema],
//     comment: { type: String },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now }
// });

// export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);