import {Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  ultimasExecucoesPrevencaoDeEnchente = {};
  intervaloMinimoPadrao = 800;

  sortByAttribute(arr, attribute) {
    return arr.sort(
      (a, b) => {
        return a[attribute] > b[attribute] ? 1 : (b[attribute] > a[attribute] ? -1 : 0)
      }
    );
  }

  /**
   * Executa uma ação se a mesma ação não for executada novamente dentro do intervalo mínimo.
   * Caso a ação seja executada novamente, a primeira ação é desprezada e a contagem do tempo se inicia para a segunda ação.
   * @param acao a ação a ser executada (uma função).
   * @param intervaloMinimo o intervalo mínimo a ser respeitado antes de executar a ação.
   */
  previneEnchente(acao: () => void , intervaloMinimo = this.intervaloMinimoPadrao){
    intervaloMinimo = intervaloMinimo ? intervaloMinimo : this.intervaloMinimoPadrao;
    let agora = new Date().getTime();
    this.ultimasExecucoesPrevencaoDeEnchente[acao.name] = agora;
    setTimeout(
      () => {
        agora = new Date().getTime();
        if (this.ultimasExecucoesPrevencaoDeEnchente[acao.name] > agora - intervaloMinimo)
          return;
        acao();
      },
      intervaloMinimo + 1
    );
  }

  tryBlock(){
    return {
      try(f) {
        try {
            f();
        } catch (err) {
          console.error(err);
        }
        return this;
      }
    };
  }

  trySet(object) {
    return {
      object: object,
      set: function(path, value) {
        path = path.split('/');
        let target = object;
        for (let i = 0; i < path.length - 1; i++){
          target = target[path[i]];
        }
        target[path.length] = value;
        return this;
      }
    };
  }

}

export function validatorDeAcordo(control: FormControl) {
  const deAcordo = control.value;
  if (deAcordo) return null;
  return {
    deAcordo,
    mensagem: "É necessário concordar com os termos para prosseguir."
  };
}
