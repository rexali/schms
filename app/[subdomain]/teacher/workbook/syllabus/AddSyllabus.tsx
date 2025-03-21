'use client'

import { useState } from "react"

export default function AddSyllabus(props: any) {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const [status, setStatus] = useState('');
    const [syllabus, setSyllabus] = useState({
        subject: "",
        teacher: "",
        term: "",
        class: "",
        year: "",
        textbooks: [""],
        topics: [{ id: 1, week: 1, topic: "topic here", subtopics: [{ id: 1, subtopic: "sub-topic here" }] }]
    });

    function handleChange(event: { target: { name: string, value: string } }): void {
        if (event.target.name==="textbooks") {
            setSyllabus({ ...syllabus, textbooks: event.target.value.split(",") })  
        } else{
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

    const addSyllabus = async () => {
        console.log("Submitted syllabus: ", syllabus);
        setStatus("Submitting...")
        let finalSyllabus = { ...syllabus, user: userId }
        const syllabusResponse = await fetch('/api/syllabus', {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify({ ...finalSyllabus })
        }).then(res => res.json());
        if (syllabusResponse.status === 'success') {
            setStatus(syllabusResponse.status)
        } else {
            setStatus(syllabusResponse.status + ": " + syllabusResponse.message)
        }
    };


return (
    <div className='row'>
        <div className='col-md-4'>
            <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={syllabus.subject}
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
                    value={syllabus.class}
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
                    value={syllabus.teacher}
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
                    value={syllabus.term}
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
                    value={syllabus.year}
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
                    value={syllabus.textbooks}
                    onChange={handleChange}

                />
            </div>
        </div>
        <div className="row">
            <h3>Syllabus</h3>
            {
                syllabus.topics.map(topic => {
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
                                        value={topic.topic}
                                        onChange={(ev) => handleTopicOnChange(ev, topic.id)}
                                    />
                                </div>
                            </div>
                            <div>
                                {
                                    topic.subtopics.map(subtopic => {
                                        return (
                                            <div className="mb-3" key={subtopic.id}>
                                                <label className="form-label">Subtopic: {subtopic.id}</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name={`subtopic${subtopic.id}`}
                                                    value={subtopic.subtopic}
                                                    onChange={(ev) => handleSubTopicOnChange(ev, topic.id, subtopic.id)}
                                                />

                                            </div>
                                        )
                                    })
                                }
                                <div className="mb-3">
                                    <button onClick={() => addNewSubTopic(topic.id)} className="btn btn-success">Add sub-topic</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <p className="text-center"><button onClick={() => addNewTopic()} className="btn btn-success">Add new topic</button></p>
        <p className="text-center text-success">{status}</p>
        <p className="text-center"><button onClick={() => addSyllabus()} className="btn btn-success">Submit Syllabus</button></p>
    </div>
)
}