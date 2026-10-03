import Header from '../components/Header'

type IngresoProps = {
  sucursal: string
}

function Ingreso({ sucursal }: IngresoProps) {
  return (
    <>
      <Header sucursal={sucursal} />
      <main>
        <h2>Ingreso</h2>
      </main>
    </>
  )
}

export default Ingreso