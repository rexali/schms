'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function AddAssignment(props: any) {

    const [assignments, setAssignments] = useState<any>([]);
    
    const getAssignments = async () => {
        let response = await fetch('/api/assignments/getAll');
        let result = await response.json();
        setAssignments(result.results);
    }
    
    const handleCreateAssignment = async (event: any) => {
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

        await fetch('/api/assignments/create', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(assignment)
        })

        await getAssignments();
    }

    useEffect(()=>{
        props.setList(assignments);
    })

    return (
        <form className='w-100 m-auto' onSubmit={handleCreateAssignment}>

            <h2 className="h3 mb-3 fw-normal bg-light p-2">Add assignment</h2>

            <div className="form-floatin">
                <label htmlFor="topic">Topic</label>
                <input type="text" name='topic' className="form-control" id="topic" autoComplete='questions' />
            </div>

            <div className="form-floatin">
                <label htmlFor="floatingPassword">Question</label>
                <textarea name="question" id="question" className="form-control" rows={5} autoComplete='text'></textarea>
            </div>

            <div className="form-floatin">
                <label htmlFor="floatingPassword">Instruction (optional)</label>
                <textarea name="instruction" id="instruction" className="form-control" rows={3} autoComplete='text'></textarea>
            </div><br />
            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-2" type="submit">Submit</button>
            </div>
        </form>
    )
}