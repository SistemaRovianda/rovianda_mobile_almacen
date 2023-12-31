import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { Entrance, ExitLot } from "../models/dried.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DriedService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}/drief`;
  }

  openLot(body: Entrance, warehouseDriefId: string): Observable<any> {
    return this.http.patch<any>(`${this.url}/status/${warehouseDriefId}`, body);
  }

  closeLot(body: Entrance, warehouseDriefId: string): Observable<any> {
    return this.http.patch<any>(`${this.url}/status/${warehouseDriefId}`, body);
  }

  exitLot(body: ExitLot): Observable<any> {
    return this.http.post<any>(`${this.url}/exit`, body);
  }
}
