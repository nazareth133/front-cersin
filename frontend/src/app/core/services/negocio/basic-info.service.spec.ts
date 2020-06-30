import {TestBed} from '@angular/core/testing';

import {BasicInfoService} from './basic-info.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BasicInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: BasicInfoService = TestBed.get(BasicInfoService);
    expect(service).toBeTruthy();
  });
});
