import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StaffTable = () => {
  const staff = [
    {
      firstName: 'John',
      lastName: 'Doe',
      class: '10A',
      subject:"Maths",
      club:'Home Management',
      house:'green',
      employmentDate:'2005-01-01',
      salary: 'Paid',
      address: '123 Main St',
      dateOfBirth: '2005-01-01',
    },
    // Add more staff objects here
  ];

  return (
    <div className="container mt-5">
      <h2>Staff List</h2>
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
            </tr>
          </thead>
          <tbody>
            {staff.map((staff, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffTable;