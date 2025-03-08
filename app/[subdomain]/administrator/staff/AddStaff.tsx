import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditStaff from './EditStaff';

const AddStaff = () => {
    const [edit, setEdit] = useState(false);
    const [staffs, setStaffs] = useState([
        {
            firstName: 'John',
            lastName: 'Doe',
            class: '10A',
            subject: "Maths",
            club: 'Home Management',
            house: 'green',
            employmentDate: '2005-01-01',
            salary: 'Paid',
            address: '123 Main St',
            dateOfBirth: '2005-01-01',
        },
        // Add more staff objects here
    ]);

    const [newStaff, setNewStaff] = useState({
        firstName: '',
        lastName: '',
        class: '',
        subject: "",
        club: '',
        house: '',
        employmentDate: '',
        salary: '',
        address: '',
        dateOfBirth: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNewStaff({ ...newStaff, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setStaffs([...staffs, newStaff]);
        setNewStaff({
            firstName: '',
            lastName: '',
            class: '',
            subject: "",
            club: '',
            house: '',
            employmentDate: '',
            salary: '',
            address: '',
            dateOfBirth: '',
        });
    };


    if (edit) {
        return <EditStaff setEdit={setEdit} />
    }

    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-md-4'>
                    <h2>Add New Staff</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={newStaff.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={newStaff.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Class</label>
                            <input
                                type="text"
                                className="form-control"
                                name="class"
                                value={newStaff.class}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                name="subject"
                                value={newStaff.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Club</label>
                            <input
                                type="text"
                                className="form-control"
                                name="club"
                                value={newStaff.club}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">House</label>
                            <input
                                type="text"
                                className="form-control"
                                name="house"
                                value={newStaff.house}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of Employment</label>
                            <input
                                type="text"
                                className="form-control"
                                name="employmentDate"
                                value={newStaff.employmentDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Salary</label>
                            <input
                                type="text"
                                className="form-control"
                                name="salary"
                                value={newStaff.salary}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={newStaff.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="dateOfBirth"
                                value={newStaff.dateOfBirth}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Add Student</button>
                    </form>
                </div>
                <div className='col-md-8'>
                    <h2 >Students List</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Class</th>
                                    <th>Subject</th>
                                    <th>Club</th>
                                    <th>House</th>
                                    <th>Date of Employment</th>
                                    <th>Salary</th>
                                    <th>Address</th>
                                    <th>Date of Birth</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffs.map((staff, index) => (
                                    <tr key={index}>
                                        <td>{staff.firstName}</td>
                                        <td>{staff.lastName}</td>
                                        <td>{staff.class}</td>
                                        <td>{staff.subject}</td>
                                        <td>{staff.club}</td>
                                        <td>{staff.house}</td>
                                        <td>{staff.employmentDate}</td>
                                        <td>{staff.salary}</td>
                                        <td>{staff.address}</td>
                                        <td>{staff.dateOfBirth}</td>
                                        <td><button onClick={() => setEdit(true)} className='btn btn-success'>Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>



    );
};

export default AddStaff;