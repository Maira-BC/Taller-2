import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" />
            <h1>Sistema de atención y gestión de turnos</h1>
        </header>
    )
}

export default Header