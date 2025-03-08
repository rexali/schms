import { useState } from "react"
import QuestionsForm from "../../questions/examinations/page"

export default function AddLessonNote(props: any) {
    const [lesson, setLesson] = useState({
        teacher: '',
        class: '',
        subject: '',
        topic: '',
        objectives: '',
        materials: '',
        prerequisite: '',
        introduction: '',
        descriptions: [{ id: 1, text: '', photo: '', video: '', file: {} }],
        conclusion: ''
    })

    const addDescription = () => {
        setLesson({ ...lesson, descriptions: [...lesson.descriptions, { id: lesson.descriptions.length + 1, text: '', photo: '', video: '', file: {} }] })
    }

    const addDescriptionChange = (id: number, e: { target: { name: string, value: string }, currentTarget: any }) => {
        if (e.target.name === 'photo') {
            setLesson({ ...lesson, descriptions: lesson.descriptions.map(description => description.id === Number(id) ? { ...description, [e.target.name]: e.target.value.split('\\').pop(), file: e.currentTarget.files[0] } : description) })
        } else {
            setLesson({ ...lesson, descriptions: lesson.descriptions.map(description => description.id === Number(id) ? { ...description, [e.target.name]: e.target.value } : description) })
        }
    }

    const addLessonChange = (e: { target: { name: string, value: string } }) => {
        setLesson({ ...lesson, [e.target.name]: e.target.value })
    }


    function addLesson(): void {
        console.log(lesson);
    }

    function removeStep(id: any): void {
        setLesson({ ...lesson, descriptions: lesson.descriptions.filter(description => description.id !== Number(id)) })
    }
    return (
        <form className='w-100 m-auto'>

            <h2 className="h3 mb-3 fw-normal bg-light p-2">Add a lesson note</h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Teacher</label>
                        <input type="text" name='teacher' onChange={addLessonChange} className="form-control" id="teacher" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Class</label>
                        <input type="text" name='class' onChange={addLessonChange} className="form-control" id="class" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Subject</label>
                        <input type="text" name='subject' onChange={addLessonChange} className="form-control" id="subject" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" name='topic' onChange={addLessonChange} className="form-control" id="topic" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Objectives</label>
                        <textarea name="objectives" onChange={addLessonChange} id="objectives" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Materials</label>
                        <textarea name="materials" onChange={addLessonChange} id="material" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Pre-requisite</label>
                        <textarea name="prerequisite" onChange={addLessonChange} id="prerequisite" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Introduction</label>
                        <textarea name="introduction" onChange={addLessonChange} id="introduction" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-12 mt-5">
                    <h2 className="d-flex flex-row justify-content-between">Description <button className="btn btn-primary" type="button" onClick={(e) => addDescription()}>Add Description</button></h2>

                    {
                        lesson.descriptions.map((description, index) => (
                            <div key={index}>
                                <div className="form-group">
                                    <label htmlFor="quest" className="d-flex flex-row justify-content-between">Description {index + 1}&apos;s content (text) <button className="btn btn-primary" type="button" onClick={(e) => removeStep(description.id)}>X</button></label>
                                    <textarea name={`text`} id={`description${description.id}`} onChange={(e) => addDescriptionChange(description.id, e)} className="form-control" rows={5} autoComplete='text'></textarea>
                                </div><br />
                                <div className="form-group">
                                    <label htmlFor="topic">Description {index + 1} &apos;s photo</label>
                                    <input type="file" name={`photo`} className="form-control" id={`image${description.id}`} onChange={(e) => addDescriptionChange(description.id, e)} autoComplete='questions' />
                                </div><br />
                                <div className="form-group">
                                    <label htmlFor="topic">Description {index + 1} &apos;s Youtube video ID </label>
                                    <input type="text" name={`video`} className="form-control" placeholder="ID of your lesson video in Youtube" id={`video${description.id}`} onChange={(e) => addDescriptionChange(description.id, e)} autoComplete='questions' />
                                </div><br />
                            </div>
                        ))
                    }
                </div><br /><br />

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="instru">Conclusion</label>
                        <textarea name="conclusion" onChange={addLessonChange} id="conclusion" className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

            </div>

            {/* <div className="row">
                <QuestionsForm type={'Activity'} />
            </div>

            <div className="row">
                <QuestionsForm type={'Assignment'} />
            </div> */}

            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-2" type="button" onClick={addLesson}>Submit</button>
            </div>
        </form>
    )
}