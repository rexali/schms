'use client';

import { useState } from "react";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import VerticalMenu from "../../components/menu/VerticalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import LessonPage from "../lesson/page";
import AttendancePage from "../attendance/page";
import ViewAttendancePage from "../attendance/ViewAttendance";
import TeacherMessagesList from "../messages/page";
import TeacherClasses from "../classes/page";
import QuestionsPage from "../questions/page";

export default function TeacherDashboard(props: any) {
    let [tabName, setTabName] = useState('attendance');

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
                            <p>Welcome to Teacher Dashboard</p>
                        </div>
                        <div className="tab-pane active" id={tabName}>
                            {tabName === 'attendance' ? <div className="container"><AttendancePage /></div> : ''}
                            {tabName === 'lessons' ? <div className="container"><LessonPage /></div> : ''}
                            {tabName === 'reports' ? <div className="container"><ViewAttendancePage/></div> : ''}
                            {tabName === 'classes' ? <div className="container"><TeacherClasses/> </div> : ''}
                            {tabName === 'questions' ? <div><QuestionsPage /></div> : ''}
                            {tabName === 'messages' ? <div><TeacherMessagesList/></div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}