'use client';

import { useState } from "react";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import VerticalMenu from "../../components/menu/VerticalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentAssignmentPage from "../assignments/page";
import StudentLessons from "../lessons/page";
import StudentActivities from "../activities/page";
import StudentAssessments from "../assessments/page";
import StudentExams from "../exams/page";
import StudentReportSheet from "../reports/page";
import StudentAttendance from "../attendance/page";
import ParentComponent from "../attendance/ParentComponent";
import ProfilePage from "../../teacher/profiles/page";

export default function TeacherDashboard(props: any) {
    let [tabName, setTabName] = useState('profile');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-3 d-none d-sm-none d-md-block d-lg-block">
                    <VerticalMenu
                        openTab={openTab}
                        tabNames={props.tabNames ?? [
                            'register',
                            'plan',
                            'note',
                            'student',
                            'teacher',
                            'test',
                            'exams',
                            'extra',
                            'admission',
                            'fee',
                            'messages',
                            'pta',
                            'report'
                        ]} />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9">
                    <DynamicHorizontalMenu
                        openTab={openTab}
                        tabNames={props.tabNames ?? [
                            'register',
                            'plan',
                            'note',
                            'student',
                            'teacher',
                            'test',
                            'exams',
                            'extra',
                            'admission',
                            'fee',
                            'messages',
                            'pta',
                            'report'
                        ]}
                    />
                    <div className="tab-content">
                        <div className="well bg-success text-white p-2 text-center m-2">
                            <h1>Dashboard</h1>
                            <p>Welcome to Student Dashboard</p>
                        </div>
                        <div className="tab-pane active" id={tabName}>
                            {tabName === 'reports' ? <div><StudentReportSheet /></div> : ''}
                            {tabName === 'attendance' ? <div><StudentAttendance /></div> : ''}
                            {/* {tabName === 'attendance' ? <div><ParentComponent  /></div> : ''} */}
                            {tabName === 'profile' ? <ProfilePage /> : ''}
                            {tabName === 'lessons' ? <div><StudentLessons/></div> : ''}
                            {tabName === 'activities' ? <div><StudentActivities /></div> : ''}
                            {tabName === 'assessments' ? <div><StudentAssessments /></div> : ''}
                            {tabName === 'assignments' ? <StudentAssignmentPage /> : ''}
                            {tabName === 'exams' ? <div><StudentExams/></div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}