import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Show from "./Pages/Show";
  import Landing from "./Pages/Index";
  import { eventLoader, eventsLoader} from "./loader";
  import { updateAction, createAction,deleteAction } from "./action";

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="" element={<Landing />} loader={eventLoader}/>
    <Route path=":id" element={<Show />} loader={eventsLoader}/>
    <Route path="create" action={createAction}/>
    <Route path="update/:id" action={updateAction}/>
    <Route path="delete/:id" action={deleteAction}/>


    
    </Route>
    )
  )
  
  export default router;