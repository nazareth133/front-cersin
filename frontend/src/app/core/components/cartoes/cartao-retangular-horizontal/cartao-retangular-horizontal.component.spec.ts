import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoRetangularHorizontalComponent } from './cartao-retangular-horizontal.component';

describe('CartaoRetangularHorizontalComponent', () => {
  let component: CartaoRetangularHorizontalComponent;
  let fixture: ComponentFixture<CartaoRetangularHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoRetangularHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoRetangularHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
