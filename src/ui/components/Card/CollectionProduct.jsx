import { IoIosStar } from "react-icons/io"
import img1 from "../../../assets/grid-image2.webp"
import img2 from "../../../assets/especial.webp"
import img3 from "../../../assets/product1.webp"
import img7 from "../../../assets/product4.webp"


 const CollectionProduct = ({imgSrc, productName, rating, price}) => {
  return ( 
      <div className='d-flex text-dark gap-lg-3 gap-5  justify-content-center aling-items-center'>
        <div>
          <img  src={imgSrc} width="120" alt={productName} />
        </div>
        <div>
          <p className='text-primary'>{productName}</p>
          {Array.from({ length : 5 } , (_, index)=>(
            <IoIosStar
            key={index} 
            color={index < rating ? "#fec42d" : "gray"}/>
          ))}
           <p>${price.toFixed(2)}</p>
        </div>
      </div>         
    
  )
}

export const NewProducts = () => (
  <div className='mt-4 newproducts bg-white'>
    <p className='text-white ml-2 p-2 bg-primary'>New Products</p>
    
    <CollectionProduct imgSrc={img1} productName='Weight Plate stan' rating={4} price={60.00} />
    <CollectionProduct imgSrc={img2} productName='Weight Plate stan' rating={4} price={70.00} />
    <CollectionProduct imgSrc={img3} productName='Weight Plate stan' rating={4} price={70.00} />
    <CollectionProduct imgSrc={img7} productName='Weight Plate stan' rating={4} price={70.00} />
  </div>
);

const CollectionProducts = ({imgSrc, productName, rating, price}) => {
  return ( 
      <div className='d-flex text-dark gap-lg-3 gap-5  justify-content-center aling-items-center'>
        <div>
          <img  src={imgSrc} width="120" alt={productName} />
        </div>
        <div>
          <p className='text-primary'>{productName}</p>
          {Array.from({ length : 5 } , (_, index)=>(
            <IoIosStar
            key={index} 
            color={index < rating ? "#fec42d" : "gray"}/>
          ))}
         <p className="special-price">${price.toFixed(2)}</p>     
        </div>
      </div>         
    
  )
}

export const AnotherComponent = () => (
  <div className='mt-4 newproducts bg-white'>
     <p className='text-white ml-2 p-2 bg-primary'>Especial Products</p>
    <CollectionProducts imgSrc={img2} productName='Weight Plate stan' rating={4} price={80.00 }  />
    <CollectionProducts imgSrc={img1} productName='Weight Plate stan' rating={3} price={90.00} />
    <CollectionProducts imgSrc={img7} productName='Weight Plate stan' rating={5} price={120.00} />
    <CollectionProducts imgSrc={img3} productName='Weight Plate stan' rating={4} price={70.00} />
    
  </div>
);







