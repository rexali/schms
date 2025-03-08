

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DynamicQuestionsForm = () => {
//     const [questions.questions, setQuestions] = useState([
//         { id: 1, text: '', options: ['A', 'B', 'C', 'D'], answer: '' },
//     ]);

//     const handleQuestionChange = (id: number, text: string) => {
//         setQuestions(questions.questions.map(q => q.id === id ? { ...q, text } : q));
//     };

//     const handleOptionChange = (questionId: number, optionIndex: number, value: string) => {
//         setQuestions(questions.questions.map(q =>
//             q.id === questionId
//                 ? { ...q, options: q.options.map((opt, idx) => idx === optionIndex ? value : opt) }
//                 : q
//         ));
//     };

//     const handleAnswerChange = (questionId: number, optionIndex: number, value: string) => {
//         setQuestions(questions.questions.map(q =>
//             q.id === questionId
//                 ? { ...q, options: q.options.map((opt, idx) => idx === optionIndex ? value : opt), answer: value }
//                 : q
//         ));
//     };

//     const addQuestion = () => {
//         setQuestions([...questions.questions, { id: questions.questions.length + 1, text: '', options: ['A', 'B', 'C', 'D'], answer: '' }]);
//     };

//     const addOption = (questionId: number) => {
//         setQuestions(questions.questions.map(q =>
//             q.id === questionId
//                 ? { ...q, options: [...q.options, ''] }
//                 : q
//         ));
//     };

//     const handleSubmit = (event: { preventDefault: () => void; }) => {
//         event.preventDefault();
//         console.log('Submitted questions.questions:', questions.questions);
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Examination Questions</h2>
//             <form onSubmit={handleSubmit}>
//                 {questions.questions.map((question) => (
//                     <div className="mb-3" key={question.id}>
//                         <label htmlFor={`question${question.id}`} className="form-label">Question {question.id}</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id={`question${question.id}`}
//                             placeholder="Enter your question here"
//                             value={question.text}
//                             onChange={(e) => handleQuestionChange(question.id, e.target.value)}
//                         />
//                         {question.options.map((option, index) => (
//                             <div className="form-check" key={index}>
//                                 <input
//                                     className="form-check-input"
//                                     type="radio"
//                                     name={`question${question.id}Options`}
//                                     id={`question${question.id}Option${index}`}
//                                     value={option}
//                                     onChange={(e) => handleAnswerChange(question.id, index, e.target.value)}
//                                 />
//                                 <input
//                                     type="text"
//                                     className="form-control d-inline w-auto"
//                                     placeholder={`Option ${index + 1}`}
//                                     value={option}
//                                     onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
//                                 />
//                             </div>
//                         ))}
//                         <button type="button" className="btn btn-secondary mt-2" onClick={() => addOption(question.id)}>Add Option</button>
//                     </div>
//                 ))}
//                 <button type="button" className="btn btn-secondary mb-3" onClick={addQuestion}>Add Question</button><br />
//                 <div className='text-center'>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default DynamicQuestionsForm;




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const QuestionsForm = () => {
//   const [questions, setQuestions] = useState([{ id: 1, text: '', answer: '' }]);

//   const handleQuestionChange = (id: number, text: string) => {
//     setQuestions(questions.map(q => q.id === id ? { ...q, text } : q));
//   };

//   const handleAnswerChange = (id: number, answer: string) => {
//     setQuestions(questions.map(q => q.id === id ? { ...q, answer } : q));
//   };

//   const addQuestion = () => {
//     setQuestions([...questions, { id: questions.length + 1, text: '', answer: '' }]);
//   };

//   const handleSubmit = (event: { preventDefault: () => void; }) => {
//     event.preventDefault();
//     console.log('Submitted questions:', questions);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Assessment Questions</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='row'>
//           <div className='col-md-3'>
//             <div className="mb-3">
//               <label className="form-label">Subject</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="studentName"
//                 // value={studentReport.studentName}
//                 // onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className='col-md-3'>
//             <div className="mb-3">
//               <label className="form-label">Class</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="class"
//                 // value={studentReport.class}
//                 // onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className='col-md-2'>

//             <div className="mb-3">
//               <label className="form-label">Teacher</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="admissionNumber"
//                 // value={studentReport.admissionNumber}
//                 // onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className='col-md-2'>

//             <div className="mb-3">
//               <label className="form-label">Term</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="term"
//                 // value={studentReport.term}
//                 // onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className='col-md-2'>

//             <div className="mb-3">
//               <label className="form-label">Year</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="year"
//                 // value={studentReport.year}
//                 // onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         {questions.map((question) => (
//           <div className="mb-3" key={question.id}>
//             <label htmlFor={`question${question.id}`} className="form-label">Question {question.id}</label>
//             <input
//               type="text"
//               className="form-control"
//               id={`question${question.id}`}
//               placeholder="Enter your question here"
//               value={question.text}
//               onChange={(e) => handleQuestionChange(question.id, e.target.value)}
//             />
//             <label htmlFor={`answer${question.id}`} className="form-label mt-2">Answer</label>
//             <input
//               type="text"
//               className="form-control"
//               id={`answer${question.id}`}
//               placeholder="Enter the answer here"
//               value={question.answer}
//               onChange={(e) => handleAnswerChange(question.id, e.target.value)}
//             />
//           </div>
//         ))}
//         <button type="button" className="btn btn-secondary mb-3" onClick={addQuestion}>Add Question</button><br />
//         <div className='text-center'>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default QuestionsForm;
