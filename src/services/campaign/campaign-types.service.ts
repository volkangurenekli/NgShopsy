import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CampaignType } from "src/model/campaign-type.model";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CampaignTypesService {
  constructor(private http: HttpClient) {}

  getCampaignTypes(): Observable<CampaignType[]> {
    const data: CampaignType[] = [
      {
        name: "Sponsored Products",
        type: "products",
        description: "",
        img: "https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Sponsored Brands",
        type: "brands",
        description: "",
        img: "https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Sponsored Display",
        type: "display",
        description: "",
        img: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
      },
    ];
    return of(data);
    //return this.http.get<Campaign[]>("url");
  }
}
