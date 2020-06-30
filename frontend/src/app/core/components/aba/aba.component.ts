import {Component, ContentChild, ContentChildren, ElementRef, HostListener, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {OuterSubscriber} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.css']
})
export class AbaComponent implements OnInit {

  @Input() nome;
  @Input() ativa;
  constructor() { }


  ngOnInit() {
  }

}
