import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditApplicant from './EditApplicant';

const AddApplicant = () => {
    const [edit, setEdit] = useState(false);

    const [newApplicant, setNewApplicant] = useState({
        firstName: 'John',
        lastName: 'Doe',
        class: '10A',
        section:"Primary",
        dateOfBirth: '2005-01-01',
        email: "",
        photo: "",
        phone: '',
        streetAddress: "",
        localGovt: "",
        state: "",
        country: "",
        prePriStartDate: "",
        prePriEndDate: "",
        preSecStartDate: "",
        prevSecEndDate: "",
        documents: [""],
        photoFile: {},
        documentFiles: [{}]
    });


    const handleChange = (e: any) => {
        const { name, value } = e.target as any;
        if (name === "photo") {
            setNewApplicant({ ...newApplicant, [name]: value.split('\\').pop(), photoFile: e.target.files[0] });
        } else if (name === "documents") {
            let filenames = [...e.target.files].map((file: any) => file.name);
            setNewApplicant({ ...newApplicant, documents: filenames, documentFiles: [...e.target.files] });
        } else {
            setNewApplicant({ ...newApplicant, [name]: value });
        }

    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setNewApplicant({
            firstName: 'John',
            lastName: 'Doe',
            class: 'JSS 1A',
            section:"Primary",
            dateOfBirth: '2005-01-01',
            email: "",
            photo: "",
            phone: '',
            streetAddress: "",
            localGovt: "",
            state: "",
            country: "",
            prePriStartDate: "",
            prePriEndDate: "",
            preSecStartDate: "",
            prevSecEndDate: "",
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
                                        value={newApplicant.firstName}
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
                                        value={newApplicant.lastName}
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
                                        value={newApplicant.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Passport Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="photo"
                                        value={newApplicant.photo}
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
                                        value={newApplicant.phone}
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
                                        value={newApplicant.dateOfBirth}
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
                                        value={newApplicant.streetAddress}
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
                                        value={newApplicant.localGovt}
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
                                        value={newApplicant.state}
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
                                        value={newApplicant.country}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Section (You are applying for)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="section"
                                        value={newApplicant.section}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Class  (You are applying for)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="class"
                                        value={newApplicant.class}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12'>

                                <div className="mb-3">
                                    <label className="form-label">Documents (Previous Certificates if any)</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="documents"
                                        value={newApplicant.documents}
                                        onChange={handleChange}
                                        multiple
                                    />
                                </div>
                            </div>

                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Prev School (Primary): Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="prevPriStartDate"
                                        value={newApplicant.prePriStartDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Prev School (Primary): End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="prevPriEndDate"
                                        value={newApplicant.prePriEndDate}
                                        onChange={handleChange}
                                        multiple
                                    />
                                </div>
                            </div>

                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Prev School (Secondary): Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="prevSecStartDate"
                                        value={newApplicant.preSecStartDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className="mb-3">
                                    <label className="form-label">Prev School (Secondary): End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="prevSecEndDate"
                                        value={newApplicant.prevSecEndDate}
                                        onChange={handleChange}
                                        multiple
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-success'>{status}</p>
                        <p className='text-center'> <button type="submit" className="btn btn-primary m-2">Add Applicant</button>   </p>
                    </form>
                </div>
            </div>
        </div>



    );
};

export default AddApplicant;