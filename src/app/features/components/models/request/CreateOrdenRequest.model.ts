export interface CreateOrdenRequest {
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    idTipoDocumento?: number; 
    numeroDocumento?: string;
    celular?: string;
    email?: string;
    idTipoPersona?: number;
    monto?: number;
    placaAuto?: string;
    uuid?: string;
}