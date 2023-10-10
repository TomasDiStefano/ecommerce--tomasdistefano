import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ products }) => {
  console.log("PRODUCTOS", products)
  return (
    <div>
      {JSON.stringify(products)}
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList