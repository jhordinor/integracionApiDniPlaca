export interface DatosPropietarioRequest
{
    tipoDocumento:string;
    nroDocumento: string;
    nombre?:string;
    apellidoPaterno?:string;
    apellidoMaterno?:string;
    celular?:string;
    email?:string;
    idTipoPersona?:number;
    IdDepartamento?: number;
    IdProvincia?: number;
    IdDistrito?: number;
    IdTipoVia?:number;
    direccion?: string;
}