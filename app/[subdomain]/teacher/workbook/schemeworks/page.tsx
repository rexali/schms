import { useCallback, useEffect, useRef, useState } from "react";

import DeleleModal from "@/app/[subdomain]/components/common/delete-modal";
import ViewSchemeWork from "./ViewSchemeWork";
import EditSchemeWork from "./EditSchemeWork";

export default function SchemeWorkList(props: any) {
    const mountRef = useRef(true);
    const [schemes, setSchemes] = useState([{
        _id:"",
        id:"",
        subject: "",
        teacher: "",
        term: "",
        class: "",
        year: "",
        month: "",
        weekEnding: "",
        teacherSignature: "",
        principalSignature: "",
        schemeOfWork: "",
        recordOfWork: "",
        prepWorkSet: "",
        refToMarkSheet: "",
    }]);

    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);
    const [schemeId, setSchemeId] = useState('');

    function setEditHandler(_id: string): void {
        setEdit(true);
        setSchemeId(_id)
    }

    function setViewHandler(_id: string): void {
        setView(true);
        setSchemeId(_id)
    }

    function setRemoveHandler(_id: string): void {
        setRemove(true);
        setSchemeId(_id);
    }

    async function removeSchemeHandler(_id: string): Promise<boolean> {
        const schemeResponse = await fetch('/api/schemes/' + _id, { method: "DELETE", mode: "cors" }).then(res => res.json());
        if (schemeResponse.status === 'success') {
            getSchemesData();
            return true;
        } else {
            return false;
        }
    }


    const getSchemesData = useCallback(async () => {
        const schemeResponse = await fetch('/api/schemes').then(res => res.json());
        if (schemeResponse.status === 'success') {
            setSchemes(schemeResponse.data.schemes)
        } else {
            setSchemes([...schemes])
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getSchemesData();
        }

        return () => {
            mountRef.current = false;
        }
    });

    if (edit) {
        return <EditSchemeWork schemeId={schemeId} setEdit={setEdit} />
    }

    if (view) {
        return <ViewSchemeWork schemeId={schemeId} setView={setView} />
    }

    if (!schemes?.length) {
        return (
            <div>
                <h3>Weekly Scheme</h3>
                <p className="text-center">No scheme found</p>
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
                        <th>Teacher</th>
                        <th>Term</th>
                        <th>Year</th>
                        <th colSpan={3} className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schemes.map((scheme, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{scheme.class}</td>
                                    <td>{scheme.teacher}</td>
                                    <td>{scheme.term}</td>
                                    <td>Year</td>
                                    <th className="d-flex justify-content-around">
                                        <button className="btn btn-primary" onClick={() => setEditHandler(scheme._id)}>Edit</button>
                                        <button className="btn btn-primary" onClick={() => setViewHandler(scheme._id)}>View</button>
                                        <button className="btn btn-primary" onClick={() => setRemoveHandler(scheme._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            {remove && (<DeleleModal cb={async () => await removeSchemeHandler(schemeId)} closeCallback={setRemove} />)}
        </div>
    )
}