export const Cart = ({ cart, handleCloseProduct, getTotalPrice, openShop }) => {
  return (
    <div className={`container-cart-products ${ openShop ? "" : "hidden-cart"}`}>
      <div className="row-product hidden">
        {cart.length > 0 ? (
        cart.map((producto, index)=> (
          <div key={index} className="cart-product">
            <p className="titulo-producto-carrito">{producto.title}</p>
            {producto.price && (
              <span className="precio-producto-carrito  text-primary">{`$${producto.price.toFixed(2)}`}</span> 
            )} 
            <button
            onClick={()=>handleCloseProduct(producto.id)}
            type="button"
            className="btn-close"
            aria-label="Close"
            >
            </button> 
          </div>
          ))
        ) : (
          <p className="cart-empty">El carrito esta vacio</p>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-total hidden">
          <h3>Total:</h3>
          <span className="total-pagar  text-primary">{`$${getTotalPrice().toFixed(2)}`}</span>
        </div>
        )}
    </div>
  )
}

	{/* <div className={`container-cart-products ${openShop ? '' : 'hidden-cart'}`}>
    <div className="row-product hidden">
    {cart.length > 0 ? (
      cart.map((producto,index)=>(  
        <div key={index} className="cart-product">
          <p className="titulo-producto-carrito">{producto.title}</p>
          {producto.price && <span className="precio-producto-carrito  text-primary">{`$${producto.price.toFixed(2)}`}</span>}
          <button 
          onClick={()=>handleCloseProduct(producto.id)}
          type="button" 
          class="btn-close" 
          aria-label="Close"></button>
        </div>
        ))
        ) : (
          <p className="cart-empty">El carrito está vacío</p>					          
        )}
    </div>
    {cart.length > 0 && (
    <div className="cart-total hidden">
        <h3>Total:</h3>
        <span className="total-pagar  text-primary">{`$${getTotalPrice().toFixed(2)}`}</span> 
    </div>
    )}
  </div> */}