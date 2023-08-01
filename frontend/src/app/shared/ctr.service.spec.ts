/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrService } from './ctr.service';

describe('Service: Ctr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrService]
    });
  });

  it('should ...', inject([CtrService], (service: CtrService) => {
    expect(service).toBeTruthy();
  }));
});
