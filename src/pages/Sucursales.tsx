import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

type SucursalesProps = {
  setSucursal: (sucursal: string) => void
}

function Sucursales({ setSucursal }: SucursalesProps) {
    const navigate = useNavigate()
    const seleccionarSucursal = (nombre: string) => {
        setSucursal(nombre)
        navigate('/ingreso')
    }

  return (
    <>
      <Header />
      <main className="sucursales">
        <button className="boton-sucursal" onClick={() => seleccionarSucursal('Sucursal 1')}>
            SUCURSAL
            <span>1</span>
        </button>
        <button className="boton-sucursal" onClick={() => seleccionarSucursal('Sucursal 2')}>
            SUCURSAL
            <span>2</span>
        </button>
        <button className="boton-sucursal" onClick={() => seleccionarSucursal('Sucursal 3')}>
            SUCURSAL
            <span>3</span>
        </button>
      </main>
    </>
  )
}

export default Sucursales