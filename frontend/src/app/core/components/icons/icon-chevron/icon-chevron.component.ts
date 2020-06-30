import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-chevron',
  templateUrl: './icon-chevron.component.html',
  styleUrls: ['./icon-chevron.component.css']
})
export class IconChevronComponent implements OnInit {

  @Input() size;
  constructor() { }

  ngOnInit() {
  }

}
