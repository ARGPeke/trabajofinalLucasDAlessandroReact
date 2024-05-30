import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Loading from "./Loading";
import ItemList from "./ItemList";

const Mujeres = () => { 
        const [items, setItems] = useState ([]);
            const [visible, setVisible] = useState(true);
            const {id} = useParams();

        useEffect (()=> {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            const queryCollection = query(itemsCollection, where("genero", "==", "femenino"));
            getDocs(queryCollection).then(snapShot => {
                if (snapShot.size > 0){
                setItems(snapShot.docs.map(item=>({id:item.id, ...item.data()})));
                setVisible(false);
            }
        })
    }, []);
    
    return (
        <>
            {id ? "" : <Carousel/>}
            <div className="container mt-5">
                <div className="row">
                    {visible ? <Loading /> : <ItemList items={items}/>}
                </div>
            </div>  
        </>             
    )

}

export default Mujeres;