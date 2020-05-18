import { Component, OnInit } from "@angular/core";
import { ExitLot } from "src/app/shared/Models/dried.interface";
import { ModalController } from "@ionic/angular";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { Store } from "@ngrx/store";
import * as fromActions from "../../store/output/output.actions";

@Component({
  selector: "app-generate-report",
  templateUrl: "./generate-report.component.html",
  styleUrls: ["./generate-report.component.scss"],
})
export class GenerateReportComponent implements OnInit {
  exitLot: ExitLot;

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.store.dispatch(fromActions.output({ payload: this.exitLot }));
    this.modalController.dismiss();
  }
}
