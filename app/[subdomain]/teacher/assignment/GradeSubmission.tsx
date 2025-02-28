'use client';

import { Close } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';

export default function GradeSubmission(props: any) {

    const [response, setResponse] = useState<any>('');
    const [submission, setSubmission] = useState<any>({})

    const getSubmission = async (id: number) => {
        let response = await fetch('/api/submissions/' + id);
        let result = await response.json();
        setSubmission(result.data?.submission);
    }

    const handleSubmitAssignment = async (event: any) => {
        event.preventDefault();
        const {
            topic,
            question,
            instruction,
            answer,
            grade
        } = event.target;


        let submission = {
            topic: topic.value,
            question: question.value,
            instruction: instruction.value,
            answer: answer.value,
            grade: grade.value

        }

        let response = await fetch('/api/submissions', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(submission)
        })

        if (response.ok) {
            setResponse("Successfully submitted")
        } else {
            setResponse("Something is wrong")
        }

    }

    useEffect(() => {
        getSubmission(props.submissionId);
    }, []);

    return (
        <form className='w-100 m-auto' onSubmit={handleSubmitAssignment}>

            <h3 className="h3 mb-3 fw-normal bg-light p-2 d-flex flex-row justify-content-between">Answer an submission <button className='btn btn-success' onClick={() => props.setGrade(false)}><Close /> close</button></h3>

            <div className="form-floatin">
                <label htmlFor="topic">Topic</label>
                <input type="text" name='topic' defaultValue={submission?.topic} className="form-control" id="topic" autoComplete='questions' disabled />
            </div><br />

            <div className="form-floatin">
                <label htmlFor="floatingPassword">Question</label>
                <textarea name="question" id="question" defaultValue={submission?.question} className="form-control" rows={5} autoComplete='text' disabled></textarea>
            </div><br />
            <div className="form-floatin">
                <label htmlFor="floatingPassword">Instruction (optional)</label>
                <textarea name="instruction" defaultValue={submission?.instruction} id="instruction" className="form-control" rows={3} autoComplete='text' disabled></textarea>
            </div><br />

            <div className="form-floatin">
                <label htmlFor="floatingPassword">Answer</label>
                <textarea name="answer" id="answer" className="form-control" rows={3} autoComplete='text'></textarea>
            </div><br />

            <div className="form-floatin">
                <label htmlFor="floatingPassword">File</label>
                <input name="file" id="file" className="form-control" type='file' />
            </div><br />

            <div className="form-floatin">
                <label htmlFor="floatingPassword">Grade</label>
                <textarea name="grade" id="grade" className="form-control" rows={3} autoComplete='text'></textarea>
            </div>

            <div className='text-center bg-success text-white'>{response}</div>

            <div className='text-center'>
                <button className="btn btn-primary w-100 py-2 my-2" type="submit">Submit</button>
            </div>
        </form>
    )
}