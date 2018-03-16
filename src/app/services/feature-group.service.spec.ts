import { TestBed, inject } from '@angular/core/testing';

import { FeatureGroupService } from './feature-group.service';

describe('FeatureGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureGroupService]
    });
  });

  it('should be created', inject([FeatureGroupService], (service: FeatureGroupService) => {
    expect(service).toBeTruthy();
  }));
});
