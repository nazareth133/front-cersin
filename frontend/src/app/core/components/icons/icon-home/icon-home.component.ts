import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrls: ['./icon-home.component.css']
})
export class IconHomeComponent implements OnInit {

  @Input() size;

  constructor() { }

  ngOnInit() {
  }

}
