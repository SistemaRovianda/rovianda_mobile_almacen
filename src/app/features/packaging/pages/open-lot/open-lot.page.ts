import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { lotResponse, STATUS_LOT } from "src/app/shared/Models/lot.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import {
  SELECT_PACKAGING_LOADING,
  SELECT_PACKAGING_LOTS,
} from "../../store/packaging/packaging.select";
import * as fromStepperActions from "../../store/stepper/stepper-packaging.actions";

@Component({
  selector: "app-open-lot",
  templateUrl: "./open-lot.page.html",
  styleUrls: ["./open-lot.page.scss"],
})
export class OpenLotePage implements OnInit {
  header: ItemBackInterface = {
    path: "/packaging/menu",
    titlePath: "Regresar",
    title: "Empaque",
  };

  lots: lotResponse[] = [];

  loading: boolean;

  status = STATUS_LOT;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    public modalController: ModalController
  ) {}

  lotForm = this.fb.group({
    serie: ["", [Validators.required]],
    product: ["", [Validators.required]],
    date: [new Date().toISOString(), [Validators.required]],
    status: [this.status.OPENED],
  });

  ngOnInit() {
    this.lotForm.valueChanges.subscribe((_) => this.checkValues());
    this.store
      .select(SELECT_PACKAGING_LOTS)
      .subscribe((tempLots) => (this.lots = tempLots));
    this.store
      .select(SELECT_PACKAGING_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));
  }

  get serie() {
    return this.lotForm.get("serie");
  }

  get product() {
    return this.lotForm.get("product");
  }

  get date() {
    return this.lotForm.get("date");
  }

  requestOpenLote() {
    this.openModal();
  }

  checkValues() {
    this.store.dispatch(
      fromStepperActions.packagingStepperNext({
        num: 1,
        step: this.lotForm.status !== "INVALID",
      })
    );
  }
  selectLot() {
    this.product.setValue("");
  }

  async openModal() {
    const lot = {
      loteId: this.serie.value.loteId,
      productId: this.product.value,
      date: new Date(this.date.value).toISOString().split("T")[0],
      status: "OPENED",
    };

    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        lot: lot,
        action: "abrir",
        type: "open",
      },
    });
    return await modal.present();
  }
}
