export default function StudentAttendance4ParentPage(params: any) {

    function addClassChange(event: any): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="container">
            <h1>Get a student&apos;s attendance</h1>
            <p>Enter a student&apos;s class and ID below</p>

            <div className='row'>

                <div className='col-md-6'>
                    <div className="form-floatin">
                        <label htmlFor="name">Class</label>
                        <input type="text" name='class' className="form-control" id="class" autoComplete='questions' />
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className="form-floatin">
                        <label htmlFor="name">Student ID</label>
                        <input type='text' name='studentId' onChange={addClassChange} className="form-control" id="classTeacher" autoComplete='questions' />
                    </div>
                </div>

            </div>
            <button className="btn btn-primary mt-2" >Submit</button>
        </div>
    )
}