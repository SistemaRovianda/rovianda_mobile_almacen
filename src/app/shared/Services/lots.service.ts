import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { LotInterface } from "../Models/lot.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LotsService {
  API;

  constructor(private http: HttpClient) {
    this.API = `${environment.basePath}/losts`;
  }

  lotsFake: LotInterface[] = [
    {
      loteId: 4525,
      name: "lote1",
    },
    {
      loteId: 4526,
      name: "lote2",
    },
    {
      loteId: 4527,
      name: "lote3",
    },
    {
      loteId: 4528,
      name: "lote4",
    },
  ];

  getLots(): Observable<any> {
    return new Observable((observer) => {
      observer.next(this.lotsFake);
      observer.complete();
    });
  }
}
