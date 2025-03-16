'use client';

import Close from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";

export default function ViewLessonPlan(props: any) {
    const [admin, setAdmin] = useState(props.admin);
    const mountRef = useRef(true);
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
        introduction: '',
        presentations: [{ id: 1, text: '' }],
        evaluation: '',
        conclusion: ''
    });

    const getPlansData = async () => {
        const planResponse = await fetch('/api/plans/' + props.planId).then(res => res.json());
        if (planResponse.status) {
            console.log(planResponse);
            setPlan(planResponse.data?.plan);
        }
    }

    useEffect(() => {

        if (mountRef.current) {
            getPlansData();
        }

        return () => {
            mountRef.current = false
        };
    });

    return (
        <div className='w-100 m-auto'>

            <h2 className="h3 mb-3 fw-normal bg-light p-2 d-flex flex-row justify-content-between">View lesson plan <button className="btn btn-success" onClick={() => props.setView(false)}><Close /> close</button></h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Subject</label>
                        <p className="bg-light p-2">{plan?.teacher}</p>
                        {/* <input type="text" name='subject' className="form-control" id="subject" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <p className="bg-light p-2">{plan?.topic}</p>
                        {/* <input type="text" name='topic' className="form-control" id="topic" autoComplete='questions' /> */}
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Class</label>
                        <p className="bg-light p-2">{plan?.class}</p>

                        {/* <input type="text" name='class' className="form-control" id="class" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="week">Week</label>
                        <p className="bg-light p-2">{plan?.week}</p>

                        {/* <input type="week" name='week' className="form-control" id="week" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Duration</label>
                        <p className="bg-light p-2">{plan?.duration}</p>

                        {/* <input type="time" name='duration' className="form-control" id="duration" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Objectives</label>
                        <p className="bg-light p-2">{plan?.objectives}</p>

                        {/* <textarea name="objectives" id="objectives" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Materials</label>
                        <p className="bg-light p-2">{plan?.materials}</p>

                        {/* <textarea name="materials" id="materials" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Previous Knowledge</label>
                        <p className="bg-light p-2">{plan?.previousKnowledge}</p>

                        {/* <textarea name="previousKnowledge" id="previousKnowledge" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="quest">Introduction</label>
                        <p className="bg-light p-2">{plan?.introduction}</p>

                        {/* <textarea name="introduction" id="introduction" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="quest">Presentation</label>
                        {
                            plan?.presentations?.map(step => {
                                return (<div key={step.id}>
                                    <p className="bg-light p-2">Step {step?.id}</p>
                                    <p key={step.id} className="bg-light p-2">{step?.text}</p>
                                </div>)
                            })
                        }

                        {/* <textarea name="description" id="description" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="instru">Evaluation</label>
                        <p className="bg-light p-2">{plan?.evaluation}</p>

                        {/* <textarea name="evaluation" id="evaluation" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="instru">Conclusion</label>
                        <p className="bg-light p-2">{plan?.conclusion}</p>

                        {/* <textarea name="conclusion" id="conclusion" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                {
                    admin && (<div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="instru">Comment</label>
                            <textarea name="comment" id="comment" className="form-control" rows={5} autoComplete='text'></textarea>
                        </div>
                    </div>)
                }

            </div>

            {admin && (
                <div className='text-center'>
                    <button className="btn btn-primary w-100 py-2 my-2" type="submit">Submit feedback</button>
                </div>)
            }
        </div>
    )
}