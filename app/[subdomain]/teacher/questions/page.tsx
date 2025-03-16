import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import AddQuestion from "./AddQuestion";
import QuestionsList from "./QuestionsList";


export default function QuestionsPage() {
    let [tabName, setTabName] = useState('questions');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }
    
    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Questions','Add Question']} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'questions' ? <QuestionsList /> : ''}
                    {tabName === 'add question' ? <AddQuestion /> : ''}
                </div>
            </div>
        </div>
    )
}