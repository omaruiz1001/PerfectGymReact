import { useMediaQuery } from "react-responsive";
import colection1 from "../../assets/colection1.webp"
import colection2 from "../../assets/colection2.webp"
import colection3 from "../../assets/colection3.webp"
import colection4 from "../../assets/colection4.webp"
import 'animate.css';

export const HomeCollection = () => {
  const isMobile = useMediaQuery({maxWidth:768})

  if(isMobile) {
    return (
    <>
    <h3 className="sub-title text-primary mt-3 text-center">exlusive</h3>
    <h2 className="collection text-white text-uppercase fs-lg-1 text-center">collections</h2>
    <div id="carouselExample" className="carousel slide p-4">
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={colection1} className="d-block w-100"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={colection2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={colection3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={colection4} className="d-block w-100" alt="..."/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </div>
    <div className="d-flex justify-content-center gap-5 mt-2 animate__animated animate__pulse">
        <h2 className="text-primary">PerfectGym</h2>
        <h2 className="text-secondary">PerfectGym</h2>
      </div>
    </>
    );
  }
  return(
    
    <div className="collections mt-4">
      <h3 className="sub-title text-primary text-center">exlusive</h3>
      <h2 className="text-white text-uppercase fs-1 text-center">collections</h2>
      <div className="collections-images d-flex justify-content-center aling-items-center mt-5">
      <div>
        <img 
        width="400"
        src={colection1} alt="" />
      </div>
      <div>
        <img 
        width="400"
        src={colection2} alt="" />
      </div>
      <div>
        <img 
        width="400"
        src={colection3} alt="" />
      </div>
      <div>
        <img 
        width="400"
        src={colection4} alt="" />
      </div>
    </div>
      <div className="d-flex justify-content-center gap-5 animate__animated animate__pulse animate__infinite">
        <h2 className="text-primary">PerfectGym</h2>
        <h2 className="text-secondary">PerfectGym</h2>
        <h2 className="text-primary">PerfectGym</h2>
        <h2 className="text-secondary">PerfectGym</h2>
        <h2 className="text-primary">PerfectGym</h2>
        <h2 className="text-secondary">PerfectGym</h2>
        <h2 className="text-primary">PerfectGym</h2>
      </div>
    </div>
    )
}
