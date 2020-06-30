import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: '[app-voltar-topo], app-voltar-topo',
  templateUrl: './voltar-topo.component.html',
  styleUrls: ['./voltar-topo.component.css']
})
export class VoltarTopoComponent implements OnInit {

  constructor() { }
  oculto = true;

  ngOnInit() {
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  scrollFunction() {
    this.oculto = !(document.body.scrollTop > 30 || document.documentElement.scrollTop > 20);
  }

  voltarTopo() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
