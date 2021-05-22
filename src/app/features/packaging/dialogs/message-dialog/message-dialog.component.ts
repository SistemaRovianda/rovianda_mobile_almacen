import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { LotInterface } from "src/app/shared/models/lot.interface";
import * as fromActionsClose from "../../store/close-lot/close-lot.actions";
import * as fromActions from "../../store/open-lot/open-lot.actions";

@Component({
  selector: "app-message-dialog",
  templateUrl: "./message-dialog.component.html",
  styleUrls: ["./message-dialog.component.scss"],
})
export class MessageDialogComponent implements OnInit {
  lot: LotInterface;
  action: string;
  type: string;

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    if (this.type == "open") {
      this.store.dispatch(
        fromActions.openLotStarLoad({
          lot: this.lot,
        })
      );
    } else {
      this.store.dispatch(
        fromActionsClose.closeLotStartLoad({
          lot: this.lot,
        })
      );
    }
    this.modalController.dismiss();
  }
}
