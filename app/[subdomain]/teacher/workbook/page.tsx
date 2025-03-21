import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import SyllabusList from "./syllabus/page";
import AddSyllabus from "./syllabus/AddSyllabus";
import ScoreSheetList from "./scoresheet/page";
import SchemeWorkList from "./schemeworks/page";
import AddSchemeWork from "./schemeworks/AddSchemeWork";
import AddScoreSheet from "./scoresheet/AddScoreSheet";


export default function WorkBookPage() {
    let [tabName, setTabName] = useState('syllabus');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Syllabus', "Add Syllabus", "Scheme of Works", "Add Scheme", 'Mark Sheets', "Add Mark"]} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'syllabus' ? <SyllabusList /> : ''}
                    {tabName === 'add syllabus' ? <AddSyllabus /> : ''}
                    {tabName === 'scheme of works' ? <SchemeWorkList /> : ''}
                    {tabName === 'add scheme' ? <AddSchemeWork /> : ''}
                    {tabName === 'mark sheets' ? <ScoreSheetList /> : ''}
                    {tabName === 'add mark' ? <AddScoreSheet /> : ''}
                </div>
            </div>
        </div>
    )
}