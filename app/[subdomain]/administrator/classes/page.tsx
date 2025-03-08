import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ClassesList = () => {


  const [classesData, setClassesData] = useState([
    {
      className: 'Class 1',
      classMaster: 'Mr. Smith',
      classCaptain:'Jone jon',
      section:'primary'
    }
   
    // Add more classes here
  ]);

  const [studentClass, setStudentClass] = useState({
      className: '',
      classMaster: '',
      classCaptain:'',
      section:''
    })

  function handleClassChange(event: {target:{name:string,value:string}}): void {
           setStudentClass({...studentClass,[event.target.name]:event.target.value})
  }

  function addClass(event: any): void {
    setClassesData([...classesData,studentClass]);
  }

  return (
    <div className="container mt-5">
      <h1>Add a class</h1>

      <form>

        <div className='row'>
          <div className='col-md-3'>
            <div className="mb-3">
              <label className="form-label">Class Name</label>
              <input
                type="text"
                className="form-control"
                name="className"
                value={studentClass.className}
                onChange={handleClassChange}
                required
              />
            </div>
          </div>

          <div className='col-md-3'>
            <div className="mb-3">
              <label className="form-label">Class Master</label>
              <input
                type="text"
                className="form-control"
                name="classMaster"
                value={studentClass.classMaster}
                onChange={handleClassChange}
                required
              />
            </div>
          </div>

          <div className='col-md-2'>
            <div className="mb-3">
              <label className="form-label">Section</label>
              <input
                type="text"
                className="form-control"
                name="section"
                value={studentClass.section}
                onChange={handleClassChange}
                required
              />
            </div>
          </div>

          <div className='col-md-2'>
            <div className="mb-3">
              <label className="form-label">Class Captain</label>
              <input
                type="text"
                className="form-control"
                name="classCaptain"
                onChange={handleClassChange}
                required
              />
            </div>
          </div>

        </div>
        <div className='text-center'>
          <button type="button" className="btn btn-secondary" onClick={addClass}>Add class</button>
        </div>
      </form>

      <h2>Classes List</h2>
      
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Class Name</th>
                  <th>Class Captain</th>
                  <th>Class Master</th>
                  <th>Section</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {classesData.map((student, studentIndex) => (
                  <tr key={studentIndex}>
                    <td>{student.className}</td>
                    <td>{student.classCaptain}</td>
                    <td>{student.classMaster}</td>
                    <td>{student.section}</td>
                    <td><button className='btn btn-primary'>View</button><button className='btn btn-primary'>Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  );
};

export default ClassesList;