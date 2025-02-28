'use client';

import { useState } from "react";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import VerticalMenu from "../../components/menu/VerticalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentAssignmentPage from "../assignments/page";

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
                            <p>Welcome to Student Dashboard</p>
                        </div>
                        <div className="tab-pane active" id={tabName}>
                            {tabName === 'reports' ? <div>Reports:grade,attendance,assignment</div> : ''}
                            {tabName === 'attendance' ? <div>Register:attendance</div> : ''}
                            {tabName === 'class' ? <div>Students: section, class etc</div> : ''}
                            {tabName === 'lesson' ? <div>View lesson, lesson activities etc</div> : ''}
                            {tabName === 'activities' ? <div>Class activities or works etc</div> : ''}
                            {tabName === 'assesments' ? <div>Assesments, tests etc</div> : ''}
                            {tabName === 'assignment' ? <StudentAssignmentPage /> : ''}
                            {tabName === 'exams' ? <div>Exams</div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}