import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

import { db } from "../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const { category } = useParams();

    /*useEffect(() => {
        const getProductList = category ? getProductsByCategory : getProducts;

        getProductList(category)
            .then(res => { setProducts(res) })
    }, [category]) */

    useEffect(() => {
        const productList = category ? query(collection(db, "products"), where("category", "==", category)) : query(collection(db, "products"));

        getDocs(productList)
            .then(res => {
                const newProducts = res.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts);
            })
            .catch(err => console.log("error: ", err));
    }, [category]);

    return (
        <div>
            <ItemList products={products}></ItemList>
        </div>
    );
}

export default ItemListContainer