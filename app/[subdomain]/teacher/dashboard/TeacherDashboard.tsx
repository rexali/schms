'use client';

import { useState } from "react";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import VerticalMenu from "../../components/menu/VerticalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import AssignmentPage from "../assignment/page";
import LessonPage from "../lesson/page";

export default function TeacherDashboard(props: any) {
    let [tabName, setTabName] = useState('classes');

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
                            {tabName === 'attendance' ? <div>Register:attendance</div> : ''}
                            {tabName === 'lesson' ? <div className="container"><LessonPage /></div> : ''}
                            {tabName === 'assignment' ? <AssignmentPage /> : ''}
                            {tabName === 'reports' ? <div>Report</div> : ''}
                            {tabName === 'classes' ? <div>Students: section, class etc</div> : ''}
                            {tabName === 'activities' ? <div>Activites: class work etc</div> : ''}
                            {tabName === 'questions' ? <div>Questions etc</div> : ''}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}