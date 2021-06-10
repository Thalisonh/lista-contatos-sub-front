import { Telefone } from "./telefone"
import { Endereco } from "./endereco"

export type Contato = {
    id: number,
    nome: string,
    endereco: Array<Endereco>,
    telefone: Array<Telefone>
}

export type ContatoPage = {
    content?: Contato[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size?: number;
    number: number;
    numberOfElements?: number;
    empty?: boolean;
}