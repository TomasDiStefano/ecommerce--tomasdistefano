import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css'
import '../Cart/Cart.css'

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { cart, clearCart, total, productsQty } = useContext(CartContext);

    console.log("CART", cart);

    //Funciones y validaciones: 

    const handleForm = (event) => {
        event.preventDefault();


        //Verificamos que los campos esten completos: 
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }

        //Validamos que los campos del email coincidan 
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        //Paso 1: Creamos un objeto con todos los datos de la orden de compra. 

        const orden = {
            items: cart.map(product => ({
                id: product.item.id,
                nombre: product.item.name,
                cantidad: product.itemQty
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        //Paso 2: Guardar la orden en la base de datos

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                clearCart();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vamos a morir!!");
            })
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <h1 style={{margin:"10px", color: "white"}}><i class="bi bi-receipt" ></i> Checkout</h1>
                {
                    cart.map(product => (
                        
                        <div className='d-flex text-center align-items-center justify-content-around px-auto' style={{ borderRadius: "10px", marginRight: "10px", margin: "10px", paddingRight: "30px", height: "150px", background: "white" }} >
                            
                            <div className="">
                                <img src={product.item.img} alt={product.item.name} style={{height:"150px", width:'150px' , paddingRight:"2rem"}} />
                            </div>
                            <div className="d-flex flex-column mx-auto px-auto w-100">
                                <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}} >Quantity</h3>
                                <span style={{fontSize:"1rem"}}>{product.itemQty} item/s</span>
                            </div>
                            <div className="d-flex flex-column mx-auto px-auto w-100">
                            <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Total</h3>
                                <span  style={{fontSize:"1rem"}} className="mx-auto">$ {product.itemQty * product.item.price}</span>
                            </div>
                        </div>
                    ))
                }

                <div className="totalPurchase--container">
                    <h3>
                        Productos adquiridos: {productsQty}
                    </h3>
                    <h3>
                        Total: $ {total}
                    </h3>
                </div>
                
                <div className="form--container" style={{textAlign:"center"}}>
                    <div className="form-group">
                        <div style={{marginTop:"5px"}}>
                            <label htmlFor=""> Nombre </label>
                        </div>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <div style={{marginTop:"5px"}}>
                            <label htmlFor="" > Apellido </label>
                        </div>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="form-group">
                    <div style={{marginTop:"5px"}}>
                            <label htmlFor=""> Teléfono </label>
                        </div>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <div style={{marginTop:"5px"}}>
                            <label htmlFor=""> Email </label>
                        </div>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <div style={{marginTop:"5px"}}>
                            <label htmlFor=""> Email Confirmación </label>
                        </div>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>

                    {
                        error && <p style={{ color: "red" }}> {error} </p>
                    }

                    <button className="summary--button" style={{ margin: "15px"}} type="submit" > Finalizar Compra </button>
                </div>
                
            </form>
            {
                ordenId && (
                    <h1>
                        <strong style={{color: "white"}}>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                    </h1>
                    
                )
            }
        </div>
    )
}

export default Checkout