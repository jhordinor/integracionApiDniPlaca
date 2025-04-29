import { ListErrorCreateOrder } from "../listError.model";

export interface CreateOrdenReponse {
        cotizacion_Response : CotizaResponse
}
interface CotizaResponse{
        fechaExpiracion: string;
        idCotizacion: string;
        javascript: string;
        resultado: boolean;
        mensaje: string
        idResultado: number;
        errors : ListErrorCreateOrder[];
}