import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import AddLesson from "./AddLesson";
import Lessons from "./Lessons";

export default function LessonPage() {
    let [tabName, setTabName] = useState('lessons');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }
    
    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Lessons','Add Lesson']} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'lessons' ? <Lessons /> : ''}
                    {tabName === 'add lesson' ? <AddLesson /> : ''}
                </div>
            </div>
        </div>
    )
}