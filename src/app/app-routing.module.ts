import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CampaignComponent } from "./campaign/campaign.component";
import { CampaignSelectTypeComponent } from "./campaign-select-type/campaign-select-type.component";

const routes: Routes = [
  {
    path: "campaign/create/:id",
    pathMatch: 'full',
    component: CampaignComponent,
  },
  {
    path: "campaign/create",
    pathMatch: 'full',
    component: CampaignSelectTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
