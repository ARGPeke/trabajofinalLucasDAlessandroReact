import React from 'react';
import bannerHombre from "../assets/images/banner-ropa1.png"
import bannerMujer from "../assets/images/banner-ropa2.webp"
import bannerChicos from "../assets/images/banner-ropa3.webp"
import { Link } from 'react-router-dom';

function Banner (){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col text-center">
                    <Link to={'/hombres'}>
                    <img src={bannerHombre} alt="Seccion Hombres" className="img-fluid" style={{ cursor: 'pointer' }}/>
                    </Link>
                    <div style={{top:"122.2%",  background:"rgba(0, 0, 0, 0.75)", padding:"10px", color:"white", fontSize:"28px", fontWeight:"bold"}}>Hombre</div>
                </div>
                <div className="col text-center">
                    <Link to={'/mujeres'}>
                    <img src={bannerMujer} alt="Banner Mujer" className="img-fluid" style={{ cursor: 'pointer' }}/>
                    </Link>
                    <div style={{top:"122.2%",  background:"rgba(0, 0, 0, 0.75)", padding:"10px", color:"white", fontSize:"28px", fontWeight:"bold"}}>Mujer</div>
                </div>
                <div className="col text-center">
                    <Link to={"/error404"}>
                    <img src={bannerChicos} alt="Banner Chicos" className="img-fluid"  style={{ cursor: 'pointer' }}/></Link>
                    <div style={{top:"122.2%",  background:"rgba(0, 0, 0, 0.75)", padding:"10px", color:"white", fontSize:"28px", fontWeight:"bold"}}>Niños</div>
                </div>
            </div>
            </div>
    );
}

export default Banner;