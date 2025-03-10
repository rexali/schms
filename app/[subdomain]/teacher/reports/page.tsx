'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Subject } from '@mui/icons-material';
import test from 'node:test';

const AddReport = () => {
    const [total, setTotal]=useState(0)
    const [studentReport, setStudentReport] = useState({
        studentName: '',
        class: '',
        admissionNumber: '',
        examinationNumber: '',
        term: '',
        year: '',
        subjects: [
            { id: 1, subject: '', testScore: '', examScore: '', totalScore: '', position: '', grade: '', remark: '' },
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

        setStudentReport(c => ({ ...c, subjects: c.subjects.map(subject => subject.id === Number(index) ? { ...subject, [name]: value } : { ...subject }) }));
    };

    const addSubject = () => {
        setStudentReport({
            ...studentReport,
            subjects: [...studentReport.subjects, { id: studentReport.subjects.length + 1, subject: '', testScore: '', examScore: '', totalScore: '', position: '', grade: '', remark: '' }]
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Submitted student report:', studentReport);
        // Add logic to save the student report
    };

    function removeSubject(index: number): void {
        setStudentReport({ ...studentReport, subjects: [...studentReport.subjects.filter((subject, i) => i !== index)] })
    }

    const getTotalScore = (id: number) => studentReport.subjects.map((student, i) => student.id === id ? Number(student.testScore) + Number(student.examScore) : 0)[0];

    const getRemark = (id: number) => {
        if (getTotalScore(id) < 40) {
            return 'Fail'
        } else if (getTotalScore(id) >= 40 && getTotalScore(id) <= 49) {
            return 'Pass'
        } else if (getTotalScore(id) >= 50 && getTotalScore(id) <= 59) {
            return 'Average'
        } else if (getTotalScore(id) >= 60 && getTotalScore(id) <= 69) {
            return 'Above Average'
        } else if (getTotalScore(id) >= 70 && getTotalScore(id) <= 79) {
            return 'Good'
        } else if (getTotalScore(id) >= 80 && getTotalScore(id) <= 89) {
            return 'Very Good'
        } else if (getTotalScore(id) >= 90 && getTotalScore(id) <= 109) {
            return 'Excellent'
        }

    }

    const getGrade = (id: number) => {
        if (getTotalScore(id) < 40) {
            return 'F'
        } else if (getTotalScore(id) >= 40 && getTotalScore(id) <= 49) {
            return 'P'
        } else if (getTotalScore(id) >= 50 && getTotalScore(id) <= 59) {
            return 'C'
        } else if (getTotalScore(id) >= 60 && getTotalScore(id) <= 69) {
            return 'C'
        } else if (getTotalScore(id) >= 70 && getTotalScore(id) <= 79) {
            return 'B'
        } else if (getTotalScore(id) >= 80 && getTotalScore(id) <= 89) {
            return 'A'
        } else if (getTotalScore(id) >= 90 && getTotalScore(id) <= 109) {
            return 'A'
        }

    }

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

                            />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="mb-3">
                            <label className="form-label">Class</label>
                            <input
                                type="text"
                                className="form-control"
                                name="class"
                                value={studentReport.class}
                                onChange={handleChange}

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

                            />
                        </div>
                    </div>

                    <div className='col-md-2'>

                        <div className="mb-3">
                            <label className="form-label">Examination No.</label>
                            <input
                                type="text"
                                className="form-control"
                                name="examinationNumber"
                                value={studentReport.examinationNumber}
                                onChange={handleChange}

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

                            />
                        </div>
                    </div>
                    <div className='col-md-1'>

                        <div className="mb-3">
                            <label className="form-label">Year</label>
                            <input
                                type="text"
                                className="form-control"
                                name="year"
                                value={studentReport.year}
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="form-label">SUBJECTS</label>
                    {studentReport.subjects.map((subject, index) => (

                        <div key={subject.id} className="mb-3">
                            <div className='row'>

                                <div className='col-md-2'>
                                    <label className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="subject"
                                        id={'subject' + subject.id}
                                        placeholder="Subject"
                                        value={subject.subject}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}

                                    />
                                </div>
                                <div className='col-md-1'>
                                    <label className="form-label">Test</label>

                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="testScore"
                                        id={'testScore' + subject.id}
                                        placeholder="score"
                                        value={subject.testScore}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}

                                    />
                                </div>
                                <div className='col-md-2'>
                                    <label className="form-label">Exams</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="examScore"
                                        id={'examScore' + subject.id}
                                        placeholder="score"
                                        value={subject.examScore}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}

                                    />
                                </div>
                                <div className='col-md-2'>
                                    <label className="form-label">Total</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="totalScore"
                                        placeholder="total"
                                        id={'totalScore' + subject.id}
                                        disabled
                                        value={Number(subject.testScore)+Number(subject.examScore)}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}
                                    />
                                </div>
                                {/* <div className='col-md-1'>
                                    <label className="form-label">Position</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="position"
                                        placeholder='12th'
                                        disabled
                                        hidden
                                        id={'position' + subject.id}
                                        value={subject.position}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}

                                    />
                                </div> */}
                                <div className='col-md-1'>
                                    <label className="form-label">Grade</label>

                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="grade"
                                        placeholder="Grade"
                                        id={'grade' + subject.id}
                                        defaultValue={getGrade(subject.id)}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}

                                    />
                                </div>
                                <div className='col-md-2'>
                                    <label className="form-label">Remark</label>

                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="remark"
                                        id={'remark' + subject.id}
                                        placeholder="Remark"
                                        defaultValue={getRemark(subject.id)}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}

                                    />
                                </div>
                                <div className='col-md-1'>
                                    <label className="form-label">...</label>
                                    <input
                                        type="button"
                                        value={'X'}
                                        className="btn btn-primary form-control mb-2"
                                        onClick={() => removeSubject(index)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='text-center'>
                        <button type="button" className="btn btn-secondary" onClick={addSubject}>Add More Subject</button>
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

                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="memory"
                                placeholder="Memory"
                                value={studentReport.cognitive.memory}
                                onChange={handleChange}

                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="problemSolving"
                                placeholder="Problem Solving"
                                value={studentReport.cognitive.problemSolving}
                                onChange={handleChange}

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

                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="dexterity"
                                placeholder="Dexterity"
                                value={studentReport.psychomotor.dexterity}
                                onChange={handleChange}

                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="reactionTime"
                                placeholder="Reaction Time"
                                value={studentReport.psychomotor.reactionTime}
                                onChange={handleChange}

                            />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Teacher Comments</label>
                            <textarea
                                className="form-control"
                                name="teacherComments"
                                value={studentReport.teacherComments}
                                onChange={handleChange}

                            />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Principal Comments</label>
                            <textarea
                                className="form-control"
                                name="principalComments"
                                value={studentReport.principalComments}
                                onChange={handleChange}

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

                            />
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Submit Report</button>
                </div><br />
            </form>
        </div>
    );
};

export default AddReport;



// 'use client';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
// import ViewAttendancePage from '../attendance/ViewAttendance';

// export default function ViewAttendance(props: any) {



//     return (
//         <><ViewAttendancePage /><form className='w-100 m-auto' onSubmit={() => { } }>

//             <h2 className="h3 mb-3 fw-normal bg-light p-2">Add assessment data</h2>

//             <div className='row'>
//                 <div className='col-md-3'>
//                     <div className="form-floatin">
//                         <label htmlFor="name">Student name</label>
//                         <input type="text" name='name' className="form-control" id="topic" autoComplete='questions' />
//                     </div>
//                 </div>

//                 <div className='col-md-3'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">Select class</label>
//                         <select className="form-control" name='class' id='class' >
//                             <option value=""></option>
//                             <option value="1A">1A</option>
//                             <option value="2A">2A</option>
//                             <option value="3A">3A</option>
//                             <option value="4A">4A</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className='col-md-3'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">Select subject</label>
//                         <select className="form-control" name='subject' id='subject' >
//                             <option value=""></option>
//                             <option value="Maths">Maths</option>
//                             <option value="English">English</option>
//                             <option value="Civic Education">Civic Education</option>
//                             <option value="Social Studies">Social Studies</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className='col-md-3'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">Exams No.</label>
//                         <input type="text" name='examsNo' className="form-control" id="examsNo" autoComplete='questions'  />
//                     </div>
//                 </div>

//             </div>

//             <div className='row'>

//                 <div className='col-md-2'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">C. A.</label>
//                         <input type="number" name='ca' className="form-control" id="ca" autoComplete='questions'  />
//                     </div>
//                 </div>
//                 <div className='col-md-2'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">Exams</label>
//                         <input type="number" name='exams' className="form-control" id="exams" autoComplete='questions'  />
//                     </div>
//                 </div>
//                 <div className='col-md-2'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">Total</label>
//                         <input type="number" name='total' className="form-control" id="total" autoComplete='questions'  />
//                     </div>
//                 </div>
//                 <div className='col-md-2'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">Grade</label>
//                         <input type="text" name='grade' className="form-control" id="grade" autoComplete='questions'  />
//                     </div>
//                 </div>
//                 <div className='col-md-4'>
//                     <div className="form-floatin">
//                         <label htmlFor="topic">Remark</label>
//                         <input type="text" name='remark' className="form-control" id="remark" autoComplete='questions'  />
//                     </div>
//                 </div>

//             </div>
//             <div className='text-center'>
//                 <button className="btn btn-primary w-25 py-2 my-2" type="submit">Submit</button>
//             </div>
//         </form></>
//     )
// }