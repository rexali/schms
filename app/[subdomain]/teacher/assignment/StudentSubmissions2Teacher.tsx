'use client';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./assignment.module.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import DeleleModal from "../../teacher/components/delete-modal";


function StudentSubmissions2Teacher(props: any) {
    const [submissions, setSubmissions] = useState<any>([])
    const [modal, setModal] = useState<any>(false);


    const getSubmissions = async () => {
        let response = await fetch('/api/submissions');
        let result = await response.json();
        setSubmissions(result.data.submissions);
    }

    const deleteCallback = async (id: string) => {
        await fetch('/api/submissions/' + id, { method: 'DELETE', mode: 'cors' });
        await getSubmissions();
    }

    useEffect(() => {
        getSubmissions();
    }, [])

    let data = props.data?.length > 0 ? props.data : submissions;

    return (
        <ListGroup as={'ol'} numbered>
            {
                data?.map((submission: any, index: number) => {

                    if ((index % 2 === 0)) {
                        return (
                            <ListGroup.Item action variant="secondary" className={styles.spacebetwm} key={index}>
                                <span className="text-truncate" style={{maxWidth:'150px'}}  onClick={() => { props.setGrade(true); props.setSubmissionId(submission.id) }}>{submission.topic}</span>
                                {modal && <DeleleModal cb={async () => await deleteCallback(submission.id)} closeCallback={setModal} />}
                            </ListGroup.Item>
                        )
                    }

                    return (
                        <ListGroup.Item action variant="primary" className={styles.spacebetwm} key={index}>
                            <span className="text-truncate" style={{maxWidth:'150px'}} onClick={() => { props.setGrade(true); props.setSubmissionId(submission.id) }}>{submission.topic}</span>
                            {modal && <DeleleModal cb={async () => await deleteCallback(submission.id)} closeCallback={setModal} />}
                        </ListGroup.Item>
                    )

                })
            }

        </ListGroup>
    );
}

export default StudentSubmissions2Teacher;