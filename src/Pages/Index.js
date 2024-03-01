import React from "react";
import { useLoaderData, Link, Form} from "react-router-dom";
import { useState } from "react";
import BackToTopButton from "../components/BackToTopButton";
import '../styles.scss';


const Landing = () => {
  const events = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (action) => {
    setSearchQuery(action.target.value)
  };

  const sortedEvents = events.slice().sort((a, b) => {
    return new Date(a.start) - new Date(b.start)
  });

  const today = new Date().toISOString().slice(0, 10);

  const currentEvents = sortedEvents.filter((event) => new Date(event.start).toISOString().slice(0, 10) === today);

  const upcomingEvents = sortedEvents.filter((event) => new Date(event.start).getTime() > new Date().getTime());

  const pastEvents = sortedEvents.filter((event) => new Date(event.start).getTime() < new Date().getTime());


  return (
    <div className="index-container">
     <div className="search-bar-container">
     <h3>Search for Events</h3>
     <input type="text" placeholder="Search bookmarks..." className="search-bar" onChange={handleSearch} />
    </div>
      <div className="parent-container">
      <div className="create-event">
      <h3>Create an Event</h3>
      <Form action='/create' method='post' className="form">
      <div className="form-container">
        <input type="input" name="name" placeholder="Event name" />
        <input type="input" name="image" placeholder="Event image" />
        <input type="date" name="start" placeholder="Event start" />
        <input type="date" name="end" placeholder="Event end" />
        <input type="input" name="location" placeholder="Event location" />
        <input type="number" name="price" placeholder="Event price" />
        </div>
        
      </Form>
        <button type="submit">Submit</button>
      </div>
      </div>

      <h2 className="event-section-header">Current Events</h2>
      <div className="index-container-curr">
      {currentEvents.filter((event) => 
      event.name.toLowerCase().includes(searchQuery.toLowerCase())).map((event) => (
        <div key={event._id} className="events-container">
          <Link to={`/${event._id}`}>
            <h3>{event.name}</h3>
          </Link>
          {event.image && <img src={event.image} alt={event.name} />}
          <h5>Location: {event.location}</h5>
          <p>Start: {new Date(event.start).toISOString().slice(0, 10)}</p>
          <p>End: {new Date(event.end).toISOString().slice(0, 10)}</p>
          <p>Event Price: ${event.price}</p>
        </div>
      ))}
      </div>
      

      <h2 className="event-section-header">Upcoming Events</h2>
      <div className="index-container-upcom">
      {upcomingEvents.filter((event) => 
      event.name.toLowerCase().includes(searchQuery.toLowerCase())).map((event) => (
        <div key={event._id} className="events-container">
          <Link to={`/${event._id}`}>
            <h3>{event.name}</h3>
          </Link>
          {event.image && <img src={event.image} alt={event.name} />}
          <h5>Location: {event.location}</h5>
          <p>Start: {new Date(event.start).toISOString().slice(0, 10)}</p>
          <p>End: {new Date(event.end).toISOString().slice(0, 10)}</p>
          <p>Event Price: ${event.price}</p>
        </div>
      ))}
      </div>


      <h2 className="event-section-header">Past Events</h2>
      <div className="index-container-past">
      {pastEvents.filter((event) => 
      event.name.toLowerCase().includes(searchQuery.toLowerCase())).map((event) => (
        <div key={event._id} className="events-container">
          <Link to={`/${event._id}`}>
            <h3>{event.name}</h3>
          </Link>
          {event.image && <img src={event.image} alt={event.name} />}
          <h5>Location: {event.location}</h5>
          <p>Start: {new Date(event.start).toISOString().slice(0, 10)}</p>
          <p>End: {new Date(event.end).toISOString().slice(0, 10)}</p>
          <p>Event Price: ${event.price}</p>
        </div>
      ))}
      </div>


      <BackToTopButton />
    </div>
  );
};

export default Landing;
