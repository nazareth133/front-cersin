import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {ConteudoInterface} from "../../models/ui/conteudo-interface";

@Component({
  selector: '[app-cartao]',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css'],
})
export class CartaoComponent implements OnInit {

  @Input() conteudo: ConteudoInterface;
  @Input() tipo;


  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }


  @HostBinding('style.background')
  get background(): SafeStyle {
    let background = "";
    if (this.conteudo.fundo) {
      background = `#eee url('${this.conteudo.fundo}') no-repeat center center / cover `;
    }
    return this.sanitizer.bypassSecurityTrustStyle(background);
  }

}

