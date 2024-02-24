import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Landing = () => {
    const events = useLoaderData();
    
    return (
        <div>
            <h3>Events</h3>
            {events.map(event => (
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
