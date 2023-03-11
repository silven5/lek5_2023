import { TestBed } from '@angular/core/testing';

import { LogService} from './log.service.ts.service';

describe('Log.Service.TsService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
