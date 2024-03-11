import { NavLink } from "react-router-dom";

export default function About() {
    return (
       <section className="section-about z-20 relative bg-[color:var(--color-1)] text-black w-full py-32">
        <div className="flex flex-col items-center justify-center about-flexible pr-16 gap-y-16">
            <div className="about-container flex flex-row items-center flex-wrap flex-auto mb-8 w-full justify-start gap-x-32 pl-20">
                <h3 className="mb-16 text-5xl font-bold review-title">Acerca<br className="hide-small"/> de Nosotros</h3>
                <div className="flex flex-col justify-center items-start max-w-2xl">
                    <p className="text-md">Ocson es una empresa dedicada al sector de e-commerce. Nuestro objetivo es ayudar a los emprendedores a vender sus productos en Amazon y otras plataformas de e-commerce, brindando asesoría y acompañamiento en todo el proceso.</p>
                    <NavLink to={'/cursos'} className="inline-block mt-4 px-12 py-4 bg-[color:var(--color-3)] text-white rounded-md">
                        Descubre
                    </NavLink>
                </div>
            </div>
           <div className="about-img-container self-start mr-8">
            <img className="about-img" src="/about-1.jpg" alt="" />
           </div>
        </div>
       </section>
    )
  }
  