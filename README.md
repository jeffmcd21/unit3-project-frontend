# Event Calander
**Team:**
 + Rabhi Alqadi
 + Diana Hudson
 + Jeff McDonald
 + Geno

 ## **Backend (Express):**
 [Deployed](https://unit3project-1.onrender.com)
## **Frontend (React App):**


## Libraries:
React
React Router

## React Router Routes:
-Home Page ("/")

-Display the event calendar and list of upcoming events.
Event Detail Page ("/events/:eventId")

-Display detailed information about a specific event.
Create Event Page ("/create-event")

-Allow users to create new events.

## React Architecture (Markdown):
markdown

- App
  - Header
  - Router
    - HomePage
    - EventDetailPage
    - CreateEventPage
  - Footer


## Backend:

Libraries:

Express.js
dotenv
morgan
cors
mongoose

**Routes:**
GET /events: Retrieve a list of events from the Eventbrite API.
GET /events/:eventId: Retrieve detailed information about a specific event.
POST /events: Create a new event on Eventbrite.

## Models (ERD):
+----------------+
|      Event     |
|----------------|
+----------------+
| event_id (PK)  |
| title          |
| description    |
| start_date     |
| end_date       |
| location       |
| price          |
| organizer_name |
| category       |
+----------------+

## Deisgn Mockup
![My Desktop View](https://i.imgur.com/UDTiXjK.png)
