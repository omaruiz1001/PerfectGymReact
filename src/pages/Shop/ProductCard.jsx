export const ProductCard = ({ product, addToCart }) => {
  return (
    <div>
      <img src={product.img} 
      alt="" 
      className="card-img-top"
      style={{transtition:"transform 0.3s ease-in-out"}}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{product.title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-dark text-white animate__animated animate__pulse animate__infinite sub-title">{`S/${product.price.toFixed(2)}`}</li>
      </ul>
      <div className="card-body">
      <a href="#" onClick={() => addToCart(product.id)} className="card-link">
          Añadir al carrito
      </a>
      </div>
    </div>
  )
}

 {/* <img 
    src={producto.img} 
    className="card-img-top" 
    alt="..." 
    style={{ transition: "transform 0.3s ease-in-out" }}
    />
    <div className="card-body ">
      <h5 className="card-title text-primary">{producto.title}</h5>
      
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item bg-dark text-white animate__animated animate__pulse animate__infinite sub-title">{`S/${producto.price.toFixed(2)}`}</li>
    </ul>
    <div className="card-body">
      <a href="#" onClick={() => addToCart(producto.id)} className="card-link">
        Añadir al carrito
      </a>
    </div> */}