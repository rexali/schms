import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import AddApplicant from "./AddApplicant";
import ApplicantList from "./ApplicantsList";
import AdmissionList from "./AdmissionList";


export default function ApplicantPage() {
    let [tabName, setTabName] = useState('applicants');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }
    
    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Applicants','Add Applicant',"Admission List"]} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'applicants' ? <ApplicantList /> : ''}
                    {tabName === 'add applicant' ? <AddApplicant /> : ''}
                    {tabName === 'admission list' ? <AdmissionList /> : ''}
                </div>
            </div>
        </div>
    )
}

