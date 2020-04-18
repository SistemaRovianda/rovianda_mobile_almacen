import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { LotInterface } from "../Models/lot.interface";

@Injectable({
  providedIn: "root",
})
export class PackagingService {
  API;

  constructor(private http: HttpClient) {
    this.API = `${environment.basePath}/packing`;
  }

  entrance(lot: LotInterface): Observable<any> {
    return new Observable((observer) => {
      console.log(lot);
      observer.next(lot);
      observer.complete();
    });
  }
}
