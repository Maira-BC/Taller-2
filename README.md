# Sistema de atención y gestión de turnos

Proyecto realizado para el Taller 2 de Desarrollo Web y Móvil.
El proyecto consiste en un sistema que permite simular la gestión de turnos de atención en distintas sucursales. Este taller corresponde a la continuación del sistema realizado anteriormente, adaptándose a React y TypeScript.

## Integrantes

- Constanza Rodríguez Olavarría
- Maira Brante Collao

## Problemática

En lugares donde se atiende a varias personas puede ser difícil mantener un orden y saber qué persona debe ser atendida después. Este proyecto busca facilitar la organización de los turnos, permitiendo que los usuarios obtengan un número de atención y que los encargados puedan gestionar los turnos que se encuentran en espera y atendidos.

## Usuarios objetivos

Está dirigido a personas que necesiten solicitar un turno de atención y para quienes se encarguen de gestionar los turnos y módulos de atención de una sucursal.

## Funcionalidades

- Selección de una sucursal
- Ingreso con o sin RUT
- Selección del tipo de atención
- Generación de un número de turno
- Visualización de los turnos en espera
- Asignación de turnos a módulos de atención disponibles
- Finalización de los turnos atendidos
- Visualización de la cantidad de turnos en espera y atendidos
- Historial de los turnos atendidos

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- React Router
- Bootstrap
- CSS

## Estructura del proyecto

La carpeta `src` se encuentra organizada de la siguiente manera:

- `assets`: contiene las imágenes utilizadas en la aplicación
- `components`: contiene los componentes reutilizables como el Header
- `data`: contiene los datos y tipos utilizados para los turnos
- `pages`: contiene las páginas de la aplicaión
- `styles`: contiene los estilos CSS del proyecto

Además, `App.tsx` contiene las rutas y los datos que necesitan compartir las páginas, mientras que `main.tsx` se encarga de iniciar la aplicación.

## Ejecución del proyecto

Para ejecutar el proyecto pimero se deben instalar las dependecias:

```bash
npm install
```

Luego se inicia el proyecto:

```bash
npm run dev
```

## API pública utilizada

(PENDIENTE)

## Uso de Inteligencia Artificial

### Herramienta

ChatGPT

### Propósito

Se utilizó como apoyo cuando alguna parte del código no funcionaba como se esperaba y no se encontraba el problema.

### Ejemplo de consulta

"No pasa nada al presionar el botón"

### ResultadO

Se revisó el código relacionado con la funcionalidad para buscar posibles causas del problema.

### Modificación humana

Se revisaron las posibles soluciones y se comprobó el propio código antes de realizar cambios.

### Aprendizaje

Cuando algo no funciona es mejor revisar primero el código y los cambios realizados paso a paso porque a veces el problema puede ser algo mucho más simple de lo que parece.

## Limitaciones conocidas

- Los datos generados durante el uso de la aplicación se mantienen temporalmente por lo que al recargar la página los turnos y la sucursal seleccionada se reinician
- El ingreso mediante RUT corresponde a una simulación. El sistema realiza una validación básica para permitir el ingreso pero el RUT no se almacena ni se utiliza para identificar al usuario o asociarlo a su turno generado