import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Sucursales from "./pages/Sucursales"
import Ingreso from "./pages/Ingreso"

function App() {
  const [sucursal, setSucursal] = useState('')
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sucursales" element={<Sucursales setSucursal={setSucursal} />} />
      <Route path="/ingreso" element={<Ingreso />} />
    </Routes>
  )
}

export default App