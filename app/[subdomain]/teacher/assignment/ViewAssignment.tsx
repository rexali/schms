'use client';
import { useEffect, useState } from "react";
import styles from "./assignment.module.css";
import { Close } from "@mui/icons-material";

export default function ViewAssignmentPage(props: any) {

    const [assignment, setAssignment] = useState<any>({})

    const getAssignment = async (id: number) => {
        let response = await fetch('/api/assignments/getOne/' + id);
        let result = await response.json();
        setAssignment(result.data.assignment);
        console.log(assignment);
    }

    useEffect(() => {
        getAssignment(props.assignmentId);
    }, []);

    return (<div className={`card ${styles.detailsHeight}`}>
        <h2 className="d-flex flex-row justify-content-between bg-light p-4">Assignment Details <button className="btn btn-success" onClick={() => props.setView(false)}><Close /> close</button></h2><br />
        <h3 className="p-2">Topic: {assignment.topic}</h3><br />
        <h4 className="p-2">Question:</h4><br />
        <p className="p-2">{assignment?.question}</p><br />
        <h4 className="p-2">Instruction:</h4> <br />
        <p className="p-2">{assignment?.instruction}</p>
    </div>)
}