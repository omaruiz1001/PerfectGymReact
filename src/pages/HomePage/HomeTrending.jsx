import { useState } from "react"
import imgGrid from "../../assets/grid-image.webp"
import imgGrid1 from "../../assets/grid-image2.webp"
import imgGrid2 from "../../assets/product2.1.webp"
import product from "../../assets/product4.webp"
import especial from "../../assets/especial.webp"

export const HomeTrending = () => {

  const [imgHover, setImgHover] = useState(false)
  const [imgHover2, setImgHover2] = useState(false)
  
  
  const handleMouseEnter = () =>{
    setImgHover(true)
  }
  const handleMouseLeave = ()=>{
    setImgHover(false)
  }
  const handleMouseEnter2 = () =>{
    setImgHover2(true)
  }
  const handleMouseLeave2 = ()=>{
    setImgHover2(false)
  }

  return (
    <div className="container text-center mt-5">
      <div className="grid-container mt-3">
        <div className="text-primary mt-2 ">
          <img src={imgGrid}
          className="firstImg"
          width="500"/>
        </div>
        <div className="text-primary"> 
            <p className="sub-title">trending</p>
            <h3 className="title text-white text-uppercase">from the flash</h3> 
          <div className="d-flex justify-content-center gap-5 mt-lg-5 mt-4 grid-images">
            <div>
              {imgHover ? (
              <img src={imgGrid1} 
              width="200" 
              onMouseLeave={handleMouseLeave}
              />
              ) : (
                <img
                width="200"
                src={especial}
                onMouseEnter={handleMouseEnter}
                />
                )
            }
            </div>
            <div>
              {imgHover2 ? (
              <img src={imgGrid2} 
              width="200" 
              onMouseLeave={handleMouseLeave2}
              />
              
              ) : (
              <img 
              src={product}
              width="200"
              onMouseEnter={handleMouseEnter2}
              />
              )}
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}
