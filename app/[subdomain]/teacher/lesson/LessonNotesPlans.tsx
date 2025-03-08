import ListGroup from "react-bootstrap/esm/ListGroup";
import LessonsPlans from "./plan/LessonPlans";
import LessonsNotes from "./note/LessonNotes";

export default function LessonNotesPlans(props: any) {


    return (
        <div className="w-100">
            <div className="row">
                <div className="col-md-12">
                    <LessonsPlans />
                </div>
                <div className="col-md-12">
                    <LessonsNotes />
                </div>
            </div>
        </div>
    )
}