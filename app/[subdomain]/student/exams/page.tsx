import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentExams = () => {
  const [assessments, setAssessments] = useState({
    subject: 'Science',
    instructions: 'Please answer all the questions. Choose the correct option for objective questions and provide detailed answers for theory questions.',
    timeDuration: '60 minutes',
    subjectTeacher: 'Mr. Smith',
    objectives: [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['A. Berlin', 'B. Madrid', 'C. Paris', 'D. Rome'],
        answer: ''
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['A. Earth', 'B. Mars', 'C. Jupiter', 'D. Saturn'],
        answer: ''
      }
    ],
    theories: [
      {
        id: 1,
        question: 'Explain the process of photosynthesis.',
        answer: ''
      },
      {
        id: 2,
        question: 'Describe the water cycle.',
        answer: ''
      }
    ]
  });

  const handleObjectiveChange = (id: number, answer: string) => {
    setAssessments({
      ...assessments,
      objectives: assessments.objectives.map(obj =>
        obj.id === id ? { ...obj, answer } : obj
      )
    });
  };

  const handleTheoryChange = (id: number, answer: string) => {
    setAssessments({
      ...assessments,
      theories: assessments.theories.map(theory =>
        theory.id === id ? { ...theory, answer } : theory
      )
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Submitted assessments:', assessments);
    // Add logic to save the assessments
  };

  return (
    <div className="container mt-5">
      <h2>Student Exams</h2>
      <div className="mb-4">
        <p><strong>Subject:</strong> {assessments.subject}</p>
        <p><strong>Instructions:</strong> {assessments.instructions}</p>
        <p><strong>Time Duration:</strong> {assessments.timeDuration}</p>
        <p><strong>Subject Teacher:</strong> {assessments.subjectTeacher}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h3>Objectives</h3>
          {assessments.objectives.map((objective) => (
            <div key={objective.id} className="mb-3">
              <p><strong>{objective.question}</strong></p>
              {objective.options.map((option, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`objective${objective.id}`}
                    value={option}
                    checked={objective.answer === option}
                    onChange={(e) => handleObjectiveChange(objective.id, e.target.value)}
                  />
                  <label className="form-check-label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3>Theories</h3>
          {assessments.theories.map((theory) => (
            <div key={theory.id} className="mb-3">
              <p><strong>{theory.question}</strong></p>
              <textarea
                className="form-control"
                placeholder="Enter your answer here..."
                value={theory.answer}
                onChange={(e) => handleTheoryChange(theory.id, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">Submit All Assessments</button>
      </form>
    </div>
  );
};

export default StudentExams;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const StudentExams = () => {
//   const [assessments, setAssessments] = useState({
//     objectives: [
//       {
//         id: 1,
//         question: 'What is the capital of France?',
//         options: ['A. Berlin', 'B. Madrid', 'C. Paris', 'D. Rome'],
//         answer: ''
//       },
//       {
//         id: 2,
//         question: 'Which planet is known as the Red Planet?',
//         options: ['A. Earth', 'B. Mars', 'C. Jupiter', 'D. Saturn'],
//         answer: ''
//       }
//     ],
//     theories: [
//       {
//         id: 1,
//         question: 'Explain the process of photosynthesis.',
//         answer: ''
//       },
//       {
//         id: 2,
//         question: 'Describe the water cycle.',
//         answer: ''
//       }
//     ]
//   });

//   const handleObjectiveChange = (id: number, answer: string) => {
//     setAssessments({
//       ...assessments,
//       objectives: assessments.objectives.map(obj =>
//         obj.id === id ? { ...obj, answer } : obj
//       )
//     });
//   };

//   const handleTheoryChange = (id: number, answer: string) => {
//     setAssessments({
//       ...assessments,
//       theories: assessments.theories.map(theory =>
//         theory.id === id ? { ...theory, answer } : theory
//       )
//     });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log('Submitted assessments:', assessments);
//     // Add logic to save the assessments
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Student Assessments</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <h3>Objectives</h3>
//           {assessments.objectives.map((objective) => (
//             <div key={objective.id} className="mb-3">
//               <p><strong>{objective.question}</strong></p>
//               {objective.options.map((option, index) => (
//                 <div key={index} className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name={`objective${objective.id}`}
//                     value={option}
//                     checked={objective.answer === option}
//                     onChange={(e) => handleObjectiveChange(objective.id, e.target.value)}
//                   />
//                   <label className="form-check-label">
//                     {option}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div className="mb-4">
//           <h3>Theories</h3>
//           {assessments.theories.map((theory) => (
//             <div key={theory.id} className="mb-3">
//               <p><strong>{theory.question}</strong></p>
//               <textarea
//                 className="form-control"
//                 placeholder="Enter your answer here..."
//                 value={theory.answer}
//                 onChange={(e) => handleTheoryChange(theory.id, e.target.value)}
//               />
//             </div>
//           ))}
//         </div>
//         <button type="submit" className="btn btn-primary">Submit All Assessments</button>
//       </form>
//     </div>
//   );
// };

// export default StudentExams;