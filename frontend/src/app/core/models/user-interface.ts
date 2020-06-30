import {TabelaDeDominioInterface} from './tabela-de-dominio-interface';

export interface UserInterface {
  id?;
  usuario;
  nome;
  email;
  cpf;
  telefone?;
  papeis?: TabelaDeDominioInterface[];
  picture?;
}
