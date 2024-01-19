import product1 from "../../assets/product1.webp"
import product2 from "../../assets/product2.webp"
import product3 from "../../assets/product2.1.webp"
import product4 from "../../assets/product4.webp"
import product5 from "../../assets/product4.1.webp"
import { IoIosStar } from "react-icons/io";
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"

export const HomeProducts = () => {
  const isMobile = useMediaQuery({maxWidth:768})
  
  if(isMobile){ 
    return(
      
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="mt-4">
    <h3 className="sub-title text-primary text-center">new arrivals</h3>
    <h2 className="title text-white text-uppercase text-center">products for you</h2>
    </div>
   <div className="carousel-inner carousel-container">
    <div className="carousel-item active">
      <div className="card">
        <img src={product1} className="d-block w-100 " alt="..."/>
        <div className="card-body">
          <h5 className="card-title text-primary">Mancuerna de Bronce</h5>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar />
          <p className="card-text">Resistente, elegante, funcional, ideal para entrenamiento de fuerza."</p>
         <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
      </div>
      </div>
    </div>
    <div className="carousel-item ">
    <div className="card">
        <img src={product2} className="d-block w-100 " alt="..."/>
        <div className="card-body">
          <h5 className="card-title text-primary">Mancuerna de Bronce</h5>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar />
          <p className="card-text">Resistente, elegante, funcional, ideal para entrenamiento de fuerza."</p>
          <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
      </div>
    </div>
    </div>
    <div className="carousel-item ">
    <div className="card">
        <img src={product3} className="d-block w-100 " alt="..."/>
        <div className="card-body">
          <h5 className="card-title text-primary">Mancuerna de Bronce</h5>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar />
          <p className="card-text">Resistente, elegante, funcional, ideal para entrenamiento de fuerza."</p>
          <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
      </div>
    </div>
    </div>
    <div className="carousel-item ">
    <div className="card">
        <img src={product4} className="d-block w-100 " alt="..."/>
        <div className="card-body">
          <h5 className="card-title text-primary">Mancuerna de Bronce</h5>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar color="#fec42d"/>
          <IoIosStar />
          <p className="card-text">Resistente, elegante, funcional, ideal para entrenamiento de fuerza."</p>
          <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
      </div>
    </div>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
)
  }
  return (
    <>
    <div className="mt-4">
    <h3 className="sub-title text-primary text-center">new arrivals</h3>
    <h2 className="title text-white text-uppercase text-center">products for you</h2>
    </div>
    
    <div className="cards-container d-flex justify-content-center gap-4 mt-5">
      <div className="card" style={{width: "18rem"}}>
        <img src={product1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-primary">Mancuerna de Bronce</h5>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar />
        <p className="card-text">Resistente, elegante, funcional, ideal para entrenamiento de fuerza."</p>
        <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
      </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src={product2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-primary">LKey Dumbbells</h5>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <p className="card-text">Estilo moderno, sonido potente, libertad sin cables, comodidad asegurada."</p>
        <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src={product3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-primary">Mancuerna Rusa</h5>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <p className="card-text">Diseño versátil, clásica, versátil, eficiente, perfecta para entrenamiento funcional."</p>
        <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src={product4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-primary">Soga de Gimnasio</h5>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <p className="card-text">"Soga de gimnasio: Duradera, resistente, versátil, esencial para entrenamiento funcional."</p>
        <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src={product5} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-primary">Tomatodo</h5>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <IoIosStar color="#fec42d"/>
        <p className="card-text">"Tomatodo de gimnasio: Práctico, resistente, hidratación esencial para tus entrenamientos."</p>
        <Link to={"/collection"} className="btn btn-primary">Ver más</Link>
        </div>
      </div>
    </div>
    
    </>
  )
}


