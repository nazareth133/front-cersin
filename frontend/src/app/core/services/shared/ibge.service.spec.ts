import {TestBed} from '@angular/core/testing';

import {IbgeService} from './ibge.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('IbgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: IbgeService = TestBed.get(IbgeService);
    expect(service).toBeTruthy();
  });
});
