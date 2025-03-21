'use client'

import { useCallback, useEffect, useRef, useState } from "react"

export default function AddSyllabus(props: any) {
    const mountRef = useRef(true);
    const [syllabus, setSyllabus] = useState({
        subject: "",
        teacher: "",
        term: "",
        class: "",
        year: "",
        textbooks: [""],
        topics: [{ id: 1, week: 1, topic: "", subtopics: [{ id: 1, subtopic: "" }] }]
    });

    function handleChange(event: { target: { name: string, value: string } }): void {
        if (event.target.name === "textbooks") {
            setSyllabus({ ...syllabus, textbooks: event.target.value.split(",") })
        } else {
            setSyllabus({ ...syllabus, [event.target.name]: event.target.value })
        }
    }

    function addNewTopic(): void {
        setSyllabus({ ...syllabus, topics: [...syllabus.topics, { id: syllabus.topics.length + 1, week: syllabus.topics.length + 1, topic: "topic here", subtopics: [{ id: 1, subtopic: "sub-topic here" }] }] })
    }


    function addNewSubTopic(id: Number): void {
        setSyllabus({ ...syllabus, topics: syllabus.topics.map(topic => topic.id === id ? { ...topic, subtopics: [...topic.subtopics, { id: topic.subtopics.length + 1, subtopic: "sub-topic here" }] } : topic) })
    }

    function handleTopicOnChange(ev: { target: { value: string, name: string } }, id: Number): void {
        setSyllabus({ ...syllabus, topics: [...syllabus.topics.map(topic => topic.id === id ? { ...topic, topic: ev.target.value } : topic)] })
    }


    function handleSubTopicOnChange(ev: { target: { value: string, name: string } }, id: Number, sid: Number): void {
        setSyllabus({ ...syllabus, topics: [...syllabus.topics.map(topic => topic.id === id ? { ...topic, subtopics: [...topic.subtopics.map(subtopic => subtopic.id === sid ? { ...subtopic, subtopic: ev.target.value } : subtopic)] } : topic)] })
    }

    const getSyllabusData = useCallback(async () => {
        const syllabusResponse = await fetch('/api/syllabus/' + props.syllabusId).then(res => res.json());
        console.log(syllabusResponse);
        if (syllabusResponse.status === 'success') {
            setSyllabus(syllabusResponse.data.syllabus);
        } else {
            setSyllabus({ ...syllabus });
        }
    }, [])

    useEffect(() => {
        if (mountRef.current) {
            getSyllabusData();
        }

        return () => {
            mountRef.current = false;
        }
    }, []);


    return (
        <div className="container">
            <h2 className='d-flex justify-content-between'>View Syllabus <button className='btn btn-success' onClick={() => props.setView(false)}>close</button></h2>

            <div className='row'>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            defaultValue={syllabus.subject}
                            onChange={handleChange}

                        />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <label className="form-label">Class</label>
                        <input
                            type="text"
                            className="form-control"
                            name="class"
                            defaultValue={syllabus.class}
                            onChange={handleChange}

                        />
                    </div>
                </div>
                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Teacher</label>
                        <input
                            type="text"
                            className="form-control"
                            name="teacher"
                            defaultValue={syllabus.teacher}
                            onChange={handleChange}

                        />
                    </div>
                </div>

                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Term</label>
                        <input
                            type="text"
                            className="form-control"
                            name="term"
                            defaultValue={syllabus.term}
                            onChange={handleChange}

                        />
                    </div>
                </div>
                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Year</label>
                        <input
                            type="text"
                            className="form-control"
                            name="year"
                            defaultValue={syllabus.year}
                            onChange={handleChange}

                        />
                    </div>
                </div>

                <div className='col-md-4'>

                    <div className="mb-3">
                        <label className="form-label">Textbooks</label>
                        <input
                            type="text"
                            className="form-control"
                            name="textbooks"
                            defaultValue={syllabus.textbooks.join(",")}
                            onChange={handleChange}

                        />
                    </div>
                </div>
                <div className="row">
                    <h3>Syllabus</h3>
                    {
                        syllabus?.topics?.map(topic => {
                            return (
                                <div className='col-md-12' key={topic.id}>
                                    <h4>WEEK: {topic.week}</h4>
                                    <div className="mb-3">
                                        <div className="col-md-12">
                                            <label className="form-label">Topic: {topic.id}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name={`topic${topic.id}`}
                                                defaultValue={topic?.topic}
                                                onChange={(ev) => handleTopicOnChange(ev, topic.id)}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            topic?.subtopics?.map(subtopic => {
                                                return (
                                                    <div className="mb-3" key={subtopic.id}>
                                                        <label className="form-label">Subtopic: {subtopic.id}</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name={`subtopic${subtopic.id}`}
                                                            defaultValue={subtopic?.subtopic}
                                                            onChange={(ev) => handleSubTopicOnChange(ev, topic.id, subtopic.id)}
                                                        />

                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <div className="mb-3">
                                            <button onClick={() => addNewSubTopic(topic.id)} className="btn btn-success">Add sub-topic</button>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <p className="text-center"><button onClick={() => addNewTopic()} className="btn btn-success">Add new topic</button></p>
                <p className="text-center text-success">{status}</p>
                <p className="text-center"><button onClick={() => updateSyllabus()} className="btn btn-success">Update Syllabus</button></p> */}
            </div>
        </div>
    )
}