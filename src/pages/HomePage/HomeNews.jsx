import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../assets/slider.webp"
import img2 from "../../assets/slider2.webp"
import img3 from "../../assets/slider3.webp"
import img4 from "../../assets/slider4.webp"
import img5 from "../../assets/slider5.webp"
import img6 from "../../assets/slider6.webp"
import { useState } from 'react';

export const HomeNews = () => {

  const images = [img1, img2, img3, img4, img5, img6]
  const [hover, setHover] = useState(null)

  return (
    <div className="mt-5">
      <div className="text-center">
        <p className="sub-title text-primary">news</p>
        <h3 className="title text-white text-uppercase">from the blog</h3>
      </div>
      <div>
      <Swiper className='swiper2 container text-center'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }
        }}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {images.map((image,index)=>(
      <SwiperSlide key={index}>
        <div className='imgg-container'
        onMouseEnter={()=> setHover(index)}
        onMouseLeave={()=> setHover(null)}
        >
          <img 
          src={image} 
          className={hover === index ? "hovered": ""}
          width="400" 
          alt={`Slide ${index + 1}`}/>
        </div>
          <div className='mt-3 '>
            <h3 className='text-primary text-uppercase fs-5 text-center'>workout wonders</h3>
            <p className='text-white'>Faded short sleeves t-shirt with high neckline.
              Soft and stretchy material for a comfortable fit.Accessorize with
              </p>
          </div>
      </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </div>
  )
}
