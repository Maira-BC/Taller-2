import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Sucursales from "./pages/Sucursales"
import Ingreso from "./pages/Ingreso"
import Login from "./pages/Login"
function App() {
  const [sucursal, setSucursal] = useState('')
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sucursales" element={<Sucursales setSucursal={setSucursal} />} />
      <Route path="/ingreso" element={<Ingreso />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App