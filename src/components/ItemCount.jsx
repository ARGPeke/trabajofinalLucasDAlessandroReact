import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => { 
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const agregarCarrito = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        }
    }

        useEffect(()=> {
            setItemStock(stock);
        },[stock])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn bg-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn bg-warning">{contador}</button>
                        <button type="button" className="btn bg-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {visible ? <button type="button" className="btn bg-primary mt-2 text-white" onClick={agregarCarrito}><b>Agregar al Carrito</b></button> : <Link to={"/cart"} className="btn bg-primary mt-2 text-white" onClick={onAdd}><b>Finalizar Compra</b></Link>}
                    
                </div>
            </div>
        </div>
    )
}

export default ItemCount;