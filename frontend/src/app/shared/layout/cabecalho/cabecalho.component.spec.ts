import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CabecalhoComponent} from './cabecalho.component';
import {Component, Input} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          CabecalhoComponent,
          MenuDropDownTestComponent
      ],
      imports: [
          HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
    component.info = {
      classificacao: "Ministério",
      nomeOrgao: "Economia",
      nomeServico: "Venda de Imóveis"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: '[app-dropdown]',
  template: '<h2>Dropdown de teste</h2>'
})
class MenuDropDownTestComponent {
  @Input() menuItems;
}
