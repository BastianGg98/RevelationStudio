import React from 'react'
import '../assets/css/Stylesindex.css'
import img1 from '../assets/Imagenes/Logo.png'

const AgendaCita = () => {
    return (
        <div>

            <header>
                <div className="logo">
                    <img src={img1} alt="Logo de la marca" />

                </div>
                <h1>Revelaxion Studio</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="index.html">Home</a></li>
                    </ul>

                </nav>
            </header>
            <div className="AgenCita">
                <div className="titulocita">
                    <h2>Agendar cita</h2>
                </div>
                <div className="calendario">
                    <form id="appointment-form">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" />
                        <label for="date">Fecha:</label>
                        <input type="date" id="date" name="date" />
                        <label for="time">Hora:</label>
                        <input type="time" id="time" name="time" />
                        <input type="submit" id="button" value="Enviar"/>
                    </form>
                            <div id="appointments"></div>

                        </div>
                </div>
            </div>

    )
}

export default AgendaCita
