import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="nav">
        <Link to="/">
        <div className="background-image">
          {/* <button className="event-button">Event App</button> */}
        </div>
        </Link>
      </nav>
  );
};

export default Header