import { NavLink } from "react-router-dom";

export default function Hero() {
    return (
       <section className="mb-56">
        <div className="flex flex-row items-center justify-center section-hero">
            <div className="left-container">
                <img className="left-img" src="/hero-2.jpg" alt="" />
            </div>
            <div className="hero-mainContent">
                <div className="font-bold text-center leading-snug">
                    <h1><span className="mobile-color">Maximiza</span> tu e‑commerce</h1> 
                </div>
                <div className=" m-autox">
                    <p className="text-center">Aprende a posicionar y vender tus productos <br/>en las mejores plataformas de comercio</p>
                </div>
                <div className="m-autox w-fit">
                    <NavLink to="/contact" className="hero-cta">Comienza</NavLink>
                </div>
            </div>
            <div>
                <img className="right-img" src="/hero-1.png" alt="" />
            </div>
        </div>
       </section>
    )
  }
  