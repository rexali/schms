'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "form-data";
import axios from "axios";

const ProfilePage = () => {

    const mountRef = useRef(true);
    const [status, setStatus] = useState('');

    const [profile, setProfile] = useState({
        _id: "",
        firstName: "",
        lastName: "",
        user: { email: "" },
        photo: "",
        phone: '',
        dateOfBirth: "",
        streetAddress: "",
        localGovt: "",
        state: "",
        country: "",
        documents: [""],
        photoFile: { name: "" },
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

    const handleUpdateSubmit = async () => {
        setStatus("Sending data...")
        console.log('Submittted profile:', profile);
        const formData = new Form();
        formData.append('firstName', profile.firstName);
        formData.append('lastName', profile.lastName);
        formData.append('photo', profile.photo);
        formData.append('phone', profile.phone);
        formData.append('dateOfBirth', profile.dateOfBirth);
        formData.append('streetAddress', profile.streetAddress);
        formData.append('localGovt', profile.localGovt);
        formData.append('state', profile.localGovt);
        formData.append('country', profile.country);
        formData.append('filetoupload', profile.photoFile.name);
        formData.append("documents", profile.documents);
        formData.append("_id", profile._id);

        profile.documentFiles.forEach((file: any) => {
            formData.append("filetouploads", file, file.name)
        })

        const profileResponse = await axios.patch("/api/profiles/" + profile._id, formData, {
            withCredentials: false,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(profileResponse.data);

        if (profileResponse.data.status === "success") {

            setStatus(profileResponse.data.status + ": " + profileResponse.data.message);
            // setProfile({
            //     _id: "",
            //     firstName: "",
            //     lastName: "",
            //     photo: "",
            //     phone: '',
            //     user: { email: "" },
            //     dateOfBirth: "",
            //     streetAddress: "",
            //     localGovt: "",
            //     state: "",
            //     country: "",
            //     documents: [""],
            //     photoFile: {name:""},
            //     documentFiles: []
            // });
        } else {
            setStatus(profileResponse.data.status + ": " + profileResponse.data.message)
        }

    };

    const getProfileData = useCallback(async () => {
        try {
            const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
            const profileResponse = await fetch('/api/profiles/' + userId).then(res => res.json());
            console.log(profileResponse);
            if (profileResponse.status === 'success') {
                setProfile(profileResponse.data.profile);
            } else {
                // setProfile({ ...profile });
            }
        } catch (error) {
            console.log(error);
        }

    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getProfileData();
        }

        return () => {
            mountRef.current = false;
        }
    }, []);


    if (!Object.keys(profile).length) {
        return (
            <div className="container mt-5">
                <h2>Profile</h2>
                <p>No profile data found</p>
            </div>)
    }


    return (
        <div className="container mt-5">
            <h2>Profile</h2>
            <form >
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
                            <label className="form-label">Email Addreess</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                defaultValue={profile?.user?.email}
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
                                id='file'
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
                                defaultValue={profile.dateOfBirth.split("T")[0]}
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
                <p className='text-center text-success'>{status}</p>
                <p className='text-center'><button type="button" onClick={async () => { await handleUpdateSubmit(); }} className="btn btn-primary m-2">Update profile</button></p>

            </form>
        </div>
    );
};

export default ProfilePage;