import React from 'react';
import { useLoaderData, Form } from 'react-router-dom';
const Show = () => {

  const event = useLoaderData();

  return (
    <div className='event-show'>
      <h1>{event.name}</h1>
      <img src={event.image} alt={`Event: ${event.name}`} />
      <p>Start: {event.start}</p>
      <p>End: {event.end}</p>
      <p>Location: {event.location}</p>

      <h2>Update {event.name}</h2>


      <Form action={`/update/${event._id}`} method="post" className="event-form">
  <div className="form-group">
    <label>Event Name:</label>
    <input type="input" name="name" placeholder="Event name" defaultValue={event.name} />
  </div>

  <div className="form-group">
    <label>Event Image:</label>
    <input type="input" name="image" placeholder="Event image" defaultValue={event.image} />
  </div>

  <div className="form-group">
    <label>Event Location:</label>
    <input type="input" name="location" placeholder="Event location" defaultValue={event.location} />
  </div>

  <div className="form-group">
    <label>Event Start:</label>
    <input type="date" name="start" placeholder="Event start" defaultValue={event.start} />
  </div>

  <div className="form-group">
    <label>Event End:</label>
    <input type="date" name="end" placeholder="Event end" defaultValue={event.end} />
  </div>
  <div className="form-group">
    <label>Event price:</label>
    <input type="input" name="price" placeholder="Event price" defaultValue={event.price} />
  </div>

  <button type="submit">Update Event</button>
</Form>
<h2>{`Delete ${event.name}`}</h2>
      <Form action={`/delete/${event._id}`} method="post">
        <input
          type="submit"
          value={"Delete"}
          className="delete-button" 
        />
      </Form> 

    </div>
  );
};

export default Show;
