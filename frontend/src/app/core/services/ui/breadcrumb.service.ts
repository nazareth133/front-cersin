import { Injectable } from '@angular/core';
import {MenuItemInterface} from '../../models/ui/menu-item-interface';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  breadcrumb = new BehaviorSubject<MenuItemInterface[]>(null);

  breacrumbLevels: MenuItemInterface[][][] = [ [] ];
  breadRotulos = [];

  constructor( ) {
  }

  resetBreacrumb() {
    this.breadcrumb.next([]);
    this.breacrumbLevels = [];
    this.breadRotulos = [];
  }

  setBreadcrumb(caminho: MenuItemInterface[], level = 0, reset = false, chave = null) {
    if (reset) this.resetBreacrumb();
    caminho = caminho.filter( c => !this.breadRotulos.includes(c.titulo));
    let b = [];
    if (!this.breacrumbLevels[level]) this.breacrumbLevels[level] = [];
    this.breacrumbLevels[level].push(caminho);
    let descendo = 0;
    for (const lista of this.breacrumbLevels) {
      if (lista) {
        for (const crumbs of lista) {
          if (descendo >= level && chave)
            b = b.concat(crumbs.filter( c => c.chave == chave))
          else
            b = b.concat(crumbs);
        }
      }
      descendo += 1;
    }
    this.breadcrumb.next(b);
    for (const c of caminho)
      if (!this.breadRotulos.includes(c.titulo))
        this.breadRotulos.push(c.titulo);
  }

  getBreacrumb() {
    return this.breadcrumb;
  }


}
