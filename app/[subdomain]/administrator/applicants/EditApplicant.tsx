import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import EditApplicant from './EditApplicant';

const EditApplicant = (props:any) => {
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

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNewApplicant({ ...newApplicant, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setApplicants([...applicants, newApplicant]);
        setNewApplicant({
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
    };


    if (edit) {
        return <EditApplicant setEdit={setEdit} />
    }

    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-md-12'>
                    <h2>Add New Applicant</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>

                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        defaultValue={newApplicant.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        defaultValue={newApplicant.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Email Addreess</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        defaultValue={newApplicant?.user?.email}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="photo"
                                        defaultValue={newApplicant.photo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        defaultValue={newApplicant.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="dateOfBirth"
                                        defaultValue={newApplicant.dateOfBirth}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Street Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="streetAddress"
                                        defaultValue={newApplicant.streetAddress}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Local Govt</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="localGovt"
                                        defaultValue={newApplicant.localGovt}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="state"
                                        defaultValue={newApplicant.state}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="country"
                                        defaultValue={newApplicant.country}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Documents</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="documents"
                                        defaultValue={newApplicant.documents}
                                        onChange={handleChange}
                                        multiple
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-success'>{status}</p>
                        <p className='text-center'> <button type="submit" className="btn btn-primary m-2">Update Applicant</button>   </p>
                    </form>
                </div>
            </div>
        </div>



    );
};

export default EditApplicant;