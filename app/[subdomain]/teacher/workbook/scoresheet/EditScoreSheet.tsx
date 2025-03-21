'use client'

import { useCallback, useEffect, useRef, useState } from "react"

export default function EditScoreSheet(props: any) {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const mountRef = useRef(true);
    const [status, setStatus] = useState('');
    const MSN = [1, 2, 3, 4, 5, 6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15]
    const [scoreSheet, setScoreSheet] = useState({
        subject: "",
        term: "",
        class: "",
        year: "",
        date: "",
        teacher: "",
        students: [{
            id: 1,
            name: "",
            scores: [
                { week: 1, maxMark: "", score: "" },
                { week: 2, maxMark: "", score: "" },
                { week: 3, maxMark: "", score: "" },
                { week: 4, maxMark: "", score: "" },
                { week: 5, maxMark: "", score: "" },
                { week: 6, maxMark: "", score: "" },
                { week: 7, maxMark: "", score: "" },
                { week: 8, maxMark: "", score: "" },
                { week: 9, maxMark: "", score: "" },
                { week: 10, maxMark: "", score: "" },
                { week: 11, maxMark: "", score: "" },
                { week: 12, maxMark: "", score: "" },
                { week: 13, maxMark: "", score: "" },
                { week: 14, maxMark: "", score: "" },
                { week: 15, maxMark: "", score: "" }
            ],
        }]
    });

    function handleChange(event: { target: { name: string, value: string } }): void {
        setScoreSheet({ ...scoreSheet, [event.target.name]: event.target.value })
    }

    function addNewStudentScore(): void {
        setScoreSheet({
            ...scoreSheet,
            students: [
                ...scoreSheet.students,
                {
                    id: scoreSheet.students.length + 1,
                    name: "",
                    scores: [
                        { week: 1, maxMark: "", score: "" },
                        { week: 2, maxMark: "", score: "" },
                        { week: 3, maxMark: "", score: "" },
                        { week: 4, maxMark: "", score: "" },
                        { week: 5, maxMark: "", score: "" },
                        { week: 6, maxMark: "", score: "" },
                        { week: 7, maxMark: "", score: "" },
                        { week: 8, maxMark: "", score: "" },
                        { week: 9, maxMark: "", score: "" },
                        { week: 10, maxMark: "", score: "" },
                        { week: 11, maxMark: "", score: "" },
                        { week: 12, maxMark: "", score: "" },
                        { week: 13, maxMark: "", score: "" },
                        { week: 14, maxMark: "", score: "" },
                        { week: 15, maxMark: "", score: "" }
                    ],
                }

            ]

        })
    }

    function setStudentScore(event: { target: { name: string, value: string } }, sid: number, week: number): void {
        setScoreSheet(c => ({ ...c, students: c.students.map(student => student.id === sid ? { ...student, scores: student.scores.map(score => score.week === week ? { ...score, score: event.target.value } : score) } : student) }));
    }

    function setStudentMaxScore(event: { target: { name: string, value: string } }, sid: number, week: number): void {
        setScoreSheet(c => ({ ...c, students: c.students.map(student => student.id === sid ? { ...student, scores: student.scores.map(score => score.week === week ? { ...score, maxMark: event.target.value } : score) } : student) }));
    }

    function setStudent(event: { target: { name: string, value: string } }, sid: number): void {
        setScoreSheet(c => ({ ...c, students: c.students.map(student => student.id === sid ? { ...student, name: event.target.value } : student) }));
    }

    function removeStudentScoreSheet(id: Number): void {
        setScoreSheet({ ...scoreSheet, students: scoreSheet.students.filter((_, index) => index !== id) })
    }


    const updateScoreSheet = async () => {
        console.log("Submitted: ", scoreSheet);
        setStatus("Submitting...")
        let finalMarkSheet = { ...scoreSheet, user: userId }
        const markSheetResponse = await fetch('/api/marksheets/' + props.scoreSheetId, {
            mode: 'cors',
            method: "PATCH",
            body: JSON.stringify({ ...finalMarkSheet })
        }).then(res => res.json());
        if (markSheetResponse.status === 'success') {
            setStatus(markSheetResponse.status)
        } else {
            setStatus(markSheetResponse.status + ": " + markSheetResponse.message)
        }

    }

    const getMarkSheetData = useCallback(async () => {
        const markSheetResponse = await fetch('/api/marksheets/' + props.scoreSheetId).then(res => res.json());
        if (markSheetResponse.status === 'success') {
            setScoreSheet(markSheetResponse.data.marksheet)
        } else {
            setScoreSheet({ ...scoreSheet })
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getMarkSheetData();
        }

        return () => {
            mountRef.current = false;
        }
    });

    if (!Object.keys(scoreSheet).length) {
        return (
            <div>
                <h2>Weekly Score Sheet</h2>
                <p className="text-center">No Score Sheet found</p>
            </div>
        )
    }


    return (
        <div className="container">
            <h2 className='d-flex justify-content-between'>Edit scoresheet <button className='btn btn-success' onClick={() => props.setEdit(false)}>close</button></h2>

            <div className='row'>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            defaultValue={scoreSheet.subject}
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
                            defaultValue={scoreSheet.class}
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
                            defaultValue={scoreSheet.teacher}
                            onChange={handleChange}

                        />
                    </div>
                </div>


                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            defaultValue={scoreSheet.date.split("T")[0]}
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
                            value={scoreSheet.term}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Year</label>
                        <input
                            type="yaer"
                            className="form-control"
                            name="year"
                            defaultValue={scoreSheet.year}
                            onChange={handleChange}

                        />
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>S/N</th>
                            <th colSpan={2}>Name</th>
                            {
                                MSN?.map(score => <th key={score} className="text-center">M {score}</th>)
                            }
                            {/* <th colSpan={15} className="text-center">Mark</th> */}
                            <th colSpan={3} className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scoreSheet?.students?.map((student, index) => {
                                return index === 0 ? (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="text-align-middle" colSpan={2}>
                                            <input type="text" className="d-inline-block text-end" size={10} defaultValue={"Max.Score"} disabled />
                                            <input type="text" className="d-inline-block align-self-center" size={10} defaultValue={student.name} onChange={(ev) => setStudent(ev, student.id)} />
                                        </td>
                                        {
                                            student.scores.map(score => (
                                                <td key={score.week}>
                                                    <input type="text" className="d-inline-block" size={5} defaultValue={score.maxMark} name={`maxMark${score.week}`} id="maxMark" onChange={(ev) => setStudentMaxScore(ev, student.id, score.week)} />
                                                    <input type="text" className="d-inline-block" size={5} defaultValue={score.score} name={`score${score.week}`} id="score" onChange={(ev) => setStudentScore(ev, student.id, score.week)} />
                                                </td>
                                            ))
                                        }
                                        <td className="d-flex justify-content-around align-self-center">
                                            <button className="btn btn-primary align-self-center" onClick={() => removeStudentScoreSheet(index)}>X</button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="text-align-middle" colSpan={2}>
                                            {/* <input type="text" className="d-inline-block text-end" size={10} defaultValue={"Max.Score"} disabled /> */}
                                            <input type="text" className="d-inline-block align-self-center" size={10} defaultValue={student.name} onChange={(ev) => setStudent(ev, student.id)} />
                                        </td>
                                        {
                                            student.scores.map(score => (
                                                <td key={score.week}>
                                                    {/* <input type="text" className="d-inline-block" size={5} defaultValue={score.maxMark} name={`maxMark${score.week}`} id="maxMark" onChange={(ev) => setStudentMaxScore(ev, student.id, score.week)} /> */}
                                                    <input type="text" className="d-inline-block" size={5} defaultValue={score.score} name={`score${score.week}`} id="score" onChange={(ev) => setStudentScore(ev, student.id, score.week)} />
                                                </td>
                                            ))
                                        }
                                        <td className="d-flex justify-content-around align-self-center">
                                            <button className="btn btn-primary align-self-center" onClick={() => removeStudentScoreSheet(index)}>X</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>

            <p><button className="btn btn-primary" onClick={() => addNewStudentScore()}> Add Student</button></p>
            <p className="text-center text-success">{status}</p>
            <p className="text-center"><button onClick={() => updateScoreSheet()} className="btn btn-success">Update Score</button></p>
        </div>
    )
}