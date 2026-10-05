import { useEffect, useState } from 'react';
import useGeolocation from '../Services/API-geolocation';
import { obtenerComuna, type Comuna } from '../Services/API-OpenstreetMap';
import { sucursalMasCercana } from '../Services/Sucursales';

// flujo ingreso -> Acordeon con lista de sucursales (por default la + cercana) -> rellenar datos -> confirmar.
// 



function BuscarSucursal({ latitude, longitude }: { latitude: number; longitude: number }) {
    const { sucursal, distancia } = sucursalMasCercana(latitude, longitude);

    return (
        <p>
            Sucursal más cercana: <strong>{sucursal.nombre}</strong> ({distancia.toFixed(1)} km)
        </p>
    );
}



function Login() {
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

    return (
        <div>
            <h1>Seleccionar sucursal /placeholder-integrar API-mostrar sucursal mas cercana/</h1>
            {error && <p>Error: {error}</p>}
            {errorComuna && <p>Error: {errorComuna}</p>}
            {location.latitude !== null && location.longitude !== null && (
                    <BuscarSucursal latitude={location.latitude} longitude={location.longitude} />
            )}
        </div>
    );
}

export default Login