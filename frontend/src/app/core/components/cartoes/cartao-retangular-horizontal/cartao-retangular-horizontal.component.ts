import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ConteudoInterface} from '../../../models/ui/conteudo-interface';
import {Router} from '@angular/router';

@Component({
  selector: '[app-cartao-retangular-horizontal], app-cartao-retangular-horizontal ',
  templateUrl: './cartao-retangular-horizontal.component.html',
  styleUrls: ['./cartao-retangular-horizontal.component.css']
})
export class CartaoRetangularHorizontalComponent implements OnInit {

  @Input() conteudo: ConteudoInterface;
  @Input() tipo;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  @HostListener("click") onClick() {
    if (this.conteudo.href) {
      this.router.navigateByUrl(this.conteudo.href);
    }
  }

}
