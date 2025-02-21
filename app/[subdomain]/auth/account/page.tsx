'use client';

import { useState } from "react";
import SignupPage from "../signup/page";
import { DynamicHorizontalMenu } from "../../components/menu/HorizontalMenu";

export default function AuthPAge(params: any) {
    let [tabName, setTabName] = useState('student');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }
    return (
        <div>
            <p>Please fill in this form to create  an account.</p>
            <hr />
            <DynamicHorizontalMenu openTab={openTab} tabNames={['student', 'teacher', 'administrator', 'parent']} />
            <br />
            <div className="tab-content well">
                <div className="tab-pane active" id={''}>
                    {tabName === 'teacher' ? <SignupPage role={'teacher'} /> : ''}
                    {tabName === 'student' ? <SignupPage role={'student'} /> : ''}
                    {tabName === 'parent' ? <SignupPage role={'parent'} /> : ''}
                    {tabName === 'administrator' ? <SignupPage role={'administrator'} /> : ''}
                </div>
            </div>
        </div>
    )
}