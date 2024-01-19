import "./Footer.css"
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container bg-black text-center mt-3">
      <div className="footer">
        <h1 className="text-white">PerfectGym.com</h1>
        <img className="gift" src="https://i.gifer.com/OSnw.gif" alt="" width="60" />
        <div className="list-container">
          <ul className="lists d-flex justify-content-center align-items-center gap-5 text-dark mt-4">
            <Link to={"/"}>
              <li className="list">Home</li>
            </Link>
            <Link to={"/collection"}>
              <li className="list">Collection</li>
            </Link>
            <Link to={"/shop"}>
              <li className="list">Shop</li>
            </Link>
            <Link to={"/aboutus"}>
              <li className="list">AboutUs</li>
            </Link>
          </ul>
          <div className="d-flex justify-content-center gap-3 footer-icons">
            <CiTwitter color="white" />
            <CiFacebook color="white"/>
            <FaInstagram color="white"/>
          </div>
          <div className="copyright mt-5 text-white">
            <p>Copyright ©2024 Todos los derechos reservados | <strong>Omar Ruiz CodeDev</strong> 🫡</p>
          </div>
        </div>
      </div>
    </div>
  )
}
