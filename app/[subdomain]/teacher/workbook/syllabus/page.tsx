import { useCallback, useEffect, useRef, useState } from "react";

import ViewSyllabus from "./ViewSyllabus";
import EditSyllabus from "./EditSyllabus";
import DeleleModal from "@/app/[subdomain]/components/common/delete-modal";

export default function SyllabusList(props: any) {
    const mountRef = useRef(true);
    const [syllabus, setSyllabus] = useState([{
        _id: "",
        id: 1,
        subject: "Maths",
        teacher: "Ali",
        term: "Second term",
        class: "JSS 1",
        year: "2025",
        textbooks: ["New General Maths", "New Concepts"],
        topics: [{ id: 1, week: 1, topic: "topic here", subtopics: [{ id: 1, subtopic: "sub-topic here" }] }]
    }]);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);
    const [syllabusId, setSyllabusId] = useState('');

    function setEditHandler(_id: string): void {
        setEdit(true);
        setSyllabusId(_id)
    }

    function setViewHandler(_id: string): void {
        setView(true);
        setSyllabusId(_id)
    }

    function setRemoveHandler(_id: string): void {
        setRemove(true);
        setSyllabusId(_id);
    }

    async function removeSyllabusHandler(_id: string): Promise<boolean> {
        const syllabusResponse = await fetch('/api/syllabus/' + _id, { method: "DELETE", mode: "cors" }).then(res => res.json());
        if (syllabusResponse.status === 'success') {
            getSyllabusData();
            return true;
        } else {
            return false;
        }
    }


    const getSyllabusData = useCallback(async () => {
        const syllabusResponse = await fetch('/api/syllabus').then(res => res.json());
        if (syllabusResponse.status === 'success') {
            setSyllabus(syllabusResponse.data.syllabuses)
        } else {
            setSyllabus([...syllabus]);
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getSyllabusData();
        }

        return () => {
            mountRef.current = false;
        }
    });

    if (edit) {
        return <EditSyllabus syllabusId={syllabusId} setEdit={setEdit} />
    }

    if (view) {
        return <ViewSyllabus syllabusId={syllabusId} setView={setView} />
    }

    if (!syllabus?.length) {
        return (
            <div>
                <h3>Termly Syllabus</h3>
                <p className="text-center">No syllabus found</p>
            </div>
        )
    }

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>S/N</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Teacher</th>
                        <th>Term</th>
                        <th>Year</th>
                        <th colSpan={3} className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        syllabus.map((syllabus, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{syllabus.class}</td>
                                    <td>{syllabus.subject}</td>
                                    <td>{syllabus.teacher}</td>
                                    <td>{syllabus.term}</td>
                                    <td>{syllabus.year}</td>
                                    <th className="d-flex justify-content-around">
                                        <button className="btn btn-primary" onClick={() => setEditHandler(syllabus._id)}>Edit</button>
                                        <button className="btn btn-primary" onClick={() => setViewHandler(syllabus._id)}>View</button>
                                        <button className="btn btn-primary" onClick={() => setRemoveHandler(syllabus._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            {remove && (<DeleleModal cb={async () => await removeSyllabusHandler(syllabusId)} closeCallback={setRemove} />)}
        </div>
    )
}