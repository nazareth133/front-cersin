import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltarTopoComponent } from './voltar-topo.component';

describe('VoltarTopoComponent', () => {
  let component: VoltarTopoComponent;
  let fixture: ComponentFixture<VoltarTopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltarTopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltarTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
