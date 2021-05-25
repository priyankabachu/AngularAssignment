import { TestBed } from '@angular/core/testing';

import { FileHistoryService } from './file-history.service';

describe('FileHistoryService', () => {
  let service: FileHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
