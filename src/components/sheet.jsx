import {Form} from 'react-router-dom'

export async function action() {
    const contact = 'Contacto guardado'
    console.log(contact);
    document.getElementById('formulario').reset()
    document.getElementById('success').classList.add('successMessage')
    document.getElementById('contactButton').disabled = true
    setTimeout(()=>{
        document.getElementById('success').classList.remove('successMessage')
        document.getElementById('contactButton').disabled = false
    },4000)
    return { contact };
  }
  
  export default function ContactSheet() {
    return (
        <section>
            <div className="block-background">
                <div className="hero-image block_background_image block_background_image_fixed">
                    <img src="./public.png" alt="" />
                </div>
                <div className="block_background_overlay block_background_image_fixed">

                </div>
            </div>
            <div id="success" className="z-20 relative bg-teal-100 border-t-4 invisible border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p className="font-bold">Thank you for sending your message</p>
                    <p className="text-sm">We will be in touch soon.</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-xl m-auto z-20 relative text-white pt-16">
                <p className="text-4xl font-bold mb-8 text-center">Contact us</p>
            <Form method="post" id='formulario' className="rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="username">
                        Name
                    </label>
                    <input className="required shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="name" placeholder="Your name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="mail">
                        Email
                    </label>
                    <input className="required shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="mail" type="mail" placeholder="Email Adress"/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="text">
                        Message
                    </label>
                    <input className=" required shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Enter your message"/>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-[color:var(--color-3)] hover:bg-[color:var(--color-2)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="contactButton" type="submit">
                        Send
                    </button>
                </div>
            </Form>
            </div>
        <div className=" w-full section-sheet bg-[color:var(--color-3)] py-16 z-20 relative">
        <div className="m-auto flex flex-col flex-auto justify-around items-start flex-wrap max-w-7xl py-12 bg-[color:var(--color-3)] text-white">
            <div className="mb-16 px-16">
                <p className="text-4xl mb-12">Location</p>
                <div className='flex flex-row justify-start items-start gap-x-16 gap-y-8 flex-wrap'>
                    <div>
                        <p className="text-xl font-bold">Address</p>
                        <p>1342 NM 333 STE C 5074</p>
                        <p>Tijeras, USA</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">Online attendance</p>
                        <p>Mon - Fri</p>
                        <p>10:00 - 19:00 (GMT-3)</p>
                    </div>
                </div>
            </div>
            <div className="google-map-code w-11/12 pl-16">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.605799273567!2d-106.267927!3d35.09158099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8718bc3db13e2a89%3A0x7907adf26b0dd949!2s1342%20NM-333%20c%205074%2C%20Tijeras%2C%20NM%2087059%2C%20USA!5e0!3m2!1sen!2sar!4v1709851972292!5m2!1sen!2sar" height="450">
                </iframe>
            </div>
        </div>
       </div>
       </section>
    )
  }
  