export default function Reviews() {
    return (
       <section className="mb-40 section-reviews text-white py-28">
          <div className="flex flex-col justify-center items-center mb-28">
            <div className="flex flex-row mb-21 review">
                <div className="max-w-2xl mt-20 mr-20 review-copy">
                    <h4 className="mb-4">
                        Opiniones de clientes
                    </h4>
                    <p className="text-4xl">
                    Novafy me ha ayudado a potenciar mis ventas en Amazon. Sus estrategias de posicionamiento son efectivas y fáciles de implementar.
                    </p>
                </div>
                <img className="review-screen" src="/reviews-1.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row mb-21 review">
                <img className="review-screen" src="/reviews-2.jpg" alt="" />
                <div className="max-w-2xl mt-20 ml-20 review-copy">
                    <h4 className="mb-4">
                        Testimonios
                    </h4>
                    <p className="text-4xl">
                    Gracias a Novafy, he logrado posicionar mis productos en Shopify y aumentar mis ventas de forma significativa.
                    </p>
                </div>
            </div>
        </div>
       </section>
    )
  }
  