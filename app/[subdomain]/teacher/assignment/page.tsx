'use client'

import { useState } from 'react';
import ViewAssignment from './ViewAssignment';
import EditAssignment from './EditAssignment';
import AddAssignment from './AddAssignment';
import AssignmentList from './AssignmentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import GradeSubmission from './GradeSubmission';
import StudentSubmissions2Teacher from './StudentSubmissions2Teacher';

export default function AssignmentPage(props: any) {

    const [view, setView] = useState<any>();
    const [edit, setEdit] = useState<any>();
    const [grade, setGrade] = useState<any>();

    const [list, setList] = useState<any>([]);
    const [assignmentId, setAssignmentId] = useState<number>();
    const [submissionId, setSubmissionId] = useState<number>();


    if (view) {
        return <ViewAssignment setView={setView} assignmentId={assignmentId} />
    }

    if (edit) {
        return <EditAssignment setEdit={setEdit} assignmentId={assignmentId} />
    }

    if (grade) {
        return <GradeSubmission setGrade={setGrade} submissionId={submissionId} />
    }

    return (
        <main className="form-signin mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <AddAssignment setList={setList} />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h1 className="h3 mb-3 fw-normal bg-light p-2">Assignments</h1>
                        <AssignmentList
                            setEdit={setEdit}
                            setView={setView}
                            setAssignmentId={setAssignmentId}
                            data={list}
                        />
                        <hr />
                        <h1 className="h3 mb-3 fw-normal bg-light p-2">Students Submissions</h1>
                        <StudentSubmissions2Teacher
                            setGrade={setGrade}
                            setSubmissionId={setSubmissionId}
                        />
                    </div>
                </div>
            </div>
            <p className="mt-5 mb-3 text-body-secondary text-center">&copy; 2017–2024</p>
        </main>
    )
}