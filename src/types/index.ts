export type Hotel = {
    id: number;
    nome: number;
    cnpj: number;
    pais: string;
    estado: string;
    cidade: string;
}

export type HotelForm = {
    nome: number;
    cnpj: number;
    pais: string;
    estado: string;
    cidade: string;
}



export type Hospede = {
    id: number;
    nome: string;
    sobrenome: string;
}

export type ReservaHospede = {
    id: number;
    numeroreserva: number;
    apartamento: number;
    dataCheckIn: string;
    dataCheckOut: string;
    status: number;
    hospedes: Hospede[];
    hotel: Hotel;
}


export type CreateReservaHospede = {
    idhotel: number;
    numeroreserva: number;
    apartamento: number;
    datacheckin: Date;
    datacheckout: Date;
    status: number;
    hospedes: Hospede[];
}

