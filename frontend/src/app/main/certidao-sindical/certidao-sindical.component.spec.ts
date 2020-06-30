import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertidaoSindicalComponent } from './certidao-sindical.component';

describe('CertidaoSindicalComponent', () => {
  let component: CertidaoSindicalComponent;
  let fixture: ComponentFixture<CertidaoSindicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertidaoSindicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertidaoSindicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
