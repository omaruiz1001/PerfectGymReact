import { Link } from "react-router-dom"
import Logo from "../../assets/Rectangle_8.webp"
export const HomeExclusive = () => {
  return (
    <div className="img-container">
      <img 
      className="header-img"
      src={Logo} 
      alt="" 
      />
      <div className="slider-content">
        <div className="slider-text text-primary">Exclusive</div>
        <h1 className="slider-title text-white">get 10% off now</h1>
        <p className="slider-descripcion text-white">
        "Tu cuerpo puede soportar casi cualquier cosa. Es tu mente la que
        debes convencer."
        </p>
        <div className="slider-btns d-flex gap-4">
          <button className="btn btn-primary" type="button">
            <Link to={"/shop"} className="text-dark">Shop Now</Link>
          </button>
          <button className="btn btn-outline-dark text-white"  type="button">
            <Link className="text-white" to={"/collection"}>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
