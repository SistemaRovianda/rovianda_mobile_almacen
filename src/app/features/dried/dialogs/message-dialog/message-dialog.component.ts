import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Entrance } from "src/app/shared/Models/dried.interface";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { Store } from "@ngrx/store";
import * as fromActions from "../../store/open-lot/open-lot.actions";
import * as fromActionsClose from "../../store/close-lot/close-lot.actions";

@Component({
  selector: "app-message-dialog",
  templateUrl: "./message-dialog.component.html",
  styleUrls: ["./message-dialog.component.scss"],
})
export class MessageDialogComponent implements OnInit {
  entrance: Entrance;
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
      this.store.dispatch(fromActions.openLot({ payload: this.entrance }));
    } else {
      this.store.dispatch(
        fromActionsClose.closeLot({ payload: this.entrance })
      );
    }
    this.modalController.dismiss();
  }
}
