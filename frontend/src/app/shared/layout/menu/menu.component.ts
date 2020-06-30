import {Component, ElementRef, Host, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from "../../../core/services/negocio/menu.service";
import {MenuItemInterface} from "../../../core/models/ui/menu-item-interface";
import {Router} from '@angular/router';

/**
 * Implementa um menu de navegação.
 *
 * - O menu inclui todos os itens de menu.
 * - Itens de menu não são uma outra classe, mas uma interface
 * - Itens de menu são recuperados do serviço [[menu.service]]
 */
@Component({
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  @Input() context: string;
  menuItems: MenuItemInterface[];
  menuServiceSubscription;
  open: boolean;
  left: boolean;


  constructor(
    private menuService: MenuService,
    private eRef: ElementRef,
    private router: Router,
    public el: ElementRef
  ) {
  }

  @HostListener('window:scroll' )
  checkScroll() {
    this.left = this.el.nativeElement.offsetTop < window.pageYOffset;
  }

  ngOnInit() {
    this.menuServiceSubscription = this.menuService.mainMenuStatus$.subscribe(
      (status) => this.open = status
    );
    this.open = false;
    this.menuItems = this.menuService.getItens();
  }

  ngOnDestroy() {
    this.menuServiceSubscription.unsubscribe();
  }

  public toggleOpen(event) {
    this.menuService.mainMenuStatus$.next(!this.menuService.mainMenuStatus$.getValue());
    // pára a propagação para evitar fechar imediatamente o menu.
    event.stopPropagation();
  }

  public goToItem(item) {
    this.menuService.mainMenuStatus$.next(false);
    this.router.navigateByUrl(item.url).then(r => this.open = false)
      .then(() => this.open = false);
  }

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    // Executa o toggle open se o usuário clicar fora do menu
    if (this.open == true && !this.eRef.nativeElement.contains(event.target)) {
      this.toggleOpen(event);
    }
  }

  deveExibir(item: MenuItemInterface) {
    // const user = this.userService.getUser();
    // return !(item.papel && (!user || !user.papeis.find(p => p.nomeMaquina == item.papel)));
    //return null;
    return true;
  }




}
