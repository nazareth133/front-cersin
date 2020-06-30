import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItemInterface } from '../../models/ui/menu-item-interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuIten$: MenuItemInterface[];
  public mainMenuStatus$: BehaviorSubject<boolean>;

  constructor() {
    this.mainMenuStatus$ = new BehaviorSubject<boolean>(false);
    this.menuIten$ = [
      {
        titulo: 'Extrato',
        url: 'extrato',
        descricao: 'Extrato da Contribuição Sindical',
      },
      {
        titulo: 'Upload',
        url: 'upload',
        descricao: 'Upload do arquivo',
      },
      //ADD NOVOS MENUS AQUI, CASO NAO TIVER SERVICO
    ];
  }

  getItens(itemPai = null) {
    if (itemPai === null) {
      return this.menuIten$;
    } else {
      return itemPai.items;
    }
  }

  toggleMainMenu() {}
}
