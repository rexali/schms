import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditSchedule from './EditSchedule';

const subjects = [
    'Math',
    'English',
    'Science',
    'History',
    'Geography',
    'Art',
    'Music',
    'Physical Education',
    'Biology',
    'Chemistry',
    'Physics',
    'Computer Science',
    'Economics',
    'Business Studies',
    'French',
    'Spanish',
    'German',
    'Literature'
];

const teachers = Array.from({ length: 24 }, (_, i) => `Teacher ${i + 1}`);

const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];

const TeacherSchedulesList = (props: any) => {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const mountRef = useRef(true);
    const [status, setStatus] = useState<string>('');
    const [edit, setEdit] = useState<boolean>(false);
    const [scheduleId, setScheduleId] = useState<string>('');
    const [schedules, setSchedules] = useState<any>([]);
    const [schedule, setSchedule] = useState({
        time: '',
        duration: '',
        class: '',
        subject: '',
        teacher: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setSchedule({ ...schedule, [name]: value });
    };


    async function removeScheduleHandler(_id: string): Promise<boolean> {
        const reportResponse = await fetch('/api/schedules/' + _id, { method: "DELETE", mode: "cors" }).then(res => res.json());
        if (reportResponse.status === 'success') {
            getSchedulesData();
            return true;
        } else {
            return false;
        }
    }


    const addScheduleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setStatus("Adding schedule..")
        let finalSchedule = { ...schedule, user: userId }
        console.log('Submitted report:', finalSchedule);
        const scheduleResponse = await fetch('/api/schedules', {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify({ ...finalSchedule })
        }).then(res => res.json());
        if (scheduleResponse.status === 'success') {
            // setSchedules([...schedules, schedule]);
            setSchedule({
                time: '',
                duration: '',
                class: '',
                subject: '',
                teacher: ''
            });
            setStatus(scheduleResponse.status);
            getSchedulesData();
        } else {
            setStatus(scheduleResponse.status + ": " + scheduleResponse.message)
        }
    };

    const getSchedulesData = useCallback(async () => {
        const scheduleResponse = await fetch('/api/schedules').then(res => res.json());
        console.log(scheduleResponse);
        if (scheduleResponse.status === 'success') {
            setSchedules(scheduleResponse.data.schedules);
        } else {
            setSchedules([...schedules]);
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getSchedulesData();
        }

        return () => {
            mountRef.current = false;
        }
    }, []);

    if (edit) {
        return <EditSchedule scheduleId={scheduleId} setEdit={setEdit} setSchedules={setSchedules} />
    }

    return (
        <div className="container mt-5">
            <h2 className="mt-5">Schedules List</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Time</th>
                            <th>Duration</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Teacher</th>
                            <th colSpan={2} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule: any, index: any) => (
                            <tr key={index}>
                                <td>{schedule.time}</td>
                                <td>{schedule.duration}</td>
                                <td>{schedule.class}</td>
                                <td>{schedule.subject}</td>
                                <td>{schedule.teacher}</td>
                                <td className='text-center'>
                                    <button
                                        type="button"
                                        className='btn btn-success'
                                        onClick={() => {
                                            setScheduleId(schedule._id);
                                            setEdit(true)
                                        }}>
                                        edit
                                    </button>
                                </td>
                                <td className='text-center'>
                                    <button
                                        type="button"
                                        className='btn btn-danger'
                                        onClick={() => {
                                            const dialog = confirm('\n\n Want to delete this?');
                                            if (dialog) {
                                                removeScheduleHandler(schedule._id);
                                            }
                                        }}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div><br />

            <h2>Add New Schedule</h2>
            <form onSubmit={addScheduleSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Time</label>
                            <input
                                type="time"
                                className="form-control"
                                name="time"
                                value={schedule.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <div className="mb-3">
                            <label className="form-label">Duration</label>
                            <input
                                type="text"
                                className="form-control"
                                name="duration"
                                value={schedule.duration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <div className="mb-3">
                            <label className="form-label">Class</label>
                            <select
                                className="form-control"
                                name="class"
                                value={schedule.class}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Class</option>
                                {classes.map((cls, index) => (
                                    <option key={index} value={cls}>{cls}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <select
                                className="form-control"
                                name="subject"
                                value={schedule.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Subject</option>
                                {subjects.map((subject, index) => (
                                    <option key={index} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <div className="mb-3">
                            <label className="form-label">Teacher</label>
                            <input
                                type="text"
                                className="form-control"
                                name="teacher"
                                value={schedule.teacher}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Teacher</label>
                    <select
                        className="form-control"
                        name="teacher"
                        value={schedule.teacher}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Teacher</option>
                        {teachers.map((teacher, index) => (
                            <option key={index} value={teacher}>{teacher}</option>
                        ))}
                    </select>
                </div> */}
                <p className='text-center text-success'>{status}</p>

                <p className='text-center text-success'><button type="submit" className="btn btn-primary w-50">Add Schedule</button></p>
            </form>


        </div>
    );
};

export default TeacherSchedulesList;