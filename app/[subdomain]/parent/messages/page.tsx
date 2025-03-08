import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MessagesList = () => {
  const [messages, setMessages] = useState<any>([
    { id: 1, sender: 'Parent', content: 'Welcome to the new school year!', replies: [] },
    // { id: 2, sender: 'Teacher', content: 'Please submit your assignments by Friday.', replies: [] },
    // Add more messages here
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [editMessage, setEditMessage] = useState<any>(null);
  const [replyMessage, setReplyMessage] = useState('');

  const handleSendMessage = () => {
    setMessages([...messages, { id: messages.length + 1, sender: 'Parent', content: newMessage, replies: [] }]);
    setNewMessage('');
  };

  const handleEditMessage = (id: number) => {
    const message = messages.find((msg: { id: number; }) => msg.id === id);
    setEditMessage(message);
  };

  const handleUpdateMessage = () => {
    setMessages(messages.map((msg: { id: any; }) => (msg.id === editMessage.id ? editMessage : msg)));
    setEditMessage(null);
  };

  const handleDeleteMessage = (id: any) => {
    setMessages(messages.filter((msg: { id: any; }) => msg.id !== id));
  };

  const handleReplyMessage = (id: any) => {
    const updatedMessages = messages.map((msg: { id: any; replies: any; }) => {
      if (msg.id === id) {
        return { ...msg, replies: [...msg.replies, { sender: 'Parent', content: replyMessage }] };
      }
      return msg;
    });
    setMessages(updatedMessages);
    setReplyMessage('');
  };

  return (
    <div className="container mt-5">
        
      <h2>Messages List</h2>

      <div className="list-group">
        {messages.map((message:any) => (
          <div key={message.id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <strong>{message.sender}:</strong> {message.content}
              </div>
              <div>
                <button className="btn btn-sm btn-secondary me-2" onClick={() => handleEditMessage(message.id)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
              </div>
            </div>
            {message.replies.length > 0 && (
              <div className="mt-2">
                <strong>Replies:</strong>
                <ul className="list-group mt-2">
                  {message.replies.map((reply:any, index:number) => (
                    <li key={index} className="list-group-item">
                      <strong>{reply.sender}:</strong> {reply.content}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-2">
              <textarea
                className="form-control"
                placeholder="Type your reply here..."
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
              />
              <button className="btn btn-sm btn-primary mt-2" onClick={() => handleReplyMessage(message.id)}>Reply</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleSendMessage}>Send Message</button>
      </div>
      {editMessage && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Message</h5>
                <button type="button" className="btn-close" onClick={() => setEditMessage(null)}></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  value={editMessage.content}
                  onChange={(e) => setEditMessage({ ...editMessage, content: e.target.value })}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setEditMessage(null)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdateMessage}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;




// import MessagesList from "../../administrator/messages/page";

// export default function MessagesPage(params:any) {
    
//     return (<MessagesList {...params} />)
// }