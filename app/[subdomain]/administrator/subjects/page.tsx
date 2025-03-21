'use client';

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SubjectsList() {


    const [subjects, setSubjects] = useState([{
        id: 1,
        name: 'Maths',
        class: 'JSS 1',
        teacher: 'Bee Kee',
        category: "Science",
        description: 'Mathematics is ..'
    }]);

    const [subject, setSubject] = useState({
        id: 0,
        name: '',
        class: '',
        teacher: '',
        category: "",
        description: ''

    });


    const [selectedClass, setSelectedClass] = useState<any>(null);
    const [isEditing, setIsEditing] = useState(false);



    function setEdit(event: any): void {
        throw new Error("Function not implemented.");
    }

    function addClassChange(event: { target: { name: string, value: string } }): void {
        setSubject({ ...subject, id: subjects.length + 1, [event.target.name]: event.target.value })
    }

    function addClass(): void {
        setSubjects([...subjects, subject]);
    }

    return (
        <div className="container">
            <form>
                <h1>Subjects</h1>
                <div className='row'>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="text" name='name' onChange={addClassChange} placeholder="e.g. JSS 1 etc" className="form-control" id="name" autoComplete='questions' />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floating">
                            <input type="text" name='class' onChange={addClassChange} placeholder="e.g. Primary etc" className="form-control" id="class" autoComplete='questions' />
                            <label htmlFor="name">Class</label>
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
                            <input type="text" name='category' onChange={addClassChange} className="form-control" id="category" autoComplete='questions' />
                            <label htmlFor="name">Category</label>
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
                            <th>Name</th>
                            <th>Class</th>
                            <th>Teacher</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th colSpan={2} className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subjects.map((subject) => {

                                return (
                                    <tr key={subject.id}>
                                        <td>{subject.id}</td>
                                        <td>{subject.name}</td>
                                        <td>{subject.class}</td>
                                        <td>{subject.teacher}</td>
                                        <td>{subject.description}</td>
                                        <td>{subject.category}</td>
                                        <th className="d-flex justify-content-around"><button className="btn btn-primary" onClick={() => { setIsEditing(true); setSelectedClass(subject.id); }}>Edit</button> <button className="btn btn-primary">Delete</button></th>
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
                                                <input type="text" name='name' onChange={addClassChange} placeholder="e.g. JSS 1 etc" className="form-control" id="name" autoComplete='questions' />
                                                <label htmlFor="name">Name</label>
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="form-floating">
                                                <input type="text" name='class' onChange={addClassChange} placeholder="e.g. Primary etc" className="form-control" id="class" autoComplete='questions' />
                                                <label htmlFor="name">Class</label>
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
                                                <input type="text" name='category' onChange={addClassChange} className="form-control" id="category" autoComplete='questions' />
                                                <label htmlFor="name">Category</label>
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

// 'use client'
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SubjectsList = () => {

//     const [subjectsData, setSubjectData] = useState([
//         {
//             name: 'Maths',
//         },
//         // Add more classes here
//     ]);

//     const [subject, setSubject] = useState({
//         name: '',
//     }
//     )

//     function handleClassChange(event: { target: { name: string, value: string } }): void {
//         setSubject({ ...subject, [event.target.name]: event.target.value })
//     }

//     function addSubject(event: any): void {
//         setSubjectData([...subjectsData, { ...subject }]);
//     }

//     return (
//         <div className="container mt-5">
//             <h1>Add a subject</h1>
//             <form>
//                 <div className='row'>
//                     <div className='col-md-6'>
//                         <div className="mb-2">
//                             {/* <label>Class Name</label> */}
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 value={subject.name}
//                                 onChange={handleClassChange}
//                                 placeholder='Enter subject here'
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className='col-md-6'>
//                         <div className='text-center'>
//                             <button type="button" className="btn btn-secondary" onClick={addSubject}>Add Subject</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//             <h2>Subjects List</h2>

//             <div className="table-responsive">
//                 <table className="table table-bordered table-striped">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th>Subject Name</th>
//                             <th colSpan={2} className='text-center'>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {subjectsData.map((subject, studentIndex) => (
//                             <tr key={studentIndex}>
//                                 <td>{subject.name}</td>
//                                  <td className='d-flex justify-content-around'><button className='btn btn-primary'>View</button><button className='btn btn-primary'>Edit</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     );
// };

// export default SubjectsList;