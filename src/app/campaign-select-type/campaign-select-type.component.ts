import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignTypesService } from "src/services/campaign/campaign-types.service";
import { Store } from "@ngrx/store";
import { selectCampaignTypes } from "../../selectors/campaign-types-selector";
import { campaignTypeActions } from "src/actions/campaign-type.action";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-campaign-select-type",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./campaign-select-type.component.html",
  styleUrls: ["./campaign-select-type.component.scss"],
})
export class CampaignSelectTypeComponent implements OnInit {
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
