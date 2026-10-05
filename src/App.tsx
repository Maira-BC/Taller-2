import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Sucursales from "./pages/Sucursales"
import Ingreso from "./pages/Ingreso"
import Turno from "./pages/Turno"
import Rut from "./pages/Rut"
import type { Turno as TurnoData } from "./data/turnos"

function App() {
  const [sucursal, setSucursal] = useState('')
  const [turnos, setTurnos] = useState<TurnoData[]>([])
  const agregarTurno = (nuevoTurno: TurnoData) => {
    setTurnos([...turnos, nuevoTurno])
  }
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sucursales" element={<Sucursales setSucursal={setSucursal} />} />
      <Route path="/ingreso" element={<Ingreso sucursal={sucursal} />} />
      <Route path="/turno" element={<Turno sucursal={sucursal} cantidadTurnos={turnos.length} agregarTurno={agregarTurno} />} />
      <Route path="/rut" element={<Rut sucursal={sucursal} />} />
    </Routes>
  )
}

export default App