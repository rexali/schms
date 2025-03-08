import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentLessons = () => {
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "Misinformation",
      description: 'Misinformation is a...',
      content: 'Lesson content goes here...',
      comments: [
        {
          id: 1,
          user: 'Student',
          content: 'This is a student comment.',
          replies: [
            { id: 1, user: 'Teacher', content: 'This is a teacher reply.' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Critical Thinking",
      description: 'Critical thinking is a...',
      content: 'Lesson content goes here...',
      comments: []
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState({ commentId: null, content: '' });

  const handleCommentChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setNewComment(e.target.value);
  };

  const handleReplyChange = (commentId: any, content: string) => {
    setNewReply({ commentId, content });
  };

  const handleSubmitComment = (lessonId: number) => {
    setLessons(lessons.map(lesson => 
      lesson.id === lessonId 
        ? { ...lesson, comments: [...lesson.comments, { id: lesson.comments.length + 1, user: 'Student', content: newComment, replies: [] }] }
        : lesson
    ));
    setNewComment('');
  };

  const handleSubmitReply = (lessonId: number, commentId: number) => {
    setLessons(lessons.map(lesson => 
      lesson.id === lessonId 
        ? { 
            ...lesson, 
            comments: lesson.comments.map(comment => 
              comment.id === commentId 
                ? { ...comment, replies: [...comment.replies, { id: comment.replies.length + 1, user: 'Teacher', content: newReply.content }] }
                : comment
            )
          }
        : lesson
    ));
    setNewReply({ commentId: null, content: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Lessons</h2>
      <div className="list-group">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="list-group-item">
            <h3>{lesson.title}</h3>
            <p><strong>Description:</strong> {lesson.description}</p>
            <p>{lesson.content}</p>
            <textarea
              className="form-control"
              placeholder="Enter your comment here..."
              value={newComment}
              onChange={handleCommentChange}
            />
            <button className="btn btn-primary mt-2" onClick={() => handleSubmitComment(lesson.id)}>Submit Comment</button>
            <div className="mt-3">
              {lesson.comments.map((comment) => (
                <div key={comment.id} className="mb-3">
                  <p><strong>{comment.user}:</strong> {comment.content}</p>
                  <textarea
                    className="form-control"
                    placeholder="Enter your reply here..."
                    value={newReply.commentId === comment.id ? newReply.content : ''}
                    onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                  />
                  <button className="btn btn-secondary mt-2" onClick={() => handleSubmitReply(lesson.id, comment.id)}>Submit Reply</button>
                  <div className="mt-2">
                    {comment.replies.map((reply) => (
                      <p key={reply.id}><strong>{reply.user}:</strong> {reply.content}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentLessons;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const StudentLessons = () => {
//   const [lessons, setLessons] = useState([
//     {
//       id: 1,
//       title: "Misinformation",
//       description: 'Misinformation is a...',
//       content: 'Lesson content goes here...',
//       studentComment: ''
//     },
//     {
//       id: 2,
//       title: "Critical Thinking",
//       description: 'Critical thinking is a...',
//       content: 'Lesson content goes here...',
//       studentComment: ''
//     }
//   ]);

//   const handleCommentChange = (id:number, comment:string) => {
//     setLessons(lessons.map(lesson => lesson.id === id ? { ...lesson, studentComment: comment } : lesson));
//   };

//   type Lesson = {
//     id: number;
//     title: string;
//     description: string;
//     content: string;
//     studentComment: string;
//   }
//   const handleSubmitComment = (id:number) => {
//     const lesson = lessons.find((lesson) => lesson.id === id) as any;
//     console.log(`Comment for lesson ${id}:`, lesson.studentComment);
//     // Add logic to save the comment
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Lessons</h2>
//       <div className="list-group">
//         {lessons.map((lesson) => (
//           <div key={lesson.id} className="list-group-item">
//             <h3>{lesson.title}</h3>
//             <p><strong>Description:</strong> {lesson.description}</p>
//             <p>{lesson.content}</p>
//             <textarea
//               className="form-control"
//               placeholder="Enter your comment here..."
//               value={lesson.studentComment}
//               onChange={(e) => handleCommentChange(lesson.id, e.target.value)}
//             />
//             <button className="btn btn-primary mt-2" onClick={() => handleSubmitComment(lesson.id)}>Submit Comment</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentLessons;