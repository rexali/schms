'use client';

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TeacherClasses() {


    const [schClasses, setSchClasses] = useState([{
        id: 1,
        section: 'primary',
        class: 'JSS 1',
        teacher: 'Beell',
        captain: "Mane",
        description: 'a saphire class known for hardwork'
    }]);

    const [schClass, setSchClass] = useState({
        id: 0,
        section: '',
        class: '',
        teacher: '',
        captain: "",
        description: ''

    });


    const [selectedClass, setSelectedClass] = useState<any>(null);
    const [isEditing, setIsEditing] = useState(false);



    function setEdit(event: any): void {
        throw new Error("Function not implemented.");
    }

    function addClassChange(event: { target: { name: string, value: string } }): void {
        setSchClass({ ...schClass, id: schClasses.length + 1, [event.target.name]: event.target.value })
    }

    function addClass(): void {
        setSchClasses([...schClasses, schClass]);
    }

    return (
        <div className="container">
            <form>
                <h1>Classes</h1>
                <div className='row'>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="text" name='class' onChange={addClassChange} placeholder="e.g. JSS 1 etc" className="form-control" id="class" autoComplete='questions' />
                            <label htmlFor="name">Class Division</label>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="text" name='section' onChange={addClassChange} placeholder="e.g. Primary etc" className="form-control" id="class" autoComplete='questions' />
                            <label htmlFor="name">Class Section</label>
                        </div>
                    </div>


                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type='text' name='teacher' onChange={addClassChange} className="form-control" id="teacher" autoComplete='questions' />
                            <label htmlFor="name">Class Teacher</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="text" name='captain' onChange={addClassChange} className="form-control" id="captain" autoComplete='questions' />
                            <label htmlFor="name">Class Captain</label>
                        </div>
                    </div>

                    <div className='col-md-12 mt-2'>
                        <div className="form-floating">
                            <textarea name='description' onChange={addClassChange} className="form-control" id="description" autoComplete='questions' ></textarea>
                            <label htmlFor="name">Description</label>
                        </div>
                    </div>

                </div>

                <div className='text-center'>
                    <button className="btn btn-primary w-25 py-2 my-2" onClick={addClass} type="button">Submit</button>
                </div>
            </form>


            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>S/N</th>
                            <th>Class Level</th>
                            <th>Section</th>
                            <th>Description</th>
                            <th>Captain</th>
                            <th>Teacher</th>
                            <th colSpan={2} className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schClasses.map((schClass) => {

                                return (
                                    <tr key={schClass.id}>
                                        <td>{schClass.id}</td>
                                        <td>{schClass.class}</td>
                                        <td>{schClass.section}</td>
                                        <td>{schClass.description}</td>
                                        <td>{schClass.captain}</td>
                                        <td>{schClass.teacher}</td>
                                        <th className="d-flex justify-content-around"><button className="btn btn-primary" onClick={() => { setIsEditing(true); setSelectedClass(schClass.id); }}>Edit</button> <button className="btn btn-primary">Delete</button></th>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>

            {isEditing && (
                <div className="modal show d-block" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit a class</h5>
                                <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
                            </div>
                            <div className="modal-body">

                                <form>
                                    <div className='row'>

                                        <div className='col-md-3'>
                                            <div className="form-floating">
                                                <input type="text" name='class' onChange={addClassChange} placeholder="e.g. JSS 1 etc" className="form-control" id="class" autoComplete='questions' />
                                                <label htmlFor="name">Class Division</label>
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="form-floating">
                                                <input type="text" name='section' onChange={addClassChange} placeholder="e.g. Primary etc" className="form-control" id="class" autoComplete='questions' />
                                                <label htmlFor="name">Class Section</label>
                                            </div>
                                        </div>


                                        <div className='col-md-3'>
                                            <div className="form-floating">
                                                <input type='text' name='teacher' onChange={addClassChange} className="form-control" id="teacher" autoComplete='questions' />
                                                <label htmlFor="name">Class Teacher</label>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-floating">
                                                <input type="text" name='captain' onChange={addClassChange} className="form-control" id="captain" autoComplete='questions' />
                                                <label htmlFor="name">Class Captain</label>
                                            </div>
                                        </div>

                                        <div className='col-md-12 mt-2'>
                                            <div className="form-floating">
                                                <textarea name='description' onChange={addClassChange} className="form-control" id="description" autoComplete='questions' ></textarea>
                                                <label htmlFor="name">Description</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='text-center'>
                                        <button className="btn btn-primary w-25 py-2 my-2" onClick={addClass} type="button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>

    )
}