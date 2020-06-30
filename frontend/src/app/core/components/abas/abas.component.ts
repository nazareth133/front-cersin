import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren
} from '@angular/core';
import {AbaComponent} from '../aba/aba.component';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: '[app-abas], app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.css']
})
export class AbasComponent implements OnInit, AfterContentInit{

  @ContentChildren(AbaComponent) abas: QueryList<AbaComponent>;

  abaAtual = new BehaviorSubject(null);

  constructor(
    private detectorMudancas: ChangeDetectorRef
  ) { }


  ngOnInit() {
  }



  ngAfterContentInit(): void {
    this.detectorMudancas.detectChanges();
    this.abaAtual.subscribe(
      (ativa) => {
        for (const a of this.abas.toArray())
          a.ativa = ativa;
      }
    );
    this.abaAtual.next(this.abas.toArray()[0].nome);
  }

  defineAba(novaAtual) {
    this.abaAtual.next(novaAtual);
  }

}
