'use client';

import { Close } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function EditAssignment(props: any) {

    const [assignment, setAssignment] = useState<any>({})

    const getAssignment = async (id: number) => {
        let response = await fetch('/api/assignments/getOne/' + id);
        let result = await response.json();
        setAssignment(result.data.assignment);
    }

    const handleUpdateAssignment = async (event: any) => {
        event.preventDefault();
        const {
            topic,
            question,
            instruction
        } = event.target;

        let assignment = {
            topic: topic.value,
            question: question.value,
            instruction: instruction.value
        }
        await fetch('/api/assignments/update/'+props.assignmentId, {
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify(assignment)
        })
    }

    useEffect(() => {
        getAssignment(props.assignmentId);
    }, []);

    return (
        <form className='w-100 m-auto' onSubmit={handleUpdateAssignment}>
            <h1 className="h3 mb-3 fw-normal bg-light p-5 w-100 d-flex flex-row justify-content-between" >Edit an assignment <button className="btn btn-success" onClick={() => props.setEdit(false)}> <Close /> close </button></h1>
            <div className="form-floatin">
                <label htmlFor="floatingInput">Topic</label>
                <input type="text" name='topic' defaultValue={assignment?.topic} className="form-control" id="topic" placeholder="Your question here" autoComplete='questions' />
            </div>
            <br/>
            <div className="form-floatin">
                <label htmlFor="floatingPassword">Question</label>
                <textarea name="question" defaultValue={assignment?.question} placeholder='Instruction here' id="question" className="form-control" rows={5} autoComplete='text'></textarea>
            </div>
            <br/>

            <div className="form-floatin">
                <label htmlFor="floatingPassword">Instruction (optional)</label>
                <textarea name="instruction" placeholder='Instruction here' defaultValue={assignment?.instruction} id="instruction" className="form-control" rows={3} autoComplete='text'>
                </textarea>
            </div><br />
            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-5" type="submit">Submit</button>
            </div>
        </form>
    )

}