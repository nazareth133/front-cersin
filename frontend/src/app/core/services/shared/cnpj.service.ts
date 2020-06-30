import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  constructor() { }

  private static moduloPositivo(x, n): number {
    return ( x % n + n ) % n;
  }

  private static somaProdutosCNPJ(trechoCNPJ: string) {
    let contador = -1;
    let resultado = 0;
    for (let i = trechoCNPJ.length - 1; i >= 0; i--) {
      const digitoAtual = +trechoCNPJ[i];
      const multiplicador = CnpjService.moduloPositivo(contador, 8) + 2;
      resultado += digitoAtual * multiplicador;
      contador--;
    }
    return resultado;
  }

  private static calculaDigito(trechoCNPJ) {
    return CnpjService.somaProdutosCNPJ(trechoCNPJ) % 11;
  }

  validaDigitoCNPJ(cnpj: string) {
    const principal = cnpj.slice(0, -2);
    const dv = cnpj.slice(-2);
    const digitoCalculado = this.constroiDigito(principal);
    return digitoCalculado == dv;
  }

  private constroiDigito(principalCNPJ: string) {
    principalCNPJ = principalCNPJ.replace( /[-.\/]/g, '');
    const dv1 = CnpjService.calculaDigito(principalCNPJ);
    const dv2 = CnpjService.calculaDigito(principalCNPJ + dv1);
    return "".concat(dv1.toString(10), dv2.toString(10));
  }

}

export function validadorCnpj(control: FormControl) {
  const service = new CnpjService();
  if (!control.value || service.validaDigitoCNPJ(control.value))
      return null;
  return {
    mensagem: "digito verificador inválido"
  };
}
