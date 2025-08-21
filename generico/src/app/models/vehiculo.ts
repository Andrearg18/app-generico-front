export interface Vehiculo {
    code: string,
    marca?: string,
    modelo?: string,
    modeloTipo?: string,
    cv?: number,
    km?: number,
    anio?: number,
    color?: string,
    puertas?: number,
    tamano?: string,
    peso?: number,
    combustible?: string,
    motor?: Motor,
    tituloMotor?: string,
    titulo: string,
    descripcion: string,
    precio?: number,
    principalFoto?: string,
    fotos?: string[],
}

export interface Motor {
    code?: string,
    titulo?: string,
    marca?: string,
    modelo?: string,
    cilindrada?: number,
    combustible?: string,
    tamano?: string,
    peso?: number
}

// export interface CombustibleType {
//     code?: string,
//     nombre?: string,
//     tipo?: string,
// }

// export interface VehiculoType {
//     code?: string,
//     nombre?: string,
//     tipo?: string,
// }
