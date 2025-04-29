export interface VehicleResponse {
    idResultado: number;
    uuid:string,
    vehiculo: Vehicle;
}

export interface Vehicle {
    placa: string;
    anio: number;
    valorComercial: number;
    chasis: string;
    motor: string;
    version: Version;
    uso: Uso;
    categoria: Categoria;
    zonaCirculacion: string;
    tipoTimon: number;
    color: string;
}

export interface Version {
    idVersion: number;
    descripcion: string;
    nroAsientos: number;
    tonMetricas: number;
    modelo: Modelo;
    clase: Clase;
    tipoVersion: number;
}

export interface Modelo {
    idModelo: string;
    descripcion: string;
    marca: Marca;
}

export interface Marca {
    idMarca: string;
    descripcion: string;
    procedencia: Procedencia;
}

export interface Procedencia {
    idProcedencia: number;
    descripcion: string;
}

export interface Clase {
    idClase: number;
    descripcion: string;
}

export interface Uso {
    idUso: number;
    descripcion: string | null;
}

export interface Categoria {
    idCategoria: number;
    descripcion: string | null;
}
