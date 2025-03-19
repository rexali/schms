'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditReport = (props: any) => {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const mountRef = useRef(true);
    const [status, setStatus] = useState('')
    
    const [studentReport, setStudentReport] = useState({
        studentName: '',
        class: '',
        admissionNumber: '',
        examinationNumber: '',
        term: '',
        year: '',
        subjects: [
            {_id:'', id: 1, subject: '', testScore: '', examScore: '', totalScore: '', position: '', grade: '', remark: '' },
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
            subjects: [...studentReport.subjects, {_id:"", id: studentReport.subjects.length + 1, subject: '', testScore: '', examScore: '', totalScore: '', position: '', grade: '', remark: '' }]
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

    const addReport = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        let finalReport = { ...studentReport}
        console.log('Submitted report:', finalReport);
        const reportResponse = await fetch('/api/reports/' + props.reportId, {
            mode: 'cors',
            method: "PATCH",
            body: JSON.stringify({ ...finalReport })
        }).then(res => res.json());
        if (reportResponse.status === 'success') {
            setStatus(reportResponse.status)
        } else {
            setStatus(reportResponse.status + ": " + reportResponse.message)
        }
    };


    const getReportData = useCallback(async () => {
        const reportResponse = await fetch('/api/reports/' + props.reportId).then(res => res.json());
        console.log(reportResponse);
        if (reportResponse.status === 'success') {
            setStudentReport(reportResponse.data.report);
        } else {
            // setStudentReport([{}]);
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getReportData();
        }

        return () => {
            mountRef.current = false;
        }
    }, []);



    return (
        <div className="container mt-5">
            <h2 className='d-flex justify-content-between'>Edit Report <button className='btn btn-success' onClick={() => props.setEdit(false)}>close</button></h2>
            <form onSubmit={addReport}>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="studentName"
                                defaultValue={studentReport?.studentName}
                                onChange={handleChange}
                            />
                            <label className="form-label">Student Name</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="class"
                                defaultValue={studentReport?.class}
                                onChange={handleChange}

                            />
                            <label className="form-label">Class</label>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="admissionNumber"
                                defaultValue={studentReport?.admissionNumber}
                                onChange={handleChange}

                            />
                            <label className="form-label">Admission No.</label>
                        </div>
                    </div>

                    <div className='col-md-3'>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="examinationNumber"
                                defaultValue={studentReport?.examinationNumber}
                                onChange={handleChange}

                            />
                            <label className="form-label">Examination No.</label>
                        </div>
                    </div>

                    <div className='col-md-3'>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="term"
                                defaultValue={studentReport?.term}
                                onChange={handleChange}

                            />
                            <label className="form-label">Term</label>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="year"
                                defaultValue={studentReport?.year}
                                onChange={handleChange}

                            />
                            <label className="form-label">Year</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="form-label">SUBJECTS</label>
                    {studentReport?.subjects?.map((subject, index) => (
                        <div key={subject._id} className="mb-3">
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="subject"
                                            id={'subject' + subject.id}
                                            placeholder="Subject"
                                            defaultValue={subject?.subject}
                                            onChange={(e) => handleSubjectChange(subject.id, e)}
                                        />
                                        <label className="form-label">Subject</label>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="testScore"
                                            id={'testScore' + subject.id}
                                            placeholder="score"
                                            defaultValue={subject?.testScore}
                                            onChange={(e) => handleSubjectChange(subject.id, e)}
                                        />
                                        <label className="form-label">Test</label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="examScore"
                                            id={'examScore' + subject.id}
                                            placeholder="score"
                                            defaultValue={subject?.examScore}
                                            onChange={(e) => handleSubjectChange(subject.id, e)}

                                        />
                                        <label className="form-label">Exams</label>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="totalScore"
                                            // placeholder="total"
                                            id={'totalScore' + subject.id}
                                            // disabled
                                            defaultValue={Number(subject?.testScore) + Number(subject?.examScore)}
                                            onChange={(e) => handleSubjectChange(subject.id, e)}
                                        />
                                        <label className="form-label">Total</label>
                                    </div>
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
                                        defaultValue={subject.position}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}

                                    />
                                </div> */}
                                {/* <div className='col-md-1'>
                                    <label className="form-label">Grade</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="grade"
                                        placeholder="Grade"
                                        id={'grade' + subject.id}
                                        defaultdefaultValue={getGrade(subject.id)}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}
                                        hidden

                                    />
                                </div> */}
                                {/* <div className='col-md-2'>
                                    <label className="form-label">Remark</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="remark"
                                        id={'remark' + subject.id}
                                        placeholder="Remark"
                                        defaultdefaultValue={getRemark(subject.id)}
                                        onChange={(e) => handleSubjectChange(subject.id, e)}
                                        hidden
                                    />
                                </div> */}
                                <div className='col-md-1'>
                                    <input
                                        type="button"
                                        defaultValue={'X'}
                                        className="btn btn-primary form-control mt-2"
                                        onClick={() => removeSubject(index)}
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
                        <label className="form-label">Cognitive Skills</label>
                        <div className="form-floating mb-3">

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="attention"
                                    placeholder="Attention"
                                    defaultValue={studentReport?.cognitive?.attention}
                                    onChange={handleChange}
                                />
                                <label className="form-label">Attention</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="memory"
                                    placeholder="Memory"
                                    defaultValue={studentReport?.cognitive?.memory}
                                    onChange={handleChange}
                                />
                                <label className="form-label">Memory</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="problemSolving"
                                    placeholder="Problem Solving"
                                    defaultValue={studentReport?.cognitive?.problemSolving}
                                    onChange={handleChange}
                                />
                                <label className="form-label">Problem solving</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <label className="form-label">Psychomotor Skills</label>

                        <div className="form-floating mb-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="coordination"
                                    placeholder="Coordination"
                                    defaultValue={studentReport?.psychomotor?.coordination}
                                    onChange={handleChange}

                                />
                                <label className="form-label">Coordination</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="dexterity"
                                    placeholder="Dexterity"
                                    defaultValue={studentReport?.psychomotor?.dexterity}
                                    onChange={handleChange}

                                />
                                <label className="form-label">Dexterity</label>

                            </div>
                            <div className="form-floating mb-3">

                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="reactionTime"
                                    placeholder="Reaction Time"
                                    defaultValue={studentReport?.psychomotor?.reactionTime}
                                    onChange={handleChange}
                                />
                                <label className="form-label">Reaction time</label>

                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                name="teacherComments"
                                defaultValue={studentReport?.teacherComments}
                                onChange={handleChange}
                            />
                            <label className="form-label">Teacher Comments</label>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                name="principalComments"
                                defaultValue={studentReport?.principalComments}
                                onChange={handleChange}

                            />
                            <label className="form-label">Principal Comments</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="classTeacher"
                                defaultValue={studentReport?.classTeacher}
                                onChange={handleChange}

                            />
                            <label className="form-label">Class Teacher</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="principal"
                                defaultValue={studentReport?.principal}
                                onChange={handleChange}

                            />
                            <label className="form-label">Principal</label>
                        </div>
                    </div>
                </div>
                <p className='text-center text-success'>{status}</p>

                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Update Report</button>
                </div><br />
            </form>
        </div>
    );
};

export default EditReport;
