import { useState } from "react"

export default function TeacherClasses() {


    const [clasxs, setClasxs] = useState([{
        id: 1,
        class: 'JSS2',
        classTeacher: 'Beell',
        classCaptain: "Mane",
        subject: 'Math',
        time: "8:30am",
        day: "Wed"
    }]);

    const [clasx, setClasx] = useState({
        id: 0,
        class: '',
        classTeacher: '',
        classCaptain: "",
        subject: '',
        time: "",
        day: ""
    });


    const [selectedClass, setSelectedClass] = useState<any>(null);
    const [isEditing, setIsEditing] = useState(false);



    function setEdit(event: any): void {
        throw new Error("Function not implemented.");
    }

    function addClassChange(event: { target: { name: string, value: string } }): void {
        setClasx({ ...clasx, id: clasxs.length + 1, [event.target.name]: event.target.value })
    }

    function addClass(): void {
        setClasxs([...clasxs, clasx]);
    }

    return (
        <div>
            <form>
                <h1>Classes</h1>
                <div className='row'>

                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Class</label>
                            <input type="text" name='class' onChange={addClassChange} className="form-control" id="class" autoComplete='questions' />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Class Teacher</label>
                            <input type='text' name='classTeacher' onChange={addClassChange} className="form-control" id="classTeacher" autoComplete='questions' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Captain</label>
                            <input type="text" name='classCaptain' onChange={addClassChange} className="form-control" id="captain" autoComplete='questions' />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Subject</label>
                            <input type='text' name='subject' onChange={addClassChange} className="form-control" id="subject" autoComplete='questions' />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Time</label>
                            <input type="time" name='time' onChange={addClassChange} className="form-control" id="time" autoComplete='questions' />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="form-floatin">
                            <label htmlFor="name">Day</label>
                            <input type='day' name='day' onChange={addClassChange} className="form-control" id="day" autoComplete='questions' />
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
                            <th>Class</th>
                            <th>Teacher</th>
                            <th>Captain</th>
                            <th>Time</th>
                            <th>Subject</th>
                            <th>Day</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clasxs.map((clasx) => {

                                return (
                                    <tr key={clasx.id}>
                                        <td>{clasx.id}</td>
                                        <td>{clasx.class}</td>
                                        <td>{clasx.classTeacher}</td>
                                        <td>{clasx.classCaptain}</td>
                                        <td>{clasx.time}</td>
                                        <td>{clasx.subject}</td>
                                        <td>{clasx.day}</td>
                                        <th><button className="btn btn-primary" onClick={() => {setIsEditing(true);setSelectedClass(clasx.id);}}>Edit</button> <button className="btn btn-primary">Delete</button></th>
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
                                <h5 className="modal-title">Edit Class</h5>
                                <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
                            </div>
                            <div className="modal-body">

                                <form>
                                    <h1>Classes</h1>
                                    <div className='row'>

                                        <div className='col-md-3'>
                                            <div className="form-floatin">
                                                <label htmlFor="name">Class</label>
                                                <input type="text" name='class' defaultValue={clasxs.filter(cl=>cl.id===selectedClass)[0].class} onChange={addClassChange} className="form-control" id="class" autoComplete='questions' />
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="form-floatin">
                                                <label htmlFor="name">Class Teacher</label>
                                                <input type='text' name='classTeacher' onChange={addClassChange} className="form-control" id="classTeacher" autoComplete='questions' />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-floatin">
                                                <label htmlFor="name">Captain</label>
                                                <input type="text" name='classCaptain' onChange={addClassChange} className="form-control" id="captain" autoComplete='questions' />
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="form-floatin">
                                                <label htmlFor="name">Subject</label>
                                                <input type='text' name='subject' onChange={addClassChange} className="form-control" id="subject" autoComplete='questions' />
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="form-floatin">
                                                <label htmlFor="name">Time</label>
                                                <input type="time" name='time' onChange={addClassChange} className="form-control" id="time" autoComplete='questions' />
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="form-floatin">
                                                <label htmlFor="name">Day</label>
                                                <input type='day' name='day' onChange={addClassChange} className="form-control" id="day" autoComplete='questions' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-center'>
                                        <button className="btn btn-primary w-25 py-2 my-2" onClick={addClass} type="button">Update</button>
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