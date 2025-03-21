import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {

    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        photo: "",
        phone: '',
        dateOfBirth: "",
        streetAddress: "",
        localGovt: "",
        state: "",
        country: "",
        documents: [""],
        photoFile: {},
        documentFiles: [{}]
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target as any;
        if (name === "photo") {
            setProfile({ ...profile, [name]: value.split('\\').pop(), photoFile: e.target.files[0] });
        } else if (name === "documents") {
            let filenames = [...e.target.files].map((file: any) => file.name);
            setProfile({ ...profile, documents: filenames, documentFiles: [...e.target.files] });
        } else {
            setProfile({ ...profile, [name]: value });
        }

    };

    const handleUpdateSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Submittted profile:', profile);

        // setProfile({
        //     firstName: "",
        //     lastName: "",
        //     photo: "",
        //     phone: '',
        //     dateOfBirth: "",
        //     streetAddress: "",
        //     localGovt: "",
        //     state: "",
        //     country: "",
        //     documents: "",
        //     photoFile: {},
        //     documentFiles: []
        // });
    };


    return (
        <div className="container mt-5">
            <h2>Profile</h2>
            <form onSubmit={handleUpdateSubmit}>
                <div className='row'>

                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                defaultValue={profile.firstName}
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
                                defaultValue={profile.lastName}
                                onChange={handleChange}
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
                                defaultValue={profile.photo}
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
                                defaultValue={profile.phone}
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
                                defaultValue={profile.dateOfBirth}
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
                                defaultValue={profile.streetAddress}
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
                                defaultValue={profile.localGovt}
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
                                defaultValue={profile.state}
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
                                defaultValue={profile.country}
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
                                defaultValue={profile.documents}
                                onChange={handleChange}
                                multiple
                            />
                        </div>
                    </div>
                </div>
                <p className='text-center'> <button type="submit" className="btn btn-primary m-2">Update profile</button>   </p>

            </form>
        </div>
    );
};

export default ProfilePage;