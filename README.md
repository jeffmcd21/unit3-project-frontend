# Eventful App
## **Team:**
 + Rabhi Alqadi
 + Diana Hudson
 + Jeff McDonald
 + Geno Jimenez


## **Frontend (React App):**

[Deployed]()

#### Libraries:
- React
- React Router

### React Router Routes:
- Home Page: "/"
  - Display the event calendar and list of upcoming events.

- Event Detail Page: "/events/:eventId"
  - Display detailed information about a specific event.

- Create Event Page: "/create-event"
  - Allow users to create new events.

### React Architecture:
### Markdown

- App
  - Header

  - Router
    - HomePage
    - EventDetailPage
    - CreateEventPage

  - Footer



 ## **Backend (Express):**
 [Deployed](https://unit3project-1.onrender.com)
###  Libraries

- Express.js
- dotenv
- morgan
- cors
- mongoose

### **Routes:**
- GET /events: Retrieve a list of events.

- GET /events/:eventId: Retrieve specific event.

- POST /events: Create a new event.



## Models (ERD):

<!-- |      Event     |
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
| category       | -->


### Design Mockup
![My Desktop View](https://i.imgur.com/UDTiXjK.png)

Diana testing