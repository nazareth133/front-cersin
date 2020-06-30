import {Component, Input, OnInit} from '@angular/core';
import {ConteudoInterface} from "../../models/ui/conteudo-interface";

@Component({
  selector: '[app-link-box], app-link-box',
  templateUrl: './link-box.component.html',
  styleUrls: ['./link-box.component.css']
})
export class LinkBoxComponent implements OnInit {

  @Input() conteudo: ConteudoInterface;

  constructor() {
  }

  ngOnInit() {
  }

}
