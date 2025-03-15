import { useState } from "react";

export default function AttendancePage(props: any) {
    const [weeks] = useState(['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5', 'WEEK 6']);
    const [dayx] = useState(['MON', 'TUE', 'WED', 'THU', 'FRI']);
    const [terms] = useState(['FIRST', 'SECOND', 'THIRD']);

    const [attendance, setAttendance] = useState({
        session: "",
        term: "",
        date: '',
        week: "",
        day: "",
        students: [
            {
                id: 1,
                name: "Halimat Suberu",
                weeklyTotal: 0,
                days: [
                    { day: 'mon', morning: 'off', afternoon: 'off' },
                    { day: 'tue', morning: 'off', afternoon: 'off' },
                    { day: 'wed', morning: 'off', afternoon: 'off' },
                    { day: 'thu', morning: 'off', afternoon: 'off' },
                    { day: 'fri', morning: 'off', afternoon: 'off' },
                ]
            },
            {
                id: 2,
                name: "Sheidu Bello",
                weeklyTotal: 0,
                days: [
                    { day: 'mon', morning: 'off', afternoon: 'off' },
                    { day: 'tue', morning: 'off', afternoon: 'off' },
                    { day: 'wed', morning: 'off', afternoon: 'off' },
                    { day: 'thu', morning: 'off', afternoon: 'off' },
                    { day: 'fri', morning: 'off', afternoon: 'off' },
                ]
            },
        ]
    });

    const getDailyMorningTotal = (day: string) => {
        return attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.morning == 'on').length;
    }


    const getDailyAfternoonTotal = (day: string) => {
        return attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.afternoon == 'on').length;
    }

    const getDaily = (day: string, time: string) => {

        return [
            attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.morning == 'on').length,
            attendance.students.map(student => student.days.filter(dy => dy.day == day)).map(m => m[0]).filter((m: any) => m.day == day && m.afternoon == 'on').length
        ]
    }

    function addOtherAttendance(event: { target: { name: string, value: string } }): void {
        setAttendance({ ...attendance, [event.target.name]: [event.target.value] })
    }

    function setStudentAttendance(id: number, name: string, value: string): void {
        const dy = name.split('-')[0];
        const time = name.split('-')[1];

        setAttendance(c => {
            return {
                ...c,
                students: c.students.map((student) => student.id === Number(id) ? { ...student, days: student.days.map((day) => day.day === dy ? { ...day, [time]: value } : day) } : student)
            }
        });

        setAttendance(c => {
            return {
                ...c,
                students: c.students.map((student) => student.id === Number(id) ? { ...student, weeklyTotal: getStudentWeeklyAttendance(student.id) + 1 } : student)
            }
        });
    }

    function setStudentWeeklyAttendance(studentId: number) {
        const weeklyTotal = getStudentWeeklyAttendance(studentId);
        setAttendance(c => {
            return {
                ...c,
                students: c.students.map((student) => student.id === Number(studentId) ? { ...student, weeklyTotal } : student)
            }
        });
    }

    const getStudentWeeklyAttendance = (studentId: any) => {
        let weeklyTotal = attendance.students
            .filter(student => student.id === studentId)
            .map(student => student.days.filter(day => day.morning === 'on'))[0].length +
            attendance.students
                .filter(student => student.id === studentId)
                .map(student => student.days.filter(day => day.afternoon === 'on'))[0].length;

        return weeklyTotal;
    }


    function submitAttendance(): void {
        window.localStorage.setItem("attendance", JSON.stringify(attendance));
        console.log(attendance);
    }


    return (
        <div className="w-100">
            <h1>Attendance</h1>

            <form id="attendanceForm">
                <div className='row'>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="date" name='date' onChange={addOtherAttendance} className="form-control" id="data" autoComplete='questions' />
                            <label htmlFor="date">Date</label>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type='month' name='session' onChange={addOtherAttendance} className="form-control" id="year" autoComplete='questions' />
                            <label htmlFor="session">Session</label>
                        
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="form-floating">
                            <select className="form-control" onChange={addOtherAttendance} name='term' id='term' required>
                                <option key={'start9'} value="">Select</option>
                                {
                                    terms.map((term, index) => <option key={index} value={`${term}`}>{term}</option>)
                                }
                            </select>
                            <label htmlFor="term">Term</label>

                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="form-floating">
                            <select className="form-control" onChange={addOtherAttendance} name='week' id='week' required>
                                <option key={'start10'} value="">Select</option>
                                {
                                    weeks.map((week, index) => <option key={index} value={`${week}`}>{week}</option>)
                                }
                            </select>
                            <label htmlFor="week">Week</label>

                        </div>
                    </div>


                    <div className='col-md-2'>
                        <div className="form-floating">
                            <select className="form-control" onChange={addOtherAttendance} name='day' id='day' required>
                                <option key={'start11'} value="">Select</option>
                                {
                                    dayx.map((day, index) => <option key={index} value={`${day}`}>{day}</option>)
                                }
                            </select>
                            <label htmlFor="day">Day</label>
                        </div>
                    </div>
                </div><br />
                <div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Weekly Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendance?.students.map((student, index) => (
                                    <tr key={'student' + index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        {
                                            student.days.map((day, index) => {
                                                return (
                                                    <td className="text-center" key={index}>
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
                                                            checked={day.morning === 'on' ? true : false}
                                                            id={`morning${student.id}`}
                                                        />
                                                        &nbsp;&nbsp;&nbsp;
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
                                                            checked={day.afternoon === 'on' ? true : false}
                                                            id={`afternoon${student.id}`}
                                                        />
                                                    </td>
                                                )
                                            })
                                        }

                                        <td className="text-center">{getStudentWeeklyAttendance(student.id)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Day</th>
                                <th>Morning</th>
                                <th>Afternoon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dayx.map((day, index) => (
                                <tr key={index}>
                                    <td>{day}</td>
                                    <td>{getDaily(day.toLowerCase(), 'morning')[0]}</td>
                                    <td>{getDaily(day.toLowerCase(), 'afternoon')[1]}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td>
                                    {
                                        getDailyMorningTotal('mon') +
                                        getDailyMorningTotal('tue') +
                                        getDailyMorningTotal('wed') +
                                        getDailyMorningTotal('thu') +
                                        getDailyMorningTotal('fri')
                                    }
                                </td>
                                <td>
                                    {
                                        getDailyAfternoonTotal('mon') +
                                        getDailyAfternoonTotal('tue') +
                                        getDailyAfternoonTotal('wed') +
                                        getDailyAfternoonTotal('thu') +
                                        getDailyAfternoonTotal('fri')
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Percent %</td>
                                <td>
                                    {
                                        (((
                                            getDailyMorningTotal('mon') +
                                            getDailyMorningTotal('tue') +
                                            getDailyMorningTotal('wed') +
                                            getDailyMorningTotal('thu') +
                                            getDailyMorningTotal('fri') +

                                            getDailyAfternoonTotal('mon') +
                                            getDailyAfternoonTotal('tue') +
                                            getDailyAfternoonTotal('wed') +
                                            getDailyAfternoonTotal('thu') +
                                            getDailyAfternoonTotal('fri')
                                        ))
                                            /
                                            (attendance.students.length * 5 * 2)) * 100 + " %"

                                    }
                                </td>
                                <td>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary w-25 py-2 my-2" onClick={submitAttendance} type="button">Submit</button>
                </div>
            </form>
        </div>
    )
}