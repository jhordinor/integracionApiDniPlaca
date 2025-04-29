import { ListError } from "../listError.model";

export interface PriceQuoteReponse {
    idResultado: number;
    descripcion: string;
    listaMensajeError: ListError[];
    montoTarifa: number;
    token: string;
  }

 