import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { IoIosStar } from 'react-icons/io';

export const ImgCarrousel = ({ images }) => {
  return (
    <Swiper className='mt-5'
      // install Swiper modules
      modules={[ Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }
        }}
      loop={true}
      autoplay={{delay:2000}}
      onSwiper={(swiper) => console.log(swiper)} 
    >
      {images.map((img,index)=>(
      <SwiperSlide key={index} className='d-flex justify-content-center'>
        <div className='text-center'>
          <img src={img} alt={`Slide${index+1}`}/>
          <div className='d-flex justify-content-center gap-2 mt-3'>
            <IoIosStar color="#fec42d"/>
            <IoIosStar color="#fec42d"/>
            <IoIosStar color="#fec42d"/>
            <IoIosStar color="#fec42d"/>
            <IoIosStar color="#fec42d"/>
          </div>
          <p className='text-primary mt-3'>"El gimnasio ha cambiado mi vida. Antes,
            carecía de motivación y actividad física, pero
            desde que me uní, descubrí una pasión por el fitness.
          </p> 
        </div>
      </SwiperSlide>
        ))}
      </Swiper>
  )
}
