import {TestBed} from '@angular/core/testing';

import {EnderecoService} from './endereco.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('EnderecoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: EnderecoService = TestBed.get(EnderecoService);
    expect(service).toBeTruthy();
  });
});
