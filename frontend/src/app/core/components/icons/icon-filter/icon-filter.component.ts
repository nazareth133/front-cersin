import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-filter',
  templateUrl: './icon-filter.component.html',
  styleUrls: ['./icon-filter.component.css']
})
export class IconFilterComponent implements OnInit {

  @Input() size;

  constructor() {
  }

  ngOnInit() {
  }

}
