import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentActivities = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Math Activity",
      description: 'Solve the following math problems...',
      answer: ''
    },
    {
      id: 2,
      title: "Science Activity",
      description: 'Explain the process of photosynthesis...',
      answer: ''
    }
    // Add more activities here
  ]);

  const handleAnswerChange = (id: number, answer: string) => {
    setActivities(activities.map(activity => activity.id === id ? { ...activity, answer } : activity));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Submitted activities:', activities);
    // Add logic to save the activities
  };

  return (
    <div className="container mt-5">
      <h2>Student Activities</h2>
      <form onSubmit={handleSubmit}>
        {activities.map((activity) => (
          <div key={activity.id} className="list-group-item mb-3">
            <h3>{activity.title}</h3>
            <p><strong>Description:</strong> {activity.description}</p>
            <textarea
              className="form-control"
              placeholder="Enter your answer here..."
              value={activity.answer}
              onChange={(e) => handleAnswerChange(activity.id, e.target.value)}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary mt-3">Submit All Activities</button>
      </form>
    </div>
  );
};

export default StudentActivities;