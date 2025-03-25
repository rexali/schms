import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];

const EditSchedule = (props: any) => {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const mountRef = useRef(true);
    const [status, setStatus] = useState<string>('');
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

    const updateScheduleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setStatus("Updating schedule..")
        let finalSchedule = { ...schedule, user: userId }
        console.log('Submitted report:', finalSchedule);
        const scheduleResponse = await fetch('/api/schedules/'+props.scheduleId, {
            mode: 'cors',
            method: "PATCH",
            body: JSON.stringify({ ...finalSchedule })
        }).then(res => res.json());
        if (scheduleResponse.status === 'success') {
            setStatus(scheduleResponse.status)
            getSchedulesData();
        } else {
            setStatus(scheduleResponse.status + ": " + scheduleResponse.message)
        }
    };

    const getScheduleData = useCallback(async () => {
        const scheduleResponse = await fetch('/api/schedules/' + props.scheduleId).then(res => res.json());
        console.log(scheduleResponse);
        if (scheduleResponse.status === 'success') {
            setSchedule(scheduleResponse.data.schedule);
        } else {
            setSchedule({...schedule});
        }
    }, [])

    const getSchedulesData = useCallback(async () => {
        const scheduleResponse = await fetch('/api/schedules').then(res => res.json());
        if (scheduleResponse.status === 'success') {
            props.setSchedules(scheduleResponse.data.schedules);
        } 
    }, [])


    useEffect(() => {
        if (mountRef.current) {
            getScheduleData();
        }

        return () => {
            mountRef.current = false;
        }
    }, []);


    return (
        <div className="container mt-5">
            <h2 className='d-flex justify-content-between'>Edit schedule <button className='btn btn-success' onClick={() => props.setEdit(false)}>close</button></h2>
            <form onSubmit={updateScheduleSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Time</label>
                            <input
                                type="time"
                                className="form-control"
                                name="time"
                                defaultValue={schedule.time}
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
                                defaultValue={schedule.duration}
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
                                    <option key={index} defaultValue={cls}>{cls}</option>
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
                                value={schedule?.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Subject</option>
                                {subjects.map((subject, index) => (
                                    <option key={index} defaultValue={subject}>{subject}</option>
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
                                defaultValue={schedule.teacher}
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
                        defaultValue={schedule.teacher}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Teacher</option>
                        {teachers.map((teacher, index) => (
                            <option key={index} defaultValue={teacher}>{teacher}</option>
                        ))}
                    </select>
                </div> */}
                <p className='text-center text-success'>{status}</p>

                <p className='text-center text-success'><button type="submit" className="btn btn-primary w-50">Update Schedule</button></p>
            </form>


        </div>
    );
};

export default EditSchedule;