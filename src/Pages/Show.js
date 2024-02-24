import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Show = () => {

  const event = useLoaderData();

  return (
    <div className='event-show'>
      <h1>{event.name}</h1>
      <img src={event.image} alt={`Event: ${event.name}`} />
      <p>Start: {event.start}</p>
      <p>End: {event.end}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default Show;
