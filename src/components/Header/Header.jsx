import { Link } from "react-router-dom"


export const Header = () => {
  return (
    <nav className="navbar bg-dark p-2">
    <div className="container">
        <Link to={"/"} className="navbar-brand text-primary">PerfectGym</Link>
        <ul className="navbarLinks">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/collection"}>Collection</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>AboutUs</Link>
          </li>
        </ul>
        <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="offcanvas offcanvas-end bg-dark text-primary" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">PerfectGym</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link to={"/"} className="nav-link text-white" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/collection"} className="nav-link text-white" role="button" aria-expanded="false">
                Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/shop"} className="nav-link text-white">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-link text-white">AboutUs</Link>
            </li>
          </ul>
          
        </div>
      </div>
    
  </nav>
  )
}
