import {Injectable} from '@angular/core';
import {MensagemInterface} from '../../models/ui/mensagem-interface';
import {MensagemTipo} from '../../models/enums/tipo-mensagem.enum';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  fila: MensagemInterface[] = [];

  constructor() {
  }


  sucesso(titulo, descricao = "") {
    const mensagem = {
      tipo: MensagemTipo.sucesso,
      titulo, descricao
    };
    this.push(mensagem as MensagemInterface);
  }

  atencao(titulo: string, descricao = "") {
    const mensagem = {
      tipo: MensagemTipo.atencao,
      titulo, descricao
    };
    this.push(mensagem as MensagemInterface);
  }

  erro(titulo, descricao = "") {
    const mensagem = {
      tipo: MensagemTipo.erro,
      titulo, descricao
    };
    this.push(mensagem as MensagemInterface);
  }

  info(titulo, descricao = "") {
    const mensagem = {
      tipo: MensagemTipo.info,
      titulo, descricao
    };
    this.push(mensagem as MensagemInterface);
  }

  /**
   * Inclui uma mensagem na fila e agenda usa remoção.
   *
   * @param mensagem pode ser uma string (presume-se que seja uma mensagem informativa)
   * ou uma MensagemInterface, que contém um tipo, um título e uma descrição.
   */
  push(mensagem: MensagemInterface | string) {
    if (typeof mensagem == 'string')
      mensagem = { tipo: MensagemTipo.info, titulo: "", descricao: mensagem};
    this.fila.push(mensagem as MensagemInterface);
    setTimeout(() => this.remove.bind(this)(mensagem), 7000)
  }

  /**
   * Remove um item da fila.
   * @param mensagem
   */
  remove(mensagem: MensagemInterface | string) {
    if (typeof mensagem == 'string')
      mensagem = { tipo: MensagemTipo.info, titulo: "", descricao: mensagem};
    this.fila.splice(this.fila.indexOf(mensagem as MensagemInterface));
  }
}

