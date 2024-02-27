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
      <input type="text" placeholder="Search bookmarks..." className="search-bar" onChange={handleSearch}/>
      <h3>Create an Event</h3>
      <Form action='/create' method='post'>
        <input type="input" name="name" placeholder="Event name" />
        <input type="input" name="image" placeholder="Event image" />
        <input type="input" name="start" placeholder="Event start" />
        <input type="input" name="end" placeholder="Event end" />
        <input type="input" name="location" placeholder="Event location" />
        <button type="submit">Submit</button>
      </Form>

      <h3>Events</h3>
      {events.filter((event) => 
      event.name.toLowerCase().includes(searchQuery.toLowerCase())).map((event) => (
        <div key={event._id} className="events">
          <Link to={`/${event._id}`}>
            <h1>{event.name}</h1>
          </Link>
          {event.image && <img src={event.image} alt={event.name} />}
          <h3>Location: {event.location}</h3>
          <p>Start: {new Date(event.start).toLocaleString()}</p>
          <p>End: {new Date(event.end).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Landing;
