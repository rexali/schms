import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import ScoreSheet from "./scoresheet/page";
import SchemeWorks from "./schemeworks/page";
import Syllabus from "./syllabus/page";


export default function WorkBookPage() {
    let [tabName, setTabName] = useState('syllabus');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }
    
    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Syllabus',"Scheme of Works",'Mark Sheet']} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'syllabus' ? <Syllabus /> : ''}
                    {tabName === 'scheme of works' ? <SchemeWorks /> : ''}
                    {tabName === 'mark sheet' ? <ScoreSheet /> : ''}
                </div>
            </div>
        </div>
    )
}