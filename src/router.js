import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Show from "./Pages/Show";
  import Landing from "./Pages/Index";
  import { eventLoader, eventsLoader} from "./loader";

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="" element={<Landing />} loader={eventLoader}/>
    <Route path=":id" element={<Show />} loader={eventsLoader}/>
    <Route path="create" />
    <Route path="update/:id" />
    <Route path="delete/:id" />


    
    </Route>
    )
  )
  
  export default router;