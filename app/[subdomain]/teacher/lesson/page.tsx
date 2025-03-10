import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import AddLessonNote from "./note/AddLessonNote";
import AddLessonPlan from "./plan/AddLessonPlan";
import LessonNotesPlans from "./LessonNotesPlans";
import Activity from "./activity/page";

export default function LessonPage() {
    let [tabName, setTabName] = useState('lessons');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }
    
    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Lessons','Add Note', 'Add Plan', 'Add Activity']} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'lessons' ? <LessonNotesPlans /> : ''}
                    {tabName === 'add note' ? <AddLessonNote /> : ''}
                    {tabName === 'add plan' ? <AddLessonPlan /> : ''}
                    {tabName === 'add activity' ? <Activity /> : ''}
                </div>
            </div>
        </div>
    )
}