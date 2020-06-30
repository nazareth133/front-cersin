import {TestBed} from '@angular/core/testing';

import {MensagensService} from './mensagens.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MensagensService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: MensagensService = TestBed.get(MensagensService);
    expect(service).toBeTruthy();
  });
});
