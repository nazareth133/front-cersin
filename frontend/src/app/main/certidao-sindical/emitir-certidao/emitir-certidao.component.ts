import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-emitir-certidao',
  templateUrl: './emitir-certidao.component.html',
  styleUrls: ['./emitir-certidao.component.css']
})
export class EmitirCertidaoComponent implements OnInit {
  
  constructor() { }


  
  avaliacaoNegada: boolean = true;
  avaliacao: boolean;
  ngOnInit() {
    
  }

  onSubmit(form){
    console.log(form);
  }
  novaConsulta(){
    this.avaliacaoNegada = true;
  }
  validar(){
    this.avaliacaoNegada = false;
  }

  ativaAvaliacao(){
      this.avaliacao = true;
  }

  desativaAvaliacao(){
     this.avaliacao = false;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}

}
