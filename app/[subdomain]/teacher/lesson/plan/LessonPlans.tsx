import ListGroup from "react-bootstrap/esm/ListGroup";
import { Delete, Edit } from "@mui/icons-material";
import { useCallback, useEffect, useRef, useState } from "react";
import EditLessonPlan from "./EditLessonPlan";
import DeleleModal from "../../../components/common/delete-modal";
import ViewLessonPlan from "./ViewLessonPlan";

export default function LessonsPlans(props: any) {
    const [modal, setModal] = useState<any>(false);
    const [edit, setEdit] = useState<any>(false);
    const [view, setView] = useState<any>(false);
    const [planId, setPlanId] = useState<any>('');
    const mountRef = useRef(true);
    const [lessonPlans, setLessonPlans] = useState<any>([{ topic: "plan 11" }, { topic: "plan 22" }]);

    async function deleteCallback(id: any) {
        const planResponse = await fetch('/api/plans/' + id, { method: 'DELETE', mode: 'cors' }).then(res => res.json());
        if (planResponse.status === 'success') {
            getPlansData();
            return true;
        }

        return false;
    }

    const getPlansData = useCallback(async () => {
        const planResponse = await fetch('/api/plans').then(res => res.json());
        setLessonPlans(planResponse.data.plans);
    }, []);

    useEffect(() => {
        if (mountRef.current) {
            getPlansData();
        }

        return () => {
            mountRef.current = false
        };
    })

    if (edit) {

        return <EditLessonPlan setEdit={setEdit} planId={planId} />
    }

    if (view) {

        return <ViewLessonPlan setView={setView} planId={planId} />
    }

    
    if (!lessonPlans?.length) {

        return (<div>
            <h1>Lesson plans</h1>
            <div className="text-center m-2"> No lesson plan found </div>
        </div>)
    }

    return (
        <div className="w-100">
            <h1>Lesson plans</h1>
            {
                <ListGroup as={'ol'} numbered>
                    {
                        lessonPlans?.map((plan: any, index: number) => {

                            if ((index % 2 === 0)) {

                                return (
                                    <ListGroup.Item variant="secondary" key={index} className="d-flex flex-row justify-content-between">
                                        <span className="text-truncate" style={{ maxWidth: '150px' }}>{plan.topic}</span>
                                        <button className="btn" onClick={() => { setPlanId(plan._id); setEdit(true) }}><Edit /></button>
                                        <button className="btn" onClick={() => { setPlanId(plan._id); setModal(true) }}><Delete /></button>
                                        <button className="btn" onClick={() => { setPlanId(plan._id); setView(true) }}>View</button>
                                        {modal && <DeleleModal cb={async () => await deleteCallback(plan.id)} closeCallback={() => setModal(false)} />}
                                    </ListGroup.Item>
                                )
                            }

                            return (
                                <ListGroup.Item variant="primary" key={index} className="d-flex flex-row justify-content-between">
                                    <span className="text-truncate" style={{ maxWidth: '150px' }} onClick={() => { setEdit(true); props.setPlanId(plan.id) }}>{plan.topic}</span>
                                    <button className="btn" onClick={() => { setPlanId(plan._id); setEdit(true) }}><Edit /></button>
                                    <button className="btn" onClick={() => { setPlanId(plan._id); setModal(true) }}><Delete /></button>
                                    <button className="btn" onClick={() => { setPlanId(plan._id); setView(true) }}>View</button>
                                    {modal && <DeleleModal cb={async () => await deleteCallback(plan.id)} closeCallback={() => setModal(false)} />}
                                </ListGroup.Item>
                            )

                        })
                    }

                </ListGroup>
            }
        </div>
    )
}