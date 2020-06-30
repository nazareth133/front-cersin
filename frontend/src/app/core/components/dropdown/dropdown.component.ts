import {Component, Input, OnInit} from '@angular/core';
import {MenuItemInterface} from "../../models/ui/menu-item-interface";

@Component({
  selector: '[app-dropdown]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() titulo: string;
  @Input() menuItems: MenuItemInterface[];

  open: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.open = !this.open;
  }

}
