import { on, createReducer } from "@ngrx/store";
import { campaignTypeActions } from "src/actions/campaign-type.action";
import { CampaignType } from "src/model/campaign-type.model";

export const initialState: CampaignType[] = [];

export const campaignTypesReducer = createReducer(
  initialState,
  on(
    campaignTypeActions.receivedCampaignTypesList,
    (_, { campaignTypes }) => campaignTypes
  )
);
