export interface EmitResponse {
    idResultado: number;
    descripcion: string;
    datosPoliza: DatosPoliza;
    ListaMensajeError?: { Descripcion: string }[];
}

export interface DatosPoliza {
    idTransaccion: string;
    idPoliza: string;
    idCertificado: string;
    listaMensajeError: ListaMensajeError[];
}

export interface ListaMensajeError {
    idMensaje: number;
    descripcion: string;
}
