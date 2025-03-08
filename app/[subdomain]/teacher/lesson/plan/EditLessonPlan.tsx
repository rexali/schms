import Close from "@mui/icons-material/Close";

export default function EditLessonPlan(props: any) {

    return (
        <form className='w-100 m-auto'>

            <h2 className="h3 mb-3 fw-normal bg-light p-2 d-flex flex-row justify-content-between">Edit a lesson plan <button className="btn btn-success" onClick={() => props.setEdit(false)}><Close /> close</button></h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Subject</label>
                        <input type="text" name='subject' className="form-control" id="subject" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" name='topic' className="form-control" id="topic" autoComplete='questions' />
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Class</label>
                        <input type="text" name='class' className="form-control" id="class" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="week">Week</label>
                        <input type="week" name='week' className="form-control" id="week" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Duration</label>
                        <input type="time" name='duration' className="form-control" id="duration" autoComplete='questions' />
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
                        <label htmlFor="quest">Materials</label>
                        <textarea name="materials" id="materials" className="form-control" rows={5} autoComplete='text'></textarea>
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
                        <label htmlFor="quest">Introduction</label>
                        <textarea name="introduction" id="introduction" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Presentation</label>
                        <textarea name="description" id="description" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="instru">Evaluation</label>
                        <textarea name="evaluation" id="evaluation" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="instru">Conclusion</label>
                        <textarea name="conclusion" id="conclusion" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-2" type="submit">Submit</button>
            </div>
        </form>
    )
}