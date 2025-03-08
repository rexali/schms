import { useState } from "react"

export default function AddLessonPlan(props: any) {
    const [plan, setPlan] = useState({
        teacher: '',
        class: '',
        subject: '',
        topic: '',
        duration: '',
        week: '',
        objectives: '',
        materials: '',
        previousKnowledge: '',
        introduction:'',
        presentations: [{ id: 1, text: '' }],
        evaluation:'',
        conclusion:''
    })

    const addPresentationStep = () => {
        setPlan({ ...plan, presentations: [...plan.presentations, { id: plan.presentations.length + 1, text: '' }] })
    }
 
    function removePresentationStep(id: any): void {
        setPlan({ ...plan, presentations: plan.presentations.filter(presentaion => presentaion.id !== Number(id)) })
    }

    const addPresentationStepChange = (id: number, text: string) => {
        setPlan({ ...plan, presentations: plan.presentations.map(presentaion => presentaion.id === Number(id) ? { ...presentaion, text } : presentaion) })
    }

    const addPlanChange = (e: { target: { name: string, value: string } }) => {
        setPlan({ ...plan, [e.target.name]: e.target.value })
    }

    function addPlan(): void {
        console.log(plan);
    }

    return (
        <form className='w-100 m-auto'>

            <h2 className="h3 mb-3 fw-normal bg-light p-2">Add a lesson plan</h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Subject</label>
                        <input type="text" name='subject' onChange={addPlanChange} className="form-control" id="subject" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" name='topic' onChange={addPlanChange} className="form-control" id="topic" autoComplete='questions' />
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Class</label>
                        <input type="text" name='class' onChange={addPlanChange} className="form-control" id="class" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="week">Week</label>
                        <input type="week" name='week' onChange={addPlanChange} className="form-control" id="week" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Duration</label>
                        <input type="time" name='duration' onChange={addPlanChange} className="form-control" id="duration" autoComplete='questions' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Objectives</label>
                        <textarea name="objectives" id="objectives" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Materials</label>
                        <textarea name="materials" id="materials" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Previous Knowledge</label>
                        <textarea name="previousKnowledge" id="previousKnowledge" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="quest">Introduction</label>
                        <textarea name="introduction" id="introduction" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-12 mt-5">
                    <h2 className="d-flex flex-row justify-content-between">Presentation <button className="btn btn-primary" type="button" onClick={(e) => addPresentationStep()}>Add Step</button></h2>

                    {
                        plan.presentations.map((presentaion, index) => (
                            <div className="form-group" key={index}>
                                <label htmlFor="quest" className="d-flex flex-row justify-content-between">Step: {index + 1} <button className="btn btn-primary" type="button" onClick={(e) => removePresentationStep(presentaion.id)}>X</button></label>
                                <textarea name={`presentaion${presentaion.id}`} id={`description${presentaion.id}`} onChange={(e) => addPresentationStepChange(presentaion.id, e.target.value)} className="form-control" rows={5} autoComplete='text'></textarea>
                            </div>
                        ))
                    }
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="instru">Evaluation</label>
                        <textarea name="evaluation" id="evaluation" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="instru">Conclusion</label>
                        <textarea name="conclusion" id="conclusion" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-2" type="button" onClick={() => addPlan()}>Submit</button>
            </div>
        </form>
    )
}