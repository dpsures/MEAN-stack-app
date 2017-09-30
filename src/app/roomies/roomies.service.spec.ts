import { TestBed, inject } from '@angular/core/testing';

import { RoomiesService } from './roomies.service';

describe('RoomiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomiesService]
    });
  });

  it('should be created', inject([RoomiesService], (service: RoomiesService) => {
    expect(service).toBeTruthy();
  }));
});
