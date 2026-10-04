import Header from '../components/Header'

type TurnoProps = {
  sucursal: string
}

function Turno({ sucursal }: TurnoProps) {
  return (
    <>
      <Header sucursal={sucursal} />
      <h2>Obtener turno</h2>
    </>
  )
}

export default Turno