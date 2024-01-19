import React, { useEffect, useState } from 'react';
import img4 from "../../assets/arrivals.webp"
import img5 from "../../assets/trendy.webp"
import img8 from "../../assets/slider3.webp"
import keys from "../../assets/keys.js";
import "./Collection.css"
import { loadStripe } from '@stripe/stripe-js';
import { Droptown } from '../../components/Droptown/Droptown.jsx';
import { NewProducts, AnotherComponent } from '../../ui/components/Card/CollectionProduct.jsx';
import { ProductCard } from './ProductCard.jsx';


// Inicia la conexion con Strope //
const stripePromise = loadStripe(keys.public);

export const Collection = () => {
  const [categories, setCategories] = useState([]);
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState(null);

  // Usamos useEffect para obtener los datos de la api de Stripe//
  useEffect(() => {
    // funcion asincrona con async y await //
    const fetchData = async () => {
      try {
        const productsResponse = await fetch("https://api.stripe.com/v1/products", { headers: { Authorization: `Bearer ${keys.secret}` } });
        const pricesResponse = await fetch("https://api.stripe.com/v1/prices", { headers: { Authorization: `Bearer ${keys.secret}` } });

        const [productsJson, pricesJson] = await Promise.all([productsResponse.json(), pricesResponse.json()]);

        /*Contiene los productos */
        setCategories(productsJson.data);
        /*Contiene los precios */
        setPrices(pricesJson.data);
        
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);


  // Redirige a la pagina de pago cuando se hace click a un producto //
  const handleProductClick = (priceId) => {
    stripePromise.then(stripe => {
      stripe.redirectToCheckout({
        lineItems: [{
          price: priceId,
          quantity: 1
        }],
        mode: "subscription",
        successUrl: "http://127.0.0.1:5501/success.html",
        cancelUrl: "http://127.0.0.1:5501/cancel.html"
      })
        .then(res => {
          if (res.error) {
            console.error(res.error.message);
          }
        });
      })
  };

  // Se defina datos para 3 instancias del componente Dropwtown, texto para el boton y para el menú //
  const buttonText1 = 'Dumbells';
  const menuOptions1 = ['Pulleys', 'pull up bars', 'lat pull down', 'leg extension'];
  const buttonText2 = 'Running';
  const menuOptions2 = ['dipping bars', 'leg curl', 'preacher bench', 'press machine'];
  const buttonText3 = 'Rope Pull';
  const menuOptions3 = ['pulleys', 'pull up bars', 'lat pull down', 'leg extension'];

  // Se renderiza los datos //

  return (
    <div>
      
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='droptowns bg-white'>
              <Droptown buttonText={buttonText1} menuOptions={menuOptions1}/>
              <Droptown buttonText={buttonText2} menuOptions={menuOptions2}/>
              <Droptown buttonText={buttonText3} menuOptions={menuOptions3}/>
            </div>
            <NewProducts/>
            <div>
              <img src={img4} className='w-100 mt-4' />
            </div>
            <AnotherComponent/>
              <div>
                <img src={img8} 
                className='w-100 mt-4' 
                />
              </div>
          </div>
          <div className='col-lg-9'>
            <div>
              <img 
              src={img5} 
              className='arrivalsImg w-100 mt-lg-0 mt-4'
              />
            </div>
            <div className='bg-white mt-3'>
              <h5 className='text-primary p-3'>Showing Products</h5>
            </div>
          <div className='grid-containerr mt-4'>
         
          {prices.map(e => {
             /*Buscamos hacer una comparacion del id con el metodo find y se almacena en categoriesData*/
            const categoriesData = categories.find(category => category.id === e.product);
    
            return (
              /* Si categoriesData es true entonces se ejecuta lo siguiente*/ 
              categoriesData && (  
              <ProductCard
                key={e.id}
                id={e.id}
                name={categoriesData.name}
                image={categoriesData.images[0]}
                unitAmount={e.unit_amount_decimal}
                currency={e.currency}
                onClick={()=>handleProductClick(e.id)}
                />
              )
            );
          })}
          </div>
          </div>
        </div>
        </div>
      )}
    </div>   
  );
};

