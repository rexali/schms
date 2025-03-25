import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditApplicant from './EditApplicant';

const ApplicantList = (props:any) => {
    const [edit, setEdit] = useState(false);
    const [applicants, setApplicants] = useState([
        {
            firstName: 'John',
            lastName: 'Doe',
            class: '10A',
            dateOfBirth: '2005-01-01',
            user: { email: "" },
            photo: "",
            phone: '',
            streetAddress: "",
            localGovt: "",
            state: "",
            country: "",
            documents: [""],
            photoFile: {},
            documentFiles: [{}]
        },
        // Add more student objects here
    ]);

    const [newApplicant, setNewApplicant] = useState({
        firstName: 'John',
        lastName: 'Doe',
        class: '10A',
        dateOfBirth: '2005-01-01',
        user: { email: "" },
        photo: "",
        phone: '',
        streetAddress: "",
        localGovt: "",
        state: "",
        country: "",
        documents: [""],
        photoFile: {},
        documentFiles: [{}]
    });


    if (edit) {
        return <EditApplicant setEdit={setEdit} />
    }

    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-md-12'>
                    <h2 >Applicants List</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Class</th>
                                    <th>Address</th>
                                    <th>Date of Birth</th>
                                    <th colSpan={2} className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applicants.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.class}</td>
                                        <td>{student.streetAddress}</td>
                                        <td>{student.dateOfBirth}</td>
                                        <td className='text-center'>
                                            <button onClick={() => setEdit(true)} className='btn btn-success'>Edit</button>
                                        </td>
                                        <td className='text-center'>
                                            <button onClick={() => setEdit(true)} className='btn btn-success'>Delete</button>
                                        </td>
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

export default ApplicantList;