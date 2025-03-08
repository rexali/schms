import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TheoryQuestionsForm = () => {
  const [questions, setQuestions] = useState({
    teacher: "",
    subject: "",
    class: "",
    term: "",
    year: "",
    questions: [{ id: 1, text: '', answer: '' }]
  });

  const handleOtherChange = (ev: any) => {
    setQuestions({ ...questions, [ev.target.name]: ev.target.value });
  };
  const handleQuestionChange = (id: number, text: string) => {
    setQuestions({ ...questions, questions: questions.questions.map(q => q.id === id ? { ...q, text } : q) });
  };

  const handleAnswerChange = (id: number, answer: string) => {
    setQuestions({ ...questions, questions: questions.questions.map(q => q.id === id ? { ...q, answer } : q) });
  };

  const addQuestion = () => {
    setQuestions({ ...questions, questions: [...questions.questions, { id: questions.questions.length + 1, text: '', answer: '' }] });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Submitted questions:', questions);
  };

  return (
    <div className="container mt-5">
      <h2>Assessment Questions</h2>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-3'>
            <div className="mb-3">
              <label className="form-label">Subject </label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={questions.subject}
                onChange={handleOtherChange}
                required
              />
            </div>
          </div>
          <div className='col-md-3'>
            <div className="mb-3">
              <label className="form-label">Class</label>
              <input
                type="text"
                className="form-control"
                name="class"
                value={questions.class}
                onChange={handleOtherChange}
                required
              />
            </div>
          </div>
          <div className='col-md-2'>

            <div className="mb-3">
              <label className="form-label">Teacher</label>
              <input
                type="text"
                className="form-control"
                name="teacher"
                value={questions.teacher}
                onChange={(e) => handleOtherChange(e)}
                required
              />
            </div>
          </div>
          <div className='col-md-2'>

            <div className="mb-3">
              <label className="form-label">Term</label>
              <input
                type="text"
                className="form-control"
                name="term"
                value={questions.term}
                onChange={handleOtherChange}
                required
              />
            </div>
          </div>
          <div className='col-md-2'>

            <div className="mb-3">
              <label className="form-label">Year</label>
              <input
                type="text"
                className="form-control"
                name="year"
                value={questions.year}
                onChange={handleOtherChange}
                required
              />
            </div>
          </div>
        </div>
        {questions.questions.map((question) => (
          <div className="mb-3" key={question.id}>
            <label htmlFor={`question${question.id}`} className="form-label">Question {question.id}</label>
            <input
              type="text"
              className="form-control"
              id={`question${question.id}`}
              placeholder="Enter your question here"
              value={question.text}
              onChange={(e) => handleQuestionChange(question.id, e.target.value)}
            />
            <label htmlFor={`answer${question.id}`} className="form-label mt-2">Answer</label>
            <input
              type="text"
              className="form-control"
              id={`answer${question.id}`}
              placeholder="Enter the answer here"
              value={question.answer}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            />
          </div>
        ))}
        <button type="button" className="btn btn-secondary mb-3" onClick={addQuestion}>Add Question</button><br />
        <div className='text-center'>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TheoryQuestionsForm;



