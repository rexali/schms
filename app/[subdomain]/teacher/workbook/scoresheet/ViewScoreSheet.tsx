'use client'

import { useCallback, useEffect, useRef, useState } from "react"

export default function ViewScoreSheet(props: any) {
    const mountRef = useRef(true);
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const [markSheet, setMarkSheet] = useState({
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
        setMarkSheet({ ...markSheet, [event.target.name]: event.target.value })
    }

    function setStudentScore(event: { target: { name: string, value: string } }, sid: number, week: number): void {
        setMarkSheet(c => ({ ...c, students: c.students.map(student => student.id === sid ? { ...student, scores: student.scores.map(score => score.week === week ? { ...score, score: event.target.value } : score) } : student) }));
    }

    function setStudentMaxScore(event: { target: { name: string, value: string } }, sid: number, week: number): void {
        setMarkSheet(c => ({ ...c, students: c.students.map(student => student.id === sid ? { ...student, scores: student.scores.map(score => score.week === week ? { ...score, maxMark: event.target.value } : score) } : student) }));
    }

    function setStudent(event: { target: { name: string, value: string } }, sid: number): void {
        setMarkSheet(c => ({ ...c, students: c.students.map(student => student.id === sid ? { ...student, name: event.target.value } : student) }));
    }

    function removeStudentScoreSheet(id: Number): void {
        setMarkSheet({ ...markSheet, students: markSheet.students.filter((_, index) => index !== id) })
    }
    const getMarkSheetData = useCallback(async () => {
        const markSheetResponse = await fetch('/api/marksheets/'+props.scoreSheetId).then(res => res.json());
        if (markSheetResponse.status === 'success') {
            setMarkSheet(markSheetResponse.data.marksheet)
        } else {
            setMarkSheet({ ...markSheet })
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


    return (
        <div className="container">
            <h2 className='d-flex justify-content-between'>View score sheet <button className='btn btn-success' onClick={() => props.setView(false)}>close</button></h2>

            <div className='row'>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            defaultValue={markSheet?.subject}
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
                            defaultValue={markSheet?.class}
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
                            defaultValue={markSheet?.teacher}
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
                            defaultValue={markSheet?.date.split("T")[0]}
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
                            defaultValue={markSheet?.term}
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
                            defaultValue={markSheet?.year}
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
                                markSheet?.students[0]?.scores.map(score => <th key={score.week} className="text-center">M {score.week}</th>)
                            }
                            {/* <th colSpan={15} className="text-center">Mark</th> */}
                            <th colSpan={3} className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            markSheet?.students?.map((student, index) => {
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

            {/* <p><button className="btn btn-primary" onClick={() => addNewStudentScore()}> Add Student</button></p>
            <p className="text-center text-success">{status}</p>
            <p className="text-center"><button onClick={() => addScoreSheet()} className="btn btn-success">Submit Score</button></p> */}
        </div>
    )
}