import { Player } from '@lottiefiles/react-lottie-player';
import AionData from '../assets/icons8-menu.json'
import { useRef } from 'react';
import { NavLink } from "react-router-dom";

import SvgIcon from '@mui/material/SvgIcon';
export default function Navbar() {
    const playerRef = useRef(null);
    function addEvent(){
      document.getElementById('lottie').addEventListener('click', e => {
        if(playerRef.current.state.instance.isPaused == true){
          playerRef.current.play();
          document.querySelector('.navWrapper').classList.toggle('show');
          document.body.classList.toggle('no-scroll');
          document.querySelector('.logoContainer').classList.toggle('no-title')
        }
      })
    }
    return (
       <header className="block z-10 mb-52 header">
        <div className="navWrapper w-full flex flex-row justify-around items-center items-center p-5">
          <div className="logoContainer flex-1 text-3xl lg:text-2xl font-bold text-center flex flex-row justify-start justify-center items-center">
            <p className='cursor-pointer'>NOVAFY</p>
          </div>
          <nav className="flex-1 text-md font-light ml-1 ml-12 desktop-nav">
            <ul className="flex flex-row justify-center">
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/#">Inicio</NavLink></li>
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/cursos">Cursos</NavLink></li>
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/contact">Contacto</NavLink></li>
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/tienda">Tienda</NavLink></li>
            </ul>
          </nav>
          <div className="self-start flex-1 text-xl font-thin hidden mobile-nav flex justify-end">
            <Player speed={3} onEvent={event => {
            if (event === 'load'){
              addEvent(); 
            }
            if (event == 'frame' && playerRef.current.state.instance.isPaused !== true){
              if(playerRef.current.state.seeker >= 65 && playerRef.current.state.seeker <= 70){
                playerRef.current.pause();
                playerRef.current.setSeeker(71);
              }
            }
          }} src={AionData} ref={playerRef}  style={{ height: '45px', width: '45px' }} className='z-10 relative'>
          </Player>
            <ul id='bgmenu' className="flex text-3xl font-medium flex-col absolute top-0 right-0 bg-navbur bg-opacity-100 pt-32 pl-10 md:pl-20 w-full h-100 justify-start items-start">
              <li className='py-6 cursor-pointer'><NavLink to="/#">Inicio</NavLink></li>
              <li className='py-6 cursor-pointer'><NavLink to="/cursos">Cursos</NavLink></li>
              <li className='py-6 cursor-pointer'><NavLink to="/contact">Contacto</NavLink></li>
              <li className='py-6 cursor-pointer'><NavLink to="/tienda">Tienda</NavLink></li>
            </ul>
          </div>
          <div className="contactContainer grow text-md text-center w-min flex justify-center nav-cta">
            <div className="content flex justify-center items-center w-fit rounded-md flex flex-row justify-center items-center">
              <a className='pr-2 font-medium'>
                <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </SvgIcon>
              </a>
              (0)
            </div>
          </div>
        </div>
        <div className='bg-white py-1'>
          <p className='text-center font-light text-sm'>Sitio en construcciòn, no dude en reportar cualquier error.</p>
        </div>
      </header>
    )
  }
  