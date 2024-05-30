import { useContext} from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import recycle from "../assets/images/recycle.svg"

const Cart = () => {
    const {cart, removeItem, clear,getCountProducts, getSumProducts } = useContext(CartContext);

    if (getCountProducts()== 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-5">
                        <h2>Su carrito esta vacio</h2>
                        <p>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</p>
                        <Link to={"/"} type="button text-center" className="btn btn-primary btn-lg">Seguir Comprando</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
            <div className="container">
                <div className="row">
                    <div className="col mt-3">
                        <table className="table">
                                <tbody>
                                        <tr>
                                            <td colSpan={6} className="text-end"><button className="btn btn-primary btn-lg" onClick={clear}>Vaciar Carrito</button></td>
                                        </tr>
                                    {cart.map(item=>(
                                        <tr key={item.id}>
                                            <td><img src={item.imagen} alt={item.nombre} width={120}/></td>
                                            <td className="text-center align-middle"><b>{item.nombre}</b></td>
                                            <td className="text-center align-middle" >${item.precio}</td>
                                            <td className="text-center align-middle">{item.quantity}</td>
                                            <td className="text-center align-middle"><button aria-label="Recycle" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><i className="bi bi-recycle" aria-hidden="true"></i></button></td>
                                        </tr>
                                    ))}
                                        <tr>
                                            <td colSpan={2} className="align-middle"><b>Total</b></td>
                                            <td className="text-center align-middle"><b>${getSumProducts()}</b></td>
                                            <td>&nbsp;</td>
                                            <td className="text-end"><Link to={"/checkout"} className="btn btn-primary btn-lg">Realizar Compra</Link></td>
                                        </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;