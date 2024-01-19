import img1 from "../../assets/slider3.webp"
export const Testimonials = () => {
  return (
    <div className="grid mt-lg-5 mt-3">
    <div className="row grid-containers">
      <div className="col-lg-6 grids">
        <p className="grid-text text-white">
        Bienvenido a <strong>PerfectGym</strong> , tu destino definitivo
        para alcanzar tus metas de fitness y bienestar. En 
        <strong> PerfectGym</strong>, nos dedicamos a brindar una experiencia
        única que va más allá de las pesas y las máquinas de ejercicio.
        Somos un gimnasio comprometido en ayudarte a transformar tu vida,
        inspirando y guiándote en cada paso de tu viaje hacia un estilo
        de vida más saludable.
        </p>
        <h3 className="grid-subtitle text-primary">Nuestra Misión:</h3>
        <p className="grid-text text-white">En <strong>PerfectGym</strong>, nuestra misión es ofrecer un espacio inclusivo
          y motivador donde todos pueden descubrir su potencial físico y mental. 
          Nos esforzamos por crear un ambiente acogedor que inspire a nuestros miembros
          a superar sus límites, alcanzar sus objetivos y adoptar hábitos de vida activos y equilibrados.</p>
      </div>
      <div className="col-lg-6">
        <img 
        className='grid-img'
        src={img1}
        width="100%"/>
      </div>
    </div>
    <div className="mt-5 text-center">
      <h1 className="sub-title text-primary">Testimonios</h1>
      <p className="text-white fs-2">WHAT OUT CUSTOMER SAY'S</p>
    </div>
  </div>
  )
}
