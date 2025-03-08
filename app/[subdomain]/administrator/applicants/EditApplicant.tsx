import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Close from '@mui/icons-material/Close';

const EditApplicant = (props:any) => {
  const [applicant, setApplicants] = useState([
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
    setApplicants([...applicant, newApplicant]);
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

  return (
    <div className="container mt-5">
      <h2 className='d-flex flex-row justify-content-between'>Edit Applicant <button className='btn btn-success' onClick={() => props.setEdit(false)}><Close /> close</button></h2>
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
        <div className='text-center'>
        <button type="submit" className="btn btn-primary">Update</button>

        </div>
      </form>

    </div>
  );
};

export default EditApplicant;