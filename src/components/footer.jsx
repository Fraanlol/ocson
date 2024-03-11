export default function Footer() {
    return (
       <section className="mb-20 footer pt-8 z-20 absolute bg-[color:var(--color-light)] w-full pb-16">
            <div className="flex justify-center items-center footer my-16">
                <div className="mr-36px">
                    <p className="text-2xl mb-4 font-bold">Recibe las ultimas novedades</p>
                    <div className="flex justify-center items-start flex-col">
                        <p>Email</p>
                        <input className="footer-contact" type="mail" name="" id="" placeholder="Dirección de correo" />
                        <button className="footer-cta" disabled>Enviar</button>
                    </div>
                </div>
                <div className=" mx-24">
                    <p className="text-2xl font-bold">Contactanos</p>
                    <p>rodmaucompany@gmail.com</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">Redes</p>
                    <p>Proximamente</p>
                </div>
            </div>
            <p class="text-center text-gray-500 text-xs">
                &copy;2023 Ocson LLC. All rights reserved.
            </p>
       </section>
    )
  }