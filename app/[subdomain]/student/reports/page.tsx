import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const studentReport = {
  studentName: 'John Doe',
  class: '10A',
  admissionNumber: '12345',
  term: 'Term 1',
  year: '2025',
  subjects: [
    { name: 'Math', testScore: 85, examScore: 90, totalScore: 175, grade: 'A', remark: 'Excellent' },
    { name: 'English', testScore: 78, examScore: 82, totalScore: 160, grade: 'B+', remark: 'Very Good' },
    { name: 'Science', testScore: 88, examScore: 85, totalScore: 173, grade: 'A-', remark: 'Excellent' },
    { name: 'History', testScore: 70, examScore: 75, totalScore: 145, grade: 'B', remark: 'Good' },
    { name: 'Geography', testScore: 90, examScore: 92, totalScore: 182, grade: 'A', remark: 'Excellent' },
    { name: 'Art', testScore: 75, examScore: 80, totalScore: 155, grade: 'B+', remark: 'Very Good' },
    { name: 'Music', testScore: 85, examScore: 80, totalScore: 165, grade: 'A-', remark: 'Excellent' },
    { name: 'Physical Education', testScore: 92, examScore: 90, totalScore: 182, grade: 'A', remark: 'Excellent' },
    // Add more subjects here
  ],
  cognitive: {
    attention: 'Excellent',
    memory: 'Very Good',
    problemSolving: 'Good'
  },
  psychomotor: {
    coordination: 'Excellent',
    dexterity: 'Very Good',
    reactionTime: 'Good'
  },
  comments: 'John has shown excellent performance this term. Keep up the good work!',
  classTeacher: 'Mr. Smith',
  principal: 'Ms. Johnson',
  teacherComment: 'John has been very attentive and participative in class.',
  principalComment: 'John is a model student and has performed exceptionally well.'
};

