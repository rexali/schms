'use client'

import { useCallback, useEffect, useRef, useState } from "react"

export default function AddSchemeWork(props: any) {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const mountRef = useRef(true);
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

    const getSchemeData = useCallback(async () => {
        const syllabusResponse = await fetch('/api/schemes/' + props.schemeId).then(res => res.json());
        console.log(syllabusResponse);
        if (syllabusResponse.status === 'success') {
            setScheme(syllabusResponse.data.scheme);
        } else {
            setScheme({ ...scheme });
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getSchemeData();
        }

        return () => {
            mountRef.current = false;
        }
    }, []);


    return (
        <div className="container">
            <h2 className='d-flex justify-content-between'>View Scheme of Work <button className='btn btn-success' onClick={() => props.setView(false)}>close</button></h2>

            <div className='row'>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            defaultValue={scheme.subject}
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
                            defaultValue={scheme.class}
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
                            defaultValue={scheme.teacher}
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
                            defaultValue={scheme.term}
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
                            defaultValue={scheme.month}
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
                            defaultValue={scheme.weekEnding}
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
                            defaultValue={scheme.teacherSignature}
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
                            defaultValue={scheme.principalSignature}
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
                            defaultValue={scheme.year}
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
                            defaultValue={scheme.schemeOfWork}
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
                            defaultValue={scheme.recordOfWork}
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
                            defaultValue={scheme.prepWorkSet}
                            onChange={handleChange}></textarea>
                    </div>
                </div>

                <div className='col-md-12'>
                    <div className="mb-3">
                        <label className="form-label">Ref. to Mark Sheet </label>
                        <textarea
                            className="form-control"
                            name="refToMarkSheet"
                            defaultValue={scheme.refToMarkSheet}
                            onChange={handleChange}

                        ></textarea>
                    </div>
                </div>
                {/* <p className="text-center text-success">{status}</p>
                <p className="text-center"><button onClick={() => updateScheme()} className="btn btn-success">Update Scheme of Work</button></p> */}
            </div>
        </div>
    )
}