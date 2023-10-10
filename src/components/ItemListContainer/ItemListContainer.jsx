import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import { getProductsByCategory, getProducts } from '../../mock/asyncmock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const getProductList = category ? getProductsByCategory : getProducts;

        getProductList(category)
            .then(res => { setProducts(res); console.log("RESPUESTA:", res) })
    }, [category]) 

    return (
        <div>
            <ItemList products={products}></ItemList>
        </div>
    );
}

export default ItemListContainer