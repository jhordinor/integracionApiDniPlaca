export interface SoatVehicle {
    placa: string;
    nombre_compania: string;
    fecha_inicio: string;
    fecha_fin: string;
    estado: string;
    numeroPoliza: string;
    codigoSbsAseguradora: string;
    codigoUnicoPoliza: string;
  }
  
  export interface SoatVehicleResponse {
    data: SoatVehicle;
    status: number;
    message: string;
  }