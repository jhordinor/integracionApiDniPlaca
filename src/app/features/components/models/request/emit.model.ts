export interface EmitRequest {
    token: string;
    chasis: string;
    serieMotor: string;
    idCategoria: string;
    nombre: string;
    tipoDocumento: number;
    numeroDoc: string;
    correo: string;
    idDepartamento: string;
    idProvincia: string;
    idDistrito: string;
    nombreVia: string;
    celular: string;
    tipoPersona: number;
    uuid: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string
}