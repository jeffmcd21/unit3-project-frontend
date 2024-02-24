import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return(
    <div className="App">
      <Outlet />
      <Header />
      </div>
  )
}
export default App