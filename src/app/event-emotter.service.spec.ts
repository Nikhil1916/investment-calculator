import { TestBed } from '@angular/core/testing';

import { EventEmotterService } from './event-emotter.service';

describe('EventEmotterService', () => {
  let service: EventEmotterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmotterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
