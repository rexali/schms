import { useState } from "react";
import { HorizontalTabsMenu } from "../../components/menu/HorizontalMenu";
import AddAttendance from "./AddAttendance";
import AttendanceList from "./AttendanceList";


export default function AttendancePage() {
    let [tabName, setTabName] = useState('attendance');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    return (
        <div className="mt-10">
            <HorizontalTabsMenu openTab={openTab} tabNames={['Attendance', 'Add Attendance']} />
            <div className="tab-content">
                <div className="tab-pane active" id={tabName}>
                    {tabName === 'attendance' ? <AttendanceList /> : ''}
                    {tabName === 'add attendance' ? <AddAttendance /> : ''}
                </div>
            </div>
        </div>
    )
}