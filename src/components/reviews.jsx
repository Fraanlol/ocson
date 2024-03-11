export default function Reviews() {
    return (
       <section className="section-reviews text-white py-32 z-20 relative">
            <div className="flex justify-center items-center max-w-6xl mx-auto mb-16"> 
                <h4 className="mb-4 text-5xl font-bold review-title">
                    Opiniones de clientes
                </h4>
            </div>
            <div className="flex flex-row mx-auto gap-x-52 gap-y-16 justify-center items-center flex-wrap">
                <div className="flex flex-row justify-center items-start">
                    <img className="mr-16 img-review" src="./reviews-1.jpg" alt="" />
                    <p className="max-w-xs text-lg copy-review">Ocson me ha ayudado a aumentar mis ventas en Amazon de manera significativa.</p>
                </div>
                <div className="flex flex-row justify-center items-start">
                    <img className="mr-16 img-review" src="./reviews-2.jpg" alt="" />
                    <p className="max-w-xs text-lg copy-review">Gracias a Ocson, mi negocio en línea ha crecido de forma exponencial.</p>
                </div>
            </div>
       </section>
    )
  }
  