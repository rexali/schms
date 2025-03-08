import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditReport = () => {
    const [studentReport, setStudentReport] = useState({
        studentName: '',
        class: '',
        admissionNumber: '',
        term: '',
        year: '',
        subjects: [
            { name: '', testScore: '', examScore: '', totalScore: '', grade: '', remark: '' },
        ],
        cognitive: {
            attention: '',
            memory: '',
            problemSolving: ''
        },
        psychomotor: {
            coordination: '',
            dexterity: '',
            reactionTime: ''
        },
        teacherComments: '',
        principalComments: '',
        classTeacher: '',
        principal: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        if (name === 'attention' || name === 'memory' || name === 'problemSolving') {
            setStudentReport({
                ...studentReport,
                cognitive: { ...studentReport.cognitive, [name]: value }
            });
            return;
        }
        if (name === 'coordination' || name === 'dexterity' || name === 'reactionTime') {
            setStudentReport({
                ...studentReport,
                psychomotor: { ...studentReport.psychomotor, [name]: value }
            });
            return;
        }
        setStudentReport({ ...studentReport, [name]: value });
    };

    const handleSubjectChange = (index: any, e: any) => {
        const { name, value } = e.target;
        const subjects = [...studentReport.subjects] as any;
        subjects[index][name] = value;
        setStudentReport({ ...studentReport, subjects });
    };

    const addSubject = () => {
        setStudentReport({
            ...studentReport,
            subjects: [...studentReport.subjects, { name: '', testScore: '', examScore: '', totalScore: '', grade: '', remark: '' }]
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Submitted student report:', studentReport);
        // Add logic to save the student report
    };

    return (
        <div className="container mt-5">
            <h2>Add Student Report</h2>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="mb-3">
                            <label className="form-label">Student Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="studentName"
                                value={studentReport.studentName}
                                onChange={handleChange}
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
                                value={studentReport.class}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-2'>

                        <div className="mb-3">
                            <label className="form-label">Admission No.</label>
                            <input
                                type="text"
                                className="form-control"
                                name="admissionNumber"
                                value={studentReport.admissionNumber}
                                onChange={handleChange}
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
                                value={studentReport.term}
                                onChange={handleChange}
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
                                value={studentReport.year}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Subjects</label>
                    {studentReport.subjects.map((subject, index) => (
                        <div key={index} className="mb-3">
                            <div className='row'>

                                <div className='col-md-2'>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="name"
                                        placeholder="Subject Name"
                                        value={subject.name}
                                        onChange={(e) => handleSubjectChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className='col-md-2'>

                                    <input
                                        type="number"
                                        className="form-control mb-2"
                                        name="testScore"
                                        placeholder="Test Score"
                                        value={subject.testScore}
                                        onChange={(e) => handleSubjectChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className='col-md-2'>

                                    <input
                                        type="number"
                                        className="form-control mb-2"
                                        name="examScore"
                                        placeholder="Exam Score"
                                        value={subject.examScore}
                                        onChange={(e) => handleSubjectChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className='col-md-2'>

                                    <input
                                        type="number"
                                        className="form-control mb-2"
                                        name="totalScore"
                                        placeholder="Total Score"
                                        value={subject.totalScore}
                                        onChange={(e) => handleSubjectChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className='col-md-2'>

                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="grade"
                                        placeholder="Grade"
                                        value={subject.grade}
                                        onChange={(e) => handleSubjectChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className='col-md-2'>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="remark"
                                        placeholder="Remark"
                                        value={subject.remark}
                                        onChange={(e) => handleSubjectChange(index, e)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='text-center'>
                        <button type="button" className="btn btn-secondary" onClick={addSubject}>Add Subject</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Cognitive Skills</label>
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="attention"
                                placeholder="Attention"
                                value={studentReport.cognitive.attention}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="memory"
                                placeholder="Memory"
                                value={studentReport.cognitive.memory}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="problemSolving"
                                placeholder="Problem Solving"
                                value={studentReport.cognitive.problemSolving}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <div className="mb-3">
                            <label className="form-label">Psychomotor Skills</label>
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="coordination"
                                placeholder="Coordination"
                                value={studentReport.psychomotor.coordination}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="dexterity"
                                placeholder="Dexterity"
                                value={studentReport.psychomotor.dexterity}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="reactionTime"
                                placeholder="Reaction Time"
                                value={studentReport.psychomotor.reactionTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Teacher Comments</label>
                            <textarea
                                className="form-control"
                                name="comments"
                                value={studentReport.teacherComments}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Principal Comments</label>
                            <textarea
                                className="form-control"
                                name="comments"
                                value={studentReport.principalComments}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Class Teacher</label>
                            <input
                                type="text"
                                className="form-control"
                                name="classTeacher"
                                value={studentReport.classTeacher}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Principal</label>
                            <input
                                type="text"
                                className="form-control"
                                name="principal"
                                value={studentReport.principal}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Submit Report</button>
                </div><br/>
            </form>
        </div>
    );
};

export default EditReport;