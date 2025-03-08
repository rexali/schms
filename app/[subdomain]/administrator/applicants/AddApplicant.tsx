import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditApplicant from './EditApplicant';

const AddApplicant = () => {
    const [edit, setEdit]= useState(false);
    const [applicants, setApplicants] = useState([
        {
            firstName: 'John',
            lastName: 'Doe',
            class: '10A',
            admissionNumber: '12345',
            payment: 'Paid',
            address: '123 Main St',
            dateOfBirth: '2005-01-01',
            classMaster: 'Mr. Smith'
        },
        // Add more student objects here
    ]);

    const [newApplicant, setNewApplicant] = useState({
        firstName: '',
        lastName: '',
        class: '',
        admissionNumber: '',
        payment: '',
        address: '',
        dateOfBirth: '',
        classMaster: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNewApplicant({ ...newApplicant, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setApplicants([...applicants, newApplicant]);
        setNewApplicant({
            firstName: '',
            lastName: '',
            class: '',
            admissionNumber: '',
            payment: '',
            address: '',
            dateOfBirth: '',
            classMaster: ''
        });
    };


    if (edit) {
        return <EditApplicant setEdit={setEdit}/>
    }

    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-md-4'>
                    <h2>Add New Applicant</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={newApplicant.firstName}
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
                                value={newApplicant.lastName}
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
                                value={newApplicant.class}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Admission Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="admissionNumber"
                                value={newApplicant.admissionNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Payment</label>
                            <input
                                type="text"
                                className="form-control"
                                name="payment"
                                value={newApplicant.payment}
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
                                value={newApplicant.address}
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
                                value={newApplicant.dateOfBirth}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Class Master</label>
                            <input
                                type="text"
                                className="form-control"
                                name="classMaster"
                                value={newApplicant.classMaster}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Applicant</button>
                    </form>
                </div>
                <div className='col-md-8'>
                    <h2 >Applicants List</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Class</th>
                                    <th>Admission Number</th>
                                    <th>Payment</th>
                                    <th>Address</th>
                                    <th>Date of Birth</th>
                                    <th>Class Master</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applicants.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.class}</td>
                                        <td>{student.admissionNumber}</td>
                                        <td>{student.payment}</td>
                                        <td>{student.address}</td>
                                        <td>{student.dateOfBirth}</td>
                                        <td>{student.classMaster}</td>
                                        <td><button onClick={()=>setEdit(true)} className='btn btn-success'>Edit</button></td>
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

export default AddApplicant;