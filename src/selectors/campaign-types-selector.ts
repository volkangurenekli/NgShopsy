import { createFeatureSelector } from '@ngrx/store';
import { CampaignType } from '../model/campaign-type.model';

export const selectCampaignTypes = createFeatureSelector<Array<CampaignType>>('campaignTypes');