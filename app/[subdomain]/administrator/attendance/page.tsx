'use client'

import { Score } from "@mui/icons-material";
import { useState } from "react"

export default function TeacherAttendance(props: any) {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const [status, setStatus] = useState('');
    const [scoreSheet, setScoreSheet] = useState({
        term: "",
        class: "",
        year: "",
        date: "",
        teacher: "",
        department: ""
    });

    function handleChange(event: { target: { name: string, value: string } }): void {
    }

    function addNewStudentScore(): void {

    }

    function setStudentScore(event: { target: { name: string, value: string } }, sid: number, week: number): void {
    }

    function setStudentMaxScore(event: { target: { name: string, value: string } }, sid: number, week: number): void {
    }

    function setStudent(event: { target: { name: string, value: string } }, sid: number): void {
    }

    function removeStudentScoreSheet(id: Number): void {
    }


    const addScoreSheet = async () => {

    }


    function handleOnChange(): import("react").ChangeEventHandler<HTMLInputElement> | undefined {
        throw new Error("Function not implemented.");
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Class</label>
                        <input
                            type="text"
                            className="form-control"
                            name="class"
                            value={scoreSheet.class}
                            onChange={handleChange}

                        />
                    </div>
                </div>

                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input
                            type="text"
                            className="form-control"
                            name="date"
                            value={scoreSheet.date}
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
                            value={scoreSheet.teacher}
                            onChange={handleChange}

                        />
                    </div>
                </div>


                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <input
                            type="date"
                            className="form-control"
                            name="department"
                            value={scoreSheet.department}
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
                            value={scoreSheet.year}
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
                            <th colSpan={3}>Fees paid in the month of </th>
                            <th>Games fee etc paid</th>
                            <th>Name</th>
                            <th>Sex</th>
                            <th>No. in Admission Register</th>
                            <th>Age</th>
                            <th>Date of promotion to the class</th>
                            <th>No.</th>
                            <th colSpan={5}>1 Week .....</th>
                            <th colSpan={15}>1 Weekly Totals</th>
                            <th>No</th>
                            <th>Total Attendance for the Term</th>
                            <th>Brought forward</th>

                        </tr>
                        <tr>
                            <th></th>
                            {/* Fee paid */}
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*  */}
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*  */}
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>Th</th>
                            <th>F</th>

                            {/* weekly total */}
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*  */}
                            <th></th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className='text-center' size={1} defaultValue={1} onChange={handleChange} disabled /></td>
                            {/* Fee paid */}
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            {/*  */}
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} defaultValue={'Aliyu Bello'} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            {/* Week Attendance */}
                            <td><input size={1} type="checkbox" onChange={handleChange} /><input size={1} type="checkbox" onChange={handleChange} /></td>
                            <td><input size={1} type="checkbox" onChange={handleChange} /><input size={1} type="checkbox" onChange={handleChange} /></td>
                            <td><input size={1} type="checkbox" onChange={handleChange} /><input size={1} type="checkbox" onChange={handleChange} /></td>
                            <td><input size={1} type="checkbox" onChange={handleChange} /><input size={1} type="checkbox" onChange={handleChange} /></td>
                            <td><input size={1} type="checkbox" onChange={handleChange} /><input size={1} type="checkbox" onChange={handleChange} /></td>
                            {/*Weekly totals  */}
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            {/*  */}
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td colSpan={2}>M Total</td>
                            <td>W</td>
                            <td colSpan={2}>A Total</td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td colSpan={2}>Date and Signature</td>
                            {/* <td><input size={1} onChange={handleChange} /></td> */}
                            {/* <td><input size={1} onChange={handleChange} /></td> */}
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>M</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>

                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Received by</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>Date</td>
                            <td>Manager</td>
                            {/* <td><input size={1} onChange={handleChange} /></td> */}
                            {/* <td><input size={1} onChange={handleChange} /></td> */}
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>T</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>

                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>W</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Assisted by</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>Th</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>Fri</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>Total</td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>No. on roll<input size={1} onChange={handleChange} /></td>
                            <td colSpan={5}><span><input size={1} onChange={handleChange} />Boys</span> <span><input size={1} onChange={handleChange} />Girls</span></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td>Percentage attending</td>
                            <td colSpan={5}><span><input size={1} onChange={handleChange} />Boys</span> <span><input size={1} onChange={handleChange} />Girls</span></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5}></td>
                            <td><input size={1} onChange={handleChange} defaultValue={1}  disabled/></td>
                            <td><input size={1} onChange={handleChange} defaultValue={2}  disabled/></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                            <td><input size={1} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p><button className="btn btn-primary" onClick={() => addNewStudentScore()}> Add Student</button></p>
            <p className="text-center text-success">{status}</p>
            <p className="text-center"><button onClick={() => addScoreSheet()} className="btn btn-success">Submit Score</button></p>
        </div>
    )
}