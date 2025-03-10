import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Activity = (props: any) => {
    const [questions, setQuestions] = useState({
        teacher: "",
        subject: "",
        class: "",
        term: "",
        year: "",
        type:"",
        objectives: [{ id: 1, text: '', options: ['A. ', 'B. ', 'C. ', 'D. '], answer: '' }],
        theories: [{ id: 1, text: '', answer: '' }]
    });

    const handleOtherChange = (evt: { target: { name: string, value: string } }) => {
        setQuestions({ ...questions, [evt.target.name]: evt.target.value });
    };

    const handleQuestionChange = (id: number, text: string) => {
        setQuestions({ ...questions, objectives: questions.objectives.map((q: any) => q.id === id ? { ...q, text } : q) });
    };

    const handleTheoryQuestionChange = (id: number, text: string) => {
        setQuestions({ ...questions, theories: questions.theories.map(q => q.id === id ? { ...q, text } : q) });
    };


    const handleTheoryAnswerChange = (id: number, answer: string) => {
        setQuestions({ ...questions, theories: questions.theories.map(q => q.id === id ? { ...q, answer } : q) });
    };

    const handleOptionChange = (questionId: number, optionIndex: number, value: string) => {
        setQuestions({
            ...questions, objectives: questions.objectives.map((q: any) => q.id === questionId ? { ...q, options: q.options.map((opt: any, idx: number) => idx === optionIndex ? value : opt) } : q
            )
        });
    };

    const handleAnswerChange = (questionId: number, optionIndex: number, value: string) => {
        setQuestions({ ...questions, objectives: questions.objectives.map((q) => q.id === questionId ? { ...q, options: q.options.map((opt, idx) => idx === optionIndex ? value : opt), answer: value } : q) });
    };

    const addQuestion = () => {
        setQuestions({ ...questions, objectives: [...questions.objectives, { id: questions.objectives.length + 1, text: '', options: ['A', 'B', 'C', 'D'], answer: '' }] });
    };

    const addOption = (questionId: number) => {
        setQuestions({ ...questions, objectives: questions.objectives.map((q: any) => q.id === questionId ? { ...q, options: [...q.options, ''] } : q) });
    };


    const addTheoryQuestion = () => {
        setQuestions({ ...questions, theories: [...questions.theories, { id: questions.theories.length + 1, text: '', answer: '' }] });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Submitted questions.questions:', questions);
    };

    return (
        <div className="container mt-5">
            <h2>{props.type} Questions</h2><br />
            <h3>Objectives</h3>
            <form onSubmit={handleSubmit}>
                <div className='row'>

                    <div className='col-md-3'>
                        <div className="mb-3">
                            <label className="form-label">Assessment Type</label>
                            <select name="type" id="type" className="form-control"  onChange={handleOtherChange} required>
                                <option value="">Select</option>
                                <option value="Examination">Examination</option>
                                <option value="Continous Assessment">Continous Assessment</option>
                                <option value="Assignment">Assignment</option>
                                <option value="Home Work">Home Work</option>
                                <option value="Class Work">Class Work</option>
                            </select>
                        </div>
                    </div> 

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
                {questions?.objectives.map((question: any) => (
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
                        {question.options.map((option: any, index: any) => (
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`question${question.id}Options`}
                                    id={`question${question.id}Option${index}`}
                                    value={option}
                                    onChange={(e) => handleAnswerChange(question.id, index, e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-control d-inline w-auto"
                                    placeholder={`Option ${index + 1}`}
                                    value={option}
                                    onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
                                />
                            </div>
                        ))}

                        {/* <button type="button" className="btn btn-secondary mt-2" onClick={() => addOption(question.id)}>Add Option</button> */}
                    </div>
                ))}
                <button type="button" className="btn btn-secondary mb-3" onClick={addQuestion}>Add Question</button><br /><br />

                <h3>Theory</h3>
                {questions.theories.map((question) => (
                    <div className="mb-3" key={question.id}>
                        <label htmlFor={`question${question.id}`} className="form-label">Question {question.id}</label>
                        <input
                            type="text"
                            className="form-control"
                            id={`question${question.id}`}
                            placeholder="Enter your question here"
                            value={question.text}
                            onChange={(e) => handleTheoryQuestionChange(question.id, e.target.value)}
                        />
                        <label htmlFor={`answer${question.id}`} className="form-label mt-2">Answer</label>
                        <input
                            type="text"
                            className="form-control"
                            id={`answer${question.id}`}
                            placeholder="Enter the answer here"
                            value={question.answer}
                            onChange={(e) => handleTheoryAnswerChange(question.id, e.target.value)}
                        />
                    </div>
                ))
                }

                <button type="button" className="btn btn-secondary mb-3" onClick={addTheoryQuestion}>Add Question</button><br />

                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Activity;


