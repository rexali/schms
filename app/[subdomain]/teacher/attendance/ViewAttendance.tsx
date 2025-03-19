'use client';

import React, { useActionState, useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAttendance = (props: any) => {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const mountRef = useRef(true);
    const [status, setStatus] = useState('')
    const [terms] = useState(['FIRST', 'SECOND', 'THIRD']);
    const [weeks] = useState(['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5', 'WEEK 6', 'WEEK 7', 'WEEK 8', 'WEEK 9', 'WEEK 10', 'WEEK 11', 'WEEK 12']);
    const [dayx] = useState(['MON', 'TUE', 'WED', 'THU', 'FRI']);
    const [attendance, setAttendance] = useState({
        class: '',
        teacher: '',
        session: "",
        term: "",
        date: '',
        week: "",
        day: "",
        students: [
            { id: 1, name: 'John Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
            { id: 2, name: 'Jane Doe', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
            { id: 3, name: 'Alice Brown', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
            { id: 4, name: 'Bob Smith', attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']] },
            // Add more attendance here
        ]
    });

    const handleAttendanceChange = (studentId: number, dayIndex: number, sessionIndex: number, value: string) => {
        setAttendance({
            ...attendance, students: attendance.students.map(student =>
                student.id === studentId
                    ? { ...student, attendance: student.attendance.map((att, index) => index === dayIndex ? att.map((sess, sessIndex) => sessIndex === sessionIndex ? value : sess) : att) }
                    : student
            )
        });
    };


    function addOtherAttendance(event: { target: { name: string, value: string } }): void {
        setAttendance({ ...attendance, [event.target.name]: event.target.value })
    }

    function addNewStudent() {
        let studentName = prompt("\n\n Enter student name", 'Said Bello') as string;
        if (studentName) {
            setAttendance({
                ...attendance,
                students: [...attendance.students, {
                    id: attendance.students.length + 1,
                    name: studentName,
                    attendance: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
                }]
            })
        }
    }

    const calculateWeeklyTotal = (attendance: string[][]) => {

        return attendance.flat().filter((att: string) => att === 'P').length;
    };

    const calculateDailyTotal = (dayIndex: number, sessionIndex: number) => {

        return attendance.students.filter(student => student.attendance[dayIndex][sessionIndex] === 'P').length;
    };

    const calculateTotalAttendance = (sessionIndex: number) => {

        return attendance.students.reduce((total, student) => total + student.attendance.filter(att => att[sessionIndex] === 'P').length, 0);
    };

    const calculatePercentage = (total: number, count: number) => {

        return ((total / (count * 2 * 5)) * 100).toFixed(2);
    };

    function removeStudent(index: number): void {
        setAttendance({
            ...attendance,
            students: [...attendance.students.filter((student, i) => i !== index)]
        })
    }

    const getAttendanceData = useCallback(async () => {

        const attendanceResponse = await fetch("/api/attendance/" + props.attendanceId).then(res => res.json());
        if (attendanceResponse.status === 'success') {
            setAttendance(attendanceResponse.data.attendance)
            // setStatus(attendanceResponse.status + ": " + attendanceResponse.message)
        } else {
            setStatus(attendanceResponse.status + ": " + attendanceResponse.message)
        }
        console.log(attendanceResponse);
        // Add logic to save the attendance and totalAttendance data
    }, []);

    useEffect(() => {
        if (mountRef.current) {
            getAttendanceData();
        }
        return () => {
            mountRef.current = false;
        }
    }, []);

    return (
        <div className="container mt-5">
            <h2 className='d-flex justify-content-between'>View weekly attendance <button className='btn btn-success' onClick={() => props.setView(false)}>close</button></h2><br />
            <form>
                <div className='row'>


                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="text" name='teacher' defaultValue={attendance.teacher} onChange={addOtherAttendance} className="form-control" id="teacher" autoComplete='questions' />
                            <label htmlFor="teacher">Teacher</label>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="text" name='class' defaultValue={attendance.class} onChange={addOtherAttendance} className="form-control" id="teacher" autoComplete='questions' />
                            <label htmlFor="class">Class</label>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="date" name='date' defaultValue={attendance.date.split('T')[0]} onChange={addOtherAttendance} className="form-control" id="date" autoComplete='questions' />
                            <label htmlFor="date">Date</label>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type='month' name='session' defaultValue={attendance.session} onChange={addOtherAttendance} className="form-control" id="year" autoComplete='questions' />
                            <label htmlFor="session">Session</label>

                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <select className="form-control" value={attendance.term} onChange={addOtherAttendance} name='term' id='term' >
                                <option key={'start9'} value="">Select</option>
                                {
                                    terms.map((term, index) => <option key={index} value={`${term}`}>{term}</option>)
                                }
                            </select>
                            <label htmlFor="term">Term</label>

                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <select className="form-control" value={attendance.week} onChange={addOtherAttendance} name='week' id='week' >
                                <option key={'start10'} value="">Select</option>
                                {
                                    weeks.map((week, index) => <option key={index} value={`${week}`}>{week}</option>)
                                }
                            </select>
                            <label htmlFor="week">Week</label>

                        </div>
                    </div>


                    <div className='col-md-3'>
                        <div className="form-floating">
                            <select className="form-control" value={attendance.day} onChange={addOtherAttendance} name='day' id='day' >
                                <option key={'start11'} value="">Select</option>
                                {
                                    dayx.map((day, index) => <option key={index} value={`${day}`}>{day}</option>)
                                }
                            </select>
                            <label htmlFor="day">Day</label>
                        </div>
                    </div>
                </div><br />


                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Student Name</th>
                                <th>Monday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Monday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Tuesday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Tuesday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Wednesday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Wednesday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Thursday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Thursday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Friday <span style={{ color: 'green' }}>Morning</span></th>
                                <th>Friday <span style={{ color: 'brown' }}>Afternoon</span></th>
                                <th>Total Present</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.students.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    {student.attendance.flat().map((att, index) => (
                                        <td key={index}>
                                            <select
                                                className="form-control"
                                                value={att}
                                                onChange={(e) => handleAttendanceChange(student.id, Math.floor(index / 2), index % 2, e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                <option value="P">Present</option>
                                                <option value="A">Absent</option>
                                                <option value="L">Late</option>
                                                <option value="E">Excused</option>
                                            </select>
                                        </td>
                                    ))}
                                    <td>{calculateWeeklyTotal(student.attendance)}</td>
                                    {/* <td><button className="btn btn-success" onClick={() => removeStudent(index)}>X</button></td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <p className="text-center"><button className="btn btn-success" type='button' onClick={() => addNewStudent()}>Add new student</button></p> */}
                </div>


                <div className="table-responsive mt-5">
                    <h3>Total Class Attendance</h3>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Day</th>
                                <th>Morning</th>
                                <th>Afternoon</th>
                                <th>Total</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                                <tr key={index}>
                                    <td>{day}</td>
                                    <td>{calculateDailyTotal(index, 0)}</td>
                                    <td>{calculateDailyTotal(index, 1)}</td>
                                    <td>{calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1)}</td>
                                    <td>{calculatePercentage(calculateDailyTotal(index, 0) + calculateDailyTotal(index, 1), attendance.students.length)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td>{calculateTotalAttendance(0)}</td>
                                <td>{calculateTotalAttendance(1)}</td>
                                <td>{calculateTotalAttendance(0) + calculateTotalAttendance(1)}</td>
                                <td>{calculatePercentage(calculateTotalAttendance(0) + calculateTotalAttendance(1), attendance.students.length)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <p className='text-center text-success'>{status}</p>
                <p className='text-center'><button type="button" onClick={() => handleUpdateSubmit()} className="btn btn-primary mt-3">Update Attendance</button></p> */}
            </form>

        </div>
    );
};

export default ViewAttendance;
