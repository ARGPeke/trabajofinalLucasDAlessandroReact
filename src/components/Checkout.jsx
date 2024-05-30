import { useContext, useEffect, useState } from "react"
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore,  } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, getCountProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre]  = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {

        if (nombre ==""){
            return false;
        }
        if (email ==""){
            return false;
        }
        if (telephone == ""){
            return false;
        }

        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item=> ({id:item.id, title:item.nombre, price:item.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:getSumProducts()};


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            setNombre("");
            setEmail("");
            setTelephone("");
            clear();
        });
    }
        if (getCountProducts()== 0) {
            return (
                <div className="container my-5">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Su carrito esta vacio</h2>
                            <p>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</p>
                            <Link to={"/"} className="btn btn-primary btn-lg">Seguir Comprando</Link>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                    <form>
                        <div className="mb-3">
                          <label className="form-label"><b>Nombre</b></label>
                          <input type="text" className="form-control" onInput={(e)=> {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label"><b>Email</b></label>
                          <input type="text" className="form-control" onInput={(e)=> {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label"><b>Telephone</b></label>
                          <input type="text" className="form-control" onInput={(e)=> {
                            setTelephone(e.target.value)}}/>
                        </div>
                            <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                        </form>
                    </div>
                    <div className="col">
                        <table className="table">
                                <tbody>
                                    {cart.map(item=> (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                        <td>{item.nombre}</td>
                                        <td className="text-end">${item.precio}</td>
                                    </tr>
                                        ))}
                                    <tr>
                                        <td colSpan={2}><b>Total</b></td>
                                        <td className="text-end"><b>${getSumProducts()}</b></td>
                                    </tr>    
                                </tbody>
                        </table>
                    </div>
                </div>
                 <div className="row my-5">
                     <div className="col text-center">
                        <div className="alert alert-light" role="alert">{orderId ? "Felicitaciones! Tu ID de compra es: <b>" + orderId + "</b>" : ""}</div>
                     </div>
                 </div>
            </div>
        )
    }


export default Checkout;