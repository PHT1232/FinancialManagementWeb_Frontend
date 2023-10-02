import { TestBed } from '@angular/core/testing';

import { ReciptServiceService } from './recipt-service.service';

describe('ReciptServiceService', () => {
  let service: ReciptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
