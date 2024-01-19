import video from "./videofooter.mp4"
export const VideoPlayer = () => {
  return (
    <div className="video-conter mt-5"> 
      <video 
      className="video-container"
      width="100%" 
      height="360" 
      autoPlay 
      loop 
      muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="info-video">
        <h3 className="info-title text-white text-uppercase text-center">get to know</h3>
        <p className="info-description text-white text-center ">Signup for our newsletter to stay up to date on sales and events.</p>
      <form className="text-center">
        <input 
        className="input" 
        type="email"  
        placeholder="Your email"
        required
        />
        <button className="btn btn-primary">Enviar</button>
      </form>
      </div>
    </div>
  );
}
