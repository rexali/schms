'use client';

import { Fragment, useState } from "react";
import HorizontalMenu from "../../components/menu/HorizontalMenu";
import Script from "next/script";
import './dashboard.css';

export default function StudentDashboard(props: any) {
    let [tabName, setTabName] = useState('reports');

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
                            <li><a data-toggle="tab" onClick={() => openTab('reports')} href="#section1">Report</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('assignment')} href="#section2">Assignments</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('grades')} href="#section3">Grade</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* nav end */}
            <HorizontalMenu openTab={openTab} tabName={tabName} />
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav hidden-xs">
                        <h2>Logo</h2>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="active"><a href="#section1">Dashboard</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('reports')} href="#section2">Reports</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('assignment')} href="#section3">Assignments</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('grades')} href="#section4">Grades</a></li>
                        </ul><br />
                    </div>
                    <br />

                    <div className="col-sm-9">
                        <div className="well">
                            <h4>Student Dashboard</h4>
                            <p>Welcome to {props.subdomain}</p>
                        </div>

                        <div className="tab-content well">
                            <div className="tab-pane active" id={tabName}>
                                {tabName === 'reports' ? <div>Reports:assignment,grade,attendance</div> : ''}
                                {tabName === 'assignment' ? <div>Assignments:submit</div> : ''}
                                {tabName === 'grades' ? <div>Grades</div> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}