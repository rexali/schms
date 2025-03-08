import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LessonPlans = () => {
  const [lessonPlans, setLessonPlans] = useState<any>([
    {
      id: 1,
      title: "Misinformation",
      description: 'Misinformation is a...',
      presentation: 'Presentation content...',
      materials: 'Materials needed...',
      introduction: 'Introduction content...',
      duration: '45 minutes',
      objectives: 'Objectives of the lesson...',
      evaluation: 'Evaluation methods...',
      conclusion: 'Conclusion content...',
      comment: 'Admin comment...'
    },
    {
      id: 2,
      title: "Critical Thinking",
      description: 'Critical thinking is a...',
      presentation: 'Presentation content...',
      materials: 'Materials needed...',
      introduction: 'Introduction content...',
      duration: '60 minutes',
      objectives: 'Objectives of the lesson...',
      evaluation: 'Evaluation methods...',
      conclusion: 'Conclusion content...',
      comment: 'Admin comment...'
    }
  ]);

  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [adminComment, setAdminComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditLesson = (lesson:any) => {
    setSelectedLesson(lesson);
    setAdminComment(lesson.comment || '');
    setIsEditing(true);
  };

  const handleSaveComment = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLessonPlans(lessonPlans.map((lp:any) => lp.id === selectedLesson.id ? { ...lp, comment: adminComment } : lp));
    setSelectedLesson(null);
    setAdminComment('');
    setIsEditing(false);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setSelectedLesson({ ...selectedLesson, [name]: value });
  };

  return (
    <div className="container mt-5">
      <h2>Lesson Plans</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Presentation</th>
              <th>Materials</th>
              <th>Introduction</th>
              <th>Duration</th>
              <th>Objectives</th>
              <th>Evaluation</th>
              <th>Conclusion</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lessonPlans.map((lesson:any) => (
              <tr key={lesson.id}>
                <td>{lesson.title}</td>
                <td>{lesson.description}</td>
                <td>{lesson.presentation}</td>
                <td>{lesson.materials}</td>
                <td>{lesson.introduction}</td>
                <td>{lesson.duration}</td>
                <td>{lesson.objectives}</td>
                <td>{lesson.evaluation}</td>
                <td>{lesson.conclusion}</td>
                <td>{lesson.comment}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditLesson(lesson)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && selectedLesson && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Lesson: {selectedLesson.title}</h5>
                <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSaveComment}>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={selectedLesson.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={selectedLesson.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Presentation</label>
                    <textarea
                      className="form-control"
                      name="presentation"
                      value={selectedLesson.presentation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Materials</label>
                    <textarea
                      className="form-control"
                      name="materials"
                      value={selectedLesson.materials}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Introduction</label>
                    <textarea
                      className="form-control"
                      name="introduction"
                      value={selectedLesson.introduction}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input
                      type="text"
                      className="form-control"
                      name="duration"
                      value={selectedLesson.duration}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Objectives</label>
                    <textarea
                      className="form-control"
                      name="objectives"
                      value={selectedLesson.objectives}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Evaluation</label>
                    <textarea
                      className="form-control"
                      name="evaluation"
                      value={selectedLesson.evaluation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Conclusion</label>
                    <textarea
                      className="form-control"
                      name="conclusion"
                      value={selectedLesson.conclusion}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Comment</label>
                    <textarea
                      className="form-control"
                      name="comment"
                      value={adminComment}
                      onChange={(e) => setAdminComment(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Save Comment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPlans;
