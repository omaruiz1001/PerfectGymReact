export const ProductCard = ({id, name, image, unitAmount, currency, onClick}) => {
  
  const formatMoneda = num => `$${num.slice(0, -2)}.${num.slice(-2)}` 
  return (
    <figure className="product" data-price={id} onClick={onClick}>
      <img src={image || "" } alt={name} />
      <figcaption className="text-white">
        {`${name} ${formatMoneda(unitAmount)} ${currency ? currency.toUpperCase(): ""}`}
      </figcaption>
    </figure>
  )
}
// <figure key={e.id} className="product" data-price={e.id} onClick={() => handleProductClick(e.id)}>
    //   <img src={categoriesData.images[0] || ""} alt={categoriesData.name} />

    //   <figcaption className='text-white'>
    //     {`${categoriesData.name} ${formatMoneda(e.unit_amount_decimal)} ${e.currency.toUpperCase()}`}
    //   </figcaption>
    // </figure>