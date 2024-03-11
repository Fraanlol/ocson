import { NavLink } from "react-router-dom";

export default function About() {
    return (
       <section className="mb-40 section-about">
        <div className="flex flex-row items-center justify-center about-flexible">
           <div className="mr-28 about-img-container">
            <img className="about-img" src="/about-1.jpg" alt="" />
           </div>
           <div>
            <div className="max-w-md about-container">
                <h3 className="mb-12 text-5xl font-bold">Acerca de Novafy</h3>
                <p className="font-light">En Novafy te brindamos los conocimientos para aprovechar al máximo las plataformas de e-commerce como Shopify y Amazon. Además, ofrecemos una tienda donde podrás adquirir nuestros productos</p>
                <NavLink to={'/cursos'} className="inline-block mt-4 px-12 py-4 border-black border">
                    Descubre
                </NavLink>
            </div>
           </div>
        </div>
       </section>
    )
  }
  