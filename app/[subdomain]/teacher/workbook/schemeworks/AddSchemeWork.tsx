'use client'

import { useState } from "react"

export default function AddSchemeWork(props: any) {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const [status, setStatus] = useState('');
    const [scheme, setScheme] = useState({
        subject: "",
        teacher: "",
        term: "",
        class: "",
        year: "",
        month: "",
        weekEnding: "",
        teacherSignature: "",
        principalSignature: "",
        schemeOfWork: "",
        recordOfWork: "",
        prepWorkSet: "",
        refToMarkSheet: "",
    });

    function handleChange(event: { target: { name: string, value: string } }): void {
        setScheme({ ...scheme, [event.target.name]: event.target.value })
    }

    const addScheme = async () => {
        console.log("Submitted scheme: ", scheme);
        setStatus("Submitting...")
        let finalScheme = { ...scheme, user: userId }
        const schemeResponse = await fetch('/api/schemes', {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify({ ...finalScheme })
        }).then(res => res.json());
        if (schemeResponse.status === 'success') {
            setStatus(schemeResponse.status)
        } else {
            setStatus(schemeResponse.status + ": " + schemeResponse.message)
        }

    }


    return (
        <div className='row'>
            <div className='col-md-4'>
                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={scheme.subject}
                        onChange={handleChange}

                    />
                </div>
            </div>
            <div className='col-md-4'>
                <div className="mb-3">
                    <label className="form-label">Class</label>
                    <input
                        type="text"
                        className="form-control"
                        name="class"
                        value={scheme.class}
                        onChange={handleChange}

                    />
                </div>
            </div>
            <div className='col-md-4'>

                <div className="mb-3">
                    <label className="form-label">Teacher</label>
                    <input
                        type="text"
                        className="form-control"
                        name="teacher"
                        value={scheme.teacher}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className='col-md-4'>

                <div className="mb-3">
                    <label className="form-label">Term</label>
                    <input
                        type="text"
                        className="form-control"
                        name="term"
                        value={scheme.term}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className='col-md-4'>

                <div className="mb-3">
                    <label className="form-label">Month</label>
                    <input
                        type="month"
                        className="form-control"
                        name="month"
                        value={scheme.month}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className='col-md-4'>
                <div className="mb-3">
                    <label className="form-label">Week Ending</label>
                    <input
                        type="date"
                        className="form-control"
                        name="weekEnding"
                        value={scheme.weekEnding}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className='col-md-4'>
                <div className="mb-3">
                    <label className="form-label">Teacher Signature</label>
                    <input
                        type="text"
                        className="form-control"
                        name="teacherSignature"
                        value={scheme.teacherSignature}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className='col-md-4'>
                <div className="mb-3">
                    <label className="form-label">Principal Signature</label>
                    <input
                        type="text"
                        className="form-control"
                        name="principalSignature"
                        value={scheme.principalSignature}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className='col-md-4'>

                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <input
                        type="year"
                        className="form-control"
                        name="year"
                        value={scheme.year}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className='col-md-12'>
                <div className="mb-3">
                    <label className="form-label">Scheme of Work By Week </label>
                    <textarea
                        className="form-control"
                        name="schemeOfWork"
                        value={scheme.schemeOfWork}
                        onChange={handleChange}

                    ></textarea>
                </div>
            </div>

            <div className='col-md-12'>
                <div className="mb-3">
                    <label className="form-label">Record of Work By Week </label>
                    <textarea
                        className="form-control"
                        name="recordOfWork"
                        value={scheme.recordOfWork}
                        onChange={handleChange}

                    ></textarea>
                </div>
            </div>

            <div className='col-md-12'>
                <div className="mb-3">
                    <label className="form-label">Prep Work Set </label>
                    <textarea
                        className="form-control"
                        name="prepWorkSet"
                        value={scheme.prepWorkSet}
                        onChange={handleChange}></textarea>
                </div>
            </div>

            <div className='col-md-12'>
                <div className="mb-3">
                    <label className="form-label">Ref. to Mark Sheet </label>
                    <textarea
                        className="form-control"
                        name="refToMarkSheet"
                        value={scheme.refToMarkSheet}
                        onChange={handleChange}

                    ></textarea>
                </div>
            </div>
            <p className="text-center text-success">{status}</p>
            <p className="text-center"><button onClick={() => addScheme()} className="btn btn-success">Submit Scheme of Work</button></p>
        </div>
    )
}