import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { campaignTypesReducer } from "src/reducers/campaign-types.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ campaignTypes: campaignTypesReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
