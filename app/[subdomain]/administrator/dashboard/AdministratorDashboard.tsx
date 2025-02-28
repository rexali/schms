'use client';

import { useState } from "react";
import VerticalMenu from "../../components/menu/VerticalMenu";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function AdministratorDashboard(props: any) {
    let [tabName, setTabName] = useState('students');

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
                            <p>Welcome to Admin Dashboard</p>
                        </div>
                        <div className="tab-pane active" id={tabName}>
                            {tabName === 'students' ? <div className="container">Students: section, class etc</div> : ''}
                            {tabName === 'staff' ? <div>Staff</div> : ''}
                            {tabName === 'classes' ? <div>Classes</div> : ''}
                            {tabName === 'lessons' ? <div>Lesson Note</div> : ''}
                            {tabName === 'questions' ? <div>Teacher:questions</div> : ''}
                            {tabName === 'schedules' ? <div>Teacher:schedules</div> : ''}
                            {tabName === 'attendance' ? <div>Teacher:attendance</div> : ''}
                            {tabName === 'reports' ? <div>Report</div> : ''}
                            {tabName === 'extra' ? <div>Extra Classes</div> : ''}
                            {tabName === 'admissions' ? <div>Admission: applicant, admitted students</div> : ''}
                            {tabName === 'fees' ? <div>Fee</div> : ''}
                            {tabName === 'messages' ? <div>Messages</div> : ''}
                            {tabName === 'pta' ? <div>PTA</div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}