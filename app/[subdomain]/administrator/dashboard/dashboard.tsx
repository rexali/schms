'use client';

import { Fragment, useState } from "react";
import HorizontalMenu from "../../components/menu/HorizontalMenu";
import Script from "next/script";
import './dashboard.css';

export default function AdministratorDashboard(props: any) {
    let [tabName, setTabName] = useState('students');

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
                            <li><a data-toggle="tab" onClick={() => openTab('students')} href="#">Students</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('staff')} href="#section2">Staff</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('classes')} href="#section3">Classes</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('schedules')} href="#section3">Schedules</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('reports')} href="#section2">Reports</a></li>
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
                            <li><a data-toggle="tab" onClick={() => openTab('students')} href="#">Students</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('staff')} href="#section2">Staff</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('classes')} href="#section3">Classes</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('schedules')} href="#section3">Schedules</a></li>
                            <li><a data-toggle="tab" onClick={() => openTab('reports')} href="#section2">Reports</a></li>
                        </ul><br />
                    </div>
                    <br />

                    <div className="col-sm-9">

                        <div className="well">
                            <h4>Administrator Dashboard</h4>
                            <p>Welcome to {props.subdomain}</p>
                        </div>

                        <div className="tab-content well">
                            <div className="tab-pane active" id={tabName}>
                                {tabName === 'students' ? <div>Students</div> : ''}
                                {tabName === 'staff' ? <div>Staff</div> : ''}
                                {tabName === 'classes' ? <div>Classes</div> : ''}
                                {tabName === 'schedules' ? <div>Schedules</div> : ''}
                                {tabName === 'reports' ? <div>Reports</div> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}