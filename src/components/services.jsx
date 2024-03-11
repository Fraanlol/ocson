export default function Services() {
    return (
       <section className="mb-16">
        <div className="flex items-center justify-center flex-col">
           <div className="mb-8 text-5xl font-bold leading-normal">
            <h3 className="text-center">Nuestros servicios</h3>
           </div>
           <div className="flex flex-row services-container">
            <div>
                <img className="w-80 h-72" src="/services-1.jpg" alt="" />
                <p className="text-2xl mt-4 mb-4">Asesoramiento</p>
                <p className="max-w-xs">Te ofrecemos asesoramiento para elegir y posicionar tus productos en las mejores plataformas de comercio. También te enseñamos estrategias de venta efectivas</p>
            </div>
            <div className="mx-16">
                <img className="w-80 h-72" src="/services-2.jpg" alt="" />
                <p className="text-2xl mt-4 mb-4">Posicionamiento</p>
                <p className="max-w-xs">Te brindamos las herramientas necesarias para posicionar tus productos en las principales plataformas de comercio</p>
            </div>
            <div>
                <img className="w-80 h-72" src="/services-3.jpg" alt="" />
                <p className="text-2xl mt-4 mb-4">Ventas</p>
                <p className="max-w-xs">Te enseñamos estrategias de venta efectivas para maximizar tus ganancias</p>
            </div>
           </div>
        </div>
       </section>
    )
  }
  