const StudentReportSheet = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Student Terminal Report Sheet</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <p><strong>Student Name:</strong> {studentReport.studentName}</p>
          <p><strong>Class:</strong> {studentReport.class}</p>
          <p><strong>Admission Number:</strong> {studentReport.admissionNumber}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Term:</strong> {studentReport.term}</p>
          <p><strong>Year:</strong> {studentReport.year}</p>
        </div>
      </div>
      <div className="table-responsive mt-4">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Subject</th>
              <th>Test Score</th>
              <th>Exam Score</th>
              <th>Total Score</th>
              <th>Grade</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {studentReport.subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.testScore}</td>
                <td>{subject.examScore}</td>
                <td>{subject.totalScore}</td>
                <td>{subject.grade}</td>
                <td>{subject.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h4>Cognitive Skills</h4>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Skill</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(studentReport.cognitive).map(([skill, rating], index) => (
              <tr key={index}>
                <td>{skill.charAt(0).toUpperCase() + skill.slice(1)}</td>
                <td>{rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h4>Psychomotor Skills</h4>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Skill</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(studentReport.psychomotor).map(([skill, rating], index) => (
              <tr key={index}>
                <td>{skill.charAt(0).toUpperCase() + skill.slice(1)}</td>
                <td>{rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p><strong>Comments:</strong></p>
        <p>{studentReport.comments}</p>
      </div>
      <div className="mt-4">
        <p><strong>Teacher's Comment:</strong></p>
        <p>{studentReport.teacherComment}</p>
      </div>
      <div className="mt-4">
        <p><strong>Principal's Comment:</strong></p>
        <p>{studentReport.principalComment}</p>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <p><strong>Class Teacher:</strong> {studentReport.classTeacher}</p>
        </div>
        <div className="col-md-6 text-end">
          <p><strong>Principal:</strong> {studentReport.principal}</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handlePrint}>Print Report Sheet</button>
      </div>
    </div>
  );
};

export default StudentReportSheet;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const studentReport = {
//   studentName: 'John Doe',
//   class: '10A',
//   admissionNumber: '12345',
//   term: 'Term 1',
//   year: '2025',
//   subjects: [
//     { name: 'Math', testScore: 85, examScore: 90, totalScore: 175, grade: 'A', remark: 'Excellent' },
//     { name: 'English', testScore: 78, examScore: 82, totalScore: 160, grade: 'B+', remark: 'Very Good' },
//     { name: 'Science', testScore: 88, examScore: 85, totalScore: 173, grade: 'A-', remark: 'Excellent' },
//     { name: 'History', testScore: 70, examScore: 75, totalScore: 145, grade: 'B', remark: 'Good' },
//     { name: 'Geography', testScore: 90, examScore: 92, totalScore: 182, grade: 'A', remark: 'Excellent' },
//     { name: 'Art', testScore: 75, examScore: 80, totalScore: 155, grade: 'B+', remark: 'Very Good' },
//     { name: 'Music', testScore: 85, examScore: 80, totalScore: 165, grade: 'A-', remark: 'Excellent' },
//     { name: 'Physical Education', testScore: 92, examScore: 90, totalScore: 182, grade: 'A', remark: 'Excellent' },
//     // Add more subjects here
//   ],
//   cognitive: {
//     attention: 'Excellent',
//     memory: 'Very Good',
//     problemSolving: 'Good'
//   },
//   psychomotor: {
//     coordination: 'Excellent',
//     dexterity: 'Very Good',
//     reactionTime: 'Good'
//   },
//   comments: 'John has shown excellent performance this term. Keep up the good work!',
//   classTeacher: 'Mr. Smith',
//   principal: 'Ms. Johnson'
// };

// const StudentReportSheet = () => {
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Student Terminal Report Sheet</h2>
//       <div className="row mt-4">
//         <div className="col-md-6">
//           <p><strong>Student Name:</strong> {studentReport.studentName}</p>
//           <p><strong>Class:</strong> {studentReport.class}</p>
//           <p><strong>Admission Number:</strong> {studentReport.admissionNumber}</p>
//         </div>
//         <div className="col-md-6">
//           <p><strong>Term:</strong> {studentReport.term}</p>
//           <p><strong>Year:</strong> {studentReport.year}</p>
//         </div>
//       </div>
//       <div className="table-responsive mt-4">
//         <table className="table table-bordered table-striped">
//           <thead className="thead-dark">
//             <tr>
//               <th>Subject</th>
//               <th>Test Score</th>
//               <th>Exam Score</th>
//               <th>Total Score</th>
//               <th>Grade</th>
//               <th>Remark</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentReport.subjects.map((subject, index) => (
//               <tr key={index}>
//                 <td>{subject.name}</td>
//                 <td>{subject.testScore}</td>
//                 <td>{subject.examScore}</td>
//                 <td>{subject.totalScore}</td>
//                 <td>{subject.grade}</td>
//                 <td>{subject.remark}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-4">
//         <h4>Cognitive Skills</h4>
//         <table className="table table-bordered table-striped">
//           <thead className="thead-dark">
//             <tr>
//               <th>Skill</th>
//               <th>Rating</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(studentReport.cognitive).map(([skill, rating], index) => (
//               <tr key={index}>
//                 <td>{skill.charAt(0).toUpperCase() + skill.slice(1)}</td>
//                 <td>{rating}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-4">
//         <h4>Psychomotor Skills</h4>
//         <table className="table table-bordered table-striped">
//           <thead className="thead-dark">
//             <tr>
//               <th>Skill</th>
//               <th>Rating</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(studentReport.psychomotor).map(([skill, rating], index) => (
//               <tr key={index}>
//                 <td>{skill.charAt(0).toUpperCase() + skill.slice(1)}</td>
//                 <td>{rating}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-4">
//         <p><strong>Comments:</strong></p>
//         <p>{studentReport.comments}</p>
//       </div>
//       <div className="row mt-4">
//         <div className="col-md-6">
//           <p><strong>Class Teacher:</strong> {studentReport.classTeacher}</p>
//         </div>
//         <div className="col-md-6 text-end">
//           <p><strong>Principal:</strong> {studentReport.principal}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentReportSheet;


