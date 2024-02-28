import React from "react";
import { useLoaderData, Link, Form} from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const events = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (action) => {
    setSearchQuery(action.target.value)
  };

  return (
    <div>
      <div className="search-bar">
      <h3>Search for Events</h3>
      <input type="text" placeholder="Search bookmarks..." className="search-bar" onChange={handleSearch}/>
      </div>
      <div className="create-event">
      <h3>Create an Event</h3>
      <Form action='/create' method='post'>
      <div className="form-container">
        <input type="input" name="name" placeholder="Event name" />
        <input type="input" name="image" placeholder="Event image" />
        <input type="date" name="start" placeholder="Event start" />
        <input type="date" name="end" placeholder="Event end" />
        <input type="input" name="location" placeholder="Event location" />
        <input type="number" name="price" placeholder="Event price" />
        </div>
        <button type="submit">Submit</button>
      </Form>
      </div>
      <h2>Events</h2>
      <div className="index-container">
      {events.filter((event) => 
      event.name.toLowerCase().includes(searchQuery.toLowerCase())).map((event) => (
        <div key={event._id} className="events-container">
          <Link to={`/${event._id}`}>
            <h3>{event.name}</h3>
          </Link>
          {event.image && <img src={event.image} alt={event.name} />}
          <h5>Location: {event.location}</h5>
          <p>Start: {new Date(event.start).toLocaleString()}</p>
          <p>End: {new Date(event.end).toLocaleString()}</p>
          <p>Event Price: ${event.price}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Landing;
