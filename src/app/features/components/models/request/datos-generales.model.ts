export interface DatosGeneralesRequest
{
    IdTransaccion?: string;
    Token?: string;
    Monto?:number,
    uuidHistory?:string,
    fechaInicio?:string
    tipoSoat?: string;
}