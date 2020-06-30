import {MensagemTipo} from '../enums/tipo-mensagem.enum';

export interface MensagemInterface {
  tipo: MensagemTipo;
  titulo?: string;
  descricao?: string;
}
