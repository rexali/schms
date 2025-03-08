import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentsTable = () => {
  const students = [
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
  ];

  return (
    <div className="container mt-5">
      <h2>Students List</h2>
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
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.class}</td>
                <td>{student.admissionNumber}</td>
                <td>{student.payment}</td>
                <td>{student.address}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.classMaster}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;