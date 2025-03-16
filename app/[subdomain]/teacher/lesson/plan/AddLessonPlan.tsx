import { useState } from "react"

export default function AddLessonPlan(props: any) {
    let userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
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
    });
    const [status, setStatus]= useState('');
    
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

    
    async function addPlan(): Promise<void> {
        
        setStatus('Adding plan... Wait');
        let finalPlan = { ...plan, user: userId };
        console.log(finalPlan);
        const planResponse = await fetch('/api/plans',
            {
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(finalPlan)
            }).then(res => res.json());
        if (planResponse.status) {
            setStatus(planResponse.status + ": " + planResponse.message);
        }
    }

    return (
        <form className='w-100 m-auto'>

            <h2 className="h3 mb-3 fw-normal bg-light p-2">Add a lesson plan</h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="text" name='subject' onChange={addPlanChange} className="form-control" id="subject" autoComplete='questions' />
                        <label htmlFor="subject">Subject</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="text" name='teacher' onChange={addPlanChange} className="form-control" id="teacher" autoComplete='questions' />
                        <label htmlFor="teacher">Teacher</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="text" name='topic' onChange={addPlanChange} className="form-control" id="topic" autoComplete='questions' />
                        <label htmlFor="topic">Topic</label>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="text" name='class' onChange={addPlanChange} className="form-control" id="class" autoComplete='questions' />
                        <label htmlFor="class">Class</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="week" name='week' onChange={addPlanChange} className="form-control" id="week" autoComplete='questions' />
                        <label htmlFor="week">Week</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="hour" name='duration' onChange={addPlanChange} className="form-control" id="duration" autoComplete='questions' />
                        <label htmlFor="duration">Duration</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <textarea name="objectives" id="objectives" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                        <label htmlFor="quest">Objectives</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <textarea name="materials" id="materials" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                        <label htmlFor="quest">Materials</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <textarea name="previousKnowledge" id="previousKnowledge" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                        <label htmlFor="prev">Previous Knowledge</label>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-floating">
                        <textarea name="introduction" id="introduction" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                        <label htmlFor="intro">Introduction</label>
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
                    <div className="form-floating">
                        <textarea name="evaluation" id="evaluation" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                        <label htmlFor="instru">Evaluation</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <textarea name="conclusion" id="conclusion" onChange={addPlanChange} className="form-control" rows={5} autoComplete='text'></textarea>
                        <label htmlFor="conc">Conclusion</label>
                    </div>
                </div>

            </div>
             <p className="text-center text-success">{status}</p>
            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-2" type="button" onClick={() => addPlan()}>Submit</button>
            </div>
        </form>
    )
}