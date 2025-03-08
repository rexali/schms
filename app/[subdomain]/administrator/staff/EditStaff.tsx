import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Close from '@mui/icons-material/Close';

const EditStaff = (props: any) => {
  const [staffs, setStaffs] = useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      class: '10A',
      subject: "Maths",
      club: 'Home Managment',
      house: 'Green',
      employmentDate: '2005-01-01',
      salary: 'Paid',
      address: '123 Main St',
      dateOfBirth: '2005-01-01',
    },
    // Add more student objects here
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
    classMaster: ''
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
      classMaster: ''
    });
  };

  return (
    <div className="container mt-5">
      <h2 className='d-flex flex-row justify-content-between'>Add New Student <button className='btn btn-success' onClick={() => props.setEdit(false)}><Close /> close</button></h2>
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

        <button type="submit" className="btn btn-primary">Add Staff</button>
      </form>

    </div>
  );
};

export default EditStaff;