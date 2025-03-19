import { useCallback, useEffect, useRef, useState } from "react";

import DeleleModal from "../../components/common/delete-modal";
import EditAttendance from "./EditAttendance";
import ViewAttendance from "./ViewAttendance";

export default function AttendanceList(props:any) {
    const mountRef = useRef(true);
    const [attendance, setAttendance] = useState([{
        _id: "",
        class: 'JSS 1',
        teacher: 'Daniel Libas',
        week:'WEEK',
        term: 'First',
        session: '2025'
    }]);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);
    const [attendanceId, setAttendanceId] = useState('');

    function setEditHandler(_id: string): void {
        setEdit(true);
        setAttendanceId(_id)
    }

    function setViewHandler(_id: string): void {
        setView(true);
        setAttendanceId(_id)
    }

    function setRemoveHandler(_id: string): void {
        setRemove(true);
        setAttendanceId(_id);
    }

    async function removeAttendanceHandler(_id: string): Promise<boolean> {
        const attendanceResponse = await fetch('/api/attendance/' + _id, { method: "DELETE", mode: "cors" }).then(res => res.json());
        if (attendanceResponse.status === 'success') {
            getAttendanceData();
            return true;
        } else {
            return false;
        }
    }


    const getAttendanceData = useCallback(async () => {
        const attendanceResponse = await fetch('/api/attendance').then(res => res.json());
        if (attendanceResponse.status === 'success') {
            setAttendance(attendanceResponse.data.attendances)
        } else {
            setAttendance([])
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getAttendanceData();
        }

        return () => {
            mountRef.current = false;
        }
    });

    if (edit) {
        return <EditAttendance attendanceId={attendanceId} setEdit={setEdit} />
    }

    if (view) {
        return <ViewAttendance attendanceId={attendanceId} setView={setView} />
    }

    if (!attendance?.length) {
        return (
            <div>
                <h3>Weekly Attendance</h3>
                <p className="text-center">No attendance found</p>
            </div>
        )
    }

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>S/N</th>
                        <th>Class</th>
                        <th>Week</th>
                        <th>Teacher</th>
                        <th>Term</th>
                        <th>Year</th>
                        <th colSpan={3} className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attendance.map((attendance, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{attendance.class}</td>
                                    <td>{attendance.week}</td>
                                    <td>{attendance.teacher}</td>
                                    <td>{attendance.term}</td>
                                    <td>{attendance.session}</td>
                                    <th className="d-flex justify-content-around">
                                        <button className="btn btn-primary" onClick={() => setEditHandler(attendance._id)}>Edit</button>
                                        <button className="btn btn-primary" onClick={() => setViewHandler(attendance._id)}>View</button>
                                        <button className="btn btn-primary" onClick={() => setRemoveHandler(attendance._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            {remove && (<DeleleModal cb={async () => await removeAttendanceHandler(attendanceId)} closeCallback={setRemove} />)}
        </div>
    )
}