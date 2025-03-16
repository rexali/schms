'use client';

import { Feedback } from "@mui/icons-material";
import Close from "@mui/icons-material/Close"
import Image from "next/image";
import { useEffect, useRef, useState } from "react"

export default function ViewLessonNote(props: any) {
    const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
    const [commentStatus, setCommentStatus] = useState('');
    const [replyStatus, setReplyStatus] = useState('');
    const [lesson, setLesson] = useState({
        teacher: '',
        class: '',
        subject: '',
        topic: '',
        objectives: '',
        materials: '',
        prerequisite: '',
        introduction: '',
        descriptions: [{ id: 1, text: '', photo: '', video: '', file: {} }],
        conclusion: '',
        comments:[{ _id: 1, comment: "How are you", replies: [{ _id: 1, comment: "Fine" }] }]
    });
    const [comment, setComment] = useState('');
    const [reply, setReply] = useState('');
    const [commentId, setCommentId] = useState();
    const [modal, setModal] = useState(false);
    const mountRef = useRef(true);

    const onCommentChange = (e: { target: { name: string, value: string } }) => {
        // update comment
        setComment(e.target.value);
    }

    function openReplyCommentModal(id: any): void {
        setCommentId(id);
        setModal(true);
    }

    const onReplyChange = (e: { target: { name: string, value: string } }) => {
        setReply(e.target.value);
    }

    async function replyComment(id: any): Promise<void> {
        setReplyStatus('Sending a reply...');
        let replyData = { comment: reply, lesson: props.lessonId, commentId, user: userId };
        let replyResponse = await fetch('/api/replies', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ ...replyData })
        }).then(res => res.json());

        if (replyResponse.status) {
            setReplyStatus(replyResponse.status + ": " + replyResponse.message);
            setReply(' ');
            getLessonsData();
        }
    }

    const postComment = async () => {
        // update comments
        setCommentStatus('Sending comment..');
        let commentData = { comment, lesson: props.lessonId, user: userId };
        let commentResponse = await fetch('/api/comments', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ ...commentData })
        }).then(res => res.json());

        if (commentResponse.status) {
            setCommentStatus(commentResponse.status + ": " + commentResponse.message);
            setComment('');
            getLessonsData();
        }
    }

    const getLessonsData = async () => {
        const lessonResponse = await fetch('/api/lessons/' + props.lessonId).then(res => res.json());
        if (lessonResponse.status) {
            console.log(lessonResponse);
            setLesson(lessonResponse.data?.lesson);
        }
    }

    useEffect(() => {

        if (mountRef.current) {
            getLessonsData();
        }

        return () => {
            mountRef.current = false
        };
    })

    return (
        <div className="container">

            <h2 className="my-4 bg-light p-2 d-flex flex-row justify-content-between">View a lesson note <button className="btn btn-success" onClick={() => props.setEdit(false)}><Close /> close</button></h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Teacher/Insrutuctor</label>
                        <p className="bg-light p-2">{lesson?.teacher}</p>
                        {/* <input disabled type="text" name='teacher' defaultValue={lesson?.teacher} onChange={addLessonChange} className="form-control" id="teacher" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Class:</label>
                        <p className="bg-light p-2">{lesson?.class}</p>
                        {/* <input disabled type="text" name='class' defaultValue={lesson?.class} onChange={addLessonChange} className="form-control" id="class" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Subject</label>
                        <p className="bg-light p-2">{lesson?.subject}</p>
                        {/* <input disabled type="text" name='subject'defaultValue={lesson?.subject} onChange={addLessonChange} className="form-control" id="subject" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <p className="bg-light p-2">{lesson?.class}</p>
                        {/* <input disabled type="text" name='topic' defaultValue={lesson?.topic} onChange={addLessonChange} className="form-control" id="topic" autoComplete='questions' /> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Objectives</label>
                        <p className="bg-light p-2">{lesson?.objectives}</p>
                        {/* <textarea disabled name="objectives" defaultValue={lesson?.objectives} onChange={addLessonChange} id="objectives" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Materials</label>
                        <p className="bg-light p-2">{lesson?.materials}</p>
                        {/* <textarea disabled name="materials" defaultValue={lesson?.materials} onChange={addLessonChange} id="material" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="quest">Pre-requisite</label>
                        <p className="bg-light p-2">{lesson?.prerequisite}</p>
                        {/* <textarea disabled name="prerequisite" defaultValue={lesson?.prerequisite} onChange={addLessonChange} id="prerequisite" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="quest">Introduction</label>
                        <p className="bg-light p-2">{lesson?.introduction}</p>
                        {/* <textarea disabled name="introduction" defaultValue={lesson?.introduction} onChange={addLessonChange} id="introduction" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

                <div className="col-md-12 mt-2">
                    {/* <h2 className="d-flex flex-row justify-content-between">Description <button className="btn btn-primary" disabled type="button" onClick={(e) => addDescription()}>Add Description</button></h2> */}
                    {
                        lesson?.descriptions.map((description, index) => (
                            <div key={index}>
                                <div className="form-group">
                                    <label htmlFor="quest" className="d-flex flex-row justify-content-between">Description {index + 1}&apos;s content (text)</label>
                                    <p className="bg-light p-2">{description.text}</p>
                                    {/* <textarea disabled name={`text`} defaultValue={description.text} id={`description${description.id}`} onChange={(e) => addDescriptionChange(description.id, e)} className="form-control" rows={5} autoComplete='text'></textarea> */}
                                </div><br />
                                <div className="form-group">
                                    <label htmlFor="topic">Description {index + 1} &apos;s photo: {description.photo}</label><br /><br />
                                    <p className="bg-light p-2">
                                        <Image
                                            src="/assets/images/service-icon-01.png"
                                            alt={description.photo}
                                            width={600}
                                            height={600}
                                            style={{ width: 'auto', height: 'auto' }}
                                        />
                                    </p>
                                    {/* <input disabled type="file" name={`photo`} className="form-control" id={`image${description.id}`} onChange={(e) => addDescriptionChange(description.id, e)} autoComplete='questions' /> */}
                                </div><br />
                                <div className="form-group">
                                    <label htmlFor="topic">Description {index + 1} &apos;s Youtube video ID </label><br /><br />

                                    {
                                        !description.video ? (
                                            <iframe
                                                src={`https://youtube.com/embed/${description.video}`}
                                                style={{ maxWidth: '100%' }}>
                                                Loading...
                                            </iframe>) :
                                            (<iframe
                                                src={`https://youtube.com/embed/-Z3jlEKWMfk`}
                                                style={{ maxWidth: '100%' }}>
                                                Loading...
                                            </iframe>)
                                    }
                                    {/* <input disabled type="text" defaultValue={description.video} name={`video`} className="form-control" placeholder="ID of your lesson video in Youtube" id={`video${description.id}`} onChange={(e) => addDescriptionChange(description.id, e)} autoComplete='questions' /> */}
                                </div><br />
                            </div>
                        ))
                    }
                </div><br /><br />

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="instru">Conclusion</label>
                        <p className="bg-light p-2">{lesson?.conclusion}</p>
                        {/* <textarea disabled name="conclusion" defaultValue={lesson?.conclusion} onChange={addLessonChange} id="conclusion" className="form-control" rows={5} autoComplete='text'></textarea> */}
                    </div>
                </div>

            </div>

            <div className="row">
                <h2>Comments</h2>
                {
                    lesson.comments.map(comment => (
                        <div className="card m-1" key={comment._id}>
                            <p className="p-2">{comment.comment}</p>
                            {
                                comment.replies.map(reply => (<p className="bg-light p-2 mx-4" key={reply._id}>{reply.comment}</p>))
                            }
                            <p className="text-end">
                                <button onClick={() => openReplyCommentModal(comment._id)} className="btn btn-link">
                                    <Feedback />Reply
                                </button>
                            </p>
                        </div>
                    )
                    )
                }
                {
                    modal && (
                        <div className="modal show d-block" tabIndex={-1}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Reply a comment</h5>
                                        <button type="button" className="btn-close" onClick={() => setModal(false)}></button>
                                    </div>
                                    <div className="modal-body">

                                        <form>
                                            <div className='row'>
                                                <div className='col-md-12 mt-2'>
                                                    <div className="form-floating">
                                                        <textarea name='reply' value={reply} onChange={onReplyChange} className="form-control" id="description" autoComplete='questions' ></textarea>
                                                        <label htmlFor="reply">Comment</label>
                                                    </div>
                                                </div>

                                            </div>
                                            <p className="text-center text-success">{replyStatus}</p>

                                            <div className='text-center'>
                                                <button className="btn btn-primary w-25 py-2 my-2" onClick={() => replyComment(commentId)} type="button">Post reply</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }

            </div>
            <div className="row">
                <form>
                    <div className='text-center'>
                        <div className="form-floating">
                            <textarea name="comment" value={comment} onChange={onCommentChange} id="comment" className="form-control" rows={5} autoComplete='text'></textarea>
                            <label htmlFor="comment">Comment</label>
                        </div>
                        <p className="text-center text-success">{commentStatus}</p>
                        <button className="btn btn-primary w-100 py-2 my-2" type="button" onClick={postComment}>Post comment</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
