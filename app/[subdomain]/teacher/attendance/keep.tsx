import ListGroup from "react-bootstrap/esm/ListGroup";
import { useState } from "react";

export default function AttendancePage(props: any) {
    const [weeks] = useState(['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5', 'WEEK 6']);
    const [days] = useState(['MON', 'TUE', 'WED', 'THU', 'FRI']);
    const [terms] = useState(['FIRST', 'SECOND', 'THIRD']);

    const [attendance, setAttendance] = useState({
        session: "",
        term: "",
        date: '',
        week: "",
        day: "",
        students: [
            { id: 1, name: "Halimat Suberu", morning: 'off', afternoon: 'off' },
            { id: 2, name: "Sheidu Bello", morning: 'off', afternoon: 'off' },
        ]
    });

    function getDay(day: number) {
        const d = { sun: 1, mon: 2, tue: 3, wed: 4, thu: 5, fri: 6, sat: 7 };
        const da = Object.entries(d);
        let result = ''
        da.forEach((d) => {
            if (d[1] === day) {
                result = d[0];
            }
        });

        return result;
    }

    function addOtherAttendance(event: { target: { name: string, value: string } }): void {
        setAttendance({ ...attendance, [event.target.name]: [event.target.value] })
    }


    function setStudentAttendance(id: number, name: string, value: string): void {
        setAttendance({ ...attendance, students: attendance.students.map((student) => student.id === Number(id) ? { ...student, [name]: value } : student) })
    }

    function submitAttendance(): void {
        console.log(attendance);
    }

    return (
        <div className="w-100">
            <form>
                <h1>Attendance</h1>
                <div className='row'>

                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Date</label>
                            <input type="date" name='date' onChange={addOtherAttendance} className="form-control" id="data" autoComplete='questions' />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Session</label>
                            <input type='month' name='session' onChange={addOtherAttendance} className="form-control" id="year" autoComplete='questions' />
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="form-floatin">
                            <label htmlFor="term">Term</label>
                            <select className="form-control" onChange={addOtherAttendance} name='term' id='term' required>
                                <option value="">Select</option>
                                {
                                    terms.map((term) => <option value={`${term}`}>{term}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="form-floatin">
                            <label htmlFor="name">Week</label>
                            <select className="form-control" onChange={addOtherAttendance} name='week' id='week' required>
                                <option value="">Select</option>
                                {
                                    weeks.map((week) => <option value={`${week}`}>{week}</option>)
                                }
                            </select>
                        </div>
                    </div>


                    <div className='col-md-2'>
                        <div className="form-floatin">
                            <label htmlFor="name">Day</label>
                            <select className="form-control" onChange={addOtherAttendance} name='day' id='day' required>
                                <option value="">Select</option>
                                {
                                    days.map((day) => <option value={`${day}`}>{day}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div><br />
                <div>
                    <ListGroup as={'ul'}>
                        {
                            attendance.students?.map((student) => {

                                if ((student.id % 2 === 0)) {

                                    return (
                                        <ListGroup.Item variant="secondary" key={student.id} className="d-flex flex-row justify-content-between">
                                            <span className="text-truncate text-left" style={{ maxWidth: '250px' }}>
                                                <span>{student.id}</span>&nbsp;&nbsp;
                                                <input type="text" name="name" onChange={addOtherAttendance} id={`name${student.id}`} value={student.name} disabled />
                                            </span>
                                            <span>
                                                <input
                                                    name="morning"
                                                    type="checkbox"
                                                    onChange={(e) => {
                                                        if (e.currentTarget && e.currentTarget.value === "off") {
                                                            setStudentAttendance(student.id, 'morning', "on");
                                                        } else {
                                                            setStudentAttendance(student.id, 'morning', "off");
                                                        }

                                                    }}
                                                    value={student.morning}
                                                    id={`morning${student.id}`}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    name="afternoon"
                                                    type="checkbox"
                                                    onChange={(e) => {
                                                        if (e.currentTarget && e.currentTarget.value === "off") {
                                                            setStudentAttendance(student.id, 'afternoon', "on");
                                                        } else {
                                                            setStudentAttendance(student.id, 'afternoon', "off");
                                                        }
                                                    }}
                                                    value={student.afternoon}
                                                    id={`afternoon${student.id}`}
                                                />
                                            </span>
                                        </ListGroup.Item>)
                                }

                                return (
                                    <ListGroup.Item variant="primary" key={student.id} className="d-flex flex-row justify-content-between">
                                        <span className="text-truncate text-left" style={{ maxWidth: '250px' }}>
                                            <span>{student.id}</span>&nbsp;&nbsp;
                                            <input type="text" name="name" onChange={addOtherAttendance} id={`name${student.id}`} value={student.name} disabled />
                                        </span>
                                        <span>
                                            <input
                                                name="morning"
                                                type="checkbox"
                                                onChange={(e) => {
                                                    if (e.currentTarget && e.currentTarget.value === "off") {
                                                        setStudentAttendance(student.id, 'morning', "on");
                                                    } else {
                                                        setStudentAttendance(student.id, 'morning', "off");
                                                    }

                                                }}
                                                value={student.morning}
                                                id={`morning${student.id}`}
                                            /> &nbsp;&nbsp;&nbsp;&nbsp;
                                            <input
                                                name="afternoon"
                                                type="checkbox"
                                                onChange={(e) => {
                                                    if (e.currentTarget && e.currentTarget.value === "off") {
                                                        setStudentAttendance(student.id, 'afternoon', "on");
                                                    } else {
                                                        setStudentAttendance(student.id, 'afternoon', "off");
                                                    }
                                                }}
                                                value={student.afternoon}
                                                id={`afternoon${student.id}`}
                                            />
                                        </span>
                                    </ListGroup.Item>)

                            })
                        }
                    </ListGroup>
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary w-25 py-2 my-2" onClick={submitAttendance} type="button">Submit</button>
                </div>
            </form>
        </div>
    )
} 
 
 {/* <ListGroup as={'ul'}>
                        {
                            attendance.students?.map((student) => {

                                if ((student.id % 2 === 0)) {

                                    return (
                                        <ListGroup.Item variant="secondary" key={student.id} className="d-flex flex-row justify-content-between">
                                            <span className="text-truncate text-left" style={{ maxWidth: '250px' }}>
                                                <span>{student.id}</span>&nbsp;&nbsp;
                                                <input type="text" name="name" onChange={addOtherAttendance} id={`name${student.id}`} value={student.name} disabled />
                                            </span>
                                            {
                                                student.days.map((day) => {
                                                    return (<span>
                                                        <input
                                                            name={`${day.day}-${day.morning}`}
                                                            type="checkbox"
                                                            onChange={(e) => {
                                                                if (e.currentTarget && e.currentTarget.value === "off") {
                                                                    setStudentAttendance(student.id, day.day + '-morning', "on");
                                                                } else {
                                                                    setStudentAttendance(student.id, day.day + '-morning', "off");
                                                                }

                                                            }}
                                                            value={day.morning}
                                                            id={`morning${student.id}`}
                                                        />
                                                        <span>{day.day}</span>
                                                        <input
                                                            name={`${day.day}-${day.afternoon}`}
                                                            type="checkbox"
                                                            onChange={(e) => {
                                                                if (e.currentTarget && e.currentTarget.value === "off") {
                                                                    setStudentAttendance(student.id, day.day + '-afternoon', "on");
                                                                } else {
                                                                    setStudentAttendance(student.id, day.day + '-afternoon', "off");
                                                                }

                                                            }}
                                                            value={day.afternoon}
                                                            id={`afternoon${student.id}`}
                                                        />
                                                    </span>)
                                                })
                                            }
                                            <input size={1} defaultValue={student.days.filter(m => m.morning === 'on').length + student.days.filter(m => m.afternoon === 'on').length} />
                                        </ListGroup.Item>)
                                }

                                return (
                                    <ListGroup.Item variant="primary" key={student.id} className="d-flex flex-row justify-content-between">
                                        <span className="text-truncate text-left" style={{ maxWidth: '250px' }}>
                                            <span>{student.id}</span>&nbsp;&nbsp;
                                            <input type="text" name="name" onChange={addOtherAttendance} id={`name${student.id}`} value={student.name} disabled />
                                        </span>
                                        {
                                            student.days.map((day) => {
                                                return (<span>
                                                    <input
                                                        name={`${day.day}-${day.morning}`}
                                                        type="checkbox"
                                                        onChange={(e) => {
                                                            if (e.currentTarget && e.currentTarget.value === "off") {
                                                                setStudentAttendance(student.id, day.day + '-morning', "on");
                                                            } else {
                                                                setStudentAttendance(student.id, day.day + '-morning', "off");
                                                            }

                                                        }}
                                                        value={day.morning}
                                                        id={`morning${student.id}`}
                                                    />
                                                    <span>{day.day}</span>
                                                    <input
                                                        name={`${day.day}-${day.afternoon}`}
                                                        type="checkbox"
                                                        onChange={(e) => {
                                                            if (e.currentTarget && e.currentTarget.value === "off") {
                                                                setStudentAttendance(student.id, day.day + '-afternoon', "on");
                                                            } else {
                                                                setStudentAttendance(student.id, day.day + '-afternoon', "off");
                                                            }

                                                        }}
                                                        value={day.afternoon}
                                                        id={`afternoon${student.id}`}
                                                    />
                                                </span>)
                                            })
                                        }
                                        <input size={1} defaultValue={student.days.filter(m => m.morning === 'on').length + student.days.filter(m => m.afternoon === 'on').length} />
                                    </ListGroup.Item>)

                            })
                        }
                    </ListGroup> */}