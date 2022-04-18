import { TestBed } from '@angular/core/testing';

import { UsusarioService } from './ususario.service';

describe('UsusarioService', () => {
  let service: UsusarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsusarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
