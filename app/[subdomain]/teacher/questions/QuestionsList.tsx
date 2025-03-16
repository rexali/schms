import { useCallback, useEffect, useRef, useState } from "react";
import EditQuestion from "./EditQuestion";
import ViewQuestion from "./ViewQuestion";
import DeleleModal from "../../components/common/delete-modal";

export default function QuestionsList() {
    const mountRef = useRef(true);
    const [questions, setQuestions] = useState([{
        _id: "",
        class: 'JSS 1',
        subject: 'Maths',
        teacher: 'Beello',
        term: 'First',
        year: '2025'

    }]);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);
    const [questionId, setQuestionId] = useState('');

    function setEditHandler(_id: string): void {
        setEdit(true);
        setQuestionId(_id)
    }

    function setViewHandler(_id: string): void {
        setView(true);
        setQuestionId(_id)
    }

    function setRemoveHandler(_id: string): void {
        setRemove(true);
        setQuestionId(_id);
    }

    async function removeQuestionHandler(_id: string): Promise<boolean> {
        const questionResponse = await fetch('/api/questions/' + _id, { method: "DELETE", mode: "cors" }).then(res => res.json());
        if (questionResponse.status === 'success') {
            getQuestionsData();
            return true;
        } else {
            return false;
        }
    }


    const getQuestionsData = useCallback(async () => {
        const questionResponse = await fetch('/api/questions').then(res => res.json());
        if (questionResponse.status === 'success') {
            setQuestions(questionResponse.data.questions)
        } else {
            setQuestions([])
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getQuestionsData();
        }

        return () => {
            mountRef.current = false;
        }
    });

    if (edit) {
        return <EditQuestion questionId={questionId} setEdit={setEdit} />
    }

    if (view) {
        return <ViewQuestion questionId={questionId} setView={setView} />
    }

    if (!questions?.length) {
        return (
            <div>
                <h3>Questions</h3>
                <p className="text-center">No question found</p>
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
                        questions.map((question, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{question.class}</td>
                                    <td>{question.subject}</td>
                                    <td>{question.teacher}</td>
                                    <td>{question.term}</td>
                                    <td>{question.year}</td>
                                    <th className="d-flex justify-content-around">
                                        <button className="btn btn-primary" onClick={() => setEditHandler(question._id)}>Edit</button>
                                        <button className="btn btn-primary" onClick={() => setViewHandler(question._id)}>View</button>
                                        <button className="btn btn-primary" onClick={() => setRemoveHandler(question._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            {remove && (<DeleleModal cb={async () => await removeQuestionHandler(questionId)} closeCallback={setRemove} />)}
        </div>
    )
}