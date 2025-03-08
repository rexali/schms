'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ViewAttendancePage from '../attendance/ViewAttendance';

export default function ViewAttendance(props: any) {



    return (
        <><ViewAttendancePage /><form className='w-100 m-auto' onSubmit={() => { } }>

            <h2 className="h3 mb-3 fw-normal bg-light p-2">Add assessment data</h2>

            <div className='row'>
                <div className='col-md-3'>
                    <div className="form-floatin">
                        <label htmlFor="name">Student name</label>
                        <input type="text" name='name' className="form-control" id="topic" autoComplete='questions' />
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floatin">
                        <label htmlFor="topic">Select class</label>
                        <select className="form-control" name='class' id='class' required>
                            <option value=""></option>
                            <option value="1A">1A</option>
                            <option value="2A">2A</option>
                            <option value="3A">3A</option>
                            <option value="4A">4A</option>
                        </select>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floatin">
                        <label htmlFor="topic">Select subject</label>
                        <select className="form-control" name='subject' id='subject' required>
                            <option value=""></option>
                            <option value="Maths">Maths</option>
                            <option value="English">English</option>
                            <option value="Civic Education">Civic Education</option>
                            <option value="Social Studies">Social Studies</option>
                        </select>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="form-floatin">
                        <label htmlFor="topic">Exams No.</label>
                        <input type="text" name='examsNo' className="form-control" id="examsNo" autoComplete='questions' required />
                    </div>
                </div>

            </div>

            <div className='row'>

                <div className='col-md-2'>
                    <div className="form-floatin">
                        <label htmlFor="topic">C. A.</label>
                        <input type="number" name='ca' className="form-control" id="ca" autoComplete='questions' required />
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="form-floatin">
                        <label htmlFor="topic">Exams</label>
                        <input type="number" name='exams' className="form-control" id="exams" autoComplete='questions' required />
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="form-floatin">
                        <label htmlFor="topic">Total</label>
                        <input type="number" name='total' className="form-control" id="total" autoComplete='questions' required />
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="form-floatin">
                        <label htmlFor="topic">Grade</label>
                        <input type="text" name='grade' className="form-control" id="grade" autoComplete='questions' required />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-floatin">
                        <label htmlFor="topic">Remark</label>
                        <input type="text" name='remark' className="form-control" id="remark" autoComplete='questions' required />
                    </div>
                </div>

            </div>
            <div className='text-center'>
                <button className="btn btn-primary w-25 py-2 my-2" type="submit">Submit</button>
            </div>
        </form></>
    )
}