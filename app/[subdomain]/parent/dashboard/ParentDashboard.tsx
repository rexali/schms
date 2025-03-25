'use client';

import { useState } from "react";
import VerticalMenu from "../../components/menu/VerticalMenu";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import MessagesPage from "../messages/page";
import EventsPage from "../events/page";
import StudentAttendance4ParentPage from "../attendance/page";
import StudentAssignments4ParentPage from "../assignments/page";
import StudentLessonNotes4ParentPage from "../lessons/page";
import StudentReport4ParentPage from "../reports/page";
import ProfilePage from "../../teacher/profiles/page";


export default function ParentDashboard(props: any) {
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
                        tabNames={props?.tabNames ?? [
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

                <div className="col-sm-12 col-md-9 col-lg-9">
                    <DynamicHorizontalMenu
                        openTab={openTab}
                        tabNames={props?.tabNames ?? [
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
                            <p>Welcome to Parent Dashboard</p>
                        </div>

                        <div className="tab-pane active" id={tabName}>
                            {tabName === 'profile' ? <ProfilePage/> : ''}
                            {tabName === 'assignments' ? <div className="container"><StudentAssignments4ParentPage /></div> : ''}
                            {tabName === 'attendance' ? <div className="container"><StudentAttendance4ParentPage /></div> : ''}
                            {tabName === 'messages' ? <div className="container"><MessagesPage /></div> : ''}
                            {tabName === 'events' ? <div className="container"><EventsPage /></div> : ''}
                            {tabName === 'lessons' ? <div className="container"><StudentLessonNotes4ParentPage /></div> : ''}
                            {tabName === 'reports' ? <div className="container"><StudentReport4ParentPage /> </div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}