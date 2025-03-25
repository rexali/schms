'use client';

import { useState } from "react";
import VerticalMenu from "../../components/menu/VerticalMenu";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import AddStudent from "../students/AddStudent";
import AddStaff from "../staff/AddStaff";
import AddApplicant from "../applicants/AddApplicant";
import AddSchedule from "../schedules/page";
import ClassesList from "../classes/page";
import EventsList from "../events/page";
import StudentReportSheet from "../reports/page";
import AddReport from "../reports/AddReport";
import MessagesList from "../messages/page";
import LessonPlans from "../lessons/page";
import ProfilePage from "../../teacher/profiles/page";
import ApplicantPage from "../applicants/page";
import TeacherAttendance from "../attendance/page";


export default function AdministratorDashboard(props: any) {
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
                            <p>Welcome to Admin Dashboard</p>
                        </div>
                        <div className="tab-pane active" id={tabName}>
                            {tabName === 'profile' ? <ProfilePage /> : ''}
                            {tabName === 'students' ? <div className="container"><AddStudent /></div> : ''}
                            {tabName === 'staff' ? <div className="conatiner"><AddStaff /></div> : ''}
                            {tabName === 'applicants' ? <div className="conatiner"><ApplicantPage /></div> : ''}
                            {tabName === 'classes' ? <div className="container"><ClassesList /></div> : ''}
                            {tabName === 'lessons' ? <div><LessonPlans /></div> : ''}
                            {tabName === 'questions' ? <div><AddReport /></div> : ''}
                            {tabName === 'schedules' ? <div><AddSchedule /></div> : ''}
                            {tabName === 'attendance' ? <div><TeacherAttendance /></div> : ''}
                            {tabName === 'reports' ? <div className="conatiner"><StudentReportSheet /></div> : ''}
                            {tabName === 'events' ? <div className="container"><EventsList /></div> : ''}
                            {tabName === 'admissions' ? <div>Admission: applicant, admitted students</div> : ''}
                            {tabName === 'fees' ? <div>Fee</div> : ''}
                            {tabName === 'messages' ? <div><MessagesList /></div> : ''}
                            {tabName === 'pta' ? <div>PTA</div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

