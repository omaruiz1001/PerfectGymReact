import "./aboutus.css"
import carrousel from "../../assets/carrousel1.webp"
import carrousel2 from "../../assets/carrousel2.webp"
import carrousel3 from "../../assets/carrousel3.webp"
import 'swiper/css';
import 'swiper/css/navigation';
import { VideoPlayer } from '../../components/Video/Video';
import { ImgCarrousel } from './ImgCarrousel';
import { Testimonials } from './Testimonials';


export const AboutUs = () => {

  const imgs = [carrousel, carrousel2, carrousel3, carrousel]

  return (
    <>
    <div className="container">
      <Testimonials/>
      <ImgCarrousel images={imgs}/>
      <VideoPlayer/>
      </div>
    </>
  )
}