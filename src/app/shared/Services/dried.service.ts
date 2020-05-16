import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { Entrance, ExitLot } from "../Models/dried.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DriedService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}/dried`;
  }

  openLot(body: Entrance): Observable<any> {
    return this.http.patch<any>(`${this.url}/status`, body);
  }

  closeLot(body: Entrance) {
    this.http.post(`${this.url}/close`, body);
  }

  exitLot(body: ExitLot) {
    this.http.post(`${this.url}/exit`, body);
  }
}
