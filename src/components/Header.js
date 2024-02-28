import { Link } from "react-router-dom"


const Header = () => {
    return(
      <div className="background-image">
        <nav className="nav">
        <Link to="/">
          <div>Event app</div>
        </Link>
      </nav>
    </div>
    )
}
export default Header