import React from 'react'

const Info = ({ productList}) => {
  return (
    <div>
    {
        productList.map((product) => {
            return (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            )
        })
    }
</div>
  )
}

export default Info