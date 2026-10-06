import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { sucursales } from '../Services/Sucursales'
import { useEffect, useState } from 'react';
import useGeolocation from '../Services/APIgeolocalizacion';
import { obtenerComuna, type Comuna } from '../Services/APIopenmap';
import { sucursalMasCercana } from '../Services/Sucursales';


const SucursalesLista = sucursales;



type SucursalesProps = {
  setSucursal: (sucursal: string) => void
}

function SucursalCercana ({latitude, longitude}: {latitude: number, longitude: number}){
  const { sucursal, distancia } = sucursalMasCercana(latitude, longitude);
        return (
        <p>
            Sucursal más cercana: <strong>{sucursal.nombre}</strong> ({distancia.toFixed(1)} km)
        </p>
    );
}






function Sucursales({ setSucursal }: SucursalesProps) {
    const sucursales = SucursalesLista;
    const { location, error } = useGeolocation();
    const [comuna, setComuna] = useState<Comuna | null>(null);
    const [errorComuna, setErrorComuna] = useState<string | null>(null);

    useEffect(() => {
        const { latitude, longitude } = location;
        if (latitude === null || longitude === null) return;

        const controller = new AbortController();
        obtenerComuna(latitude, longitude, controller.signal)
            .then(setComuna)
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setErrorComuna('No se pudo obtener la comuna.');
                }
            });

        return () => controller.abort();
    }, [location]);
    const navigate = useNavigate()
    const seleccionarSucursal = (nombre: string) => {
        setSucursal(nombre)
        navigate('/ingreso')
    }

  return (
    <>
      <Header />
      <div>
        <div>
            {error && <p>Error: {error}</p>}
            {errorComuna && <p>Error: {errorComuna}</p>}
            {location.latitude !== null && location.longitude !== null && (
            <SucursalCercana latitude={location.latitude} longitude={location.longitude} />
            )}
        </div>
      </div>
      <main className="sucursales">
        {sucursales.map((sucursal) => (
          <button key={sucursal.id} className="boton-sucursal" onClick={() => seleccionarSucursal(sucursal.nombre)}>
            <div>Sucursal</div>
            {sucursal.nombre}
          </button>
        ))}
      </main>
      <div>
                        {                     }
      </div>
    </>
  )
}

export default Sucursales