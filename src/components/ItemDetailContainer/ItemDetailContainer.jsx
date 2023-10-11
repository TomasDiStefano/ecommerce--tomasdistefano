import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../mock/asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(res => {
                setItem(res)
            })
    },[itemId])

    return (
        <>
           <ItemDetail {...item}></ItemDetail> 
        </>
    )
}

export default ItemDetailContainer