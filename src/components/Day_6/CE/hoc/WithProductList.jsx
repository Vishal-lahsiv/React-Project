import React from 'react'

const WithProductList = (WrappedComponent,productList) => {
  return () =>{
    return <WrappedComponent productList={productList}/>
  }
}

export default WithProductList;