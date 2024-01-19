import  "./shop.css"
import img1 from "../../assets/bicicle.webp"
import img2 from "../../assets/disco.webp"
import img3 from "../../assets/especial.webp"
import img4 from "../../assets/especial2.webp"
import img5 from "../../assets/mancuerna.webp"
import img6 from "../../assets/product1.webp"
import img7 from "../../assets/product4.webp"
import img8 from "../../assets/product4.1.webp"
import { useState } from "react"
import { ProductCard } from "./ProductCard"
import { Cart } from "./Cart"


export const Shop = () => {

  /* Indica si el carrito esta abierto o no */
  const [openShop, setOpenShop] = useState(false)
  /* Almacena los productos seleccionado */
  const [cart, setCart] = useState([])

  const productos = [
    { id: 1, title: "Bicicleta Spinning Pro-XR5000", price: 90.00, img: img1 },
    { id: 2, title: "Disco de Gimnasio Premium", price: 12.00, img: img2 },
    { id: 3, title: "Pantaloneta para mujer", price: 50.00, img: img3 },
    { id: 4, title: "Máquina Home P550 Pro 65 Kg", price: 200.00, img: img4 },
    { id: 5, title: "Mancuerna Verde", price: 80.00, img: img5 },
    { id: 6, title: "Mancuernas de bromo", price: 90.00, img: img6 },
    { id: 7, title: "Soga de Gimnasio", price: 20.00, img: img7 },
    { id: 8, title: "Tomatodo Deportivo", price: 40.00, img: img8 },
    { id:9, title:"Pesa rusa", price:55.00, img: img1},
  ] 

  
  
  const handleOpen = ()=>{
    setOpenShop(!openShop)
  }

  /* Agrega un producto al carrito al comparar por su id */
  const addToCart = (productId) => {
    const productToAdd = productos.find((p) => p.id === productId);

    if (productToAdd) {
      /* Actualizamos el carrito creando un nuevo array que contiene todo de cart y 
      lo agrega a productToAdd */
      setCart([...cart, productToAdd]);
      console.log("Carrito actualizado:", cart);
    }
  };
  
  /* Calcula el precio total de los productos del carrito */ 
  const getTotalPrice = () =>{
    return cart.reduce((total,producto)=> total + producto.price,0)
  }

  /* Elimina un producto del carrito */
  const handleCloseProduct = (productId) =>{
    /* Agrega a la nueva variable los productos que no sean iguales al producId */
    const updateCart = cart.filter((product)=> product.id !== productId)
    setCart(updateCart)
    console.log(updateCart)
  }

  return (
    <>
    <div className="container-icon mt-4">
				<div className="container-cart-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokLidth="1.5"
						stroke="currentColor"
						className={`icon-cart ${openShop ? 'open' : ''}`}
            onClick={handleOpen}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              
            />
					</svg>
					<div 
          className="count-products">
						<span id="contador-productos">{cart.length}</span>
					</div>
				</div>
        <Cart cart={cart} handleCloseProduct={handleCloseProduct} getTotalPrice={getTotalPrice} 
        openShop={openShop}
        />
    </div>
   
     <div className="container mt-5">
        <div className="grillas">
          {productos.map((producto,index) => (
            <div key={index} className="card bg-dark grilla-container" > 
              <ProductCard key={index} product={producto} addToCart={addToCart}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


