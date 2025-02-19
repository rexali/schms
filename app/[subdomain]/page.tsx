import { notFound } from 'next/navigation';
import './globals.css';
import Script from 'next/script';
import { Fragment } from 'react';

export default async function SubdomainPage({ params }: { params: Promise<{ subdomain: string }> }) {
  const { subdomain } = await params;
  console.log('SubdomainPage: Rendering page for subdomain:', subdomain)

  try {
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
                <li><a href="#">Age</a></li>
                <li><a href="#">Gender</a></li>
                <li><a href="#">Geo</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* nav end */}

        <div className="container-fluid">
          <div className="row content">
            <div className="col-sm-3 sidenav hidden-xs">
              <h2>Logo</h2>
              <ul className="nav nav-pills nav-stacked">
                <li className="active"><a href="#section1">Dashboard</a></li>
                <li><a href="#section2">Age</a></li>
                <li><a href="#section3">Gender</a></li>
                <li><a href="#section3">Geo</a></li>
              </ul><br />
            </div>
            <br />

            <div className="col-sm-9">
              <div className="well">
                <h4>Dashboard</h4>
                <p>Some text..Welcome to {subdomain}</p>
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
  } catch (error) {
    console.error('SubdomainPage: Error fetching tenant:', error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold text-red-500">Error</h1>
        <p>There was an error loading the tenant information.</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }
}