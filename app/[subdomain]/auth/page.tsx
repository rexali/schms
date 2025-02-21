'use client'
import { useState } from "react";
import { DynamicHorizontalMenu } from "../components/menu/HorizontalMenu";
import LoginPage from "./login/page";

export default function AuthPage(params: any) {
    let [tabName, setTabName] = useState('student');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    return (
        <div>
            <p>Please fill in this form to log in.</p>
            <hr />
            <DynamicHorizontalMenu openTab={openTab} tabNames={['student', 'teacher', 'administrator', 'parent']} />
            <br />
            <div className="tab-content well">
                <div className="tab-pane active" id={'pane'}>
                    {tabName === 'teacher' ? <LoginPage role={'teacher'} /> : ''}
                    {tabName === 'student' ? <LoginPage role={'student'} /> : ''}
                    {tabName === 'parent' ? <LoginPage role={'parent'} /> : ''}
                    {tabName === 'administrator' ? <LoginPage role={'administrator'} /> : ''}
                </div>
            </div>
        </div>
    )
}