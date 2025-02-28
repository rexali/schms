'use client';

import { useState } from "react";
import VerticalMenu from "../../components/menu/VerticalMenu";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ParentDashboard(props: any) {
    let [tabName, setTabName] = useState('assignments');

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
                            {tabName === 'assignments' ? <div className="container">Assignments etc</div> : ''}
                            {tabName === 'attendance' ? <div className="container">Attendance</div> : ''}
                            {tabName === 'grades' ? <div className="container">Grades</div> : ''}
                            {tabName === 'communication' ? <div className="container">Messages</div> : ''}
                            {tabName === 'reports' ? <div className="container">Lesson Note</div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}