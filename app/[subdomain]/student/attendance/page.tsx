

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const StudentAttendance = () => {
//     const [students, setStudents] = useState([
//         { id: 1, name: 'John Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
//         { id: 2, name: 'Jane Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
//         { id: 3, name: 'Alice Brown', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
//         { id: 4, name: 'Bob Smith', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
//         // Add more students here
//     ]);

//     const handleAttendanceChange = (studentId: number, dayIndex: number, sessionIndex: number, value: string) => {
//         setStudents(students.map(student =>
//             student.id === studentId
//                 ? { ...student, attendance: student.attendance.map((att, index) => index === dayIndex ? att.map((sess, sessIndex) => sessIndex === sessionIndex ? value : sess) : att) }
//                 : student
//         ));
//     };

//     const handleSubmit = (e: { preventDefault: () => void; }) => {
//         e.preventDefault();
//         const totalAttendance = {
//             weeklyTotal: students.map(student => ({
//                 studentId: student.id,
//                 totalPresent: calculateWeeklyTotal(student.attendance)
//             })),
//             dailyTotal: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => ({
//                 day,
//                 morning: calculateDailyTotal(index, 0),
//                 afternoon: calculateDailyTotal(index, 1),
//                 total: calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1),
//                 percentage: calculatePercentage(calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1), students.length)
//             })),
//             overallTotal: {
//                 morning: calculateTotalAttendance(0),
//                 afternoon: calculateTotalAttendance(1),
//                 total: calculateTotalAttendance(0) + calculateTotalAttendance(1),
//                 percentage: calculatePercentage(calculateTotalAttendance(0) + calculateTotalAttendance(1), students.length)
//             }
//         };
//         console.log('Submitted attendance:', {students, ...totalAttendance });
//         // console.log('Total attendance data:', totalAttendance);
//         // Add logic to save the attendance and totalAttendance data
//     };

//     const calculateWeeklyTotal = (attendance: string[][]) => {
//         return attendance.flat().filter((att: string) => att === 'P').length;
//     };

//     const calculateDailyTotal = (dayIndex: number, sessionIndex: number) => {
//         return students.filter(student => student.attendance[dayIndex][sessionIndex] === 'P').length;
//     };

//     const calculateTotalAttendance = (sessionIndex: number) => {
//         return students.reduce((total, student) => total + student.attendance.filter(att => att[sessionIndex] === 'P').length, 0);
//     };

//     const calculatePercentage = (total: number, count: number) => {
//         return ((total / (count * 2 * 5)) * 100).toFixed(2);
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Weekly Attendance</h2><br/>
//             <form onSubmit={handleSubmit}>
//                 <div className="table-responsive">
//                     <table className="table table-bordered table-striped">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>Student Name</th>
//                                 <th>Monday <span style={{color:'green'}}>Morning</span></th>
//                                 <th>Monday <span style={{color:'brown'}}>Afternoon</span></th>
//                                 <th>Tuesday <span style={{color:'green'}}>Morning</span></th>
//                                 <th>Tuesday <span style={{color:'brown'}}>Afternoon</span></th>
//                                 <th>Wednesday <span style={{color:'green'}}>Morning</span></th>
//                                 <th>Wednesday <span style={{color:'brown'}}>Afternoon</span></th>
//                                 <th>Thursday <span style={{color:'green'}}>Morning</span></th>
//                                 <th>Thursday <span style={{color:'brown'}}>Afternoon</span></th>
//                                 <th>Friday <span style={{color:'green'}}>Morning</span></th>
//                                 <th>Friday <span style={{color:'brown'}}>Afternoon</span></th>
//                                 <th>Total Present</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {students.map((student) => (
//                                 <tr key={student.id}>
//                                     <td>{student.name}</td>
//                                     {student.attendance.flat().map((att, index) => (
//                                         <td key={index}>
//                                             <select
//                                                 className="form-control"
//                                                 value={att}
//                                                 onChange={(e) => handleAttendanceChange(student.id, Math.floor(index / 2), index % 2, e.target.value)}
//                                             >
//                                                 <option value="">Select</option>
//                                                 <option value="P">Present</option>
//                                                 <option value="A">Absent</option>
//                                                 <option value="L">Late</option>
//                                                 <option value="E">Excused</option>
//                                             </select>
//                                         </td>
//                                     ))}
//                                     <td>{calculateWeeklyTotal(student.attendance)}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>


//                 <div className="table-responsive mt-5">
//                     <h3>Total Class Attendance</h3>
//                     <table className="table table-bordered table-striped">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>Day</th>
//                                 <th>Morning</th>
//                                 <th>Afternoon</th>
//                                 <th>Total</th>
//                                 <th>Percentage</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
//                                 <tr key={index}>
//                                     <td>{day}</td>
//                                     <td>{calculateDailyTotal(index, 0)}</td>
//                                     <td>{calculateDailyTotal(index, 1)}</td>
//                                     <td>{calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1)}</td>
//                                     <td>{calculatePercentage(calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1), students.length)}</td>
//                                 </tr>
//                             ))}
//                             <tr>
//                                 <td>Total</td>
//                                 <td>{calculateTotalAttendance(0)}</td>
//                                 <td>{calculateTotalAttendance(1)}</td>
//                                 <td>{calculateTotalAttendance(0) + calculateTotalAttendance(1)}</td>
//                                 <td>{calculatePercentage(calculateTotalAttendance(0) + calculateTotalAttendance(1), students.length)}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 <button type="submit" className="btn btn-primary mt-3">Submit Attendance</button>
//             </form>

//         </div>
//     );
// };

// export default StudentAttendance;


// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const StudentAttendance = () => {
// //   const [students, setStudents] = useState([
// //     { id: 1, name: 'John Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
// //     { id: 2, name: 'Jane Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
// //     { id: 3, name: 'Alice Brown', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
// //     { id: 4, name: 'Bob Smith', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
// //     // Add more students here
// //   ]);

// //   const handleAttendanceChange = (studentId: number, dayIndex: number, sessionIndex: number, value: string) => {
// //     setStudents(students.map(student =>
// //       student.id === studentId
// //         ? { ...student, attendance: student.attendance.map((att, index) => index === dayIndex ? att.map((sess, sessIndex) => sessIndex === sessionIndex ? value : sess) : att) }
// //         : student
// //     ));
// //   };

// //   const handleSubmit = (e: { preventDefault: () => void; }) => {
// //     e.preventDefault();
// //     console.log('Submitted attendance:', students);
// //     // Add logic to save the attendance
// //   };

// //   const calculateWeeklyTotal = (attendance: string[][]) => {
// //     return attendance.flat().filter((att: string) => att === 'P').length;
// //   };

// //   const calculateDailyTotal = (dayIndex: number, sessionIndex: number) => {
// //     return students.filter(student => student.attendance[dayIndex][sessionIndex] === 'P').length;
// //   };

// //   const calculateTotalAttendance = (sessionIndex: number) => {
// //     return students.reduce((total, student) => total + student.attendance.filter(att => att[sessionIndex] === 'P').length, 0);
// //   };

// //   const calculatePercentage = (total: number, count: number) => {
// //     return ((total / (count * 2 * 5)) * 100).toFixed(2);
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2>Nigerian School Register - Weekly Attendance</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="table-responsive">
// //           <table className="table table-bordered table-striped">
// //             <thead className="thead-dark">
// //               <tr>
// //                 <th>Student Name</th>
// //                 <th>Monday Morning</th>
// //                 <th>Monday Afternoon</th>
// //                 <th>Tuesday Morning</th>
// //                 <th>Tuesday Afternoon</th>
// //                 <th>Wednesday Morning</th>
// //                 <th>Wednesday Afternoon</th>
// //                 <th>Thursday Morning</th>
// //                 <th>Thursday Afternoon</th>
// //                 <th>Friday Morning</th>
// //                 <th>Friday Afternoon</th>
// //                 <th>Total Present</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {students.map((student) => (
// //                 <tr key={student.id}>
// //                   <td>{student.name}</td>
// //                   {student.attendance.flat().map((att, index) => (
// //                     <td key={index}>
// //                       <select
// //                         className="form-control"
// //                         value={att}
// //                         onChange={(e) => handleAttendanceChange(student.id, Math.floor(index / 2), index % 2, e.target.value)}
// //                       >
// //                         <option value="">Select</option>
// //                         <option value="P">Present</option>
// //                         <option value="A">Absent</option>
// //                         <option value="L">Late</option>
// //                         <option value="E">Excused</option>
// //                       </select>
// //                     </td>
// //                   ))}
// //                   <td>{calculateWeeklyTotal(student.attendance)}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <button type="submit" className="btn btn-primary mt-3">Submit Attendance</button>
// //       </form>
// //       <div className="table-responsive mt-5">
// //         <h3>Total Class Attendance</h3>
// //         <table className="table table-bordered table-striped">
// //           <thead className="thead-dark">
// //             <tr>
// //               <th>Day</th>
// //               <th>Morning</th>
// //               <th>Afternoon</th>
// //               <th>Total</th>
// //               <th>Percentage</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
// //               <tr key={index}>
// //                 <td>{day}</td>
// //                 <td>{calculateDailyTotal(index, 0)}</td>
// //                 <td>{calculateDailyTotal(index, 1)}</td>
// //                 <td>{calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1)}</td>
// //                 <td>{calculatePercentage(calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1), students.length)}</td>
// //               </tr>
// //             ))}
// //             <tr>
// //               <td>Total</td>
// //               <td>{calculateTotalAttendance(0)}</td>
// //               <td>{calculateTotalAttendance(1)}</td>
// //               <td>{calculateTotalAttendance(0) + calculateTotalAttendance(1)}</td>
// //               <td>{calculatePercentage(calculateTotalAttendance(0) + calculateTotalAttendance(1), students.length)}</td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentAttendance;



// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const StudentAttendance = () => {
// //   const [students, setStudents] = useState([
// //     { id: 1, name: 'John Doe', attendance: ['', '', '', '', ''] },
// //     { id: 2, name: 'Jane Doe', attendance: ['', '', '', '', ''] },
// //     { id: 3, name: 'Alice Brown', attendance: ['', '', '', '', ''] },
// //     { id: 4, name: 'Bob Smith', attendance: ['', '', '', '', ''] },
// //     // Add more students here
// //   ]);

// //   const handleAttendanceChange = (studentId: number, dayIndex: number, value: string) => {
// //     setStudents(students.map(student =>
// //       student.id === studentId
// //         ? { ...student, attendance: student.attendance.map((att, index) => index === dayIndex ? value : att) }
// //         : student
// //     ));
// //   };

// //   const handleSubmit = (e: { preventDefault: () => void; }) => {
// //     e.preventDefault();
// //     console.log('Submitted attendance:', students);
// //     // Add logic to save the attendance
// //   };

// //   const calculateWeeklyTotal = (attendance: string[]) => {
// //     return attendance.filter((att: string) => att === 'P').length;
// //   };

// //   const calculateDailyTotal = (dayIndex: number) => {
// //     return students.filter(student => student.attendance[dayIndex] === 'P').length;
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2>Nigerian School Register - Weekly Attendance</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="table-responsive">
// //           <table className="table table-bordered table-striped">
// //             <thead className="thead-dark">
// //               <tr>
// //                 <th>Student Name</th>
// //                 <th>Monday</th>
// //                 <th>Tuesday</th>
// //                 <th>Wednesday</th>
// //                 <th>Thursday</th>
// //                 <th>Friday</th>
// //                 <th>Total Present</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {students.map((student) => (
// //                 <tr key={student.id}>
// //                   <td>{student.name}</td>
// //                   {student.attendance.map((att, index) => (
// //                     <td key={index}>
// //                       <select
// //                         className="form-control"
// //                         value={att}
// //                         onChange={(e) => handleAttendanceChange(student.id, index, e.target.value)}
// //                       >
// //                         <option value="">Select</option>
// //                         <option value="P">Present</option>
// //                         <option value="A">Absent</option>
// //                         <option value="L">Late</option>
// //                         <option value="E">Excused</option>
// //                       </select>
// //                     </td>
// //                   ))}
// //                   <td>{calculateWeeklyTotal(student.attendance)}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <button type="submit" className="btn btn-primary mt-3">Submit Attendance</button>
// //       </form>
// //       <div className="table-responsive mt-5">
// //         <h3>Total Class Attendance</h3>
// //         <table className="table table-bordered table-striped">
// //           <thead className="thead-dark">
// //             <tr>
// //               <th>Day</th>
// //               <th>Total Present</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td>Monday</td>
// //               <td>{calculateDailyTotal(0)}</td>
// //             </tr>
// //             <tr>
// //               <td>Tuesday</td>
// //               <td>{calculateDailyTotal(1)}</td>
// //             </tr>
// //             <tr>
// //               <td>Wednesday</td>
// //               <td>{calculateDailyTotal(2)}</td>
// //             </tr>
// //             <tr>
// //               <td>Thursday</td>
// //               <td>{calculateDailyTotal(3)}</td>
// //             </tr>
// //             <tr>
// //               <td>Friday</td>
// //               <td>{calculateDailyTotal(4)}</td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentAttendance;

// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const StudentAttendance = () => {
// //   const [students, setStudents] = useState([
// //     { id: 1, name: 'John Doe', attendance: ['', '', '', '', ''] },
// //     { id: 2, name: 'Jane Doe', attendance: ['', '', '', '', ''] },
// //     { id: 3, name: 'Alice Brown', attendance: ['', '', '', '', ''] },
// //     { id: 4, name: 'Bob Smith', attendance: ['', '', '', '', ''] },
// //     // Add more students here
// //   ]);

// //   const handleAttendanceChange = (studentId: number, dayIndex: number, value: string) => {
// //     setStudents(students.map(student =>
// //       student.id === studentId
// //         ? { ...student, attendance: student.attendance.map((att, index) => index === dayIndex ? value : att) }
// //         : student
// //     ));
// //   };

// //   const handleSubmit = (e: { preventDefault: () => void; }) => {
// //     e.preventDefault();
// //     console.log('Submitted attendance:', students);
// //     // Add logic to save the attendance
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2>Nigerian School Register - Weekly Attendance</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="table-responsive">
// //           <table className="table table-bordered table-striped">
// //             <thead className="thead-dark">
// //               <tr>
// //                 <th>Student Name</th>
// //                 <th>Monday</th>
// //                 <th>Tuesday</th>
// //                 <th>Wednesday</th>
// //                 <th>Thursday</th>
// //                 <th>Friday</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {students.map((student) => (
// //                 <tr key={student.id}>
// //                   <td>{student.name}</td>
// //                   {student.attendance.map((att, index) => (
// //                     <td key={index}>
// //                       <select
// //                         className="form-control"
// //                         value={att}
// //                         onChange={(e) => handleAttendanceChange(student.id, index, e.target.value)}
// //                       >
// //                         <option value="">Select</option>
// //                         <option value="P">Present</option>
// //                         <option value="A">Absent</option>
// //                         <option value="L">Late</option>
// //                         <option value="E">Excused</option>
// //                       </select>
// //                     </td>
// //                   ))}
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <button type="submit" className="btn btn-primary mt-3">Submit Attendance</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default StudentAttendance;