export interface Persona {
    id: number;
    rut: string;
    nombre: string;
    apellido: string;
    edad: number;
    telefono: string;
    correo: string;
}

export interface Atencion {
    nombre: Persona['nombre'];
    numeroTurno: string;
    estado: string;
    tipoAtencion: string;
}


export const persona1: Persona = {
    id: 1,
    rut: "12.345.678-9",
    nombre: "Camila",
    apellido: "Rojas",
    edad: 28,
    telefono: "+56 9 1234 5678",
    correo: "camila.rojas@correo.cl",
};

export const persona2: Persona = {
    id: 2,
    rut: "15.678.234-5",
    nombre: "Matías",
    apellido: "González",
    edad: 35,
    telefono: "+56 9 2345 6789",
    correo: "matias.gonzalez@correo.cl",
};

export const persona3: Persona = {
    id: 3,
    rut: "18.234.567-K",
    nombre: "Valentina",
    apellido: "Muñoz",
    edad: 22,
    telefono: "+56 9 3456 7890",
    correo: "valentina.munoz@correo.cl",
};

export const persona4: Persona = {
    id: 4,
    rut: "9.876.543-2",
    nombre: "Jorge",
    apellido: "Soto",
    edad: 61,
    telefono: "+56 9 4567 8901",
    correo: "jorge.soto@correo.cl",
};

export const persona5: Persona = {
    id: 5,
    rut: "20.123.456-7",
    nombre: "Fernanda",
    apellido: "Díaz",
    edad: 19,
    telefono: "+56 9 5678 9012",
    correo: "fernanda.diaz@correo.cl",
};

export const personas: Persona[] = [persona1, persona2, persona3, persona4, persona5];


