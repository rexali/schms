import ListGroup from "react-bootstrap/esm/ListGroup";
import { Delete, Edit } from "@mui/icons-material";
import { useCallback, useEffect, useRef, useState } from "react";
import EditLessonNote from "./EditLessonNote";
import DeleleModal from "../../../components/common/delete-modal";
import QuestionsForm from "../../questions/examinations/page";

export default function LessonsNotes(props: any) {
    const [modal, setModal] = useState<any>(false);
    const [edit, setEdit] = useState<any>(false);
    const [question, setQuestion] = useState<any>(false);
    const [lessonNotes, setLessonNotes] = useState<any>([{ topic: "topic 11" }, { topic: "topic 22" }]);
    const [lessonId, setLessonId] = useState<any>('');
    const mountRef = useRef(true);

    async function deleteCallback(id: any) {
        const lessonResponse = await fetch('/api/lessons/' + id, { method: 'DELETE', mode: 'cors' }).then(res => res.json());
        if (lessonResponse.status === 'success') {
            return true;
        }

        return false;
    }

    const getLessonsData = useCallback(async () => {
        const lesson = await fetch('/api/lessons').then(res => res.json());
        setLessonNotes(lesson.data.lessons);
    }, []);

    useEffect(() => {
        if (mountRef.current) {
            getLessonsData();
        }

        return () => {
            mountRef.current = false
        };
    })

    if (edit) {

        return <EditLessonNote setEdit={setEdit} lessonId={lessonId} />
    }


    if (question) {

        return <QuestionsForm setQuestion={setQuestion} type={"Lesson"} lessonId={lessonId} />
    }

    return (
        <div className="w-100">
            <h1>Lesson Notes</h1>
            {
                <ListGroup as={'ol'} numbered>
                    {
                        lessonNotes?.map((lesson: any, index: number) => {

                            if ((index % 2 === 0)) {

                                return (
                                    <ListGroup.Item variant="secondary" key={index} className="d-flex flex-row justify-content-between">
                                        <span className="text-truncate" style={{ maxWidth: '150px' }}>{lesson.topic}</span>
                                        <button className="btn" onClick={() => { setLessonId(lesson._id); setEdit(true) }}><Edit /></button>
                                        <button className="btn" onClick={() => { setLessonId(lesson._id); setModal(true) }}><Delete /></button>
                                        <button className="btn" onClick={() => { setLessonId(lesson._id); setQuestion(true) }}> Add Question</button>
                                        {modal && <DeleleModal cb={async () => await deleteCallback(lesson.id)} closeCallback={() => setModal(false)} />}
                                    </ListGroup.Item>
                                )
                            }

                            return (
                                <ListGroup.Item variant="primary" key={index} className="d-flex flex-row justify-content-between">
                                    <span className="text-truncate" style={{ maxWidth: '150px' }} onClick={() => { setEdit(true); props.setLessonId(lesson.id) }}>{lesson.topic}</span>
                                    <button className="btn" onClick={() => { setLessonId(lesson._id); setEdit(true) }}><Edit /></button>
                                    <button className="btn" onClick={() => { setLessonId(lesson._id); setModal(true) }}><Delete /></button>
                                    <button className="btn" onClick={() => { setLessonId(lesson._id); setQuestion(true) }}> Add Question</button>
                                    {modal && <DeleleModal cb={async () => await deleteCallback(lesson.id)} closeCallback={() => setModal(false)} />}
                                </ListGroup.Item>
                            )

                        })
                    }

                </ListGroup>
            }
        </div>
    )
}