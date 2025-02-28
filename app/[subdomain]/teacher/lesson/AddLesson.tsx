
export default function AddLesson(props: any) {

    return (
        <form className='w-100 m-auto'>

            <h2 className="h3 mb-3 fw-normal bg-light p-2">Add a lesson</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" name='topic' className="form-control" id="topic" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Objectives</label>
                        <textarea name="objectives" id="objectives" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Instructional Materials</label>
                        <textarea name="instructionalMaterials" id="previousKnowledge" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Previous Knowledge</label>
                        <textarea name="previousKnowledge" id="previousKnowledge" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Objectives</label>
                        <textarea name="objectives" id="objectives" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Presentation</label>
                        <textarea name="presentaion" id="presentation" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="instru">Class Work</label>
                        <textarea name="classwork" id="classwork" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>

                </div>
            </div>

            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-2" type="submit">Submit</button>
            </div>
        </form>
    )
}