'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import DeleleModal from "../../components/common/delete-modal";
import ViewReport from "./ViewReport";
import EditReport from "./EditReport";

export default function ReportsList(props:any) {
    const mountRef = useRef(true);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);
    const [reportId, setReportId] = useState('');

    const [reports, setReports] = useState([{
        _id: "nmmmm",
        class: 'JSS 1',
        studentName: 'Aliyu Bello',
        classTeacher: 'John Doe',
        term: 'First',
        year: '2025'

    }]);
   

    function setEditHandler(_id: string): void {
        setReportId(_id);
        setEdit(true);
    }

    function setViewHandler(_id: string): void {
        setReportId(_id);
        setView(true);
    }

    function setRemoveHandler(_id: string): void {
        setReportId(_id);
        setRemove(true);
    }

    async function removeReportHandler(_id: string): Promise<boolean> {
        const reportResponse = await fetch('/api/reports/' + _id, { method: "DELETE", mode: "cors" }).then(res => res.json());
        if (reportResponse.status === 'success') {
            getReportsData();
            return true;
        } else {
            return false;
        }
    }

    const getReportsData = useCallback(async () => {
        const reportResponse = await fetch('/api/reports').then(res => res.json());
        console.log(reportResponse);
        if (reportResponse.status === 'success') {
            setReports(reportResponse.data.reports);
        } else {
            setReports([]);
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getReportsData();
        }

        return () => {
            mountRef.current = false;
        }
    },[]);

    
    if (edit) {

        return <EditReport reportId={reportId} setEdit={setEdit} />
    }

    if (view) {

        return <ViewReport reportId={reportId} setView={setView} />
    }


    if (!reports?.length) {

        return (
            <div>
                <h3>Reports</h3>
                <p className="text-center">No report found</p>
            </div>
        )
    }

    

    return (<div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>S/N</th>
                        <th>Class</th>
                        <th>Student Name</th>
                        <th>Teacher</th>
                        <th>Term</th>
                        <th>Year</th>
                        <th colSpan={3} className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reports?.map((report, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{report.class}</td>
                                    <td>{report.studentName}</td>
                                    <td>{report.classTeacher}</td>
                                    <td>{report.term}</td>
                                    <td>{report.year}</td>
                                    <th className="d-flex justify-content-around">
                                        <button className="btn btn-primary" onClick={() => setEditHandler(report._id)}>Edit</button>
                                        <button className="btn btn-primary" onClick={() => setViewHandler(report._id)}>View</button>
                                        <button className="btn btn-primary" onClick={() => setRemoveHandler(report._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            {remove && (<DeleleModal cb={async () => await removeReportHandler(reportId)} closeCallback={setRemove} />)}
        </div>
    )
}