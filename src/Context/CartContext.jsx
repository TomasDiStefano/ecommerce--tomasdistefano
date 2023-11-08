import { useState, createContext } from "react";

export const CartContext = createContext(
    {
        cart: [],
        total: 0,
        productsQty: 0,        
    }
)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [productsQty, setProductsQty] = useState(0);

    console.log(cart);

    const addProduct = (item, itemQty) => {
        const isInCart = cart.find(prod => prod.item.id === item.id);

        if (!isInCart) {
            setCart(prev => [...prev, { item, itemQty }]);
            setProductsQty(prev => prev + itemQty);
            setTotal(prev => prev + (item.price * itemQty));
        } else {
            const updatedCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, itemQty: prod.itemQty + itemQty }
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            setProductsQty(prev => prev + itemQty);
            setTotal(prev => prev + (item.price * itemQty));
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);

        setCart(updatedCart);
        setProductsQty(prev => prev - deletedProduct.itemQty );
        setTotal(prev => prev + (deletedProduct.price * deletedProduct.itemQty));
    }

    const clearCart = () => {
        setCart([]);
        setProductsQty(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, deleteProduct, clearCart, total, productsQty }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;