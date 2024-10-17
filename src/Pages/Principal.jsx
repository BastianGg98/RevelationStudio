import React from 'react'
import '../assets/css/Stylesindex.css'
import img1 from '../assets/Imagenes/Logo.png'
import img2 from '../assets/Imagenes/Boda_V.jpg'
import img3 from '../assets/Imagenes/Quinces.jpg'
import img4 from '../assets/Imagenes/Bautizo.jpg'
import img5 from '../assets/Imagenes/Familiar.jpg'
import img6 from '../assets/Imagenes/Primera Comunion.jpg'
import img7 from '../assets/Imagenes/Cumpleaños.jpg'
import img8 from '../assets/Imagenes/whatsapp.png'
import img9 from '../assets/Imagenes/instagram.png'
import img10 from '../assets/Imagenes/facebook.png'

const Princpal = () => {
    return (
        <div>

            <header>
                <div className="logo">
                    <img src={img1} alt="Logo de la marca" />

                </div>
                <h1>Revelaxion Studio</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                    </ul>

                </nav>
                <div className="iniciose">

                    <label for="Usuario"></label>
                    <input type="email" placeholder="Correo" required />
                    <label for="Contraseña"></label>
                    <input type=" text" placeholder="Contraseña" required />
                    <button>Ingresar</button>
                </div>
                <a href="/AgendaCita.html" className="btn"><button>Mi cita</button></a>
            </header>
            <div className="Fotos1">
                <section className="SectionImagenes">
                    <a href="/Paquetes/Bodas.html"><img src={img2} alt="Bodas" /></a>
                    <a href="/Paquetes/Quinces.html"><img src={img3} alt="Quinces" /></a>
                    <a href="/Paquetes/Bautizos.html"><img src={img4} alt="Bautizos" /></a>
                    <a href="/Paquetes/Familias.html"><img src={img5} alt="Familias" /></a>
                    <a href="/Paquetes/PrimeraComunion.html"><img src={img6} alt="Primera Comunion" /></a>
                    <a href="/Paquetes/Cumpleaños.html"><img src={img7} alt="Cumpleaños" /></a>
                </section>
            </div>
            <footer>
                <div className="redes">
                    <a href="https://api.whatsapp.com/send?phone=573106388899&text=%F0%9F%99%82Hola%2C%20para%20agendar%20una%20cita!"
                        id="logowhatsapp"><img src={img8} alt="WhatsApp"/></a>
                    <a href="https://www.instagram.com/revelaxion_studio/" id="logoInstagram"><img src={img9}
                        alt="" /></a>
                    <a href="https://www.instagram.com/revelaxion_studio/"> <img src={img10} alt=""
                        id="logoFace"/></a>
                </div>
        
    </footer >
    <div className="direccion">
        <p>Todos los derechos Reservados</p>
        <p>Carrea 68 # 97-44</p>
    </div>



    </div>
  )
}

export default Princpal
