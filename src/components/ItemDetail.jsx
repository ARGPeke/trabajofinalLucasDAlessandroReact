import { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
        const {addItem} = useContext(CartContext);
        const onAdd = (quantity) =>{
                addItem(item, quantity);
                
        }
    return (
        <div className="container">
            <div className="row">
                    <div className="col">
                        <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
                    </div>
                    <div className="col">
                        <h1>{item.nombre}</h1>
                        <p><b>${item.precio}</b></p>
                        <p>{item.descripcion}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;