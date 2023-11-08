import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/config";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const newDoc = doc(db, "products", itemId);
    
        getDoc(newDoc)
            .then(res => {
                const data = res.data();
                const newItem = { id: res.id, ...data }
                setItem(newItem);
            })
            .catch(err => {
                console.log("err: ", err);
            })
    }, [itemId]);

    // useEffect(() => {
    //     getProductById(itemId)
    //         .then(res => {
    //             setItem(res)
    //         })
    // },[itemId])

    return (
        <>
           <ItemDetail {...item}></ItemDetail> 
        </>
    )
}

export default ItemDetailContainer