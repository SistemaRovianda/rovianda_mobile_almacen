import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { LotInterface } from "src/app/shared/models/lot.interface";
import * as fromActions from "../../store/exit/exit.actions";

@Component({
  selector: "app-generate-report",
  templateUrl: "./generate-report.component.html",
  styleUrls: ["./generate-report.component.scss"],
})
export class GenerateReportComponent implements OnInit {
  request: LotInterface;

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.store.dispatch(fromActions.exitLoadRequest({ request: this.request }));
    this.modalController.dismiss();
  }
}
