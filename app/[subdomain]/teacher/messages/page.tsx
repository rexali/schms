import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Delete, Edit, Feedback } from '@mui/icons-material';

const TeacherMessagesList = () => {
  const userId = JSON.parse(window.sessionStorage.getItem('user') as string)._id;
  const mountRef = useRef(true);

  const [messages, setMessages] = useState([{
    id: 1,
    _id: "",
    title: "Assignment",
    sender: 'Teacher',
    comment: 'Please submit your assignments by Friday.',
    replies: [{ _id: "", comment: "" }]
  },
  ]);

  const [message, setMessage] = useState({
    title: "",
    comment: ""
  });
  const [replyMessage, setReplyMessage] = useState('');
  const [messageId, setMessageId] = useState('');

  const [editModal, setEditModal] = useState(false)
  const [status, setStatus] = useState('');
  const [replyStatus, setReplyStatus] = useState('');


  function openReplyForm(id: any) {
    setMessageId(id)
    setEditModal(true)
  }

  async function submitReplyForm() {
    setReplyStatus("Sending reply...");
    const finalMessage = { comment: replyMessage, message: messageId, user: userId }
    console.log('Submitted reply:', finalMessage);
    const messageResponse = await fetch('/api/replies', {
      mode: 'cors',
      method: "POST",
      body: JSON.stringify({ ...finalMessage })
    }).then(res => res.json());
    console.log(messageResponse);
    
    if (messageResponse.status === 'success') {
      setReplyStatus(messageResponse.status + ": " + messageResponse.message);
      setReplyMessage("")
      getMessagesData();
    } else {
      setReplyStatus(messageResponse.status + ": " + messageResponse.message);
      setReplyMessage(replyMessage);
    }

  }

  const handleSendMessage = async () => {
    setStatus("Sending message...");

    let finalMessage = { ...message, user: userId }
    console.log('Submitted report:', finalMessage);
    const messageResponse = await fetch('/api/messages', {
      mode: 'cors',
      method: "POST",
      body: JSON.stringify({ ...finalMessage })
    }).then(res => res.json());
    if (messageResponse.status === 'success') {
      setStatus(messageResponse.status);
      setMessage({
        title: "",
        comment: ""
      });
      getMessagesData();
    } else {
      setStatus(messageResponse.status + ": " + messageResponse.message);
      setMessage({ ...message });
    }

  };


  const getMessagesData = useCallback(async () => {
    const messagesResponse = await fetch('/api/messages').then(res => res.json());
    if (messagesResponse.status === "success") {
      setMessages(messagesResponse.data.messages);
    } else {
       console.log(messagesResponse);  

      setMessages([...messages]);
    }
  }, []);

  useEffect(() => {
    if (mountRef.current) {
      getMessagesData();
    }

    return () => {
      mountRef.current = false
    };
  })


  return (
    <div className="container mt-5">
      {/*message list  */}
      <div className='row'>
        <div className='col-md-6'>'
          <h2>Messages List</h2>
          <div className="list-group">
            {!messages?.length && (
              (<div>
                <div> No message found </div>
              </div>))
            }
            {
              messages?.map((message: any, index: any) => (
                <div key={index} className="list-group-item">
                  <div>
                    <p><strong>Title: </strong>{message.title} </p>
                    <p>{message.comment}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-secondary me-2" ><Edit /></button>
                    <button className="btn btn-sm btn-danger" ><Delete /></button>
                    <button className="btn btn-sm btn-primary" onClick={() => openReplyForm(message._id)}><Feedback /></button>
                  </div>

                  {message?.replies?.length > 0 && (
                    <div className="mt-2">
                      <strong>Replies:</strong>
                      <ul className="list-group mt-2">
                        {message.replies.map((reply: any, index: number) => (
                          <li key={index} className="list-group-item">
                            <strong>{reply.sender}:</strong> {reply.comment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>


        <div className='col-md-6'>'
          {/* send new message */}
          <h2>Send Message</h2>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Type your title here..."
              value={message.title}
              onChange={(e) => setMessage({ ...message, title: e.target.value })}
            />
            <textarea
              className="form-control"
              placeholder="Type your message here..."
              value={message.comment}
              onChange={(e) => setMessage({ ...message, comment: e.target.value })}
            />
            <p className='text-center text-success'>{status}</p>
            <button className="btn btn-primary mt-2" onClick={handleSendMessage}>Send Message</button>
          </div>
        </div>

        {/* edit message */}
        {editModal && (
          <div className="modal show d-block" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Reply</h5>
                  <button type="button" className="btn-close" onClick={() => setEditModal(false)}></button>
                </div>
                <div className="modal-body">
                  <textarea
                    className="form-control"
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                </div>
                <p className='text-success text-center'>{replyStatus}</p>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setEditModal(false)}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={() => submitReplyForm()}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherMessagesList;