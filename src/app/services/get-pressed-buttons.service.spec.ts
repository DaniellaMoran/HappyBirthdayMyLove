import { TestBed } from '@angular/core/testing';

import { GetPressedButtonsService } from './get-pressed-buttons.service';

describe('GetPressedButtonsService', () => {
  let service: GetPressedButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPressedButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
