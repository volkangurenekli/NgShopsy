import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSelectTypeComponent } from './campaign-select-type.component';

describe('CampaignSelectTypeComponent', () => {
  let component: CampaignSelectTypeComponent;
  let fixture: ComponentFixture<CampaignSelectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignSelectTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignSelectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
