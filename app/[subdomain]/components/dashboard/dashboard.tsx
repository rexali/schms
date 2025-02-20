'use client';

import { Fragment, useState } from "react";
import HorizontalMenu from "../menu/HorizontalMenu";
import Script from "next/script";

export default function Dashboard(props: any) {
    let [tabName, setTabName] = useState('register');

    const openTab = (tabname: any) => {
        setTabName(tabname);
    }

    return (
        <div>
            <Fragment>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer />
                <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" defer />
            </Fragment>

            {/* nav */}
            <nav className="navbar navbar-inverse visible-xs">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Dashboard</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('gender')} href="#">Gender</a></li>
                            <li><a href="#">Geo</a></li>
                            <li><a href="#">Age</a></li>
                            <li><a href="#">Gender</a></li>
                            <li><a href="#">Geo</a></li>
                            <li><a href="#">Age</a></li>
                            <li><a href="#">Gender</a></li>
                            <li><a href="#">Geo</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* nav end */}
            <HorizontalMenu />
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav hidden-xs">
                        <h2>Logo</h2>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="active"><a href="#section1">Dashboard</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('register')} href="#">Register</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('plan')} href="#section2">Lesson Plan</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('note')} href="#section3">Note</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('student')} href="#section3">Student</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('teacher')} href="#section2">Teacher</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('test')} href="#section3">Test</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('exams')} href="#section3">Exams</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('extra')} href="#section2">Extra</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('admission')} href="#section3">Application</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('fee')} href="#section3">School Fee</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('messages')} href="#section3">Messages</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('pta')} href="#section3">PTA</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('report')} href="#section3">Report</a></li>
                        </ul><br />
                    </div>
                    <br />

                    <div className="col-sm-9">

                        <div className="well">
                            <h4>Dashboard</h4>
                            <p>Some text..Welcome to {props.subdomain}</p>
                        </div>

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

                        <div className="row">
                            <div className="col-sm-3">
                                <div className="well">
                                    <h4>Users</h4>
                                    <p>1 Million</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="well">
                                    <h4>Pages</h4>
                                    <p>100 Million</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="well">
                                    <h4>Sessions</h4>
                                    <p>10 Million</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="well">
                                    <h4>Bounce</h4>
                                    <p>30%</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="well">
                                    <p>Text</p>
                                    <p>Text</p>
                                    <p>Text</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well">
                                    <p>Text</p>
                                    <p>Text</p>
                                    <p>Text</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well">
                                    <p>Text</p>
                                    <p>Text</p>
                                    <p>Text</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-8">
                                <div className="well">
                                    <p>Text</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well">
                                    <p>Text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}