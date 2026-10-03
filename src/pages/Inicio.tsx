import { useNavigate } from "react-router-dom"
import Header from "../components/Header";
import usuario from '../assets/usuario.png'

function Inicio() {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <main className="inicio">
                <img className="icono-usuario" src={usuario} alt="Icono de usuario" />
                <h2>BIENVENIDO</h2>
                <button className="boton-continuar" onClick={() => navigate('/sucursales')}>
                    →
                </button>
            </main>
        </>
    )
}

export default Inicio