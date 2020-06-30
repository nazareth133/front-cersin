import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CpfService {

  constructor() {
  }

  // código de validação de CPF oriundo de:
  // http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
  public static isValido(strCPF: string) {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000")
      return false;
    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11))
      Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10), 10))
      return false;
    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11))
      Resto = 0;
    return Resto == parseInt(strCPF.substring(10, 11), 10);

  }


}

export function validadorCpf(control: FormControl) {
  const cpf = control.value;
  let mensagem = "";
  if (cpf.length != 11) {
    let faltaSobra = "Faltam ";
    if (cpf.length > 11) faltaSobra = "Estão sobrando ";
    mensagem = faltaSobra + Math.abs(cpf.length - 11) + " digitos.";
  } else if (!CpfService.isValido(cpf))
    mensagem = "Dígito verificador inválido.";
  else
    return null;
  return {
    digitoVerificador: 'invalido',
    numeroDeCaracteres: cpf.length,
    mensagem
  };
}
