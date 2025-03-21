import { useCallback, useEffect, useRef, useState } from "react";

import DeleleModal from "@/app/[subdomain]/components/common/delete-modal";
import EditScoreSheet from "./EditScoreSheet";
import ViewScoreSheet from "./ViewScoreSheet";

export default function ScoreSheetList(props: any) {
    const mountRef = useRef(true);
    const [scoreSheets, setScoreSheets] = useState([{
        _id:"",
        subject: "",
        term: "",
        class: "",
        year: "",
        date: "",
        teacher: "",
        students: [{
            id: 1,
            name: "",
            scores: [
                { week: 1, maxMark: "", score: "" },
                { week: 2, maxMark: "", score: "" },
                { week: 3, maxMark: "", score: "" },
                { week: 4, maxMark: "", score: "" },
                { week: 5, maxMark: "", score: "" },
                { week: 6, maxMark: "", score: "" },
                { week: 7, maxMark: "", score: "" },
                { week: 8, maxMark: "", score: "" },
                { week: 9, maxMark: "", score: "" },
                { week: 10, maxMark: "", score: "" },
                { week: 11, maxMark: "", score: "" },
                { week: 12, maxMark: "", score: "" },
                { week: 13, maxMark: "", score: "" },
                { week: 14, maxMark: "", score: "" },
                { week: 15, maxMark: "", score: "" }
            ],
        }]
    }]);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);
    const [scoreSheetId, setScoreSheetId] = useState('');

    function setEditHandler(_id: string): void {
        setEdit(true);
        setScoreSheetId(_id)
    }

    function setViewHandler(_id: string): void {
        setView(true);
        setScoreSheetId(_id)
    }

    function setRemoveHandler(_id: string): void {
        setRemove(true);
        setScoreSheetId(_id);
    }

    async function removeMarkSheetHandler(_id: string): Promise<boolean> {
        const markSheetResponse = await fetch('/api/marksheets/' + _id, { method: "DELETE", mode: "cors" }).then(res => res.json());
        if (markSheetResponse.status === 'success') {
            getMarkSheetData();
            return true;
        } else {
            return false;
        }
    }


    const getMarkSheetData = useCallback(async () => {
        const markSheetResponse = await fetch('/api/marksheets').then(res => res.json());
        if (markSheetResponse.status === 'success') {
            setScoreSheets(markSheetResponse.data.marksheets)
        } else {
            setScoreSheets([])
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getMarkSheetData();
        }

        return () => {
            mountRef.current = false;
        }
    });

    if (edit) {
        return <EditScoreSheet scoreSheetId={scoreSheetId} setEdit={setEdit} />
    }

    if (view) {
        return <ViewScoreSheet scoreSheetId={scoreSheetId} setView={setView} />
    }

    if (!scoreSheets?.length) {
        return (
            <div>
                <h2>Weekly Score Sheet</h2>
                <p className="text-center">No scoreSheet found</p>
            </div>
        )
    }

    return (
        <div className="table-responsive">
            <h2>Weekly Score Sheet</h2>
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
                        scoreSheets.map((scoreSheet, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{scoreSheet.class}</td>
                                    <td>{scoreSheet.subject}</td>
                                    <td>{scoreSheet.teacher}</td>
                                    <td>{scoreSheet.term}</td>
                                    <td>{scoreSheet.year}</td>
                                    <th className="d-flex justify-content-around">
                                        <button className="btn btn-primary" onClick={() => setEditHandler(scoreSheet._id)}>Edit</button>
                                        <button className="btn btn-primary" onClick={() => setViewHandler(scoreSheet._id)}>View</button>
                                        <button className="btn btn-primary" onClick={() => setRemoveHandler(scoreSheet._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            {remove && (<DeleleModal cb={async () => await removeMarkSheetHandler(scoreSheetId)} closeCallback={setRemove} />)}
        </div>
    )
}