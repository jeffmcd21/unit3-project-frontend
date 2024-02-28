import { Link } from "react-router-dom"



const Header = () => {
  return (
    <div className="background-image">
      <nav className="nav">
        <Link to="/">
          <button className="event-button">Event App</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header