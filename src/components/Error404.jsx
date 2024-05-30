import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container-fluid mt-5 p-5">
            <div className="row">
                <div className="col text-center">   
                    <h1>⚠️</h1>
                    <h2 className="display-2">Lo sentimos, no tenemos un resultado para tu búsqueda</h2>
                    <p className="display-5">Podés probar escribiendo de otra forma, usando otra palabra clave, navegar por nuestras categorías o volver a la página de inicio para ver nuestras ofertas.</p>
                    <button type="button" className="btn btn-primary " ><Link to={'/'} className=" text-decoration-none text-white p-2"> Volver al Inicio</Link></button>                </div>
            </div>
        </div>
    )
}

export default Error404;