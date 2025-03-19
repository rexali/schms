import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import AddReport from "./AddReport";
import ReportsList from "./ReportsLIst";


export default function ReportsPage() {
    let [tabName, setTabName] = useState('reports');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }
    
    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Reports','Add Report']} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'reports' ? <ReportsList /> : ''}
                    {tabName === 'add report' ? <AddReport /> : ''}
                </div>
            </div>
        </div>
    )
}

