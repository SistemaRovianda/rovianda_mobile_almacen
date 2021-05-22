import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { LotInterface } from "../models/lot.interface";

@Injectable({
  providedIn: "root",
})
export class PackagingService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.basePath}/packing`;
  }

  entrance(lot: LotInterface): Observable<any> {
    return this.http.patch<any>(`${this.url}/status`, lot);
  }

  close(lot: LotInterface): Observable<any> {
    // return this.http.post<any>(`${this.url}/close`, lot);

    return new Observable((observer) => {
      observer.next(lot);
      observer.complete();
    });
  }

  exit(lot: LotInterface): Observable<any> {
    return this.http.post<any>(`${this.url}/exit`, lot);
  }
}
