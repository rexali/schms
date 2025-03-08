'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubjectsList = () => {

    const [subjectsData, setSubjectData] = useState([
        {
            name: 'Maths',
        },
        // Add more classes here
    ]);

    const [subject, setSubject] = useState({
        name: '',
    }
    )

    function handleClassChange(event: { target: { name: string, value: string } }): void {
        setSubject({ ...subject, [event.target.name]: event.target.value })
    }

    function addSubject(event: any): void {
        setSubjectData([...subjectsData, { ...subject }]);
    }

    return (
        <div className="container mt-5">
            <h1>Add a subject</h1>
            <form>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-2">
                            {/* <label>Class Name</label> */}
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={subject.name}
                                onChange={handleClassChange}
                                placeholder='Enter subject here'
                                required
                            />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='text-center'>
                            <button type="button" className="btn btn-secondary" onClick={addSubject}>Add Subject</button>
                        </div>
                    </div>
                </div>
            </form>

            <h2>Subjects List</h2>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Subject Name</th>
                            <th colSpan={2} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjectsData.map((subject, studentIndex) => (
                            <tr key={studentIndex}>
                                <td>{subject.name}</td>
                                <td className='d-flex justify-content-around'><button className='btn btn-primary'>View</button><button className='btn btn-primary'>Edit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SubjectsList;