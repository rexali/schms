'use client';

import React, { useActionState, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddAttendance = () => {
    // const userId =JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const [status, setStatus]=useState('')
    const [terms] = useState(['FIRST', 'SECOND', 'THIRD']);
    const [weeks] = useState(['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5', 'WEEK 6','WEEK 7', 'WEEK 8', 'WEEK 9', 'WEEK 10', 'WEEK 11', 'WEEK 12']);
    const [dayx] = useState(['MON', 'TUE', 'WED', 'THU', 'FRI']);
    const [students, setStudents] = useState({
        class:'',
        teacher:'',
        session: "",
        term: "",
        date: '',
        week: "",
        day: "",
        students:[
        { id: 1, name: 'John Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
        { id: 2, name: 'Jane Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
        { id: 3, name: 'Alice Brown', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
        { id: 4, name: 'Bob Smith', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
        // Add more students here
        ]});

    const handleAttendanceChange = (studentId: number, dayIndex: number, sessionIndex: number, value: string) => {
        setStudents({...students, students:students.students.map(student =>
            student.id === studentId
                ? { ...student, attendance: student.attendance.map((att, index) => index === dayIndex ? att.map((sess, sessIndex) => sessIndex === sessionIndex ? value : sess) : att) }
                : student
        )});
    };

    
    function addOtherAttendance(event: { target: { name: string, value: string } }): void {
        setStudents({ ...students, [event.target.name]: event.target.value })
    }

    function addNewStudent() {
                let studentName = prompt("\n\n Enter student name", 'Said Bello') as string;
                if (studentName) {
                    setStudents({
                        ...students,
                        students: [...students.students, {
                            id: students.students.length + 1,
                            name: studentName,
                            attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
                        }]
                    })
                }  
            }

    const handleSubmit = async () => {
        // e.preventDefault();
        setStatus("Sending attendance...")
        const totalAttendance = {
            weeklyTotals: students.students.map(student => ({
                studentId: student.id,
                totalPresent: calculateWeeklyTotal(student.attendance)
            })),
            dailyTotals: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => ({
                day,
                morning: calculateDailyTotal(index, 0),
                afternoon: calculateDailyTotal(index, 1),
                total: calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1),
                percentage: calculatePercentage(calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1), students.students.length)
            })),
            overallTotal: {
                morning: calculateTotalAttendance(0),
                afternoon: calculateTotalAttendance(1),
                total: calculateTotalAttendance(0) + calculateTotalAttendance(1),
                percentage: calculatePercentage(calculateTotalAttendance(0) + calculateTotalAttendance(1), students.students.length)
            }
        };
        console.log('Submitted attendance:', { ...students, ...totalAttendance});
        const finalAttendance={ ...students, ...totalAttendance}
        const attendanceResponse = await fetch("/api/attendance", {
            method:"POST", 
            mode:"cors",
            body:JSON.stringify({...finalAttendance})
        }).then(res=>res.json());
        if (attendanceResponse.status==='success') {
             setStatus(attendanceResponse.status+": "+attendanceResponse.message)
        }else{
            setStatus(attendanceResponse.status+": "+attendanceResponse.message)
        }
        console.log(attendanceResponse);
        // Add logic to save the attendance and totalAttendance data
    };

    const calculateWeeklyTotal = (attendance: string[][]) => {

        return attendance.flat().filter((att: string) => att === 'P').length;
    };

    const calculateDailyTotal = (dayIndex: number, sessionIndex: number) => {

        return students.students.filter(student => student.attendance[dayIndex][sessionIndex] === 'P').length;
    };

    const calculateTotalAttendance = (sessionIndex: number) => {

        return students.students.reduce((total, student) => total + student.attendance.filter(att => att[sessionIndex] === 'P').length, 0);
    };

    const calculatePercentage = (total: number, count: number) => {
        
        return ((total / (count * 2 * 5)) * 100).toFixed(2);
    };

    function removeStudent(index: number): void {
        setStudents({
            ...students,
            students: [...students.students.filter((student, i)=>i!==index)]
        })
    }

    return (
        <div className="container mt-5">
            <h2>Weekly Attendance</h2><br />
            <form onSubmit={handleSubmit}>
            <div className='row'>


            <div className='col-md-3'>
                    <div className="form-floating">
                        <input type="text" name='teacher' onChange={addOtherAttendance} className="form-control" id="teacher" autoComplete='questions' />
                        <label htmlFor="teacher">Teacher</label>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floating">
                        <input type="text" name='class' onChange={addOtherAttendance} className="form-control" id="teacher" autoComplete='questions' />
                        <label htmlFor="class">Class</label>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floating">
                        <input type="date" name='date' onChange={addOtherAttendance} className="form-control" id="date" autoComplete='questions' />
                        <label htmlFor="date">Date</label>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floating">
                        <input type='month' name='session' onChange={addOtherAttendance} className="form-control" id="year" autoComplete='questions' />
                        <label htmlFor="session">Session</label>

                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floating">
                        <select className="form-control" onChange={addOtherAttendance} name='term' id='term' >
                            <option key={'start9'} value="">Select</option>
                            {
                                terms.map((term, index) => <option key={index} value={`${term}`}>{term}</option>)
                            }
                        </select>
                        <label htmlFor="term">Term</label>

                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floating">
                        <select className="form-control" onChange={addOtherAttendance} name='week' id='week' >
                            <option key={'start10'} value="">Select</option>
                            {
                                weeks.map((week, index) => <option key={index} value={`${week}`}>{week}</option>)
                            }
                        </select>
                        <label htmlFor="week">Week</label>

                    </div>
                </div>


                <div className='col-md-3'>
                    <div className="form-floating">
                        <select className="form-control" onChange={addOtherAttendance} name='day' id='day' >
                            <option key={'start11'} value="">Select</option>
                            {
                                dayx.map((day, index) => <option key={index} value={`${day}`}>{day}</option>)
                            }
                        </select>
                        <label htmlFor="day">Day</label>
                    </div>
                </div>
                </div><br />


                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Student Name</th>
                                <th>Monday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Monday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Tuesday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Tuesday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Wednesday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Wednesday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Thursday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Thursday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Friday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Friday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Total Present</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.students.map((student,index) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    {student.attendance.flat().map((att, index) => (
                                        <td key={index}>
                                            <select
                                                className="form-control"
                                                value={att}
                                                onChange={(e) => handleAttendanceChange(student.id, Math.floor(index / 2), index % 2, e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                <option value="P">Present</option>
                                                <option value="A">Absent</option>
                                                <option value="L">Late</option>
                                                <option value="E">Excused</option>
                                            </select>
                                        </td>
                                    ))}
                                    <td>{calculateWeeklyTotal(student.attendance)}</td>
                                    <td><button className="btn btn-success" onClick={() => removeStudent(index)}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     <p className="text-center"><button className="btn btn-success" type='button' onClick={() => addNewStudent()}>Add new student</button></p>
                </div>


                <div className="table-responsive mt-5">
                    <h3>Total Class Attendance</h3>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Day</th>
                                <th>Morning</th>
                                <th>Afternoon</th>
                                <th>Total</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                                <tr key={index}>
                                    <td>{day}</td>
                                    <td>{calculateDailyTotal(index, 0)}</td>
                                    <td>{calculateDailyTotal(index, 1)}</td>
                                    <td>{calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1)}</td>
                                    <td>{calculatePercentage(calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1), students.students.length)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td>{calculateTotalAttendance(0)}</td>
                                <td>{calculateTotalAttendance(1)}</td>
                                <td>{calculateTotalAttendance(0) + calculateTotalAttendance(1)}</td>
                                <td>{calculatePercentage(calculateTotalAttendance(0) + calculateTotalAttendance(1), students.students.length)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 <p className='text-center text-success'>{status}</p>
                 <p className='text-center'><button type="button" onClick={()=>handleSubmit()} className="btn btn-primary mt-3">Submit Attendance</button></p>
            </form>

        </div>
    );
};

export default AddAttendance;


// import { useState } from "react";

// export default function AttendancePage(props: any) {
//     const [weeks] = useState(['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5', 'WEEK 6','WEEK 7', 'WEEK 8', 'WEEK 9', 'WEEK 10', 'WEEK 11', 'WEEK 12']);
//     const [dayx] = useState(['MON', 'TUE', 'WED', 'THU', 'FRI']);
//     const [terms] = useState(['FIRST', 'SECOND', 'THIRD']);

//     const [attendance, setAttendance] = useState({
//         session: "",
//         term: "",
//         date: '',
//         week: "",
//         day: "",
//         students: [
//             {
//                 id: 1,
//                 name: "Halimat Suberu",
//                 weeklyTotal: 0,
//                 days: [
//                     { day: 'mon', morning: 'off', afternoon: 'off' },
//                     { day: 'tue', morning: 'off', afternoon: 'off' },
//                     { day: 'wed', morning: 'off', afternoon: 'off' },
//                     { day: 'thu', morning: 'off', afternoon: 'off' },
//                     { day: 'fri', morning: 'off', afternoon: 'off' },
//                 ]
//             },
//             {
//                 id: 2,
//                 name: "Sheidu Bello",
//                 weeklyTotal: 0,
//                 days: [
//                     { day: 'mon', morning: 'off', afternoon: 'off' },
//                     { day: 'tue', morning: 'off', afternoon: 'off' },
//                     { day: 'wed', morning: 'off', afternoon: 'off' },
//                     { day: 'thu', morning: 'off', afternoon: 'off' },
//                     { day: 'fri', morning: 'off', afternoon: 'off' },
//                 ]
//             },
//         ]
//     });

//     const getDailyMorningTotal = (day: string) => {
//         return attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.morning == 'on').length;
//     }


//     const getDailyAfternoonTotal = (day: string) => {
//         return attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.afternoon == 'on').length;
//     }

//     const getDaily = (day: string, time: string) => {

//         return [
//             attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.morning == 'on').length,
//             attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.afternoon == 'on').length
//         ]
//     }

//     function addOtherAttendance(event: { target: { name: string, value: string } }): void {
//         setAttendance({ ...attendance, [event.target.name]: event.target.value })
//     }

//     function setStudentAttendance(id: number, name: string, value: string): void {
//         const dy = name.split('-')[0];
//         const time = name.split('-')[1];

//         setAttendance(c => {
//             return {
//                 ...c,
//                 students: c.students.map((student) => student.id === Number(id) ? { ...student, days: student.days.map((day) => day.day === dy ? { ...day, [time]: value } : day) } : student)
//             }
//         });

//         setAttendance(c => {
//             let weeklyTotal = getStudentWeeklyAttendance(id);
//             return {
//                 ...c,
//                 students: c.students.map((student) => student.id === Number(id) ? { ...student, weeklyTotal: weeklyTotal } : student)
//             }
//         });
//     }

//     function setStudentWeeklyAttendance(studentId: number) {
//         const weeklyTotal = getStudentWeeklyAttendance(studentId);
//         setAttendance(c => {
//             return {
//                 ...c,
//                 students: c.students.map((student) => student.id === Number(studentId) ? { ...student, weeklyTotal } : student)
//             }
//         });
//     }

//     const getStudentWeeklyAttendance = (studentId: any) => {
//         let weeklyTotal = attendance.students
//             .filter(student => student.id === studentId)
//             .map(student => student.days.filter(day => day.morning === 'on'))[0].length +
//             attendance.students
//                 .filter(student => student.id === studentId)
//                 .map(student => student.days.filter(day => day.afternoon === 'on'))[0].length;

//         return weeklyTotal;
//     }

//     function addNewStudent() {
//         let studentName = prompt("\n\n Enter student name", 'Said Bello') as string;
//         if (studentName) {
//             setAttendance({
//                 ...attendance,
//                 students: [...attendance.students, {
//                     id: attendance.students.length + 1,
//                     name: studentName,
//                     weeklyTotal: 0,
//                     days: [
//                         { day: 'mon', morning: 'off', afternoon: 'off' },
//                         { day: 'tue', morning: 'off', afternoon: 'off' },
//                         { day: 'wed', morning: 'off', afternoon: 'off' },
//                         { day: 'thu', morning: 'off', afternoon: 'off' },
//                         { day: 'fri', morning: 'off', afternoon: 'off' },
//                     ]
//                 }]
//             })
//         } 
       
//     }


//     function submitAttendance(): void {
//         window.localStorage.setItem("attendance", JSON.stringify(attendance));
//         console.log(attendance);
//     }


//     return (
//         <div className="w-100">
//             <h1>Attendance</h1>

//             <form id="attendanceForm">
//                 <div className='row'>

//                     <div className='col-md-3'>
//                         <div className="form-floating">
//                             <input type="date" name='date' onChange={addOtherAttendance} className="form-control" id="data" autoComplete='questions' />
//                             <label htmlFor="date">Date</label>
//                         </div>
//                     </div>

//                     <div className='col-md-3'>
//                         <div className="form-floating">
//                             <input type='month' name='session' onChange={addOtherAttendance} className="form-control" id="year" autoComplete='questions' />
//                             <label htmlFor="session">Session</label>

//                         </div>
//                     </div>

//                     <div className='col-md-2'>
//                         <div className="form-floating">
//                             <select className="form-control" onChange={addOtherAttendance} name='term' id='term' >
//                                 <option key={'start9'} value="">Select</option>
//                                 {
//                                     terms.map((term, index) => <option key={index} value={`${term}`}>{term}</option>)
//                                 }
//                             </select>
//                             <label htmlFor="term">Term</label>

//                         </div>
//                     </div>

//                     <div className='col-md-2'>
//                         <div className="form-floating">
//                             <select className="form-control" onChange={addOtherAttendance} name='week' id='week' >
//                                 <option key={'start10'} value="">Select</option>
//                                 {
//                                     weeks.map((week, index) => <option key={index} value={`${week}`}>{week}</option>)
//                                 }
//                             </select>
//                             <label htmlFor="week">Week</label>

//                         </div>
//                     </div>


//                     <div className='col-md-2'>
//                         <div className="form-floating">
//                             <select className="form-control" onChange={addOtherAttendance} name='day' id='day' >
//                                 <option key={'start11'} value="">Select</option>
//                                 {
//                                     dayx.map((day, index) => <option key={index} value={`${day}`}>{day}</option>)
//                                 }
//                             </select>
//                             <label htmlFor="day">Day</label>
//                         </div>
//                     </div>
//                 </div><br />
//                 <div>
//                     <div className="table-responsive">
//                         <table className="table table-bordered table-striped">
//                             <thead className="thead-dark">
//                                 <tr>
//                                     <th>S/N</th>
//                                     <th>Name</th>
//                                     <th>Mon</th>
//                                     <th>Tue</th>
//                                     <th>Wed</th>
//                                     <th>Thu</th>
//                                     <th>Fri</th>
//                                     <th>Weekly Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {attendance?.students.map((student, index) => (
//                                     <tr key={'student' + index}>
//                                         <td>{student.id}</td>
//                                         <td>{student.name}</td>
//                                         {
//                                             student.days.map((day, index) => {
//                                                 return (
//                                                     <td className="text-center" key={index}>
//                                                         <input
//                                                             name={`${day.day}-${day.morning}`}
//                                                             type="checkbox"
//                                                             onChange={(e) => {
//                                                                 if (e.currentTarget && e.currentTarget.value === "off") {
//                                                                     setStudentAttendance(student.id, day.day + '-morning', "on");

//                                                                 } else {
//                                                                     setStudentAttendance(student.id, day.day + '-morning', "off");
//                                                                 }

//                                                             }}
//                                                             value={day.morning}
//                                                             checked={day.morning === 'on' ? true : false}
//                                                             id={`morning${student.id}`}
//                                                         />
//                                                         &nbsp;&nbsp;&nbsp;
//                                                         <input
//                                                             name={`${day.day}-${day.afternoon}`}
//                                                             type="checkbox"
//                                                             onChange={(e) => {
//                                                                 if (e.currentTarget && e.currentTarget.value === "off") {
//                                                                     setStudentAttendance(student.id, day.day + '-afternoon', "on");
//                                                                 } else {
//                                                                     setStudentAttendance(student.id, day.day + '-afternoon', "off");
//                                                                 }

//                                                             }}
//                                                             value={day.afternoon}
//                                                             checked={day.afternoon === 'on' ? true : false}
//                                                             id={`afternoon${student.id}`}
//                                                         />
//                                                     </td>
//                                                 )
//                                             })
//                                         }

//                                         <td className="text-center">{getStudentWeeklyAttendance(student.id)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <p className="text-center"><button className="btn btn-success" onClick={() => addNewStudent()}>Add new student</button></p>
//                     </div>

//                 </div>
//                 <div className="table-responsive">
//                     <table className="table table-bordered table-striped">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>Day</th>
//                                 <th>Morning</th>
//                                 <th>Afternoon</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {dayx.map((day, index) => (
//                                 <tr key={index}>
//                                     <td>{day}</td>
//                                     <td>{getDaily(day.toLowerCase(), 'morning')[0]}</td>
//                                     <td>{getDaily(day.toLowerCase(), 'afternoon')[1]}</td>
//                                 </tr>
//                             ))}
//                             <tr>
//                                 <td>Total</td>
//                                 <td>
//                                     {
//                                         getDailyMorningTotal('mon') +
//                                         getDailyMorningTotal('tue') +
//                                         getDailyMorningTotal('wed') +
//                                         getDailyMorningTotal('thu') +
//                                         getDailyMorningTotal('fri')
//                                     }
//                                 </td>
//                                 <td>
//                                     {
//                                         getDailyAfternoonTotal('mon') +
//                                         getDailyAfternoonTotal('tue') +
//                                         getDailyAfternoonTotal('wed') +
//                                         getDailyAfternoonTotal('thu') +
//                                         getDailyAfternoonTotal('fri')
//                                     }
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>Percent %</td>
//                                 <td>
//                                     {
//                                         (((
//                                             getDailyMorningTotal('mon') +
//                                             getDailyMorningTotal('tue') +
//                                             getDailyMorningTotal('wed') +
//                                             getDailyMorningTotal('thu') +
//                                             getDailyMorningTotal('fri') +

//                                             getDailyAfternoonTotal('mon') +
//                                             getDailyAfternoonTotal('tue') +
//                                             getDailyAfternoonTotal('wed') +
//                                             getDailyAfternoonTotal('thu') +
//                                             getDailyAfternoonTotal('fri')
//                                         ))
//                                             /
//                                             (attendance.students.length * 5 * 2)) * 100 + " %"

//                                     }
//                                 </td>
//                                 <td>
//                                 </td>

//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className='text-center'>
//                     <button className="btn btn-primary w-25 py-2 my-2" onClick={submitAttendance} type="button">Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }