export interface CotizacionRequest {
    fechaInicioVigencia: string; 
    tipoPersona: number;
    placa: string;
    uso: string;
    clase: string;
    marca: string;
    modelo: string;
    anio: number;
    version: string;
    ubigeoCirculacion: string;
    numeroAsientos: number;
    tipoDocumento: number;
    nroDocumento: string;
    uuid: string;
}