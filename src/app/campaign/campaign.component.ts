import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignTypesService } from "src/services/campaign/campaign-types.service";
import { Store } from "@ngrx/store";
import { selectCampaignTypes } from "../../selectors/campaign-types-selector";
import { campaignTypeActions } from "src/actions/campaign-type.action";

@Component({
  selector: "app-campaign",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./campaign.component.html",
  styleUrls: ["./campaign.component.scss"],
})
export class CampaignComponent implements OnInit {
  campaignTypes$ = this.store.select(selectCampaignTypes);

  constructor(
    private store: Store,
    private campaignTypesService: CampaignTypesService
  ) {}

  ngOnInit() {
    this.campaignTypesService.getCampaignTypes().subscribe((campaignTypes) => {
      this.store.dispatch(
        campaignTypeActions.receivedCampaignTypesList({ campaignTypes })
      );
    });
  }
}
