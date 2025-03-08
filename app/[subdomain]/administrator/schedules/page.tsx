import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const subjects = [
    'Math', 'English', 'Science', 'History', 'Geography', 'Art', 'Music', 'Physical Education',
    'Biology', 'Chemistry', 'Physics', 'Computer Science', 'Economics', 'Business Studies',
    'French', 'Spanish', 'German', 'Literature'
];

const teachers = Array.from({ length: 24 }, (_, i) => `Teacher ${i + 1}`);

const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];

const AddSchedule = () => {
    const [schedules, setSchedules] = useState<any>([]);
    const [newSchedule, setNewSchedule] = useState({
        time: '',
        duration: '',
        class: '',
        subject: '',
        teacher: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNewSchedule({ ...newSchedule, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSchedules([...schedules, newSchedule]);
        setNewSchedule({
            time: '',
            duration: '',
            class: '',
            subject: '',
            teacher: ''
        });
    };

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div><br/>

            <h2>Add New Schedule</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Time</label>
                    <input
                        type="time"
                        className="form-control"
                        name="time"
                        value={newSchedule.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input
                        type="text"
                        className="form-control"
                        name="duration"
                        value={newSchedule.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Class</label>
                    <select
                        className="form-control"
                        name="class"
                        value={newSchedule.class}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Class</option>
                        {classes.map((cls, index) => (
                            <option key={index} value={cls}>{cls}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <select
                        className="form-control"
                        name="subject"
                        value={newSchedule.subject}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Subject</option>
                        {subjects.map((subject, index) => (
                            <option key={index} value={subject}>{subject}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teacher</label>
                    <select
                        className="form-control"
                        name="teacher"
                        value={newSchedule.teacher}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Teacher</option>
                        {teachers.map((teacher, index) => (
                            <option key={index} value={teacher}>{teacher}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Schedule</button>
            </form>

            
        </div>
    );
};

export default AddSchedule;