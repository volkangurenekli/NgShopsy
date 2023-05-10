import { createActionGroup, props } from "@ngrx/store";
import { CampaignType } from "src/model/campaign-type.model";

const CAMPAIGN_TYPES_LIST = "Received Campaign Types List";

export const campaignTypeActions = createActionGroup({
  source: "campaignTypes",
  events: {
    [CAMPAIGN_TYPES_LIST]: props<{ campaignTypes: CampaignType[] }>(),
  },
});
