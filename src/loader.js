const URL = process.env.REACT_APP_URL;

export const eventLoader = async () => {
    const response = await fetch(`${URL}/event`);
    const event = await response.json();
    return event;
  };

  export const eventsLoader = async ({ params }) => {
    const response = await fetch(`${URL}/event/${params.id}`);
    const events = await response.json(); 
    return events;
  };
  