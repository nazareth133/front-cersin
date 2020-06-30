import {TabelaDeDominioInterface} from './tabela-de-dominio-interface';

export interface UsuarioLoginUnicoInterface {
    id?: string;
    sub: string;
    email_verified: boolean;
    profile: string;
    name: string;
    phone_number_verified: boolean;
    phone_number: string;
    picture: string;
    email: string;
    roles?: TabelaDeDominioInterface[]
}
