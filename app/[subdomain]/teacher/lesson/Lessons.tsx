import ListGroup from "react-bootstrap/esm/ListGroup";
import DeleleModal from "../components/delete-modal";
import { Close, Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import EditLesson from "./EditLesson";

export default function Lessons(props: any) {
    const data: any = [{ topic: "topic1" }, { topic: "topic1" }];
    const [modal, setModal] = useState<any>(false);
    const [edit, setEdit] = useState<any>(false);


    async function deleteCallback(id: any) {
        throw new Error("Function not implemented.");
    }

    if (edit) {

        return <EditLesson setEdit={setEdit} />
    }

    return (
        <div>
            {
                <ListGroup as={'ol'} numbered>
                    {
                        data?.map((lesson: any, index: number) => {

                            if ((index % 2 === 0)) {

                                return (
                                    <ListGroup.Item variant="secondary" key={index} className="d-flex flex-row justify-content-between">
                                        <span className="text-truncate" style={{ maxWidth: '150px' }} onClick={() => {setEdit(true); props.setLessonId(lesson.id) }}>{lesson.topic}</span>
                                        <button className="btn" onClick={() => setEdit(true)}><Edit /></button>
                                        <button className="btn" onClick={() => setModal(true)}><Delete /></button>
                                        {modal && <DeleleModal cb={async () => await deleteCallback(lesson.id)} closeCallback={() => setModal(false)} />}
                                    </ListGroup.Item>
                                )
                            }

                            return (
                                <ListGroup.Item variant="primary" key={index} className="d-flex flex-row justify-content-between">
                                    <span className="text-truncate" style={{ maxWidth: '150px' }} onClick={() => { setEdit(true); props.setLessonId(lesson.id) }}>{lesson.topic}</span>
                                    <button className="btn" onClick={() => setEdit(true)}><Edit /></button>
                                    <button className="btn" onClick={() => setModal(true)}><Delete /></button>
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