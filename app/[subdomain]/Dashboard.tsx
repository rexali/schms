'use client';

import { useState } from "react";
import VerticalMenu from "./components/menu/VerticalMenu";
import { DynamicHorizontalMenu } from "./components/menu/HorizontalMenu";

export default function Dashboard(props: any) {
    let [tabName, setTabName] = useState('register');

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
                <div className="col-sm-12 col-md-12 col-lg-8">
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
                    <div className="tab-content well">
                        <div className="tab-pane active" id={tabName}>
                            {tabName === 'register' ? <div>Register:attendance</div> : ''}
                            {tabName === 'plan' ? <div>Lesson Plan</div> : ''}
                            {tabName === 'note' ? <div>Lesson Note</div> : ''}
                            {tabName === 'student' ? <div>Students: section, class etc</div> : ''}
                            {tabName === 'teacher' ? <div>Teacher:class</div> : ''}
                            {tabName === 'test' ? <div>Test</div> : ''}
                            {tabName === 'exams' ? <div>Exams</div> : ''}
                            {tabName === 'extra' ? <div>Extra Classes</div> : ''}
                            {tabName === 'admission' ? <div>Admission: applicant, admitted students</div> : ''}
                            {tabName === 'fee' ? <div>Fee</div> : ''}
                            {tabName === 'messages' ? <div>Messages</div> : ''}
                            {tabName === 'pta' ? <div>PTA</div> : ''}
                            {tabName === 'report' ? <div>Report</div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}