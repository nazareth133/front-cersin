import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from "../../../core/services/negocio/menu.service";
import {MenuItemInterface} from "../../../core/models/ui/menu-item-interface";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit , OnDestroy {

  menuItems: MenuItemInterface[];

  constructor(
    private menuService: MenuService,
     ) {
    this.menuItems = this.menuService.getItens();
  }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    
  }

 
}
