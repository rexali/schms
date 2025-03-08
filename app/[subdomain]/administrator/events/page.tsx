import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventsList = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'School Assembly',
      date: '2025-03-10',
      description: 'Monthly school assembly in the main hall.'
    },
    {
      id: 2,
      name: 'Science Fair',
      date: '2025-04-15',
      description: 'Annual science fair showcasing student projects.'
    },
    // Add more events here
  ]);

  const [newEvent, setNewEvent] = useState<any>({
    id: null,
    name: '',
    date: '',
    description: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isEditing) {
      setEvents(events.map((event:any) => (event.id === newEvent.id ? newEvent : event)));
      setIsEditing(false);
    } else {
      setNewEvent({ ...newEvent, id: events.length + 1 });
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    }
    setNewEvent({
      id: null,
      name: '',
      date: '',
      description: ''
    });
  };

  const handleEdit = (event: { id: number; name: string; date: string; description: string; }) => {
    setNewEvent(event);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>Events List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.description}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(event)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-5">{isEditing ? 'Edit Event' : 'Add New Event'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newEvent.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{isEditing ? 'Update Event' : 'Add Event'}</button>
      </form>
    </div>
  );
};

export default EventsList;