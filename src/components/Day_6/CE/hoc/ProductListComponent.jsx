import React from 'react';

const ProductListComponent = ({productList}) => {
  return (
    <div>
        {
            productList.map( (product) =>{
                return(
                    <div key={product.id}>
                        <img src={product.image} alt={product.name}></img>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductListComponent