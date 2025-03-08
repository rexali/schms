'use client';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "../../teacher/assignment/assignment.module.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import DeleleModal from '../../components/common/delete-modal';
// import DeleleModal from "../../teacher/components/delete-modal";


function StudentAssignments(props: any) {
    const [assignments, setAssignments] = useState<any>([])
    const [modal, setModal] = useState<any>(false);


    const getAssignments = async () => {
        let response = await fetch('/api/assignments/getAll');
        let result = await response.json();
        setAssignments(result.results);
    }

    const deleteCallback = async (id: string) => {
        await fetch('/api/assignments/delete/' + id, { method: 'DELETE', mode: 'cors' });
        await getAssignments();
    }

    useEffect(() => {
        getAssignments();
    }, [])

    let data = props.data?.length > 0 ? props.data : assignments;

    return (
        <ListGroup as={'ol'} numbered>
            {
                data?.map((assignment: any, index: number) => {

                    if ((index % 2 === 0)) {
                        return (
                            <ListGroup.Item action variant="secondary" className={styles.spacebetwm} key={index}>
                                <span className="text-truncate" style={{maxWidth:'150px'}} onClick={() => { props.setView(true); props.setAssignmentId(assignment.id) }}>{assignment.topic}</span>
                                {modal && <DeleleModal cb={async () => await deleteCallback(assignment.id)} closeCallback={setModal} />}
                            </ListGroup.Item>
                        )
                    }

                    return (
                        <ListGroup.Item action variant="primary" className={styles.spacebetwm} key={index}>
                            <span className="text-truncate" style={{maxWidth:'100px'}}  onClick={() => { props.setView(true); props.setAssignmentId(assignment.id); }}>{assignment.topic}</span>
                            {modal && <DeleleModal cb={async () => await deleteCallback(assignment.id)} closeCallback={setModal} />}
                        </ListGroup.Item>
                    )

                })
            }

        </ListGroup>
    );
}

export default StudentAssignments;