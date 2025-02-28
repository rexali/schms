'use client'

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerStudentAssignment from './AnswerStudentAssignment';
import StudentAssignments from './StudentAssignments';
// import EditStudentSubmittedAssignment from './EditStudentSubmittedAssigment';
import StudentSubmissions from './StudentSubmissions';
import EditSubmission from './EditSubmission';

export default function StudentAssignmentPage(props: any) {

    const [view, setView] = useState<any>();
    const [edit, setEdit] = useState<any>();
    const [list, setList] = useState<any>([]);
    const [assignmentId, setAssignmentId] = useState<number>();
    const [submissionId, setSubmissionId] = useState<number>();


    if (view) {
        return <AnswerStudentAssignment setView={setView} assignmentId={assignmentId} setList={setList} />
    }

    if (edit) {
        return <EditSubmission setEdit={setEdit} submissionId={submissionId} />
    }

    return (
        <main className="form-signin mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="h3 mb-3 fw-normal bg-light p-2">Assignments</h1>
                        <StudentAssignments
                            setEdit={setEdit}
                            setView={setView}
                            setAssignmentId={setAssignmentId}
                            data={list}
                        />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h1 className="h3 mb-3 fw-normal bg-light p-2">Submitted assignments</h1>
                        <StudentSubmissions
                            setEdit={setEdit}
                            setView={setView}
                            setSubmissionId={setSubmissionId}
                            data={list}
                        />
                    </div>
                </div>
            </div>
            <p className="mt-5 mb-3 text-body-secondary text-center">&copy; 2017–2024</p>
        </main>
    )
}