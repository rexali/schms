'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ViewReport = (props: any) => {

    const mountRef = useRef(true);
    const [report, setReport] = useState({
        studentName: 'John Doe',
        class: '10A',
        admissionNumber: '12345',
        examinationNumber: '5234',
        term: 'Term 1',
        year: '2025',
        subjects: [
            { _id: "", id: 1, subject: 'Math', testScore: 85, examScore: 90, totalScore: 175, grade: 'A', remark: 'Excellent' },
            { _id: "", id: 2, subject: 'English', testScore: 78, examScore: 82, totalScore: 160, grade: 'B+', remark: 'Very Good' },
            { _id: "", id: 3, subject: 'Science', testScore: 88, examScore: 85, totalScore: 173, grade: 'A-', remark: 'Excellent' },
            { _id: "", id: 4, subject: 'History', testScore: 70, examScore: 75, totalScore: 145, grade: 'B', remark: 'Good' },
            { _id: "", id: 5, subject: 'Geography', testScore: 90, examScore: 92, totalScore: 182, grade: 'A', remark: 'Excellent' },
            { _id: "", id: 6, subject: 'Art', testScore: 75, examScore: 80, totalScore: 155, grade: 'B+', remark: 'Very Good' },
            { _id: "", id: 7, subject: 'Music', testScore: 85, examScore: 80, totalScore: 165, grade: 'A-', remark: 'Excellent' },
            { _id: "", id: 8, subject: 'Physical Education', testScore: 92, examScore: 90, totalScore: 182, grade: 'A', remark: 'Excellent' },
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

        teacherComments: 'John has shown excellent performance this term. Keep up the good work!',
        principalComments: 'Keep it up',
        classTeacher: 'Mr. Smith',
        principal: 'Ms. Johnson'
    });

    const getAllTotal = () => report.subjects.map(subject => subject.testScore + subject.examScore).reduce((prev, cur) => (prev + cur),0);

    const getTotalScore = (id: number) => report.subjects.map((student, i) => student.id === id ? Number(student.testScore) + Number(student.examScore) : 0)[0];

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
    const getReportData = useCallback(async () => {
        const reportResponse = await fetch('/api/reports/' + props.reportId).then(res => res.json());
        console.log(reportResponse);
        if (reportResponse.status === 'success') {
            setReport(reportResponse.data.report);
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
            <h2 className="d-flex justify-content-between">View Report <button className='btn btn-success' onClick={() => props.setView(false)}>close</button></h2>

            <div className="row mt-4">
                <div className="col-md-6">
                    <p><strong>Student Name:</strong> {report.studentName}</p>
                    <p><strong>Class:</strong> {report.class}</p>
                    <p><strong>Admission Number:</strong> {report.admissionNumber}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Term:</strong> {report.term}</p>
                    <p><strong>Year:</strong> {report.year}</p>
                    <p><strong>Examination Number:</strong> {report.examinationNumber}</p>
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
                        {report.subjects.map((subject, index) => (
                            <tr key={index}>
                                <td>{subject.subject}</td>
                                <td>{subject.testScore}</td>
                                <td>{subject.examScore}</td>
                                <td>{subject.testScore+subject.examScore}</td>
                                <td>{getGrade(subject.id)}</td>
                                <td>{getRemark(subject.id)}</td>
                            </tr>
                        ))}
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total</th>
                            <th>{getAllTotal()}</th>
                            <th></th>
                            <th></th>
                        </tr>
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
                        {Object.entries(report.cognitive).filter(([skill, rating], index) => skill !== "_id").map(([skill, rating], index) => (
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
                        {Object.entries(report.psychomotor).filter(([skill, rating], index) => skill !== "_id").map(([skill, rating], index) => (
                            <tr key={index}>
                                <td>{skill.charAt(0).toUpperCase() + skill.slice(1)}</td>
                                <td>{rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <p><strong>Teacher comment:</strong></p>
                    <p>{report.teacherComments}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Principal comment:</strong></p>
                    <p>{report.principalComments}</p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <p><strong>Class Teacher:</strong> {report.classTeacher}</p>
                </div>
                <div className="col-md-6 text-start">
                    <p><strong>Principal:</strong> {report.principal}</p>
                </div>
            </div>

        </div>
    );
};

export default ViewReport;
