import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import {BreadcrumbComponent} from '../shared/layout/breadcrumb/breadcrumb.component';
import {CartaoComponent} from './components/cartao/cartao.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {IconChevronComponent} from './components/icons/icon-chevron/icon-chevron.component';
import {IconFilterComponent} from './components/icons/icon-filter/icon-filter.component';
import {IconHamburgerComponent} from './components/icons/icon-hamburger/icon-hamburger.component';
import {IconHomeComponent} from './components/icons/icon-home/icon-home.component';
import {LinkBoxComponent} from './components/link-box/link-box.component';
import {MensagensComponent} from './components/mensagens/mensagens.component';
import {MenuComponent} from '../shared/layout/menu/menu.component';
import {VoltarTopoComponent} from '../shared/layout/voltar-topo/voltar-topo.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import { CartaoRetangularHorizontalComponent } from './components/cartoes/cartao-retangular-horizontal/cartao-retangular-horizontal.component';
import { AbasComponent } from './components/abas/abas.component';
import { AbaComponent } from './components/aba/aba.component';
import {CpfPipe} from './pipes/cpf.pipe';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    CartaoComponent,
    DropdownComponent,
    IconChevronComponent,
    IconFilterComponent,
    IconHamburgerComponent,
    IconHomeComponent,
    LinkBoxComponent,
    MensagensComponent,
    MenuComponent,
    VoltarTopoComponent,
    CartaoRetangularHorizontalComponent,
    AbasComponent,
    AbaComponent,
    CpfPipe
  ],
  exports: [
    BreadcrumbComponent,
    CartaoComponent,
    DropdownComponent,
    IconChevronComponent,
    IconFilterComponent,
    IconHamburgerComponent,
    IconHomeComponent,
    LinkBoxComponent,
    MensagensComponent,
    MenuComponent,
    VoltarTopoComponent,
    AbasComponent,
    AbaComponent,
    CpfPipe,
    CartaoRetangularHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  providers: [
    CpfPipe,
    DatePipe,
    CurrencyPipe
  ]
})
export class CoreModule { }
