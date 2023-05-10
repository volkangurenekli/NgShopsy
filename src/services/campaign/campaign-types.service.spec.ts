import { TestBed } from '@angular/core/testing';

import { CampaignTypesService } from './campaign-types.service';

describe('CampaignTypesService', () => {
  let service: CampaignTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
