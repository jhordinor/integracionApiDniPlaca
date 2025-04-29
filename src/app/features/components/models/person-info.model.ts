export interface PersonResponse {
    status:number;
    succes: boolean;
    message:string;
    data: PersonInfo
}

export interface PersonInfo{
    numero: string;
    nombres: string;
    apellido_paterno: string;
    apellido_materno: string;
    nombre_completo: string;
    departamento: string;
    provincia: string;
    distrito: string;
    direccion: string;
    direccion_completa: string;
    ubigeo_reniec: string;
    ubigeo_sunat: string;
    ubigeo: string[];
    fecha_nacimiento: string;
    sexo: string;
}
